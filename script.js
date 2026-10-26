(() => {
  const searchInput = document.querySelector("#component-search");
  const cards = [...document.querySelectorAll("#component-grid > li")];
  const emptyState = document.querySelector("#empty-state");
  const resultCount = document.querySelector("#result-count");
  const clearButton = document.querySelector("#clear-search");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  const themeButton = document.querySelector("#theme-toggle");

  if (searchInput) {
    const filterCards = () => {
      const query = searchInput.value.trim().toLocaleLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const matches = card.dataset.name.includes(query);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      if (emptyState) emptyState.hidden = visible > 0;
      if (resultCount) resultCount.textContent = `${visible} ${visible === 1 ? "category" : "categories"}`;
      if (clearButton) clearButton.hidden = query.length === 0;
    };
    searchInput.addEventListener("input", filterCards);
    clearButton?.addEventListener("click", () => { searchInput.value = ""; filterCards(); searchInput.focus(); });
    filterCards();
  }

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    navigation?.classList.toggle("is-open", !open);
  });
  navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }));

  let savedTheme = null;
  try { savedTheme = localStorage.getItem("beautiify-theme"); } catch { /* Storage can be disabled. */ }
  let theme = savedTheme || (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const applyTheme = (value) => {
    document.documentElement.dataset.theme = value;
    themeButton?.setAttribute("aria-label", value === "dark" ? "Switch to light theme" : "Switch to dark theme");
    themeButton?.setAttribute("aria-pressed", String(value === "dark"));
  };
  applyTheme(theme);
  themeButton?.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try { localStorage.setItem("beautiify-theme", theme); } catch { /* Theme remains available for this visit. */ }
  });
})();
