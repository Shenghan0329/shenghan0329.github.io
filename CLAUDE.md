# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

React portfolio template using Create React App with TypeScript, MUI 5, SCSS, and GitHub Pages hosting. The single-page app renders a developer portfolio with sections for About, Expertise, Timeline, Projects, and Contact, supporting dark/light mode.

## Commands

```bash
npm start          # dev server on localhost:3000
npm run build      # production build to /build
npm test           # run tests (react-scripts test)
npm run deploy     # build + publish to gh-pages branch
```

The GitHub Actions workflow in `.github/workflows/deploy.yml` auto-deploys on every push to `main` (no manual deploy needed unless testing locally).

## Architecture

**Entry point:** `src/index.tsx` mounts `<App />` into `#root`.

**`App.tsx`** owns the dark/light mode state (`mode: 'dark' | 'light'`) and renders the top-level structure:
- `<Navigation>` — MUI AppBar with smooth-scroll nav items and mode toggle button
- `<FadeIn>` — generic fade-in wrapper that staggers children with configurable `delay` and `transitionDuration`
- Section components in vertical order: Main, Expertise, Timeline, Project, Contact
- `<Footer>`

Each section component sets an `id` on its root element (e.g., `id="expertise"`, `id="history"`, `id="projects"`, `id="contact"`). Navigation calls these ids via `scrollIntoView()`.

**Barrel exports:** `src/components/index.js` re-exports all section components from a single import path.

**Styling:**
- `src/index.scss` — global styles, `.dark-mode` / `.light-mode` class selectors, responsive breakpoints
- `src/assets/styles/*.scss` — one SCSS file per component (Main.scss, Expertise.scss, etc.)
- Light mode styles are defined as nested selectors under `.light-mode` in `index.scss`, overriding the dark default

**The `homepage` field in `package.json`** (`https://shenghan0329.github.io`) controls the root path for built assets. When forking, this must be updated to match the new GitHub Pages URL.

**`public/_redirects`** is a Netlify/SPA fallback file (serves `index.html` for all routes on compatible hosts).

## Key dependencies

- **MUI 5** (`@mui/material`, `@mui/icons-material`) — component library for nav, buttons, chips, form fields
- **`react-vertical-timeline-component`** — timeline section
- **Font Awesome** (`@fortawesome/react-fontawesome`) — brand icons in Expertise section
- **Sass** (`sass`) — SCSS compilation via react-scripts
- **gh-pages** — deployment to GitHub Pages
