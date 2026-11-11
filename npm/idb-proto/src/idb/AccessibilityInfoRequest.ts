// Original file: ../../proto/idb.proto

import type { Point as _idb_Point, Point__Output as _idb_Point__Output } from '../idb/Point.js';
import type { _idb_AccessibilityActionRequest_SearchableKey, _idb_AccessibilityActionRequest_SearchableKey__Output } from '../idb/AccessibilityActionRequest.js';

// Original file: ../../proto/idb.proto

export const _idb_AccessibilityInfoRequest_Backend = {
  BACKEND_UNSPECIFIED: 0,
  AX: 1,
  AXBRIDGE: 2,
  AXBRIDGE_PERSISTENT: 3,
} as const;

export type _idb_AccessibilityInfoRequest_Backend =
  | 'BACKEND_UNSPECIFIED'
  | 0
  | 'AX'
  | 1
  | 'AXBRIDGE'
  | 2
  | 'AXBRIDGE_PERSISTENT'
  | 3

export type _idb_AccessibilityInfoRequest_Backend__Output = typeof _idb_AccessibilityInfoRequest_Backend[keyof typeof _idb_AccessibilityInfoRequest_Backend]

// Original file: ../../proto/idb.proto

export const _idb_AccessibilityInfoRequest_Filter = {
  FILTER_ALL: 0,
  FILTER_INTERACTABLE: 1,
} as const;

export type _idb_AccessibilityInfoRequest_Filter =
  | 'FILTER_ALL'
  | 0
  | 'FILTER_INTERACTABLE'
  | 1

export type _idb_AccessibilityInfoRequest_Filter__Output = typeof _idb_AccessibilityInfoRequest_Filter[keyof typeof _idb_AccessibilityInfoRequest_Filter]

// Original file: ../../proto/idb.proto

export const _idb_AccessibilityInfoRequest_Format = {
  LEGACY: 0,
  NESTED: 1,
  COMPLETE: 2,
} as const;

export type _idb_AccessibilityInfoRequest_Format =
  | 'LEGACY'
  | 0
  | 'NESTED'
  | 1
  | 'COMPLETE'
  | 2

export type _idb_AccessibilityInfoRequest_Format__Output = typeof _idb_AccessibilityInfoRequest_Format[keyof typeof _idb_AccessibilityInfoRequest_Format]

export interface AccessibilityInfoRequest {
  'point'?: (_idb_Point | null);
  'format'?: (_idb_AccessibilityInfoRequest_Format);
  'marker'?: (string);
  'matchKey'?: (_idb_AccessibilityActionRequest_SearchableKey);
  'depth'?: (number);
  'keys'?: (string)[];
  'backend'?: (_idb_AccessibilityInfoRequest_Backend);
  'profile'?: (boolean);
  'collectFrameCoverage'?: (boolean);
  'match'?: (string);
  'ignoreCase'?: (boolean);
  'filter'?: (_idb_AccessibilityInfoRequest_Filter);
}

export interface AccessibilityInfoRequest__Output {
  'point'?: (_idb_Point__Output);
  'format'?: (_idb_AccessibilityInfoRequest_Format__Output);
  'marker'?: (string);
  'matchKey'?: (_idb_AccessibilityActionRequest_SearchableKey__Output);
  'depth'?: (number);
  'keys'?: (string)[];
  'backend'?: (_idb_AccessibilityInfoRequest_Backend__Output);
  'profile'?: (boolean);
  'collectFrameCoverage'?: (boolean);
  'match'?: (string);
  'ignoreCase'?: (boolean);
  'filter'?: (_idb_AccessibilityInfoRequest_Filter__Output);
}
