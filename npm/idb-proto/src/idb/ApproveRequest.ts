// Original file: ../../proto/idb.proto


// Original file: ../../proto/idb.proto

export const _idb_ApproveRequest_Permission = {
  PHOTOS: 0,
  CAMERA: 1,
  CONTACTS: 2,
  URL: 3,
  LOCATION: 4,
  NOTIFICATION: 5,
  MICROPHONE: 6,
} as const;

export type _idb_ApproveRequest_Permission =
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

export type _idb_ApproveRequest_Permission__Output = typeof _idb_ApproveRequest_Permission[keyof typeof _idb_ApproveRequest_Permission]

export interface ApproveRequest {
  'bundleId'?: (string);
  'permissions'?: (_idb_ApproveRequest_Permission)[];
  'scheme'?: (string);
}

export interface ApproveRequest__Output {
  'bundleId'?: (string);
  'permissions'?: (_idb_ApproveRequest_Permission__Output)[];
  'scheme'?: (string);
}
