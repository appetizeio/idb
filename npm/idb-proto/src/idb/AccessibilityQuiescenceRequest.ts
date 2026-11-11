// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

export interface AccessibilityQuiescenceRequest {
  'pid'?: (number | string | Long);
  'bundleId'?: (string);
  'busyThresholdMs'?: (number);
  'quietWindowMs'?: (number);
  'target'?: "pid"|"bundleId";
  'busyThreshold'?: "busyThresholdMs";
  'quietWindow'?: "quietWindowMs";
}

export interface AccessibilityQuiescenceRequest__Output {
  'pid'?: (Long);
  'bundleId'?: (string);
  'busyThresholdMs'?: (number);
  'quietWindowMs'?: (number);
}
