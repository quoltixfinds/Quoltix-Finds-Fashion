/**
 * CATEGORIES DATA SOURCE
 * ----------------------
 * This is the ONLY place a new category needs to be registered.
 * Everything else — homepage cards, the Products nav dropdown, category
 * routes, and category pages — is generated dynamically from this array.
 *
 * To add a category in the future:
 *   1. Add an object below with a unique `slug`.
 *   2. Add products in js/data/products.js that reference that `slug`
 *      as their `categorySlug`.
 * No other file needs to change.
 *
 * Shape:
 * {
 *   slug: string            // unique, URL-safe, used for routing
 *   name: string            // display name
 *   tagline: string         // short one-liner for category card
 *   description: string     // longer description for category header
 *   image: string           // FALLBACK ONLY — used if the category has no
 *                           // products yet. Once it has products, the card
 *                           // and header automatically use a real product's
 *                           // photo instead (see DataStore.getCategoryImage).
 * }
 */

window.APP_DATA = window.APP_DATA || {};

window.APP_DATA.categories = [
  {
    slug: 'men',
    name: 'Men',
    tagline: 'Everyday essentials with timeless style.',
    description:
      'Shirts, T-shirts, cargo joggers, kurtas and complete outfits curated for every occasion—from casual days to festive celebrations.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'women',
    name: 'Women',
    tagline: 'Elegant pieces made for every moment.',
    description:
      'Discover dresses, kurtas and stylish everyday looks that blend comfort with effortless fashion.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'outfits',
    name: 'Outfits',
    tagline: 'Complete looks, already styled.',
    description:
      'Co-ord sets and complete outfits for men and women, carefully put together so you can wear them with confidence.',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'couple-wear',
    name: 'Couple Wear',
    tagline: 'Matching styles made for two.',
    description:
      'Coordinated outfits for couples—from festive celebrations to everyday moments, designed to complement each other effortlessly.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop'
  }
];
