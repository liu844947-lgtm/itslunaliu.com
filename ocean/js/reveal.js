(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function markVisible(node) {
    node.classList.add('is-visible', 'visible');
  }

  function autoRevealCaseStudy() {
    const body = document.body;
    const isCaseStudy = body.classList.contains('case-study-page');
    const isProjectDetail = body.classList.contains('project-detail-page');
    if (!isCaseStudy && !isProjectDetail) return;

    const selectors = isProjectDetail
      ? [
        '.case-hero .case-hero__copy > *',
        '.case-hero .case-hero__media',
        '.case-story > *',
        '.case-gallery > *',
        '.case-gallery__grid > *',
        '.case-outcome > *',
        '.case-outcome__grid > article',
        '.case-back-row > *',
      ]
      : [
        '.case-hero .hero-copy > *',
        '.case-hero .hero-media',
        '.case-section .section-head',
        '.case-section .lead',
        '.case-section .status-note',
        '.case-section .pain-card',
        '.case-section .card',
        '.case-section .competitor-card',
        '.case-section .decision',
        '.case-section .flow-node',
        '.case-section .screen-shot',
        '.case-section .image-panel',
        '.case-section .dimension',
        '.case-section .demo-bilibili',
        '.case-section .agent-flow',
        '.case-section .sequence-diagram',
        '.case-section .table-scroll',
        '.case-section .pain-grid > .pain-card',
      ];
    document.querySelectorAll(selectors.join(',')).forEach((node, index) => {
      if (node.classList.contains('reveal')) return;
      node.classList.add('reveal');
      const delay = index % 6;
      if (delay) node.classList.add(`reveal-delay-${delay}`);
    });
  }

  function initReveal() {
    autoRevealCaseStudy();
    const nodes = [...document.querySelectorAll('.reveal')];
    if (!nodes.length) return;

    if (reduced.matches || !('IntersectionObserver' in window)) {
      nodes.forEach(markVisible);
      return;
    }

    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        markVisible(entry.target);
        instance.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    nodes.forEach((node, index) => {
      if (!node.classList.contains('reveal-delay-1')
        && !node.classList.contains('reveal-delay-2')
        && !node.classList.contains('reveal-delay-3')
        && !node.classList.contains('reveal-delay-4')
        && !node.classList.contains('reveal-delay-5')) {
        node.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
      }
      observer.observe(node);
    });

    document.addEventListener('ocean:motionchange', () => {
      if (document.documentElement.dataset.motion === 'paused') {
        nodes.forEach(markVisible);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal, { once: true });
  } else {
    initReveal();
  }
})();
