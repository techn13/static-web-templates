# Beautiify

Beautiify is a lightweight HTML, CSS, and JavaScript UI component library for building polished interfaces faster. It includes 18 component categories with 10 previewable examples in each category, making it easy to browse, compare, and copy ready-to-use patterns into your own projects.

## Overview

This project is designed for developers and designers who want a quick source of reusable UI ideas without starting from scratch. Instead of building common interface elements manually every time, you can explore examples for buttons, cards, forms, navigation, accordion layouts, heroes, loaders, and more.

Each example is presented in a simple preview environment so you can:

- browse component styles by category
- test interactive behavior in the browser
- copy a full HTML/CSS/JS snippet into your project
- adapt the structure to match your product or brand

## Features

- 18 categories of reusable interface components
- 180 total examples across the library
- Searchable landing page for fast discovery
- Interactive previews for component behavior
- Copy-ready snippets for reuse in real projects
- No build step or dependency installation required
- Responsive design and light/dark theme support
- Works with plain static HTML projects

## How to use

1. Open `index.html` in a browser.
2. Browse or search for the component category you need.
3. Open a category page to inspect the available variations.
4. Try the interactive preview controls.
5. Click the copy button to grab the complete snippet for use in your project.

For the most reliable clipboard behavior, serve the folder through a local static server such as VS Code Live Server or host it over HTTPS.

## Project structure

- `index.html` — searchable landing page with category cards
- `components.html` — shared category page loaded with a `?category=` parameter
- `script.js` — search, mobile navigation, and theme handling
- `components.js` — component metadata, previews, interactions, and snippet generation
- `style.css` — shared layout and base styling
- `components.css` — category and component card styling
- `creative.css` — visual theme, gradients, hero layout, and motion styling
- `motion.js` — page transitions, scroll reveals, and reduced-motion behavior
- `404.html` — fallback page for missing routes

## Notes

The examples in this project are meant to be starting points rather than final production implementations. Form submissions, searches, and navigation destinations are placeholder behavior used for demonstration.

Accordion, dropdown, dialog, carousel, toggle, tooltip, and transfer-list controls showcase local interaction patterns, and motion effects respect reduced-motion preferences. There are no external runtime or font dependencies; the project relies on system fonts and native browser behavior.

## Accessibility and quality

This library is useful for rapid prototyping, but it should not replace a full product-specific accessibility review. Use the examples as foundations, then validate them against your own design system, usability requirements, and accessibility standards.

## Attribution and license

Before redistributing or reusing this project, confirm the requirements of the source repository's license and any attribution terms. Preserve required notices and document your own changes. Add a license file only after choosing a license you are legally allowed to apply.

## Contributing

This project is intentionally simple and static. Contributions are welcome in the form of:

- new component categories
- improved styling patterns
- accessibility fixes
- bug fixes for interaction behavior
- documentation improvements

## License

This repository does not currently include a license file. If you plan to publish or share it publicly, add an appropriate license before distribution.
