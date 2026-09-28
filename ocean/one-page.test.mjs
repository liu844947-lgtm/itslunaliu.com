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
assert.ok(!home.includes('>DIRECTORY<'), 'top nav does not list DIRECTORY');
assert.ok(home.includes('hero-wordmark'), 'lunaliu wordmark lives on the home hero');
assert.ok(!home.includes('class="wordmark"'), 'wordmark is not in the sticky nav');
assert.ok(home.includes('>CREATIVE</strong>'), 'directory menu includes CREATIVE');
assert.ok(!home.includes('Portfolio 2025'), 'directory eyebrow is removed');
assert.ok(!/精选项目|home-preview|preview-grid/.test(home), 'no duplicated selected-projects section');
assert.match(home, /data-figma-layout="169:2737"/, 'home identifies the selected Figma layout');
assert.ok(home.includes('class="hero-play"'), 'home uses a PLAY control in the hero');
assert.ok(home.includes('data-letter-play'), 'PLAY triggers PORTFOLIO letter flip');
assert.ok(home.includes('href="#projects"'), 'page still links into the projects section');
assert.ok(!home.includes('hero-copy__jp'), 'Japanese hero copy is removed');
assert.ok(!home.includes('assets/hero-japanese-copy.png'), 'home no longer uses a screenshot for Japanese hero copy');
assert.ok(!home.includes('language-switch'), 'the Japanese hero artwork is not a language toggle');
assert.ok(!home.includes('site-footer'), 'home footer is removed');
assert.match(home, /class="project-case-list\b/, 'projects follow the Figma vertical case-study layout');
assert.match(home, /id="contact"/, 'the final contact section is present');
assert.equal((home.match(/data-projects-root/g) || []).length, 1, 'one project gallery');
for (const id of ['01', '02']) {
  assert.ok(home.includes(`project.html?id=${id}`), `project ${id} has a real detail URL`);
}
assert.ok(home.includes('projects/scout-ai/index.html'), 'ScoutAI links to full case study');
assert.ok(home.includes('projects/travel-agent/index.html'), 'Travel Agent links to full case study');
for (const casePage of ['projects/scout-ai/index.html', 'projects/travel-agent/index.html']) {
  await access(resolve(root, casePage));
}
assert.equal((home.match(/class="project-entry(?:\s|\")/g) || []).length, 4, 'four project entries');
assert.ok(home.includes('data-project-count="4"'), 'project count is four');
assert.ok(home.includes('css/reveal.css'), 'home loads shared scroll reveal styles');
assert.ok(home.includes('js/reveal.js'), 'home loads shared scroll reveal script');
assert.ok(home.includes('class="project-brand-backdrop" aria-hidden="true">LUNALIU</div>'), 'home has independent LUNALIU background');
assert.ok(!/<h1[^>]*>[^<]*LUNALIU/.test(home), 'LUNALIU is not the home title');
assert.ok(home.includes('>lunaliu<'), 'home wordmark is lunaliu');
assert.ok(home.includes('directory-section'), 'directory page sits after home');
assert.ok(home.includes('directory-photo'), 'directory hosts the profile photo');
assert.ok(!home.includes('internship-portrait'), 'internship no longer hosts the profile photo');
assert.ok(!home.includes('portrait-slot'), 'about no longer hosts the profile photo');
const detail = await readFile(resolve(root, 'project.html'), 'utf8');
assert.ok(detail.includes('index.html#projects'), 'detail returns to the project section');
assert.ok(detail.includes('data-project-detail'), 'detail template has project identity');
assert.ok(detail.includes('data-case-hero'), 'detail uses case-hero template');
assert.ok(detail.includes('data-project-devices'), 'detail supports device mockup stage');
assert.ok(!detail.includes('class="project-brand-backdrop"'), 'detail no longer uses LUNALIU backdrop watermark');
for (const heading of ['背景和动作', '我负责的部分', '目前的结果和迭代']) {
  assert.ok(detail.includes(heading), `detail has ${heading} module`);
}

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
    checked++;
  }
}
for (const page of ['internship', 'projects', 'about']) {
  const html = await readFile(resolve(root, `${page}.html`), 'utf8');
  assert.ok(html.includes(`index.html#${page}`), `${page}: legacy entry reaches the long page`);
}
console.log(`PASS: five ordered sections, four projects, legacy anchors, ${checked} local references.`);
