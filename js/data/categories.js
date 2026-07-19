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
    slug: 'dresses',
    name: 'Dresses',
    tagline: 'Midis, maxis, and everything in between.',
    description:
      'Florals, stripes, denim and bodycon silhouettes — dresses picked for how they actually look worn, not just laid flat.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'shirts',
    name: 'Shirts',
    tagline: 'Checks, stripes, and clean solids that work anywhere.',
    description:
      'Casual and formal shirting in colors and textures that layer easily — built for the wardrobe you actually reach for.',
    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 't-shirts',
    name: 'T-Shirts',
    tagline: 'Polos, graphics, and everyday staples.',
    description:
      "From clean polos to graphic streetwear tees — the pieces that carry an outfit when you're not trying too hard.",
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'cargo-joggers',
    name: 'Cargo & Joggers',
    tagline: 'Utility silhouettes built for movement.',
    description:
      'Relaxed-fit cargos and joggers with the pocket detail and drape that street style actually runs on.',
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'kurtas',
    name: 'Kurtas',
    tagline: 'Everyday ethnic wear, done cleanly.',
    description:
      "Embroidered sets and simple solids for festive days and regular ones alike — ethnic wear that doesn't try too hard.",
    image: 'https://images.unsplash.com/photo-1610189844772-b6b0b9a1c7c5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'sweatshirts',
    name: 'Sweatshirts',
    tagline: 'Cozy layers for slower days.',
    description:
      "Easy, oversized comfort pieces — the ones you steal from the closet before anyone notices they're gone.",
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'couple-wear',
    name: 'Couple Wear',
    tagline: 'Coordinated looks for two.',
    description:
      'Matching and complementary sets for weddings, festivals, and everyday pairing — made to photograph as well as they wear.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'outfits',
    name: 'Outfits',
    tagline: 'Full looks, already put together.',
    description:
      'Co-ord sets and complete outfits spanning casual and formal — for when you want the styling decision already made.',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1200&auto=format&fit=crop'
  }
];
