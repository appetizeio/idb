// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

// Original file: ../../proto/idb.proto

export const _idb_VideoStreamRequest_Format = {
  H264: 0,
  RBGA: 1,
  MJPEG: 2,
  MINICAP: 3,
  I420: 4,
} as const;

export type _idb_VideoStreamRequest_Format =
  | 'H264'
  | 0
  | 'RBGA'
  | 1
  | 'MJPEG'
  | 2
  | 'MINICAP'
  | 3
  | 'I420'
  | 4

export type _idb_VideoStreamRequest_Format__Output = typeof _idb_VideoStreamRequest_Format[keyof typeof _idb_VideoStreamRequest_Format]

export interface _idb_VideoStreamRequest_Start {
  'filePath'?: (string);
  'fps'?: (number | string | Long);
  'format'?: (_idb_VideoStreamRequest_Format);
  'compressionQuality'?: (number | string);
  'scaleFactor'?: (number | string);
  'avgBitrate'?: (number | string);
  'keyFrameRate'?: (number | string);
}

export interface _idb_VideoStreamRequest_Start__Output {
  'filePath'?: (string);
  'fps'?: (Long);
  'format'?: (_idb_VideoStreamRequest_Format__Output);
  'compressionQuality'?: (number);
  'scaleFactor'?: (number);
  'avgBitrate'?: (number);
  'keyFrameRate'?: (number);
}

export interface _idb_VideoStreamRequest_Stop {
}

export interface _idb_VideoStreamRequest_Stop__Output {
}

export interface VideoStreamRequest {
  'start'?: (_idb_VideoStreamRequest_Start | null);
  'stop'?: (_idb_VideoStreamRequest_Stop | null);
  'control'?: "start"|"stop";
}

export interface VideoStreamRequest__Output {
  'start'?: (_idb_VideoStreamRequest_Start__Output);
  'stop'?: (_idb_VideoStreamRequest_Stop__Output);
}
