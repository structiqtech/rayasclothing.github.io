import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://rayasclothing.com';
const defaultImage = `${siteUrl}/images/rayas-wholesale-hero.png`;
const keywords = [
  'wholesale clothing supplier',
  'wholesale apparel',
  'blank t-shirts wholesale',
  'wholesale hoodies',
  'apparel supplier for print shops',
  'clothing distributor Maryland',
  'bulk apparel supplier',
].join(', ');

const pageMeta = {
  '/': {
    title: 'Rayas Clothing | Wholesale Apparel Supplier in Maryland',
    description:
      'Rayas Clothing is a wholesale clothing supplier in Laurel, Maryland offering blank t-shirts, hoodies, joggers, workwear, streetwear, and bulk apparel for business buyers.',
  },
  '/products': {
    title: 'Product Catalog | Wholesale Apparel & Blank Clothing | RAYAS',
    description:
      'Browse the RAYAS public wholesale apparel catalog for blank t-shirts, wholesale hoodies, joggers, workwear, activewear, kids apparel, and more.',
  },
  '/wholesale': {
    title: 'Wholesale Program | Bulk Apparel Supplier | Rayas Clothing',
    description:
      'Learn how RAYAS supports business buyers with competitive bulk pricing, wholesale catalog access, premium blank apparel, and reliable order support.',
  },
  '/about': {
    title: 'About Rayas Clothing | Clothing Distributor in Maryland',
    description:
      'Rayas Clothing is a Laurel, Maryland wholesale apparel company serving print shops, e-commerce sellers, distributors, and growing retail brands.',
  },
  '/faq': {
    title: 'FAQ | Wholesale Apparel Questions | Rayas Clothing',
    description:
      'Answers to common Rayas Clothing questions about wholesale pricing, MOQ, blank apparel, catalog access, distributors, and product expansion.',
  },
  '/contact': {
    title: 'Contact Rayas Clothing | Wholesale Apparel Inquiries',
    description:
      'Contact Rayas Clothing for wholesale apparel questions, catalog access, distributor inquiries, and product support.',
  },
  '/request-pricing': {
    title: 'Request Pricing | Wholesale Apparel & Bulk Clothing | RAYAS',
    description:
      'Request wholesale pricing from Rayas Clothing for blank t-shirts, hoodies, workwear, activewear, streetwear, and bulk apparel orders.',
  },
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export default function SEO() {
  const { pathname } = useLocation();
  const meta = pageMeta[pathname] || pageMeta['/'];
  const canonical = `${siteUrl}${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    document.title = meta.title;
    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: defaultImage });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: defaultImage });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });
  }, [canonical, meta.description, meta.title]);

  return null;
}
