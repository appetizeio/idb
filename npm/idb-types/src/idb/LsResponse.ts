// Original file: ../../proto/idb.proto

import type { FileInfo as _idb_FileInfo, FileInfo__Output as _idb_FileInfo__Output } from '../idb/FileInfo.js';
import type { FileListing as _idb_FileListing, FileListing__Output as _idb_FileListing__Output } from '../idb/FileListing.js';

export interface LsResponse {
  'files'?: (_idb_FileInfo)[];
  'listings'?: (_idb_FileListing)[];
}

export interface LsResponse__Output {
  'files'?: (_idb_FileInfo__Output)[];
  'listings'?: (_idb_FileListing__Output)[];
}
