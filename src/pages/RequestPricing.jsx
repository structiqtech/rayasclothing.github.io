import { CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqzjyvo';

const businessTypes = ['Custom T-Shirt Print Shop', 'E-Commerce Seller', 'Distributor', 'Retail Store', 'Other'];

const productInterests = [
  'T-Shirts',
  'Hoodies',
  'Joggers',
  'Workwear',
  'Kids Apparel',
  "Women's Apparel",
  "Men's Apparel",
  'Activewear',
  'Streetwear',
  'Other',
];

export default function RequestPricing() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new window.FormData(form);

    setStatus('submitting');

    try {
      const response = await window.fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <section className="bg-mist py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-end">
          <SectionHeader
            eyebrow="Request pricing"
            title="Wholesale pricing for apparel buyers."
            text="Tell us about your business, product interests, and expected volume so Rayas Clothing can follow up with wholesale pricing and access details."
          />
         <div className="border border-ink/10 bg-white p-6">
  <div className="flex items-center gap-3">
    <ShieldCheck
      aria-hidden="true"
      className="text-gold shrink-0"
      size={30}
    />
    <h2 className="font-display text-2xl font-extrabold text-ink">
      Professional Wholesale Inquiry
    </h2>
  </div>

  <p className="mt-4 text-sm leading-7 text-graphite/78">
    Complete the form below and our wholesale team will contact you shortly
    to discuss pricing, product availability, and partnership opportunities.
  </p>
</div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Wholesale access</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-ink">Share your buying needs.</h2>
            <p className="mt-5 text-base leading-8 text-graphite/78">
              Include product categories, monthly volume, sizes, timelines, and any print, resale, distribution, or retail requirements.
            </p>
          </div>

          {status === 'success' ? (
            <div className="border border-gold bg-mist p-8">
              <CheckCircle2 aria-hidden="true" className="text-gold" size={42} />
              <h2 className="mt-6 font-display text-3xl font-extrabold text-ink">Request received.</h2>
              <p className="mt-4 text-base leading-8 text-graphite/78">
                Thank you for contacting Rayas Clothing. We received your wholesale pricing inquiry and will review your business details.
              </p>
              <div className="mt-7">
                <Button type="button" variant="dark" onClick={() => setStatus('idle')}>
                  Submit Another Request
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-ink/10 bg-mist p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  Full Name
                  <input className="focus-ring min-h-12 border border-ink/10 bg-white px-4 font-normal" name="full_name" type="text" autoComplete="name" required />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Company Name
                  <input className="focus-ring min-h-12 border border-ink/10 bg-white px-4 font-normal" name="company_name" type="text" autoComplete="organization" required />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Email
                  <input className="focus-ring min-h-12 border border-ink/10 bg-white px-4 font-normal" name="email" type="email" autoComplete="email" required />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Phone
                  <input className="focus-ring min-h-12 border border-ink/10 bg-white px-4 font-normal" name="phone" type="tel" autoComplete="tel" />
                </label>
              </div>

              <label className="mt-5 grid gap-2 text-sm font-bold">
                Business Type
                <select className="focus-ring min-h-12 border border-ink/10 bg-white px-4 font-normal" name="business_type" required>
                  <option value="">Select business type</option>
                  {businessTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>

              <fieldset className="mt-6">
                <legend className="text-sm font-bold">Product Interest</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {productInterests.map((interest) => (
                    <label key={interest} className="focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-gold flex items-center gap-3 border border-ink/10 bg-white p-3 text-sm font-semibold">
                      <input className="h-4 w-4 accent-gold" name="product_interest" type="checkbox" value={interest} />
                      {interest}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="mt-5 grid gap-2 text-sm font-bold">
                Estimated Monthly Volume
                <input
                  className="focus-ring min-h-12 border border-ink/10 bg-white px-4 font-normal"
                  name="estimated_monthly_volume"
                  type="text"
                  placeholder="Example: 250-500 units per month"
                  required
                />
              </label>

              <label className="mt-5 grid gap-2 text-sm font-bold">
                Message
                <textarea
                  className="focus-ring min-h-36 border border-ink/10 bg-white p-4 font-normal"
                  name="message"
                  placeholder="Tell us about products, sizes, colors, timelines, and wholesale goals."
                />
              </label>

              {status === 'error' ? (
                <p className="mt-5 border border-red-200 bg-white p-4 text-sm font-semibold text-red-700">
                  Something went wrong while submitting. Please try again or email sales@rayasclothing.com.
                </p>
              ) : null}

              <div className="mt-7">
                <Button type="submit" variant="dark" icon={status !== 'submitting'} disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <>
                      <Loader2 aria-hidden="true" className="animate-spin" size={17} />
                      Sending Request
                    </>
                  ) : (
                    'Request Wholesale Pricing'
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
