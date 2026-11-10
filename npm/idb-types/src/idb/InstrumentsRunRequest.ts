// Original file: ../../proto/idb.proto


export interface _idb_InstrumentsRunRequest_InstrumentsTimings {
  'terminateTimeout'?: (number | string);
  'launchRetryTimeout'?: (number | string);
  'launchErrorTimeout'?: (number | string);
  'operationDuration'?: (number | string);
}

export interface _idb_InstrumentsRunRequest_InstrumentsTimings__Output {
  'terminateTimeout'?: (number);
  'launchRetryTimeout'?: (number);
  'launchErrorTimeout'?: (number);
  'operationDuration'?: (number);
}

export interface _idb_InstrumentsRunRequest_Start {
  'templateName'?: (string);
  'appBundleId'?: (string);
  'environment'?: ({[key: string]: string});
  'arguments'?: (string)[];
  'timings'?: (_idb_InstrumentsRunRequest_InstrumentsTimings | null);
  'toolArguments'?: (string)[];
}

export interface _idb_InstrumentsRunRequest_Start__Output {
  'templateName'?: (string);
  'appBundleId'?: (string);
  'environment'?: ({[key: string]: string});
  'arguments'?: (string)[];
  'timings'?: (_idb_InstrumentsRunRequest_InstrumentsTimings__Output);
  'toolArguments'?: (string)[];
}

export interface _idb_InstrumentsRunRequest_Stop {
  'postProcessArguments'?: (string)[];
}

export interface _idb_InstrumentsRunRequest_Stop__Output {
  'postProcessArguments'?: (string)[];
}

export interface InstrumentsRunRequest {
  'start'?: (_idb_InstrumentsRunRequest_Start | null);
  'stop'?: (_idb_InstrumentsRunRequest_Stop | null);
  'control'?: "start"|"stop";
}

export interface InstrumentsRunRequest__Output {
  'start'?: (_idb_InstrumentsRunRequest_Start__Output);
  'stop'?: (_idb_InstrumentsRunRequest_Stop__Output);
}
