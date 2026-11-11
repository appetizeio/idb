// Original file: ../../proto/idb.proto

import type { FileInfo as _idb_FileInfo, FileInfo__Output as _idb_FileInfo__Output } from '../idb/FileInfo.js';

export interface FileListing {
  'parent'?: (_idb_FileInfo | null);
  'files'?: (_idb_FileInfo)[];
}

export interface FileListing__Output {
  'parent'?: (_idb_FileInfo__Output);
  'files'?: (_idb_FileInfo__Output)[];
}
