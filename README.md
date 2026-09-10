# Karim W. Barake — Personal Website

Single-page landing site built with **Next.js** (App Router). A centered
portrait sits inside a glowing ring, four glass "domain" cards float on a
dashed orbit, and hand-drawn science doodles drift across the background.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, React 19)
- Plain CSS — everything in `app/globals.css`
- Pure-SVG background and orbit (no animation libraries)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All text — name, tagline, social links, and the four domain cards — lives in
[`data/content.js`](data/content.js). The portrait is `public/headshot.jpg`
(a 1000×1000 square); swap the file to change it.

## Project structure

```
app/
  layout.js        # root layout + metadata
  page.js          # the hero
  globals.css      # all styling
  icon.svg         # favicon
components/
  ScienceBackground.js  # SVG doodles (Fourier, Schrodinger, benzene, eye, brain, ...)
  OrbitCards.js         # dashed orbit + the four floating cards
  DomainIcon.js         # line-art icons for Music / Research / Bio / Vision Care
  SocialIcon.js         # LinkedIn / Instagram / DJ / ORCID / email icons
data/
  content.js       # all site content
public/            # static assets
```

## Build & deploy

```bash
npm run build
npm start
```

Recommended: import the repo on [Vercel](https://vercel.com/) — zero config.
