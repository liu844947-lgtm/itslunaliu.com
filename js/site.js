window.PortfolioSite = {
  init() {
    window.HeroLetters?.init();
    const toggle = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-menu]');
    toggle?.addEventListener('click', () => {
      const expanded = menu?.classList.toggle('is-open') ?? false;
      toggle.setAttribute('aria-expanded', String(expanded));
    });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = document.querySelectorAll('[data-reveal]');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      revealItems.forEach((item) => observer.observe(item));
    }

    document.querySelectorAll('[data-transition-link]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const target = link.getAttribute('href');
        if (!target || target === './' || reduceMotion) return;
        const destination = target.startsWith('#') ? document.querySelector(target) : null;
        if (!destination) return;
        event.preventDefault();
        menu?.classList.remove('is-open');
        toggle?.setAttribute('aria-expanded', 'false');
        document.body.classList.add('is-transitioning');
        window.setTimeout(() => {
          window.scrollTo({ top: destination.offsetTop, behavior: 'instant' });
          window.history.replaceState(null, '', target);
          document.body.classList.remove('is-transitioning');
        }, 430);
      });
    });

    const filters = document.querySelectorAll('[data-project-filter]');
    const cards = document.querySelectorAll('[data-project-card]');
    filters.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        cards.forEach((card, index) => {
          const visible = filter === 'all' || card.dataset.category.split(' ').includes(filter);
          card.animate?.([
            { opacity: 0, transform: 'translateY(12px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ], { duration: reduceMotion ? 1 : 360, delay: reduceMotion ? 0 : index * 35, easing: 'cubic-bezier(.22,.8,.2,1)' });
          card.hidden = !visible;
        });
      });
    });
  }
};
