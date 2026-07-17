# Quoltix Finds — Fashion

Same architecture and design system as the Quoltix Finds Collectibles SPA —
only the data and copy changed to match your real fashion catalog. See that
project's README for the full architecture walkthrough; this file only
covers what's specific to this variant.

## What's different from the Collectibles build

- **Product & category photography is shown in full color** with
  `object-fit: contain` (never cropped) — only the interface chrome stays
  grayscale. Category card/header images are pulled automatically from the
  newest real product photo in that category via `DataStore.getCategoryImage`,
  not a separate stock image.
- **Categories** (`js/data/categories.js`) — 8 categories derived from your
  original `product.js` catalog's `category` field:
  Dresses, Shirts, T-Shirts, Cargo & Joggers, Kurtas, Sweatshirts,
  Couple Wear, Outfits.
- **Products** (`js/data/products.js`) — your real 39 products, each mapped
  to one of the categories above, with the original SKUs, image paths, and
  affiliate links preserved exactly. A `gender` field (`male` / `female` /
  `unisex`) was also kept from your original data — it isn't used by any UI
  yet, but it's there if you want to add a gender filter later (the
  category page's search bar would be the natural place to wire it in).
- **`addedAt` dates are reconstructed**, not real. Your original catalog
  didn't track when a product was added, so dates were spaced out
  chronologically by the original product `id` (highest id = most recent).
  This only affects sort order and which items show up in "Trending" — swap
  in real dates whenever you have them and everything else adjusts itself.
- **`js/data/siteConfig.js`** is new — holds brand copy and your real
  social links (Instagram / Facebook / YouTube), which the Footer now reads
  instead of having them hardcoded.
- **Homepage About section** now uses your actual "Our Story" messaging and
  the four feature cards from your original `about.html` (Curated Picks,
  Trending Styles, Easy Discovery, Style Inspiration).

## Image assets

Your products reference local paths like `Media/Products/QF-FS-1.jpeg` and
the favicon references `Media/Logo.png` — exactly as in your original site.
**Copy your existing `Media/` folder into this project's root** (next to
`index.html`) and every image will resolve correctly; nothing else needs to
change.

## Adding a new category or product

Same as the Collectibles build:
1. New category → add one object to `js/data/categories.js`.
2. New product → add one object to `js/data/products.js` with a
   `categorySlug` matching an existing (or new) category.

Nothing else — nav dropdown, homepage cards, footer, and the category page
all pick it up automatically.
