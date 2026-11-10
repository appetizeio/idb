// Original file: ../../proto/idb.proto

import type { Payload as _idb_Payload, Payload__Output as _idb_Payload__Output } from '../idb/Payload.js';
import type { FileContainer as _idb_FileContainer, FileContainer__Output as _idb_FileContainer__Output } from '../idb/FileContainer.js';

export interface _idb_PushRequest_Inner {
  'dstPath'?: (string);
  'container'?: (_idb_FileContainer | null);
}

export interface _idb_PushRequest_Inner__Output {
  'dstPath'?: (string);
  'container'?: (_idb_FileContainer__Output);
}

export interface PushRequest {
  'payload'?: (_idb_Payload | null);
  'inner'?: (_idb_PushRequest_Inner | null);
  'value'?: "payload"|"inner";
}

export interface PushRequest__Output {
  'payload'?: (_idb_Payload__Output);
  'inner'?: (_idb_PushRequest_Inner__Output);
}
