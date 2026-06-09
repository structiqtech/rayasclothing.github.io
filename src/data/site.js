import {
  BadgeCheck,
  Boxes,
  Building2,
  Clock3,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Shirt,
  Sparkles,
  Truck,
  Users,
} from 'lucide-react';

export const company = {
  name: 'Rayas Clothing',
  email: 'sales@rayasclothing.com',
  phone: '720-608-9945',
  location: 'Laurel, MD',
  footerName: 'Rayas Clothing LLC'
};

export const navItems = [
  { label: 'Products', href: '/products' },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const audiences = ['Custom t-shirt print shops', 'E-commerce sellers', 'Regional distributors'];

export const productCategories = [
  'T-Shirts',
  'Hoodies',
  'Workwear',
  'Joggers',
  "Men's Apparel",
  "Women's Apparel",
  'Kids Apparel',
  'Activewear',
  'Streetwear',
  'Basics & Blanks',
];

export const featuredProducts = [
  {
    title: 'Premium Blanks',
    description: 'Reliable t-shirts, fleece, and basics ready for screen print, DTF, embroidery, and private-label programs.',
    icon: Shirt,
  },
  {
    title: 'Streetwear & Fleece',
    description: 'Hoodies, joggers, and modern silhouettes selected for fashion-forward wholesale buyers.',
    icon: Sparkles,
  },
  {
    title: 'Workwear & Active',
    description: 'Durable daily-use apparel for teams, events, uniforms, gyms, and retail bundles.',
    icon: BadgeCheck,
  },
];

export const catalogProducts = [
  {
    name: 'Premium Blank T-Shirt',
    title: 'Premium Blank T-Shirt',
    category: 'T-Shirts / Basics',
    image: 'images/tshirt-blanks.png',
    description: 'A versatile premium blank tee for print shops, branded merchandise, retail programs, and everyday replenishment.',
    material: 'Cotton blend',
    sizes: 'S-5XL',
    colors: ['Black', 'White', 'Heather Gray', 'Navy'],
    moq: '50 units',
    icon: Shirt,
  },
  {
    name: 'Midweight Pullover Hoodie',
    title: 'Midweight Pullover Hoodie',
    category: 'Hoodies / Streetwear',
    image: 'images/hoodies.png',
    description: 'A clean midweight hoodie made for streetwear collections, team orders, and e-commerce apparel drops.',
    material: 'Cotton fleece blend',
    sizes: 'S-5XL',
    colors: ['Black', 'White', 'Charcoal', 'Sand'],
    moq: '40 units',
    icon: Sparkles,
  },
  {
    name: 'Performance Jogger',
    title: 'Performance Jogger',
    category: 'Activewear / Joggers',
    image: 'images/joggers-activewear.png',
    description: 'A stretch jogger designed for activewear buyers, casual uniforms, and modern lifestyle assortments.',
    material: 'Stretch performance fabric',
    sizes: 'S-2XL',
    colors: ['Black', 'Charcoal', 'Navy'],
    moq: '40 units',
    icon: BadgeCheck,
  },
  {
    name: 'Durable Workwear Shirt',
    title: 'Durable Workwear Shirt',
    category: 'Workwear',
    image: 'images/workwear.png',
    description: 'A sturdy workwear shirt for crews, staff uniforms, field teams, and practical branded apparel programs.',
    material: 'Heavy-duty cotton blend',
    sizes: 'S-5XL',
    colors: ['Black', 'Navy', 'Gray', 'White'],
    moq: '60 units',
    icon: PackageCheck,
  },
  {
    name: "Women's Fashion Basic Tee",
    title: "Women's Fashion Basic Tee",
    category: "Women's Apparel",
    image: 'images/tshirt-blanks.png',
    description: 'A soft fashion basic with a retail-ready feel for women’s apparel programs and private-label basics.',
    material: 'Soft cotton blend',
    sizes: 'XS-5XL',
    colors: ['Black', 'White', 'Heather Gray', 'Blush'],
    moq: '50 units',
    icon: Shirt,
  },
  {
    name: 'Kids Everyday Hoodie',
    title: 'Kids Everyday Hoodie',
    category: 'Kids Apparel',
    image: 'images/hoodies.png',
    description: 'A comfortable youth hoodie for schools, clubs, family brands, youth events, and kids apparel sellers.',
    material: 'Soft fleece blend',
    sizes: 'Youth S-XL',
    colors: ['Black', 'Navy', 'Heather Gray', 'Royal'],
    moq: '40 units',
    icon: BadgeCheck,
  },
];

export const catalogFilters = ['All', 'T-Shirts / Basics', 'Hoodies / Streetwear', 'Activewear / Joggers', 'Workwear', "Women's Apparel", 'Kids Apparel'];

export const capabilities = [
  {
    title: 'Wholesale-First Supply',
    text: 'Built around repeat buyers, practical assortments, and scalable product expansion.',
    icon: Boxes,
  },
  {
    title: 'Print-Shop Friendly',
    text: 'Blank apparel categories chosen for decorators who need consistency and clean production results.',
    icon: PackageCheck,
  },
  {
    title: 'Local Mid-Atlantic Base',
    text: 'Based in Laurel, Maryland, with a practical understanding of regional business buyers.',
    icon: MapPin,
  },
];

export const processSteps = [
  { title: 'Share your needs', text: 'Tell us your sizes, garment categories, quantities, timeline, and preferred product direction.' },
  { title: 'Build the quote', text: 'We align on product mix, availability, pricing, and fulfillment expectations.' },
  { title: 'Move product', text: 'Orders are prepared for your print shop, store, customer program, or distribution channel.' },
];

export const contactMethods = [
  { label: company.email, href: `mailto:${company.email}`, icon: Mail },
  { label: company.phone, href: `tel:${company.phone.replaceAll('-', '')}`, icon: Phone },
  { label: company.location, href: '/contact', icon: Building2 },
  { label: 'Fast wholesale response', href: '/contact', icon: Clock3 },
];

export const trustPoints = [
  { value: 'B2B', label: 'Wholesale apparel focus' },
  { value: '10+', label: 'Expandable product categories' },
  { value: 'MD', label: 'Based in Laurel' },
  { value: '3', label: 'Core buyer channels' },
];

export const wholesaleFit = [
  { title: 'Decorators', text: 'Blank apparel sourcing for screen print, DTF, embroidery, events, and branded merchandise.', icon: Shirt },
  { title: 'Online Sellers', text: 'Assortments that can support drops, bundles, seasonal launches, and replenishment planning.', icon: Users },
  { title: 'Distributors', text: 'Practical categories and communication built for recurring, volume-oriented orders.', icon: Truck },
];

export const faqs = [
  {
    question: 'Do you sell directly to consumers?',
    answer: 'Rayas Clothing primarily serves wholesale and business buyers.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'MOQ depends on product type, but most products start between 40 and 60 units.',
  },
  {
    question: 'Do you offer wholesale pricing?',
    answer: 'Yes. Buyers can request wholesale pricing through the Request Pricing page.',
  },
  {
    question: 'Can print shops buy blank apparel?',
    answer: 'Yes. RAYAS serves custom t-shirt print shops and businesses that need blank apparel for printing and customization.',
  },
  {
    question: 'Do you support distributors?',
    answer: 'Yes. Distributor inquiries are welcome.',
  },
  {
    question: 'Is the catalog public?',
    answer:
      'The public catalog shows product categories and general product information. Approved wholesale buyers may receive access to pricing and additional catalog details.',
  },
  {
    question: 'Can more products be added later?',
    answer: 'Yes. The product catalog should be built so new products can be added easily.',
  },
];
