// Original file: ../../proto/idb.proto


// Original file: ../../proto/idb.proto

export const _idb_RevokeRequest_Permission = {
  PHOTOS: 0,
  CAMERA: 1,
  CONTACTS: 2,
  URL: 3,
  LOCATION: 4,
  NOTIFICATION: 5,
  MICROPHONE: 6,
} as const;

export type _idb_RevokeRequest_Permission =
  | 'PHOTOS'
  | 0
  | 'CAMERA'
  | 1
  | 'CONTACTS'
  | 2
  | 'URL'
  | 3
  | 'LOCATION'
  | 4
  | 'NOTIFICATION'
  | 5
  | 'MICROPHONE'
  | 6

export type _idb_RevokeRequest_Permission__Output = typeof _idb_RevokeRequest_Permission[keyof typeof _idb_RevokeRequest_Permission]

export interface RevokeRequest {
  'bundleId'?: (string);
  'permissions'?: (_idb_RevokeRequest_Permission)[];
  'scheme'?: (string);
}

export interface RevokeRequest__Output {
  'bundleId'?: (string);
  'permissions'?: (_idb_RevokeRequest_Permission__Output)[];
  'scheme'?: (string);
}
