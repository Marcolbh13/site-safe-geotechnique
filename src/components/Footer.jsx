import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { EMAILS, FOOTER_COLS } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum text-[#d8cfdb]" style={{ paddingTop: 'clamp(3rem,6vw,4.5rem)' }}>
      <div className="container-safe grid gap-[clamp(1.75rem,4vw,3rem)] pb-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Logo height={46} variant="light" />
          <p className="mt-[1.1rem] mb-[1.4rem] text-[#b6a9ba] text-[0.97rem] max-w-[34ch]">
            Bureau de sondages et d'ingénierie géotechnique au service de vos projets :
            ouvrages linéaires, bâtiments et projets de particuliers.
          </p>
          <Link to="/contact" className="btn btn-light btn-sm">
            Nous contacter
          </Link>
        </div>

        {FOOTER_COLS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-[0.8rem] uppercase tracking-[0.12em] text-white font-bold mb-4">
              {col.title}
            </h2>
            <ul className="grid gap-3 list-none p-0">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[#cabfce] hover:text-white text-[0.97rem]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-[0.8rem] uppercase tracking-[0.12em] text-white font-bold mb-4">
            Contact
          </h2>
          <ul className="grid gap-4 list-none p-0">
            <li>
              <span className="block text-[0.78rem] uppercase tracking-[0.08em] text-[#8f8295] mb-0.5">
                Devis
              </span>
              <a href={`mailto:${EMAILS.devis}`} className="text-[#cabfce] hover:text-white">
                {EMAILS.devis}
              </a>
            </li>
            <li>
              <span className="block text-[0.78rem] uppercase tracking-[0.08em] text-[#8f8295] mb-0.5">
                Recrutement
              </span>
              <a href={`mailto:${EMAILS.recrutement}`} className="text-[#cabfce] hover:text-white">
                {EMAILS.recrutement}
              </a>
            </li>
            <li className="text-[#cabfce] text-[0.97rem]">
              <span className="block text-[0.78rem] uppercase tracking-[0.08em] text-[#8f8295] mb-0.5">
                Secteur
              </span>
              Hauts-de-France et régions limitrophes
            </li>
          </ul>
        </div>
      </div>

      <div className="container-safe flex flex-wrap justify-between gap-2 py-[1.4rem] text-[0.88rem] text-[#8f8295] border-t border-white/10">
        <p>© {year} SAFE Géotechnique. Tous droits réservés.</p>
        <p>
          <Link to="/mentions-legales" className="text-[#8f8295] hover:text-white">
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  );
}
