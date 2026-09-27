import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(siteRoot, 'ocean', 'assets', 'emotes');
const files = readdirSync(dir).filter((name) => /\.png$/i.test(name)).sort();
const stickers = files
  .map((name) => `      { src: 'assets/emotes/${name}', alt: 'Twitch emote' }`)
  .join(',\n');
const assetsPath = join(siteRoot, 'ocean', 'js', 'assets.js');
let source = readFileSync(assetsPath, 'utf8');
source = source.replace(/stickers:\s*\[[\s\S]*?\]\s*\n/, `stickers: [\n${stickers}\n    ]\n`);
writeFileSync(assetsPath, source);
console.log(`wrote ${files.length} stickers into assets.js`);
