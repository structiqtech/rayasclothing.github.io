import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ title, description, image, href = '/products' }) {
  return (
    <Link
      to={href}
      className="focus-ring group flex h-full flex-col overflow-hidden border border-ink/10 bg-white transition hover:border-gold hover:shadow-soft"
    >
      {image ? (
        <img src={`${import.meta.env.BASE_URL}${image}`} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
      ) : null}
      <div className="flex min-h-36 flex-1 flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink">{title}</p>
          <ArrowUpRight aria-hidden="true" className="shrink-0 text-gold transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={18} />
        </div>
        {description ? <p className="mt-5 text-sm leading-6 text-graphite/70">{description}</p> : null}
      </div>
    </Link>
  );
}
