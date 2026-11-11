// Original file: ../../proto/idb.proto


export interface _idb_ReplResponse_Result_Artifact {
  'hostPath'?: (string);
  'containerPath'?: (string);
}

export interface _idb_ReplResponse_Result_Artifact__Output {
  'hostPath'?: (string);
  'containerPath'?: (string);
}

export interface _idb_ReplResponse_Ready_GeneratedInterface {
  'moduleName'?: (string);
  'contents'?: (string);
}

export interface _idb_ReplResponse_Ready_GeneratedInterface__Output {
  'moduleName'?: (string);
  'contents'?: (string);
}

export interface _idb_ReplResponse_Ready {
  'deviceType'?: (string);
  'generatedInterfaces'?: (_idb_ReplResponse_Ready_GeneratedInterface)[];
  'osVersion'?: (string);
  'nextRunIndex'?: (number);
  'sharedFilesystem'?: (boolean);
  'sessionId'?: (string);
}

export interface _idb_ReplResponse_Ready__Output {
  'deviceType'?: (string);
  'generatedInterfaces'?: (_idb_ReplResponse_Ready_GeneratedInterface__Output)[];
  'osVersion'?: (string);
  'nextRunIndex'?: (number);
  'sharedFilesystem'?: (boolean);
  'sessionId'?: (string);
}

export interface _idb_ReplResponse_Result {
  'success'?: (boolean);
  'output'?: (string);
  'nextRunIndex'?: (number);
  'artifacts'?: (_idb_ReplResponse_Result_Artifact)[];
}

export interface _idb_ReplResponse_Result__Output {
  'success'?: (boolean);
  'output'?: (string);
  'nextRunIndex'?: (number);
  'artifacts'?: (_idb_ReplResponse_Result_Artifact__Output)[];
}

export interface _idb_ReplResponse_Stopped {
  'desc'?: (string);
}

export interface _idb_ReplResponse_Stopped__Output {
  'desc'?: (string);
}

export interface ReplResponse {
  'ready'?: (_idb_ReplResponse_Ready | null);
  'result'?: (_idb_ReplResponse_Result | null);
  'stopped'?: (_idb_ReplResponse_Stopped | null);
  'event'?: "ready"|"result"|"stopped";
}

export interface ReplResponse__Output {
  'ready'?: (_idb_ReplResponse_Ready__Output);
  'result'?: (_idb_ReplResponse_Result__Output);
  'stopped'?: (_idb_ReplResponse_Stopped__Output);
}
