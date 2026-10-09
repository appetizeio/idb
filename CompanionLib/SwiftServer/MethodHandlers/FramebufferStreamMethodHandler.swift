/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Accelerate
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
  case copyFailed(status: Int)
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
    case let .copyFailed(status):
      return "Copying the framebuffer failed (vImage status \(status))"
    case let .scaleChanged(latched, requested):
      let was = latched.map { "\($0)" } ?? "none"
      return "The stream was opened at scale \(was); a later request asked for \(requested). The scale is fixed for the life of the stream"
    }
  }
}

/// The geometry of one framebuffer copy, in the units the client's shared-memory reader needs. Rows are
/// packed, so a client can size its buffer from a display's dimensions alone.
private struct FramebufferGeometry {
  let width: Int
  let height: Int
  let format: String

  var rowSize: Int { width * 4 }
  var frameSize: Int { rowSize * height }

  var proto: Idb_FramebufferInfo {
    Idb_FramebufferInfo.with {
      $0.width = UInt32(width)
      $0.height = UInt32(height)
      $0.rowSize = UInt32(rowSize)
      $0.frameSize = UInt32(frameSize)
      $0.format = format
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

/// What the handler's single loop reads: the client's requests and the framebuffer's events, in the order
/// they arrive.
private enum FramebufferStreamInput: Sendable {
  case request(Idb_FramebufferStreamRequest)
  case requestsEnded((any Error)?)
  case event(FramebufferEvent)
  case eventsEnded
}

/// Copies the simulator's framebuffer into client-owned POSIX shared memory on demand.
///
/// A pull protocol rather than a push one: the client names a shared-memory region and the display's
/// current frame is copied into it. The request carries the buffer, so a copy is answered when it is
/// asked for rather than on the next rendered frame, which a still display would never produce.
///
/// The displays the stream reads from are pushed as `FramebufferDisplays`, before the first frame and
/// whenever they change. One loop sends both, so every frame follows the displays it was read from.
struct FramebufferStreamMethodHandler: @unchecked Sendable {

  let target: any Target
  let targetLogger: any ControlCoreLogger

  func handle(requestStream: RequestStreamReader<Idb_FramebufferStreamRequest>, responseStream: RPCWriter<Idb_FramebufferStreamResponse>, context: ServerContext) async throws {
    guard let simulator = target as? Simulator else {
      throw RPCError(code: .failedPrecondition, message: FramebufferStreamError.simulatorRequired(targetDescription: String(describing: target)).localizedDescription)
    }

    // Follows the active display, so a foldable's stream moves between its panels.
    // Ends with the RPC, so a client that gives up does not leave the wait running.
    try await withRPCCancellation(context.cancellation) {
      await awaitDisplayActivity(of: simulator)
    }
    let framebuffer = try await simulator.framebuffer.connect()
    let attachment = try framebuffer.attach()
    defer { attachment.cancel() }

    let (inputs, continuation) = AsyncStream<FramebufferStreamInput>.makeStream()
    let requests = Task {
      do {
        for try await request in requestStream {
          continuation.yield(.request(request))
        }
        continuation.yield(.requestsEnded(nil))
      } catch {
        continuation.yield(.requestsEnded(error))
      }
    }
    let events = Task {
      for await event in attachment.events {
        continuation.yield(.event(event))
      }
      continuation.yield(.eventsEnded)
    }
    defer {
      requests.cancel()
      events.cancel()
      continuation.finish()
    }

    // Returns on `stop`, when the client's requests end, or when the display tears down.
    var state = FramebufferStreamState(surface: attachment.initialSurface)
    for await input in inputs {
      switch input {
      case let .request(request):
        switch request.control {
        case let .copyFramebuffer(copy):
          state.waitingCopies.append(copy)
        case .stop, .none:
          return
        }
      case let .requestsEnded(error):
        if let error { throw error }
        return
      case let .event(event):
        state.apply(event, logger: targetLogger)
      case .eventsEnded:
        for copy in state.waitingCopies {
          try await responseStream.send(Self.failedResponse(for: copy, error: FramebufferStreamError.noSurface))
        }
        return
      }
      if let displays = state.unannouncedDisplays() {
        try await responseStream.send(Idb_FramebufferStreamResponse.with { $0.displays = displays })
      }
      // Answered from the current surface rather than on the next rendered frame: a client pulls when
      // it wants a frame, and a still display renders none to wait for. A client can ask before the
      // display has rendered, which is what boot verification does, so those copies wait for a surface.
      guard let surface = state.surface else { continue }
      let copies = state.waitingCopies
      state.waitingCopies.removeAll()
      for copy in copies {
        try await responseStream.send(Self.copyResponse(for: copy, from: surface, state: &state))
      }
    }
  }

  /// Waits until the simulator can say which of its displays is lit. Shortly after boot a multi-display simulator
  /// reports their activity as unknown, or not at all, and then passes through a transition that can outlast the
  /// settling connecting allows; connecting before then captures the main screen without following the active
  /// display. Waits for a settled configuration that names the display interactions target, leaving how long is
  /// too long to the client. Single-display simulators, and runtimes that do not report displays, do not wait.
  private func awaitDisplayActivity(of simulator: Simulator) async {
    switch try? await simulator.displays.resolveDisplay() {
    case .target?, .fallback(.unreadable)?:
      return
    case let .fallback(.legacyIntegratedDisplays(count))? where count <= 1:
      return
    default:
      // unknown activity, several displays without activity, a transition, or no single active display
      break
    }
    targetLogger.log("Waiting for the simulator to report which display is lit")
    for await configuration in simulator.displays.followConfigurations() where Self.namesActiveDisplay(configuration) {
      return
    }
  }

  /// A settled configuration whose active display connecting can resolve, rather than fall back from.
  private static func namesActiveDisplay(_ configuration: SimulatorDisplayConfiguration) -> Bool {
    guard configuration.phase == .settled else { return false }
    switch configuration.active {
    case .identified, .unidentified: return true
    case .unresolved, .unknown: return false
    }
  }

  // MARK: - Responses

  private static func copyResponse(
    for copy: Idb_FramebufferStreamRequest.CopyFramebuffer,
    from surface: IOSurface,
    state: inout FramebufferStreamState
  ) -> Idb_FramebufferStreamResponse {
    do {
      let scale = try state.scale(requesting: copy.hasScaleFactor ? copy.scaleFactor : nil)
      let geometry = Self.geometry(of: surface, scaleFactor: scale)
      let written = try Self.copy(surface: surface, into: copy.sharedMemoryName, capacity: copy.sharedMemoryLength, geometry: geometry)
      return Idb_FramebufferStreamResponse.with {
        $0.sharedMemoryName = copy.sharedMemoryName
        $0.bytesWritten = UInt64(written)
        $0.framebufferInfo = geometry.proto
      }
    } catch {
      return failedResponse(for: copy, error: error)
    }
  }

  private static func failedResponse(for copy: Idb_FramebufferStreamRequest.CopyFramebuffer, error: any Error) -> Idb_FramebufferStreamResponse {
    Idb_FramebufferStreamResponse.with {
      $0.sharedMemoryName = copy.sharedMemoryName
      $0.error = error.localizedDescription
    }
  }

  // MARK: - Surface access

  /// The geometry a copy will produce. `scaleFactor` shrinks both dimensions.
  private static func geometry(of surface: IOSurface, scaleFactor: Float?) -> FramebufferGeometry {
    let sourceWidth = IOSurfaceGetWidth(surface)
    let sourceHeight = IOSurfaceGetHeight(surface)
    let format = Self.formatName(IOSurfaceGetPixelFormat(surface))

    guard let scaleFactor, scaleFactor > 0, scaleFactor != 1 else {
      return FramebufferGeometry(width: sourceWidth, height: sourceHeight, format: format)
    }
    let width = max(1, Int((Float(sourceWidth) * scaleFactor).rounded()))
    let height = max(1, Int((Float(sourceHeight) * scaleFactor).rounded()))
    return FramebufferGeometry(width: width, height: height, format: format)
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

    var source = vImage_Buffer(data: base, height: vImagePixelCount(sourceHeight), width: vImagePixelCount(sourceWidth), rowBytes: sourceRowSize)
    var destination = vImage_Buffer(data: mapped, height: vImagePixelCount(geometry.height), width: vImagePixelCount(geometry.width), rowBytes: geometry.rowSize)

    // Drops the surface's row padding. vImage splits the copy across cores, which beats a single memcpy.
    if geometry.width == sourceWidth && geometry.height == sourceHeight {
      let status = vImageCopyBuffer(&source, &destination, 4, vImage_Flags(kvImageNoFlags))
      guard status == kvImageNoError else {
        throw FramebufferStreamError.copyFailed(status: status)
      }
      return geometry.frameSize
    }

    let status = vImageScale_ARGB8888(&source, &destination, nil, vImage_Flags(kvImageNoFlags))
    guard status == kvImageNoError else {
      throw FramebufferStreamError.scaleFailed(status: status)
    }
    return geometry.frameSize
  }
}

/// What the stream reads from. Owned by the handler's single loop, so it needs no lock.
private struct FramebufferStreamState {
  private(set) var surface: IOSurface?
  private var configuration: SimulatorDisplayConfiguration?
  /// The display the surface belongs to, once a configuration identifies it.
  private var captured: String?
  /// The active display the framebuffer is moving to. Its surface arrives with the next `surfaceChanged`.
  private var incoming: String?
  private var announced: Idb_FramebufferDisplays?
  private var scaleLatched = false
  private var latchedScale: Float?
  var waitingCopies: [Idb_FramebufferStreamRequest.CopyFramebuffer] = []

  init(surface: IOSurface?) {
    self.surface = surface
  }

  /// A following framebuffer reports a configuration naming a new active display ahead of the surface
  /// that moves to it; the surfaces between still belong to the captured display.
  mutating func apply(_ event: FramebufferEvent, logger: any ControlCoreLogger) {
    switch event {
    case let .surfaceChanged(surface):
      self.surface = surface
      if let incoming {
        captured = incoming
        self.incoming = nil
      }
    case let .configurationChanged(configuration):
      self.configuration = configuration
      guard case let .identified(active) = configuration.active else { return }
      if let captured {
        incoming = active.uniqueID == captured ? nil : active.uniqueID
      } else {
        captured = active.uniqueID
      }
    case .frameRendered:
      return
    case let .ended(error):
      logger.log("Framebuffer stream ended: \(error)")
    }
  }

  /// The displays, when they differ from those last announced. Nil until the stream has a surface, so
  /// the first announcement always carries the captured display's size.
  mutating func unannouncedDisplays() -> Idb_FramebufferDisplays? {
    guard let surface else { return nil }
    let displays = Idb_FramebufferDisplays.with {
      $0.switching = incoming != nil || configuration?.phase == .transitioning
      $0.displays = describe(surface: surface)
    }
    guard displays != announced else { return nil }
    announced = displays
    return displays
  }

  /// The integrated displays, or the surface alone on runtimes that do not identify their displays.
  private func describe(surface: IOSurface) -> [Idb_FramebufferDisplay] {
    let identified = configuration?.displays.filter(\.isIntegrated) ?? []
    guard !identified.isEmpty else {
      return [
        Idb_FramebufferDisplay.with {
          $0.active = true
          $0.captured = true
          $0.width = UInt32(IOSurfaceGetWidth(surface))
          $0.height = UInt32(IOSurfaceGetHeight(surface))
          if case let .unidentified(geometry)? = configuration?.active {
            $0.scale = geometry.scale
            $0.rotation = Idb_DisplayRotation(geometry.rotation)
          }
        }
      ]
    }
    return identified.map { display in
      Idb_FramebufferDisplay.with {
        $0.uniqueID = display.uniqueID
        $0.active = display.isActive
        $0.captured = display.uniqueID == captured
        // The captured display's size is the surface's, which is what its frames are copied from.
        let size = $0.captured ? CGSize(width: IOSurfaceGetWidth(surface), height: IOSurfaceGetHeight(surface)) : display.bounds.size
        $0.width = UInt32(size.width)
        $0.height = UInt32(size.height)
        $0.scale = display.scale
        $0.rotation = Idb_DisplayRotation(display.rotation)
      }
    }
  }

  /// The scale the stream runs at, fixed by the first request that names one. A client sizes its buffers
  /// for that scale, so a later request naming a different one is an error rather than a silent resize;
  /// one naming none keeps the latched value.
  mutating func scale(requesting requested: Float?) throws -> Float? {
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
