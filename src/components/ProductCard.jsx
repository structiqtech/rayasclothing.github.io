import Button from './Button.jsx';

export default function ProductCard({ icon: Icon, image, name, title, category, description, sizes, colors = [], material, moq, details = [], comingSoon = false }) {
  const displayTitle = name || title;

  return (
    <article className="flex h-full flex-col overflow-hidden border border-ink/10 bg-white transition hover:border-gold hover:shadow-soft">
      {image ? <img src={`${import.meta.env.BASE_URL}${image}`} alt={displayTitle} className="aspect-[4/3] w-full object-cover" loading="lazy" /> : null}
      <div className="flex flex-1 flex-col p-6">
        {Icon ? (
          <div className="flex h-12 w-12 items-center justify-center bg-ink text-gold">
            <Icon aria-hidden="true" size={23} />
          </div>
        ) : null}
        {category ? <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-gold">{category}</p> : null}
        <h3 className={category ? 'mt-2 font-display text-2xl font-extrabold text-ink' : 'mt-6 font-display text-2xl font-extrabold text-ink'}>
          {displayTitle}
        </h3>
        <p className="mt-4 text-sm leading-7 text-graphite/80">{description}</p>

        {!comingSoon ? (
          <dl className="mt-6 grid gap-3 border-t border-ink/10 pt-5 text-sm">
            {sizes ? (
              <div className="flex justify-between gap-4">
                <dt className="font-bold text-ink">Sizes</dt>
                <dd className="text-right text-graphite/75">{sizes}</dd>
              </div>
            ) : null}
            {material ? (
              <div className="flex justify-between gap-4">
                <dt className="font-bold text-ink">Material</dt>
                <dd className="text-right text-graphite/75">{material}</dd>
              </div>
            ) : null}
            {moq ? (
              <div className="flex justify-between gap-4">
                <dt className="font-bold text-ink">MOQ</dt>
                <dd className="text-right text-graphite/75">{moq}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {colors.length ? (
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-graphite/70">Colors</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {colors.map((color) => (
                <span key={color} className="border border-ink/10 bg-mist px-3 py-1.5 text-xs font-bold text-graphite">
                  {color}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {details.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {details.map((detail) => (
              <span key={detail} className="bg-mist px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-graphite">
                {detail}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-auto pt-7">
          {comingSoon ? (
            <Button href="/request-pricing" variant="dark" className="w-full">
              Ask About More Products
            </Button>
          ) : (
            <Button href="/request-pricing" variant="outline" className="w-full">
              Request Pricing
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
