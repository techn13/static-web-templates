(() => {
  "use strict";

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  const loader = document.querySelector("#page-loader");
  const loadStartedAt = performance.now();

  if (loader) {
    loader.classList.add("is-active");
    let hasFinished = false;
    const finishLoading = () => {
      if (hasFinished) return;
      hasFinished = true;
      const minimumVisibleMs = reducedMotion ? 0 : 460;
      const remaining = Math.max(0, minimumVisibleMs - (performance.now() - loadStartedAt));
      window.setTimeout(() => loader.classList.remove("is-active"), remaining);
    };
    window.addEventListener("load", finishLoading, { once: true });
    window.setTimeout(finishLoading, 2400);

    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target || link.hasAttribute("download")) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname && destination.search === window.location.search) return;
      event.preventDefault();
      loader.classList.add("is-active");
      window.setTimeout(() => window.location.assign(destination.href), reducedMotion ? 0 : 140);
    });
  }

  const revealItems = document.querySelectorAll(".hero-copy-block, .hero-art, .how-heading, .how-card, .section-heading, .component-grid > li, .about, .category-header, .example-card, .not-found > *");
  if (revealItems.length) {
    revealItems.forEach((item, index) => {
      item.classList.add("motion-reveal");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 65}ms`);
    });
    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
      revealItems.forEach((item) => observer.observe(item));
    }
  }

  if (reducedMotion || !window.matchMedia?.("(pointer: fine)").matches) return;
  const sheen = document.querySelector(".cursor-sheen");
  const follower = document.querySelector(".cursor-follower");
  if (!sheen || !follower) return;

  let targetX = -200;
  let targetY = -200;
  let currentX = targetX;
  let currentY = targetY;
  let glowX = targetX;
  let glowY = targetY;
  let animationFrame = 0;
  const animateCursor = () => {
    currentX += (targetX - currentX) * 0.38;
    currentY += (targetY - currentY) * 0.38;
    glowX += (targetX - glowX) * 0.1;
    glowY += (targetY - glowY) * 0.1;
    follower.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    sheen.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
    if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2 || Math.abs(targetX - glowX) > 0.2 || Math.abs(targetY - glowY) > 0.2) {
      animationFrame = window.requestAnimationFrame(animateCursor);
    } else {
      animationFrame = 0;
    }
  };
  const startCursor = (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    follower.classList.add("is-visible");
    sheen.classList.add("is-visible");
    if (!animationFrame) animateCursor();
  };
  window.addEventListener("pointermove", startCursor, { passive: true });
  window.addEventListener("pointerout", (event) => {
    if (event.relatedTarget === null) {
      follower.classList.remove("is-visible");
      sheen.classList.remove("is-visible");
    }
  });
  document.addEventListener("pointerover", (event) => {
    const interactive = event.target.closest("a, button, input, summary, label");
    follower.classList.toggle("is-interactive", Boolean(interactive));
  });
})();
