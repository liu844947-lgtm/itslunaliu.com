import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('.', import.meta.url);
const data = await readFile(new URL('js/content-data.js', root), 'utf8');
const detail = await readFile(new URL('project.html', root), 'utf8');

assert.match(data, /window\.OceanContent/);
for (const key of ['profile', 'internships', 'projects']) assert.match(data, new RegExp(`${key}:`));
for (const id of ['01', '02', '03', '04']) assert.match(data, new RegExp(`id: '${id}'`));
assert.doesNotMatch(data, /id: '05'/);
assert.doesNotMatch(data, /loom-detail/);
assert.match(data, /kind: 'personal'/);
assert.match(data, /scoutai/);
assert.match(data, /travel-agent/);
assert.match(data, /bcyps\.sudoxai\.com/);
assert.match(data, /experienceAuth:/);
assert.match(data, /13912345678/);
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
  'data-project-links',
  'data-project-experience'
]) {
  assert.match(detail, new RegExp(hook));
}
for (const heading of ['在线体验']) {
  assert.match(detail, new RegExp(heading));
}
assert.match(detail, /data-case-hero/);
assert.match(detail, /data-project-devices/);
assert.doesNotMatch(detail, /class="project-brand-backdrop"/);
assert.match(detail, />lunaliu</);
assert.match(data, /heroBg:\s*'assets\/projects\/bochuangyuan\//);
assert.match(data, /device-laptop-cutout\.png/);
assert.match(data, /device-phone-cutout\.png/);
console.log('content registry and detail contract passed');
