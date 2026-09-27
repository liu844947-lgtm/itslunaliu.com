import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputUrl = new URL('../output/portfolio-smoke/', import.meta.url);
await mkdir(outputUrl, { recursive: true });
const outputPath = (name) => fileURLToPath(new URL(name, outputUrl));
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const errors = [];

try {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  desktop.on('pageerror', (error) => errors.push(error.message));
  desktop.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await desktop.goto('http://127.0.0.1:4177/ocean/index.html', { waitUntil: 'networkidle' });
  await desktop.screenshot({ path: outputPath('desktop-home.png'), fullPage: false });
  assert.equal((await desktop.locator('.portfolio-title').innerText()).replace(/\s+/g, ''), 'PORTFOLIO');
  assert.equal(await desktop.locator('.hero-cta').count(), 1);
  assert.equal(await desktop.locator('.experience').count(), 2);
  assert.equal(await desktop.locator('.project-entry').count(), 3);
  assert.ok(await desktop.evaluate(() => document.documentElement.scrollWidth <= innerWidth));

  await desktop.locator('#internship').scrollIntoViewIfNeeded();
  await desktop.waitForTimeout(900);
  assert.ok(await desktop.locator('.experience').first().evaluate((node) => node.classList.contains('is-visible')));
  await desktop.screenshot({ path: outputPath('desktop-internship.png'), fullPage: false });

  await desktop.locator('#projects').scrollIntoViewIfNeeded();
  await desktop.waitForTimeout(900);
  assert.ok(await desktop.locator('.project-entry').first().evaluate((node) => node.classList.contains('is-visible')));
  await desktop.screenshot({ path: outputPath('desktop-projects.png'), fullPage: false });

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  mobile.on('pageerror', (error) => errors.push(error.message));
  mobile.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await mobile.goto('http://127.0.0.1:4177/ocean/index.html', { waitUntil: 'networkidle' });
  assert.ok(await mobile.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await mobile.screenshot({ path: outputPath('mobile-home.png'), fullPage: false });
  await mobile.locator('[data-menu-toggle]').click();
  assert.equal(await mobile.locator('[data-menu-toggle]').getAttribute('aria-expanded'), 'true');
  await mobile.locator('#primary-nav a[href="#projects"]').click();
  await mobile.waitForTimeout(900);
  assert.ok(await mobile.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await mobile.screenshot({ path: outputPath('mobile-projects.png'), fullPage: false });

  assert.deepEqual(errors, []);
  console.log('PASS: desktop/mobile layout, sections, reveal motion, navigation, and console checks.');
} finally {
  await browser.close();
}
