import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
await mkdir('output/ocean-qa', { recursive: true });
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto('http://127.0.0.1:4187/ocean/index.html');
    await page.waitForFunction(() => document.querySelectorAll('.letter-image').length === 9);
    await page.waitForFunction(() => document.querySelectorAll('.letter-flip.is-flipped').length === 9, null, { timeout: 4000 });
    await page.waitForTimeout(650);
    await page.screenshot({ path: `output/ocean-qa/letters-stacked-${width}.png` });
    const poses = await page.locator('.letter-image').evaluateAll(images => images.map(image => getComputedStyle(image).transform));
    assert.ok(new Set(poses).size >= 5, 'reverse images have distinct poses');
    assert.equal(await page.locator('.portfolio-title').evaluate(el => getComputedStyle(el).display), 'flex', 'front letters use a natural inline row');
    assert.ok(await page.locator('.letter-flip.is-flipped').first().evaluate(el => parseFloat(getComputedStyle(el).paddingInline) > 0), 'flipped cards participate in horizontal layout');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'stack fits viewport');
    await page.waitForFunction(() => document.querySelectorAll('.letter-flip.is-flipped').length === 0);
    await page.waitForTimeout(700);
    const tops = await page.locator('.letter-text').evaluateAll(letters => letters.map(letter => letter.getBoundingClientRect().top));
    assert.ok(Math.max(...tops) - Math.min(...tops) < 1, 'front letters are aligned');
    assert.ok(await page.locator('.portfolio-title').evaluate(el => parseFloat(getComputedStyle(el).fontSize) >= 200), 'front title is visibly enlarged on desktop');
    await page.screenshot({ path: `output/ocean-qa/letters-aligned-${width}.png` });
    await page.close();
  }
  const reduced = await browser.newPage({ reducedMotion: 'reduce' });
  await reduced.goto('http://127.0.0.1:4187/ocean/index.html');
  await reduced.waitForFunction(() => document.querySelectorAll('.letter-image').length === 9);
  await reduced.waitForTimeout(1100);
  assert.equal(await reduced.locator('.is-flipped').count(), 0, 'no autoplay under reduced motion');
  await reduced.locator('.letter-flip').first().click();
  assert.equal(await reduced.locator('.is-flipped').count(), 1, 'manual flip still works');
  console.log('PASS: aligned fronts, overlapping reverse poses, opening playback, reduced motion.');
} finally { await browser.close(); }
