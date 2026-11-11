// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

export interface _idb_FramebufferStreamRequest_CopyFramebuffer {
  'sharedMemoryName'?: (string);
  'sharedMemoryLength'?: (number | string | Long);
  'scaleFactor'?: (number | string);
  '_scaleFactor'?: "scaleFactor";
}

export interface _idb_FramebufferStreamRequest_CopyFramebuffer__Output {
  'sharedMemoryName'?: (string);
  'sharedMemoryLength'?: (Long);
  'scaleFactor'?: (number);
}

export interface _idb_FramebufferStreamRequest_Stop {
}

export interface _idb_FramebufferStreamRequest_Stop__Output {
}

export interface FramebufferStreamRequest {
  'copyFramebuffer'?: (_idb_FramebufferStreamRequest_CopyFramebuffer | null);
  'stop'?: (_idb_FramebufferStreamRequest_Stop | null);
  'control'?: "copyFramebuffer"|"stop";
}

export interface FramebufferStreamRequest__Output {
  'copyFramebuffer'?: (_idb_FramebufferStreamRequest_CopyFramebuffer__Output);
  'stop'?: (_idb_FramebufferStreamRequest_Stop__Output);
}
