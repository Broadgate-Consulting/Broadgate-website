# Broadgate Consulting — website

One-page marketing site for Broadgate Consulting Limited (formerly AdeptLead2),
built with [Astro](https://astro.build).

## Commands

| Command             | Action                                      |
| ------------------- | ------------------------------------------- |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start the dev server at `localhost:4321`    |
| `npm run build`     | Build the production site to `./dist/`      |
| `npm run preview`   | Preview the production build locally        |

## Deployment (Vercel)

Static Astro site — Vercel auto-detects the framework, runs `astro build` and serves
`dist/`. No adapter or `vercel.json` needed.

1. Vercel → **Add New… → Project** → import `RayPretorius-66/Broadgate-website`.
2. Framework preset: **Astro** (auto). Build `astro build`, output `dist`. Leave as-is.
3. Deploy. Every push to `main` redeploys; PRs get preview URLs.
4. Add the custom domain (`broadgateconsulting.co.uk`) under Project → Settings → Domains,
   then update `site` in `astro.config.mjs` if it differs.

## Structure

```
src/
  data/site.ts         All page copy and lists (intro, offerings, network, leadership)
  layouts/Base.astro   <head>, metadata, JSON-LD, favicons
  components/
    SiteHeader.astro   Navy banner + right-side slide-in section menu ("MENU", top-right) + sticky mini-bar
    BrandLockup.astro  Symbol image + "Broadgate Consulting" text (sticky bar, footer)
    Footer.astro
  pages/index.astro    The single page + its section styles
  styles/global.css    Brand tokens (colour, type) and shared utilities
public/                Favicons, robots.txt
src/assets/            Logo assets (see below)
```

### Logo assets (`src/assets/`)

Cropped from the official brand files in `Brand basics/` — no redrawn/approximated marks.

| File | What | Used by |
| ---- | ---- | ------- |
| `broadgate-lockup.png` | Full lockup (symbol + wordmark + slogan) on navy — cropped from the LinkedIn company cover | Banner |
| `broadgate-symbol-alpha.png` | Gateway symbol, white/gold on transparent | BrandLockup (sticky bar, footer) |
| `broadgate-symbol.png` | Gateway symbol on navy | spare |
| `broadgate-symbol-ink.png` | Gateway symbol, navy/gold on transparent (= brand app-icon) | Introduction watermark |

The original brand source files live in `Brand basics/` and `Positioning copy/`.

Sections: Banner → Introduction → Offerings → Approach → Network → Leadership → Contact.
The "MENU" button opens a drawer linking to each section.

## Brand

Palette and type follow the Broadgate Brand & Document Style Guide v1.1:
Navy `#02234F`, Gold `#BF8C2A`, Ink `#17202A`. Headings use Aptos / Aptos Display
where available, falling back to the system UI sans and then Arial.

## Notes / TODO before launch

- Confirm the public contact address (`hello@broadgateconsulting.co.uk` is a placeholder).
- Confirm the LinkedIn company URL in `src/data/site.ts`.
- Confirm partner names/roles. Compass Consulting is linked to compass-consulting.co.uk;
  CoreSync and Letsema came from a compressed list in the positioning doc — verify. Add
  partner logos/links if available.
- Set the real production domain in `astro.config.mjs` if it differs.
