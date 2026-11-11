// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

export interface Display {
  'uniqueId'?: (string);
  'name'?: (string);
  'active'?: (boolean);
  'integrated'?: (boolean);
  'width'?: (number | string | Long);
  'height'?: (number | string | Long);
  'density'?: (number | string);
}

export interface Display__Output {
  'uniqueId'?: (string);
  'name'?: (string);
  'active'?: (boolean);
  'integrated'?: (boolean);
  'width'?: (Long);
  'height'?: (Long);
  'density'?: (number);
}
