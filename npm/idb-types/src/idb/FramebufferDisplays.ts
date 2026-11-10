// Original file: ../../proto/idb.proto

import type { FramebufferDisplay as _idb_FramebufferDisplay, FramebufferDisplay__Output as _idb_FramebufferDisplay__Output } from '../idb/FramebufferDisplay.js';

export interface FramebufferDisplays {
  'switching'?: (boolean);
  'displays'?: (_idb_FramebufferDisplay)[];
}

export interface FramebufferDisplays__Output {
  'switching'?: (boolean);
  'displays'?: (_idb_FramebufferDisplay__Output)[];
}
