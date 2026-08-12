# Contra Labs

A pixel-faithful port of the [Contra Labs](https://contralabs.com) Framer
landing page ("The world's leading independent human data & creative
evaluation lab") rebuilt in **Next.js (App Router) + Bun + TypeScript**, with
the original Framer SSR markup served from `src/app/blob/main-inner.ts` and
hydrated headlessly.

**Live**: https://contra-ebon.vercel.app

## Stack

- Next.js 16.3.0 (App Router, Turbopack), React 19
- Bun 1.3.9 — `bun dev`, `bun run build`, `bun run lint`
- TypeScript, plain CSS (no Tailwind)

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

### Checks

```bash
bun run lint   # no errors (a few pre-existing unused-import warnings OK)
bun run build  # static pages for / and /blob
```

## Deploy

```bash
vercel --prod --name contra --yes
```

Production alias: `contra-ebon.vercel.app`.

## Layout

- `src/app/page.tsx` — renders the Framer SSR blob + runtime + credit footer
- `src/app/blob/main-inner.ts` — the Framer-generated HTML string (the actual
  page)
- `src/components/FramerRuntime.tsx` — Framer motion/animations runtime
- `src/components/CreditFooter.tsx` — "Made by ParsaNaderi" footer
- `src/app/styles/` — CSS extracted from `contra.html`

`contra.html` is the reference source for frame timing and styling.