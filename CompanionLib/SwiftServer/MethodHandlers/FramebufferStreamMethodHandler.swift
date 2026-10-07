/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Accelerate
import CompanionUtilities
import FBControlCore
import FBSimulatorControl
import Foundation
import GRPCCore
import IDBGRPCSwift
@preconcurrency import IOSurface

internal import AppetizeSHM

enum FramebufferStreamError: Error, LocalizedError {
  case simulatorRequired(targetDescription: String)
  case noSurface
  case surfaceNotLockable
  case sharedMemoryOpenFailed(name: String, errno: Int32)
  case sharedMemoryMapFailed(name: String, errno: Int32)
  case sharedMemoryTooSmall(name: String, needed: Int, available: UInt64)
  case scaleFailed(status: Int)
  case scaleChanged(latched: Float?, requested: Float)

  var errorDescription: String? {
    switch self {
    case let .simulatorRequired(targetDescription):
      return "\(targetDescription) is not a simulator; framebuffer streaming is simulator-only"
    case .noSurface:
      return "The display has no backing IOSurface yet"
    case .surfaceNotLockable:
      return "The framebuffer's IOSurface could not be locked for reading"
    case let .sharedMemoryOpenFailed(name, errno):
      return "Failed to open shared memory \(name): \(String(cString: strerror(errno)))"
    case let .sharedMemoryMapFailed(name, errno):
      return "Failed to map shared memory \(name): \(String(cString: strerror(errno)))"
    case let .sharedMemoryTooSmall(name, needed, available):
      return "Shared memory \(name) holds \(available) bytes, the frame needs \(needed)"
    case let .scaleFailed(status):
      return "Scaling the framebuffer failed (vImage status \(status))"
    case let .scaleChanged(latched, requested):
      let was = latched.map { "\($0)" } ?? "none"
      return "The stream was opened at scale \(was); a later request asked for \(requested). The scale is fixed for the life of the stream"
    }
  }
}

/// The geometry of one framebuffer copy, in the units the client's shared-memory reader needs.
private struct FramebufferGeometry {
  let width: Int
  let height: Int
  let rowSize: Int
  let format: String

  var frameSize: Int { rowSize * height }

  func proto(configuration: SimulatorDisplayConfiguration?) -> Idb_FramebufferInfo {
    Idb_FramebufferInfo.with {
      $0.width = UInt32(width)
      $0.height = UInt32(height)
      $0.rowSize = UInt32(rowSize)
      $0.frameSize = UInt32(frameSize)
      $0.format = format
      guard let configuration else { return }
      $0.configurationGeneration = configuration.generation
      if case let .identified(display) = configuration.active {
        $0.displayUniqueID = display.uniqueID
        $0.rotation = Idb_DisplayRotation(display.rotation)
      }
    }
  }
}

extension Idb_DisplayRotation {
  init(_ rotation: SimulatorDisplayRotation) {
    switch rotation {
    case .upright: self = .rot0
    case .clockwise: self = .rot90
    case .upsideDown: self = .rot180
    case .counterclockwise: self = .rot270
    }
  }
}

/// Copies the simulator's framebuffer into client-owned POSIX shared memory on demand.
///
/// A pull protocol rather than a push one: the client names a shared-memory region and the display's
/// current frame is copied into it. The request carries the buffer, so a copy is answered when it is
/// asked for rather than on the next rendered frame, which a still display would never produce.
struct FramebufferStreamMethodHandler: @unchecked Sendable {

  let target: any Target
  let targetLogger: any ControlCoreLogger

  func handle(requestStream: RequestStreamReader<Idb_FramebufferStreamRequest>, responseStream: RPCWriter<Idb_FramebufferStreamResponse>, context: ServerContext) async throws {
    guard let simulator = target as? Simulator else {
      throw RPCError(code: .failedPrecondition, message: FramebufferStreamError.simulatorRequired(targetDescription: String(describing: target)).localizedDescription)
    }

    // Follows the active display, so a foldable's stream moves between its panels.
    let framebuffer = try await simulator.framebuffer.connect()
    let attachment = try framebuffer.attach()
    defer { attachment.cancel() }

    let state = FramebufferStreamState(surface: attachment.initialSurface)

    // The request loop returns on `stop`; the frame loop runs until the attachment finishes. Whichever
    // ends first tears the other down, so a client disconnect and a display teardown both land here.
    let requests = Task {
      try await readRequests(requestStream, into: state, responseStream: responseStream)
    }
    let frames = Task {
      try await serviceFrames(attachment, state: state)
    }
    defer {
      requests.cancel()
      frames.cancel()
    }
    _ = try await Task.select(requests, frames).value
  }

  // MARK: - Loops

  /// Reads control frames. A zero-length copy request is a geometry probe and is answered at once,
  /// so a client can learn the frame size without waiting for the display to render.
  private func readRequests(
    _ requestStream: RequestStreamReader<Idb_FramebufferStreamRequest>,
    into state: FramebufferStreamState,
    responseStream: RPCWriter<Idb_FramebufferStreamResponse>
  ) async throws {
    for try await request in requestStream {
      switch request.control {
      case let .copyFramebuffer(copy):
        guard copy.sharedMemoryLength > 0 else {
          try await responseStream.send(await probeResponse(for: copy, state: state))
          continue
        }
        // Answered from the current surface rather than on the next rendered frame: a client pulls
        // when it wants a frame, and a still display renders none to wait for.
        try await responseStream.send(await copyResponse(for: copy, state: state))
      case .stop, .none:
        return
      }
    }
  }

  /// Tracks the surface and display configuration the stream reads, and ends when the display tears
  /// down or the framebuffer stops capturing it.
  private func serviceFrames(
    _ attachment: FramebufferAttachment,
    state: FramebufferStreamState
  ) async throws {
    defer { state.finish() }
    for await event in attachment.events {
      switch event {
      case let .surfaceChanged(surface):
        state.surface = surface
      case let .configurationChanged(configuration):
        state.configuration = configuration
      case .frameRendered:
        continue
      case let .ended(error):
        targetLogger.log("Framebuffer stream ended: \(error)")
        return
      }
    }
  }

  // MARK: - Responses

  private func probeResponse(for copy: Idb_FramebufferStreamRequest.CopyFramebuffer, state: FramebufferStreamState) async -> Idb_FramebufferStreamResponse {
    let awaited = await state.awaitSurface()
    return Idb_FramebufferStreamResponse.with {
      $0.sharedMemoryName = copy.sharedMemoryName
      do {
        guard let surface = awaited else { throw FramebufferStreamError.noSurface }
        let scale = try state.scale(requesting: copy.hasScaleFactor ? copy.scaleFactor : nil)
        $0.framebufferInfo = Self.geometry(of: surface, scaleFactor: scale).proto(configuration: state.configuration)
      } catch {
        $0.error = error.localizedDescription
      }
    }
  }

  private func copyResponse(for copy: Idb_FramebufferStreamRequest.CopyFramebuffer, state: FramebufferStreamState) async -> Idb_FramebufferStreamResponse {
    let awaited = await state.awaitSurface()
    return Idb_FramebufferStreamResponse.with {
      $0.sharedMemoryName = copy.sharedMemoryName
      do {
        guard let surface = awaited else { throw FramebufferStreamError.noSurface }
        let scale = try state.scale(requesting: copy.hasScaleFactor ? copy.scaleFactor : nil)
        let geometry = Self.geometry(of: surface, scaleFactor: scale)
        let written = try Self.copy(
          surface: surface,
          into: copy.sharedMemoryName,
          capacity: copy.sharedMemoryLength,
          geometry: geometry)
        $0.bytesWritten = UInt64(written)
        $0.framebufferInfo = geometry.proto(configuration: state.configuration)
      } catch {
        $0.error = error.localizedDescription
      }
    }
  }

  // MARK: - Surface access

  /// The geometry a copy will produce. `scaleFactor` shrinks both dimensions; the row size is
  /// recomputed tightly rather than carried over, so the client reads a packed frame.
  private static func geometry(of surface: IOSurface, scaleFactor: Float?) -> FramebufferGeometry {
    let sourceWidth = IOSurfaceGetWidth(surface)
    let sourceHeight = IOSurfaceGetHeight(surface)
    let format = Self.formatName(IOSurfaceGetPixelFormat(surface))

    guard let scaleFactor, scaleFactor > 0, scaleFactor != 1 else {
      return FramebufferGeometry(width: sourceWidth, height: sourceHeight, rowSize: IOSurfaceGetBytesPerRow(surface), format: format)
    }
    let width = max(1, Int((Float(sourceWidth) * scaleFactor).rounded()))
    let height = max(1, Int((Float(sourceHeight) * scaleFactor).rounded()))
    return FramebufferGeometry(width: width, height: height, rowSize: width * 4, format: format)
  }

  /// The four-character code for an `OSType`, matching what `UTCreateStringForOSType` produced for
  /// the pixel-buffer path this replaced (`BGRA` for the simulator's surfaces).
  private static func formatName(_ osType: OSType) -> String {
    let bytes = [
      UInt8((osType >> 24) & 0xFF),
      UInt8((osType >> 16) & 0xFF),
      UInt8((osType >> 8) & 0xFF),
      UInt8(osType & 0xFF),
    ]
    return String(decoding: bytes, as: UTF8.self)
  }

  private static func copy(surface: IOSurface, into name: String, capacity: UInt64, geometry: FramebufferGeometry) throws -> Int {
    guard geometry.frameSize <= capacity else {
      throw FramebufferStreamError.sharedMemoryTooSmall(name: name, needed: geometry.frameSize, available: capacity)
    }

    let descriptor = name.withCString { appetize_shm_open($0, O_RDWR, 0) }
    guard descriptor >= 0 else {
      throw FramebufferStreamError.sharedMemoryOpenFailed(name: name, errno: errno)
    }
    defer { close(descriptor) }

    let mapped = mmap(nil, Int(capacity), PROT_READ | PROT_WRITE, MAP_SHARED, descriptor, 0)
    guard let mapped, mapped != MAP_FAILED else {
      throw FramebufferStreamError.sharedMemoryMapFailed(name: name, errno: errno)
    }
    defer { munmap(mapped, Int(capacity)) }

    guard IOSurfaceLock(surface, .readOnly, nil) == kIOReturnSuccess else {
      throw FramebufferStreamError.surfaceNotLockable
    }
    defer { IOSurfaceUnlock(surface, .readOnly, nil) }

    guard let base = IOSurfaceGetBaseAddress(surface) as UnsafeMutableRawPointer? else {
      throw FramebufferStreamError.noSurface
    }

    let sourceWidth = IOSurfaceGetWidth(surface)
    let sourceHeight = IOSurfaceGetHeight(surface)
    let sourceRowSize = IOSurfaceGetBytesPerRow(surface)

    if geometry.width == sourceWidth && geometry.height == sourceHeight {
      memcpy(mapped, base, geometry.frameSize)
      return geometry.frameSize
    }

    var source = vImage_Buffer(data: base, height: vImagePixelCount(sourceHeight), width: vImagePixelCount(sourceWidth), rowBytes: sourceRowSize)
    var destination = vImage_Buffer(data: mapped, height: vImagePixelCount(geometry.height), width: vImagePixelCount(geometry.width), rowBytes: geometry.rowSize)
    let status = vImageScale_ARGB8888(&source, &destination, nil, vImage_Flags(kvImageNoFlags))
    guard status == kvImageNoError else {
      throw FramebufferStreamError.scaleFailed(status: status)
    }
    return geometry.frameSize
  }
}

/// The surface the display currently holds. Written by the frame loop and read by the request loop,
/// so every access is behind the lock.
private final class FramebufferStreamState: @unchecked Sendable {

  private let lock = NSLock()
  private var currentSurface: IOSurface?
  private var currentConfiguration: SimulatorDisplayConfiguration?
  private var surfaceWaiters: [CheckedContinuation<IOSurface?, Never>] = []
  private var finished = false
  private var scaleLatched = false
  private var latchedScale: Float?

  init(surface: IOSurface?) {
    self.currentSurface = surface
  }

  var surface: IOSurface? {
    get { lock.withLock { currentSurface } }
    set {
      let waiting: [CheckedContinuation<IOSurface?, Never>] = lock.withLock {
        currentSurface = newValue
        guard newValue != nil else { return [] }
        defer { surfaceWaiters.removeAll() }
        return surfaceWaiters
      }
      for waiter in waiting { waiter.resume(returning: newValue) }
    }
  }

  /// The display configuration the framebuffer last reported. Nil while it reads the main screen.
  var configuration: SimulatorDisplayConfiguration? {
    get { lock.withLock { currentConfiguration } }
    set { lock.withLock { currentConfiguration = newValue } }
  }

  /// The display's current surface, waiting for its first one when it has none yet.
  ///
  /// A client can attach before the display has rendered, which is what boot verification does.
  /// Answering that with an error rather than waiting would fail a boot that only needed a moment.
  /// Returns nil once the display has torn down, so a waiter cannot outlive the stream.
  func awaitSurface() async -> IOSurface? {
    await withCheckedContinuation { continuation in
      let ready: IOSurface?? = lock.withLock {
        if let currentSurface { return .some(currentSurface) }
        if finished { return .some(nil) }
        surfaceWaiters.append(continuation)
        return nil
      }
      if let ready { continuation.resume(returning: ready) }
    }
  }

  /// Releases every waiter. Called when the display's event stream ends, however it ends.
  func finish() {
    let waiting: [CheckedContinuation<IOSurface?, Never>] = lock.withLock {
      finished = true
      defer { surfaceWaiters.removeAll() }
      return surfaceWaiters
    }
    for waiter in waiting { waiter.resume(returning: nil) }
  }

  /// The scale the stream runs at, fixed by the first request that names one. The geometry a client
  /// probed has to stay true for every frame after it, so a later request naming a different scale is
  /// an error rather than a silent resize; one naming none keeps the latched value.
  func scale(requesting requested: Float?) throws -> Float? {
    try lock.withLock {
      guard scaleLatched else {
        scaleLatched = true
        latchedScale = requested
        return latchedScale
      }
      if let requested, requested != latchedScale {
        throw FramebufferStreamError.scaleChanged(latched: latchedScale, requested: requested)
      }
      return latchedScale
    }
  }
}
