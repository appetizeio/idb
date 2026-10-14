/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import FBControlCore
import Foundation

extension SimulatorHID {

  /// Sends `events` as operations one after another, each binding the display at its first touch. When a display
  /// change fails an operation, which releases its contacts, the next one starts with the event it failed, which was
  /// not delivered: a touch lands on the new display, as a finger still on the glass would. A failed touch up or
  /// composite is not resent, as there is no contact left to lift and part of a composite may have been delivered.
  public func sendRebinding<S: AsyncSequence>(events: S, logger: ControlCoreLogger) async throws
  where S.Element == SimulatorHIDEvent {
    let source = RebindingSource(events.makeAsyncIterator())
    while true {
      do {
        try await send(events: RebindingSource<S.AsyncIterator>.Operation(source: source), logger: logger)
        return
      } catch SimulatorDisplayError.changed {
        switch source.rebind() {
        case .finished: return
        case .failedAgain: throw SimulatorDisplayError.changed
        case .resending: logger.log("Display changed, rebinding the HID stream and resending the event it failed")
        case .skipping: logger.log("Display changed, rebinding the HID stream without the event it failed")
        }
      }
    }
  }
}

/// One stream of events shared by consecutive operations.
// SAFETY: Only the sending task reads or mutates it, one operation at a time.
final class RebindingSource<Base: AsyncIteratorProtocol>: @unchecked Sendable where Base.Element == SimulatorHIDEvent {

  enum Rebinding {
    /// Every event was delivered; the change was seen as the operation finished.
    case finished
    /// The resent event failed on another change before it was delivered.
    case failedAgain
    case resending
    case skipping
  }

  struct Operation: AsyncSequence {
    typealias Element = SimulatorHIDEvent
    let source: RebindingSource

    struct Iterator: AsyncIteratorProtocol {
      let source: RebindingSource
      mutating func next() async throws -> SimulatorHIDEvent? { try await source.next() }
    }

    func makeAsyncIterator() -> Iterator { Iterator(source: source) }
  }

  private var base: Base
  private var replay: SimulatorHIDEvent?
  /// The last event handed out, and whether it was a resend.
  private var last: (event: SimulatorHIDEvent, resent: Bool)?
  private var ended = false

  init(_ base: Base) {
    self.base = base
  }

  func next() async throws -> SimulatorHIDEvent? {
    if let event = replay {
      replay = nil
      last = (event, true)
      return event
    }
    guard let event = try await base.next() else {
      ended = true
      return nil
    }
    last = (event, false)
    return event
  }

  /// After an operation failed on a display change, readies the next operation.
  func rebind() -> Rebinding {
    if ended { return .finished }
    guard let last, !last.resent else { return .failedAgain }
    switch last.event {
    case .touch(.up, _, _, _), .twoFingerTouch(.up, _, _), .composite:
      return .skipping
    case .touch, .twoFingerTouch, .button, .remoteButton, .keyboard, .trackpad, .delay:
      replay = last.event
      return .resending
    }
  }
}
