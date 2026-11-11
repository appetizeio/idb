// Original file: ../../proto/idb.proto

import type { _idb_Payload_Compression, _idb_Payload_Compression__Output } from '../idb/Payload.js';
import type { _idb_InstallRequest_Destination, _idb_InstallRequest_Destination__Output } from '../idb/InstallRequest.js';

export interface CompanionInfo {
  'udid'?: (string);
  'isLocal'?: (boolean);
  'metadata'?: (Buffer | Uint8Array | string);
  'supportedCompressions'?: (_idb_Payload_Compression)[];
  'zstdZipStreams'?: (boolean);
  'zipStreamDestinations'?: (_idb_InstallRequest_Destination)[];
}

export interface CompanionInfo__Output {
  'udid'?: (string);
  'isLocal'?: (boolean);
  'metadata'?: (Buffer);
  'supportedCompressions'?: (_idb_Payload_Compression__Output)[];
  'zstdZipStreams'?: (boolean);
  'zipStreamDestinations'?: (_idb_InstallRequest_Destination__Output)[];
}
