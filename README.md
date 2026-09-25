# ac-website

Personal portfolio and services site for Alex (`sudo-rm-me`). Vite + TypeScript + Tailwind CSS v4, path-based SPA routing, data-driven pages. Deployed to GitHub Pages.

## Scripts

- `pnpm dev` — local server on port 9999
- `pnpm build` — type-check and production build (emits `404.html`, `rss.xml`, `sitemap.xml`, `robots.txt`)
- `pnpm preview` — preview the production build
- `pnpm lint` / `pnpm lint:fix` — ESLint
- `pnpm format` / `pnpm format:check` — Prettier

## Stack

- Vite 8
- TypeScript 6
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Self-hosted fonts via `@fontsource/instrument-sans` and `@fontsource/sora`
- pnpm

## Routes

- `/` — home
- `/about-me` — positioning + bio
- `/work` — case studies with tag filters
- `/work/:slug` — case study detail
- `/service-offerings` — interactive service catalogue + enquire CTAs
- `/tech-stack` — tabbed tooling overview
- `/blogs` — blog index
- `/blogs/:slug` — post
- `/contact` — contact form (`?service=` prefills interest)
- `/rss.xml` — blog feed
- `/sitemap.xml` / `/robots.txt` — SEO

Legacy hash URLs such as `#/about-me` redirect to path URLs on load.

## Fun extras

- **Theme toggle** (top-right) — light/dark with a left-to-right wipe; preference saved in `localStorage`
- **Latency pet** (bottom-right) — click to open the terminal; health rises as you browse
- **Terminal overlay** — press `` ` `` (backtick); guest shell with safe allowlisted commands (`help`, `open work`, `neofetch`, …)

## App structure

- `src/main.ts` — entry, layout shell, route render
- `src/lib/` — router, paths, meta/OG, contact form, theme, terminal, latency pet
- `src/components/` — home hero + feature grid
- `src/pages/` — route page renderers and interaction inits
- `src/data/` — page copy and structured content

## Production env

Optional GitHub Actions variable / local `.env`:

| Name | Purpose |
|------|---------|
| `VITE_SITE_URL` | Absolute site origin for OG tags, RSS, sitemap (e.g. `https://USER.github.io/ac-website`) |

The contact form opens the visitor’s email client via `mailto:`.

## Branding

- `public/ac-logo.svg` — favicon / logo
- `public/og-share.png` — Open Graph / Twitter share image

## Deployment

`.github/workflows/deploy-pages.yml` builds with `base` set to `/<repo>/` and publishes `dist`. The build copies `index.html` to `404.html` so deep links work on GitHub Pages.
