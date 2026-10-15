import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const oceanRoot = fileURLToPath(new URL('..', import.meta.url));

function originalOf(rel) {
  if (!rel.endsWith('.webp')) return rel;
  for (const ext of ['.png', '.gif', '.jpg', '.jpeg']) {
    const candidate = rel.replace(/\.webp$/, ext);
    if (fs.existsSync(path.join(oceanRoot, candidate))) return candidate;
  }
  return rel;
}

function readSources() {
  const assets = fs.readFileSync(path.join(oceanRoot, 'js/assets.js'), 'utf8');
  const letters = [...assets.matchAll(/src: '(assets\/letters\/[^']+)'/g)].map((match) => originalOf(match[1]));
  const stickers = [...assets.matchAll(/src: '(assets\/emotes\/[^']+)'/g)].map((match) => originalOf(match[1]));
  return { letters, stickers };
}

function outputPath(sourceRel) {
  return sourceRel.replace(/\.(png|gif|jpe?g)$/i, '.webp');
}

async function writeWebp(sourceRel, { maxWidth, quality, animated }) {
  const input = path.join(oceanRoot, sourceRel);
  const outputRel = outputPath(sourceRel);
  const output = path.join(oceanRoot, outputRel);
  const meta = await sharp(input).metadata();
  const pageHeight = meta.pageHeight || meta.height;
  const targetWidth = Math.min(maxWidth, meta.width);
  const targetHeight = Math.max(1, Math.round(targetWidth * pageHeight / meta.width));
  let pipeline = sharp(input, animated ? { animated: true, pages: -1 } : undefined);
  if (meta.width > maxWidth) {
    pipeline = pipeline.resize({
      width: targetWidth,
      height: targetHeight,
      fit: 'fill',
    });
  }
  await pipeline.webp({
    quality,
    alphaQuality: 90,
    effort: animated ? 4 : 6,
    smartSubsample: !animated,
  }).toFile(output);
  const before = fs.statSync(input).size;
  const after = fs.statSync(output).size;
  const outMeta = await sharp(output, { animated: true }).metadata();
  const inPages = meta.pages || 1;
  const outPages = outMeta.pages || 1;
  if (animated && inPages > 2 && outPages < 2) {
    throw new Error(`${sourceRel} lost its animation (${inPages} frames -> ${outPages})`);
  }
  return {
    sourceRel,
    outputRel,
    before,
    after,
    pages: meta.pages || 1,
    outPages: outMeta.pages || 1,
    width: outMeta.width,
    pageHeight: outMeta.pageHeight || outMeta.height,
  };
}

const caseStudies = [
  ['assets/case-studies/travel-home.png', 960, 74],
  ['assets/case-studies/travel-route-detail.png', 960, 74],
  ['assets/case-studies/travel-ai-optimize.png', 960, 74],
  ['assets/case-studies/scoutai-macbook-base.png', 1400, 76],
];

const sampleOnly = process.argv.includes('--sample');
const { letters, stickers } = readSources();
const jobs = [
  ...letters.map((sourceRel) => ({ sourceRel, maxWidth: 768, quality: 80, animated: false })),
  ...stickers.map((sourceRel) => ({
    sourceRel,
    maxWidth: 280,
    quality: sourceRel.endsWith('.gif') ? 68 : 76,
    animated: sourceRel.endsWith('.gif'),
  })),
  ...caseStudies.map(([sourceRel, maxWidth, quality]) => ({
    sourceRel,
    maxWidth,
    quality,
    animated: false,
  })),
];
const selected = sampleOnly ? [jobs[0], jobs.find((job) => job.animated)] : jobs;

for (const job of selected) {
  const result = await writeWebp(job.sourceRel, job);
  const ratio = (result.after / result.before * 100).toFixed(1);
  console.log(
    `${path.basename(result.outputRel)}  ${Math.round(result.before / 1024)}KB -> ${Math.round(result.after / 1024)}KB (${ratio}%)  ${result.width}x${result.pageHeight}  frames ${result.pages}->${result.outPages}`,
  );
}
