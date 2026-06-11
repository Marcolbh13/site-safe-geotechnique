import foretude from '../assets/logos/client-foretude.svg';
import ftcs from '../assets/logos/client-ftcs.webp';
import nge from '../assets/logos/client-nge.svg';
import ingeo from '../assets/logos/client-ingeo.svg';
import enedis from '../assets/logos/client-enedis.svg';
import engie from '../assets/logos/client-engie.webp';
import ixigroupe from '../assets/logos/client-ixigroupe.webp';
import stpa from '../assets/logos/stpa.webp';
import sftp from '../assets/logos/sftp.webp';
import lille from '../assets/logos/inst-lille.webp';
import mel from '../assets/logos/inst-mel.webp';
import hdf from '../assets/logos/inst-hauts-de-france.webp';
import nord from '../assets/logos/inst-nord.webp';
import pasdecalais from '../assets/logos/inst-pas-de-calais.webp';
import natran from '../assets/logos/inst-natran.webp';

// Logos repris des sites officiels (clients publics, collectivités et partenaires),
// propriété de leurs titulaires respectifs. Bande blanche pleine largeur, sans cadre.
const LOGOS = [
  { src: lille, alt: 'Ville de Lille' },
  { src: mel, alt: 'Métropole Européenne de Lille' },
  { src: hdf, alt: 'Région Hauts-de-France' },
  { src: nord, alt: 'Département du Nord' },
  { src: pasdecalais, alt: 'Département du Pas-de-Calais' },
  { src: natran, alt: 'Natran' },
  { src: enedis, alt: 'Enedis' },
  { src: engie, alt: 'Engie' },
  { src: nge, alt: 'NGE Fondations' },
  { src: ingeo, alt: 'Ingeo' },
  { src: ixigroupe, alt: 'IXI Groupe' },
  { src: foretude, alt: 'Foretude Ingénierie' },
  { src: ftcs, alt: 'FTCS Forage' },
  { src: stpa, alt: 'STPA Forage' },
  { src: sftp, alt: 'SFTP Forage' },
];

export default function ClientsCarousel() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <div className="bg-white border-y border-line py-9" aria-label="Nos partenaires et clients">
      <div className="marquee">
        <ul className="marquee__track list-none p-0 items-center">
          {doubled.map((l, i) => (
            <li
              key={`${l.alt}-${i}`}
              aria-hidden={i >= LOGOS.length ? 'true' : undefined}
              className="shrink-0 flex items-center justify-center h-14 px-9"
            >
              <img src={l.src} alt={l.alt} className="max-h-11 w-auto object-contain" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
