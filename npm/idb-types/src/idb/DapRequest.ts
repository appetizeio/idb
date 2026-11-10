// Original file: ../../proto/idb.proto


export interface _idb_DapRequest_Pipe {
  'data'?: (Buffer | Uint8Array | string);
}

export interface _idb_DapRequest_Pipe__Output {
  'data'?: (Buffer);
}

export interface _idb_DapRequest_Start {
  'debuggerPkgId'?: (string);
}

export interface _idb_DapRequest_Start__Output {
  'debuggerPkgId'?: (string);
}

export interface _idb_DapRequest_Stop {
}

export interface _idb_DapRequest_Stop__Output {
}

export interface DapRequest {
  'start'?: (_idb_DapRequest_Start | null);
  'pipe'?: (_idb_DapRequest_Pipe | null);
  'stop'?: (_idb_DapRequest_Stop | null);
  'control'?: "start"|"pipe"|"stop";
}

export interface DapRequest__Output {
  'start'?: (_idb_DapRequest_Start__Output);
  'pipe'?: (_idb_DapRequest_Pipe__Output);
  'stop'?: (_idb_DapRequest_Stop__Output);
}
