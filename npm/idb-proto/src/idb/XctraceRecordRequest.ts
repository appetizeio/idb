// Original file: ../../proto/idb.proto


export interface _idb_XctraceRecordRequest_LauchProcess {
  'processToLaunch'?: (string);
  'launchArgs'?: (string)[];
  'targetStdin'?: (string);
  'targetStdout'?: (string);
  'processEnv'?: ({[key: string]: string});
}

export interface _idb_XctraceRecordRequest_LauchProcess__Output {
  'processToLaunch'?: (string);
  'launchArgs'?: (string)[];
  'targetStdin'?: (string);
  'targetStdout'?: (string);
  'processEnv'?: ({[key: string]: string});
}

export interface _idb_XctraceRecordRequest_Start {
  'templateName'?: (string);
  'timeLimit'?: (number | string);
  'package'?: (string);
  'target'?: (_idb_XctraceRecordRequest_Target | null);
}

export interface _idb_XctraceRecordRequest_Start__Output {
  'templateName'?: (string);
  'timeLimit'?: (number);
  'package'?: (string);
  'target'?: (_idb_XctraceRecordRequest_Target__Output);
}

export interface _idb_XctraceRecordRequest_Stop {
  'timeout'?: (number | string);
  'args'?: (string)[];
}

export interface _idb_XctraceRecordRequest_Stop__Output {
  'timeout'?: (number);
  'args'?: (string)[];
}

export interface _idb_XctraceRecordRequest_Target {
  'allProcesses'?: (boolean);
  'processToAttach'?: (string);
  'launchProcess'?: (_idb_XctraceRecordRequest_LauchProcess | null);
  'target'?: "allProcesses"|"processToAttach"|"launchProcess";
}

export interface _idb_XctraceRecordRequest_Target__Output {
  'allProcesses'?: (boolean);
  'processToAttach'?: (string);
  'launchProcess'?: (_idb_XctraceRecordRequest_LauchProcess__Output);
}

export interface XctraceRecordRequest {
  'start'?: (_idb_XctraceRecordRequest_Start | null);
  'stop'?: (_idb_XctraceRecordRequest_Stop | null);
  'control'?: "start"|"stop";
}

export interface XctraceRecordRequest__Output {
  'start'?: (_idb_XctraceRecordRequest_Start__Output);
  'stop'?: (_idb_XctraceRecordRequest_Stop__Output);
}
