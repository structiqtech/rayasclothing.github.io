import { PackagePlus } from 'lucide-react';
import { useMemo, useState } from 'react';
import Button from '../components/Button.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { catalogFilters, catalogProducts } from '../data/site.js';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') {
      return catalogProducts;
    }

    return catalogProducts.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className="bg-mist py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.95fr_0.8fr] lg:items-end">
          <SectionHeader
            eyebrow="Product catalog"
            title="Public wholesale apparel catalog."
            text="Explore Rayas Clothing products by category, then request pricing for the quantities, sizes, and colors your business needs."
          />
          <div className="border border-ink/10 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Catalog details</p>
            <p className="mt-3 text-sm leading-7 text-graphite/80">
              Each product includes category, material, available sizes, colors, MOQ, and a direct pricing request path.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 border-b border-ink/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Filters</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-ink">Browse by category.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {catalogFilters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    className={`focus-ring min-h-10 border px-4 text-sm font-bold transition ${
                      isActive ? 'border-ink bg-ink text-white' : 'border-ink/10 bg-white text-ink hover:border-gold hover:text-ink'
                    }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}

            <ProductCard
              comingSoon
              icon={PackagePlus}
              image="images/warehouse-wholesale.png"
              title="Other Products Coming Soon"
              category="Catalog Expansion"
              description="Rayas Clothing is built to expand into additional wholesale apparel categories as buyer demand grows."
              details={['More blanks', 'Seasonal styles', 'Future categories']}
            />
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="container-page flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow">Wholesale pricing</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight">Need pricing for a specific product mix?</h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              Send your selected products, sizes, colors, and estimated quantities so the sales team can follow up.
            </p>
          </div>
          <Button href="/request-pricing">Request Wholesale Pricing</Button>
        </div>
      </section>
    </>
  );
}
