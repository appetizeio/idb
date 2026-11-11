// Original file: ../../proto/idb.proto

import type { FileContainer as _idb_FileContainer, FileContainer__Output as _idb_FileContainer__Output } from '../idb/FileContainer.js';

export interface MkdirRequest {
  'path'?: (string);
  'container'?: (_idb_FileContainer | null);
}

export interface MkdirRequest__Output {
  'path'?: (string);
  'container'?: (_idb_FileContainer__Output);
}
