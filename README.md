# Mistras.lt — Next.js + Headless WordPress rebuild

Production rebuild of [mistras.lt](https://mistras.lt) — a Lithuanian floor-services company (parquet sanding, floor oiling, commercial floors, terrace renewal, baseboard installation). I designed and built the front-end as a Next.js 14 App Router site backed by headless WordPress + WPGraphQL.

**Status:** In production. The site is live at mistras.lt.

---

## What I built

- **Marketing site** — 10+ service-specific landing pages (parquet sanding, floor oiling, commercial floors, etc.) generated from a shared `ServicePageTemplate` + per-service data.
- **Multi-step lead form** — progressive-disclosure quote request (`MultiStepLeadForm.tsx`), with `/api/contact` route to the back-end.
- **Pricing calculator** — interactive estimator with category-aware logic (`DetailedCalculator.tsx`, `Calculator.tsx`).
- **Before/after slider** — drag-to-compare for portfolio images (`BeforeAfterSlider.tsx`).
- **Portfolio** — filterable, modal-detail portfolio grid sourced from WordPress (`PortfolioFilter`, `PortfolioGrid`, `PortfolioModal`).
- **Cookie consent + privacy / cookie pages** — GDPR-compliant banner with full policy pages.
- **SEO** — JSON-LD schema components (`LocalBusinessSchema`, `FaqSchema`, `ServiceSchema`), `next-sitemap` for automated sitemap generation.
- **Bilingual content support** — Lithuanian primary; structured for translation extension.

## Stack

- **Framework:** Next.js 14 (App Router) · TypeScript
- **Styling:** Tailwind CSS · custom design tokens · Geist font family
- **Motion / interaction:** Framer Motion · Headless UI · react-intersection-observer
- **Image optimization:** Sharp · `next/image`
- **Data / CMS:** WordPress 6 (headless) + ACF + WPGraphQL → fetched via `lib/wp-graphql.ts`
- **Forms:** Contact Form 7 (WP) wired to a Next.js `/api/contact` route
- **SEO:** Schema.org JSON-LD components · next-sitemap · per-page metadata

## Repo layout

```
src/
├─ app/                    Next.js App Router pages (LT URL slugs)
│  ├─ api/contact/         Lead-form back-end route
│  ├─ apie-mus/            About page
│  ├─ atlikti-darbai/      Portfolio
│  ├─ kainos/              Pricing
│  ├─ paslaugos/           Services overview
│  ├─ parketo-slifavimas/  → 10 service-specific pages
│  └─ ...
├─ components/             Feature-grouped React components
│  ├─ home/                Hero, Services grid, Testimonials, Trust bar
│  ├─ services/            ServicePageTemplate
│  ├─ portfolio/           Grid, filter, modal
│  ├─ pricing/             Pricing table, calculator
│  ├─ seo/                 Schema.org JSON-LD components
│  └─ shared/              Reusable widgets (BeforeAfterSlider, Calculator, ...)
└─ lib/
   ├─ content.ts           Static content sources
   ├─ pricing.ts           Pricing logic
   ├─ services-data.ts     Service catalog
   ├─ wordpress.ts         REST fallback
   └─ wp-graphql.ts        Headless WP via GraphQL
```

## Local dev

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_WORDPRESS_URL etc.
npm run dev                   # http://localhost:3000
npm run build                 # production build
npm run type-check            # TS verification
```

## Why publish it

This is the most representative piece of my client work — a full Next.js + TypeScript + headless WordPress rebuild, deployed and in production for a real Lithuanian SMB. The repo shows the front-end + integration plumbing I ship for clients. Published with the client's permission for portfolio purposes; the live deployment, content, and credentials live separately.

## License

Source code copyright © Titas Kazlauskas, 2026. Published for portfolio purposes. The Mistras brand, logo, content, and live deployment are property of UAB Mistras.
