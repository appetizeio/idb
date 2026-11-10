// Writes src/proto.ts, which holds idb.proto in memory.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import protobuf from 'protobufjs';

const protoPath = fileURLToPath(new URL('../../../proto/idb.proto', import.meta.url));
const outPath = fileURLToPath(new URL('../src/proto.ts', import.meta.url));

const source = readFileSync(protoPath, 'utf8');
const descriptor = JSON.stringify(protobuf.loadSync(protoPath).toJSON());

mkdirSync(new URL('../src/', import.meta.url), { recursive: true });
writeFileSync(
    outPath,
    `import { loadPackageDefinition } from '@grpc/grpc-js';
import { fromJSON } from '@grpc/proto-loader';
import type { INamespace } from 'protobufjs';
import type { ProtoGrpcType } from './idb.js';

/** Source of idb.proto. */
export const protoSource: string = ${JSON.stringify(source)};

const descriptor = ${JSON.stringify(descriptor)};

/** Loads idb.proto from memory as a typed gRPC package. */
export function loadPackage(): ProtoGrpcType {
    const definition = fromJSON(JSON.parse(descriptor) as INamespace);
    // loadPackageDefinition returns an untyped object.
    return loadPackageDefinition(definition) as unknown as ProtoGrpcType;
}
`
);
