(() => {
  'use strict';
  const mount = document.querySelector('[data-ice-mount]');
  const projects = document.querySelector('[data-projects-root]');
  if (mount && projects) {
    const iframe = document.createElement('iframe');
    iframe.className = 'ice-frame';
    iframe.title = '项目液体轮播';
    iframe.src = 'ice/index.html?driven=1';
    iframe.loading = 'lazy';
    mount.append(iframe);
    let visible = false;
    let ready = false;
    const send = (data) => iframe.contentWindow?.postMessage(data, location.origin);
    const syncMotion = () => send({ type: 'ocean-motion',
      paused: document.documentElement.dataset.motion === 'paused',
      active: visible && !document.hidden && projects.dataset.view === 'gallery',
    });
    const select = () => send({ type: 'phenome-focus', index: Number(projects.dataset.current || 0) });
    const request = (index) => document.dispatchEvent(new CustomEvent('ocean:projectrequest', { detail: { index } }));
    window.addEventListener('message', (event) => {
      if (event.origin !== location.origin || event.source !== iframe.contentWindow) return;
      const data = event.data;
      if (data?.source !== 'phenome-ring-showcase') return;
      if (data.type === 'ready') { ready = true; select(); syncMotion(); }
      if (data.type === 'step' && Math.abs(data.delta) === 1) request(Number(projects.dataset.current || 0) + data.delta);
      const projectCount = Number(projects.dataset.projectCount || projects.querySelectorAll('[data-project-index]').length);
      if (!Number.isInteger(data.index) || data.index < 0 || data.index >= projectCount) return;
      if (data.type === 'select') request(data.index);
      if (data.type === 'card-click') location.href = `project.html?id=${String(data.index + 1).padStart(2, '0')}`;
    });
    iframe.addEventListener('load', () => { select(); syncMotion(); });
    document.addEventListener('ocean:projectchange', select);
    document.addEventListener('ocean:motionchange', syncMotion);
    document.addEventListener('ocean:viewchange', syncMotion);
    document.addEventListener('visibilitychange', syncMotion);
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncMotion();
      if (visible && ready) select();
    }, { rootMargin: '180px' }).observe(mount);
    iframe.addEventListener('error', () => {
      document.querySelector('[data-project-view=list]')?.click();
    });
  }
  const sections = [...document.querySelectorAll('main > section[id]')];
  const links = [...document.querySelectorAll('#primary-nav a[href^="#"]')];
  const header = document.querySelector('.site-header');
  const darkIds = new Set(['projects', 'contact', 'stickers']);
  const updateCurrent = () => {
    const midpoint = window.scrollY + window.innerHeight * .3;
    let current = sections[0]?.id;
    for (const section of sections) if (section.offsetTop <= midpoint) current = section.id;
    links.forEach((link) => {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (header) header.dataset.onDark = darkIds.has(current) ? 'true' : 'false';
  };
  window.addEventListener('scroll', updateCurrent, { passive: true });
  window.addEventListener('resize', updateCurrent, { passive: true });
  updateCurrent();
})();
