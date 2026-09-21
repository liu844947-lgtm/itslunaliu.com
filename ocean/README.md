# LIUYING Portfolio

Single-page draft: home, internship, all projects, about. Navigation uses anchors;
five project links open `project.html?id=01` through `05`. Editorial content and
project artwork intentionally remain blank.

Palette: milk-white `#f2f1eb`, blue `#0756b8`. Nine letter assets come from the
user's `output/imagegen/ocean-object-samples` folder. Hover previews the reverse;
click/Enter/Space pins it, Escape restores the letter. On opening, images reveal
in order, hold as a staggered overlapping collage, then return to aligned blue
letters. Idle reveals stop during pointer/keyboard interaction, offscreen,
when the page is hidden, and when motion is paused or reduced.

The opening rhythm is adapted from boknows-text-image-template (MIT, copyright
2026 bobobo521); its licence is retained in assets/letters/TEMPLATE-LICENSE.txt.
Only the reverse images are offset and rotated. The front letter baseline and
the nine grid cells remain fixed throughout playback.

## Build and Preview

From the repository root:

```
npm --prefix site install
node site/ocean/build.mjs
node --test site/ocean/palette.test.mjs
node site/ocean/check.mjs
python -m http.server 4187 --bind 127.0.0.1 --directory site
```

Open http://127.0.0.1:4187/ocean/index.html.

## Motion

`src/ice` adapts Ice-works-showcase (MIT, copyright Yousuf Soomro).
`ice/LICENSE` retains attribution and third-party noise licence notes. The
original plane shader is unchanged; metadata, atlas, host communication and
motion preferences are adapted. No demo imagery or commercial fonts are shipped.

The original 12-plane geometry is retained; five destinations are selectable.
`js/long-page.js` validates both source and origin for iframe messages. The
carousel yields vertical scrolling to the long page. Horizontal swipe, arrows,
selectors and directory remain available. Global surfaces reuse the source's
capillary-wave formula with gentler lean and swell, via one shared renderer.

Motion pauses offscreen/in background and respects reduced-motion settings.
Solid surfaces and ordinary detail links remain as non-WebGL fallbacks.
