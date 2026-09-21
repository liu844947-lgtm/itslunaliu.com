(function () {
  "use strict";

  const root = document.documentElement;
  const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  const state = {
    initialized: false,
    generation: 0,
    cleanups: [],
    refreshers: [],
  };

  function motionEnabled() {
    return !reducedQuery.matches && root.dataset.motion !== "paused" && !document.hidden;
  }

  function listen(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    state.cleanups.push(() => target.removeEventListener(type, handler, options));
  }

  function watchMedia(query, handler) {
    query.addEventListener("change", handler);
    state.cleanups.push(() => query.removeEventListener("change", handler));
  }

  function decodeImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = async () => {
        try {
          if (typeof image.decode === "function") await image.decode();
          resolve(image);
        } catch (error) {
          reject(error);
        }
      };
      image.onerror = reject;
      image.src = src;
    });
  }

  function initLetters(generation) {
    const letters = Array.isArray(window.OceanAssets?.letters)
      ? window.OceanAssets.letters
      : [];

    const title = document.querySelector('.portfolio-title');
    if (!title) return;
    const controls = [];
    const timers = new Set();
    let ready = false, visible = false, inside = false, started = false, next = 0;
    const later = (fn, delay) => {
      const timer = setTimeout(() => { timers.delete(timer); fn(); }, delay);
      timers.add(timer);
    };
    const stop = () => {
      timers.forEach(clearTimeout);
      timers.clear();
      controls.forEach(control => control.reset());
    };
    const canPlay = () => ready && visible && !inside && motionEnabled();
    const idle = () => {
      if (!canPlay()) return;
      later(() => {
        if (!canPlay()) return;
        const control = controls[next++ % controls.length];
        control?.flip(true);
        later(() => control?.reset(), 1200);
        idle();
      }, 3600);
    };
    const refresh = () => {
      stop();
      if (!canPlay() || !controls.length) return;
      if (started) { idle(); return; }
      started = true;
      // Source template rhythm: ordered opening, held collage, then letter return.
      controls.forEach((control, index) => later(() => control.flip(true), 250 + index * 70));
      controls.forEach((control, index) => later(() => control.reset(), 2300 + index * 65));
      later(idle, 3000);
    };
    listen(title, 'pointerenter', () => { inside = true; stop(); });
    listen(title, 'pointerleave', () => { inside = false; refresh(); });
    listen(title, 'focusin', () => { inside = true; stop(); });
    listen(title, 'focusout', event => { if (!title.contains(event.relatedTarget)) { inside = false; refresh(); } });
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; refresh(); }, { threshold: .25 });
    observer.observe(title);
    state.refreshers.push(refresh);
    state.cleanups.push(() => { observer.disconnect(); stop(); });

    const pending = letters.slice(0, 9).map((asset, index) => {
      if (!asset || typeof asset.src !== "string" || !asset.src.trim()) return;
      const holder = document.querySelector(`[data-letter-index="${index}"]`);
      const text = holder?.querySelector(".letter-text");
      if (!holder || !text) return;

      return decodeImage(asset.src.trim()).then((decoded) => {
        if (!state.initialized || state.generation !== generation || !holder.isConnected) return;
        const image = document.createElement("img");
        image.className = "letter-image";
        image.dataset.oceanMotion = "letter";
        image.src = decoded.currentSrc || decoded.src;
        image.alt = "";
        image.setAttribute("aria-hidden", "true");
        image.draggable = false;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "letter-flip";
        button.setAttribute("aria-label", `${asset.character} / ${index + 1}`);
        button.setAttribute("aria-pressed", "false");
        button.append(text, image);
        holder.append(button);
        let pinned = false;
        const flip = (on) => {
          button.classList.toggle("is-flipped", on);
          button.setAttribute("aria-pressed", String(on));
        };
        controls[index] = { flip, reset: () => flip(pinned) };
        listen(button, "pointerenter", (event) => { if (event.pointerType !== "touch") flip(true); });
        listen(button, "pointerleave", () => flip(pinned));
        listen(button, "click", () => { pinned = !pinned; flip(pinned); });
        listen(button, "keydown", (event) => { if (event.key === "Escape") { pinned = false; flip(false); } });
        state.cleanups.push(() => { holder.append(text); button.remove(); });
      }).catch(() => {
        /* Keep the authored letter visible when an asset cannot be decoded. */
      });
    });
    Promise.allSettled(pending).then(() => {
      if (!state.initialized || state.generation !== generation) return;
      ready = true;
      refresh();
    });
  }

  function initPaperBoatCursor() {
    let cursor = null;
    let canvas = null;
    let context = null;
    let frame = 0;
    let points = [];
    let ripples = [];
    let lastPoint = null;
    let lastRippleTime = 0;
    let heading = 0;
    let facing = 1;
    let active = false;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const isEditable = (target) => Boolean(target?.closest?.(
      "input, textarea, select, [contenteditable]:not([contenteditable='false'])"
    ));

    function removeCursor() {
      active = false;
      root.classList.remove("ocean-cursor-active");
      cursor?.classList.remove("is-visible");
    }

    function resizeCanvas() {
      if (!canvas || !context) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(now) {
      frame = 0;
      if (!context || !motionEnabled()) {
        points = [];
        context?.clearRect(0, 0, width, height);
        return;
      }

      points = points.filter((point) => now - point.time < 1000);
      ripples = ripples.filter((ripple) => now - ripple.time < 920);
      context.clearRect(0, 0, width, height);
      if (points.length > 1) {
        context.lineCap = "round";
        context.lineJoin = "round";
        for (let index = 1; index < points.length; index += 1) {
          const previous = points[index - 1];
          const point = points[index];
          const age = (now - point.time) / 1000;
          context.beginPath();
          context.moveTo(previous.x, previous.y);
          context.lineTo(point.x, point.y);
          context.strokeStyle = `rgba(111, 196, 205, ${Math.max(0, (1 - age) * 0.24)})`;
          context.lineWidth = Math.max(0.5, (1 - age) * 2.2);
          context.stroke();
        }
      }
      ripples.forEach((ripple) => {
        const age = (now - ripple.time) / 920;
        context.beginPath();
        context.ellipse(ripple.x, ripple.y, 3 + age * 15, 1.3 + age * 5, ripple.angle, 0, Math.PI * 2);
        context.strokeStyle = `rgba(118, 197, 202, ${Math.max(0, (1 - age) * 0.16)})`;
        context.lineWidth = Math.max(0.45, 1.2 - age * 0.7);
        context.stroke();
      });
      if (points.length || ripples.length) frame = requestAnimationFrame(draw);
    }

    function requestDraw() {
      if (!frame && (points.length || ripples.length)) frame = requestAnimationFrame(draw);
    }

    function enable() {
      if (cursor || !finePointerQuery.matches || !motionEnabled()) return;
      canvas = document.createElement("canvas");
      canvas.className = "ocean-cursor-trail";
      canvas.setAttribute("aria-hidden", "true");
      context = canvas.getContext("2d");
      if (!context) {
        canvas = null;
        return;
      }

      cursor = document.createElement("div");
      cursor.className = "ocean-paper-cursor";
      cursor.setAttribute("aria-hidden", "true");
      cursor.innerHTML = [
        '<svg viewBox="0 0 32 25" focusable="false" aria-hidden="true">',
        '<path class="paper-cursor__sail" d="M3 11.5 16 2.5l13 9H3Z"/>',
        '<path class="paper-cursor__hull" d="M2 11.5h28l-6 10H8l-6-10Z"/>',
        '<path class="paper-cursor__fold" d="m8 21.5 8-10 8 10M3 11.5h26"/>',
        '<path class="paper-cursor__bow" d="m24 12 3.5 3.2"/>',
        "</svg>",
      ].join("");
      document.body.append(canvas, cursor);
      resizeCanvas();
    }

    function disable() {
      removeCursor();
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      points = [];
      ripples = [];
      canvas?.remove();
      cursor?.remove();
      canvas = null;
      cursor = null;
      context = null;
      lastPoint = null;
    }

    function refresh() {
      if (finePointerQuery.matches && motionEnabled()) enable();
      else disable();
    }

    function onPointerMove(event) {
      if (!cursor || event.pointerType === "touch" || isEditable(event.target)) {
        lastPoint = null;
        removeCursor();
        return;
      }
      active = true;
      root.classList.add("ocean-cursor-active");
      cursor.classList.add("is-visible");

      const point = { x: event.clientX, y: event.clientY, time: performance.now() };
      if (!lastPoint || Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y) > 3) {
        if (lastPoint) {
          const dx = point.x - lastPoint.x;
          const dy = point.y - lastPoint.y;
          if (Math.abs(dx) > 2) facing = dx < 0 ? -1 : 1;
          const targetHeading = Math.max(-18, Math.min(18, Math.atan2(dy, Math.max(8, Math.abs(dx))) * 180 / Math.PI));
          heading += (targetHeading - heading) * 0.28;
        }
        points.push(point);
        if (points.length > 48) points.shift();
        if (point.time - lastRippleTime > 110) {
          ripples.push({ x: point.x - 3, y: point.y + 8, time: point.time, angle: heading * Math.PI / 180 });
          lastRippleTime = point.time;
        }
        lastPoint = point;
        requestDraw();
      }
      cursor.style.transform = `translate3d(${event.clientX - 2}px, ${event.clientY - 12}px, 0) rotate(${heading}deg) scaleX(${facing})`;
    }

    function onKeyDown() {
      if (active) removeCursor();
    }

    listen(window, "pointermove", onPointerMove, { passive: true });
    listen(window, "pointerleave", removeCursor);
    listen(window, "blur", removeCursor);
    listen(window, "keydown", onKeyDown, true);
    listen(window, "resize", resizeCanvas, { passive: true });
    watchMedia(finePointerQuery, refresh);
    state.refreshers.push(refresh);
    state.cleanups.push(disable);
    refresh();
  }

  function initLiquidGallery() {
    const projectsRoot = document.querySelector("[data-projects-root]");
    const stage = projectsRoot?.querySelector("[data-liquid-stage]");
    const tiles = stage ? Array.from(stage.querySelectorAll(".project-tile[data-project-index]")) : [];
    if (!projectsRoot || !stage || !tiles.length) return;

    const canvas = document.createElement("canvas");
    canvas.className = "ocean-liquid-canvas";
    canvas.setAttribute("aria-hidden", "true");
    canvas.dataset.implementation = "original-liquid-study";
    stage.prepend(canvas);
    const context = canvas.getContext("2d");
    if (!context) {
      canvas.remove();
      return;
    }

    const initialIndex = Number(projectsRoot.dataset.current);
    let current = Number.isInteger(initialIndex)
      ? Math.max(0, Math.min(tiles.length - 1, initialIndex))
      : 0;
    let displayCurrent = current;
    let dragOffset = 0;
    let pointerId = null;
    let pointerDownTile = null;
    let startX = 0;
    let startY = 0;
    let horizontalDrag = false;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let animationFrom = current;
    let animationStarted = 0;
    const animationDuration = 440;

    function isGallery() {
      return projectsRoot.dataset.view === "gallery";
    }

    function measure() {
      const bounds = stage.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      layout();
    }

    function geometry(index) {
      const tileWidth = tiles[index]?.offsetWidth || Math.min(Math.max(width * 0.48, 230), 520);
      const tileHeight = tiles[index]?.offsetHeight || Math.min(Math.max(height * 0.52, 210), 440);
      const step = Math.min(tileWidth * 0.73, Math.max(190, width * 0.3));
      const unit = (index - displayCurrent) - dragOffset / step;
      return {
        unit,
        x: width / 2 + unit * step,
        y: height / 2 + Math.min(80, Math.abs(unit) * 28 + unit * unit * 4),
        width: tileWidth,
        height: tileHeight,
        scale: Math.max(0.72, 1 - Math.abs(unit) * 0.1),
      };
    }

    function roundedRect(ctx, x, y, w, h, radius) {
      const r = Math.min(radius, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
      ctx.fill();
    }

    function drawBridge(a, b) {
      const direction = Math.sign(b.x - a.x) || 1;
      const aEdge = a.x + direction * a.width * a.scale * 0.42;
      const bEdge = b.x - direction * b.width * b.scale * 0.42;
      const distance = Math.abs(bEdge - aEdge);
      if (distance > Math.min(width * 0.18, 150)) return;
      const strength = 1 - distance / Math.min(width * 0.18, 150);
      const edgeHalf = 16 + strength * 26;
      const neckHalf = Math.max(5, edgeHalf * (0.28 + strength * 0.12));
      const midX = (aEdge + bEdge) / 2;
      const midY = (a.y + b.y) / 2;
      context.beginPath();
      context.moveTo(aEdge, a.y - edgeHalf);
      context.bezierCurveTo(midX - distance * 0.22, midY - neckHalf, midX + distance * 0.22, midY - neckHalf, bEdge, b.y - edgeHalf);
      context.lineTo(bEdge, b.y + edgeHalf);
      context.bezierCurveTo(midX + distance * 0.22, midY + neckHalf, midX - distance * 0.22, midY + neckHalf, aEdge, a.y + edgeHalf);
      context.closePath();
      context.fill();
    }

    function drawLiquid() {
      context.clearRect(0, 0, width, height);
      if (!isGallery()) return;
      const visible = tiles.map((_, index) => geometry(index)).filter((item) => Math.abs(item.unit) < 1.8);
      context.fillStyle = "rgba(72, 151, 161, 0.18)";
      for (let index = 1; index < visible.length; index += 1) {
        drawBridge(visible[index - 1], visible[index]);
      }
      context.fillStyle = "rgba(110, 185, 191, 0.13)";
      visible.forEach((item) => {
        const w = item.width * item.scale;
        const h = item.height * item.scale;
        roundedRect(context, item.x - w / 2, item.y - h / 2, w, h, Math.min(54, w * 0.14));
      });
    }

    function animate(now) {
      const progress = Math.min(1, (now - animationStarted) / animationDuration);
      const eased = 1 - Math.pow(1 - progress, 3);
      displayCurrent = animationFrom + (current - animationFrom) * eased;
      layout();
      if (progress < 1 && motionEnabled() && isGallery()) frame = requestAnimationFrame(animate);
      else {
        frame = 0;
        displayCurrent = current;
        layout();
      }
    }

    function transitionToCurrent() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (!motionEnabled() || !isGallery()) {
        displayCurrent = current;
        layout();
        return;
      }
      animationFrom = displayCurrent;
      animationStarted = performance.now();
      frame = requestAnimationFrame(animate);
    }

    function clearTileStyles() {
      tiles.forEach((tile) => {
        tile.style.removeProperty("transform");
        tile.style.removeProperty("opacity");
        tile.style.removeProperty("z-index");
        tile.style.removeProperty("pointer-events");
      });
      context.clearRect(0, 0, width, height);
    }

    function layout() {
      if (!motionEnabled() && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
        displayCurrent = current;
      }
      if (!isGallery()) {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        displayCurrent = current;
        stage.classList.remove("ocean-liquid-enhanced");
        clearTileStyles();
        return;
      }
      stage.classList.add("ocean-liquid-enhanced");
      tiles.forEach((tile, index) => {
        const item = geometry(index);
        tile.style.transform = `translate3d(calc(-50% + ${item.x - width / 2}px), calc(-50% + ${item.y - height / 2}px), 0) scale(${item.scale})`;
        tile.style.opacity = String(Math.max(0, 1 - Math.max(0, Math.abs(item.unit) - 0.8) * 0.58));
        tile.style.zIndex = String(20 - Math.round(Math.abs(item.unit) * 4));
        tile.style.pointerEvents = Math.abs(item.unit) > 1.55 ? "none" : "auto";
      });
      drawLiquid();
    }

    function requestProject(index) {
      const bounded = Math.max(0, Math.min(tiles.length - 1, index));
      if (bounded === current) return;
      stage.dispatchEvent(new CustomEvent("ocean:projectrequest", {
        bubbles: true,
        detail: { index: bounded },
      }));
    }

    function onProjectChange(event) {
      const next = Number(event.detail?.index);
      if (!Number.isInteger(next)) return;
      current = Math.max(0, Math.min(tiles.length - 1, next));
      dragOffset = 0;
      transitionToCurrent();
    }

    function onPointerDown(event) {
      if (!isGallery() || pointerId !== null || event.button !== 0) return;
      if (event.target.closest("a, button, input, textarea, select")) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      horizontalDrag = false;
      pointerDownTile = event.target.closest(".project-tile[data-project-index]");
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      displayCurrent = current;
      stage.setPointerCapture?.(pointerId);
      stage.classList.add("is-dragging");
    }

    function onPointerMove(event) {
      if (event.pointerId !== pointerId) return;
      const x = event.clientX - startX;
      const y = event.clientY - startY;
      if (!horizontalDrag && Math.abs(x) > 8 && Math.abs(x) > Math.abs(y) * 1.15) horizontalDrag = true;
      if (!horizontalDrag) return;
      dragOffset = x;
      layout();
    }

    function finishDrag(event) {
      if (event.pointerId !== pointerId) return;
      const x = event.clientX - startX;
      const wasHorizontal = horizontalDrag;
      stage.releasePointerCapture?.(pointerId);
      pointerId = null;
      horizontalDrag = false;
      stage.classList.remove("is-dragging");
      dragOffset = 0;

      if (wasHorizontal && Math.abs(x) > Math.min(90, width * 0.12)) {
        requestProject(current + (x < 0 ? 1 : -1));
      } else if (!wasHorizontal) {
        if (pointerDownTile) requestProject(Number(pointerDownTile.dataset.projectIndex));
      }
      pointerDownTile = null;
      layout();
    }

    const viewObserver = new MutationObserver(layout);
    viewObserver.observe(projectsRoot, { attributes: true, attributeFilter: ["data-view"] });
    listen(document, "ocean:projectchange", onProjectChange);
    listen(stage, "pointerdown", onPointerDown);
    listen(stage, "pointermove", onPointerMove);
    listen(stage, "pointerup", finishDrag);
    listen(stage, "pointercancel", finishDrag);
    listen(window, "resize", measure, { passive: true });
    state.refreshers.push(layout);
    state.cleanups.push(() => {
      viewObserver.disconnect();
      if (frame) cancelAnimationFrame(frame);
      clearTileStyles();
      stage.classList.remove("ocean-liquid-enhanced", "is-dragging");
      canvas.remove();
    });
    measure();
  }

  function initStickers(generation) {
    const viewport = document.querySelector("[data-sticker-viewport]");
    const track = viewport?.querySelector("[data-sticker-track]");
    if (!viewport || !track) return;
    const originalTrackNodes = Array.from(track.childNodes);
    state.cleanups.push(() => track.replaceChildren(...originalTrackNodes));

    const toggle = document.querySelector("[data-sticker-toggle]");
    const toggleLabel = toggle?.querySelector("[data-sticker-toggle-label]") || toggle;
    const toggleState = toggle ? {
      hidden: toggle.hidden,
      text: toggleLabel.textContent,
      ariaPressed: toggle.getAttribute("aria-pressed"),
    } : null;
    if (toggle) toggle.hidden = true;
    state.cleanups.push(() => {
      if (!toggle || !toggleState) return;
      toggle.hidden = toggleState.hidden;
      toggleLabel.textContent = toggleState.text;
      if (toggleState.ariaPressed === null) toggle.removeAttribute("aria-pressed");
      else toggle.setAttribute("aria-pressed", toggleState.ariaPressed);
    });

    const assets = Array.isArray(window.OceanAssets?.stickers)
      ? window.OceanAssets.stickers.filter((asset) => asset && typeof asset.src === "string" && asset.src.trim())
      : [];
    viewport.classList.toggle("is-empty", assets.length === 0);
    if (!assets.length) return;

    let manuallyPaused = false;
    const chinese = root.lang.toLowerCase().startsWith("zh");
    const pauseLabel = toggle?.dataset.pauseLabel || toggleLabel?.textContent?.trim() || (chinese ? "暂停" : "Pause");
    const playLabel = toggle?.dataset.playLabel || (chinese ? "播放" : "Play");
    function syncPausedState() {
      const paused = manuallyPaused || !motionEnabled();
      viewport.classList.toggle("is-paused", paused);
      if (toggle) {
        toggle.setAttribute("aria-pressed", String(manuallyPaused));
        toggleLabel.textContent = manuallyPaused ? playLabel : pauseLabel;
      }
    }
    function onToggle() {
      manuallyPaused = !manuallyPaused;
      syncPausedState();
    }
    if (toggle) listen(toggle, "click", onToggle);
    state.refreshers.push(syncPausedState);
    syncPausedState();

    Promise.all(assets.map((asset) => decodeImage(asset.src.trim()).then((image) => ({
      image,
      alt: typeof asset.alt === "string" ? asset.alt : "",
    })))).then((decodedAssets) => {
      if (!state.initialized || state.generation !== generation || !track.isConnected) return;
      const makeSet = (decorative) => {
        const set = document.createElement("div");
        set.className = "ocean-sticker-set";
        if (decorative) set.setAttribute("aria-hidden", "true");
        decodedAssets.forEach((asset) => {
          const image = document.createElement("img");
          image.className = "ocean-sticker";
          image.src = asset.image.currentSrc || asset.image.src;
          image.alt = decorative ? "" : asset.alt;
          image.draggable = false;
          set.append(image);
        });
        return set;
      };
      track.replaceChildren(makeSet(false), makeSet(true));
      viewport.classList.remove("is-empty");
      viewport.classList.add("has-stickers");
      if (toggle) toggle.hidden = false;
      syncPausedState();
    }).catch(() => {
      viewport.classList.add("is-empty");
      if (toggle) toggle.hidden = true;
    });
  }

  function refreshMotion() {
    root.classList.toggle("ocean-motion-paused", !motionEnabled());
    state.refreshers.forEach((refresh) => refresh());
  }

  function init() {
    if (state.initialized) return;
    state.initialized = true;
    state.generation += 1;
    const generation = state.generation;

    initLetters(generation);
    initPaperBoatCursor();
    initLiquidGallery();
    initStickers(generation);
    listen(document, "visibilitychange", refreshMotion);
    listen(document, "ocean:motionchange", refreshMotion);
    watchMedia(reducedQuery, refreshMotion);
    refreshMotion();
  }

  function destroy() {
    if (!state.initialized) return;
    state.initialized = false;
    state.generation += 1;
    state.cleanups.splice(0).reverse().forEach((cleanup) => cleanup());
    state.refreshers.length = 0;
    document.querySelectorAll('.letter-image[data-ocean-motion="letter"]').forEach((image) => image.remove());
    document.querySelectorAll(".letter-asset-ready").forEach((holder) => holder.classList.remove("letter-asset-ready"));
    document.querySelectorAll('[data-ocean-motion-tab="true"]').forEach((holder) => {
      holder.removeAttribute("tabindex");
      holder.removeAttribute("data-ocean-motion-tab");
    });
    document.querySelectorAll("[data-sticker-viewport]").forEach((viewport) => {
      viewport.classList.remove("has-stickers", "is-paused", "is-empty");
    });
    document.querySelectorAll("[data-sticker-track] .ocean-sticker-set").forEach((set) => set.remove());
    root.classList.remove("ocean-motion-paused", "ocean-cursor-active");
  }

  window.OceanMotion = { init, destroy };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}());
