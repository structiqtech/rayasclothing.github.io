import { BadgeCheck, Boxes, Building2, PackageCheck, Shirt, Store, Truck, Users } from 'lucide-react';
import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { company } from '../data/site.js';

const heroImage = `${import.meta.env.BASE_URL}images/rayas-wholesale-hero.png`;
const warehouseImage = `${import.meta.env.BASE_URL}images/warehouse-wholesale.png`;

const servedGroups = [
  {
    title: 'Custom Print Shops',
    text: 'Blank apparel and essentials for decorators producing branded merchandise, events, uniforms, and retail-ready goods.',
    icon: Shirt,
  },
  {
    title: 'E-Commerce Sellers',
    text: 'Core categories for online brands building repeatable product drops, bundles, and replenishment programs.',
    icon: Store,
  },
  {
    title: 'Distributors',
    text: 'Wholesale apparel options that support volume buyers, recurring orders, and practical customer fulfillment.',
    icon: Truck,
  },
  {
    title: 'Retail Brands',
    text: 'Modern basics, streetwear, activewear, and workwear categories for growing retail apparel businesses.',
    icon: Users,
  },
];

const reliabilityPoints = [
  'Quality apparel essentials selected for customization and resale',
  'Wholesale-minded communication for buyers planning bulk orders',
  'A catalog structure built around dependable, repeatable categories',
  'Professional service for print shops, sellers, distributors, and retailers',
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Premium wholesale apparel showroom presentation" className="h-full w-full object-cover opacity-[0.38]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/35" />
        </div>
        <div className="container-page relative grid min-h-[560px] gap-12 py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="eyebrow">About Rayas Clothing</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight sm:text-6xl">
              A modern wholesale apparel company based in Laurel, Maryland.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
              Rayas Clothing serves custom print shops, e-commerce sellers, distributors, and growing retail brands with
              quality apparel essentials for customization, resale, and scalable business programs.
            </p>
          </div>
          <div className="border border-white/14 bg-white/10 p-6 backdrop-blur">
            <Building2 aria-hidden="true" className="text-gold" size={32} />
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-white/55">Headquarters</p>
            <p className="mt-2 font-display text-4xl font-extrabold">{company.location}</p>
            <p className="mt-5 text-sm leading-7 text-white/68">
              Positioned to support wholesale buyers with a premium fashion sensibility and practical B2B service.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Our mission"
            title="Make wholesale apparel sourcing feel clear, dependable, and brand-ready."
            text="We provide quality apparel essentials including t-shirts, hoodies, joggers, workwear, activewear, streetwear, and blank apparel designed for customization and resale."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {['T-Shirts', 'Hoodies', 'Joggers', 'Workwear', 'Activewear', 'Streetwear', 'Blank Apparel', 'Fashion Basics'].map((item) => (
              <div key={item} className="border border-ink/10 bg-mist p-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Who we serve"
            title="Built for buyers who need apparel to move."
            text="RAYAS supports the businesses that turn blank and fashion basics into products, programs, collections, and repeat orders."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {servedGroups.map((group) => (
              <article key={group.title} className="border border-ink/10 bg-white p-6 transition hover:border-gold hover:shadow-soft">
                <group.icon aria-hidden="true" className="text-gold" size={28} />
                <h2 className="mt-6 font-display text-xl font-extrabold text-ink">{group.title}</h2>
                <p className="mt-3 text-sm leading-7 text-graphite/78">{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden border border-white/12">
            <img src={warehouseImage} alt="Organized wholesale apparel warehouse and inventory area" className="aspect-[5/4] w-full object-cover" loading="lazy" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Quality & reliability"
              title="Wholesale apparel with standards buyers can build around."
              text="RAYAS is focused on products and service that help businesses source confidently, plan orders clearly, and grow without losing polish."
              tone="dark"
            />
            <div className="mt-9 grid gap-3">
              {reliabilityPoints.map((point) => (
                <div key={point} className="flex gap-4 border border-white/12 bg-white/5 p-4">
                  <BadgeCheck aria-hidden="true" className="mt-0.5 shrink-0 text-gold" size={22} />
                  <p className="text-sm font-semibold leading-7 text-white/80">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Built for growing businesses</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              A scalable product catalog for the next stage of your apparel business.
            </h2>
          </div>
          <div className="border border-ink/10 bg-mist p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Boxes aria-hidden="true" className="text-gold" size={30} />
                <h3 className="mt-5 font-display text-2xl font-extrabold text-ink">Catalog growth</h3>
                <p className="mt-3 text-sm leading-7 text-graphite/78">
                  Product categories can expand as RAYAS adds more apparel essentials and wholesale programs.
                </p>
              </div>
              <div>
                <PackageCheck aria-hidden="true" className="text-gold" size={30} />
                <h3 className="mt-5 font-display text-2xl font-extrabold text-ink">Buyer support</h3>
                <p className="mt-3 text-sm leading-7 text-graphite/78">
                  The brand is structured for quote requests, product planning, and professional wholesale communication.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Button href="/request-pricing" variant="dark">
                Request Wholesale Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
