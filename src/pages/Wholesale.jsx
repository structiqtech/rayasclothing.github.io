import { BadgeCheck, Boxes, CheckCircle2, PackageCheck, Repeat2, Shirt, ShoppingBag, Store, Truck, Users } from 'lucide-react';
import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const heroImage = `${import.meta.env.BASE_URL}images/rayas-wholesale-hero.png`;
const warehouseImage = `${import.meta.env.BASE_URL}images/warehouse-wholesale.png`;

const howItWorks = [
  'Browse public catalog',
  'Request wholesale pricing',
  'Get approved for wholesale access',
  'Place bulk orders',
  'Reorder as your business grows',
];

const buyerTypes = [
  { title: 'Custom t-shirt print shops', icon: Shirt },
  { title: 'E-commerce sellers', icon: Store },
  { title: 'Distributors', icon: Truck },
  { title: 'Retail stores', icon: ShoppingBag },
  { title: 'Bulk buyers', icon: Users },
];

const benefits = [
  { title: 'Competitive bulk pricing', icon: BadgeCheck },
  { title: 'Access to wholesale catalog', icon: Boxes },
  { title: 'Premium blank apparel', icon: Shirt },
  { title: 'Reliable order support', icon: PackageCheck },
  { title: 'Product expansion options', icon: Repeat2 },
  { title: 'Custom and private label opportunities in the future', icon: CheckCircle2 },
];

export default function Wholesale() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Wholesale blank apparel arranged for business buyers" className="h-full w-full object-cover opacity-[0.38]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/38" />
        </div>
        <div className="container-page relative grid min-h-[560px] gap-12 py-20 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="eyebrow">Wholesale program</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight sm:text-6xl">
              Wholesale Apparel Built for Business Buyers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Source premium blank apparel, fashion basics, and scalable product categories through a wholesale program designed for serious buyers.
            </p>
            <div className="mt-9">
              <Button href="/request-pricing">Request Wholesale Pricing</Button>
            </div>
          </div>

          <div className="border border-white/14 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Program focus</p>
            <div className="mt-6 grid gap-4">
              {['Public catalog', 'Wholesale access', 'Bulk ordering'].map((item) => (
                <div key={item} className="border border-white/12 bg-ink/45 p-4">
                  <p className="font-display text-xl font-extrabold">{item}</p>
                </div>
              ))}
            </div>
            <img src={warehouseImage} alt="Wholesale apparel warehouse with organized inventory" className="mt-6 aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="How it works"
            title="A simple path from catalog browsing to repeat wholesale orders."
            text="The program is organized for buyers who need clear steps, reliable communication, and product access that can scale with demand."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {howItWorks.map((step, index) => (
              <article key={step} className="border border-ink/10 bg-white p-5 transition hover:border-gold hover:shadow-soft">
                <p className="font-display text-3xl font-extrabold text-gold">0{index + 1}</p>
                <h2 className="mt-5 text-base font-extrabold leading-6 text-ink">{step}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Buyer types"
            title="Wholesale access for the businesses moving apparel every day."
            text="RAYAS is built for business buyers who source products for decoration, resale, distribution, retail, and bulk programs."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {buyerTypes.map((buyer) => (
              <article key={buyer.title} className="flex items-center gap-4 border border-ink/10 bg-white p-5 transition hover:border-gold hover:shadow-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-gold">
                  <buyer.icon aria-hidden="true" size={22} />
                </div>
                <h2 className="font-display text-lg font-extrabold text-ink">{buyer.title}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="Benefits"
            title="Wholesale infrastructure with premium apparel presentation."
            text="The program combines practical B2B buying support with the polish buyers expect from a modern fashion supplier."
            tone="dark"
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="border border-white/12 bg-white/5 p-6">
                <benefit.icon aria-hidden="true" className="text-gold" size={28} />
                <h2 className="mt-5 font-display text-xl font-extrabold">{benefit.title}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="relative overflow-hidden bg-mist p-8 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="eyebrow">Wholesale pricing</p>
                <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
                  Ready to apply for wholesale access?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-graphite/78">
                  Send your product interests, estimated quantities, and buyer details so RAYAS can follow up with wholesale pricing.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <Button href="/request-pricing" variant="dark">
                  Request Wholesale Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
