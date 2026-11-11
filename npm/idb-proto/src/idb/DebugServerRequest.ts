// Original file: ../../proto/idb.proto


export interface _idb_DebugServerRequest_Pipe {
  'data'?: (Buffer | Uint8Array | string);
}

export interface _idb_DebugServerRequest_Pipe__Output {
  'data'?: (Buffer);
}

export interface _idb_DebugServerRequest_Start {
  'bundleId'?: (string);
}

export interface _idb_DebugServerRequest_Start__Output {
  'bundleId'?: (string);
}

export interface _idb_DebugServerRequest_Status {
}

export interface _idb_DebugServerRequest_Status__Output {
}

export interface _idb_DebugServerRequest_Stop {
}

export interface _idb_DebugServerRequest_Stop__Output {
}

export interface DebugServerRequest {
  'start'?: (_idb_DebugServerRequest_Start | null);
  'stop'?: (_idb_DebugServerRequest_Stop | null);
  'status'?: (_idb_DebugServerRequest_Status | null);
  'pipe'?: (_idb_DebugServerRequest_Pipe | null);
  'control'?: "start"|"stop"|"status"|"pipe";
}

export interface DebugServerRequest__Output {
  'start'?: (_idb_DebugServerRequest_Start__Output);
  'stop'?: (_idb_DebugServerRequest_Stop__Output);
  'status'?: (_idb_DebugServerRequest_Status__Output);
  'pipe'?: (_idb_DebugServerRequest_Pipe__Output);
}
