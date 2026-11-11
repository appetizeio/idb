// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

export interface CrashLogInfo {
  'name'?: (string);
  'bundleId'?: (string);
  'processName'?: (string);
  'parentProcessName'?: (string);
  'processIdentifier'?: (number | string | Long);
  'parentProcessIdentifier'?: (number | string | Long);
  'timestamp'?: (number | string | Long);
}

export interface CrashLogInfo__Output {
  'name'?: (string);
  'bundleId'?: (string);
  'processName'?: (string);
  'parentProcessName'?: (string);
  'processIdentifier'?: (Long);
  'parentProcessIdentifier'?: (Long);
  'timestamp'?: (Long);
}
