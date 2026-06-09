import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { COMPANY } from '../data/site.js';

const cols = [
  {
    title: 'Expertise',
    links: [
      { to: '/expertise#sondage', label: 'Sondage' },
      { to: '/expertise#laboratoire', label: 'Laboratoire' },
      { to: '/expertise#missions', label: 'Missions G1 à G5' },
      { to: '/loi-elan', label: 'Loi ELAN' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-plum text-[#d8cfdb] strata" style={{ paddingTop: 'clamp(3rem,6vw,4.5rem)' }}>
      <div className="container-safe grid gap-[clamp(1.75rem,4vw,3rem)] pb-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.3fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo height={48} variant="light" />
          <p className="mt-[1.1rem] mb-[1.3rem] text-[#b6a9ba] text-[0.97rem] max-w-[36ch]">
            {COMPANY.baseline}. Sondages, laboratoire et missions géotechniques
            G1 à G5 pour garantir la sécurité de vos projets.
          </p>
          <Link to="/contact" className="btn btn-light btn-sm">Travaillons ensemble</Link>
        </div>

        {cols.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-white mb-4">{col.title}</h2>
            <ul className="grid gap-3 list-none p-0">
              {col.links.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-[#cabfce] hover:text-white text-[0.97rem]">{l.label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-white mb-4">Contact</h2>
          <ul className="grid gap-4 list-none p-0 text-[0.97rem]">
            <li className="flex gap-2.5"><Icon name="pin" className="w-[18px] h-[18px] text-safe-rose shrink-0 mt-0.5" /><span className="text-[#cabfce]">{COMPANY.address}</span></li>
            <li className="flex gap-2.5"><Icon name="phone" className="w-[18px] h-[18px] text-safe-rose shrink-0 mt-0.5" /><a href={COMPANY.phoneHref} className="text-[#cabfce] hover:text-white font-mono">{COMPANY.phone}</a></li>
            <li className="flex gap-2.5"><Icon name="mail" className="w-[18px] h-[18px] text-safe-rose shrink-0 mt-0.5" /><a href={`mailto:${COMPANY.email}`} className="text-[#cabfce] hover:text-white">{COMPANY.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="container-safe flex flex-wrap justify-between gap-2 py-[1.4rem] text-[0.86rem] text-[#8f8295] border-t border-white/10">
        <p>© SAFE {year} — {COMPANY.name}. Tous droits réservés.</p>
        <p><Link to="/mentions-legales" className="text-[#8f8295] hover:text-white">Mentions légales</Link></p>
      </div>
    </footer>
  );
}
