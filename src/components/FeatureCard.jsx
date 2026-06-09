export default function FeatureCard({ icon: Icon, title, text }) {
  return (
    <article className="border border-ink/10 bg-white p-6">
      <div className="flex h-11 w-11 items-center justify-center bg-ink text-gold">
        <Icon aria-hidden="true" size={22} />
      </div>
      <h3 className="mt-6 font-display text-xl font-extrabold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-graphite/80">{text}</p>
    </article>
  );
}
