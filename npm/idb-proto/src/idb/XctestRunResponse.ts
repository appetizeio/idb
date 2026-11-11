// Original file: ../../proto/idb.proto

import type { Payload as _idb_Payload, Payload__Output as _idb_Payload__Output } from '../idb/Payload.js';
import type { DebuggerInfo as _idb_DebuggerInfo, DebuggerInfo__Output as _idb_DebuggerInfo__Output } from '../idb/DebuggerInfo.js';
import type { Long } from '@grpc/proto-loader';

// Original file: ../../proto/idb.proto

export const _idb_XctestRunResponse_TestRunInfo_Status = {
  PASSED: 0,
  FAILED: 1,
  CRASHED: 2,
} as const;

export type _idb_XctestRunResponse_TestRunInfo_Status =
  | 'PASSED'
  | 0
  | 'FAILED'
  | 1
  | 'CRASHED'
  | 2

export type _idb_XctestRunResponse_TestRunInfo_Status__Output = typeof _idb_XctestRunResponse_TestRunInfo_Status[keyof typeof _idb_XctestRunResponse_TestRunInfo_Status]

// Original file: ../../proto/idb.proto

export const _idb_XctestRunResponse_Status = {
  RUNNING: 0,
  TERMINATED_NORMALLY: 1,
  TERMINATED_ABNORMALLY: 2,
} as const;

export type _idb_XctestRunResponse_Status =
  | 'RUNNING'
  | 0
  | 'TERMINATED_NORMALLY'
  | 1
  | 'TERMINATED_ABNORMALLY'
  | 2

export type _idb_XctestRunResponse_Status__Output = typeof _idb_XctestRunResponse_Status[keyof typeof _idb_XctestRunResponse_Status]

export interface _idb_XctestRunResponse_TestRunInfo_TestActivity {
  'title'?: (string);
  'duration'?: (number | string);
  'uuid'?: (string);
  'activityType'?: (string);
  'start'?: (number | string);
  'finish'?: (number | string);
  'name'?: (string);
  'attachments'?: (_idb_XctestRunResponse_TestRunInfo_TestAttachment)[];
  'subActivities'?: (_idb_XctestRunResponse_TestRunInfo_TestActivity)[];
}

export interface _idb_XctestRunResponse_TestRunInfo_TestActivity__Output {
  'title'?: (string);
  'duration'?: (number);
  'uuid'?: (string);
  'activityType'?: (string);
  'start'?: (number);
  'finish'?: (number);
  'name'?: (string);
  'attachments'?: (_idb_XctestRunResponse_TestRunInfo_TestAttachment__Output)[];
  'subActivities'?: (_idb_XctestRunResponse_TestRunInfo_TestActivity__Output)[];
}

export interface _idb_XctestRunResponse_TestRunInfo_TestAttachment {
  'payload'?: (Buffer | Uint8Array | string);
  'timestamp'?: (number | string);
  'name'?: (string);
  'uniformTypeIdentifier'?: (string);
  'userInfoJson'?: (Buffer | Uint8Array | string);
}

export interface _idb_XctestRunResponse_TestRunInfo_TestAttachment__Output {
  'payload'?: (Buffer);
  'timestamp'?: (number);
  'name'?: (string);
  'uniformTypeIdentifier'?: (string);
  'userInfoJson'?: (Buffer);
}

export interface _idb_XctestRunResponse_TestRunInfo_TestRunFailureInfo {
  'failureMessage'?: (string);
  'file'?: (string);
  'line'?: (number | string | Long);
}

export interface _idb_XctestRunResponse_TestRunInfo_TestRunFailureInfo__Output {
  'failureMessage'?: (string);
  'file'?: (string);
  'line'?: (Long);
}

export interface _idb_XctestRunResponse_TestRunInfo {
  'status'?: (_idb_XctestRunResponse_TestRunInfo_Status);
  'bundleName'?: (string);
  'className'?: (string);
  'methodName'?: (string);
  'duration'?: (number | string);
  'failureInfo'?: (_idb_XctestRunResponse_TestRunInfo_TestRunFailureInfo | null);
  'logs'?: (string)[];
  'activityLogs'?: (_idb_XctestRunResponse_TestRunInfo_TestActivity)[];
  'otherFailures'?: (_idb_XctestRunResponse_TestRunInfo_TestRunFailureInfo)[];
}

export interface _idb_XctestRunResponse_TestRunInfo__Output {
  'status'?: (_idb_XctestRunResponse_TestRunInfo_Status__Output);
  'bundleName'?: (string);
  'className'?: (string);
  'methodName'?: (string);
  'duration'?: (number);
  'failureInfo'?: (_idb_XctestRunResponse_TestRunInfo_TestRunFailureInfo__Output);
  'logs'?: (string)[];
  'activityLogs'?: (_idb_XctestRunResponse_TestRunInfo_TestActivity__Output)[];
  'otherFailures'?: (_idb_XctestRunResponse_TestRunInfo_TestRunFailureInfo__Output)[];
}

export interface XctestRunResponse {
  'status'?: (_idb_XctestRunResponse_Status);
  'results'?: (_idb_XctestRunResponse_TestRunInfo)[];
  'logOutput'?: (string)[];
  'resultBundle'?: (_idb_Payload | null);
  'coverageJson'?: (string);
  'logDirectory'?: (_idb_Payload | null);
  'debugger'?: (_idb_DebuggerInfo | null);
  'codeCoverageData'?: (_idb_Payload | null);
}

export interface XctestRunResponse__Output {
  'status'?: (_idb_XctestRunResponse_Status__Output);
  'results'?: (_idb_XctestRunResponse_TestRunInfo__Output)[];
  'logOutput'?: (string)[];
  'resultBundle'?: (_idb_Payload__Output);
  'coverageJson'?: (string);
  'logDirectory'?: (_idb_Payload__Output);
  'debugger'?: (_idb_DebuggerInfo__Output);
  'codeCoverageData'?: (_idb_Payload__Output);
}
