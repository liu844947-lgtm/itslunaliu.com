(() => {
  'use strict';

  const projects = Array.isArray(window.OceanContent?.projects)
    ? window.OceanContent.projects
    : [];
  const requested = new URLSearchParams(location.search).get('id');
  const project = projects.find((item) => item.id === requested) || projects[0];
  if (!project) return;

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value || '';
    });
  };

  setText('[data-project-number]', project.id);
  setText('[data-project-highlight]', project.highlight || project.summary || '');
  setText('[data-project-title]', project.title);
  setText('[data-project-story]', project.story || project.background || '');
  setText('[data-project-result]', project.result || '');
  setText('[data-project-iteration]', project.iteration || '');
  document.title = `${project.title} — lunaliu`;

  const pillNode = document.querySelector('[data-project-pill]');
  if (pillNode) {
    const hidePill = project.hidePill || !project.pill;
    if (hidePill) {
      pillNode.hidden = true;
      pillNode.textContent = '';
    } else {
      pillNode.hidden = false;
      pillNode.textContent = project.pill;
    }
  }

  const englishNode = document.querySelector('[data-project-english]');
  if (englishNode) {
    const hideEnglish = project.hideEnglish || !project.englishTitle;
    if (hideEnglish) {
      englishNode.hidden = true;
      englishNode.textContent = '';
    } else {
      englishNode.hidden = false;
      englishNode.textContent = project.englishTitle;
    }
  }

  const footers = document.querySelectorAll('.site-footer');
  if (project.hideFooter) {
    document.body.classList.add('hide-case-footer');
    footers.forEach((node) => {
      node.hidden = true;
    });
  } else {
    document.body.classList.remove('hide-case-footer');
    footers.forEach((node) => {
      node.hidden = false;
    });
  }

  const tagsNode = document.querySelector('[data-project-tags]');
  if (tagsNode) {
    const tags = Array.isArray(project.tags) ? project.tags.filter(Boolean) : [];
    tagsNode.replaceChildren(...tags.map((tag) => {
      const item = document.createElement('li');
      item.textContent = tag;
      return item;
    }));
  }

  const heroRoot = document.querySelector('[data-case-hero]');
  const heroBg = document.querySelector('[data-project-hero-bg]');
  const devicesRoot = document.querySelector('[data-project-devices]');
  const laptopNode = document.querySelector('[data-device-laptop]');
  const phoneNode = document.querySelector('[data-device-phone]');
  const coverRoot = document.querySelector('[data-project-cover]');
  const coverFallback = document.querySelector('[data-project-cover-fallback]');
  const hasDevices = Boolean(project.devices?.laptop || project.devices?.phone);

  if (heroRoot) {
    heroRoot.classList.toggle('has-devices', hasDevices);
  }
  document.body.classList.toggle('has-case-devices', hasDevices);
  if (heroBg) {
    if (project.heroBg) {
      heroBg.style.backgroundImage = `url("${project.heroBg}")`;
    } else {
      heroBg.removeAttribute('style');
    }
  }

  if (hasDevices && devicesRoot) {
    if (laptopNode && project.devices.laptop) {
      laptopNode.src = project.devices.laptop;
      laptopNode.alt = project.devices.laptopAlt || `${project.title} 桌面端`;
      laptopNode.loading = 'eager';
      laptopNode.hidden = false;
    } else if (laptopNode) {
      laptopNode.hidden = true;
    }
    if (phoneNode && project.devices.phone) {
      phoneNode.src = project.devices.phone;
      phoneNode.alt = project.devices.phoneAlt || `${project.title} 移动端`;
      phoneNode.loading = 'eager';
      phoneNode.hidden = false;
    } else if (phoneNode) {
      phoneNode.hidden = true;
    }
    devicesRoot.hidden = false;
    if (coverFallback) coverFallback.hidden = true;
  } else if (coverRoot) {
    if (devicesRoot) devicesRoot.hidden = true;
    if (project.cover) {
      const img = document.createElement('img');
      img.src = project.cover;
      img.alt = project.coverLabel || project.title;
      img.loading = 'eager';
      coverRoot.replaceChildren(img);
    } else if (coverFallback) {
      coverFallback.hidden = false;
      coverFallback.textContent = project.coverLabel || '主视觉待补';
      coverRoot.replaceChildren(coverFallback);
    }
  }

  const experienceSection = document.querySelector('[data-project-experience]');
  const authNode = document.querySelector('[data-project-experience-auth]');
  const linksNode = document.querySelector('[data-project-links]');
  const links = Array.isArray(project.links) ? project.links.filter((item) => item?.href) : [];
  const auth = project.experienceAuth;
  const hasExperience = links.length > 0;

  if (experienceSection) {
    experienceSection.hidden = !hasExperience;
  }

  if (authNode) {
    if (auth?.phone && auth?.code) {
      authNode.hidden = false;
      authNode.textContent = `登录账号 ${auth.phone} · 验证码 ${auth.code}`;
    } else {
      authNode.hidden = true;
      authNode.textContent = '';
    }
  }

  if (linksNode) {
    if (!hasExperience) {
      linksNode.hidden = true;
      linksNode.replaceChildren();
    } else {
      linksNode.hidden = false;
      const list = document.createElement('ul');
      links.forEach((link) => {
        const item = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.textContent = link.label || link.href;
        item.appendChild(anchor);
        list.appendChild(item);
      });
      linksNode.replaceChildren(list);
    }
  }

  const galleryNode = document.querySelector('[data-project-gallery]');
  if (galleryNode) {
    const items = Array.isArray(project.gallery) ? project.gallery : [];
    const textOnly = Boolean(project.galleryTextOnly);
    galleryNode.classList.toggle('is-text-only', textOnly);
    galleryNode.replaceChildren(...items.map((item) => {
      const article = document.createElement('article');
      article.className = 'case-gallery__item' + (textOnly ? ' is-text-only' : '');
      const title = document.createElement('h3');
      title.textContent = item.title || '';
      article.appendChild(title);

      if (!textOnly && item.src) {
        const figure = document.createElement('figure');
        const media = document.createElement(item.type === 'video' ? 'video' : 'img');
        media.src = item.src;
        if (item.type === 'video') {
          media.controls = true;
          media.playsInline = true;
        } else {
          media.alt = item.title || project.title;
          media.loading = 'lazy';
        }
        figure.appendChild(media);
        article.appendChild(figure);
      } else if (!textOnly && !item.src) {
        const placeholder = document.createElement('div');
        placeholder.className = 'case-gallery__placeholder';
        placeholder.textContent = item.note || '素材待补';
        article.appendChild(placeholder);
      }

      if (item.caption) {
        const caption = document.createElement('p');
        caption.textContent = item.caption;
        article.appendChild(caption);
      }
      return article;
    }));
  }
})();
