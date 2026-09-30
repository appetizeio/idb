/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CompanionUtilities
import FBControlCore
import FBSimulatorControl
import Foundation
import GRPCCore
import IDBGRPCSwift

/// Reports the simulator's displays, so a client can name one when it opens a framebuffer stream.
///
/// A runtime whose provider cannot report displays answers with none rather than guessing, which is
/// the same signal `framebuffer_stream` uses to fall back to its main-screen heuristic.
struct ListDisplaysMethodHandler {

  let target: any Target

  func handle(request: Idb_ListDisplaysRequest, context: ServerContext) async throws -> Idb_ListDisplaysResponse {
    guard let simulator = target as? Simulator else {
      throw RPCError(code: .failedPrecondition, message: "Displays can only be listed for a simulator")
    }
    let displays = (try? await simulator.displays.list()) ?? []
    return Idb_ListDisplaysResponse.with {
      $0.displays = displays.map { display in
        Idb_Display.with {
          $0.uniqueID = display.uniqueID
          $0.name = display.name
          $0.isActive = display.isActive
          $0.isPrimary = display.isPrimary
          $0.isIntegrated = display.isIntegrated
          $0.width = UInt32(display.bounds.width)
          $0.height = UInt32(display.bounds.height)
          $0.scale = display.scale
        }
      }
    }
  }
}
