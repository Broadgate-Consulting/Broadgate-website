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

### Logo assets

Taken straight from the official brand files in `Brand basics/` — no redrawn or approximated marks.

| File | What | Source in `Brand basics/` | Used by |
| ---- | ---- | ------------------------- | ------- |
| `src/assets/broadgate-lockup.png` | Full lockup (symbol + wordmark + slogan) on navy | tight crop of `linkedin/broadgate-linkedin-company-cover-4200x700.png` | Banner |
| `src/assets/broadgate-symbol-alpha.png` | Gateway symbol, white/gold on transparent | `linkedin/broadgate-linkedin-company-logo-white-gold-transparent-400x400.png` (verbatim) | BrandLockup (sticky bar, footer) |
| `src/assets/broadgate-symbol-ink.png` | Gateway symbol, navy/gold on transparent | `website/broadgate-corner-icon-256.png` (verbatim) | Introduction watermark |
| `src/assets/broadgate-symbol.png` | Gateway symbol on navy | derived | spare |
| `public/favicon-*.png`, `apple-touch-icon.png` | Favicons / touch icon | `icons/broadgate-icon-*` | `Base.astro` |
| `public/favicon.ico` | Legacy favicon | generated from `icons/broadgate-icon-32x32.png` | `Base.astro` |
| `public/og-image.png` | 1200×630 social-share card | padded from `website/broadgate-website-banner-1920x600.png` | `og:image` / Twitter card |

The current collateral is **"Your Gateway to Expertise"** with the wider "Broad" symbol
(31 Aug 2026). To refresh: drop new files into `Brand basics/`, re-run the same crops
into `src/assets/` and `public/`, keeping filenames identical. The original brand source
files live in `Brand basics/` and `Positioning copy/`.

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
