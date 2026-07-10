# Dharshini Ganesh — Portfolio

A premium, production-grade personal portfolio built with Next.js (App Router),
TypeScript, Tailwind CSS v4, and Framer Motion.

This is **Pass 1** of the build: a complete, working single-page site with every
section from the brief (hero, about, journey, skills, projects, experience,
certifications, contact) using real content, the specified color system and
typography, dark/light theming, scroll reveal animation, an accessible contact
form with a working API route, and elegant placeholders for photos/screenshots
that don't exist yet.

Not yet built (next passes, on request): command palette (Ctrl+K), custom
cursor, GSAP/Lenis smooth-scroll, Three.js hero scene, live GitHub dashboard,
case-study detail pages per project.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> **Note on fonts:** this project uses `next/font/google` for Space Grotesk,
> Inter, and JetBrains Mono. The build needs internet access to fetch these
> from Google Fonts — this works automatically on Vercel and on any machine
> with normal internet access.

## Project structure

```
src/
  app/
    page.tsx          → assembles all sections
    layout.tsx         → fonts, metadata, theme bootstrapping
    globals.css         → design tokens (colors, fonts) as CSS variables
    api/contact/route.ts → contact form endpoint (validation, honeypot, rate limit)
    robots.ts, sitemap.ts
  components/          → one component per section/UI piece
  lib/
    data.ts            → ALL content lives here — edit this file to update
                          any text, project, skill, or contact detail site-wide
```

## Updating content

Everything personal — name, projects, skills, internships, certifications,
journey stages, contact info — lives in `src/lib/data.ts`. Edit that file;
no component needs to change.

## Replacing placeholders

Photos, project screenshots, and certificate badges currently render as
elegant gradient placeholders (`src/components/asset-placeholder.tsx`). Drop
real images into `public/` and swap the `<AssetPlaceholder />` usage for a
Next.js `<Image />` component once assets are available — no layout changes
needed.

## Wiring the contact form to send real emails

`src/app/api/contact/route.ts` currently logs submissions to the server
console. To send real emails, add a `RESEND_API_KEY` environment variable and
uncomment the Resend example in that file (see the `TODO` comment).

## Deployment

Built for Vercel:

```bash
npm run build
```

Set the production domain to `dharshini.dev` when ready, and update
`src/app/sitemap.ts` / `src/app/robots.ts` to match.
