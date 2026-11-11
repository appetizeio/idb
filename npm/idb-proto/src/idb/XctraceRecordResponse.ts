// Original file: ../../proto/idb.proto

import type { Payload as _idb_Payload, Payload__Output as _idb_Payload__Output } from '../idb/Payload.js';

// Original file: ../../proto/idb.proto

export const _idb_XctraceRecordResponse_State = {
  UNKNOWN: 0,
  RUNNING: 1,
  PROCESSING: 2,
} as const;

export type _idb_XctraceRecordResponse_State =
  | 'UNKNOWN'
  | 0
  | 'RUNNING'
  | 1
  | 'PROCESSING'
  | 2

export type _idb_XctraceRecordResponse_State__Output = typeof _idb_XctraceRecordResponse_State[keyof typeof _idb_XctraceRecordResponse_State]

export interface XctraceRecordResponse {
  'log'?: (Buffer | Uint8Array | string);
  'payload'?: (_idb_Payload | null);
  'state'?: (_idb_XctraceRecordResponse_State);
  'output'?: "log"|"payload"|"state";
}

export interface XctraceRecordResponse__Output {
  'log'?: (Buffer);
  'payload'?: (_idb_Payload__Output);
  'state'?: (_idb_XctraceRecordResponse_State__Output);
}
