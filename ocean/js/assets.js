(function () {
  // One image per PORTFOLIO slot. Positions from Figma 172:1043 (1920x1200), sizes unified.
  // left/top/size use vw: canvas_px / 1920 * 100vw on desktop 16:10.
  // Stickers: [{src, alt}].
  const UNIFIED_SIZE = 312;

  function figmaLayout(x, y, size, rotation) {
    const toVw = (value) => `${(value / 1920) * 100}vw`;
    // Keep visual center when normalizing box size so P is not oversized.
    const left = x + (size - UNIFIED_SIZE) / 2;
    const top = y + (size - UNIFIED_SIZE) / 2;
    return {
      left: toVw(left),
      top: toVw(top),
      size: toVw(UNIFIED_SIZE),
      rotation: rotation || '0deg'
    };
  }

  window.OceanAssets = {
    letters: [
      { character: 'P', src: 'assets/letters/p-layered-card.webp', layout: figmaLayout(94.08, 365.97, 399.9475, '-24.98deg') },
      { character: 'O', src: 'assets/letters/o-shell-card.webp', layout: figmaLayout(312, 342.97, 302, '-15.3deg') },
      { character: 'R', src: 'assets/letters/09-r-b.webp', layout: figmaLayout(509, 344.97, 348) },
      { character: 'T', src: 'assets/letters/portfolio-07-t-b-lighthouse-stamp.webp', layout: figmaLayout(717, 389.97, 295) },
      { character: 'F', src: 'assets/letters/portfolio-08-f-a-signal-flags.webp', layout: figmaLayout(885, 379.97, 386) },
      { character: 'O', src: 'assets/letters/12-o-a.webp', layout: figmaLayout(1099, 353.97, 307) },
      { character: 'L', src: 'assets/letters/portfolio-10-l-a-voyage-ticket.webp', layout: figmaLayout(1171, 306.97, 342.256, '7.93deg') },
      { character: 'I', src: 'assets/letters/t-palm-tag.webp', layout: figmaLayout(1423, 358.97, 302.594, '-2.41deg') },
      { character: 'O', src: 'assets/letters/portfolio-12-o-a-jellyfish-badge.webp', layout: figmaLayout(1567, 392.97, 321) }
    ],
    stickers: [
      { src: 'assets/emotes/cat-series/cat4-alert-hello.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/cat-series/cat4-alert-new-donation.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/cat-series/cat4-alert-new-subscriber.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/cat-series/cat-alert-01.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/cat-series/cat-alert-02.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/cat-series/cat-alert-03.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/cat-series/cat-alert-04.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/cat-series/cat-alert-05.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/cat-series/cat-alert-06.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/cat-series/cat-alert-cat.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/cat-series/cat-alert-sleeping.webp', alt: 'Cat alert animation' },
      { src: 'assets/emotes/emote-001.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-002.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-003.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-004.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-005.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-006.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-007.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/genshin-01.webp', alt: 'Genshin emote' },
      { src: 'assets/emotes/genshin-02.webp', alt: 'Genshin emote' },
      { src: 'assets/emotes/genshin-03.webp', alt: 'Genshin emote' },
      { src: 'assets/emotes/genshin-04.webp', alt: 'Genshin emote' },
      { src: 'assets/emotes/genshin-05.webp', alt: 'Genshin emote' },
      { src: 'assets/emotes/genshin-06.webp', alt: 'Genshin emote' },
      { src: 'assets/emotes/emote-008.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-009.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-010.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-011.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-012.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-013.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-014.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-015.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-016.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-017.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-018.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-019.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-020.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-021.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-022.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-023.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-024.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-025.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-026.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-035.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-036.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-037.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-038.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-039.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-040.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-041.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-042.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-043.webp', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-044.webp', alt: 'Twitch emote' }
    ]
  };
})();
