// Original file: ../../proto/idb.proto

import type { Point as _idb_Point, Point__Output as _idb_Point__Output } from '../idb/Point.js';
import type { _idb_AccessibilityInfoRequest_Backend, _idb_AccessibilityInfoRequest_Backend__Output } from '../idb/AccessibilityInfoRequest.js';

// Original file: ../../proto/idb.proto

export const _idb_AccessibilityActionRequest_Scroll_Direction = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3,
  VISIBLE: 4,
} as const;

export type _idb_AccessibilityActionRequest_Scroll_Direction =
  | 'UP'
  | 0
  | 'DOWN'
  | 1
  | 'LEFT'
  | 2
  | 'RIGHT'
  | 3
  | 'VISIBLE'
  | 4

export type _idb_AccessibilityActionRequest_Scroll_Direction__Output = typeof _idb_AccessibilityActionRequest_Scroll_Direction[keyof typeof _idb_AccessibilityActionRequest_Scroll_Direction]

export interface _idb_AccessibilityActionRequest_Drag {
  'marker'?: (string);
  'point'?: (_idb_Point | null);
  'destinationMatchKey'?: (_idb_AccessibilityActionRequest_SearchableKey);
  'destinationDepth'?: (number);
  'pressDuration'?: (number | string);
  'duration'?: (number | string);
  'releaseDuration'?: (number | string);
  'delta'?: (number | string);
  'destination'?: "marker"|"point";
}

export interface _idb_AccessibilityActionRequest_Drag__Output {
  'marker'?: (string);
  'point'?: (_idb_Point__Output);
  'destinationMatchKey'?: (_idb_AccessibilityActionRequest_SearchableKey__Output);
  'destinationDepth'?: (number);
  'pressDuration'?: (number);
  'duration'?: (number);
  'releaseDuration'?: (number);
  'delta'?: (number);
}

export interface _idb_AccessibilityActionRequest_Scroll {
  'direction'?: (_idb_AccessibilityActionRequest_Scroll_Direction);
}

export interface _idb_AccessibilityActionRequest_Scroll__Output {
  'direction'?: (_idb_AccessibilityActionRequest_Scroll_Direction__Output);
}

// Original file: ../../proto/idb.proto

export const _idb_AccessibilityActionRequest_SearchableKey = {
  LABEL: 0,
  UNIQUE_ID: 1,
  VALUE: 2,
  TITLE: 3,
  ROLE: 4,
  ROLE_DESCRIPTION: 5,
  SUBROLE: 6,
  HELP: 7,
  PLACEHOLDER: 8,
} as const;

export type _idb_AccessibilityActionRequest_SearchableKey =
  | 'LABEL'
  | 0
  | 'UNIQUE_ID'
  | 1
  | 'VALUE'
  | 2
  | 'TITLE'
  | 3
  | 'ROLE'
  | 4
  | 'ROLE_DESCRIPTION'
  | 5
  | 'SUBROLE'
  | 6
  | 'HELP'
  | 7
  | 'PLACEHOLDER'
  | 8

export type _idb_AccessibilityActionRequest_SearchableKey__Output = typeof _idb_AccessibilityActionRequest_SearchableKey[keyof typeof _idb_AccessibilityActionRequest_SearchableKey]

export interface _idb_AccessibilityActionRequest_SetValue {
  'value'?: (string);
}

export interface _idb_AccessibilityActionRequest_SetValue__Output {
  'value'?: (string);
}

export interface _idb_AccessibilityActionRequest_Tap {
  'checkExpectedValue'?: (boolean);
  'expectedValue'?: (string);
  'expectedKey'?: (_idb_AccessibilityActionRequest_SearchableKey);
}

export interface _idb_AccessibilityActionRequest_Tap__Output {
  'checkExpectedValue'?: (boolean);
  'expectedValue'?: (string);
  'expectedKey'?: (_idb_AccessibilityActionRequest_SearchableKey__Output);
}

export interface _idb_AccessibilityActionRequest_Wait {
  'timeout'?: (number | string);
  'pollInterval'?: (number | string);
  'backend'?: (_idb_AccessibilityInfoRequest_Backend);
}

export interface _idb_AccessibilityActionRequest_Wait__Output {
  'timeout'?: (number);
  'pollInterval'?: (number);
  'backend'?: (_idb_AccessibilityInfoRequest_Backend__Output);
}

export interface AccessibilityActionRequest {
  'marker'?: (string);
  'point'?: (_idb_Point | null);
  'matchKey'?: (_idb_AccessibilityActionRequest_SearchableKey);
  'depth'?: (number);
  'tap'?: (_idb_AccessibilityActionRequest_Tap | null);
  'scroll'?: (_idb_AccessibilityActionRequest_Scroll | null);
  'setValue'?: (_idb_AccessibilityActionRequest_SetValue | null);
  'drag'?: (_idb_AccessibilityActionRequest_Drag | null);
  'ignoreCase'?: (boolean);
  'wait'?: (_idb_AccessibilityActionRequest_Wait | null);
  'backend'?: (_idb_AccessibilityInfoRequest_Backend);
  'target'?: "marker"|"point";
  'action'?: "wait"|"tap"|"scroll"|"setValue"|"drag";
}

export interface AccessibilityActionRequest__Output {
  'marker'?: (string);
  'point'?: (_idb_Point__Output);
  'matchKey'?: (_idb_AccessibilityActionRequest_SearchableKey__Output);
  'depth'?: (number);
  'tap'?: (_idb_AccessibilityActionRequest_Tap__Output);
  'scroll'?: (_idb_AccessibilityActionRequest_Scroll__Output);
  'setValue'?: (_idb_AccessibilityActionRequest_SetValue__Output);
  'drag'?: (_idb_AccessibilityActionRequest_Drag__Output);
  'ignoreCase'?: (boolean);
  'wait'?: (_idb_AccessibilityActionRequest_Wait__Output);
  'backend'?: (_idb_AccessibilityInfoRequest_Backend__Output);
}
