import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import vm from 'node:vm';

const root = new URL('.', import.meta.url);
test('all nine letters use distinct served assets in PORTFOLIO order', () => {
  const context = { window: {} };
  vm.runInNewContext(readFileSync(new URL('js/assets.js', root), 'utf8'), context);
  const letters = context.window.OceanAssets.letters;
  assert.equal(letters.map(item => item.character).join(''), 'PORTFOLIO');
  assert.equal(new Set(letters.map(item => item.src)).size, 9);
  assert.deepEqual(Array.from(letters, item => item.src.split('/').at(-1)), [
    'p-layered-card.png', 'o-shell-card.png', '09-r-b.png',
    'portfolio-07-t-b-lighthouse-stamp.png', 'portfolio-08-f-a-signal-flags.png',
    '12-o-a.png', 'portfolio-10-l-a-voyage-ticket.png', 't-palm-tag.png',
    'portfolio-12-o-a-jellyfish-badge.png'
  ]);
  for (const item of letters) {
    assert.equal(typeof item.src, 'string');
    assert.ok(existsSync(new URL(item.src, root)));
    assert.ok(item.layout && ['left', 'top', 'size', 'rotation'].every(key => typeof item.layout[key] === 'string'));
  }
});
test('project animation is local and uses validated host messages', () => {
  const js = readFileSync(new URL('js/long-page.js', root), 'utf8');
  assert.ok(!js.includes('https://tiffanydesign.github.io'));
  assert.ok(js.includes('ice/index.html'));
  assert.ok(js.includes('event.origin !== location.origin'));
  assert.ok(js.includes('ocean:motionchange'));
});
test('milk-white and blue are the global tokens, without gradient surfaces', () => {
  const css = readFileSync(new URL('css/long-page.css', root), 'utf8');
  assert.match(css, /--paper:\s*#f2f1eb/i);
  assert.match(css, /--blue:\s*#0756b8/i);
  assert.ok(!css.includes('gradient('));
});
