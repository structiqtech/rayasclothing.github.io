import { BadgeCheck, Boxes, CheckCircle2, PackageCheck, Shirt, Store, Truck, Users } from 'lucide-react';
import Button from '../components/Button.jsx';
import CategoryCard from '../components/CategoryCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const heroImage = `${import.meta.env.BASE_URL}images/rayas-wholesale-hero.png`;

const featuredCategories = [
  {
    title: 'T-Shirts',
    description: 'Print-ready blanks for everyday wholesale programs.',
    image: 'images/tshirt-blanks.png',
  },
  {
    title: 'Hoodies',
    description: 'Premium fleece for brands, teams, and resale.',
    image: 'images/hoodies.png',
  },
  {
    title: 'Joggers',
    description: 'Comfort-focused silhouettes for streetwear drops.',
    image: 'images/joggers-activewear.png',
  },
  {
    title: 'Workwear',
    description: 'Durable apparel options for staff and uniforms.',
    image: 'images/workwear.png',
  },
  {
    title: 'Basics & Blanks',
    description: 'Core essentials built for repeat ordering.',
    image: 'images/tshirt-blanks.png',
  },
  {
    title: 'Streetwear',
    description: 'Modern wholesale apparel with retail appeal.',
    image: 'images/streetwear.png',
  },
];

const customerGroups = [
  {
    title: 'Custom T-Shirt Print Shops',
    text: 'Reliable blanks for screen printing, DTF, embroidery, and branded merchandise.',
    icon: Shirt,
  },
  {
    title: 'E-Commerce Sellers',
    text: 'Wholesale apparel categories for online storefronts, drops, and seasonal collections.',
    icon: Store,
  },
  {
    title: 'Distributors',
    text: 'Scalable sourcing support for recurring bulk orders and growing buyer networks.',
    icon: Truck,
  },
  {
    title: 'Retail Buyers',
    text: 'Fashion basics and streetwear-ready products with clean premium presentation.',
    icon: Users,
  },
];

const whyRayas = [
  { title: 'Competitive wholesale pricing', icon: BadgeCheck },
  { title: 'Quality blank apparel', icon: Shirt },
  { title: 'Bulk order support', icon: Boxes },
  { title: 'Reliable service', icon: PackageCheck },
  { title: 'Scalable product catalog', icon: CheckCircle2 },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Premium blank apparel arranged in a wholesale showroom" className="h-full w-full object-cover opacity-[0.58]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/22" />
        </div>

        <div className="container-page relative grid min-h-[calc(100vh-5rem)] gap-12 py-20 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="eyebrow">Rayas Clothing</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] tracking-normal sm:text-6xl lg:text-7xl">
              Wholesale Apparel for Brands, Print Shops & Retailers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Premium-quality t-shirts, hoodies, joggers, workwear, and fashion basics at competitive wholesale pricing.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/products">Browse Catalog</Button>
              <Button href="/request-pricing" variant="outlineDark" className="bg-white/10">
                Request Wholesale Pricing
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="border border-white/14 bg-white/10 p-5 shadow-soft backdrop-blur">
              <img src={heroImage} alt="Wholesale apparel blanks and basics" className="aspect-[4/5] w-full object-cover" />
              <div className="grid grid-cols-3 border-x border-b border-white/12 bg-ink/70 text-center">
                <div className="border-r border-white/12 p-4">
                  <p className="font-display text-2xl font-extrabold text-gold">B2B</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/60">Wholesale</p>
                </div>
                <div className="border-r border-white/12 p-4">
                  <p className="font-display text-2xl font-extrabold text-gold">Bulk</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/60">Support</p>
                </div>
                <div className="p-4">
                  <p className="font-display text-2xl font-extrabold text-gold">MD</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/60">Laurel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Featured categories"
            title="High-demand apparel categories for wholesale buyers."
            text="A focused catalog of blank apparel and fashion basics for decoration, resale, distribution, and retail programs."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Who we serve"
              title="Built for businesses that source apparel at scale."
              text="RAYAS supports buyers who need quality products, practical communication, and a catalog that can grow with demand."
            />
            <div className="mt-8">
              <Button href="/request-pricing" variant="dark">
                Request Wholesale Pricing
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {customerGroups.map((group) => (
              <article key={group.title} className="border border-ink/10 bg-white p-6 transition hover:border-gold hover:shadow-soft">
                <group.icon aria-hidden="true" className="text-gold" size={28} />
                <h3 className="mt-5 font-display text-xl font-extrabold text-ink">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite/78">{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="overflow-hidden border border-white/12">
            <img src={heroImage} alt="Premium wholesale apparel presentation" className="aspect-[5/4] w-full object-cover" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Why RAYAS"
              title="Wholesale apparel with a premium fashion standard."
              text="From dependable blanks to expanding product categories, RAYAS is designed for buyers who need quality and consistency."
              tone="dark"
            />
            <div className="mt-9 grid gap-3">
              {whyRayas.map((item) => (
                <div key={item.title} className="flex items-center gap-4 border border-white/12 bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold text-ink">
                    <item.icon aria-hidden="true" size={20} />
                  </div>
                  <p className="font-bold text-white">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="relative overflow-hidden bg-ink px-6 py-16 text-white sm:px-10 lg:px-14">
            <div className="absolute inset-0">
              <img src={heroImage} alt="Folded wholesale apparel basics" className="h-full w-full object-cover opacity-[0.28]" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
            </div>
            <div className="relative max-w-3xl">
              <p className="eyebrow">Wholesale access</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Ready to source apparel for your business?
              </h2>
              <div className="mt-8">
                <Button href="/request-pricing">Request Wholesale Access</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
