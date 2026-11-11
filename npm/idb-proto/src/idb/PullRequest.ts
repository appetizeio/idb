// Original file: ../../proto/idb.proto

import type { FileContainer as _idb_FileContainer, FileContainer__Output as _idb_FileContainer__Output } from '../idb/FileContainer.js';

export interface PullRequest {
  'srcPath'?: (string);
  'dstPath'?: (string);
  'container'?: (_idb_FileContainer | null);
}

export interface PullRequest__Output {
  'srcPath'?: (string);
  'dstPath'?: (string);
  'container'?: (_idb_FileContainer__Output);
}
