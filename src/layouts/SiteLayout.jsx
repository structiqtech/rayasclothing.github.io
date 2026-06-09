import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Button from '../components/Button.jsx';
import { company, navItems } from '../data/site.js';

export default function SiteLayout() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `focus-ring text-sm font-bold uppercase tracking-[0.14em] transition ${isActive ? 'text-gold' : 'text-ink hover:text-gold'}`;

  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur">
        <div className="hidden border-b border-white/10 bg-ink text-white lg:block">
          <div className="container-page flex h-9 items-center justify-between text-xs font-semibold text-white/70">
            <span>Wholesale apparel supplier based in {company.location}</span>
            <div className="flex items-center gap-5">
              <a className="focus-ring inline-flex items-center gap-2 hover:text-gold" href={`mailto:${company.email}`}>
                <Mail aria-hidden="true" size={14} />
                {company.email}
              </a>
              <a className="focus-ring inline-flex items-center gap-2 hover:text-gold" href={`tel:${company.phone.replaceAll('-', '')}`}>
                <Phone aria-hidden="true" size={14} />
                {company.phone}
              </a>
            </div>
          </div>
        </div>

        <nav className="container-page flex h-20 items-center justify-between">
          <Link to="/" className="focus-ring" aria-label="Rayas Clothing home">
            <span className="block font-display text-2xl font-extrabold tracking-normal">RAYAS</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-graphite/70">Clothing</span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/products" variant="outline">
              Browse Catalog
            </Button>
            <Button href="/request-pricing" variant="dark">
              Request Wholesale Pricing
            </Button>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-ink/15 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>

        {open ? (
          <div className="border-t border-ink/10 bg-white lg:hidden">
            <div className="container-page grid gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="focus-ring px-2 py-3 text-base font-bold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-4 grid gap-3">
                <Button href="/products" variant="outline" className="w-full" onClick={() => setOpen(false)}>
                  Browse Catalog
                </Button>
                <Button href="/request-pricing" variant="dark" className="w-full" onClick={() => setOpen(false)}>
                  Request Wholesale Pricing
                </Button>
              </div>
              <div className="mt-4 grid gap-2 border-t border-ink/10 pt-4 text-sm font-semibold text-graphite/75">
                <a className="focus-ring hover:text-gold" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                <a className="focus-ring hover:text-gold" href={`tel:${company.phone.replaceAll('-', '')}`}>
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-ink text-white">
        <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div>
            <p className="font-display text-3xl font-extrabold">RAYAS</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.26em] text-gold">Clothing LLC</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Wholesale apparel supplier serving print shops, e-commerce sellers, and distributors from Laurel, Maryland.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Company</p>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} className="focus-ring text-sm text-white/75 hover:text-gold">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Contact</p>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <a className="focus-ring inline-flex items-center gap-2 hover:text-gold" href={`mailto:${company.email}`}>
                <Mail aria-hidden="true" size={15} />
                {company.email}
              </a>
              <a className="focus-ring inline-flex items-center gap-2 hover:text-gold" href={`tel:${company.phone.replaceAll('-', '')}`}>
                <Phone aria-hidden="true" size={15} />
                {company.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" size={15} />
                {company.location}
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Wholesale</p>
            <div className="mt-4 grid gap-3">
              <Button href="/products" variant="outlineDark">
                Browse Catalog
              </Button>
              <Button href="/request-pricing">Request Wholesale Pricing</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5">
          <div className="container-page text-xs text-white/55">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
