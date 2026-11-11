// Original file: ../../proto/idb.proto


export interface _idb_XctestListBundlesResponse_Bundles {
  'name'?: (string);
  'bundleId'?: (string);
  'architectures'?: (string)[];
}

export interface _idb_XctestListBundlesResponse_Bundles__Output {
  'name'?: (string);
  'bundleId'?: (string);
  'architectures'?: (string)[];
}

export interface XctestListBundlesResponse {
  'bundles'?: (_idb_XctestListBundlesResponse_Bundles)[];
}

export interface XctestListBundlesResponse__Output {
  'bundles'?: (_idb_XctestListBundlesResponse_Bundles__Output)[];
}
