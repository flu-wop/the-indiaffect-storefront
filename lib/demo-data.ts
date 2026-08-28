// Real product content pulled from India Renee's live store
// (theindiaffectstore.myshopify.com) for the enhanced demo build.
// Swap DEMO_PRODUCTS for a live getProducts() call once the
// Storefront API token is connected — see lib/shopify.ts.

export const DEMO_PRODUCTS = [
  {
    id: 'virgin-hair-bundles',
    title: 'Virgin Hair Bundles',
    description: '100% virgin, unprocessed hair — soft, thick, and tangle-free. Currently sold out; restock notifications open.',
    handle: 'virgin-hair-bundles',
    priceRange: {
      minVariantPrice: { amount: '35.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://theindiaffectstore.myshopify.com/cdn/shop/files/2E0E1E4F-F8F7-421C-BB06-4B5E040A1BCC.png?v=1784507503&width=1254',
      altText: 'Virgin Hair Bundles',
      width: 1254,
      height: 1568,
    },
    // Actually sold out on the live store. Demo keeps that true-to-life but
    // replaces the dead end with a "Notify Me" CTA and pulls it out of the
    // hero slot so a sold-out item isn't the first thing visitors see.
    available: false,
  },
  {
    id: 'mini-shorts',
    title: 'The IndiAffect Mini Shorts',
    description: 'High-waist mini shorts in a soft, stretch fabric — everyday wear with a laid-back fit.',
    handle: 'the-indiaffect-high-waist-shorts',
    priceRange: {
      minVariantPrice: { amount: '25.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://theindiaffectstore.myshopify.com/cdn/shop/files/16859449755865695459_2048.jpg?v=1786064484&width=1000',
      altText: 'The IndiAffect Mini Shorts',
      width: 1000,
      height: 1250,
    },
    available: true,
  },
  {
    id: 'mini-top',
    title: 'The IndiAffect Mini Top',
    description: 'Matching mini top designed to pair with the shorts set or wear on its own.',
    handle: 'the-indiaffect-mini-top',
    priceRange: {
      minVariantPrice: { amount: '25.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://theindiaffectstore.myshopify.com/cdn/shop/files/1652858097662334095_2048.jpg?v=1786064547&width=1000',
      altText: 'The IndiAffect Mini Top',
      width: 1000,
      height: 1250,
    },
    available: true,
  },
  {
    id: 'cropped-tee',
    title: '"I Have An Affect On People" Cropped Tee',
    description: "Casual cropped tee with the signature pink 'I Have That Affect On People' script.",
    handle: 'crop-tee-i-have-that-affect-on-people-pink-text-casual-cropped-t-shirt',
    priceRange: {
      minVariantPrice: { amount: '26.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://theindiaffectstore.myshopify.com/cdn/shop/files/4446007677454256255_2048.jpg?v=1786187659&width=1000',
      altText: '"I Have An Affect On People" Cropped Tee',
      width: 1000,
      height: 1250,
    },
    available: true,
  },
  {
    id: 'cosmetic-bag',
    title: 'The IndiAffect Cosmetic Bag',
    description: 'Travel-ready cosmetic pouch with a flat bottom for easy organizing on the go.',
    handle: 'accessory-pouch-the-indiaffect-cosmetic-travel-t-bottom-organizer',
    priceRange: {
      minVariantPrice: { amount: '28.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://theindiaffectstore.myshopify.com/cdn/shop/files/2106415847821853261_2048.jpg?v=1786064220&width=1000',
      altText: 'The IndiAffect Cosmetic Bag',
      width: 1000,
      height: 1250,
    },
    available: true,
  },
  {
    id: 'throw-pillow',
    title: '"I Have An Affect On People" Statement Throw Pillow',
    description: "Statement throw pillow featuring the brand's signature phrase — a soft home accent.",
    handle: 'i-have-that-affect-on-people-statement-throw-pillow',
    priceRange: {
      minVariantPrice: { amount: '29.99', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://theindiaffectstore.myshopify.com/cdn/shop/files/4852794823316943492_2048.jpg?v=1786180547&width=1000',
      altText: '"I Have An Affect On People" Statement Throw Pillow',
      width: 1000,
      height: 1250,
    },
    available: true,
  },
  {
    id: 'leggings',
    title: 'The IndiAffect High-Waist Leggings',
    description: 'High-waist leggings built for everyday comfort with a flattering, supportive fit.',
    handle: 'the-indiaffect-high-waist-leggings',
    priceRange: {
      minVariantPrice: { amount: '40.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://theindiaffectstore.myshopify.com/cdn/shop/files/9714079243322202976_2048.jpg?v=1786064216&width=1000',
      altText: 'The IndiAffect High-Waist Leggings',
      width: 1000,
      height: 1250,
    },
    available: true,
  },
  {
    id: 'sweatshirt',
    title: '"I Have An Affect On People" Sweatshirt',
    description: "Cozy crewneck sweatshirt with sleeve detailing and the brand's signature phrase.",
    handle: 'crewneck-sweatshirt-i-have-an-affect-on-people-pink-text-sleeve-design',
    priceRange: {
      minVariantPrice: { amount: '55.00', currencyCode: 'USD' },
    },
    featuredImage: {
      url: 'https://theindiaffectstore.myshopify.com/cdn/shop/files/9498466125777766965_2048.jpg?v=1786188294&width=1000',
      altText: '"I Have An Affect On People" Sweatshirt',
      width: 1000,
      height: 1250,
    },
    available: true,
  },
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/theindiaffect',
  instagram: 'https://www.instagram.com/theindiaffect',
  // NOTE: on the live store these two both incorrectly point to Instagram —
  // point them to India's real handles once confirmed.
  tiktok: 'https://www.tiktok.com/@theindiaffect',
  youtube: 'https://www.youtube.com/@theindiaffect',
};

export const FOUNDER = {
  name: 'India Renee',
  image:
    'https://theindiaffectstore.myshopify.com/cdn/shop/files/IMG_0282.jpg?v=1786158657&width=1000',
  quote:
    'Hey luv! Welcome to my store! This brand was designed to inspire women to embrace their true selves, unapologetically.',
  tagline: '"I Have That Affect on People" signifies how you make a difference to others.',
  challenge: 'CREATE, INFLUENCE, and EVOLVE',
  signature: '- xo, Indii',
};

export const LOGO_IMAGE =
  'https://theindiaffectstore.myshopify.com/cdn/shop/files/B510A06C-5D18-4C82-AD4C-12C98EE56F71.png?v=1783822384&width=600';

export const HERO_IMAGES = {
  // Real hero photo — "EXCUSE ME / I HAVE AN AFFECT ON PEOPLE" text is
  // already baked into this image on the live site, not overlaid by the theme.
  primary:
    'https://theindiaffectstore.myshopify.com/cdn/shop/files/theindiaffect_theindiaffectstore.png?v=1786157951&width=1366',
  secondary:
    'https://theindiaffectstore.myshopify.com/cdn/shop/files/theindiaffect_theindiaffectstore_2.png?v=1786161987&width=2000',
};
