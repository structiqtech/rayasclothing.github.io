import { CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Button from './Button.jsx';
import { productCategories } from '../data/site.js';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqzjyvo';

export default function ContactForm() {
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

  if (status === 'success') {
    return (
      <div className="border border-gold bg-mist p-6 sm:p-8">
        <CheckCircle2 aria-hidden="true" className="text-gold" size={40} />
        <h2 className="mt-6 font-display text-3xl font-extrabold text-ink">Inquiry received.</h2>
        <p className="mt-4 text-sm leading-7 text-graphite/78">
          Thank you for contacting Rayas Clothing. We received your message and will review your business inquiry.
        </p>
        <div className="mt-7">
          <Button type="button" variant="dark" onClick={() => setStatus('idle')}>
            Send Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-ink/10 bg-mist p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Name
          <input className="focus-ring min-h-12 border border-ink/10 bg-white px-4 font-normal" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Company
          <input className="focus-ring min-h-12 border border-ink/10 bg-white px-4 font-normal" name="company" type="text" autoComplete="organization" />
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
        Interested categories
        <select className="focus-ring min-h-12 border border-ink/10 bg-white px-4 font-normal" name="category">
          <option>Multiple categories</option>
          {productCategories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <label className="mt-5 grid gap-2 text-sm font-bold">
        Message
        <textarea
          className="focus-ring min-h-36 border border-ink/10 bg-white p-4 font-normal"
          name="message"
          placeholder="Tell us quantities, sizes, timeline, and product direction."
        />
      </label>
      {status === 'error' ? (
        <p className="mt-5 border border-red-200 bg-white p-4 text-sm font-semibold text-red-700">
          Something went wrong while submitting. Please try again or email sales@rayasclothing.com.
        </p>
      ) : null}
      <div className="mt-6">
        <Button type="submit" variant="dark" icon={status !== 'submitting'} disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <Loader2 aria-hidden="true" className="animate-spin" size={17} />
              Sending Inquiry
            </>
          ) : (
            'Send Inquiry'
          )}
        </Button>
      </div>
    </form>
  );
}
