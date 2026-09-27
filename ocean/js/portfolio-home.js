(() => {
  'use strict';

  const nodes = [...document.querySelectorAll('.reveal')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (nodes.length) {
    const showAll = () => nodes.forEach((node) => node.classList.add('is-visible'));
    if (reduced.matches || !('IntersectionObserver' in window)) {
      showAll();
    } else {
      const observer = new IntersectionObserver((entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: .12 });

      nodes.forEach((node, index) => {
        node.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
        observer.observe(node);
      });

      const motionListener = () => {
        if (document.documentElement.dataset.motion === 'paused') showAll();
      };
      document.addEventListener('ocean:motionchange', motionListener);
      window.addEventListener('pagehide', () => {
        observer.disconnect();
        document.removeEventListener('ocean:motionchange', motionListener);
      }, { once: true });
    }
  }

  // ETOHA-style pinned projects: stage stays fixed; scroll/click flips the right card.
  const section = document.querySelector('[data-project-pin]');
  const projectsRoot = document.querySelector('[data-projects-root]');
  if (section && projectsRoot) {
    const pages = Math.max(1, Number(section.dataset.projectPages || projectsRoot.dataset.projectCount || 3));
    section.style.setProperty('--project-pages', String(pages));
    const desktopPin = window.matchMedia('(min-width: 761px)');
    let lockScroll = false;
    let lastIndex = -1;
    let ticking = false;

    const pinEnabled = () => desktopPin.matches;

    const indexFromScroll = () => {
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / travel));
      return Math.min(pages - 1, Math.max(0, Math.floor(progress * pages + 1e-4)));
    };

    const syncFromScroll = () => {
      ticking = false;
      if (!pinEnabled() || lockScroll) return;
      const index = indexFromScroll();
      if (index === lastIndex) return;
      lastIndex = index;
      document.dispatchEvent(new CustomEvent('ocean:projectrequest', { detail: { index, source: 'scroll' } }));
    };

    const requestSync = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(syncFromScroll);
    };

    const scrollToIndex = (index) => {
      if (!pinEnabled()) return;
      const next = Math.min(pages - 1, Math.max(0, Number(index) || 0));
      lockScroll = true;
      lastIndex = next;
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const top = section.offsetTop + ((next + 0.45) / pages) * travel;
      window.scrollTo({ top, behavior: reduced.matches ? 'auto' : 'smooth' });
      window.setTimeout(() => {
        lockScroll = false;
      }, reduced.matches ? 40 : 780);
    };

    window.addEventListener('scroll', requestSync, { passive: true });
    window.addEventListener('resize', requestSync, { passive: true });
    desktopPin.addEventListener('change', requestSync);
    document.addEventListener('ocean:projectscroll', (event) => {
      scrollToIndex(event.detail?.index);
    });
    requestSync();
  }

})();
