// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

// Original file: ../../proto/idb.proto

export const _idb_AccessibilityQuiescenceResponse_Signal = {
  SIGNAL_UNSPECIFIED: 0,
  RUN_LOOP_IDLE: 1,
  ANIMATIONS_INACTIVE: 2,
} as const;

export type _idb_AccessibilityQuiescenceResponse_Signal =
  | 'SIGNAL_UNSPECIFIED'
  | 0
  | 'RUN_LOOP_IDLE'
  | 1
  | 'ANIMATIONS_INACTIVE'
  | 2

export type _idb_AccessibilityQuiescenceResponse_Signal__Output = typeof _idb_AccessibilityQuiescenceResponse_Signal[keyof typeof _idb_AccessibilityQuiescenceResponse_Signal]

// Original file: ../../proto/idb.proto

export const _idb_AccessibilityQuiescenceResponse_State = {
  STATE_UNSPECIFIED: 0,
  BUSY: 1,
  SETTLING: 2,
  QUIET: 3,
} as const;

export type _idb_AccessibilityQuiescenceResponse_State =
  | 'STATE_UNSPECIFIED'
  | 0
  | 'BUSY'
  | 1
  | 'SETTLING'
  | 2
  | 'QUIET'
  | 3

export type _idb_AccessibilityQuiescenceResponse_State__Output = typeof _idb_AccessibilityQuiescenceResponse_State[keyof typeof _idb_AccessibilityQuiescenceResponse_State]

export interface _idb_AccessibilityQuiescenceResponse_StateChanged {
  'state'?: (_idb_AccessibilityQuiescenceResponse_State);
  'busySignals'?: (_idb_AccessibilityQuiescenceResponse_Signal)[];
}

export interface _idb_AccessibilityQuiescenceResponse_StateChanged__Output {
  'state'?: (_idb_AccessibilityQuiescenceResponse_State__Output);
  'busySignals'?: (_idb_AccessibilityQuiescenceResponse_Signal__Output)[];
}

export interface _idb_AccessibilityQuiescenceResponse_TargetChanged {
}

export interface _idb_AccessibilityQuiescenceResponse_TargetChanged__Output {
}

export interface _idb_AccessibilityQuiescenceResponse_TargetExited {
}

export interface _idb_AccessibilityQuiescenceResponse_TargetExited__Output {
}

export interface _idb_AccessibilityQuiescenceResponse_TouchesCompleted {
}

export interface _idb_AccessibilityQuiescenceResponse_TouchesCompleted__Output {
}

export interface AccessibilityQuiescenceResponse {
  'pid'?: (number | string | Long);
  'state'?: (_idb_AccessibilityQuiescenceResponse_StateChanged | null);
  'touchesCompleted'?: (_idb_AccessibilityQuiescenceResponse_TouchesCompleted | null);
  'targetChanged'?: (_idb_AccessibilityQuiescenceResponse_TargetChanged | null);
  'targetExited'?: (_idb_AccessibilityQuiescenceResponse_TargetExited | null);
  'event'?: "state"|"touchesCompleted"|"targetChanged"|"targetExited";
}

export interface AccessibilityQuiescenceResponse__Output {
  'pid'?: (Long);
  'state'?: (_idb_AccessibilityQuiescenceResponse_StateChanged__Output);
  'touchesCompleted'?: (_idb_AccessibilityQuiescenceResponse_TouchesCompleted__Output);
  'targetChanged'?: (_idb_AccessibilityQuiescenceResponse_TargetChanged__Output);
  'targetExited'?: (_idb_AccessibilityQuiescenceResponse_TargetExited__Output);
}
