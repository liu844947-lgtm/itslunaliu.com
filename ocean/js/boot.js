(function () {
  "use strict";

  const root = document.documentElement;
  root.dataset.oceanBoot = "loading";

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

  async function boot() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeoutMs = reduced ? 4000 : 12000;
    const tasks = [
      Promise.allSettled(criticalAssets().map(loadImage)),
      waitForLettersReady(),
    ];
    if (document.fonts?.ready) tasks.push(document.fonts.ready);
    await Promise.race([
      Promise.allSettled(tasks),
      new Promise((resolve) => setTimeout(resolve, timeoutMs)),
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
