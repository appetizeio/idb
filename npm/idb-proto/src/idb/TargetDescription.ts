// Original file: ../../proto/idb.proto

import type { ScreenDimensions as _idb_ScreenDimensions, ScreenDimensions__Output as _idb_ScreenDimensions__Output } from '../idb/ScreenDimensions.js';
import type { Display as _idb_Display, Display__Output as _idb_Display__Output } from '../idb/Display.js';

export interface TargetDescription {
  'udid'?: (string);
  'name'?: (string);
  'screenDimensions'?: (_idb_ScreenDimensions | null);
  'state'?: (string);
  'targetType'?: (string);
  'osVersion'?: (string);
  'architecture'?: (string);
  'extended'?: (Buffer | Uint8Array | string);
  'diagnostics'?: (Buffer | Uint8Array | string);
  'displays'?: (_idb_Display)[];
}

export interface TargetDescription__Output {
  'udid'?: (string);
  'name'?: (string);
  'screenDimensions'?: (_idb_ScreenDimensions__Output);
  'state'?: (string);
  'targetType'?: (string);
  'osVersion'?: (string);
  'architecture'?: (string);
  'extended'?: (Buffer);
  'diagnostics'?: (Buffer);
  'displays'?: (_idb_Display__Output)[];
}
