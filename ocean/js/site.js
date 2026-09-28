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
    const PROJECT_TRANSITION_MS_NEXT = 1100;
    const PROJECT_TRANSITION_MS_PREVIOUS = 560;

    const contentProjects = Array.isArray(window.OceanContent?.projects)
      ? window.OceanContent.projects
      : [];
    function projectHref(project) {
      if (project.caseStudyUrl) return project.caseStudyUrl;
      return `project.html?id=${encodeURIComponent(project.id)}`;
    }

    function hydrateProjectEntries() {
      tiles.forEach((tile, index) => {
        const project = contentProjects[index];
        if (!project) return;
        const title = tile.querySelector('[data-project-title]');
        const summary = tile.querySelector('[data-project-summary]');
        const kind = tile.querySelector('[data-project-kind]');
        const date = tile.querySelector('[data-project-date]');
        const number = tile.querySelector('.project-entry__number');
        const art = tile.querySelector('.project-art');
        const shot = tile.querySelector('.project-art__shot');
        const minimal = Boolean(project.entryMinimal);
        const cutout = Boolean(project.entryPhotoCutout);
        const cornerTitle = Boolean(project.entryTitleCorner || project.entryPhotoCutout);
        tile.classList.toggle('project-entry--minimal', minimal);
        tile.classList.toggle('project-entry--corner-title', cornerTitle && !minimal);
        art?.classList.toggle('project-art--cutout', cutout);
        if (title) title.textContent = project.title;
        if (summary) {
          summary.textContent = project.summary || '';
          summary.hidden = false;
        }
        if (kind) {
          kind.textContent = project.pill || (project.kind === 'personal' ? '个人项目' : '实习项目');
          kind.hidden = true;
        }
        if (number) number.hidden = true;
        if (date) {
          const period = project.entryPeriod || '';
          date.textContent = period;
          date.hidden = !period;
          const match = period.match(/(\d{4})\.(\d{2})/);
          if (match) date.dateTime = `${match[1]}-${match[2]}`;
        }
        const heroSrc = project.entryHero || project.cover;
        if (shot && heroSrc) shot.src = heroSrc;
        tile.href = projectHref(project);
        tile.setAttribute('aria-label', `查看${project.title}`);
      });
      selectors.forEach((button, index) => {
        const project = contentProjects[index];
        if (!project) return;
        const name = button.querySelector('.project-selectors__name');
        const sub = button.querySelector('.project-selectors__sub');
        const no = button.querySelector('.project-selectors__no');
        if (no) no.textContent = String(index + 1).padStart(2, '0');
        if (name) name.textContent = project.englishTitle || project.shortTitle || project.title;
        else button.textContent = project.englishTitle || project.shortTitle || project.title;
        if (sub) sub.textContent = project.navLabel || project.shortTitle || project.title;
        button.setAttribute('aria-label', `${project.title}${project.kind === 'personal' ? '个人项目' : '项目'}`);
      });
      projects.dataset.projectCount = String(count);
      projects.querySelectorAll('[data-project-total]').forEach((node) => {
        node.textContent = String(count).padStart(2, '0');
      });
    }

    function selectProject(value, options = {}) {
      const parsed = Number(value);
      if (!Number.isFinite(parsed)) return;
      const source = options.source || 'direct';
      const previous = current;
      const next = ((Math.trunc(parsed) % count) + count) % count;
      const changed = next !== previous;
      current = next;
      projects.dataset.current = String(current);
      selectors.forEach((button) => button.setAttribute('aria-pressed', String(Number(button.dataset.projectSelect) === current)));
      projects.querySelectorAll('[data-project-current]').forEach((node) => {
        node.textContent = String(current + 1).padStart(2, '0');
      });
      storage.set('project', current);
      const direction = changed ? (current > previous ? 'next' : 'previous') : undefined;
      document.dispatchEvent(new CustomEvent('ocean:projectchange', {
        detail: { index: current, source, changed, direction },
      }));

      if (!changed) {
        tiles.forEach((tile, index) => tile.classList.toggle('is-current', index === current));
        return;
      }

      window.clearTimeout(leaveTimer);
      const backward = current < previous;
      projects.dataset.direction = backward ? 'previous' : 'next';
      projects.classList.add('is-project-transitioning');

      tiles.forEach((tile, index) => {
        tile.classList.remove('is-leaving', 'is-entering');
        if (index !== current && index !== previous) tile.classList.remove('is-current');
      });

      tiles[previous]?.classList.remove('is-current');
      tiles[previous]?.classList.add('is-leaving');
      tiles[current]?.classList.remove('is-current');
      tiles[current]?.classList.add('is-entering');

      const startEnter = () => {
        tiles[current]?.classList.add('is-current');
      };
      if (backward) {
        window.requestAnimationFrame(startEnter);
      } else {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(startEnter);
        });
      }

      leaveTimer = window.setTimeout(() => {
        tiles.forEach((tile, index) => {
          tile.classList.remove('is-leaving', 'is-entering');
          tile.classList.toggle('is-current', index === current);
        });
        projects.classList.remove('is-project-transitioning');
      }, backward ? PROJECT_TRANSITION_MS_PREVIOUS : PROJECT_TRANSITION_MS_NEXT);
    }

    function selectView(value) {
      const view = value === 'list' ? 'list' : 'gallery';
      projects.dataset.view = view;
      viewButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.projectView === view)));
      storage.set('view', view);
      document.dispatchEvent(new CustomEvent('ocean:viewchange', { detail: { view } }));
    }

    selectors.forEach((button) => button.addEventListener('click', () => {
      selectProject(button.dataset.projectSelect, { source: 'select' });
    }));
    projects.querySelector('[data-project-prev]')?.addEventListener('click', () => {
      selectProject(current - 1, { source: 'select' });
    });
    projects.querySelector('[data-project-next]')?.addEventListener('click', () => {
      selectProject(current + 1, { source: 'select' });
    });
    viewButtons.forEach((button) => button.addEventListener('click', () => selectView(button.dataset.projectView)));
    document.addEventListener('ocean:projectrequest', (event) => {
      selectProject(event.detail?.index, { source: event.detail?.source || 'scroll' });
    });

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
