// Original file: ../../proto/idb.proto

import type { Payload as _idb_Payload, Payload__Output as _idb_Payload__Output } from '../idb/Payload.js';
import type { Long } from '@grpc/proto-loader';

export interface _idb_RecordResponse_Applied {
  'fps'?: (number | string | Long);
  'scaleFactor'?: (number | string);
  'avgBitrate'?: (number | string);
  'keyFrameRate'?: (number | string);
  'compressionQuality'?: (number | string);
}

export interface _idb_RecordResponse_Applied__Output {
  'fps'?: (Long);
  'scaleFactor'?: (number);
  'avgBitrate'?: (number);
  'keyFrameRate'?: (number);
  'compressionQuality'?: (number);
}

export interface RecordResponse {
  'logOutput'?: (Buffer | Uint8Array | string);
  'payload'?: (_idb_Payload | null);
  'applied'?: (_idb_RecordResponse_Applied | null);
  'output'?: "logOutput"|"payload"|"applied";
}

export interface RecordResponse__Output {
  'logOutput'?: (Buffer);
  'payload'?: (_idb_Payload__Output);
  'applied'?: (_idb_RecordResponse_Applied__Output);
}
