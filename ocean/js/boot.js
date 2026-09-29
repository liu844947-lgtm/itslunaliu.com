(function () {
  "use strict";

  const root = document.documentElement;
  const BOOT_WORD = "lunaliu";
  root.dataset.oceanBoot = "loading";

  function delay(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  function loadImage(src) {
    return new Promise((resolve) => {
      const image = new Image();
      const finish = () => resolve(src);
      image.onload = finish;
      image.onerror = finish;
      image.src = src;
    });
  }

  function criticalAssets() {
    const letters = Array.isArray(window.OceanAssets?.letters)
      ? window.OceanAssets.letters.slice(0, 9)
      : [];
    return [
      ...letters.map((asset) => asset?.src).filter(Boolean),
      "assets/hero-cta-balloon.png",
      "assets/hero-flower-blue.png",
      "assets/hero-flower.png",
    ];
  }

  function waitForLettersReady() {
    return new Promise((resolve) => {
      document.addEventListener("ocean:lettersready", resolve, { once: true });
    });
  }

  function runTypewriter(screen, target, intervalMs) {
    if (!target) return Promise.resolve();
    screen?.classList.add("is-typing");
    target.textContent = "";

    return new Promise((resolve) => {
      let index = 0;
      const step = () => {
        if (index >= BOOT_WORD.length) {
          screen?.classList.remove("is-typing");
          screen?.classList.add("is-typing-complete");
          resolve();
          return;
        }
        target.textContent += BOOT_WORD[index];
        index += 1;
        window.setTimeout(step, intervalMs);
      };
      step();
    });
  }

  async function boot() {
    const screen = document.querySelector(".ocean-boot-screen");
    const typeTarget = document.querySelector("[data-boot-typewriter]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pauseMs = reduced ? 900 : 3000;
    const typeIntervalMs = reduced ? 70 : 165;
    const holdAfterTypeMs = reduced ? 500 : 900;
    const timeoutMs = reduced ? 6000 : 16000;

    const assetLoad = Promise.allSettled([
      Promise.allSettled(criticalAssets().map(loadImage)),
      waitForLettersReady(),
      document.fonts?.ready ?? Promise.resolve(),
    ]);

    await delay(pauseMs);
    if (reduced) {
      if (typeTarget) typeTarget.textContent = BOOT_WORD;
      screen?.classList.add("is-typing-complete");
    } else {
      await runTypewriter(screen, typeTarget, typeIntervalMs);
    }
    await delay(holdAfterTypeMs);

    await Promise.race([
      assetLoad,
      delay(timeoutMs),
    ]);

    root.dataset.oceanBoot = "ready";
    document.dispatchEvent(new CustomEvent("ocean:bootready"));
  }

  function whenReady(fn) {
    if (root.dataset.oceanBoot === "ready") {
      fn();
      return;
    }
    document.addEventListener("ocean:bootready", fn, { once: true });
  }

  window.OceanBoot = { whenReady };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
}());
