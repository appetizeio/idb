// Original file: ../../proto/idb.proto


export interface _idb_AccessibilityActionResponse_WaitDiagnostics {
  'unmatchedValues'?: (string)[];
  'truncated'?: (boolean);
  'readError'?: (string);
}

export interface _idb_AccessibilityActionResponse_WaitDiagnostics__Output {
  'unmatchedValues'?: (string)[];
  'truncated'?: (boolean);
  'readError'?: (string);
}

export interface _idb_AccessibilityActionResponse_WaitResponse {
  'result'?: (_idb_AccessibilityActionResponse_WaitResult);
  'message'?: (string);
  'diagnostics'?: (_idb_AccessibilityActionResponse_WaitDiagnostics | null);
}

export interface _idb_AccessibilityActionResponse_WaitResponse__Output {
  'result'?: (_idb_AccessibilityActionResponse_WaitResult__Output);
  'message'?: (string);
  'diagnostics'?: (_idb_AccessibilityActionResponse_WaitDiagnostics__Output);
}

// Original file: ../../proto/idb.proto

export const _idb_AccessibilityActionResponse_WaitResult = {
  UNSPECIFIED: 0,
  FOUND: 1,
  TIMED_OUT: 2,
} as const;

export type _idb_AccessibilityActionResponse_WaitResult =
  | 'UNSPECIFIED'
  | 0
  | 'FOUND'
  | 1
  | 'TIMED_OUT'
  | 2

export type _idb_AccessibilityActionResponse_WaitResult__Output = typeof _idb_AccessibilityActionResponse_WaitResult[keyof typeof _idb_AccessibilityActionResponse_WaitResult]

export interface AccessibilityActionResponse {
  'waitResult'?: (_idb_AccessibilityActionResponse_WaitResult);
  'wait'?: (_idb_AccessibilityActionResponse_WaitResponse | null);
}

export interface AccessibilityActionResponse__Output {
  'waitResult'?: (_idb_AccessibilityActionResponse_WaitResult__Output);
  'wait'?: (_idb_AccessibilityActionResponse_WaitResponse__Output);
}
