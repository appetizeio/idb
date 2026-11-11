// Original file: ../../proto/idb.proto


export interface _idb_LaunchRequest_Start {
  'bundleId'?: (string);
  'env'?: ({[key: string]: string});
  'appArgs'?: (string)[];
  'foregroundIfRunning'?: (boolean);
  'waitFor'?: (boolean);
  'waitForDebugger'?: (boolean);
  'enableRepl'?: (boolean);
}

export interface _idb_LaunchRequest_Start__Output {
  'bundleId'?: (string);
  'env'?: ({[key: string]: string});
  'appArgs'?: (string)[];
  'foregroundIfRunning'?: (boolean);
  'waitFor'?: (boolean);
  'waitForDebugger'?: (boolean);
  'enableRepl'?: (boolean);
}

export interface _idb_LaunchRequest_Stop {
}

export interface _idb_LaunchRequest_Stop__Output {
}

export interface LaunchRequest {
  'start'?: (_idb_LaunchRequest_Start | null);
  'stop'?: (_idb_LaunchRequest_Stop | null);
  'control'?: "start"|"stop";
}

export interface LaunchRequest__Output {
  'start'?: (_idb_LaunchRequest_Start__Output);
  'stop'?: (_idb_LaunchRequest_Stop__Output);
}
