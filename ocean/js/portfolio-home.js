(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  const section = document.querySelector('[data-project-pin]');
  const projectsRoot = document.querySelector('[data-projects-root]');
  if (!section || !projectsRoot) return;

  const pages = Math.max(1, Number(section.dataset.projectPages || projectsRoot.dataset.projectCount || 3));
  section.style.setProperty('--project-pages', String(pages));

  const desktopPin = window.matchMedia('(min-width: 761px)');
  let userSelectUntil = 0;
  let lastIndex = -1;
  let ticking = false;
  let stepUntil = 0;
  let touchY = null;

  const pinEnabled = () => desktopPin.matches && !reduced.matches;

  const travel = () => Math.max(section.offsetHeight - window.innerHeight, 1);

  const indexFromScroll = () => {
    const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / travel()));
    if (pages <= 1) return 0;
    return Math.min(pages - 1, Math.max(0, Math.round(progress * (pages - 1))));
  };

  const slotTop = (index) => {
    const next = Math.min(pages - 1, Math.max(0, Number(index) || 0));
    if (pages <= 1) return section.offsetTop;
    return section.offsetTop + (next / (pages - 1)) * travel();
  };

  const isPinned = () => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
  };

  const showIndex = (index, source) => {
    const next = Math.min(pages - 1, Math.max(0, index));
    if (next === lastIndex && source !== 'select') return;
    lastIndex = next;
    document.dispatchEvent(new CustomEvent('ocean:projectrequest', { detail: { index: next, source } }));
  };

  const holdSlot = (index) => {
    window.scrollTo({ top: slotTop(index), behavior: 'auto' });
  };

  const stepPinned = (dir) => {
    if (!pinEnabled() || !isPinned() || !dir) return false;
    const index = lastIndex < 0 ? indexFromScroll() : lastIndex;
    if (dir > 0 && index >= pages - 1) return false;
    if (dir < 0 && index <= 0) return false;
    if (Date.now() < stepUntil) return true;
    stepUntil = Date.now() + (dir < 0 ? 560 : 1080);
    const next = index + dir;
    holdSlot(next);
    showIndex(next, 'scroll');
    return true;
  };

  const syncFromScroll = () => {
    ticking = false;
    if (!pinEnabled()) return;
    if (Date.now() < userSelectUntil || Date.now() < stepUntil) return;
    if (!isPinned()) {
      const index = indexFromScroll();
      if (section.getBoundingClientRect().top > 1 && section.getBoundingClientRect().bottom < window.innerHeight) return;
      if (index !== lastIndex) showIndex(index, 'scroll');
      return;
    }
    const index = indexFromScroll();
    if (lastIndex < 0) {
      lastIndex = index;
      return;
    }
    if (index === lastIndex) return;
    if (Math.abs(index - lastIndex) > 1) {
      const next = lastIndex + Math.sign(index - lastIndex);
      holdSlot(next);
      showIndex(next, 'scroll');
      return;
    }
    showIndex(index, 'scroll');
  };

  const requestSync = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(syncFromScroll);
  };

  window.addEventListener('scroll', requestSync, { passive: true });
  window.addEventListener('resize', requestSync, { passive: true });
  desktopPin.addEventListener('change', requestSync);

  window.addEventListener('wheel', (event) => {
    if (!pinEnabled() || !isPinned()) return;
    const dir = event.deltaY > 0 ? 1 : event.deltaY < 0 ? -1 : 0;
    if (!dir) return;
    if (!stepPinned(dir) && Date.now() >= stepUntil) return;
    if (Date.now() < stepUntil || (dir > 0 && lastIndex < pages - 1) || (dir < 0 && lastIndex > 0)) {
      event.preventDefault();
    }
  }, { passive: false });

  window.addEventListener('touchstart', (event) => {
    touchY = event.touches[0]?.clientY ?? null;
  }, { passive: true });

  window.addEventListener('touchmove', (event) => {
    if (!pinEnabled() || !isPinned() || touchY == null) return;
    const y = event.touches[0]?.clientY;
    if (!Number.isFinite(y)) return;
    const delta = touchY - y;
    if (Math.abs(delta) < 28) return;
    const dir = delta > 0 ? 1 : -1;
    const held = stepPinned(dir);
    if (held) event.preventDefault();
    touchY = y;
  }, { passive: false });

  document.addEventListener('ocean:projectchange', (event) => {
    const index = Number(event.detail?.index);
    const source = event.detail?.source || 'direct';
    if (!Number.isFinite(index)) return;
    lastIndex = index;
    if (source === 'select' && pinEnabled()) {
      userSelectUntil = Date.now() + (event.detail?.direction === 'previous' ? 560 : 1100);
      if (isPinned() || section.getBoundingClientRect().top < window.innerHeight * 0.35) holdSlot(index);
    }
  });

  requestSync();
})();
