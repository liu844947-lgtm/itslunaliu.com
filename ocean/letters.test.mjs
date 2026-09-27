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

    // Intro: all letters flip once together when the title first appears.
    await page.waitForFunction(() => document.querySelectorAll('.letter-flip.is-flipped').length === 9, null, { timeout: 4000 });
    assert.ok(await page.locator('.portfolio-title').evaluate((el) => el.classList.contains('is-letter-collage')));
    const sizes = await page.locator('.letter-image').evaluateAll((images) => (
      images.map((image) => Math.round(parseFloat(getComputedStyle(image).width)))
    ));
    assert.equal(new Set(sizes).size, 1, 'reverse artwork uses one unified size');
    await page.screenshot({ path: `output/ocean-qa/letters-stacked-${width}.png` });

    // After intro settles, only the hovered letter flips.
    await page.waitForFunction(() => document.querySelectorAll('.letter-flip.is-flipped').length === 0, null, { timeout: 4000 });
    await page.locator('.letter-flip').nth(3).hover();
    await page.waitForFunction(() => document.querySelectorAll('.letter-flip.is-flipped').length === 1);
    assert.equal(await page.locator('.letter-flip.is-flipped').count(), 1, 'hover flips only the active letter');

    const title = page.locator('.portfolio-title');
    assert.equal(await title.evaluate((el) => getComputedStyle(el).display), 'flex', 'front letters use a natural inline row');
    assert.equal(
      await page.locator('.letter-flip.is-flipped .letter-image').evaluate((el) => getComputedStyle(el).position),
      'fixed',
      'reverse artwork follows the Figma canvas coordinates'
    );
    const placements = await page.locator('.letter-image').evaluateAll((images) => images.map((image) => {
      const style = getComputedStyle(image);
      return `${style.left}/${style.top}/${style.width}`;
    }));
    assert.equal(new Set(placements).size, 9, 'each authored card keeps its own position');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'stack fits viewport');

    await page.mouse.move(2, 2);
    await page.waitForFunction(() => document.querySelectorAll('.letter-flip.is-flipped').length === 0);
    await page.waitForTimeout(400);
    const tops = await page.locator('.letter-text').evaluateAll((letters) => letters.map((letter) => letter.getBoundingClientRect().top));
    assert.ok(Math.max(...tops) - Math.min(...tops) < 1, 'front letters are aligned');
    if (width >= 1000) {
      assert.ok(await title.evaluate((el) => parseFloat(getComputedStyle(el).fontSize) >= 145), 'front title matches the Figma desktop scale');
    }
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
  console.log('PASS: unified sizes, per-letter hover, one-shot intro collage, reduced motion.');
} finally {
  await browser.close();
}
