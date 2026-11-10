// Original file: ../../proto/idb.proto


export interface _idb_ScreenshotRequest_Fit {
  'maxWidth'?: (number);
  'maxHeight'?: (number);
}

export interface _idb_ScreenshotRequest_Fit__Output {
  'maxWidth'?: (number);
  'maxHeight'?: (number);
}

// Original file: ../../proto/idb.proto

export const _idb_ScreenshotRequest_Format = {
  PNG: 0,
  JPEG: 1,
  TIFF: 2,
} as const;

export type _idb_ScreenshotRequest_Format =
  | 'PNG'
  | 0
  | 'JPEG'
  | 1
  | 'TIFF'
  | 2

export type _idb_ScreenshotRequest_Format__Output = typeof _idb_ScreenshotRequest_Format[keyof typeof _idb_ScreenshotRequest_Format]

export interface _idb_ScreenshotRequest_Rect {
  'x'?: (number | string);
  'y'?: (number | string);
  'width'?: (number | string);
  'height'?: (number | string);
}

export interface _idb_ScreenshotRequest_Rect__Output {
  'x'?: (number);
  'y'?: (number);
  'width'?: (number);
  'height'?: (number);
}

// Original file: ../../proto/idb.proto

export const _idb_ScreenshotRequest_Unit = {
  PIXELS: 0,
  POINTS: 1,
} as const;

export type _idb_ScreenshotRequest_Unit =
  | 'PIXELS'
  | 0
  | 'POINTS'
  | 1

export type _idb_ScreenshotRequest_Unit__Output = typeof _idb_ScreenshotRequest_Unit[keyof typeof _idb_ScreenshotRequest_Unit]

export interface ScreenshotRequest {
  'format'?: (_idb_ScreenshotRequest_Format);
  'compressionQuality'?: (number | string);
  'crop'?: (_idb_ScreenshotRequest_Rect | null);
  'scaleFactor'?: (number | string);
  'fit'?: (_idb_ScreenshotRequest_Fit | null);
  'unit'?: (_idb_ScreenshotRequest_Unit);
  'scale'?: "scaleFactor"|"fit";
}

export interface ScreenshotRequest__Output {
  'format'?: (_idb_ScreenshotRequest_Format__Output);
  'compressionQuality'?: (number);
  'crop'?: (_idb_ScreenshotRequest_Rect__Output);
  'scaleFactor'?: (number);
  'fit'?: (_idb_ScreenshotRequest_Fit__Output);
  'unit'?: (_idb_ScreenshotRequest_Unit__Output);
}
