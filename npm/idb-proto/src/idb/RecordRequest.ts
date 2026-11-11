// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

export interface _idb_RecordRequest_Start {
  'filePath'?: (string);
  'fps'?: (number | string | Long);
  'compressionQuality'?: (number | string);
  'scaleFactor'?: (number | string);
  'avgBitrate'?: (number | string);
  'keyFrameRate'?: (number | string);
}

export interface _idb_RecordRequest_Start__Output {
  'filePath'?: (string);
  'fps'?: (Long);
  'compressionQuality'?: (number);
  'scaleFactor'?: (number);
  'avgBitrate'?: (number);
  'keyFrameRate'?: (number);
}

export interface _idb_RecordRequest_Stop {
}

export interface _idb_RecordRequest_Stop__Output {
}

export interface RecordRequest {
  'start'?: (_idb_RecordRequest_Start | null);
  'stop'?: (_idb_RecordRequest_Stop | null);
  'control'?: "start"|"stop";
}

export interface RecordRequest__Output {
  'start'?: (_idb_RecordRequest_Start__Output);
  'stop'?: (_idb_RecordRequest_Stop__Output);
}
