// Original file: ../../proto/idb.proto

import type { TargetDescription as _idb_TargetDescription, TargetDescription__Output as _idb_TargetDescription__Output } from '../idb/TargetDescription.js';
import type { CompanionInfo as _idb_CompanionInfo, CompanionInfo__Output as _idb_CompanionInfo__Output } from '../idb/CompanionInfo.js';

export interface TargetDescriptionResponse {
  'targetDescription'?: (_idb_TargetDescription | null);
  'companion'?: (_idb_CompanionInfo | null);
}

export interface TargetDescriptionResponse__Output {
  'targetDescription'?: (_idb_TargetDescription__Output);
  'companion'?: (_idb_CompanionInfo__Output);
}
