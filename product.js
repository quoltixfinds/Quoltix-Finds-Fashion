// product.js
const products = [
  {
    id: 1,
    name: "Floral Midi Dress",
    image: "Media/Products/QF-FS-1.jpeg",
    category: "Dress",
    tag: "trending",
    sku: "QF-FS-1",
    gender: "female",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3086453?p_id=669339639&ext_id=b2i9rr&utm_source=instagram_stories"
  },

  {
    id: 2,
    name: "Striped Maxi Dress",
    image: "Media/Products/QF-FS-2.jpeg",
    category: "Dress",
    tag: "trending",
    sku: "QF-FS-2",
    gender: "female",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3086484?p_id=591020413&ext_id=9rvm9p&utm_source=instagram_stories"
  },

  {
    id: 3,
    name: "Yellow Midi Dress",
    image: "Media/Products/QF-FS-3.jpeg",
    category: "Dress",
    tag: "ethnic",
    sku: "QF-FS-3",
    gender: "female",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3086511?p_id=636640326&ext_id=aj1eti&utm_source=instagram_stories"
  },

  {
    id: 4,
    name: "Bodycon Midi Dress",
    image: "Media/Products/QF-FS-4.jpeg",
    category: "Dress",
    tag: "party",
    sku: "QF-FS-4",
    gender: "female",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3311671?p_id=531357483&ext_id=8scu23&utm_source=instagram_stories"
  },

  {
    id: 5,
    name: "Striped Maxi Dress",
    image: "Media/Products/QF-FS-5.jpeg",
    category: "Dress",
    tag: "casual",
    sku: "QF-FS-5",
    gender: "female",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3376017?p_id=600644779&ext_id=9xlwh7&utm_source=instagram_stories"
  },

  {
    id: 6,
    name: "Denim A-Line Dress",
    image: "Media/Products/QF-FS-6.jpeg",
    category: "Dress",
    tag: "casual",
    sku: "QF-FS-6",
    gender: "female",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3392971?p_id=497633728&ext_id=88a0n4&utm_source=instagram_stories"
  },

  {
    id: 7,
    name: "Traditional Wedding Outfit",
    image: "Media/Products/QF-FS-7.jpeg",
    category: "Couple Wear",
    tag: "wedding",
    sku: "QF-FS-7",
    gender: "unisex",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3547081?p_id=438736743&ext_id=797nfr&utm_source=instagram_stories"
  },

  {
    id: 8,
    name: "Ethnic Couple Outfit",
    image: "Media/Products/QF-FS-8.jpeg",
    category: "Couple Wear",
    tag: "ethnic",
    sku: "QF-FS-8",
    gender: "unisex",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3621734?p_id=340819245&ext_id=5mwxt9&utm_source=instagram_stories"
  },

  {
    id: 9,
    name: "Casual Couple Sweatshirt",
    image: "Media/Products/QF-FS-9.jpeg",
    category: "Sweatshirt",
    tag: "casual",
    sku: "QF-FS-9",
    gender: "unisex",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3621887?p_id=520510821&ext_id=8lwcpx&utm_source=instagram_stories"
  },

  {
    id: 10,
    name: "Blue Formal Outfit",
    image: "Media/Products/QF-FS-10.jpeg",
    category: "Shirt",
    tag: "formal",
    sku: "QF-FS-10",
    gender: "male",
    affiliateLink: "https://www.meesho.com/s/p/a39bi2?product_id=610135418&af_force_deeplink=true&host_internal=single_product&pid=meesho_affiliate_portal&is_retargeting=true&af_click_lookback=7d&product_name=product&utm_source=instagram_stories&external_product_id=a39bi2&af_reengagement_window=14d&c=216131561:instagram_stories:3732315"
  },

  {
    id: 11,
    name: "Grey Cargo Joggers",
    image: "Media/Products/QF-FS-11.jpeg",
    category: "Cargo",
    tag: "streetwear",
    sku: "QF-FS-11",
    gender: "male",
    affiliateLink: "https://www.meesho.com/s/p/7zbh7d?product_id=482585305&af_force_deeplink=true&host_internal=single_product&pid=meesho_affiliate_portal&is_retargeting=true&af_click_lookback=7d&product_name=product&utm_source=instagram_stories&external_product_id=7zbh7d&af_reengagement_window=14d&c=216131561:instagram_stories:3732333"
  },

  {
    id: 12,
    name: "White Casual Kurta",
    image: "Media/Products/QF-FS-12.jpeg",
    category: "Kurta",
    tag: "ethnic",
    sku: "QF-FS-12",
    gender: "male",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3788930?p_id=100479226&ext_id=1ntm9m&utm_source=instagram_stories"
  },

  {
    id: 13,
    name: "Checked Casual Shirt",
    image: "Media/Products/QF-FS-13.jpeg",
    category: "Shirt",
    tag: "trending",
    sku: "QF-FS-13",
    gender: "male",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3859909?p_id=415447193&ext_id=6vch3t&utm_source=instagram_stories"
  },

  {
    id: 14,
    name: "Checked Red Shirt",
    image: "Media/Products/QF-FS-14.jpeg",
    category: "Shirt",
    tag: "trending",
    sku: "QF-FS-14",
    gender: "male",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3860000?p_id=389211047&ext_id=6fq55z&utm_source=instagram_stories"
  },

  {
    id: 15,
    name: "Printed Casual Shirt",
    image: "Media/Products/QF-FS-15.jpeg",
    category: "Shirt",
    tag: "casual",
    sku: "QF-FS-15",
    gender: "male",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3860032?p_id=577761354&ext_id=9jzfii&utm_source=instagram_stories"
  },

  {
    id: 16,
    name: "Grey Polo T-Shirt",
    image: "Media/Products/QF-FS-16.jpeg",
    category: "T-Shirt",
    tag: "casual",
    sku: "QF-FS-16",
    gender: "male",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3993286?p_id=334160288&ext_id=5iy7q8&utm_source=instagram_stories"
  },

  {
    id: 17,
    name: "Striped Polo T-Shirt",
    image: "Media/Products/QF-FS-17.jpeg",
    category: "T-Shirt",
    tag: "casual",
    sku: "QF-FS-17",
    gender: "male",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3993360?p_id=492226147&ext_id=85244j&utm_source=instagram_stories"
  },

  {
    id: 18,
    name: "One Piece Graphic T-Shirt",
    image: "Media/Products/QF-FS-18.jpeg",
    category: "T-Shirt",
    tag: "streetwear",
    sku: "QF-FS-18",
    gender: "male",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:3993793?p_id=496764429&ext_id=87rdvx&utm_source=instagram_stories"
  },

  {
    id: 19,
    name: "Teal Embroidered Kurta Set",
    image: "Media/Products/QF-FS-19.jpeg",
    category: "Kurta",
    tag: "ethnic",
    sku: "QF-FS-19",
    gender: "female",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:4023374?p_id=521974073&ext_id=8mrprt&utm_source=instagram_stories"
  },

  {
    id: 20,
    name: "Olive Floral Kurta Set",
    image: "Media/Products/QF-FS-20.jpeg",
    category: "Kurta",
    tag: "ethnic",
    sku: "QF-FS-20",
    gender: "female",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:4023398?p_id=668304691&ext_id=b1w377&utm_source=instagram_stories"
  },

  {
    id: 21,
    name: "Mustard Floral Kurta Set",
    image: "Media/Products/QF-FS-21.jpeg",
    category: "Kurta",
    tag: "ethnic",
    sku: "QF-FS-21",
    gender: "female",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:4023466?p_id=521096590&ext_id=8m8wpa&utm_source=instagram_stories"
  },

  {
    id: 22,
    name: "Sunshine Couple Wear",
    image: "Media/Products/QF-FS-22.jpeg",
    category: "Couple Wear",
    tag: "festive",
    sku: "QF-FS-22",
    gender: "unisex",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:4023515?p_id=583216449&ext_id=9n8cox&utm_source=instagram_stories"
  },

  {
    id: 23,
    name: "Royal Festive Couple Wear",
    image: "Media/Products/QF-FS-23.jpeg",
    category: "Couple Wear",
    tag: "festive",
    sku: "QF-FS-23",
    gender: "unisex",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:4023537?p_id=578820527&ext_id=9km4rz&utm_source=instagram_stories"
  },

  {
    id: 24,
    name: "Golden Heritage Couple Wear",
    image: "Media/Products/QF-FS-24.jpeg",
    category: "Couple Wear",
    tag: "festive",
    sku: "QF-FS-24",
    gender: "unisex",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:4023549?p_id=639986353&ext_id=al14mp&utm_source=instagram_stories"
  },
  {
    id: 25,
    name: "Mocha Everyday Outfit",
    image: "Media/Products/QF-FS-25.jpeg",
    category: "Outfit",
    tag: "casual",
    sku: "QF-FS-25",
    gender: "female",
    affiliateLink: "https://affiliate.meesho.com/collection/NDQ1MDY3OTo6Ojo6Om5vcm1hbA=="
  },

  {
    id: 26,
    name: "Polka Chic Outfit",
    image: "Media/Products/QF-FS-26.jpeg",
    category: "Outfit",
    tag: "casual",
    sku: "QF-FS-26",
    gender: "female",
    affiliateLink: "https://affiliate.meesho.com/collection/NTQwODY1ODo6Ojo6Om5vcm1hbA=="
  },

  {
    id: 27,
    name: "Monochrome Chic Outfit",
    image: "Media/Products/QF-FS-27.jpeg",
    category: "Outfit",
    tag: "casual",
    sku: "QF-FS-27",
    gender: "female",
    affiliateLink: "https://affiliate.meesho.com/collection/NTQwODg3ODo6Ojo6Om5vcm1hbA=="
  },

  {
    id: 28,
    name: "Charcoal Formal Outfit",
    image: "Media/Products/QF-FS-28.jpeg",
    category: "Outfit",
    tag: "formal",
    sku: "QF-FS-28",
    gender: "male",
    affiliateLink: "https://affiliate.meesho.com/collection/NTQwOTIwMTo6Ojo6Om5vcm1hbA=="
  },

  {
    id: 29,
    name: "Black & White Formal Outfit",
    image: "Media/Products/QF-FS-29.jpeg",
    category: "Outfit",
    tag: "formal",
    sku: "QF-FS-29",
    gender: "male",
    affiliateLink: "https://affiliate.meesho.com/collection/NTQwOTI3OTo6Ojo6Om5vcm1hbA=="
  },

  {
    id: 30,
    name: "Classic Formal Outfit",
    image: "Media/Products/QF-FS-30.jpeg",
    category: "Outfit",
    tag: "formal",
    sku: "QF-FS-30",
    gender: "male",
    affiliateLink: "https://affiliate.meesho.com/collection/NTQwOTM0MDo6Ojo6Om5vcm1hbA=="
  },

  {
    id: 31,
    name: "Sage Leaf Shirt",
    image: "Media/Products/QF-FS-31.jpeg",
    category: "Shirt",
    tag: "casual",
    sku: "QF-FS-31",
    gender: "male",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:5409412?p_id=469130147&ext_id=7rb34z&utm_source=instagram_stories"
  },

  {
    id: 32,
    name: "Typography Polo T-Shirt",
    image: "Media/Products/QF-FS-32.jpeg",
    category: "T-Shirt",
    tag: "casual",
    sku: "QF-FS-32",
    gender: "male",
    affiliateLink: "https://www.meesho.com/af_invite/216131561:instagram_stories:5449472?p_id=430702251&ext_id=74ffzf&utm_source=instagram_stories"
  },

];
