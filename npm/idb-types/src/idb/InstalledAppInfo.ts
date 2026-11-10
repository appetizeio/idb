// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

// Original file: ../../proto/idb.proto

export const _idb_InstalledAppInfo_AppProcessState = {
  UNKNOWN: 0,
  NOT_RUNNING: 1,
  RUNNING: 2,
} as const;

export type _idb_InstalledAppInfo_AppProcessState =
  | 'UNKNOWN'
  | 0
  | 'NOT_RUNNING'
  | 1
  | 'RUNNING'
  | 2

export type _idb_InstalledAppInfo_AppProcessState__Output = typeof _idb_InstalledAppInfo_AppProcessState[keyof typeof _idb_InstalledAppInfo_AppProcessState]

export interface InstalledAppInfo {
  'bundleId'?: (string);
  'name'?: (string);
  'architectures'?: (string)[];
  'installType'?: (string);
  'processState'?: (_idb_InstalledAppInfo_AppProcessState);
  'debuggable'?: (boolean);
  'processIdentifier'?: (number | string | Long);
}

export interface InstalledAppInfo__Output {
  'bundleId'?: (string);
  'name'?: (string);
  'architectures'?: (string)[];
  'installType'?: (string);
  'processState'?: (_idb_InstalledAppInfo_AppProcessState__Output);
  'debuggable'?: (boolean);
  'processIdentifier'?: (Long);
}
