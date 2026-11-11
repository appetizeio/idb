// Original file: ../../proto/idb.proto

import type { FileContainer as _idb_FileContainer, FileContainer__Output as _idb_FileContainer__Output } from '../idb/FileContainer.js';

export interface _idb_TailRequest_Start {
  'container'?: (_idb_FileContainer | null);
  'path'?: (string);
}

export interface _idb_TailRequest_Start__Output {
  'container'?: (_idb_FileContainer__Output);
  'path'?: (string);
}

export interface _idb_TailRequest_Stop {
}

export interface _idb_TailRequest_Stop__Output {
}

export interface TailRequest {
  'start'?: (_idb_TailRequest_Start | null);
  'stop'?: (_idb_TailRequest_Stop | null);
  'control'?: "start"|"stop";
}

export interface TailRequest__Output {
  'start'?: (_idb_TailRequest_Start__Output);
  'stop'?: (_idb_TailRequest_Stop__Output);
}
