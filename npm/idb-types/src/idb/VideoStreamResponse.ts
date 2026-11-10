// Original file: ../../proto/idb.proto

import type { Payload as _idb_Payload, Payload__Output as _idb_Payload__Output } from '../idb/Payload.js';

export interface VideoStreamResponse {
  'logOutput'?: (Buffer | Uint8Array | string);
  'payload'?: (_idb_Payload | null);
  'output'?: "logOutput"|"payload";
}

export interface VideoStreamResponse__Output {
  'logOutput'?: (Buffer);
  'payload'?: (_idb_Payload__Output);
}
