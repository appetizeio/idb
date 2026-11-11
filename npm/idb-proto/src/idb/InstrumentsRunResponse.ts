// Original file: ../../proto/idb.proto

import type { Payload as _idb_Payload, Payload__Output as _idb_Payload__Output } from '../idb/Payload.js';

// Original file: ../../proto/idb.proto

export const _idb_InstrumentsRunResponse_State = {
  UNKNOWN: 0,
  RUNNING_INSTRUMENTS: 1,
  POST_PROCESSING: 2,
} as const;

export type _idb_InstrumentsRunResponse_State =
  | 'UNKNOWN'
  | 0
  | 'RUNNING_INSTRUMENTS'
  | 1
  | 'POST_PROCESSING'
  | 2

export type _idb_InstrumentsRunResponse_State__Output = typeof _idb_InstrumentsRunResponse_State[keyof typeof _idb_InstrumentsRunResponse_State]

export interface InstrumentsRunResponse {
  'logOutput'?: (Buffer | Uint8Array | string);
  'payload'?: (_idb_Payload | null);
  'state'?: (_idb_InstrumentsRunResponse_State);
  'output'?: "logOutput"|"payload"|"state";
}

export interface InstrumentsRunResponse__Output {
  'logOutput'?: (Buffer);
  'payload'?: (_idb_Payload__Output);
  'state'?: (_idb_InstrumentsRunResponse_State__Output);
}
