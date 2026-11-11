// Original file: ../../proto/idb.proto


export interface _idb_DebugServerResponse_Pipe {
  'data'?: (Buffer | Uint8Array | string);
}

export interface _idb_DebugServerResponse_Pipe__Output {
  'data'?: (Buffer);
}

export interface _idb_DebugServerResponse_Status {
  'lldbBootstrapCommands'?: (string)[];
}

export interface _idb_DebugServerResponse_Status__Output {
  'lldbBootstrapCommands'?: (string)[];
}

export interface DebugServerResponse {
  'status'?: (_idb_DebugServerResponse_Status | null);
  'pipe'?: (_idb_DebugServerResponse_Pipe | null);
  'control'?: "status"|"pipe";
}

export interface DebugServerResponse__Output {
  'status'?: (_idb_DebugServerResponse_Status__Output);
  'pipe'?: (_idb_DebugServerResponse_Pipe__Output);
}
