// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

export interface CrashLogQuery {
  'since'?: (number | string | Long);
  'before'?: (number | string | Long);
  'bundleId'?: (string);
  'name'?: (string);
}

export interface CrashLogQuery__Output {
  'since'?: (Long);
  'before'?: (Long);
  'bundleId'?: (string);
  'name'?: (string);
}
