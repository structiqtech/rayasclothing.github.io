import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const styles = {
  primary: 'bg-gold text-ink hover:bg-[#D8B75E]',
  dark: 'bg-ink text-white hover:bg-graphite',
  outline: 'border border-ink/15 bg-white !text-ink hover:border-gold hover:!text-ink',
  outlineDark: 'border border-white/20 bg-transparent !text-white hover:bg-white hover:!text-ink',
  ghost: 'bg-transparent text-ink hover:bg-mist',
};

export default function Button({ children, href, variant = 'primary', className = '', icon = true, type = 'button', ...props }) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-bold transition ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" size={17} strokeWidth={2.5} /> : null}
    </>
  );

  if (href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:')) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  if (!href) {
    return (
      <button className={classes} type={type} {...props}>
        {content}
      </button>
    );
  }

  return (
    <Link className={classes} to={href} {...props}>
      {content}
    </Link>
  );
}
