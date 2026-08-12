# Contra Labs

> The world's leading independent human data & creative evaluation lab.

A pixel-faithful port of the **Contra Labs** Framer landing page
([contralabs.com](https://contralabs.com)) rebuilt on the modern Next.js App
Router stack. It serves the original Framer SSR markup headlessly and hydrates
it with Framer's runtime, preserving the site's look, motion, and frame timing.

**Live**: https://contra-ebon.vercel.app · **Made by**
[ParsaNaderi](https://parsanaderi-dev.vercel.app)

## Features

- **Pixel-faithful rendering** — the exact Framer SSR HTML is served from
  `src/app/blob/main-inner.ts` and rendered through `#main`, so nothing is lost
  in translation.
- **Framer animations preserved** — the original Framer runtime
  (`FramerRuntime.tsx`) drives scrolling, reveal, and canvas effects.
- **Headless hydration** — React hydrates the SSR blobs without client-side
  re-rendering (dev overlay disabled in `next.config.ts` to avoid dev-only
  hydration drift).
- **Credit footer** — a "Made by ParsaNaderi" footer links back to the author's
  site.
- **Statically exported** pages with no runtime API dependencies.

## Tech Stack

| Layer      | Tool                                                  |
| ---------- | ----------------------------------------------------- |
| Framework  | [Next.js](https://nextjs.org) 16.3.0 (App Router, Turbopack) |
| UI         | React 19                                                |
| Language   | TypeScript                                              |
| Package mgr| [Bun](https://bun.sh) 1.3.9                               |
| Styling    | Plain CSS (no Tailwind) under `src/app/styles/`         |
| Deploy     | Vercel (project `contra`)                               |

## Getting Started

Requirements: **Node 20+ / Bun 1.3.9** (or latest Bun).

```bash
bun install   # install dependencies
bun dev       # start dev server -> http://localhost:3000
```

### Scripts

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `bun dev`          | Start the dev server               |
| `bun run build`    | Production build (static pages)    |
| `bun start`        | Serve the production build         |
| `bun run lint`     | ESLint check (0 errors expected)   |

## Project Structure

```
contra/
├─ contra.html                 # Reference Framer export (frame timing + styles)
├─ src/
│  ├─ app/
│  │  ├─ page.tsx              # Home: #main blob + SvgTemplates + FramerRuntime + CreditFooter
│  │  ├─ layout.tsx            # <html>/<body>, metadata, canonical
│  │  ├─ globals.css           # fonts -> breakpoints -> framer-components -> body-base
│  │  ├─ blob/
│  │  │  ├─ main-inner.ts      # The Framer SSR HTML string (the actual page)
│  │  │  └─ page.tsx           # /blob preview route
│  │  └─ styles/               # CSS extracted from contra.html
│  ├─ components/              # React layer: SiteShell, Footer, FramerRuntime, sections/...
│  └─ types/dom.d.ts           # DOM-hand-internal types
└─ components_backup/          # Pre-fix snapshots (Footer/FramerRuntime)
```

## Deployment

The app is deployed to Vercel from the `main` branch:

```bash
vercel --prod --name contra --yes
```

Production alias: **https://contra-ebon.vercel.app**

## License

[MIT](LICENSE) © 2026 ParsaNaderi