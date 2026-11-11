// Original file: ../../proto/idb.proto

import type { FramebufferInfo as _idb_FramebufferInfo, FramebufferInfo__Output as _idb_FramebufferInfo__Output } from '../idb/FramebufferInfo.js';
import type { FramebufferDisplays as _idb_FramebufferDisplays, FramebufferDisplays__Output as _idb_FramebufferDisplays__Output } from '../idb/FramebufferDisplays.js';
import type { Long } from '@grpc/proto-loader';

export interface FramebufferStreamResponse {
  'sharedMemoryName'?: (string);
  'bytesWritten'?: (number | string | Long);
  'error'?: (string);
  'framebufferInfo'?: (_idb_FramebufferInfo | null);
  'displays'?: (_idb_FramebufferDisplays | null);
  'displayName'?: (string);
  '_bytesWritten'?: "bytesWritten";
  '_error'?: "error";
  '_framebufferInfo'?: "framebufferInfo";
  '_displays'?: "displays";
}

export interface FramebufferStreamResponse__Output {
  'sharedMemoryName'?: (string);
  'bytesWritten'?: (Long);
  'error'?: (string);
  'framebufferInfo'?: (_idb_FramebufferInfo__Output);
  'displays'?: (_idb_FramebufferDisplays__Output);
  'displayName'?: (string);
}
