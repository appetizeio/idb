// Original file: ../../proto/idb.proto

import type { DisplayRotation as _idb_DisplayRotation, DisplayRotation__Output as _idb_DisplayRotation__Output } from '../idb/DisplayRotation.js';

export interface FramebufferDisplay {
  'uniqueId'?: (string);
  'active'?: (boolean);
  'captured'?: (boolean);
  'width'?: (number);
  'height'?: (number);
  'scale'?: (number | string);
  'rotation'?: (_idb_DisplayRotation);
  'name'?: (string);
  '_scale'?: "scale";
  '_rotation'?: "rotation";
}

export interface FramebufferDisplay__Output {
  'uniqueId'?: (string);
  'active'?: (boolean);
  'captured'?: (boolean);
  'width'?: (number);
  'height'?: (number);
  'scale'?: (number);
  'rotation'?: (_idb_DisplayRotation__Output);
  'name'?: (string);
}
