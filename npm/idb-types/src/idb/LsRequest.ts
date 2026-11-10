// Original file: ../../proto/idb.proto

import type { FileContainer as _idb_FileContainer, FileContainer__Output as _idb_FileContainer__Output } from '../idb/FileContainer.js';

export interface LsRequest {
  'path'?: (string);
  'container'?: (_idb_FileContainer | null);
  'paths'?: (string)[];
}

export interface LsRequest__Output {
  'path'?: (string);
  'container'?: (_idb_FileContainer__Output);
  'paths'?: (string)[];
}
