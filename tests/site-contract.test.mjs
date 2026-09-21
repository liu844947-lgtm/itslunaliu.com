import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
for (const label of ['首页', '实习', '项目', '关于']) {
  assert.match(html, new RegExp(`>${label}<`));
}
assert.match(html, /css\/tokens\.css/);
assert.match(html, /data-hero-stage/);
assert.doesNotMatch(html, /profile-liuying-cutout-green\.png/);
assert.doesNotMatch(html, /hero-stage__portrait/);
assert.match(html, /id="hero-letters"/);
assert.match(html, /js\/letter-config\.js/);
assert.match(html, /js\/hero-letters\.js/);
assert.match(html, /data-project-filter/);
assert.match(html, /data-project-preview/);
assert.match(html, /class="works-grid"/);

const configText = await readFile(new URL('../js/letter-config.js', import.meta.url), 'utf8');
assert.match(configText, /text:\s*'AI PM PORTFOLIO'/);
const imageFiles = [...configText.matchAll(/'([0-9]{2}-[a-z]-[ab]\.webp)'/g)].map((match) => match[1]);
assert.equal(imageFiles.length, 26);
assert.equal(new Set(imageFiles).size, 26);
for (const file of imageFiles) {
  await access(new URL(`../assets/letters/${file}`, import.meta.url));
}

const heroModule = await readFile(new URL('../js/hero-letters.js', import.meta.url), 'utf8');
assert.match(heroModule, /window\.HeroLetters/);
assert.match(heroModule, /init\(\)/);
assert.match(heroModule, /prefers-reduced-motion/);

const heroStyles = await readFile(new URL('../css/pages.css', import.meta.url), 'utf8');
assert.match(heroStyles, /font-size: clamp\(50px, 9\.4vw, 150px\);/);
assert.match(heroStyles, /\.hero-letters \{[^}]*flex-wrap: wrap;/);
assert.match(heroStyles, /\.hero-letter__space--break \{[^}]*flex-basis: 100%;/);
assert.match(heroModule, /hero-letter__space--break/);
console.log('site shell contract passed');
