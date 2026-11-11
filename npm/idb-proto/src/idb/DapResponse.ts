// Original file: ../../proto/idb.proto


export interface _idb_DapResponse_Event {
  'desc'?: (string);
}

export interface _idb_DapResponse_Event__Output {
  'desc'?: (string);
}

export interface _idb_DapResponse_Pipe {
  'data'?: (Buffer | Uint8Array | string);
}

export interface _idb_DapResponse_Pipe__Output {
  'data'?: (Buffer);
}

export interface DapResponse {
  'started'?: (_idb_DapResponse_Event | null);
  'stdout'?: (_idb_DapResponse_Pipe | null);
  'stopped'?: (_idb_DapResponse_Event | null);
  'event'?: "started"|"stdout"|"stopped";
}

export interface DapResponse__Output {
  'started'?: (_idb_DapResponse_Event__Output);
  'stdout'?: (_idb_DapResponse_Pipe__Output);
  'stopped'?: (_idb_DapResponse_Event__Output);
}
