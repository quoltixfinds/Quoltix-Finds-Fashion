/**
 * PRODUCTS DATA SOURCE
 * --------------------
 * Every product on the site lives here. Nothing about products is
 * hardcoded into HTML — cards, grids, search, trending and sorting are
 * all derived from this array at runtime.
 *
 * Shape:
 * {
 *   id: string              // unique product id
 *   categorySlug: string    // must match a categories.js `slug`
 *   name: string            // product name
 *   sku: string             // stock keeping unit / catalog code
 *   image: string           // product image path (see Media/Products/…)
 *   gender: string          // 'male' | 'female' | 'unisex' — kept from the
 *                           // original catalog; not used by the UI yet, but
 *                           // available if a gender filter is added later
 *   affiliateLink: string   // destination the redirect page sends users to
 *   addedAt: string         // ISO date — drives "newest first" & trending
 * }
 *
 * NOTE ON DATES: addedAt values below were reconstructed (spaced roughly
 * evenly, newest = highest original id) since the source catalog didn't
 * track add dates. Swap in real dates whenever you have them — nothing
 * else needs to change, sorting/trending just reads this field.
 *
 * Scaling to hundreds/thousands of products only means appending more
 * objects here (or swapping this static array for a fetch() call to an
 * API later — the rest of the app already treats data as async-ready
 * via getProducts()).
 */

window.APP_DATA = window.APP_DATA || {};
window.APP_DATA.products = [
  {
    id: 'qf-1',
    categorySlug: 'women',
    name: "Floral Midi Dress",
    sku: 'QF-FS-1',
    image: 'Media/Products/QF-FS-1.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3086453?p_id=669339639&ext_id=b2i9rr&utm_source=instagram_stories',
    addedAt: '2026-03-28'
  },
  {
    id: 'qf-2',
    categorySlug: 'women',
    name: "Striped Maxi Dress",
    sku: 'QF-FS-2',
    image: 'Media/Products/QF-FS-2.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3086484?p_id=591020413&ext_id=9rvm9p&utm_source=instagram_stories',
    addedAt: '2026-03-31'
  },
  {
    id: 'qf-3',
    categorySlug: 'women',
    name: "Yellow Midi Dress",
    sku: 'QF-FS-3',
    image: 'Media/Products/QF-FS-3.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3086511?p_id=636640326&ext_id=aj1eti&utm_source=instagram_stories',
    addedAt: '2026-04-03'
  },
  {
    id: 'qf-4',
    categorySlug: 'women',
    name: "Bodycon Midi Dress",
    sku: 'QF-FS-4',
    image: 'Media/Products/QF-FS-4.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3311671?p_id=531357483&ext_id=8scu23&utm_source=instagram_stories',
    addedAt: '2026-04-05'
  },
  {
    id: 'qf-5',
    categorySlug: 'women',
    name: "Striped Maxi Dress",
    sku: 'QF-FS-5',
    image: 'Media/Products/QF-FS-5.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3376017?p_id=600644779&ext_id=9xlwh7&utm_source=instagram_stories',
    addedAt: '2026-04-08'
  },
  {
    id: 'qf-6',
    categorySlug: 'women',
    name: "Denim A-Line Dress",
    sku: 'QF-FS-6',
    image: 'Media/Products/QF-FS-6.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3392971?p_id=497633728&ext_id=88a0n4&utm_source=instagram_stories',
    addedAt: '2026-04-11'
  },
  {
    id: 'qf-7',
    categorySlug: 'couple-wear',
    name: "Traditional Wedding Outfit",
    sku: 'QF-FS-7',
    image: 'Media/Products/QF-FS-7.jpeg',
    gender: 'unisex',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3547081?p_id=438736743&ext_id=797nfr&utm_source=instagram_stories',
    addedAt: '2026-04-14'
  },
  {
    id: 'qf-8',
    categorySlug: 'couple-wear',
    name: "Ethnic Couple Outfit",
    sku: 'QF-FS-8',
    image: 'Media/Products/QF-FS-8.jpeg',
    gender: 'unisex',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3621734?p_id=340819245&ext_id=5mwxt9&utm_source=instagram_stories',
    addedAt: '2026-04-17'
  },
  {
    id: 'qf-9',
    categorySlug: 'couple-wear',
    name: "Casual Couple Sweatshirt",
    sku: 'QF-FS-9',
    image: 'Media/Products/QF-FS-9.jpeg',
    gender: 'unisex',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3621887?p_id=520510821&ext_id=8lwcpx&utm_source=instagram_stories',
    addedAt: '2026-04-20'
  },
  {
    id: 'qf-10',
    categorySlug: 'men',
    name: "Blue Formal Outfit",
    sku: 'QF-FS-10',
    image: 'Media/Products/QF-FS-10.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/s/p/a39bi2?product_id=610135418&af_force_deeplink=true&host_internal=single_product&pid=meesho_affiliate_portal&is_retargeting=true&af_click_lookback=7d&product_name=product&utm_source=instagram_stories&external_product_id=a39bi2&af_reengagement_window=14d&c=216131561:instagram_stories:3732315',
    addedAt: '2026-04-22'
  },
  {
    id: 'qf-11',
    categorySlug: 'men',
    name: "Grey Cargo Joggers",
    sku: 'QF-FS-11',
    image: 'Media/Products/QF-FS-11.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/s/p/7zbh7d?product_id=482585305&af_force_deeplink=true&host_internal=single_product&pid=meesho_affiliate_portal&is_retargeting=true&af_click_lookback=7d&product_name=product&utm_source=instagram_stories&external_product_id=7zbh7d&af_reengagement_window=14d&c=216131561:instagram_stories:3732333',
    addedAt: '2026-04-25'
  },
  {
    id: 'qf-12',
    categorySlug: 'men',
    name: "White Casual Kurta",
    sku: 'QF-FS-12',
    image: 'Media/Products/QF-FS-12.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3788930?p_id=100479226&ext_id=1ntm9m&utm_source=instagram_stories',
    addedAt: '2026-04-28'
  },
  {
    id: 'qf-13',
    categorySlug: 'men',
    name: "Checked Casual Shirt",
    sku: 'QF-FS-13',
    image: 'Media/Products/QF-FS-13.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3859909?p_id=415447193&ext_id=6vch3t&utm_source=instagram_stories',
    addedAt: '2026-05-01'
  },
  {
    id: 'qf-14',
    categorySlug: 'men',
    name: "Checked Red Shirt",
    sku: 'QF-FS-14',
    image: 'Media/Products/QF-FS-14.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3860000?p_id=389211047&ext_id=6fq55z&utm_source=instagram_stories',
    addedAt: '2026-05-04'
  },
  {
    id: 'qf-15',
    categorySlug: 'men',
    name: "Printed Casual Shirt",
    sku: 'QF-FS-15',
    image: 'Media/Products/QF-FS-15.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3860032?p_id=577761354&ext_id=9jzfii&utm_source=instagram_stories',
    addedAt: '2026-05-07'
  },
  {
    id: 'qf-16',
    categorySlug: 'men',
    name: "Grey Polo T-Shirt",
    sku: 'QF-FS-16',
    image: 'Media/Products/QF-FS-16.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3993286?p_id=334160288&ext_id=5iy7q8&utm_source=instagram_stories',
    addedAt: '2026-05-09'
  },
  {
    id: 'qf-17',
    categorySlug: 'men',
    name: "Striped Polo T-Shirt",
    sku: 'QF-FS-17',
    image: 'Media/Products/QF-FS-17.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3993360?p_id=492226147&ext_id=85244j&utm_source=instagram_stories',
    addedAt: '2026-05-12'
  },
  {
    id: 'qf-18',
    categorySlug: 'men',
    name: "One Piece Graphic T-Shirt",
    sku: 'QF-FS-18',
    image: 'Media/Products/QF-FS-18.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:3993793?p_id=496764429&ext_id=87rdvx&utm_source=instagram_stories',
    addedAt: '2026-05-15'
  },
  {
    id: 'qf-19',
    categorySlug: 'women',
    name: "Teal Embroidered Kurta Set",
    sku: 'QF-FS-19',
    image: 'Media/Products/QF-FS-19.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:4023374?p_id=521974073&ext_id=8mrprt&utm_source=instagram_stories',
    addedAt: '2026-05-18'
  },
  {
    id: 'qf-20',
    categorySlug: 'women',
    name: "Olive Floral Kurta Set",
    sku: 'QF-FS-20',
    image: 'Media/Products/QF-FS-20.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:4023398?p_id=668304691&ext_id=b1w377&utm_source=instagram_stories',
    addedAt: '2026-05-21'
  },
  {
    id: 'qf-21',
    categorySlug: 'women',
    name: "Mustard Floral Kurta Set",
    sku: 'QF-FS-21',
    image: 'Media/Products/QF-FS-21.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:4023466?p_id=521096590&ext_id=8m8wpa&utm_source=instagram_stories',
    addedAt: '2026-05-24'
  },
  {
    id: 'qf-22',
    categorySlug: 'couple-wear',
    name: "Sunshine Couple Wear",
    sku: 'QF-FS-22',
    image: 'Media/Products/QF-FS-22.jpeg',
    gender: 'unisex',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:4023515?p_id=583216449&ext_id=9n8cox&utm_source=instagram_stories',
    addedAt: '2026-05-26'
  },
  {
    id: 'qf-23',
    categorySlug: 'couple-wear',
    name: "Royal Festive Couple Wear",
    sku: 'QF-FS-23',
    image: 'Media/Products/QF-FS-23.jpeg',
    gender: 'unisex',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:4023537?p_id=578820527&ext_id=9km4rz&utm_source=instagram_stories',
    addedAt: '2026-05-29'
  },
  {
    id: 'qf-24',
    categorySlug: 'couple-wear',
    name: "Golden Heritage Couple Wear",
    sku: 'QF-FS-24',
    image: 'Media/Products/QF-FS-24.jpeg',
    gender: 'unisex',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:4023549?p_id=639986353&ext_id=al14mp&utm_source=instagram_stories',
    addedAt: '2026-06-01'
  },
  {
    id: 'qf-25',
    categorySlug: 'outfits',
    name: "Mocha Everyday Outfit",
    sku: 'QF-FS-25',
    image: 'Media/Products/QF-FS-25.jpeg',
    gender: 'female',
    affiliateLink: 'https://affiliate.meesho.com/collection/NDQ1MDY3OTo6Ojo6Om5vcm1hbA==',
    addedAt: '2026-06-04'
  },
  {
    id: 'qf-26',
    categorySlug: 'outfits',
    name: "Polka Chic Outfit",
    sku: 'QF-FS-26',
    image: 'Media/Products/QF-FS-26.jpeg',
    gender: 'female',
    affiliateLink: 'https://affiliate.meesho.com/collection/NTQwODY1ODo6Ojo6Om5vcm1hbA==',
    addedAt: '2026-06-07'
  },
  {
    id: 'qf-27',
    categorySlug: 'outfits',
    name: "Monochrome Chic Outfit",
    sku: 'QF-FS-27',
    image: 'Media/Products/QF-FS-27.jpeg',
    gender: 'female',
    affiliateLink: 'https://affiliate.meesho.com/collection/NTQwODg3ODo6Ojo6Om5vcm1hbA==',
    addedAt: '2026-06-10'
  },
  {
    id: 'qf-28',
    categorySlug: 'outfits',
    name: "Charcoal Formal Outfit",
    sku: 'QF-FS-28',
    image: 'Media/Products/QF-FS-28.jpeg',
    gender: 'male',
    affiliateLink: 'https://affiliate.meesho.com/collection/NTQwOTIwMTo6Ojo6Om5vcm1hbA==',
    addedAt: '2026-06-12'
  },
  {
    id: 'qf-29',
    categorySlug: 'outfits',
    name: "Black & White Formal Outfit",
    sku: 'QF-FS-29',
    image: 'Media/Products/QF-FS-29.jpeg',
    gender: 'male',
    affiliateLink: 'https://affiliate.meesho.com/collection/NTQwOTI3OTo6Ojo6Om5vcm1hbA==',
    addedAt: '2026-06-15'
  },
  {
    id: 'qf-30',
    categorySlug: 'outfits',
    name: "Classic Formal Outfit",
    sku: 'QF-FS-30',
    image: 'Media/Products/QF-FS-30.jpeg',
    gender: 'male',
    affiliateLink: 'https://affiliate.meesho.com/collection/NTQwOTM0MDo6Ojo6Om5vcm1hbA==',
    addedAt: '2026-06-18'
  },
  {
    id: 'qf-31',
    categorySlug: 'men',
    name: "Sage Leaf Shirt",
    sku: 'QF-FS-31',
    image: 'Media/Products/QF-FS-31.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:5409412?p_id=469130147&ext_id=7rb34z&utm_source=instagram_stories',
    addedAt: '2026-06-21'
  },
  {
    id: 'qf-32',
    categorySlug: 'men',
    name: "Typography Polo T-Shirt",
    sku: 'QF-FS-32',
    image: 'Media/Products/QF-FS-32.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:5449472?p_id=430702251&ext_id=74ffzf&utm_source=instagram_stories',
    addedAt: '2026-06-24'
  },
  {
    id: 'qf-33',
    categorySlug: 'men',
    name: "Sage Striped Shirt",
    sku: 'QF-FS-33',
    image: 'Media/Products/QF-FS-33.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:5785410?p_id=42720957&ext_id=pfnp9&utm_source=instagram_stories',
    addedAt: '2026-06-27'
  },
  {
    id: 'qf-34',
    categorySlug: 'outfits',
    name: "Mocha Abstract Co-ord Set",
    sku: 'QF-FS-34',
    image: 'Media/Products/QF-FS-34.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:5785475?p_id=675089704&ext_id=b5xijs&utm_source=instagram_stories',
    addedAt: '2026-06-29'
  },
  {
    id: 'qf-35',
    categorySlug: 'outfits',
    name: "Terracotta Printed Outfit",
    sku: 'QF-FS-35',
    image: 'Media/Products/QF-FS-35.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:5911828?p_id=521199301&ext_id=8mb3yd&utm_source=instagram_stories',
    addedAt: '2026-07-02'
  },
  {
    id: 'qf-36',
    categorySlug: 'outfits',
    name: "Espresso Minimal Outfit",
    sku: 'QF-FS-36',
    image: 'Media/Products/QF-FS-36.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:5911852?p_id=690010262&ext_id=betbbq&utm_source=instagram_stories',
    addedAt: '2026-07-05'
  },
  {
    id: 'qf-37',
    categorySlug: 'men',
    name: "Textured Coffee Shirt",
    sku: 'QF-FS-37',
    image: 'Media/Products/QF-FS-37.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:6082074?p_id=648727747&ext_id=aq8hj7&utm_source=instagram_stories',
    addedAt: '2026-07-08'
  },
  {
    id: 'qf-38',
    categorySlug: 'men',
    name: "Blush Mandarin Shirt",
    sku: 'QF-FS-38',
    image: 'Media/Products/QF-FS-38.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:6082121?p_id=417859731&ext_id=6ws6mr&utm_source=instagram_stories',
    addedAt: '2026-07-11'
  },
  {
    id: 'qf-39',
    categorySlug: 'men',
    name: "Beige Stripe Shirt",
    sku: 'QF-FS-39',
    image: 'Media/Products/QF-FS-39.jpeg',
    gender: 'male',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:6082138?p_id=475460931&ext_id=7v2s03&utm_source=instagram_stories',
    addedAt: '2026-07-14'
  },
  {
    id: 'qf-40',
    categorySlug: 'women',
    name: "Royal Maroon Kurta",
    sku: 'QF-FS-40',
    image: 'Media/Products/QF-FS-40.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:6631970?p_id=504377860&ext_id=8cakg4&utm_source=instagram_stories',
    addedAt: '2026-07-17'
  },
  {
    id: 'qf-41',
    categorySlug: 'women',
    name: "Floral Maxi Dress",
    sku: 'QF-FS-41',
    image: 'Media/Products/QF-FS-41.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:6632034?p_id=499566831&ext_id=89fg8f&utm_source=instagram_stories',
    addedAt: '2026-07-20'
  },
  {
    id: 'qf-42',
    categorySlug: 'women',
    name: "Sage Floral Dress",
    sku: 'QF-FS-42',
    image: 'Media/Products/QF-FS-42.jpeg',
    gender: 'female',
    affiliateLink: 'https://www.meesho.com/af_invite/216131561:instagram_stories:6632051?p_id=437714056&ext_id=78lqbs&utm_source=instagram_stories',
    addedAt: '2026-07-23'
  },
];
