/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import FBControlCore
import Foundation

extension SimulatorHID {

  /// Sends `events` as operations one after another, each binding the display at its first touch. A display change
  /// between gestures starts the next operation with the event it failed, which was not delivered; one during a
  /// gesture releases the gesture's contacts, and its remaining touches are dropped. A composite is never re-sent,
  /// as part of it may have been delivered.
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
        case .dropping: logger.log("Display changed during a gesture, rebinding the HID stream without the rest of it")
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
    /// The event re-sent after a change failed on another before it was delivered.
    case failedAgain
    case resending
    /// The change came during a gesture, or a composite that may have been delivered in part.
    case dropping
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
  /// The last event handed out, and whether a contact was held before it.
  private var last: (event: SimulatorHIDEvent, touchingBefore: Bool)?
  private var touching = false
  private var dropping = false
  private var ended = false
  private var startedWithReplay = false
  private var handedOut = 0

  init(_ base: Base) {
    self.base = base
  }

  func next() async throws -> SimulatorHIDEvent? {
    if let event = replay {
      replay = nil
      startedWithReplay = true
      return handOut(event)
    }
    while let event = try await base.next() {
      guard dropping, Self.hasTouches(event) else { return handOut(event) }
      touching = Self.touching(after: event, from: touching)
      dropping = touching
    }
    ended = true
    return nil
  }

  /// After an operation failed on a display change, readies the next operation.
  func rebind() -> Rebinding {
    defer {
      handedOut = 0
      startedWithReplay = false
    }
    if ended { return .finished }
    guard let last else { return .failedAgain }
    if startedWithReplay, handedOut == 1 { return .failedAgain }
    if !last.touchingBefore, last.event.subEvents == nil {
      replay = last.event
      touching = last.touchingBefore
      return .resending
    }
    // The failed operation released the gesture's contacts; drop the rest of it.
    dropping = touching
    return .dropping
  }

  private func handOut(_ event: SimulatorHIDEvent) -> SimulatorHIDEvent {
    last = (event, touching)
    touching = Self.touching(after: event, from: touching)
    handedOut += 1
    return event
  }

  private static func touching(after event: SimulatorHIDEvent, from touching: Bool) -> Bool {
    switch event {
    case let .touch(direction, _, _, _), let .twoFingerTouch(direction, _, _): direction == .down
    case let .composite(events): events.reduce(touching) { Self.touching(after: $1, from: $0) }
    case .button, .remoteButton, .keyboard, .trackpad, .delay: touching
    }
  }

  private static func hasTouches(_ event: SimulatorHIDEvent) -> Bool {
    switch event {
    case .touch, .twoFingerTouch: true
    case let .composite(events): events.contains(where: hasTouches)
    case .button, .remoteButton, .keyboard, .trackpad, .delay: false
    }
  }
}
