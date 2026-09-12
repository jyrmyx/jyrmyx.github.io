# ilama.dev

Personal site for **Jyri Ilama** — freelance AWS architect and DevOps consultant.

One-page Astro site with Tailwind CSS v4. Publishes to GitHub Pages at [ilama.dev](https://ilama.dev).

## Local development

```bash
npm i
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Requires Node.js 22+.

## Publishing

This repo is intended for the user site [`jyrmyx/jyrmyx.github.io`](https://github.com/jyrmyx/jyrmyx.github.io) with custom domain `ilama.dev` (`public/CNAME`).

Merging to `main` runs the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the Astro site and deploys with `actions/deploy-pages`. Enable GitHub Pages with **Source: GitHub Actions** in the repository settings.

## Content

All visible copy lives in `src/content.ts`.

## Design notes

- Body font: [IBM Plex Sans](https://fontsource.org/fonts/ibm-plex-sans) via `@fontsource/ibm-plex-sans`
- Motion: CSS-only fade-up on load; respects `prefers-reduced-motion`
