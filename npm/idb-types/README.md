# @appetizeio/idb-types

`idb.proto` and the TypeScript types generated from it with `proto-loader-gen-types`, for Node clients of `idb_companion`.

```ts
import * as grpc from '@grpc/grpc-js';
import type { CompanionServiceClient } from '@appetizeio/idb-types/idb/CompanionService.js';
import { loadPackage } from '@appetizeio/idb-types/proto.js';

const { idb } = loadPackage();
const client: CompanionServiceClient = new idb.CompanionService(address, grpc.credentials.createInsecure());
```

The proto is held in memory, so nothing has to be found on disk after bundling. Its source is also exported, as `protoSource`.

## Building

```bash
pnpm install
pnpm run build
```

The generated types in `src/` are committed, so a change to `idb.proto` shows up in review as a change to the types. Run the build after editing the proto and commit the result; CI fails if they don't match.

The `Appetize Publish` workflow publishes it to GitHub Packages on every merge to `main`, as `<version in package.json>-appetize.<run number>`. The version in `package.json` is the upstream idb version this repo is based on.
