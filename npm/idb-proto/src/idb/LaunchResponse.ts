// Original file: ../../proto/idb.proto

import type { ProcessOutput as _idb_ProcessOutput, ProcessOutput__Output as _idb_ProcessOutput__Output } from '../idb/ProcessOutput.js';
import type { DebuggerInfo as _idb_DebuggerInfo, DebuggerInfo__Output as _idb_DebuggerInfo__Output } from '../idb/DebuggerInfo.js';

export interface LaunchResponse {
  'output'?: (_idb_ProcessOutput | null);
  'debugger'?: (_idb_DebuggerInfo | null);
}

export interface LaunchResponse__Output {
  'output'?: (_idb_ProcessOutput__Output);
  'debugger'?: (_idb_DebuggerInfo__Output);
}
