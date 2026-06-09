import { BookOpen, HelpCircle, Mail, MapPin, Phone, Tags, Truck } from 'lucide-react';
import Button from '../components/Button.jsx';
import ContactForm from '../components/ContactForm.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { company } from '../data/site.js';

const inquiryCards = [
  {
    title: 'Wholesale Pricing',
    text: 'Request bulk pricing for t-shirts, hoodies, joggers, workwear, blanks, and apparel essentials.',
    icon: Tags,
    href: '/request-pricing',
  },
  {
    title: 'Catalog Access',
    text: 'Ask about current product availability, categories, sizes, colors, and upcoming catalog additions.',
    icon: BookOpen,
    href: '/products',
  },
  {
    title: 'Distributor Inquiry',
    text: 'Connect with RAYAS about recurring orders, volume programs, and distributor-focused opportunities.',
    icon: Truck,
    href: '/request-pricing',
  },
  {
    title: 'Product Questions',
    text: 'Get help with materials, minimum order quantities, apparel categories, and wholesale fit.',
    icon: HelpCircle,
    href: '#contact-form',
  },
];

export default function Contact() {
  return (
    <>
      <section className="bg-mist py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
          <SectionHeader
            eyebrow="Contact RAYAS"
            title="Wholesale apparel support for serious business buyers."
            text="Contact Rayas Clothing for catalog questions, distributor inquiries, product details, and general wholesale apparel support."
          />
          <div className="border border-ink/10 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Based in</p>
            <p className="mt-3 font-display text-3xl font-extrabold text-ink">{company.location}</p>
            <p className="mt-3 text-sm leading-7 text-graphite/78">
              Serving custom print shops, e-commerce sellers, distributors, retail stores, and bulk apparel buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="grid content-start gap-4">
            <a className="focus-ring flex items-center gap-4 border border-ink/10 p-6 transition hover:border-gold hover:shadow-soft" href={`mailto:${company.email}`}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-gold">
                <Mail aria-hidden="true" size={21} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-graphite/60">Business email</p>
                <p className="mt-1 font-bold text-ink">{company.email}</p>
              </div>
            </a>
            <a className="focus-ring flex items-center gap-4 border border-ink/10 p-6 transition hover:border-gold hover:shadow-soft" href={`tel:${company.phone.replaceAll('-', '')}`}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-gold">
                <Phone aria-hidden="true" size={21} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-graphite/60">Phone</p>
                <p className="mt-1 font-bold text-ink">{company.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 border border-ink/10 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-gold">
                <MapPin aria-hidden="true" size={21} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-graphite/60">Location</p>
                <p className="mt-1 font-bold text-ink">{company.location}</p>
              </div>
            </div>
          </div>

          <div id="contact-form">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Business inquiries"
            title="Choose the best path for your request."
            text="Whether you need pricing, catalog access, distributor information, or product guidance, RAYAS can point your inquiry in the right direction."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {inquiryCards.map((card) => (
              <article key={card.title} className="flex h-full flex-col border border-ink/10 bg-white p-6 transition hover:border-gold hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center bg-ink text-gold">
                  <card.icon aria-hidden="true" size={23} />
                </div>
                <h2 className="mt-6 font-display text-xl font-extrabold text-ink">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-graphite/78">{card.text}</p>
                <div className="mt-auto pt-6">
                  <Button href={card.href} variant="outline" className="w-full">
                    Start Inquiry
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
