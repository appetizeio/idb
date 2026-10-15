/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import FBControlCore
import Foundation

/// The simulator's displays, each reported upright. A HID operation over these takes touch points in the unrotated
/// panel, so a rotation neither moves a touch nor fails the operation; a display switch still does.
final class PanelDisplayCommands: DisplayCommands {
  private let displays: any DisplayCommands
  /// Its own, so that the configurations it numbers differ only when the panels do.
  let configurationTracker = DisplayConfigurationTracker()

  init(_ displays: any DisplayCommands) {
    self.displays = displays
  }

  var identities: DisplayIdentityCache { displays.identities }
  var transitionSettling: DisplayTransitionSettling { displays.transitionSettling }
  var logger: (any ControlCoreLogger)? { displays.logger }

  func report() async throws -> SimulatorDisplayReport {
    Self.panels(try await displays.report())
  }

  func touchscreens() async throws -> [SimulatorTouchscreen] {
    try await displays.touchscreens()
  }

  func reportPushes() throws -> AsyncThrowingStream<SimulatorDisplayReport, Error> {
    let pushes = try displays.reportPushes()
    return AsyncThrowingStream { continuation in
      let task = Task {
        do {
          for try await report in pushes { continuation.yield(Self.panels(report)) }
          continuation.finish()
        } catch {
          continuation.finish(throwing: error)
        }
      }
      continuation.onTermination = { _ in task.cancel() }
    }
  }

  static func panels(_ report: SimulatorDisplayReport) -> SimulatorDisplayReport {
    switch report {
    case let .displays(displays): return .displays(displays.map(panel))
    case let .legacy(integrated): return .legacy(integrated: integrated.map(panel))
    case let .transitioning(incoming): return .transitioning(incoming: incoming.map(panel))
    case .failed: return report
    }
  }

  private static func panel(_ geometry: SimulatorDisplayGeometry) -> SimulatorDisplayGeometry {
    SimulatorDisplayGeometry(bounds: geometry.bounds, scale: geometry.scale, rotation: .upright)
  }

  private static func panel(_ display: SimulatorDisplay) -> SimulatorDisplay {
    SimulatorDisplay(
      uniqueID: display.uniqueID, name: display.name, activity: display.activity, isPrimary: display.isPrimary,
      isIntegrated: display.isIntegrated, bounds: display.bounds, scale: display.scale, rotation: .upright)
  }
}
