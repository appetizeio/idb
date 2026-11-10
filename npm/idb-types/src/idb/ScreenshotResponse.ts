// Original file: ../../proto/idb.proto


export interface _idb_ScreenshotResponse_Size {
  'width'?: (number);
  'height'?: (number);
}

export interface _idb_ScreenshotResponse_Size__Output {
  'width'?: (number);
  'height'?: (number);
}

export interface ScreenshotResponse {
  'imageData'?: (Buffer | Uint8Array | string);
  'imageFormat'?: (string);
  'destination'?: (_idb_ScreenshotResponse_Size | null);
  'source'?: (_idb_ScreenshotResponse_Size | null);
  'screenScale'?: (number | string);
}

export interface ScreenshotResponse__Output {
  'imageData'?: (Buffer);
  'imageFormat'?: (string);
  'destination'?: (_idb_ScreenshotResponse_Size__Output);
  'source'?: (_idb_ScreenshotResponse_Size__Output);
  'screenScale'?: (number);
}
