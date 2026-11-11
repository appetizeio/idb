// Original file: ../../proto/idb.proto

import type { Payload as _idb_Payload, Payload__Output as _idb_Payload__Output } from '../idb/Payload.js';

// Original file: ../../proto/idb.proto

export const _idb_InstallRequest_LinkDsymToBundle_BundleType = {
  APP: 0,
  XCTEST: 1,
} as const;

export type _idb_InstallRequest_LinkDsymToBundle_BundleType =
  | 'APP'
  | 0
  | 'XCTEST'
  | 1

export type _idb_InstallRequest_LinkDsymToBundle_BundleType__Output = typeof _idb_InstallRequest_LinkDsymToBundle_BundleType[keyof typeof _idb_InstallRequest_LinkDsymToBundle_BundleType]

// Original file: ../../proto/idb.proto

export const _idb_InstallRequest_Destination = {
  APP: 0,
  XCTEST: 1,
  DYLIB: 2,
  DSYM: 3,
  FRAMEWORK: 4,
} as const;

export type _idb_InstallRequest_Destination =
  | 'APP'
  | 0
  | 'XCTEST'
  | 1
  | 'DYLIB'
  | 2
  | 'DSYM'
  | 3
  | 'FRAMEWORK'
  | 4

export type _idb_InstallRequest_Destination__Output = typeof _idb_InstallRequest_Destination[keyof typeof _idb_InstallRequest_Destination]

export interface _idb_InstallRequest_LinkDsymToBundle {
  'bundleType'?: (_idb_InstallRequest_LinkDsymToBundle_BundleType);
  'bundleId'?: (string);
}

export interface _idb_InstallRequest_LinkDsymToBundle__Output {
  'bundleType'?: (_idb_InstallRequest_LinkDsymToBundle_BundleType__Output);
  'bundleId'?: (string);
}

export interface InstallRequest {
  'destination'?: (_idb_InstallRequest_Destination);
  'payload'?: (_idb_Payload | null);
  'nameHint'?: (string);
  'makeDebuggable'?: (boolean);
  'linkDsymToBundle'?: (_idb_InstallRequest_LinkDsymToBundle | null);
  'overrideModificationTime'?: (boolean);
  'skipSigningBundles'?: (boolean);
  'value'?: "destination"|"payload"|"nameHint"|"makeDebuggable"|"linkDsymToBundle"|"overrideModificationTime"|"skipSigningBundles";
}

export interface InstallRequest__Output {
  'destination'?: (_idb_InstallRequest_Destination__Output);
  'payload'?: (_idb_Payload__Output);
  'nameHint'?: (string);
  'makeDebuggable'?: (boolean);
  'linkDsymToBundle'?: (_idb_InstallRequest_LinkDsymToBundle__Output);
  'overrideModificationTime'?: (boolean);
  'skipSigningBundles'?: (boolean);
}
