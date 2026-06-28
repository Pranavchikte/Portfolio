# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack (hot reload)
npm run build     # Production build with Turbopack
npm run start     # Run production server
npm run lint      # Run ESLint
```

Use `legacy-peer-deps=true` (already in `.npmrc`) if installing new packages — required due to React 19 peer dependency conflicts.

## Environment Variables

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/<form-id>
```

Without this, the contact form falls back to opening the default mail client.

## Architecture

**Next.js 15 App Router** with TypeScript, Tailwind CSS 4, and Motion for animations.

### Data layer

All portfolio content is hard-coded (no CMS or database):
- `lib/projects.ts` — project metadata, type definitions, and full case study content for each project. This is the single source of truth for project data consumed by both the projects section and dynamic `[slug]` detail pages.
- `lib/site.ts` — global config: name, email, GitHub/LinkedIn URLs, resume path.
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).

### Routing

- `app/page.tsx` — home page; composes ~10 section components sequentially.
- `app/projects/[slug]/page.tsx` — static project detail pages; uses `generateStaticParams()` over projects from `lib/projects.ts`.
- `app/opengraph-image.tsx` — dynamic OG image generation via Next.js image response.

### Components

`components/` holds one file per portfolio section (hero, projects, skills, contact, etc.) plus:
- `components/header.tsx` — sticky nav; active section tracked via Intersection Observer synced to URL hash.
- `components/theme-provider.tsx` + `theme-toggle.tsx` — dark/light mode persisted to localStorage.
- `components/ui/` — reusable primitives (shadcn/ui new-york style + custom canvas/animation effects).

### Hooks

`hooks/` contains three custom hooks:
- `use-in-view.ts` — Intersection Observer wrapper for scroll-triggered animations.
- `use-animation-settings.ts` — respects `prefers-reduced-motion`.
- `use-outside-click.ts` — click-outside detection for mobile nav.

### Styling

- Design tokens (OKLch color space, brand colors cyan & amber) defined as CSS variables in `app/globals.css`.
- Tailwind utility classes used throughout; component variants via `class-variance-authority`.
- shadcn/ui components configured in `components.json` (style: new-york, icons: lucide).

### Static assets

`public/` holds the resume PDF, certificate PDFs, and project screenshots served directly.
