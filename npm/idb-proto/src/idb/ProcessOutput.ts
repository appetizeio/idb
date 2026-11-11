// Original file: ../../proto/idb.proto


// Original file: ../../proto/idb.proto

export const _idb_ProcessOutput_Interface = {
  STDOUT: 0,
  STDERR: 1,
} as const;

export type _idb_ProcessOutput_Interface =
  | 'STDOUT'
  | 0
  | 'STDERR'
  | 1

export type _idb_ProcessOutput_Interface__Output = typeof _idb_ProcessOutput_Interface[keyof typeof _idb_ProcessOutput_Interface]

export interface ProcessOutput {
  'interface'?: (_idb_ProcessOutput_Interface);
  'data'?: (Buffer | Uint8Array | string);
}

export interface ProcessOutput__Output {
  'interface'?: (_idb_ProcessOutput_Interface__Output);
  'data'?: (Buffer);
}
