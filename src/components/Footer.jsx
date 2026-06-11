import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import Decor from './Decor.jsx';
import { COMPANY, PARTNERS, GROUP } from '../data/site.js';

const expertiseLinks = [
  { to: '/sondage', label: 'Sondage' },
  { to: '/laboratoire', label: 'Laboratoire' },
  { to: '/missions', label: 'Missions G1 à G5' },
  { to: '/loi-elan', label: 'Loi ELAN' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-plum text-[#e3d8e0]" style={{ paddingTop: 'clamp(3rem,6vw,4.5rem)' }}>
      <Decor variant="dark" />
      <div className="relative z-10 container-safe grid gap-[clamp(1.75rem,4vw,2.75rem)] pb-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <span className="inline-flex bg-white rounded-2xl px-4 py-3 shadow-sfsm">
            <Logo height={46} tone="dark" />
          </span>
          <p className="mt-[1.1rem] mb-[1.3rem] text-[#c3b6c6] text-[0.97rem] max-w-[36ch]">
            {COMPANY.baseline}. Sondages, laboratoire et missions géotechniques
            G1 à G5 pour garantir la sécurité de vos projets.
          </p>
          <Link to="/contact" className="btn btn-light btn-sm">Travaillons ensemble</Link>
        </div>

        <nav aria-label="Expertise">
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-white mb-4">Expertise</h2>
          <ul className="grid gap-3 list-none p-0">
            {expertiseLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-[#d3c7d6] hover:text-white text-[0.97rem]">{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Groupe et partenaires">
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-white mb-4">Groupe & partenaires</h2>
          <ul className="grid gap-3 list-none p-0">
            <li>
              <a href={GROUP.url} target="_blank" rel="noopener noreferrer" className="text-[#d3c7d6] hover:text-white text-[0.97rem] font-semibold">{GROUP.name} ↗</a>
            </li>
            {PARTNERS.map((p) => (
              <li key={p.nom}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[#d3c7d6] hover:text-white text-[0.97rem]">{p.nom} ↗</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-white mb-4">Contact</h2>
          <ul className="grid gap-4 list-none p-0 text-[0.97rem]">
            <li className="flex gap-2.5"><Icon name="pin" className="w-[18px] h-[18px] text-safe-rose shrink-0 mt-0.5" /><span className="text-[#d3c7d6]">{COMPANY.address}</span></li>
            <li className="flex gap-2.5"><Icon name="phone" className="w-[18px] h-[18px] text-safe-rose shrink-0 mt-0.5" /><a href={COMPANY.phoneHref} className="text-[#d3c7d6] hover:text-white font-mono">{COMPANY.phone}</a></li>
            <li className="flex gap-2.5"><Icon name="mail" className="w-[18px] h-[18px] text-safe-rose shrink-0 mt-0.5" /><a href={`mailto:${COMPANY.email}`} className="text-[#d3c7d6] hover:text-white break-all">{COMPANY.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 container-safe flex flex-wrap justify-between gap-2 py-[1.4rem] text-[0.86rem] text-[#a99bad] border-t border-white/10">
        <p>© SAFE {year} · {COMPANY.name}. Tous droits réservés.</p>
        <p><Link to="/mentions-legales" className="text-[#a99bad] hover:text-white">Mentions légales</Link></p>
      </div>
    </footer>
  );
}
