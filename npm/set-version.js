// Stamps each package under npm/ with `<its version>-appetize.<n>.g<commit>` and prints the versions.
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const [build] = process.argv.slice(2);
if (!/^\d+$/.test(build ?? '')) {
    console.error('usage: pnpm run version <build number>');
    process.exit(1);
}

// The g prefix keeps an all-digit commit a valid semver identifier.
const commit = execFileSync('git', ['rev-parse', '--short=8', 'HEAD'], { encoding: 'utf8' }).trim();

for (const entry of readdirSync(new URL('.', import.meta.url), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const manifestUrl = new URL(`${entry.name}/package.json`, import.meta.url);
    const manifest = JSON.parse(readFileSync(manifestUrl, 'utf8'));
    manifest.version = `${manifest.version.replace(/-appetize\..*$/, '')}-appetize.${build}.g${commit}`;
    writeFileSync(manifestUrl, `${JSON.stringify(manifest, null, 4)}\n`);
    console.log(`${manifest.name}@${manifest.version}`);
}
