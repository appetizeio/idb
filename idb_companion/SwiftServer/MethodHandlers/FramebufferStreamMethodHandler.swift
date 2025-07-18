/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CompanionLib
import FBSimulatorControl
import GRPC
import IDBCompanionUtilities
import IDBGRPCSwift

enum FramebufferCopyError: Error, LocalizedError {
  case missingPixelBufferAttributes
  case missingKey(String)
  case sharedMemoryCopyError(String)

  var errorDescription: String? {
    switch self {
    case .missingPixelBufferAttributes:
      return "Pixel buffer attributes are not available"
    case .missingKey(let key):
      return "Pixel buffer attributes do not contain \(key)"
    case .sharedMemoryCopyError(let description):
      return description
    }
  }
}

struct FramebufferStreamMethodHandler {

  let target: FBiOSTarget
  let targetLogger: FBControlCoreLogger
  let commandExecutor: FBIDBCommandExecutor

  func handle(requestStream: GRPCAsyncRequestStream<Idb_FramebufferStreamRequest>, responseStream: GRPCAsyncResponseStreamWriter<Idb_FramebufferStreamResponse>, context: GRPCAsyncServerCallContext) async throws {
    struct CopyFramebufferRequest {
      let sharedMemoryName: String
      let sharedMemoryLength: UInt64
    }

    @Atomic var finished = false
    @Atomic var copyFramebufferRequestQueue: [CopyFramebufferRequest] = []

    let config = FBVideoStreamConfiguration(
      encoding: .BGRA,
      framesPerSecond: nil,
      compressionQuality: nil,
      scaleFactor: nil,
      avgBitrate: nil,
      keyFrameRate: nil
    )
    guard let simulatorVideoStream = try await BridgeFuture.value(target.createStream(with: config)) as? FBSimulatorVideoStream else { throw GRPCStatus(code: .internalError, message: "Framebuffer stream can only be used with a simulator device") };

    let streamWriter = FIFOStreamWriter(stream: responseStream)
    let consumer = FBBlockDataConsumer.synchronousDataConsumer { data in
      guard !_finished.wrappedValue else { return }
      guard let copyFramebufferRequest: CopyFramebufferRequest  = _copyFramebufferRequestQueue.sync(execute: { queue in
        guard !queue.isEmpty else { return nil }
        return queue.removeFirst()
      }) else {
        return
      }

      var response = Idb_FramebufferStreamResponse.with {
        $0.sharedMemoryName = copyFramebufferRequest.sharedMemoryName
      }
      do {
        guard let pixelBufferAttributes = simulatorVideoStream.pixelBufferAttributes else {
          throw FramebufferCopyError.missingPixelBufferAttributes
        }
        guard let width = (pixelBufferAttributes["width"] as? NSNumber)?.uint32Value else {
          throw FramebufferCopyError.missingKey("width")
        }
        guard let height = (pixelBufferAttributes["height"] as? NSNumber)?.uint32Value else {
          throw  FramebufferCopyError.missingKey("height")
        }
        guard let rowSize = (pixelBufferAttributes["row_size"] as? NSNumber)?.uint32Value else {
          throw  FramebufferCopyError.missingKey("row_size")
        }
        guard let frameSize = (pixelBufferAttributes["frame_size"] as? NSNumber)?.uint32Value else {
          throw  FramebufferCopyError.missingKey("frame_size")
        }
        guard let format = (pixelBufferAttributes["format"] as? NSString) else {
          throw  FramebufferCopyError.missingKey("frame_size")
        }
        response.framebufferInfo = Idb_FramebufferInfo.with {
          $0.width = width
          $0.height = height
          $0.rowSize = rowSize
          $0.frameSize = frameSize
          $0.format = format as String
        }
        response.bytesWritten = try copyFrameToSharedMemory(data: data, sharedMemoryName: copyFramebufferRequest.sharedMemoryName, sharedMemoryLength: copyFramebufferRequest.sharedMemoryLength)
      } catch {
        targetLogger.error().log(error.localizedDescription)
        response.error = error.localizedDescription
      }
      do {
        try streamWriter.send(response)
      } catch {
        targetLogger.error().log(error.localizedDescription)
        _finished.set(true)
      }
    }

    try await BridgeFuture.await(simulatorVideoStream.startStreaming(consumer))

    let observeClientCancelStreaming = Task<Void, Error> {
      for try await request in requestStream {
        switch request.control {
        case .stop:
          return
        case .copyFramebuffer(let copyFramebufferRequest):
          _copyFramebufferRequestQueue.sync { queue in
            queue.append(CopyFramebufferRequest(
              sharedMemoryName: copyFramebufferRequest.sharedMemoryName,
              sharedMemoryLength: copyFramebufferRequest.sharedMemoryLength
            ))
          }
          simulatorVideoStream.pushFrame()
          break
        case .none:
          throw GRPCStatus(code: .invalidArgument, message: "Client should not close request stream explicitly, send `stop` frame first")
        }
      }
    }

    let observeFramebufferStreamStop = Task<Void, Error> { 
      try await BridgeFuture.await(simulatorVideoStream.completed)
    }

    try await Task.select(observeClientCancelStreaming, observeFramebufferStreamStop).value

    try await BridgeFuture.await(simulatorVideoStream.stopStreaming())
    targetLogger.log("The framebuffer stream is terminated")
  }

  private func copyFrameToSharedMemory(data: Data, sharedMemoryName: String, sharedMemoryLength: UInt64) throws -> UInt64 {
    let bytesToCopy = min(UInt64(data.count), sharedMemoryLength)
    let mode: UInt16 = 0666
    let shmFd = shmopen(sharedMemoryName, O_RDWR, mode)
    if shmFd == -1 {
      throw FramebufferCopyError.sharedMemoryCopyError("shm_open(\(sharedMemoryName), O_RDWR, 0666) failed with \(errno)")
    }
        
    defer {
      close(shmFd)
    }
        
    let mappedMemory = mmap(nil, Int(sharedMemoryLength), PROT_WRITE, MAP_SHARED, shmFd, 0)
    if mappedMemory == MAP_FAILED {
      throw FramebufferCopyError.sharedMemoryCopyError("mmap() failed with \(errno)")
    }
        
    defer {
      munmap(mappedMemory, Int(sharedMemoryLength))
    }
        
    data.withUnsafeBytes { dataBytes in
      let sourcePtr = dataBytes.baseAddress!
      let destPtr = mappedMemory?.assumingMemoryBound(to: UInt8.self)
      memcpy(destPtr, sourcePtr, Int(bytesToCopy))
    }
        
    return bytesToCopy
  }
}
