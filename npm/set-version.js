// Stamps each package under npm/ with `<its version>-appetize.<n>` and prints the versions.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const [build] = process.argv.slice(2);
if (!/^\d+$/.test(build ?? '')) {
    console.error('usage: pnpm run version <build number>');
    process.exit(1);
}

for (const entry of readdirSync(new URL('.', import.meta.url), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const manifestUrl = new URL(`${entry.name}/package.json`, import.meta.url);
    const manifest = JSON.parse(readFileSync(manifestUrl, 'utf8'));
    manifest.version = `${manifest.version.replace(/-appetize\.\d+$/, '')}-appetize.${build}`;
    writeFileSync(manifestUrl, `${JSON.stringify(manifest, null, 4)}\n`);
    console.log(`${manifest.name}@${manifest.version}`);
}
