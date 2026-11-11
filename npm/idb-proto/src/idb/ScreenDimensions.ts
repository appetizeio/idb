// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

export interface ScreenDimensions {
  'width'?: (number | string | Long);
  'height'?: (number | string | Long);
  'density'?: (number | string);
  'widthPoints'?: (number | string | Long);
  'heightPoints'?: (number | string | Long);
}

export interface ScreenDimensions__Output {
  'width'?: (Long);
  'height'?: (Long);
  'density'?: (number);
  'widthPoints'?: (Long);
  'heightPoints'?: (Long);
}
