# Zagwyn Firewood — Website Build Outline for Claude Code

## Project Brief

Build a professional, conversion-focused website for Zagwyn Firewood, a firewood supplier based in Shirley, MA. The business operates industrial-grade processors, kiln equipment, skid steers, and a dump truck fleet. They deliver kiln-dried, seasoned, and green hardwood in volumes from 1/2 cord to 4+ cords across Middlesex and Worcester counties.

Primary contacts: Alex and David Zagwyn
Phone numbers: 978-501-5184 / 978-501-5223
Location: Great Road, Shirley, MA

---

## Design Direction

### Visual Identity
- **Color palette:** Dark charcoal (#1C1C1C or similar) as the primary background for hero/header sections. Warm amber/gold (#C8912E or similar) as the accent. Off-white (#F5F2ED) for light content sections. Deep forest green (#2A3D2E) as a secondary accent.
- **Typography:** Use a strong serif or slab serif for headings (e.g., Playfair Display, Libre Baskerville, or a similar Google Font). Use a clean sans-serif for body text (e.g., Inter, Source Sans 3). Avoid geometric sans-serifs that read as "tech startup."
- **Photography style:** All imagery should be real operational photos (provided by Zagwyn) or high-quality stock showing split hardwood, fire, New England landscapes. No AI-generated images. No generic stock photos of smiling families around fireplaces.
- **Texture and warmth:** Subtle wood grain or paper textures in background accents. Thin rule lines between sections. Generous whitespace. The site should feel like a well-built piece of carpentry, not a SaaS landing page.

### Anti-AI-Look Checklist
- No gradient mesh hero backgrounds
- No floating 3D objects or glassmorphism
- No cards with identical rounded corners and drop shadows in a perfect grid
- No purple-to-blue gradients
- No "wave" SVG section dividers
- No emoji or icon-heavy bullet-point grids
- No centered-everything layouts. Use left-aligned text blocks with intentional asymmetry.
- Section transitions should use photography, rule lines, or background color shifts. Not decorative SVG shapes.

### Responsive Behavior
- Mobile-first. The majority of firewood searches happen on phones.
- Sticky header with phone number and "Order Now" CTA visible at all times on mobile.
- Touch-friendly tap targets for product selection and zip code entry.

---

## Tech Stack Recommendation

- **Framework:** Next.js (static export or SSG) or plain HTML/CSS/JS if simplicity is preferred. Discuss with the client.
- **Styling:** Tailwind CSS for utility classes, with custom CSS for branded components.
- **Hosting:** Vercel, Netlify, or similar static hosting.
- **Forms:** Formspree, Netlify Forms, or a lightweight backend for the contact/order form.
- **Maps:** Embedded Google Map or Mapbox for the delivery area visualization.
- **Analytics:** Google Analytics 4, Google Search Console.
- **Schema markup:** JSON-LD LocalBusiness schema on every page.

---

## Site Structure (7 Pages + Global Elements)

---

### Global Elements (Present on Every Page)

#### Header
- Zagwyn Firewood logo (left-aligned)
- Navigation links: Home | About | Products & Pricing | Delivery Area | Knowledge Base | Contact
- "Call to Order" button with phone icon linking to 978-501-5184 (high-contrast amber button)
- On mobile: hamburger menu, but keep the phone button and "Order Now" CTA visible outside the menu

#### Trust Bar (Below Header)
- Horizontal strip with three brief trust signals using simple line icons (not filled/colored emoji-style icons):
  - "100% Local Hardwood"
  - "Kiln-Dried Available"
  - "Screened for Cleanliness"
- Light background, small text. Understated.

#### Footer
- Three-column layout on desktop, stacked on mobile:
  - **Column 1:** Zagwyn Firewood logo, brief tagline ("Precision-cut firewood from Shirley, MA"), phone numbers
  - **Column 2:** Quick links to all pages, Google Business Profile link
  - **Column 3:** Comma-separated list of all serviced towns (see Delivery Area page for the full list). This block exists for local SEO.
- Below columns: copyright, privacy policy link
- Newsletter signup field with one line of copy: "Get early-season pricing and pre-order updates." Email input + submit button.

---

### Page 1: Homepage

**URL:** /

**Purpose:** Establish credibility and scale within 3 seconds. Drive visitors to Products & Pricing or Contact.

#### Section 1 — Hero
- Full-width background: either a high-quality still photo of the operation (loaded dump truck, processor in action, or stacked kiln-dried wood) or a looping background video (muted, no controls) showing the processing workflow. If video is used, keep it under 15 seconds and compress aggressively for mobile.
- Left-aligned text overlay on a semi-transparent dark panel:
  - **Headline:** "Premium Firewood, Cut and Delivered in Central Massachusetts"
  - **Subhead:** "Kiln-dried, seasoned, and green hardwood. Half a cord to four cords. Shirley, MA and surrounding towns."
  - **Two CTAs side by side:** "See Products & Pricing" (primary amber button) | "Check Your Delivery Area" (secondary outlined button)

#### Section 2 — Three Value Columns
- Off-white background section
- Three columns, each with:
  - A small line icon (not an emoji, not a filled circle icon)
  - A short heading
  - Two sentences of copy
- Column content:
  1. **Industrial Processing** — "Every piece runs through our processor and gets cut to standard 16-inch lengths. You get uniform splits that fit any stove, insert, or fireplace."
  2. **Kiln-Dried Option** — "Our kilns bake moisture below 20% and eliminate insects, mold, and fungus. Safe to store indoors, lights fast, burns hot."
  3. **Flexible Delivery** — "Our dump trucks handle anything from a half-cord suburban drop to a four-cord bulk run. We cover Middlesex and Worcester counties."

#### Section 3 — Product Quick-Select
- Dark charcoal background
- Heading: "What Are You Looking For?"
- Three clickable product cards, each linking to the relevant section on the Products & Pricing page:
  1. **Kiln-Dried Hardwood** — brief one-liner, "Our premium product" label
  2. **Seasoned Hardwood** — brief one-liner
  3. **Green Hardwood** — brief one-liner
- Cards should use real wood photography as backgrounds (different wood states), not colored rectangles

#### Section 4 — Social Proof
- Light background
- Heading: "What Our Customers Say"
- Two or three real customer testimonials in a simple layout (not a slider/carousel). Pull from existing Google reviews.
- Include the "super helpful with placement" quote if the customer consents.
- Each testimonial: quote text, first name, town.

#### Section 5 — CTA Banner
- Full-width amber/gold background strip
- "Ready to order? Call us at 978-501-5184 or check your delivery area."
- Two buttons: "Call Now" | "Delivery Area Map"

---

### Page 2: About Us

**URL:** /about

**Purpose:** Humanize the operation. Show the equipment. Build trust through transparency.

#### Section 1 — Company Story
- Photo of Alex and/or David (real photo, operational setting, not a studio portrait) alongside text.
- Copy should cover:
  - The Zagwyn family's multi-generational roots in central Massachusetts (Shirley, Marlborough, Southborough, Sterling, Winchendon, Ashburnham)
  - Alex and David as the hands-on operators
  - The transition from phone-and-print sales to a full digital operation
  - Tone: direct, factual, no corporate mission-statement language. Write it like you're explaining who you are to a neighbor.

#### Section 2 — Our Equipment (The Core Differentiator)
- Heading: "How We Process Your Wood"
- Four subsections, each with a photo and a short paragraph:
  1. **Skid Steers** — Yard management, log handling, keeping wood off the ground and out of mud
  2. **Firewood Processor** — Mechanized cross-cutting and splitting, uniform 16-inch output, screening for debris
  3. **Kilns** — How the thermal drying process works, what temperature range, what it eliminates (moisture, insects, mold)
  4. **Dump Truck Fleet** — Variable load capacity, multi-stop route capability, range of delivery sizes
- Use real operational photos. If video clips are available, embed short clips (under 10 seconds each) that autoplay muted with a play button overlay.

#### Section 3 — CTA
- "Want to see the product for yourself? Give us a call." + phone number button.

---

### Page 3: Products & Pricing

**URL:** /products

**Purpose:** Transparent pricing. Clear volume options. Eliminate confusion about cord measurements.

#### Section 1 — Product Tiers
- Three product blocks, stacked vertically (not side-by-side cards). Each block contains:
  - Product name and a "badge" if applicable (e.g., "Most Popular" on Kiln-Dried)
  - A real photo of that wood type
  - 3-4 bullet points describing the product characteristics
  - A pricing table showing cost per volume: 1/2 Cord | 1 Cord | 2 Cords | 3 Cords | 4+ Cords
  - A "Request This Product" button linking to the contact/order form

**Kiln-Dried Hardwood (Flagship)**
- Sub-20% moisture content
- Insect-free, mold-free, safe for indoor storage
- Lights fast, burns hot, produces less creosote
- Best for: supplemental heating, fireplaces, fire pits, indoor storage

**Seasoned Hardwood**
- Air-dried, screened for dirt and debris
- Reliable and cost-effective for high-volume heating
- Best for: primary heating, wood stoves, budget-conscious buyers

**Green Hardwood**
- Freshly processed, requires 6-12 months of air-drying before burning
- Minimum order: 1 full cord
- Best for: forward-planners with storage space, rural properties

#### Section 2 — Volume Visualizer
- Heading: "How Much Is a Cord?"
- A clear diagram (illustrated or photographed) showing:
  - A full cord: 4 ft × 4 ft × 8 ft = 128 cubic feet
  - A face cord (1/3 of a full cord) for reference
  - A visual comparison of a dump truck loaded with 1/2 cord vs. 4 cords
- Keep this section educational and visual. It prevents post-delivery disputes and reduces customer support calls.

#### Section 3 — Pricing Notes
- Brief text block covering:
  - Delivery fees vary by distance from Shirley (link to Delivery Area page)
  - Stacking services available (mention if pricing or a quote is required)
  - Prices subject to seasonal adjustment
  - "Call for wholesale, restaurant, or commercial orders"

---

### Page 4: Delivery Area

**URL:** /delivery

**Purpose:** Set delivery boundaries. Capture local SEO traffic for dozens of town names.

#### Section 1 — Interactive Map
- Embedded map (Google Maps or Mapbox) centered on Shirley, MA
- Visual overlay or marker radius showing approximate 20-mile delivery range
- Markers or shading for the three delivery zones (if the client wants to show zone-based pricing):
  - **Zone 1 (0-10 mi):** Shirley, Devens, Ayer, Groton, Harvard, Lunenburg, Townsend, Pepperell
  - **Zone 2 (10-15 mi):** Leominster, Fitchburg, Westford, Littleton, Boxborough, Acton, Chelmsford, Lancaster, Clinton
  - **Zone 3 (15-20 mi):** Concord, Carlisle, Sudbury, Lincoln, Wayland, Weston, Marlborough, Southborough

#### Section 2 — Zip Code Checker
- Simple input field: "Enter your zip code to check delivery availability"
- Returns: "Yes, we deliver to [town name]!" or "Contact us to discuss delivery to your area."
- This can be a static lookup table (JSON of zip codes mapped to zones) rather than a live API.

#### Section 3 — Delivery Logistics
- Brief, direct copy explaining:
  - Dump truck delivery requires overhead clearance (no low-hanging branches or wires)
  - Trucks need a solid, paved, or packed surface for offloading
  - Zagwyn will work with you on placement
  - Stacking service available on request
  - Delivery scheduling: explain lead times (seasonal demand, etc.)

#### Section 4 — Town Directory (SEO Block)
- Full alphabetized list of all serviced municipalities, displayed as a multi-column text block (not individual pages per town):
  Acton, Ashburnham, Ayer, Bedford, Billerica, Bolton, Boxborough, Burlington, Carlisle, Chelmsford, Clinton, Concord, Devens, Dracut, Dunstable, Fitchburg, Gardner, Groton, Harvard, Hopkinton, Hudson, Lancaster, Leominster, Lexington, Lincoln, Littleton, Lowell, Lunenburg, Marlborough, Maynard, Northborough, Pepperell, Shirley, Southborough, Stow, Sudbury, Tewksbury, Townsend, Tyngsboro, Westborough, Westford, Worcester
- Small heading above: "We deliver firewood to these Massachusetts towns"

---

### Page 5: Knowledge Base

**URL:** /learn

**Purpose:** Capture informational search traffic. Position Zagwyn as a knowledgeable, trustworthy source.

#### Article 1: "Kiln-Dried vs. Seasoned Firewood: What's the Difference?"
- Explain the drying methods (kiln vs. air-seasoning)
- Compare moisture content, ignition speed, BTU output, creosote production
- Explain why kiln-dried costs more and when it's worth the premium
- Mention pest/insect elimination as a kiln benefit

#### Article 2: "How to Store Your Firewood"
- Stacking best practices (off the ground, covered top, open sides for airflow)
- Indoor vs. outdoor storage considerations
- How to maintain moisture levels after delivery
- Applies to all three product types

#### Article 3: "Understanding Firewood Measurements"
- Define: full cord, face cord, rick, cubic feet
- Explain why volume confusion is common in the industry
- Cross-reference the Volume Visualizer on the Products page
- Zagwyn's commitment to honest measurement

#### Layout Notes
- Each article gets its own subpage (/learn/kiln-dried-vs-seasoned, etc.)
- The /learn index page shows article cards with a title, one-sentence summary, and a thumbnail
- Articles should be 600-1000 words each, written for a general homeowner audience
- Include relevant internal links (e.g., "See our kiln-dried product" linking to /products)

---

### Page 6: Contact / Order

**URL:** /contact

**Purpose:** Capture orders and inquiries. Provide multiple contact pathways for different customer types.

#### Section 1 — Phone CTA (Primary)
- Large, prominent display of both phone numbers
- "Call Alex or David to place your order or ask questions."
- Click-to-call on mobile

#### Section 2 — Order / Inquiry Form
- Fields:
  - Name (required)
  - Phone number (required)
  - Email (required)
  - Town / Zip code (required)
  - Product interest: dropdown (Kiln-Dried / Seasoned / Green / Not Sure)
  - Volume: dropdown (1/2 Cord / 1 Cord / 2 Cords / 3 Cords / 4+ Cords / Custom/Wholesale)
  - Preferred delivery window: text field or date picker
  - Additional notes: textarea (for stacking requests, access instructions, commercial inquiries, custom cuts)
- Submit button: "Send My Order Request"
- Confirmation message: "We'll get back to you within one business day."

#### Section 3 — Business Hours & Location
- Operating hours (confirm with client)
- "Located on Great Road, Shirley, MA" with a small embedded map pin
- Note: "Yard visits by appointment"

---

### Page 7: Gallery (Optional but Recommended)

**URL:** /gallery

**Purpose:** Visual proof of operations. Equipment in action. Finished product. Deliveries.

- Grid layout of photos organized loosely by category:
  - The yard and equipment (processor, kilns, skid steers, trucks)
  - Split wood (kiln-dried, seasoned, green — labeled)
  - Deliveries in progress
  - Customer firewood setups (with permission)
- If video content is available, include 2-3 embedded clips (YouTube or self-hosted)
- No lightbox effects needed. Simple grid with click-to-enlarge.

---

## SEO Requirements

### On-Page
- Unique title tags and meta descriptions for every page
- H1 tag on each page reflecting primary keyword target
- Alt text on all images describing content (e.g., "kiln-dried oak firewood stacked on pallet" not "image1")
- Internal linking between related pages (Products → Delivery Area, Knowledge Base → Products)
- Semantic HTML (proper heading hierarchy, `<article>`, `<section>`, `<nav>`)

### Technical
- JSON-LD LocalBusiness schema on every page, including:
  - Business name, address (Shirley, MA), phone numbers
  - Business category: "Firewood Supplier"
  - Service area (list of towns)
  - Operating hours
  - Accepted payment methods
- Open Graph and Twitter Card meta tags for social sharing
- XML sitemap
- robots.txt
- Fast page load: compress images (WebP where supported), lazy-load below-fold images, minimize JS

### Local SEO
- Consistent NAP (Name, Address, Phone) across the site matching the Google Business Profile
- Town names repeated naturally in body copy, footer, delivery page
- Encourage the client to update their Google Business Profile with:
  - Primary category: "Firewood Supplier"
  - High-res photos of equipment, product, and deliveries
  - Regular review solicitation after deliveries

---

## Content the Client Needs to Provide

Before development starts, Zagwyn should supply:
1. **Logo file** (vector preferred, SVG or AI format; PNG as fallback)
2. **Operational photos** — processor in action, kiln exterior and interior, skid steer loading, dump trucks loaded and during delivery, yard shots, stacked finished product. Minimum 15-20 photos. Phone photos are fine if well-lit.
3. **Video clips** (optional but high-impact) — 10-30 second clips of the processing workflow, kiln venting steam, truck dumping a load
4. **Current pricing** for all three product tiers across all volume options
5. **Delivery fee structure** — flat rate? Per-zone? Per-mile? Need specifics.
6. **Business hours and seasonal availability**
7. **Stacking service details** — offered? Pricing?
8. **Wholesale / commercial inquiry process** — how should restaurant or bulk buyers reach out?
9. **Customer testimonials** — pull from Google reviews with permission, or collect 3-5 written quotes with first name and town
10. **Any existing brand assets** — business cards, truck decals, print ads that show current logo/brand usage

---

## Development Phases (Suggested)

**Phase 1 — Core Site**
Build pages 1-6 (Home through Contact). Static content, responsive layout, all SEO markup, forms functional. This gets the business online and indexable.

**Phase 2 — Content & Media**
Integrate real photos/video from the client. Write and publish Knowledge Base articles. Fine-tune copy with real pricing numbers.

**Phase 3 — Enhancements**
Add the zip code delivery checker (JS lookup table). Add the gallery page. Integrate Google Analytics and Search Console. Submit sitemap. Optimize Google Business Profile.

**Phase 4 — Future (Out of Scope for Initial Build)**
- E-commerce cart with payment processing (Stripe or Square)
- Automated delivery fee calculation by zip code
- Seasonal pre-order system with email capture
- Bundle/wholesale ordering portal
