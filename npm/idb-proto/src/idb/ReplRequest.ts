// Original file: ../../proto/idb.proto


// Original file: ../../proto/idb.proto

export const _idb_ReplRequest_Start_Context = {
  SIMULATOR: 0,
  TEST: 1,
  APP: 2,
} as const;

export type _idb_ReplRequest_Start_Context =
  | 'SIMULATOR'
  | 0
  | 'TEST'
  | 1
  | 'APP'
  | 2

export type _idb_ReplRequest_Start_Context__Output = typeof _idb_ReplRequest_Start_Context[keyof typeof _idb_ReplRequest_Start_Context]

export interface _idb_ReplRequest_Execute {
  'dylib'?: (Buffer | Uint8Array | string);
  'symbol'?: (string);
}

export interface _idb_ReplRequest_Execute__Output {
  'dylib'?: (Buffer);
  'symbol'?: (string);
}

export interface _idb_ReplRequest_Start {
  'testBundlePath'?: (string);
  'context'?: (_idb_ReplRequest_Start_Context);
  'appBundleId'?: (string);
  'reuseSession'?: (boolean);
  'probeFilePath'?: (string);
}

export interface _idb_ReplRequest_Start__Output {
  'testBundlePath'?: (string);
  'context'?: (_idb_ReplRequest_Start_Context__Output);
  'appBundleId'?: (string);
  'reuseSession'?: (boolean);
  'probeFilePath'?: (string);
}

export interface _idb_ReplRequest_Stop {
}

export interface _idb_ReplRequest_Stop__Output {
}

export interface ReplRequest {
  'start'?: (_idb_ReplRequest_Start | null);
  'execute'?: (_idb_ReplRequest_Execute | null);
  'stop'?: (_idb_ReplRequest_Stop | null);
  'control'?: "start"|"execute"|"stop";
}

export interface ReplRequest__Output {
  'start'?: (_idb_ReplRequest_Start__Output);
  'execute'?: (_idb_ReplRequest_Execute__Output);
  'stop'?: (_idb_ReplRequest_Stop__Output);
}
