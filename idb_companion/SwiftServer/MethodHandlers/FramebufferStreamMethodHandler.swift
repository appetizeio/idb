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
    @Atomic var finished = false
    @Atomic var copyRequestQueue: [(name: String, length: UInt64, completion: (String, UInt64) -> Void)] = []

    let framebufferStream = try await startFramebufferStream(
      responseStream: responseStream,
      finished: _finished,
      copyRequestQueue: _copyRequestQueue)

    let observeClientCancelStreaming = Task<Void, Error> {
      for try await request in requestStream {
        switch request.control {
        case .stop:
          return
        case .copyFramebuffer(let copyRequest):
          try await withCheckedThrowingContinuation { continuation in
            _copyRequestQueue.sync { queue in
              queue.append((
                name: copyRequest.sharedMemoryName,
                length: copyRequest.sharedMemoryLength,
                completion: { name, bytesWritten in
                  Task {
                    let response = Idb_FramebufferStreamResponse.with {
                      $0.sharedMemoryName = name
                      $0.bytesWritten = bytesWritten
                    }
                    do {
                      try await responseStream.send(response)
                      continuation.resume()
                    } catch {
                      continuation.resume(throwing: error)
                    }
                  }
                }
              ))
            }
          }
        case .none:
          throw GRPCStatus(code: .invalidArgument, message: "Client should not close request stream explicitly, send `stop` frame first")
        }
      }
    }

    let observeFramebufferStreamStop = Task<Void, Error> { 
      try await BridgeFuture.await(framebufferStream.completed)
    }

    try await Task.select(observeClientCancelStreaming, observeFramebufferStreamStop).value

    try await BridgeFuture.await(framebufferStream.stopStreaming())
    targetLogger.log("The framebuffer stream is terminated")
  }

  private func startFramebufferStream(responseStream: GRPCAsyncResponseStreamWriter<Idb_FramebufferStreamResponse>, finished: Atomic<Bool>, copyRequestQueue: Atomic<[(name: String, length: UInt64, completion: (String, UInt64) -> Void)]>) async throws -> FBVideoStream {
    let consumer = FBBlockDataConsumer.synchronousDataConsumer { data in
      guard !finished.wrappedValue else { return }
      let copyRequest: (name: String, length: UInt64, completion: (String, UInt64) -> Void)?  = copyRequestQueue.sync { queue in
        guard !queue.isEmpty else { return nil }
        return queue.removeFirst()
      }
        
      if let copyRequest = copyRequest {
        let bytesWritten = copyFrameToSharedMemory(data: data, sharedMemoryName: copyRequest.name, sharedMemoryLength: copyRequest.length)
        copyRequest.completion(copyRequest.name, bytesWritten)
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
    let framebufferStream = try await BridgeFuture.value(target.createStream(with: config))

    try await BridgeFuture.await(framebufferStream.startStreaming(consumer))

    return framebufferStream
  }
    
  private func copyFrameToSharedMemory(data: Data, sharedMemoryName: String, sharedMemoryLength: UInt64) -> UInt64 {
    let bytesToCopy = min(UInt64(data.count), sharedMemoryLength)
    let shmFd = shmopen(sharedMemoryName, O_RDWR, 0)
    if shmFd == -1 {
      targetLogger.log("shm_open(\(sharedMemoryName), O_RDWR, 0) failed with \(errno)")
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
