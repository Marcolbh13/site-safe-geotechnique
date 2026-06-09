import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { NAV, COMPANY } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const linkClass = ({ isActive }) =>
    [
      'px-3.5 py-2 rounded-lg font-semibold text-[0.97rem] transition-colors',
      isActive ? 'text-safe-magenta' : 'text-slate hover:text-safe-magenta hover:bg-mist',
    ].join(' ');

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow ${scrolled ? 'shadow-sfsm border-line' : 'border-transparent'}`}
      style={{ background: 'rgba(255,255,255,.86)', backdropFilter: 'saturate(180%) blur(14px)', WebkitBackdropFilter: 'saturate(180%) blur(14px)' }}
    >
      <div className="container-safe flex items-center justify-between gap-4" style={{ height: 'var(--header-h)' }}>
        <Link to="/" aria-label="SAFE Géotechnique, accueil" className="shrink-0 inline-flex">
          <Logo height={44} />
        </Link>

        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to}><NavLink to={item.to} className={linkClass}>{item.label}</NavLink></li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={COMPANY.phoneHref} className="hidden xl:inline-flex items-center gap-2 font-mono text-[0.9rem] font-semibold text-ink hover:text-safe-magenta">
            <Icon name="phone" className="w-[18px] h-[18px] text-safe-magenta" /> {COMPANY.phone}
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm hidden sm:inline-flex">Demander un devis</Link>
          <button
            className="lg:hidden grid place-items-center w-11 h-11 rounded-[10px] border border-line bg-white"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} aria-controls="mnav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-5 h-[14px]">
              <span className={`absolute left-0 top-0 w-5 h-0.5 bg-ink rounded transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[6px] w-5 h-0.5 bg-ink rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-[12px] w-5 h-0.5 bg-ink rounded transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mnav" className="lg:hidden border-t border-line bg-white px-[clamp(1.1rem,4vw,2rem)] pb-6 pt-3" aria-label="Navigation mobile">
          <ul className="grid gap-0.5">
            <li><NavLink to="/" className={linkClass + ' block !py-3 border-b border-mist'}>Accueil</NavLink></li>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={({ isActive }) => `block py-3 px-2.5 text-[1.05rem] font-semibold border-b border-mist ${isActive ? 'text-safe-magenta' : 'text-slate'}`}>{item.label}</NavLink>
              </li>
            ))}
            <li><Link to="/contact" className="btn btn-primary w-full mt-3">Demander un devis</Link></li>
            <li><a href={COMPANY.phoneHref} className="flex items-center justify-center gap-2 mt-3 font-mono font-semibold text-ink"><Icon name="phone" className="w-[18px] h-[18px] text-safe-magenta" /> {COMPANY.phone}</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
