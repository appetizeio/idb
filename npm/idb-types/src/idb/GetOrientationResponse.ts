// Original file: ../../proto/idb.proto


// Original file: ../../proto/idb.proto

export const _idb_GetOrientationResponse_Orientation = {
  UNKNOWN: 0,
  PORTRAIT: 1,
  PORTRAIT_UPSIDE_DOWN: 2,
  LANDSCAPE_LEFT: 3,
  LANDSCAPE_RIGHT: 4,
  FACE_UP: 5,
  FACE_DOWN: 6,
} as const;

export type _idb_GetOrientationResponse_Orientation =
  | 'UNKNOWN'
  | 0
  | 'PORTRAIT'
  | 1
  | 'PORTRAIT_UPSIDE_DOWN'
  | 2
  | 'LANDSCAPE_LEFT'
  | 3
  | 'LANDSCAPE_RIGHT'
  | 4
  | 'FACE_UP'
  | 5
  | 'FACE_DOWN'
  | 6

export type _idb_GetOrientationResponse_Orientation__Output = typeof _idb_GetOrientationResponse_Orientation[keyof typeof _idb_GetOrientationResponse_Orientation]

export interface GetOrientationResponse {
  'orientation'?: (_idb_GetOrientationResponse_Orientation);
}

export interface GetOrientationResponse__Output {
  'orientation'?: (_idb_GetOrientationResponse_Orientation__Output);
}
