// Original file: ../../proto/idb.proto


// Original file: ../../proto/idb.proto

export const _idb_Payload_Compression = {
  GZIP: 0,
  ZSTD: 1,
} as const;

export type _idb_Payload_Compression =
  | 'GZIP'
  | 0
  | 'ZSTD'
  | 1

export type _idb_Payload_Compression__Output = typeof _idb_Payload_Compression[keyof typeof _idb_Payload_Compression]

export interface Payload {
  'filePath'?: (string);
  'data'?: (Buffer | Uint8Array | string);
  'url'?: (string);
  'compression'?: (_idb_Payload_Compression);
  'source'?: "filePath"|"data"|"url"|"compression";
}

export interface Payload__Output {
  'filePath'?: (string);
  'data'?: (Buffer);
  'url'?: (string);
  'compression'?: (_idb_Payload_Compression__Output);
}
