export default function SectionHeader({ eyebrow, title, text, align = 'left', tone = 'light' }) {
  const titleColor = tone === 'dark' ? '!text-white' : 'text-ink';
  const textColor = tone === 'dark' ? 'text-white/72' : 'text-graphite/80';

  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`section-title mt-3 ${titleColor}`}>{title}</h2>
      {text ? <p className={`mt-5 text-base leading-8 sm:text-lg ${textColor}`}>{text}</p> : null}
    </div>
  );
}
