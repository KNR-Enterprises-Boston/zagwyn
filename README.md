# Zagwyn Firewood — Website

Professional marketing and order-request website for Zagwyn Firewood (Shirley, MA). Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Exports as a fully static site for deployment to Vercel, Netlify, or any static host.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

Static output is emitted to `out/`. Upload the contents of `out/` to any static host, or connect the repo to Vercel / Netlify for automatic deploys.

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_FORM_ENDPOINT` — URL of your Formspree (or equivalent) form. The order request form at `/contact` posts to this endpoint. If it's unset, the form simulates success for local development.

## Project structure

- `src/app/` — App Router pages (home, about, products, delivery, learn + articles, contact, gallery, privacy, 404)
- `src/components/` — Shared React components (header, footer, order form, zip checker, etc.)
- `src/content/` — Editable content data: products/pricing, towns, zip codes, testimonials
- `src/lib/` — Site metadata and SEO helpers
- `public/` — Static assets, `robots.txt`, `sitemap.xml`

## Before launch

See `TODO.md` for the full pre-launch checklist — mostly real photography, confirmed pricing, and the Formspree endpoint.
