import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';

import heroForeuse from '../assets/images/hero-foreuse.webp';
import camionSafe from '../assets/images/foreuse-camion-safe.webp';
import laboPresse from '../assets/images/labo-presse.webp';
import forageChamp from '../assets/images/forage-champ.webp';

const metiers = [
  {
    icon: 'drill',
    title: 'Sondages',
    to: '/sondages',
    text: "Forage destructif et semi-destructif, carottage, prélèvements et piézométrie. Nos équipes interviennent sur le terrain avec un parc de machines dédié.",
  },
  {
    icon: 'flask',
    title: 'Laboratoire',
    to: '/laboratoire',
    text: "Essais sur sols réalisés selon un protocole normalisé : identification, compactage, résistance mécanique, dont l'essai triaxial.",
  },
  {
    icon: 'compass',
    title: 'Ingénierie',
    to: '/ingenierie',
    text: "Missions géotechniques G1 et G2, de l'avant-projet à la phase projet, appuyées sur des outils de calcul reconnus.",
  },
];

const projets = [
  {
    icon: 'road',
    title: 'Ouvrages linéaires',
    text: "Voiries, réseaux, infrastructures et projets d'énergie : des reconnaissances adaptées au tracé et aux contraintes du sol.",
  },
  {
    icon: 'building',
    title: 'Bâtiments',
    text: "Logements, équipements publics, locaux d'activité : nous étudions la portance et le comportement des sols sous vos fondations.",
  },
  {
    icon: 'home',
    title: 'Particuliers',
    text: "Vous faites construire ou achetez un terrain ? Nous réalisons l'étude géotechnique adaptée à votre projet, dans un cadre clair.",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="SAFE Géotechnique | Sondages, laboratoire et ingénierie des sols"
        description="SAFE Géotechnique accompagne vos projets de construction : sondages de sol, essais en laboratoire et ingénierie géotechnique, pour les ouvrages linéaires, les bâtiments et les particuliers."
      />

      {/* ===== HERO ===== */}
      <section className="border-b border-line bg-safe-soft overflow-hidden">
        <div
          className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] lg:grid-cols-2"
          style={{ paddingBlock: 'clamp(2.75rem,6vw,5rem)' }}
        >
          <div>
            <p className="kicker mb-[0.9rem]">
              Géotechnique · Sondages · Laboratoire · Ingénierie
            </p>
            <h1 className="animate-fade-up">La géotechnique au service de vos projets</h1>
            <p className="lead mt-5 max-w-[52ch]">
              Des ouvrages linéaires aux bâtiments, et jusqu'aux projets de
              particuliers, SAFE Géotechnique reconnaît les sols, les analyse en
              laboratoire et vous accompagne par l'ingénierie. Une chaîne
              complète, du terrain à l'étude.
            </p>
            <div className="mt-8 flex flex-wrap gap-[0.85rem]">
              <Link to="/contact" className="btn btn-primary">
                Demander un devis <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
              </Link>
              <Link to="/sondages" className="btn btn-ghost">
                Découvrir nos sondages
              </Link>
            </div>
          </div>

          <figure className="relative rounded-xl2 overflow-hidden shadow-sflg order-first lg:order-none">
            <img
              src={heroForeuse}
              alt="Foreuse de sondage SAFE déployée dans un champ, parc éolien en arrière-plan"
              className="w-full h-full object-cover aspect-[4/3]"
              width="1600"
              height="1200"
              fetchpriority="high"
            />
            <figcaption className="absolute inset-x-0 bottom-0 px-[1.1rem] pt-6 pb-[0.8rem] text-white text-[0.82rem] bg-gradient-to-t from-black/70 to-transparent">
              Atelier de sondage SAFE sur chantier.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== TROIS MÉTIERS ===== */}
      <section className="section">
        <div className="container-safe">
          <div className="max-w-[720px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="kicker mb-[0.9rem]">Nos métiers</p>
            <h2>Trois savoir-faire, une seule équipe</h2>
            <p className="lead mt-4">
              Sonder, analyser, concevoir : nous maîtrisons la reconnaissance
              des sols de bout en bout, ce qui garantit la cohérence entre la
              donnée de terrain et la recommandation d'ingénierie.
            </p>
          </div>

          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-3">
            {metiers.map((m) => (
              <Link key={m.to} to={m.to} className="card card-link flex flex-col">
                <span className="icon-badge mb-[1.1rem]">
                  <Icon name={m.icon} />
                </span>
                <h3 className="mb-[0.6rem]">{m.title}</h3>
                <p className="text-slate">{m.text}</p>
                <span className="mt-auto pt-[1.1rem] inline-flex items-center gap-1.5 font-bold text-safe-magenta text-[0.95rem]">
                  En savoir plus <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BANNIÈRE PLEINE LARGEUR ===== */}
      <section className="relative">
        <div className="relative h-[clamp(280px,42vw,440px)] overflow-hidden">
          <img
            src={forageChamp}
            alt="Atelier de forage du groupe en intervention dans un champ, éoliennes au loin"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum/85 via-plum/55 to-transparent" />
          <div className="container-safe relative h-full flex items-center">
            <div className="max-w-[560px] text-white">
              <p
                className="kicker mb-[0.9rem]"
                style={{ color: '#f3c6df' }}
              >
                Du terrain à la donnée
              </p>
              <h2 className="text-white">Une présence de terrain, partout où vos projets l'exigent</h2>
              <p className="mt-4 text-white/90 text-[1.05rem]">
                Nos ateliers se déplacent sur vos sites, en milieu urbain comme
                en zone rurale, pour reconnaître les sols dans les meilleures
                conditions de sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AU SERVICE DE VOS PROJETS ===== */}
      <section className="section bg-mist">
        <div className="container-safe">
          <div className="max-w-[720px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="kicker mb-[0.9rem]">Au service de vos projets</p>
            <h2>Chaque sol a son histoire, chaque projet sa solution</h2>
            <p className="lead mt-4">
              Nous adaptons nos moyens à la nature de votre opération, sans
              jamais opposer les grands chantiers aux projets plus modestes.
            </p>
          </div>

          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-3">
            {projets.map((p) => (
              <div key={p.title} className="card">
                <span className="icon-badge mb-[1.1rem]">
                  <Icon name={p.icon} />
                </span>
                <h3 className="mb-[0.6rem]">{p.title}</h3>
                <p className="text-slate">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LABORATOIRE EN AVANT ===== */}
      <section className="section">
        <div className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] md:grid-cols-2">
          <figure className="rounded-xl2 overflow-hidden shadow-sfmd order-first md:order-none">
            <img
              src={laboPresse}
              alt="Technicien SAFE réalisant un essai mécanique sur un échantillon de sol en laboratoire"
              className="w-full h-full object-cover aspect-[5/4]"
              loading="lazy"
            />
          </figure>
          <div>
            <p className="kicker mb-[0.9rem]">Notre laboratoire</p>
            <h2>De l'échantillon à la donnée fiable</h2>
            <p className="lead mt-4">
              Les sols prélevés sur le terrain sont analysés dans notre
              laboratoire, selon un protocole normalisé. Nous suivons les normes
              en vigueur pour la conduite de nos essais.
            </p>
            <ul className="ticks mt-6">
              <li>
                <strong>Identification et état des sols</strong> : granulométrie,
                limites, Valeur au bleu du sol (VBS).
              </li>
              <li>
                <strong>Compactage</strong> : essai Proctor sur moule normalisé.
              </li>
              <li>
                <strong>Résistance mécanique</strong> : essai triaxial et essai
                de cisaillement à la boîte (Casagrande).
              </li>
            </ul>
            <div className="mt-7">
              <Link to="/laboratoire" className="btn btn-ghost">
                Le laboratoire en détail{' '}
                <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPROCHE ===== */}
      <section className="section bg-mist">
        <div className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] md:grid-cols-2">
          <div>
            <p className="kicker mb-[0.9rem]">Notre approche</p>
            <h2>Une géotechnique rigoureuse, naturelle et humaine</h2>
            <p className="lead mt-4">
              Notre principal objectif est de sécuriser vos projets par une
              reconnaissance des sols fiable et lisible. Nous y associons une
              relation directe, faite d'écoute et de conseil.
            </p>
            <ul className="ticks mt-6">
              <li>
                <strong>Une chaîne intégrée</strong> : sondage, laboratoire et
                ingénierie au sein de la même équipe.
              </li>
              <li>
                <strong>Une équipe de spécialistes</strong> dont nous
                entretenons les compétences par la formation continue.
              </li>
              <li>
                <strong>Le respect des normes en vigueur</strong> à chaque étape
                de l'étude.
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-[0.85rem]">
              <Link to="/references" className="btn btn-ghost">
                Voir nos références{' '}
                <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
              </Link>
              <Link to="/rse" className="btn btn-ghost">
                Notre engagement RSE
              </Link>
            </div>
          </div>
          <figure className="rounded-xl2 overflow-hidden shadow-sfmd order-first md:order-none">
            <img
              src={camionSafe}
              alt="Foreuse de sondage chenillée et fourgon SAFE installés sur un chantier en bord de route"
              className="w-full h-full object-cover aspect-[5/4]"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
