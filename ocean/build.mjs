import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
const root = dirname(fileURLToPath(import.meta.url));
const baseline = process.argv.includes('--baseline');
const options = { bundle: true, minify: true, jsx: 'automatic', legalComments: 'linked', nodePaths: [resolve(root, '../node_modules')], external: ['lil-gui'], define: { 'process.env.NODE_ENV': '"production"', 'process.env.NEXT_PUBLIC_BASE_PATH': JSON.stringify(baseline ? '/reference/Ice-works-showcase/public' : '.') } };
await build({ ...options, entryPoints: [resolve(root, baseline ? 'src/baseline-entry.jsx' : 'src/ice-entry.jsx')], outfile: resolve(root, baseline ? '../../output/ice-replay/capture-baseline/bundle.js' : 'ice/bundle.js') });
if (!baseline) await build({ ...options, entryPoints: [resolve(root, 'src/global-liquid.js')], outfile: resolve(root, 'js/global-liquid.bundle.js') });
