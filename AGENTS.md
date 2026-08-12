# Contra — Agent Onboarding

## Purpose

A pixel-faithful Next.js + Bun port of **contra.html** (the Contra Labs Framer
landing page: "The world's leading independent human data & creative evaluation
lab"). The goal is to reproduce the original Framer site's *look, behavior, and
frame timing* as closely as possible in an App Router Next.js app, fix any bugs
that appear, and keep the project deployable (GitHub → Vercel).

## Stack

- **Framework**: Next.js 16.3.0 (App Router, Turbopack), React 19
- **Package manager**: Bun 1.3.9 (`bun dev`, `bun run build`, `bun run lint`)
- **Language**: TypeScript
- **Styling**: plain CSS imports (no Tailwind) under `src/app/styles/`
- **Deploy**: Vercel (project `contra`), repo `parsanaderidev/contra`

## Status (as of last session)

- Site renders the full Framer page from `src/app/blob/main-inner.ts` — the
  server-SSR'd HTML string of `#main`, injected via `dangerouslySetInnerHTML`
  in `src/app/page.tsx`.
- Added a `CreditFooter` (`src/components/CreditFooter.tsx`) that shows
  **"Made by ParsaNaderi"** linking to `https://parsanaderi-dev.vercel.app`.
- Fixed the dev-only hydration mismatch: Next's dev-overlay injects a
  `<script data-nextjs-dev-overlay>` into `<body>` before React hydrates,
  breaking hydration for the SSR'd `#main`/`SvgTemplates` tree. Disabled it
  with `devIndicators: false` in `next.config.ts`.
- **Live**: https://contralab.vercel.app — repo: https://github.com/parsanaderidev/contra
- `bun run build` and `bun run lint` pass (lint has ~18 pre-existing
  `CSSProperties` unused-import warnings in `src/components/sections/*` — not
  errors, don't chase them unless asked).

## Project layout

```
src/
  app/
    layout.tsx            # <html>/<body>, metadata, canonical
    page.tsx              # Home: #main (blob HTML) + SvgTemplates + FramerRuntime + CreditFooter
    globals.css           # imports fonts -> breakpoints -> framer-components -> body-base
    blob/main-inner.ts    # the Framer SSR HTML string (the actual page)
    blob/page.tsx         # separate /blob route (preview of raw blob)
    styles/               # CSS extracted from contra.html
  components/
    # React re-composition of the Framer page (an alternative/legacy layer):
    SiteShell.tsx, PageShell.tsx, TopNav.tsx, Footer.tsx, FramerRoot.tsx, ...
    sections/             # per-section components
  types/dom.d.ts          # DOM hand-internal types
contra.html               # THE reference source — match frame timing/styles to this
components_backup/        # pre-fix snapshots of Footer/FramerRuntime
```

## Known issues / notes

- **THREE.Color: Unknown color model `var(--token-..., rgb(...))`** — harmless
  console noise from Framer's runtime passing CSS-var color strings to
  three.js. Cosmetic only; ignore unless a visual bug is confirmed.
- **`/blob` route** exists as a raw preview; the real site is `/`.
- The components under `src/components/` (SiteShell, MainContent, sections…)
  form an older reactified layer. The **live page** uses the blob HTML path.
  When changing the visual page, edit `blob/main-inner.ts` or add components in
  `page.tsx`. Be careful editing the blob: it is one 284 KB string.
- Frame timing must match `contra.html`. Framer animations are driven by the
  runtime's data/FF7/framer runtime in `FramerRuntime.tsx`; don't add your own
  easing/durations unless the Framer original is doing it.

## Workflow

1. `bun run lint` — no errors (warnings OK).
2. `bun run build` — must compile + generate static pages.
3. Deploy: `vercel --prod --name contra --yes` (Vercel CLI logged in as
   `parsanaderidev`). Production alias: `contralab.vercel.app`.
4. Update this file whenever you solve something or add behavior so the next
   agent can onboard fast.