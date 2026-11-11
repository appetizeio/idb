// Original file: ../../proto/idb.proto

import type { Setting as _idb_Setting, Setting__Output as _idb_Setting__Output } from '../idb/Setting.js';

export interface GetSettingRequest {
  'setting'?: (_idb_Setting);
  'name'?: (string);
  'domain'?: (string);
}

export interface GetSettingRequest__Output {
  'setting'?: (_idb_Setting__Output);
  'name'?: (string);
  'domain'?: (string);
}
