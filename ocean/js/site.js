(() => {
  'use strict';

  const storage = {
    get(key, fallback) {
      try { return sessionStorage.getItem(`ocean:${key}`) ?? fallback; }
      catch { return fallback; }
    },
    set(key, value) {
      try { sessionStorage.setItem(`ocean:${key}`, String(value)); }
      catch { /* The preview also works when storage is unavailable. */ }
    }
  };

  function init() {
    if (document.body.dataset.oceanReady) return;
    document.body.dataset.oceanReady = 'true';
    document.body.classList.add('has-js');

    const nav = document.querySelector('#primary-nav');
    const menu = document.querySelector('[data-menu-toggle]');
    function closeMenu() {
      menu?.setAttribute('aria-expanded', 'false');
      nav?.classList.remove('is-open');
    }
    menu?.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      nav?.classList.toggle('is-open', open);
    });
    nav?.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (!nav?.contains(event.target) && !menu?.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menu.focus();
      }
    });

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionButtons = [...document.querySelectorAll('[data-motion-toggle]')];
    let userPaused = storage.get('motion', 'running') === 'paused';
    function updateMotion() {
      const paused = reduced.matches || userPaused;
      document.documentElement.dataset.motion = paused ? 'paused' : 'running';
      motionButtons.forEach((button) => {
        button.setAttribute('aria-pressed', String(paused));
        button.disabled = reduced.matches;
        button.textContent = reduced.matches ? '已减少动效' : paused ? '播放动效' : '暂停动效';
      });
      document.dispatchEvent(new CustomEvent('ocean:motionchange', { detail: { paused } }));
    }
    motionButtons.forEach((button) => button.addEventListener('click', () => {
      userPaused = !userPaused;
      storage.set('motion', userPaused ? 'paused' : 'running');
      updateMotion();
    }));
    reduced.addEventListener('change', updateMotion);
    updateMotion();

    const projects = document.querySelector('[data-projects-root]');
    if (!projects) return;
    const tiles = [...projects.querySelectorAll('[data-project-index]')];
    const selectors = [...projects.querySelectorAll('[data-project-select]')];
    const viewButtons = [...projects.querySelectorAll('[data-project-view]')];
    const count = tiles.length;
    if (!count) return;
    let current = 0;
    let leaveTimer = 0;

    const contentProjects = Array.isArray(window.OceanContent?.projects)
      ? window.OceanContent.projects
      : [];
    function hydrateProjectEntries() {
      tiles.forEach((tile, index) => {
        const project = contentProjects[index];
        if (!project) return;
        const title = tile.querySelector('[data-project-title]');
        const summary = tile.querySelector('[data-project-summary]');
        const kind = tile.querySelector('[data-project-kind]');
        if (title) title.textContent = project.title;
        if (summary) summary.textContent = project.summary;
        if (kind) kind.textContent = project.pill || (project.kind === 'personal' ? '个人项目' : '实习项目');
        tile.href = `project.html?id=${encodeURIComponent(project.id)}`;
        tile.setAttribute('aria-label', `查看${project.title}`);
      });
      selectors.forEach((button, index) => {
        const project = contentProjects[index];
        if (!project) return;
        button.textContent = project.shortTitle || project.title;
        button.setAttribute('aria-label', `${project.title}${project.kind === 'personal' ? '个人项目' : '项目'}`);
      });
      projects.dataset.projectCount = String(count);
      projects.querySelectorAll('[data-project-total]').forEach((node) => {
        node.textContent = String(count).padStart(2, '0');
      });
    }

    function selectProject(value) {
      const parsed = Number(value);
      if (!Number.isFinite(parsed)) return;
      const previous = current;
      const next = ((Math.trunc(parsed) % count) + count) % count;
      const changed = next !== previous;
      current = next;
      if (changed) {
        window.clearTimeout(leaveTimer);
        projects.dataset.direction = current > previous ? 'next' : 'previous';
        tiles.forEach((tile, index) => {
          tile.classList.toggle('is-leaving', index === previous);
          tile.classList.toggle('is-entering', index === current);
        });
        leaveTimer = window.setTimeout(() => {
          tiles.forEach((tile) => tile.classList.remove('is-leaving', 'is-entering'));
        }, 980);
      }
      projects.dataset.current = String(current);
      tiles.forEach((tile, index) => tile.classList.toggle('is-current', index === current));
      selectors.forEach((button) => button.setAttribute('aria-pressed', String(Number(button.dataset.projectSelect) === current)));
      projects.querySelectorAll('[data-project-current]').forEach((node) => {
        node.textContent = String(current + 1).padStart(2, '0');
      });
      storage.set('project', current);
      document.dispatchEvent(new CustomEvent('ocean:projectchange', { detail: { index: current } }));
    }

    function selectView(value) {
      const view = value === 'list' ? 'list' : 'gallery';
      projects.dataset.view = view;
      viewButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.projectView === view)));
      storage.set('view', view);
      document.dispatchEvent(new CustomEvent('ocean:viewchange', { detail: { view } }));
    }

    selectors.forEach((button) => button.addEventListener('click', () => {
      selectProject(button.dataset.projectSelect);
      document.dispatchEvent(new CustomEvent('ocean:projectscroll', { detail: { index: current } }));
    }));
    projects.querySelector('[data-project-prev]')?.addEventListener('click', () => {
      selectProject(current - 1);
      document.dispatchEvent(new CustomEvent('ocean:projectscroll', { detail: { index: current } }));
    });
    projects.querySelector('[data-project-next]')?.addEventListener('click', () => {
      selectProject(current + 1);
      document.dispatchEvent(new CustomEvent('ocean:projectscroll', { detail: { index: current } }));
    });
    viewButtons.forEach((button) => button.addEventListener('click', () => selectView(button.dataset.projectView)));
    document.addEventListener('ocean:projectrequest', (event) => selectProject(event.detail?.index));

    const stage = projects.querySelector('[data-ice-stage], [data-liquid-stage]');
    if (stage) {
      stage.tabIndex = 0;
      stage.setAttribute('aria-label', '项目展示，使用左右方向键切换');
      stage.addEventListener('keydown', (event) => {
        if (event.target !== stage || projects.dataset.view !== 'gallery') return;
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        selectProject(current + (event.key === 'ArrowRight' ? 1 : -1));
      });
    }
    hydrateProjectEntries();
    selectView(storage.get('view', 'gallery'));
    selectProject(storage.get('project', '0'));
  }

  window.OceanSite = { init };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
