// Writes src/proto.ts, which holds idb.proto in memory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import protobuf from 'protobufjs';

const protoPath = fileURLToPath(new URL('../../../proto/idb.proto', import.meta.url));
const outPath = fileURLToPath(new URL('../src/proto.ts', import.meta.url));

// Field names are camelCased, as the generated types expect.
const descriptor = JSON.stringify(protobuf.loadSync(protoPath).toJSON());

mkdirSync(new URL('../src/', import.meta.url), { recursive: true });
writeFileSync(
    outPath,
    `import type { fromJSON } from '@grpc/proto-loader';

/** idb.proto as a JSON descriptor, for proto-loader's fromJSON. */
export const protoDescriptor: Parameters<typeof fromJSON>[0] = JSON.parse(${JSON.stringify(descriptor)});
`
);
