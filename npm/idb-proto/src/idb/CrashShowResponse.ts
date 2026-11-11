// Original file: ../../proto/idb.proto

import type { CrashLogInfo as _idb_CrashLogInfo, CrashLogInfo__Output as _idb_CrashLogInfo__Output } from '../idb/CrashLogInfo.js';

export interface CrashShowResponse {
  'info'?: (_idb_CrashLogInfo | null);
  'contents'?: (string);
}

export interface CrashShowResponse__Output {
  'info'?: (_idb_CrashLogInfo__Output);
  'contents'?: (string);
}
