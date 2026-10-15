import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('.', import.meta.url);

function bytes(rel) {
  return statSync(new URL(rel, root)).size;
}

test('homepage images stay inside the transfer budget', () => {
  const context = { window: {} };
  vm.runInNewContext(readFileSync(new URL('js/assets.js', root), 'utf8'), context);
  const letters = context.window.OceanAssets.letters.map((item) => item.src);
  const stickers = context.window.OceanAssets.stickers.map((item) => item.src);
  assert.equal(letters.length, 9);
  assert.ok(letters.every((src) => src.endsWith('.webp')));
  assert.ok(stickers.every((src) => src.endsWith('.webp')));

  const letterBytes = letters.map(bytes);
  for (const [src, size] of letters.map((src, index) => [src, letterBytes[index]])) {
    assert.ok(size <= 180 * 1024, `${src} is ${size} bytes`);
  }
  assert.ok(letterBytes.reduce((sum, size) => sum + size, 0) <= 1.1 * 1024 * 1024);

  const stickerBytes = stickers.map(bytes);
  for (const [src, size] of stickers.map((src, index) => [src, stickerBytes[index]])) {
    assert.ok(size <= 180 * 1024, `${src} is ${size} bytes`);
  }
  assert.ok(stickerBytes.reduce((sum, size) => sum + size, 0) <= 1.6 * 1024 * 1024);

  const home = readFileSync(new URL('index.html', root), 'utf8');
  const shots = [...home.matchAll(/assets\/case-studies\/[^"?]+\.webp/g)].map((match) => match[0]);
  assert.deepEqual(shots, [
    'assets/case-studies/travel-route-detail.webp',
    'assets/case-studies/travel-home.webp',
    'assets/case-studies/travel-ai-optimize.webp',
    'assets/case-studies/scoutai-macbook-base.webp',
  ]);
  for (const src of shots) assert.ok(bytes(src) <= 160 * 1024, src);

  const motion = readFileSync(new URL('js/motion.js', root), 'utf8');
  assert.match(motion, /image\.loading = "lazy"/);
  assert.equal(motion.includes('decorative ? "lazy" : "eager"'), false);
});
