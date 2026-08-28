# ac-website

Personal website built with Vite + TypeScript + Tailwind CSS v4, using hash-based routing and data-driven pages.

## Scripts

- `pnpm dev` - start the local dev server
- `pnpm build` - type-check and build production assets
- `pnpm preview` - preview the production build
- `pnpm lint` - run ESLint
- `pnpm lint:fix` - run ESLint with autofix
- `pnpm format` - format files with Prettier
- `pnpm format:check` - check formatting without writing changes

## Stack

- Vite 8
- TypeScript 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- pnpm

## App Structure

- `src/main.ts` - app entry and hash router
- `src/components/heroSection.ts` - hero section with typewriter intro
- `src/components/featureGrid.ts` - home navigation cards
- `src/pages/personal-history/personalHistoryPage.ts` - personal history page
- `src/pages/tech-stack/techStackPage.ts` - tech stack page
- `src/pages/blogs/blogsPage.ts` - blogs index + dynamic post page renderer

## Data Files

- `src/data/textData.ts` - shared hero/feature text and shared types
- `src/data/personalHistoryData.ts` - personal history page content
- `src/data/techStackData.ts` - tech stack categories, items, and SVG icon paths
- `src/data/blogData.ts` - blog post data and slug lookup helpers

## Routing

Uses hash-based routing in `src/main.ts`:

- `#/` - home
- `#/personal-history` - personal history page
- `#/tech-stack` - tech stack page
- `#/blogs` - blog cards page
- `#/blogs/:slug` - dynamic blog post page

## Branding Assets

- `public/ac-logo.svg` - custom AC logo SVG
- `public/ac-logo.png` - PNG export of the same logo
- `index.html` uses `public/ac-logo.svg` as the favicon

## Deployment

GitHub Pages workflow is in `.github/workflows/deploy-pages.yml` and deploys `dist` on pushes to `main`.
