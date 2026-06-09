import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';

import camionSafe from '../assets/images/foreuse-camion-safe.webp';
import heroForeuse from '../assets/images/hero-foreuse.webp';

const chaine = [
  { icon: 'drill', t: 'Sonder', d: 'Reconnaître les sols et prélever, avec nos ateliers de sondage.' },
  { icon: 'flask', t: 'Analyser', d: 'Caractériser les sols dans notre laboratoire.' },
  { icon: 'compass', t: 'Accompagner', d: 'Conduire les missions géotechniques G1 à G5.' },
];

const valeurs = [
  { t: 'Sécurité', d: 'La sécurité des biens et des personnes guide chacune de nos interventions, sur le terrain comme à l\'étude.' },
  { t: 'Règles de l\'art', d: 'Des essais et des missions conduits dans le respect de la législation et des règles de l\'art.' },
  { t: 'Chaîne intégrée', d: 'Sondage, laboratoire et ingénierie au sein de la même structure, pour une donnée cohérente.' },
  { t: 'Proximité', d: 'Une relation directe et un conseil clair, quelle que soit la taille du projet.' },
];

// Partenaires / clients affichés publiquement sur le site officiel SAFE.
// (Noms en texte uniquement — voir A-VALIDER.md pour les logos.)
const partenaires = [
  'Foretude Ingénierie',
  'FTCS Forage',
  'STPA Forage',
  'NGE Fondations',
  'Ingeo',
  'Enedis',
  'Engie',
  'IXI Groupe',
];

export default function APropos() {
  return (
    <>
      <Seo
        title="Qui sommes-nous"
        description="SAFE Géotechnique : cabinet de géotechnique (sondages, laboratoire, missions G1 à G5) au service de la sécurité des projets de construction. Notre métier, nos valeurs, nos partenaires."
      />

      {/* ===== HERO ÉDITORIAL ===== */}
      <section className="bg-white border-b border-line">
        <div className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] lg:grid-cols-[1.05fr_0.95fr]" style={{ paddingBlock: 'clamp(2.75rem,6vw,4.75rem)' }}>
          <div>
            <p className="kicker mb-4">Qui sommes-nous</p>
            <h1 className="max-w-[16ch]">La géotechnique au service de la sécurité de vos projets</h1>
            <div className="rule my-6" />
            <p className="lead max-w-[54ch]">
              SAFE Géotechnique est un cabinet de géotechnique. Nous réalisons les
              sondages de sol, les essais en laboratoire et les missions
              d'ingénierie G1 à G5 nécessaires pour sécuriser les projets de
              construction, des ouvrages aux bâtiments et aux terrains de
              particuliers.
            </p>
          </div>
          <figure className="rounded-xl2 overflow-hidden shadow-sflg order-first lg:order-none">
            <img src={camionSafe} alt="Atelier de sondage et véhicule SAFE Géotechnique sur un chantier" className="w-full object-cover aspect-[5/4]" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ===== NOTRE MÉTIER ===== */}
      <section className="section">
        <div className="container-safe grid gap-[clamp(1.5rem,4vw,3rem)] lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-balance">Notre métier, en quelques mots</h2>
          <div className="grid gap-4 text-slate text-[1.05rem] max-w-[64ch]">
            <p>
              La géotechnique consiste à comprendre le comportement des sols pour
              sécuriser ce qu'on y construit. Avant de fonder un bâtiment, de
              tracer un réseau ou d'implanter un ouvrage, il faut savoir ce qu'il
              y a sous la surface : nature des terrains, présence d'eau, aléas
              comme le retrait-gonflement des argiles.
            </p>
            <p>
              Notre force est de réunir les maillons de cette mission. Nous
              <strong> sondons</strong> le terrain avec nos ateliers de sondage,
              nous <strong>analysons</strong> les sols dans notre laboratoire et
              nous <strong>accompagnons</strong> vos projets par les missions
              géotechniques G1 à G5. Cette continuité garantit la cohérence entre
              la donnée et la décision.
            </p>
            <p>
              <Link to="/expertise" className="font-bold inline-flex items-center gap-1.5">
                Découvrir notre expertise en détail
                <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ===== CHAÎNE INTÉGRÉE ===== */}
      <section className="section-tight">
        <div className="container-safe">
          <div className="rounded-xl2 bg-plum text-white overflow-hidden p-[clamp(1.75rem,4vw,3rem)]">
            <p className="kicker on-dark mb-6">Une chaîne intégrée</p>
            <div className="grid gap-8 md:grid-cols-3">
              {chaine.map((c, i) => (
                <div key={c.t}>
                  <span className="inline-grid place-items-center w-12 h-12 rounded-[14px] bg-white/10 text-white mb-3">
                    <Icon name={c.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="text-white text-[1.2rem] mb-1">
                    <span className="text-safe-rose mr-2">0{i + 1}</span>{c.t}
                  </h3>
                  <p className="text-white/75 text-[0.97rem]">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALEURS ===== */}
      <section className="section">
        <div className="container-safe grid gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div>
            <p className="kicker mb-3">Nos valeurs</p>
            <h2>Sécurité et règles de l'art</h2>
            <p className="lead mt-4">
              Notre engagement tient en une ligne de conduite : respecter la
              législation et les règles de l'art en matière de sécurité des biens
              et des personnes.
            </p>
            <figure className="mt-7 rounded-xl2 overflow-hidden shadow-sfmd hidden lg:block">
              <img src={heroForeuse} alt="Atelier de sondage SAFE en intervention" className="w-full object-cover aspect-[16/10]" loading="lazy" />
            </figure>
          </div>
          <div className="grid gap-x-[clamp(2rem,5vw,3rem)] gap-y-8 sm:grid-cols-2">
            {valeurs.map((v) => (
              <div key={v.t} className="pl-5 border-l-2 border-safe-rose/50">
                <h3 className="text-[1.15rem] mb-1.5">{v.t}</h3>
                <p className="text-slate">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTENAIRES ===== */}
      {/*
        Noms affichés en texte (déjà publics sur safe-geotechnique.fr).
        Logos NON publiés sans accord écrit — cf. A-VALIDER.md.
      */}
      <section className="section bg-mist border-y border-line">
        <div className="container-safe">
          <div className="max-w-[640px] mb-[clamp(1.5rem,3vw,2.25rem)]">
            <p className="kicker mb-3">Ils nous font confiance</p>
            <h2>Nos partenaires et clients</h2>
            <p className="text-slate mt-4">
              Nous travaillons aux côtés d'acteurs reconnus de la construction, du
              forage, des fondations et des réseaux.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3 mb-6">
            {partenaires.map((p) => (
              <li key={p} className="rounded-full border border-line bg-white px-4 py-2 text-[0.95rem] text-ink font-semibold shadow-sfsm">
                {p}
              </li>
            ))}
          </ul>
          <p className="note max-w-[70ch]">
            Par respect des droits d'usage des marques, nous présentons ces
            partenaires en texte et n'affichons pas leurs logos sans accord. Des
            exemples de chantiers peuvent vous être communiqués sur demande.
          </p>
        </div>
      </section>

      <CtaBand
        title="Une question sur notre démarche ?"
        text="Parlons de votre projet : sondage, laboratoire ou mission géotechnique, nous sommes à votre écoute."
      />
    </>
  );
}
