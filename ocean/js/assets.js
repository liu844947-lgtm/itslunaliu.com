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
      { character: 'P', src: 'assets/letters/p-layered-card.png', layout: figmaLayout(94.08, 365.97, 399.9475, '-24.98deg') },
      { character: 'O', src: 'assets/letters/o-shell-card.png', layout: figmaLayout(312, 342.97, 302, '-15.3deg') },
      { character: 'R', src: 'assets/letters/09-r-b.png', layout: figmaLayout(509, 344.97, 348) },
      { character: 'T', src: 'assets/letters/portfolio-07-t-b-lighthouse-stamp.png', layout: figmaLayout(717, 389.97, 295) },
      { character: 'F', src: 'assets/letters/portfolio-08-f-a-signal-flags.png', layout: figmaLayout(885, 379.97, 386) },
      { character: 'O', src: 'assets/letters/12-o-a.png', layout: figmaLayout(1099, 353.97, 307) },
      { character: 'L', src: 'assets/letters/portfolio-10-l-a-voyage-ticket.png', layout: figmaLayout(1171, 306.97, 342.256, '7.93deg') },
      { character: 'I', src: 'assets/letters/t-palm-tag.png', layout: figmaLayout(1423, 358.97, 302.594, '-2.41deg') },
      { character: 'O', src: 'assets/letters/portfolio-12-o-a-jellyfish-badge.png', layout: figmaLayout(1567, 392.97, 321) }
    ],
    stickers: [
      { src: 'assets/emotes/emote-001.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-002.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-003.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-004.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-005.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-006.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-007.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-008.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-009.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-010.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-011.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-012.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-013.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-014.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-015.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-016.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-017.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-018.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-019.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-020.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-021.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-022.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-023.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-024.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-025.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-026.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-035.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-036.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-037.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-038.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-039.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-040.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-041.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-042.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-043.png', alt: 'Twitch emote' },
      { src: 'assets/emotes/emote-044.png', alt: 'Twitch emote' }
    ]
  };
})();
