/**
 * SITE CONFIG
 * -----------
 * Brand-level, non-product data: taglines, social links, contact info.
 * Kept separate from categories/products so swapping branding or socials
 * never means touching component code.
 */
window.APP_DATA = window.APP_DATA || {};

window.APP_DATA.site = {
  name: 'Quoltix Finds - Fashion',
  shortDescription:
    'Quoltix Finds - Fashion is a curated discovery platform for fashion — browse by category and get pointed straight to the source.',
  social: [
    { label: 'Instagram', url: 'https://www.instagram.com/quoltixfinds_fashion/' },
    { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61567996435710' },
    { label: 'YouTube', url: 'https://www.youtube.com/@QuoltixFinds_Fashion' }
  ]
};
