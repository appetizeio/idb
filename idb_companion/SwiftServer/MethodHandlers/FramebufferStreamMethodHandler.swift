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

    let streamWriter = FIFOStreamWriter(stream: responseStream)
    let consumer = FBBlockDataConsumer.synchronousDataConsumer { data in
      guard !_finished.wrappedValue else { return }
      let copyFramebufferRequest: CopyFramebufferRequest?  = _copyFramebufferRequestQueue.sync { queue in
        guard !queue.isEmpty else { return nil }
        return queue.removeFirst()
      }
          
      if let copyFramebufferRequest = copyFramebufferRequest {
          let bytesWritten = copyFrameToSharedMemory(data: data, sharedMemoryName: copyFramebufferRequest.sharedMemoryName, sharedMemoryLength: copyFramebufferRequest.sharedMemoryLength)
        let response = Idb_FramebufferStreamResponse.with {
          $0.sharedMemoryName = copyFramebufferRequest.sharedMemoryName
          $0.bytesWritten = bytesWritten
        }
        do {
          try streamWriter.send(response)
        } catch {
          _finished.set(true)
        }
      }
    }

    let config = FBVideoStreamConfiguration(
      encoding: .BGRA,
      framesPerSecond: nil,
      compressionQuality: nil,
      scaleFactor: nil,
      avgBitrate: nil,
      keyFrameRate: nil
    )
    guard let simulatorVideoStream = try await BridgeFuture.value(target.createStream(with: config)) as? FBSimulatorVideoStream else { throw GRPCStatus(code: .internalError, message: "Framebuffer stream can only be used with a simulator device") };

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

  private func copyFrameToSharedMemory(data: Data, sharedMemoryName: String, sharedMemoryLength: UInt64) -> UInt64 {
    let bytesToCopy = min(UInt64(data.count), sharedMemoryLength)
    let shmFd = shmopen(sharedMemoryName, O_RDWR, 0666)
    if shmFd == -1 {
      targetLogger.log("shm_open(\(sharedMemoryName), O_RDWR, 0666) failed with \(errno)")
      return 0
    }
        
    defer {
      close(shmFd)
    }
        
    let mappedMemory = mmap(nil, Int(sharedMemoryLength), PROT_WRITE, MAP_SHARED, shmFd, 0)
    if mappedMemory == MAP_FAILED {
      targetLogger.log("mmap() failed with \(errno)")
      return 0
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
