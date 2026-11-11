// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

export interface DebuggerInfo {
  'pid'?: (number | string | Long);
  'host'?: (string);
  'port'?: (number | string | Long);
}

export interface DebuggerInfo__Output {
  'pid'?: (Long);
  'host'?: (string);
  'port'?: (Long);
}
