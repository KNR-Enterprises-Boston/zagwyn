# Pre-launch TODO

Items marked in the codebase or content files that need real data from Zagwyn before the site goes live.

## Photography & media (all current image slots are `Placeholder` components)

- **Hero (home page)** — Looping 10–15 second background clip OR high-res still: processor splitting → conveyor → loaded dump truck
- **Product quick-select cards (home)** — Close-up photos of each wood type (kiln-dried, seasoned, green)
- **About page portrait** — Alex and/or David Zagwyn in the yard (real working shot, not studio)
- **About page equipment section** — Four real photos:
  - Skid steer loading logs onto processor deck
  - Firewood processor splitting (close-up on wedge)
  - Kiln exterior with steam venting
  - Loaded dump truck at a delivery
- **Products page** — Close-up photos of each wood tier
- **Gallery page** — Populate all three groups (Yard & Equipment, Finished Product, Deliveries). Minimum 15–20 images recommended.

## Content & data

- **Pricing** — `src/content/products.ts` currently contains `TODO` markers for every volume/tier. Replace with real delivered prices.
- **Testimonials** — `src/content/testimonials.ts` has placeholder customer names/towns. Replace with real quotes collected with permission (or pulled from the Google Business Profile).
- **Business hours** — Confirm hours listed in `src/lib/site.ts`. Update if different.
- **Payment methods** — Confirm list in `src/lib/site.ts`. Add/remove as needed.
- **Stacking service pricing** — If a stacking fee structure exists, add a note on the `/products` and `/delivery` pages.
- **Delivery fees per zone** — Currently described qualitatively. Add actual dollar amounts if the client wants them public.

## Configuration

- **Form endpoint** — Sign up for Formspree (or equivalent) and set `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local` and the production environment.
- **Google Business Profile** — Update GBP with:
  - Primary category: "Firewood Supplier"
  - High-res photos
  - Link to the new website
- **Domain** — Point `zagwynfirewood.com` at the deploy target (Vercel/Netlify). Update `site.url` in `src/lib/site.ts` if the domain changes.
- **Favicon** — Add a real favicon to `public/favicon.ico`.
- **Analytics** — Add Google Analytics 4 ID to `src/app/layout.tsx` if desired.

## Legal

- **Privacy policy** — `/privacy` contains brief placeholder text. Replace with counsel-reviewed policy before launch.

## Optional enhancements (post-launch)

- Online payment (Stripe Checkout) for confirmed orders
- Seasonal pre-order system with email capture tied to the newsletter
- Automated delivery fee calculation by zip
- Customer portal for repeat orders
