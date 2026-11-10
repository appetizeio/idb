# @appetizeio/idb-types

`proto/idb.proto` and the TypeScript types generated from it with `proto-loader-gen-types`, for Node clients of `idb_companion`.

```ts
import type { ProtoGrpcType } from '@appetizeio/idb-types/idb.js';
import type { CompanionServiceClient } from '@appetizeio/idb-types/idb/CompanionService.js';
```

The proto itself is at `@appetizeio/idb-types/proto/idb.proto`.

## Building

```bash
npm ci
npm pack
```

The `Publish` workflow publishes it to GitHub Packages on every merge to `main`, as `<version in package.json>-appetize.<run number>`. The version in `package.json` is the upstream idb version this fork is based on.
