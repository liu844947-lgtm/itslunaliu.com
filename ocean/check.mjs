import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import assert from 'node:assert/strict';

const root = dirname(fileURLToPath(import.meta.url));
const home = await readFile(resolve(root, 'index.html'), 'utf8');
const sections = ['home', 'directory', 'internship', 'projects', 'about'];
let previous = -1;
for (const id of sections) {
  const position = home.indexOf(`id="${id}"`);
  assert.ok(position > previous, `one-page section ${id} exists in reading order`);
  previous = position;
}
for (const id of ['internship', 'projects', 'about']) {
  assert.ok(home.includes(`href="#${id}"`), `navigation targets #${id}`);
}
assert.ok(!/精选项目|home-preview|preview-grid/.test(home), 'no duplicated selected-projects section');
assert.equal((home.match(/data-projects-root/g) || []).length, 1, 'one project gallery');
for (const id of ['01', '02']) assert.ok(home.includes(`project.html?id=${id}`), `project ${id} has a detail URL`);
assert.ok(home.includes('projects/scout-ai/index.html'), 'ScoutAI links to full case study');
assert.ok(home.includes('projects/travel-agent/index.html'), 'Travel Agent links to full case study');
for (const casePage of ['projects/scout-ai/index.html', 'projects/travel-agent/index.html']) {
  await access(resolve(root, casePage));
}
assert.equal((home.match(/class="project-entry(?:\s|\")/g) || []).length, 4, 'four project entries');
assert.ok(home.includes('data-project-count="4"'), 'project count is four');
assert.ok(!home.includes('电商详情页'), 'loom project removed from gallery');
assert.ok(home.indexOf('旅游 Agent') < home.indexOf('ScoutAI'), 'travel appears before scout in selectors');
assert.ok(home.includes('>lunaliu<'), 'home wordmark is lunaliu');
assert.ok(home.includes('class="project-brand-backdrop" aria-hidden="true">LUNALIU</div>'), 'independent LUNALIU background');
assert.ok(!/<h1[^>]*>[^<]*LUNALIU/.test(home), 'LUNALIU does not replace the page title');

const detail = await readFile(resolve(root, 'project.html'), 'utf8');
assert.ok(detail.includes('index.html#projects'), 'detail returns to project section');
assert.ok(detail.includes('data-project-detail'), 'detail template has identity hook');

let checked = 0;
for (const page of ['index.html', 'project.html']) {
  const html = await readFile(resolve(root, page), 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${page}: unique IDs`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${page}: one h1`);
  for (const [, target] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|data:|mailto:|tel:)/.test(target)) continue;
    const [path, hash] = target.split('#');
    if (!path) assert.ok(ids.includes(hash), `${page}: anchor ${target}`);
    else {
      const localPath = resolve(root, path.split('?')[0]);
      await access(localPath);
      if (hash) assert.ok((await readFile(localPath, 'utf8')).includes(`id="${hash}"`), `${page}: destination anchor ${target}`);
    }
    checked += 1;
  }
}
for (const page of ['internship', 'projects', 'about']) {
  const html = await readFile(resolve(root, `${page}.html`), 'utf8');
  assert.ok(html.includes(`index.html#${page}`), `${page}: legacy entry reaches long page`);
}
console.log(`PASS: five ordered sections, four projects, legacy anchors, ${checked} local references.`);
