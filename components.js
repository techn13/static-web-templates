(() => {
  "use strict";

  const collections = [
    { slug: "accordions", title: "Accordions", kind: "accordion", description: "Expandable sections keep long pages readable while letting people choose what to open.", names: ["Bordered FAQ", "Minimal disclosure", "Plus and minus", "Soft panels", "Side-accent FAQ", "Compact rows", "Midnight accordion", "Numbered questions", "Card accordion", "Glass disclosure"] },
    { slug: "backgrounds", title: "Backgrounds", kind: "background", description: "Decorative surfaces and gradients add atmosphere while keeping foreground content legible.", names: ["Soft gradient", "Orbit glow", "Color field", "Editorial grid", "Sunrise blend", "Dot pattern", "Midnight glow", "Layered shapes", "Glass surface", "Aurora field"] },
    { slug: "breadcrumbs", title: "Breadcrumbs", kind: "breadcrumb", description: "Breadcrumb trails give people a compact way to understand and move through page hierarchy.", names: ["Slash trail", "Chevron trail", "Pill trail", "Underlined trail", "Soft chips", "Compact trail", "Inverse trail", "Numbered path", "Card trail", "Glass trail"] },
    { slug: "buttons", title: "Buttons", kind: "button", description: "Choose clear action styles for primary, secondary, quiet, and high-emphasis controls.", names: ["Solid primary", "Outline action", "Pill action", "Elevated CTA", "Gradient CTA", "Monochrome action", "Editorial action", "Compact action", "Dark action", "Glass action"] },
    { slug: "cards", title: "Cards", kind: "card", description: "Content cards group related information and give users clear next steps.", names: ["Simple content", "Outlined feature", "Rounded feature", "Elevated product", "Gradient feature", "Editorial story", "Accent edge", "Compact summary", "Dark product", "Glass feature"] },
    { slug: "carousels", title: "Carousels", kind: "carousel", description: "Horizontal rails help people browse related items. These examples include working previous and next controls.", names: ["Product rail", "Outlined rail", "Pill controls", "Elevated cards", "Gradient rail", "Editorial rail", "Accent rail", "Compact rail", "Dark rail", "Glass rail"] },
    { slug: "dropdowns", title: "Dropdowns", kind: "dropdown", description: "Native disclosure menus provide keyboard-friendly expandable choices without a framework.", names: ["Simple menu", "Outlined menu", "Pill trigger", "Elevated menu", "Gradient trigger", "Editorial list", "Accent menu", "Compact menu", "Dark menu", "Glass menu"] },
    { slug: "footers", title: "Footers", kind: "footer", description: "Responsive footer patterns organize a brand, useful links, and supporting information.", names: ["Simple footer", "Outlined footer", "Pill footer", "Elevated footer", "Gradient footer", "Editorial footer", "Accent footer", "Compact footer", "Dark footer", "Glass footer"] },
    { slug: "forms", title: "Forms", kind: "form", description: "Accessible form patterns pair labels and inputs with concise actions and helper text.", names: ["Email signup", "Outlined contact", "Pill search form", "Elevated signup", "Gradient signup", "Editorial form", "Accent form", "Compact login", "Dark signup", "Glass form"] },
    { slug: "heroes", title: "Heroes", kind: "hero", description: "Hero sections introduce a product or page with a clear message and a focused action.", names: ["Centered intro", "Split layout", "Pill CTA", "Elevated panel", "Gradient launch", "Editorial headline", "Accent sidebar", "Compact intro", "Dark launch", "Glass launch"] },
    { slug: "loaders", title: "Loaders", kind: "loader", description: "Loading indicators communicate waiting states. Motion respects the reduced-motion preference.", names: ["Ring spinner", "Progress bar", "Pulsing dots", "Segment loader", "Gradient bar", "Skeleton text", "Accent ring", "Compact spinner", "Dark loader", "Glass loader"] },
    { slug: "navigation-bars", title: "Navigation bars", kind: "navigation", description: "Navigation examples organize links for small product headers and section menus.", names: ["Simple header", "Outlined header", "Pill navigation", "Elevated header", "Gradient header", "Editorial nav", "Accent nav", "Compact header", "Dark navigation", "Glass navigation"] },
    { slug: "popups", title: "Popups", kind: "popup", description: "Native dialog examples present focused content with working open and close controls.", names: ["Confirmation dialog", "Contact dialog", "Information dialog", "Sign-in dialog", "Delete confirmation", "Share dialog", "Success dialog", "Compact dialog", "Dark dialog", "Glass dialog"] },
    { slug: "search-bars", title: "Search bars", kind: "search", description: "Search fields combine a clear label, useful hint, and an obvious submission action.", names: ["Simple search", "Outlined search", "Pill search", "Elevated search", "Gradient search", "Editorial search", "Accent search", "Compact search", "Dark search", "Glass search"] },
    { slug: "text-animations", title: "Text animations", kind: "text", description: "Subtle text treatments add emphasis. The examples disable animation when reduced motion is requested.", names: ["Fade in", "Underline reveal", "Gradient emphasis", "Soft pulse", "Word highlight", "Editorial reveal", "Accent marker", "Type-on hint", "Dark glow", "Glass shimmer"] },
    { slug: "toggle-switches", title: "Toggle switches", kind: "toggle", description: "Native checkboxes stay keyboard and screen-reader accessible while using a switch-like visual style.", names: ["Basic setting", "Outline switch", "Pill switch", "Elevated switch", "Gradient switch", "Editorial setting", "Accent switch", "Compact switch", "Dark switch", "Glass switch"] },
    { slug: "tooltips", title: "Tooltips", kind: "tooltip", description: "Tooltips offer brief supplementary help on hover and keyboard focus. Essential instructions should remain visible.", names: ["Top tooltip", "Outlined tooltip", "Pill tooltip", "Elevated tooltip", "Gradient tooltip", "Editorial tooltip", "Accent tooltip", "Compact tooltip", "Dark tooltip", "Glass tooltip"] },
    { slug: "transfer-lists", title: "Transfer Lists", kind: "transfer", description: "Dual-list selectors help move chosen items between available and selected collections.", names: ["Simple transfer", "Outlined transfer", "Pill controls", "Elevated lists", "Gradient transfer", "Editorial transfer", "Accent transfer", "Compact transfer", "Dark transfer", "Glass transfer"] }
  ];

  const themes = [
    { name: "classic", accent: "#c45b46", bg: "#ffffff", ink: "#3b2b25", border: "#ebd9cf", radius: "12px", shadow: "none" },
    { name: "outline", accent: "#557a59", bg: "#ffffff", ink: "#2e3b2e", border: "#c6d5bf", radius: "10px", shadow: "none" },
    { name: "pill", accent: "#a94d57", bg: "#fff8f5", ink: "#4b2034", border: "#ecc8c1", radius: "999px", shadow: "none" },
    { name: "elevated", accent: "#a65d16", bg: "#ffffff", ink: "#472e1d", border: "#f0dfcb", radius: "16px", shadow: "0 10px 28px #63452a1c" },
    { name: "gradient", accent: "#c45b46", bg: "linear-gradient(135deg,#f8ded0,#fff2df)", ink: "#3d2b25", border: "#ebd3c4", radius: "16px", shadow: "none" },
    { name: "editorial", accent: "#167363", bg: "#f3f8ee", ink: "#173b35", border: "#b8d8c0", radius: "4px", shadow: "none" },
    { name: "accent", accent: "#b34632", bg: "#fff9f5", ink: "#48231c", border: "#e8c9bf", radius: "10px", shadow: "none" },
    { name: "compact", accent: "#957033", bg: "#fffcf1", ink: "#3e3828", border: "#e4d7b6", radius: "8px", shadow: "none" },
    { name: "dark", accent: "#f0b296", bg: "#30231e", ink: "#fff4e9", border: "#59483e", radius: "12px", shadow: "0 8px 24px #0004" },
    { name: "glass", accent: "#5b8562", bg: "#eff7eb", ink: "#273a2a", border: "#c9d9bc", radius: "18px", shadow: "0 12px 30px #59483e26" }
  ];

  const componentStyles = String.raw`
.sample-shell{--d-accent:#c45b46;--d-bg:#fff;--d-ink:#3b2b25;--d-border:#ebd9cf;--d-radius:12px;--d-shadow:none;box-sizing:border-box;min-height:112px;padding:1.25rem;border:1px solid var(--d-border);border-radius:var(--d-radius);background:var(--d-bg);color:var(--d-ink);box-shadow:var(--d-shadow);font:14px/1.5 Arial,sans-serif;overflow:hidden}
.sample-shell *{box-sizing:border-box}.sample-shell a{color:var(--d-accent)}.sample-shell button,.sample-shell input,.sample-shell summary{font:inherit}.sample-shell button{cursor:pointer}.sample-shell .sample-button{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.65rem 1rem;border:1px solid var(--d-accent);border-radius:var(--d-radius);background:var(--d-accent);color:#fff;font-weight:700}.sample-shell .sample-button--quiet{background:transparent;color:var(--d-accent)}
.demo-theme-outline{background:transparent!important;border-width:2px!important;box-shadow:none!important}.demo-theme-pill{border-radius:26px!important}.demo-theme-elevated{box-shadow:0 12px 30px #402c1f22!important}.demo-theme-gradient{background:linear-gradient(135deg,#f8ded0,#fff0e5)!important}.demo-theme-editorial{border-left:5px solid var(--d-accent)!important;border-radius:4px!important}.demo-theme-compact{padding:.75rem!important}.demo-theme-dark{background:#30231e!important;color:#fff4e9!important;border-color:#59483e!important}.demo-theme-glass{background:linear-gradient(135deg,#f7ece1dd,#ffffffb8)!important;backdrop-filter:blur(10px)}
.sample-accordion{padding:.75rem 0;border-bottom:1px solid var(--d-border)}.sample-accordion:first-child{padding-top:0}.sample-accordion summary{display:flex;justify-content:space-between;gap:1rem;cursor:pointer;font-weight:700;list-style:none}.sample-accordion summary::-webkit-details-marker{display:none}.sample-accordion summary:after{content:'+';color:var(--d-accent);font-size:1.2rem}.sample-accordion[open] summary:after{content:'−'}.sample-accordion p{margin:.65rem 0 0;color:color-mix(in srgb,var(--d-ink) 70%,transparent)}
.sample-background{display:grid;min-height:112px;place-items:center;text-align:center;background:radial-gradient(circle at 78% 20%,#ffffff99,transparent 28%),linear-gradient(135deg,var(--d-accent),#f5c6a0);color:#fff;font-size:1.1rem;font-weight:700}.sample-breadcrumb ol{display:flex;flex-wrap:wrap;gap:.55rem;align-items:center;margin:0;padding:0;list-style:none}.sample-breadcrumb li+li:before{content:'›';margin-right:.55rem;color:var(--d-accent)}.sample-card h4,.sample-hero h4{margin:0 0 .4rem;font-size:1.1rem}.sample-card p,.sample-hero p,.sample-footer p{margin:.35rem 0;color:color-mix(in srgb,var(--d-ink) 72%,transparent)}.sample-card .sample-button{margin-top:.55rem}.sample-carousel{display:flex;align-items:center;gap:.55rem}.sample-carousel-track{display:flex;gap:.6rem;overflow:auto;scroll-behavior:smooth;scrollbar-width:thin}.sample-carousel-item{min-width:125px;padding:.75rem;border:1px solid var(--d-border);border-radius:calc(var(--d-radius)*.7);background:color-mix(in srgb,var(--d-bg) 82%,var(--d-accent));font-weight:700}.sample-carousel button{flex:none;border:0;border-radius:50%;background:var(--d-accent);color:#fff;width:2rem;height:2rem}
.sample-dropdown summary,.sample-popup summary{cursor:pointer;color:var(--d-accent);font-weight:700}.sample-dropdown ul{margin:.5rem 0 0;padding:.5rem 1.5rem;background:color-mix(in srgb,var(--d-bg) 80%,var(--d-accent));border-radius:8px}.sample-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem}.sample-footer nav{display:flex;gap:.75rem;flex-wrap:wrap}.sample-form label{display:block;margin-bottom:.35rem;font-weight:700}.sample-form input,.sample-search input{width:100%;min-width:0;padding:.65rem .75rem;border:1px solid var(--d-border);border-radius:8px;background:var(--d-bg);color:var(--d-ink)}.sample-form .sample-button,.sample-search .sample-button{margin-top:.65rem}.sample-hero{padding:.75rem;background:radial-gradient(ellipse at top right,color-mix(in srgb,var(--d-accent) 18%,transparent),transparent 55%)}
.sample-dialog{width:min(90%,360px);padding:1.2rem;border:1px solid var(--d-border);border-radius:var(--d-radius);background:var(--d-bg);color:var(--d-ink);box-shadow:var(--d-shadow)}.sample-dialog::backdrop{background:#26221d99;backdrop-filter:blur(3px)}.sample-dialog h3{margin:0 0 .5rem}.sample-dialog p{color:color-mix(in srgb,var(--d-ink) 72%,transparent)}
.sample-loader{display:flex;align-items:center;justify-content:center;gap:.6rem;min-height:80px;color:var(--d-accent);font-weight:700}.sample-loader .ring{width:30px;height:30px;border:3px solid var(--d-border);border-top-color:var(--d-accent);border-radius:50%;animation:sample-spin 1s linear infinite}.sample-loader .dots{letter-spacing:.2em;animation:sample-pulse 1s ease-in-out infinite alternate}.sample-loader .bar{width:70%;height:8px;border-radius:99px;background:linear-gradient(90deg,var(--d-accent) 64%,var(--d-border) 64%)}.sample-loader .skeleton{width:75%;height:14px;border-radius:4px;background:linear-gradient(90deg,var(--d-border),#fff,var(--d-border));background-size:200% 100%;animation:sample-shimmer 1.4s linear infinite}.sample-nav{display:flex;align-items:center;justify-content:space-between;gap:.75rem;flex-wrap:wrap}.sample-nav nav{display:flex;gap:.8rem;flex-wrap:wrap}.sample-popup[open] .popup-content{margin-top:.65rem;padding:.7rem;border-radius:8px;background:color-mix(in srgb,var(--d-bg) 78%,var(--d-accent))}
.sample-search{display:flex;align-items:center;gap:.5rem}.sample-search input{flex:1}.sample-search .sample-button{margin:0}.sample-text{margin:0;color:var(--d-ink);font-size:1.3rem;font-weight:800}.sample-text span{color:var(--d-accent);animation:sample-fade 1.8s ease-in-out infinite alternate}.sample-toggle{display:inline-flex;align-items:center;gap:.7rem;cursor:pointer;font-weight:700}.sample-toggle input{position:absolute;width:1px;height:1px;opacity:0}.sample-toggle i{position:relative;width:42px;height:24px;border-radius:99px;background:#9da0aa;transition:background .2s}.sample-toggle i:after{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff;content:'';transition:transform .2s}.sample-toggle input:checked+i{background:var(--d-accent)}.sample-toggle input:checked+i:after{transform:translateX(18px)}.sample-toggle input:focus-visible+i{outline:3px solid var(--d-accent);outline-offset:3px}
.sample-tooltip{position:relative;display:inline-flex}.sample-tooltip [role=tooltip]{position:absolute;z-index:2;left:50%;bottom:calc(100% + 8px);width:max-content;max-width:190px;padding:.45rem .65rem;transform:translateX(-50%);border-radius:8px;background:#3b2b25;color:#fff;opacity:0;pointer-events:none;transition:opacity .15s}.sample-tooltip:hover [role=tooltip],.sample-tooltip:focus-within [role=tooltip]{opacity:1}.sample-transfer{display:grid;grid-template-columns:1fr auto 1fr;gap:.5rem;align-items:center}.sample-transfer ul{min-height:86px;margin:0;padding:.4rem;list-style:none;border:1px solid var(--d-border);border-radius:8px}.sample-transfer li{padding:.22rem}.sample-transfer [data-move]{display:grid;gap:.35rem}.sample-transfer [data-move] button{border:1px solid var(--d-border);border-radius:6px;background:var(--d-bg);color:var(--d-accent)}
@keyframes sample-spin{to{transform:rotate(360deg)}}@keyframes sample-pulse{to{opacity:.35}}@keyframes sample-shimmer{to{background-position:-200% 0}}@keyframes sample-fade{to{opacity:.45;transform:translateY(-2px)}}
@media(prefers-reduced-motion:reduce){.sample-shell *,.sample-shell *:before,.sample-shell *:after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
.visually-hidden{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
.demo-feedback{min-height:1.2em;margin:.55rem 0 0;color:color-mix(in srgb,var(--d-ink) 68%,transparent);font-size:.78rem}.sample-card h3,.sample-hero h3{margin:0 0 .4rem;font-size:1.1rem}.sample-breadcrumb [aria-current="page"],.sample-nav [aria-current="page"],.sample-footer [aria-current="page"]{font-weight:800;text-decoration:underline;text-decoration-color:var(--d-accent);text-underline-offset:4px}.sample-footer .demo-feedback{flex-basis:100%}.sample-search{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:.5rem}.sample-search input{grid-column:1}.sample-search .sample-button{grid-column:2;margin:0}.search-suggestion-list,.sample-search .demo-feedback{grid-column:1/-1}.search-suggestion-list{display:flex;flex-wrap:wrap;gap:.4rem;margin:.1rem 0;padding:0;list-style:none}.search-suggestion-list li{padding:.25rem .55rem;border-radius:99px;background:color-mix(in srgb,var(--d-bg) 75%,var(--d-accent));font-size:.76rem}.sample-toggle output{min-width:2rem;color:var(--d-accent);font-size:.78rem}.sample-loader.is-running .bar{background:linear-gradient(90deg,var(--d-border) 0%,var(--d-accent) 45%,var(--d-border) 90%);background-size:200% 100%;animation:sample-shimmer .65s linear infinite}.sample-loader.is-running .ring{animation-duration:.45s}.sample-loader.is-running .dots{animation-duration:.3s}.sample-loader.is-running .skeleton{animation-duration:.65s}.sample-text.is-replaying span{animation:sample-replay .8s ease both}.sample-background[data-tone="1"]{background:linear-gradient(145deg,#ffbc80,#f16d97)}.sample-background[data-tone="2"]{background:radial-gradient(circle at 15% 20%,#fff 0 3px,transparent 4px),linear-gradient(135deg,#748d58,#b9d59d)}.sample-background[data-tone="3"]{background:repeating-linear-gradient(45deg,#554036 0 8px,#88614d 8px 16px)}.sample-background[data-tone="4"]{background:linear-gradient(90deg,#f5c06d,#eb7786,#c85d4a)}.sample-background[data-tone="5"]{background:linear-gradient(0deg,#eddfc5 1px,transparent 1px),linear-gradient(90deg,#eddfc5 1px,#fffbf1 1px);background-size:18px 18px;color:#3e3828}.sample-background[data-tone="6"]{background:radial-gradient(ellipse at 80% 15%,#ffe5a8,transparent 30%),linear-gradient(130deg,#b84975,#725445)}.sample-background[data-tone="7"]{background:linear-gradient(135deg,#dff4ee,#fbefcf,#f9e5dc);color:#3b3927}.sample-background[data-tone="8"]{background:radial-gradient(circle at 70% 25%,#725445,transparent 30%),#26221d}.sample-background[data-tone="9"]{background:linear-gradient(120deg,#b8d8c0,#f8d4ba,#f2c3a8);color:#3e3828}
@keyframes sample-replay{0%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:translateY(0)}}
.demo-theme-0 .sample-background{background:linear-gradient(135deg,#c45b46,#e8ae8a)}.demo-theme-1 .sample-background{background:radial-gradient(circle at 20% 20%,#fff 0 2px,transparent 3px),linear-gradient(135deg,#557a59,#b9d59d)}.demo-theme-2 .sample-background{background:repeating-linear-gradient(135deg,#a94d57 0 14px,#c45a83 14px 28px)}.demo-theme-3 .sample-background{background:radial-gradient(ellipse at top left,#f6bd78,transparent 45%),linear-gradient(135deg,#a65d16,#76513f)}.demo-theme-4 .sample-background{background:linear-gradient(120deg,#c45b46,#e18d78,#ffd27d)}.demo-theme-5 .sample-background{background:linear-gradient(90deg,#173b35 50%,#167363 50%);background-size:24px 24px}.demo-theme-6 .sample-background{background:radial-gradient(circle at 75% 25%,#ffd39c,transparent 28%),linear-gradient(135deg,#b34632,#76513f)}.demo-theme-7 .sample-background{background:linear-gradient(0deg,#e4d7b6 1px,transparent 1px),linear-gradient(90deg,#e4d7b6 1px,#fffcf1 1px);background-size:18px 18px;color:#3e3828}.demo-theme-8 .sample-background{background:radial-gradient(circle at 78% 25%,#6c4b3a,transparent 35%),linear-gradient(135deg,#30231e,#211a16)}.demo-theme-9 .sample-background{background:radial-gradient(ellipse at 25% 20%,#cae0b9,transparent 35%),linear-gradient(135deg,#5b8562,#ead8c8)}
`;

  const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  const styleAttr = (theme) => `--d-accent:${theme.accent};--d-bg:${theme.bg};--d-ink:${theme.ink};--d-border:${theme.border};--d-radius:${theme.radius};--d-shadow:${theme.shadow}`;
  const exampleMarkup = (kind, n, name) => {
    const base = (content) => `<div class="sample-shell kind-${kind} demo-theme-${n}" style="${styleAttr(themes[n])}">${content}</div>`;
    switch (kind) {
      case "accordion": return base(`<details class="sample-accordion" open><summary>${name}: How does this pattern work?</summary><p>Keep the answer focused and useful. Native disclosure controls work with a keyboard and do not need a JavaScript library.</p></details><details class="sample-accordion"><summary>Can I customize the content?</summary><p>Yes. Replace this text and adapt the spacing, color, and border to your design system.</p></details>`);
      case "background": return base(`<div class="sample-background" data-tone="0"><span>${name}<br><small>Decorative surface</small></span></div><button class="sample-button sample-button--quiet" type="button" data-background-cycle>Change background</button><p class="demo-feedback" aria-live="polite">Click to cycle through background treatments.</p>`);
      case "breadcrumb": return base(`<nav class="sample-breadcrumb" aria-label="Breadcrumb"><ol><li><a href="#" data-crumb>Home</a></li><li><a href="#" data-crumb>Library</a></li><li><a href="#" data-crumb aria-current="page">${name}</a></li></ol></nav><p class="demo-feedback" aria-live="polite">Current location: ${name}</p>`);
      case "button": return base(`<button class="sample-button${n === 1 || n === 5 ? " sample-button--quiet" : ""}" type="button" data-demo-action data-demo-message="${name} action clicked">${name} <span aria-hidden="true">→</span></button><p class="demo-feedback" aria-live="polite">Click the button to try this action.</p>`);
      case "card": return base(`<article class="sample-card"><p class="eyebrow">FEATURED · 5 MIN READ</p><h3>${name}</h3><p>A concise description gives people enough context to choose what to read or do next.</p><button class="sample-button sample-button--quiet" type="button" data-demo-action data-demo-message="You opened the ${name.toLowerCase()} card">Explore example →</button><p class="demo-feedback" aria-live="polite">Use the card action to see its response.</p></article>`);
      case "carousel": return base(`<div class="sample-carousel"><button type="button" data-scroll="-1" aria-label="Scroll items left">‹</button><div class="sample-carousel-track"><article class="sample-carousel-item">Studio journal</article><article class="sample-carousel-item">Product notes</article><article class="sample-carousel-item">Design systems</article><article class="sample-carousel-item">Field guide</article></div><button type="button" data-scroll="1" aria-label="Scroll items right">›</button></div>`);
      case "dropdown": return base(`<details class="sample-dropdown"><summary>${name} · Choose a plan</summary><ul><li><a href="#" data-dropdown-option>Starter — free</a></li><li><a href="#" data-dropdown-option>Team — $12/month</a></li><li><a href="#" data-dropdown-option>Enterprise — contact us</a></li></ul><p class="demo-feedback" aria-live="polite">Open the menu and choose an option.</p></details>`);
      case "footer": return base(`<footer class="sample-footer"><div><strong>Northstar</strong><p>Thoughtful tools for teams.</p></div><nav aria-label="Footer"><a href="#" data-demo-nav>About</a><a href="#" data-demo-nav>Guides</a><a href="#" data-demo-nav>Contact</a></nav><small>© 2026 Northstar</small><p class="demo-feedback" aria-live="polite">Choose a footer link to preview navigation.</p></footer>`);
      case "form": return base(`<form class="sample-form" action="#"><label for="email-${n}">${name}</label><input id="email-${n}" type="email" autocomplete="email" placeholder="you@example.com" required><small>We’ll only use this to reply to your request.</small><br><button class="sample-button" type="submit">Continue</button></form>`);
      case "hero": return base(`<section class="sample-hero"><p class="eyebrow">A BETTER WAY TO WORK</p><h3>${name}</h3><p>Make your next project easier with a simple, focused experience.</p><button class="sample-button" type="button" data-demo-action data-demo-message="The hero call to action is ready to link to your product">Get started →</button><p class="demo-feedback" aria-live="polite">Click the call to action to see its state.</p></section>`);
      case "loader": return base(`<div class="sample-loader" role="status"><span class="${n === 1 || n === 4 ? "bar" : n === 2 ? "dots" : n === 5 ? "skeleton" : "ring"}" aria-hidden="true">${n === 2 ? "•••" : ""}</span><span class="visually-hidden">Loading content</span></div><button class="sample-button sample-button--quiet" type="button" data-loader-start>Run loading demo</button><p class="demo-feedback" aria-live="polite">The indicator animates to represent ongoing work.</p>`);
      case "navigation": return base(`<header class="sample-nav"><strong>Northstar</strong><nav aria-label="Example navigation"><a href="#" data-demo-nav>Products</a><a href="#" data-demo-nav>Resources</a><a href="#" data-demo-nav>Pricing</a></nav><button class="sample-button" type="button" data-demo-action data-demo-message="Sign-in action selected">Sign in</button><p class="demo-feedback" aria-live="polite">Choose a link to preview the active navigation state.</p></header>`);
      case "popup": return base(`<button class="sample-button" type="button" data-dialog-open>Open ${name.toLowerCase()}</button><dialog class="sample-dialog" aria-labelledby="dialog-title-${n}"><h3 id="dialog-title-${n}">${name}</h3><p>Review the details before you continue. This native dialog can be dismissed with its close button or the Escape key.</p><button class="sample-button sample-button--quiet" type="button" data-dialog-close>Close</button></dialog>`);
      case "search": return base(`<form class="sample-search" role="search" action="#"><label class="visually-hidden" for="search-${n}">${name}</label><input id="search-${n}" data-live-search type="search" placeholder="Search the library…"><button class="sample-button" type="submit">Search</button><ul class="search-suggestion-list"><li>Buttons</li><li>Backgrounds</li><li>Navigation</li><li>Forms</li></ul><p class="demo-feedback" aria-live="polite">Type to filter these example results.</p></form>`);
      case "text": return base(`<p class="sample-text">${name} <span>for ideas that move.</span></p><button class="sample-button sample-button--quiet" type="button" data-replay>Replay animation</button>`);
      case "toggle": return base(`<label class="sample-toggle"><span>${name}</span><input data-demo-toggle type="checkbox" role="switch" aria-label="Enable ${name.toLowerCase()}" ${n % 2 ? "checked" : ""}><i aria-hidden="true"></i><output>${n % 2 ? "On" : "Off"}</output></label>`);
      case "tooltip": return base(`<span class="sample-tooltip"><button class="sample-button sample-button--quiet" type="button" aria-describedby="tip-${n}">Hover or focus me <span aria-hidden="true">ⓘ</span></button><span role="tooltip" id="tip-${n}">${name}: brief, supplementary help.</span></span>`);
      case "transfer": return base(`<div class="sample-transfer"><ul aria-label="Available items"><li><label><input type="checkbox" value="Docs"> Docs</label></li><li><label><input type="checkbox" value="Reports"> Reports</label></li></ul><div data-move><button type="button" data-transfer="right" aria-label="Move selected right">→</button><button type="button" data-transfer="left" aria-label="Move selected left">←</button></div><ul aria-label="Selected items"><li><label><input type="checkbox" value="Design"> Design</label></li></ul></div>`);
      default: return base(`<p>${name}</p>`);
    }
  };

  function bindPreviewInteractions(root) {
    const notify = (message) => {
      let status = root.querySelector(".demo-feedback");
      if (!status) {
        status = document.createElement("p");
        status.className = "demo-feedback";
        status.setAttribute("aria-live", "polite");
        root.append(status);
      }
      status.textContent = message;
    };
    root.addEventListener("click", (event) => {
      event.stopPropagation();
      const link = event.target.closest('a[href="#"]');
      if (link) event.preventDefault();
      const action = event.target.closest("[data-demo-action]");
      if (action) notify(action.dataset.demoMessage || "Action triggered.");
      const crumb = event.target.closest("[data-crumb]");
      if (crumb) {
        root.querySelectorAll("[data-crumb]").forEach((item) => item.removeAttribute("aria-current"));
        crumb.setAttribute("aria-current", "page");
        notify(`Current location: ${crumb.textContent.trim()}`);
      }
      const navigationLink = event.target.closest("[data-demo-nav]");
      if (navigationLink) {
        root.querySelectorAll("[data-demo-nav]").forEach((item) => item.removeAttribute("aria-current"));
        navigationLink.setAttribute("aria-current", "page");
        notify(`Selected ${navigationLink.textContent.trim()}`);
      }
      const dropdownOption = event.target.closest("[data-dropdown-option]");
      if (dropdownOption) {
        dropdownOption.closest("details")?.removeAttribute("open");
        notify(`Selected ${dropdownOption.textContent.trim()}`);
      }
      const backgroundButton = event.target.closest("[data-background-cycle]");
      if (backgroundButton) {
        const background = root.querySelector(".sample-background");
        const tone = (Number(background.dataset.tone) + 1) % 10;
        background.dataset.tone = String(tone);
        notify(`Background variation ${tone + 1} of 10`);
      }
      const carouselButton = event.target.closest("[data-scroll]");
      if (carouselButton) {
        carouselButton.parentElement.querySelector(".sample-carousel-track")?.scrollBy({ left: Number(carouselButton.dataset.scroll) * 150, behavior: "smooth" });
      }
      const dialogOpen = event.target.closest("[data-dialog-open]");
      if (dialogOpen) dialogOpen.parentElement.querySelector("dialog")?.showModal();
      const dialogClose = event.target.closest("[data-dialog-close]");
      if (dialogClose) dialogClose.closest("dialog")?.close();
      const transferButton = event.target.closest("[data-transfer]");
      if (transferButton) {
        const lists = [...transferButton.closest(".sample-transfer").querySelectorAll("ul")];
        const source = transferButton.dataset.transfer === "right" ? lists[0] : lists[1];
        const destination = source === lists[0] ? lists[1] : lists[0];
        const selected = [...source.querySelectorAll("input:checked")];
        selected.forEach((input) => { const item = input.closest("li"); input.checked = false; destination.append(item); });
        notify(selected.length ? `Moved ${selected.length} item${selected.length === 1 ? "" : "s"}.` : "Select one or more items first.");
      }
      const loaderButton = event.target.closest("[data-loader-start]");
      if (loaderButton) {
        const indicator = root.querySelector(".sample-loader");
        indicator.classList.add("is-running");
        loaderButton.disabled = true;
        notify("Loading example data…");
        window.setTimeout(() => { indicator.classList.remove("is-running"); loaderButton.disabled = false; notify("Loading complete."); }, 1300);
      }
      const replayButton = event.target.closest("[data-replay]");
      if (replayButton) {
        const text = root.querySelector(".sample-text");
        text.classList.remove("is-replaying");
        void text.offsetWidth;
        text.classList.add("is-replaying");
        window.setTimeout(() => text.classList.remove("is-replaying"), 900);
      }
    });
    root.addEventListener("input", (event) => {
      if (!event.target.matches("[data-live-search]")) return;
      const query = event.target.value.trim().toLocaleLowerCase();
      const items = [...root.querySelectorAll(".search-suggestion-list li")];
      let shown = 0;
      items.forEach((item) => { item.hidden = !item.textContent.toLocaleLowerCase().includes(query); if (!item.hidden) shown += 1; });
      notify(`${shown} matching suggestion${shown === 1 ? "" : "s"}.`);
    });
    root.addEventListener("change", (event) => {
      if (!event.target.matches("[data-demo-toggle]")) return;
      const output = root.querySelector(".sample-toggle output");
      output.value = event.target.checked ? "On" : "Off";
      output.textContent = output.value;
      notify(`${event.target.getAttribute("aria-label")} is ${output.value.toLowerCase()}.`);
    });
    root.addEventListener("submit", (event) => {
      if (!event.target.matches(".sample-form, .sample-search")) return;
      event.stopPropagation();
      event.preventDefault();
      notify(event.target.classList.contains("sample-search") ? "Search submitted — connect this to your search route." : "Form submitted — connect this to your handler.");
    });
    root.querySelectorAll("details").forEach((details) => details.addEventListener("toggle", () => {
      notify(`${details.open ? "Expanded" : "Collapsed"}: ${details.querySelector("summary")?.textContent.trim() || "section"}`);
    }));
  }

  const interactionHints = {
    accordion: "Open and close either question. The native disclosure element supports keyboard use.",
    background: "Select Change background to cycle through ten surface treatments.",
    breadcrumb: "Choose a crumb to change the current location indicator.",
    button: "Activate the button to see a live action response.",
    card: "Use the card action to trigger its example response.",
    carousel: "Use the arrows or horizontal scrolling to browse the rail.",
    dropdown: "Open the menu to reveal choices, then select one.",
    footer: "Choose a footer link to see the selected destination state.",
    form: "Enter an email address and submit to see the form response.",
    hero: "Activate the call to action to preview its response.",
    loader: "Run the demo to see a loading state complete.",
    navigation: "Choose a link to change the active navigation item.",
    popup: "Open the dialog, close it, or press Escape.",
    search: "Type a word to filter the suggestions, then submit.",
    text: "The text animates on load; replay it with the button.",
    toggle: "Switch the setting on or off and watch its state label update.",
    tooltip: "Hover over the control or focus it with the keyboard to reveal help.",
    transfer: "Select items, then use the arrows to move them between lists."
  };

  const componentPage = document.querySelector("#example-grid");
  if (!componentPage) return;
  const slug = new URLSearchParams(location.search).get("category");
  const category = collections.find((item) => item.slug === slug);
  const title = document.querySelector("#category-title");
  if (!category) {
    title.textContent = "Category not found";
    document.querySelector("#category-description").textContent = "Choose a component category from the catalogue.";
    document.querySelector("#breadcrumb-current").textContent = "Not found";
    return;
  }

  document.title = `${category.title} examples — Beautiify`;
  title.textContent = category.title;
  document.querySelector("#category-description").textContent = category.description;
  document.querySelector("#breadcrumb-current").textContent = category.title;
  document.querySelector("#example-count").textContent = `10 styles · ${category.title}`;

  const snippetInteractions = `<script>(${bindPreviewInteractions.toString()})(document.currentScript.previousElementSibling);</script>`;
  const codeFor = (markup) => `<style>\n${componentStyles}\n</style>\n${markup}\n${snippetInteractions}`;
  category.names.forEach((name, index) => {
    const markup = exampleMarkup(category.kind, index, name);
    const card = document.createElement("article");
    card.className = "example-card";
    card.dataset.name = name.toLocaleLowerCase();
    card.innerHTML = `<div class="example-card-heading"><div><span class="example-index">${String(index + 1).padStart(2, "0")}</span><h2>${name}</h2></div><button class="copy-button" type="button" data-copy="${index}">Copy complete snippet</button></div><div class="preview-stage">${markup}</div><div class="example-note"><span aria-hidden="true">↗</span><p><strong>Try the preview</strong><span>${interactionHints[category.kind]}</span></p></div><details class="code-details"><summary>View source</summary><pre><code>${escapeHtml(codeFor(markup))}</code></pre></details>`;
    componentPage.append(card);
    bindPreviewInteractions(card.querySelector(".sample-shell"));
  });

  document.querySelector("#example-search").addEventListener("input", (event) => {
    const query = event.currentTarget.value.trim().toLocaleLowerCase();
    let visible = 0;
    componentPage.querySelectorAll(".example-card").forEach((card) => {
      card.hidden = !card.dataset.name.includes(query);
      if (!card.hidden) visible += 1;
    });
    document.querySelector("#empty-state").hidden = visible > 0;
  });

  componentPage.addEventListener("click", async (event) => {
    const placeholderLink = event.target.closest('a[href="#"]');
    if (placeholderLink) {
      event.preventDefault();
      return;
    }
    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) {
      const index = Number(copyButton.dataset.copy);
      const source = codeFor(exampleMarkup(category.kind, index, category.names[index]));
      try {
        await navigator.clipboard.writeText(source);
        copyButton.textContent = "Copied";
      } catch {
        const textArea = document.createElement("textarea");
        textArea.value = source;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.append(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        copyButton.textContent = "Copied";
      }
      window.setTimeout(() => { copyButton.textContent = "Copy complete snippet"; }, 1600);
      return;
    }
    const scrollButton = event.target.closest("[data-scroll]");
    if (scrollButton) {
      const rail = scrollButton.parentElement.querySelector(".sample-carousel-track");
      rail?.scrollBy({ left: Number(scrollButton.dataset.scroll) * 150, behavior: "smooth" });
      return;
    }
    const dialogOpen = event.target.closest("[data-dialog-open]");
    if (dialogOpen) {
      dialogOpen.parentElement.querySelector("dialog")?.showModal();
      return;
    }
    const dialogClose = event.target.closest("[data-dialog-close]");
    if (dialogClose) {
      dialogClose.closest("dialog")?.close();
      return;
    }
    const transferButton = event.target.closest("[data-transfer]");
    if (transferButton) {
      const transfer = transferButton.closest(".sample-transfer");
      const lists = [...transfer.querySelectorAll("ul")];
      const source = transferButton.dataset.transfer === "right" ? lists[0] : lists[1];
      const destination = source === lists[0] ? lists[1] : lists[0];
      source.querySelectorAll("input:checked").forEach((input) => {
        const item = input.closest("li");
        input.checked = false;
        destination.append(item);
      });
    }
  });

  componentPage.addEventListener("submit", (event) => {
    if (!event.target.matches(".sample-form, .sample-search")) return;
    event.preventDefault();
    let feedback = event.target.querySelector(".demo-feedback");
    if (!feedback) {
      feedback = document.createElement("p");
      feedback.className = "demo-feedback";
      feedback.setAttribute("role", "status");
      event.target.append(feedback);
    }
    feedback.textContent = event.target.classList.contains("sample-search")
      ? "Search submitted — connect this form to your search route."
      : "Thanks — connect this form to your submission handler.";
  });

  const themeButton = document.querySelector("#theme-toggle");
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("beautiify-theme"); } catch { /* Storage may be disabled. */ }
  let theme = savedTheme || (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = theme;
  themeButton?.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  themeButton?.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    themeButton.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    try { localStorage.setItem("beautiify-theme", theme); } catch { /* Theme remains available for this visit. */ }
  });

  const styles = document.createElement("style");
  styles.textContent = componentStyles;
  document.head.append(styles);
})();
