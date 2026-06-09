import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        className="focus-ring flex w-full items-center justify-between gap-5 py-5 text-left"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="font-display text-lg font-extrabold text-ink">{question}</span>
        <ChevronDown aria-hidden="true" className={`shrink-0 text-gold transition ${open ? 'rotate-180' : ''}`} size={22} />
      </button>
      {open ? <p className="pb-6 text-sm leading-7 text-graphite/80">{answer}</p> : null}
    </div>
  );
}
