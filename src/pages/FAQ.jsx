import Button from '../components/Button.jsx';
import FAQItem from '../components/FAQItem.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { faqs } from '../data/site.js';

export default function FAQ() {
  return (
    <>
      <section className="bg-mist py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
          <SectionHeader
            eyebrow="FAQ"
            title="Wholesale apparel questions, answered."
            text="Find quick answers about consumer sales, minimum order quantities, wholesale pricing, catalog access, print shop orders, distributor support, and future product expansion."
          />
          <div className="border border-ink/10 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Need pricing?</p>
            <p className="mt-3 text-sm leading-7 text-graphite/78">
              Business buyers can submit product interests and estimated volume through the Request Pricing page.
            </p>
            <div className="mt-5">
              <Button href="/request-pricing" variant="dark">
                Request Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Answers</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-ink">Before you inquire.</h2>
            <p className="mt-5 text-base leading-8 text-graphite/78">
              These FAQs cover the basics for print shops, sellers, distributors, and other wholesale apparel buyers.
            </p>
          </div>
          <div className="border-t border-ink/10 bg-mist px-6 sm:px-8">
            {faqs.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
