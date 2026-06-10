import foretude from '../assets/logos/client-foretude.svg';
import ftcs from '../assets/logos/client-ftcs.svg';
import nge from '../assets/logos/client-nge.svg';
import ingeo from '../assets/logos/client-ingeo.svg';
import enedis from '../assets/logos/client-enedis.svg';
import engie from '../assets/logos/client-engie.webp';
import ixigroupe from '../assets/logos/client-ixigroupe.webp';
import stpa from '../assets/logos/stpa.webp';
import sftp from '../assets/logos/sftp.webp';

// Logos repris du site officiel SAFE / sites des partenaires (propriété de leurs
// titulaires respectifs). Carrousel sur une seule ligne.
const LOGOS = [
  { src: foretude, alt: 'Foretude Ingénierie' },
  { src: ftcs, alt: 'FTCS Forage' },
  { src: stpa, alt: 'STPA Forage' },
  { src: sftp, alt: 'SFTP Forage' },
  { src: nge, alt: 'NGE Fondations' },
  { src: ingeo, alt: 'Ingeo' },
  { src: enedis, alt: 'Enedis' },
  { src: engie, alt: 'Engie' },
  { src: ixigroupe, alt: 'IXI Groupe' },
];

export default function ClientsCarousel() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <div className="marquee py-1.5" aria-label="Nos partenaires et clients">
      <ul className="marquee__track list-none p-0">
        {doubled.map((l, i) => (
          <li key={`${l.alt}-${i}`} aria-hidden={i >= LOGOS.length ? 'true' : undefined}
            className="shrink-0 flex items-center justify-center h-[78px] min-w-[160px] px-7 rounded-2xl bg-white border border-line shadow-sfsm">
            <img src={l.src} alt={l.alt} className="max-h-11 max-w-[120px] w-auto object-contain" loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
}
