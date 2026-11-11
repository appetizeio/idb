// Original file: ../../proto/idb.proto


// Original file: ../../proto/idb.proto

export const _idb_LogRequest_Source = {
  TARGET: 0,
  COMPANION: 1,
} as const;

export type _idb_LogRequest_Source =
  | 'TARGET'
  | 0
  | 'COMPANION'
  | 1

export type _idb_LogRequest_Source__Output = typeof _idb_LogRequest_Source[keyof typeof _idb_LogRequest_Source]

export interface LogRequest {
  'arguments'?: (string)[];
  'source'?: (_idb_LogRequest_Source);
}

export interface LogRequest__Output {
  'arguments'?: (string)[];
  'source'?: (_idb_LogRequest_Source__Output);
}
