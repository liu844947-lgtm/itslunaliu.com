import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('.', import.meta.url);
const data = await readFile(new URL('js/content-data.js', root), 'utf8');
const detail = await readFile(new URL('project.html', root), 'utf8');

assert.match(data, /window\.OceanContent/);
for (const key of ['profile', 'internships', 'projects']) assert.match(data, new RegExp(`${key}:`));
for (const id of ['01', '02', '03', '04', '05']) assert.match(data, new RegExp(`id: '${id}'`));
assert.match(data, /kind: 'personal'/);
assert.match(data, /scoutai/);
assert.match(data, /loom\.sudoxai\.com/);
assert.match(data, /bcyps\.sudoxai\.com/);
assert.doesNotMatch(data, /123456/);
assert.doesNotMatch(data, /ETOHA|ETOHA LAB|日本品牌/);

for (const heading of ['背景和动作', '我负责的部分', '目前的结果和迭代']) {
  assert.match(detail, new RegExp(heading));
}
for (const hook of [
  'data-project-title',
  'data-project-highlight',
  'data-project-pill',
  'data-project-story',
  'data-project-gallery',
  'data-project-result',
  'data-project-iteration',
  'data-project-links'
]) {
  assert.match(detail, new RegExp(hook));
}
assert.match(detail, /class="project-brand-backdrop"[^>]*aria-hidden="true"[^>]*>LUNALIU<\/div>/);
assert.match(detail, />lunaliu</);
console.log('content registry and detail contract passed');
