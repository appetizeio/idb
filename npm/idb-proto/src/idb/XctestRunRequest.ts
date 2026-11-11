// Original file: ../../proto/idb.proto

import type { Long } from '@grpc/proto-loader';

export interface _idb_XctestRunRequest_Application {
  'appBundleId'?: (string);
}

export interface _idb_XctestRunRequest_Application__Output {
  'appBundleId'?: (string);
}

export interface _idb_XctestRunRequest_CodeCoverage {
  'collect'?: (boolean);
  'format'?: (_idb_XctestRunRequest_CodeCoverage_Format);
  'enableContinuousCoverageCollection'?: (boolean);
}

export interface _idb_XctestRunRequest_CodeCoverage__Output {
  'collect'?: (boolean);
  'format'?: (_idb_XctestRunRequest_CodeCoverage_Format__Output);
  'enableContinuousCoverageCollection'?: (boolean);
}

// Original file: ../../proto/idb.proto

export const _idb_XctestRunRequest_CodeCoverage_Format = {
  EXPORTED: 0,
  RAW: 1,
} as const;

export type _idb_XctestRunRequest_CodeCoverage_Format =
  | 'EXPORTED'
  | 0
  | 'RAW'
  | 1

export type _idb_XctestRunRequest_CodeCoverage_Format__Output = typeof _idb_XctestRunRequest_CodeCoverage_Format[keyof typeof _idb_XctestRunRequest_CodeCoverage_Format]

export interface _idb_XctestRunRequest_Logic {
}

export interface _idb_XctestRunRequest_Logic__Output {
}

export interface _idb_XctestRunRequest_Mode {
  'logic'?: (_idb_XctestRunRequest_Logic | null);
  'application'?: (_idb_XctestRunRequest_Application | null);
  'ui'?: (_idb_XctestRunRequest_UI | null);
  'mode'?: "logic"|"application"|"ui";
}

export interface _idb_XctestRunRequest_Mode__Output {
  'logic'?: (_idb_XctestRunRequest_Logic__Output);
  'application'?: (_idb_XctestRunRequest_Application__Output);
  'ui'?: (_idb_XctestRunRequest_UI__Output);
}

export interface _idb_XctestRunRequest_UI {
  'appBundleId'?: (string);
  'testHostAppBundleId'?: (string);
}

export interface _idb_XctestRunRequest_UI__Output {
  'appBundleId'?: (string);
  'testHostAppBundleId'?: (string);
}

export interface XctestRunRequest {
  'mode'?: (_idb_XctestRunRequest_Mode | null);
  'testBundleId'?: (string);
  'testsToRun'?: (string)[];
  'testsToSkip'?: (string)[];
  'arguments'?: (string)[];
  'environment'?: ({[key: string]: string});
  'timeout'?: (number | string | Long);
  'reportActivities'?: (boolean);
  'collectCoverage'?: (boolean);
  'reportAttachments'?: (boolean);
  'collectLogs'?: (boolean);
  'waitForDebugger'?: (boolean);
  'codeCoverage'?: (_idb_XctestRunRequest_CodeCoverage | null);
  'collectResultBundle'?: (boolean);
}

export interface XctestRunRequest__Output {
  'mode'?: (_idb_XctestRunRequest_Mode__Output);
  'testBundleId'?: (string);
  'testsToRun'?: (string)[];
  'testsToSkip'?: (string)[];
  'arguments'?: (string)[];
  'environment'?: ({[key: string]: string});
  'timeout'?: (Long);
  'reportActivities'?: (boolean);
  'collectCoverage'?: (boolean);
  'reportAttachments'?: (boolean);
  'collectLogs'?: (boolean);
  'waitForDebugger'?: (boolean);
  'codeCoverage'?: (_idb_XctestRunRequest_CodeCoverage__Output);
  'collectResultBundle'?: (boolean);
}
