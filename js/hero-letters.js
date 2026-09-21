(function () {
  const state = {
    letters: [],
    timers: [],
    autoTimer: null,
    activeQueue: [],
    hovered: null,
    paused: false,
    ready: false,
    visible: true,
    inIntro: false,
    lastAutomatic: -1,
    cleanup: []
  };

  function clearTimers() {
    state.timers.forEach((timer) => window.clearTimeout(timer));
    state.timers = [];
    window.clearTimeout(state.autoTimer);
    state.autoTimer = null;
  }

  function addListener(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    state.cleanup.push(() => target.removeEventListener(event, handler, options));
  }

  function addTimer(callback, delay) {
    const timer = window.setTimeout(callback, delay);
    state.timers.push(timer);
    return timer;
  }

  function chooseImage(letter) {
    const options = letter.loaded.filter((item) => item !== letter.lastImage);
    const pool = options.length ? options : letter.loaded;
    const image = pool[Math.floor(Math.random() * pool.length)];
    letter.lastImage = image;
    return image;
  }

  function removeSticker(letter) {
    const sticker = letter.element.querySelector('.hero-letter__image');
    sticker?.remove();
  }

  function hide(letter, immediate) {
    window.clearTimeout(letter.leaveTimer);
    letter.active = false;
    letter.element.classList.remove('is-active', 'is-pending');
    letter.element.style.paddingInline = '0';
    const sticker = letter.element.querySelector('.hero-letter__image');
    if (!sticker) return;
    if (immediate || letter.reduced.matches) {
      sticker.remove();
      return;
    }
    letter.element.classList.add('is-returning');
    const animation = sticker.animate([
      { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      { opacity: 1, transform: 'translate(-50%, -50%) scale(1.045)', offset: 0.2 },
      { opacity: 0, transform: 'translate(-50%, -50%) scale(0.35)' }
    ], {
      duration: window.LETTER_CONFIG.exitDuration,
      easing: 'cubic-bezier(.22, 1, .36, 1)',
      fill: 'forwards'
    });
    animation.onfinish = () => {
      sticker.remove();
      letter.element.classList.remove('is-returning');
    };
  }

  function show(letter, options = {}) {
    if (letter.reduced.matches || !letter.loaded.length) return;
    if (state.inIntro && !options.intro) stopIntro();
    window.clearTimeout(letter.leaveTimer);
    removeSticker(letter);
    const source = chooseImage(letter);
    const image = document.createElement('img');
    const sticker = document.createElement('span');
    sticker.className = 'hero-letter__image';
    image.src = source;
    image.alt = '';
    image.draggable = false;
    sticker.append(image);
    letter.element.append(sticker);
    letter.active = true;
    letter.element.classList.remove('is-pending', 'is-returning');
    letter.element.classList.add('is-active');
    const glyphWidth = letter.character.getBoundingClientRect().width;
    const imageWidth = letter.imageWidths.get(source) || glyphWidth;
    const extraSpace = Math.min(38, Math.max(12, (imageWidth - glyphWidth) * 0.22));
    letter.element.style.paddingInline = `${extraSpace}px`;
    sticker.animate([
      { opacity: 0, transform: 'translate(-50%, -50%) scale(.45) rotate(-7deg)' },
      { opacity: 1, transform: 'translate(-50%, -50%) scale(1.06) rotate(2deg)', offset: 0.72 },
      { opacity: 1, transform: 'translate(-50%, -50%) scale(1) rotate(0)' }
    ], {
      duration: window.LETTER_CONFIG.enterDuration,
      easing: 'cubic-bezier(.22, 1, .36, 1)',
      fill: 'both'
    });
    state.activeQueue = state.activeQueue.filter((index) => index !== letter.index);
    state.activeQueue.push(letter.index);
    if (options.automatic) {
      while (state.activeQueue.length > 4) {
        hide(state.letters[state.activeQueue.shift()], false);
      }
      letter.leaveTimer = window.setTimeout(() => {
        if (state.hovered !== letter.index) hide(letter, false);
      }, 1200);
    }
  }

  function stopIntro() {
    state.inIntro = false;
    state.timers.forEach((timer) => window.clearTimeout(timer));
    state.timers = [];
    state.letters.forEach((letter) => hide(letter, true));
  }

  function scheduleAuto() {
    window.clearTimeout(state.autoTimer);
    if (!state.ready || state.paused || state.hovered !== null || document.hidden || !state.visible) return;
    const delay = 1500 + Math.floor(Math.random() * 1500);
    state.autoTimer = window.setTimeout(() => {
      let candidates = state.letters.filter((letter) => letter.loaded.length && letter.index !== state.lastAutomatic);
      if (!candidates.length) candidates = state.letters.filter((letter) => letter.loaded.length);
      if (candidates.length) {
        const letter = candidates[Math.floor(Math.random() * candidates.length)];
        state.lastAutomatic = letter.index;
        show(letter, { automatic: true });
      }
      scheduleAuto();
    }, delay);
  }

  function playIntro(status) {
    clearTimers();
    state.activeQueue = [];
    if (!state.letters.length || state.letters[0].reduced.matches) {
      status.textContent = '已遵循系统的减少动态效果设置';
      return;
    }
    state.inIntro = true;
    const available = state.letters.filter((letter) => letter.loaded.length);
    available.forEach((letter) => letter.element.classList.add('is-pending'));
    available.forEach((letter, index) => {
      addTimer(() => show(letter, { intro: true }), index * 70);
    });
    available.forEach((letter, index) => {
      addTimer(() => hide(letter, false), available.length * 70 + 650 + index * 55);
    });
    addTimer(() => {
      state.inIntro = false;
      status.textContent = state.paused ? '自动展示已暂停，仍可悬停探索' : '移动到字母上，看看它会变成什么';
      scheduleAuto();
    }, available.length * 70 + 650 + available.length * 55 + 50);
  }

  async function preload(letter, filename) {
    const source = `assets/letters/${filename}`;
    const image = new Image();
    image.src = source;
    try {
      await image.decode();
      letter.loaded.push(source);
      const ratio = image.naturalWidth / image.naturalHeight;
      letter.imageWidths.set(source, Math.min(130, Math.max(56, 112 * ratio)));
    } catch {
      // A failed decorative asset leaves its text character available.
    }
  }

  function makeLetter(letter, index, sourceImages, root, reduced) {
    const element = document.createElement('span');
    element.className = 'hero-letter';
    const character = document.createElement('span');
    character.className = 'hero-letter__character';
    character.textContent = letter;
    const hit = document.createElement('button');
    hit.type = 'button';
    hit.className = 'hero-letter__hit';
    hit.setAttribute('aria-label', `探索字母 ${letter}`);
    element.append(character, hit);
    root.append(element);
    return {
      index,
      element,
      character,
      hit,
      loaded: [],
      imageWidths: new Map(),
      lastImage: null,
      active: false,
      leaveTimer: null,
      reduced,
      sourceImages
    };
  }

  function bindLetter(letter) {
    addListener(letter.hit, 'pointerenter', (event) => {
      if (event.pointerType === 'touch') return;
      state.hovered = letter.index;
      window.clearTimeout(state.autoTimer);
      show(letter);
    });
    addListener(letter.hit, 'pointerleave', (event) => {
      if (event.pointerType === 'touch') return;
      if (state.hovered === letter.index) state.hovered = null;
      hide(letter, false);
      scheduleAuto();
    });
    addListener(letter.hit, 'focus', () => show(letter));
    addListener(letter.hit, 'blur', () => hide(letter, false));
    addListener(letter.hit, 'click', () => {
      show(letter);
      window.clearTimeout(letter.leaveTimer);
      letter.leaveTimer = window.setTimeout(() => hide(letter, false), 900);
    });
  }

  function init() {
    const root = document.querySelector('#hero-letters');
    const status = document.querySelector('#letter-status');
    const replay = document.querySelector('#letter-replay');
    const pause = document.querySelector('#letter-pause');
    const config = window.LETTER_CONFIG;
    if (!root || !status || !replay || !pause || !config || state.ready) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const characters = Array.from(config.text);
    let imageIndex = 0;
    let spaceIndex = 0;
    characters.forEach((character) => {
      if (/\s/.test(character)) {
        const space = document.createElement('span');
        space.className = 'hero-letter__space';
        if (spaceIndex === 1) space.classList.add('hero-letter__space--break');
        space.setAttribute('aria-hidden', 'true');
        root.append(space);
        spaceIndex += 1;
        return;
      }
      const letter = makeLetter(character, imageIndex, config.imagesByPosition[imageIndex] || [], root, reduced);
      state.letters.push(letter);
      bindLetter(letter);
      imageIndex += 1;
    });
    addListener(replay, 'click', () => playIntro(status));
    addListener(pause, 'click', () => {
      state.paused = !state.paused;
      pause.textContent = state.paused ? '继续自动' : '暂停自动';
      pause.setAttribute('aria-pressed', String(state.paused));
      status.textContent = state.paused ? '自动展示已暂停，仍可悬停探索' : '移动到字母上，看看它会变成什么';
      scheduleAuto();
    });
    addListener(document, 'visibilitychange', () => {
      if (document.hidden) window.clearTimeout(state.autoTimer);
      else scheduleAuto();
    });
    const observer = new IntersectionObserver((entries) => {
      state.visible = entries[0].isIntersecting;
      scheduleAuto();
    }, { threshold: 0.25 });
    observer.observe(root);
    state.cleanup.push(() => observer.disconnect());
    addListener(reduced, 'change', () => {
      state.letters.forEach((letter) => hide(letter, true));
      if (reduced.matches) {
        clearTimers();
        status.textContent = '已遵循系统的减少动态效果设置';
      } else {
        playIntro(status);
      }
    });
    Promise.all(state.letters.flatMap((letter) => letter.sourceImages.map((filename) => preload(letter, filename)))).then(() => {
      state.ready = true;
      replay.disabled = false;
      pause.disabled = false;
      playIntro(status);
    });
  }

  function destroy() {
    clearTimers();
    state.letters.forEach((letter) => {
      window.clearTimeout(letter.leaveTimer);
      removeSticker(letter);
    });
    state.cleanup.forEach((cleanup) => cleanup());
    state.letters = [];
    state.cleanup = [];
    state.ready = false;
  }

  window.HeroLetters = { init, destroy };
}());
