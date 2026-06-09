import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import DepthScale from '../components/DepthScale.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { MISSIONS } from '../data/site.js';

import camionSafe from '../assets/images/foreuse-camion-safe.webp';
import heroForeuse from '../assets/images/hero-foreuse.webp';
import laboEchantillon from '../assets/images/labo-echantillon.webp';
import laboProctor from '../assets/images/labo-proctor.webp';
import laboPresse from '../assets/images/labo-presse.webp';

const sondages = [
  { icon: 'drill', t: 'Forage destructif et semi-destructif', d: 'Reconnaissance de la stratigraphie et des horizons rencontrés.' },
  { icon: 'core', t: 'Carottage', d: 'Carottes intactes pour la description lithologique et les essais en laboratoire.' },
  { icon: 'gauge', t: 'Essai pressiométrique', d: 'Caractéristiques géomécaniques des sols pour les calculs de dimensionnement.' },
  { icon: 'water', t: 'Pose de piézomètre et suivi', d: 'Niveau des eaux souterraines et prélèvements, avec suivi saisonnier (déclaration préalable auprès de l\'administration).' },
  { icon: 'cavity', t: 'Recherche de cavités souterraines', d: 'Forages destructifs et études microgravimétriques pour caractériser la géométrie des vides.' },
  { icon: 'flask', t: 'Prélèvements environnementaux', d: 'Évaluation de la pollution des sols et des eaux, échantillons analysés en laboratoire.' },
];

const identification = [
  ['Classification GTR', 'Nature et possibilité de réemploi des sols.'],
  ['Analyse granulométrique', 'Proportion des tailles de grains par tamisage.'],
  ['Analyse sédimentométrique', 'Granulométrie de la fraction ≤ 80 µm.'],
  ['Teneur en eau', 'État hydrique du sol.'],
  ['VBS · bleu de méthylène', 'Degré d\'argilosité des sols.'],
  ['Limites d\'Atterberg', 'Plasticité et retrait-gonflement des argiles.'],
  ['Masse volumique', 'Sur éléments de roches.'],
];
const mecaniques = [
  ['Proctor + IPI', 'Portance d\'un matériau (compactage, indice portant immédiat).'],
  ['Cisaillement à la boîte de Casagrande', 'Cohésion et angle de frottement du sol.'],
  ['Essais triaxiaux (UU, CU+u, CD)', 'Cohésion, angle de frottement interne et de dilatance.'],
];

function SectionHead({ n, label, title }) {
  return (
    <Reveal className="flex items-end gap-5 mb-[clamp(1.75rem,4vw,2.75rem)]">
      <span className="font-mono font-semibold text-[clamp(2.4rem,5vw,3.4rem)] leading-none text-transparent bg-clip-text bg-safe-gradient">{n}</span>
      <div><p className="label mb-2">{label}</p><h2>{title}</h2></div>
    </Reveal>
  );
}
function EssaiRow({ t, d }) {
  return (
    <li className="flex gap-3 py-2.5 border-b border-line last:border-0">
      <Icon name="check" className="w-[18px] h-[18px] text-safe-magenta shrink-0 mt-1" />
      <span><span className="font-semibold text-ink">{t}</span><span className="block text-slate text-[0.92rem]">{d}</span></span>
    </li>
  );
}

export default function Expertise() {
  return (
    <>
      <Seo title="Notre expertise géotechnique"
        description="Sondages (forage, pressiomètre, piézométrie, cavités), essais en laboratoire et missions géotechniques G1 à G5 : l'expertise complète de SAFE Géotechnique." />

      {/* HERO */}
      <section className="relative overflow-hidden bg-plum text-white">
        <img src={camionSafe} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg,rgba(22,15,27,.95) 35%,rgba(110,35,80,.6) 100%)' }} />
        <div className="container-safe relative" style={{ paddingBlock: 'clamp(3rem,7vw,5.5rem)' }}>
          <p className="label on-dark mb-4">Notre expertise</p>
          <h1 className="text-white max-w-[20ch]">Du sondage à l'étude, une géotechnique complète</h1>
          <p className="mt-5 max-w-[62ch] text-white/85 text-[1.12rem]">
            SAFE Géotechnique réalise les sondages sur le terrain, les essais en
            laboratoire et les missions d'ingénierie G1 à G5 pour assurer la
            faisabilité et la sécurité de vos projets.
          </p>
          <nav className="mt-7 flex flex-wrap gap-2.5 font-mono text-[0.85rem]" aria-label="Sections">
            {[['#sondage', 'Sondage'], ['#laboratoire', 'Laboratoire'], ['#missions', 'Missions G1–G5']].map(([h, l]) => (
              <a key={h} href={h} className="rounded-full border border-white/25 px-4 py-2 text-white/90 hover:bg-white/10 transition-colors">{l}</a>
            ))}
          </nav>
        </div>
      </section>

      {/* 01 SONDAGE */}
      <section id="sondage" className="section">
        <div className="container-safe">
          <SectionHead n="01" label="Sondage" title="Reconnaissance des sols sur le terrain" />
          <div className="grid items-start gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {sondages.map((p, i) => (
                <Reveal key={p.t} delay={i * 60} className="rounded-[16px] border border-line bg-cloud p-5">
                  <span className="icon-badge mb-3"><Icon name={p.icon} /></span>
                  <h3 className="text-[1.05rem] mb-1.5">{p.t}</h3>
                  <p className="text-slate text-[0.92rem]">{p.d}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120} className="lg:sticky lg:top-[100px]">
              <figure className="rounded-xl2 overflow-hidden shadow-sfmd">
                <img src={heroForeuse} alt="Atelier de sondage SAFE EMCI sur un chantier" className="w-full object-cover aspect-[4/5]" loading="lazy" />
              </figure>
              <div className="mt-5 rounded-2xl border border-line bg-white p-5">
                <p className="label mb-3">Nos ateliers EMCI</p>
                <DepthScale className="w-full max-w-[230px] h-auto mx-auto" />
                <p className="text-muted text-[0.85rem] mt-3 text-center">Sondages pressiométriques, destructifs et carottés, dans le respect des normes en vigueur.</p>
              </div>
              <p className="mt-4 text-slate text-[0.92rem]">Reconnaissance de fondations d'ouvrages existants également réalisée.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 LABORATOIRE */}
      <section id="laboratoire" className="section bg-mist border-y border-line">
        <div className="container-safe">
          <SectionHead n="02" label="Laboratoire" title="Identifier les sols par leur nature et leur résistance" />
          <div className="grid gap-4 sm:grid-cols-3 mb-[clamp(1.75rem,4vw,2.5rem)]">
            {[[laboEchantillon, 'Préparation des échantillons', 'Préparation d\'un échantillon de sol'],
              [laboProctor, 'Compactage (Proctor + IPI)', 'Essai de compactage Proctor'],
              [laboPresse, 'Essai mécanique', 'Essai mécanique sur échantillon']].map(([src, cap, alt], i) => (
              <Reveal key={cap} delay={i * 70}>
                <figure className="rounded-xl2 overflow-hidden shadow-sfmd bg-white">
                  <img src={src} alt={alt} className="w-full object-cover aspect-[4/3]" loading="lazy" />
                  <figcaption className="px-3.5 py-2.5 text-[0.85rem] text-muted">{cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] lg:grid-cols-2">
            <Reveal className="card">
              <h3 className="text-[1.1rem] mb-1 flex items-center gap-2"><Icon name="microscope" className="w-5 h-5 text-safe-magenta" /> Identification et état des sols</h3>
              <ul className="mt-2">{identification.map(([t, d]) => <EssaiRow key={t} t={t} d={d} />)}</ul>
            </Reveal>
            <Reveal delay={120} className="card">
              <h3 className="text-[1.1rem] mb-1 flex items-center gap-2"><Icon name="target" className="w-5 h-5 text-safe-magenta" /> Essais mécaniques</h3>
              <ul className="mt-2">{mecaniques.map(([t, d]) => <EssaiRow key={t} t={t} d={d} />)}</ul>
              <p className="note mt-4 text-[0.92rem]">Cisaillement de Casagrande et essai triaxial mesurent la résistance du sol dans des conditions différentes, choisies selon le besoin de l'étude.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 MISSIONS */}
      <section id="missions" className="section">
        <div className="container-safe">
          <SectionHead n="03" label="Ingénierie · Missions G1 à G5" title="De l'étude préalable au diagnostic d'ouvrage" />
          <Reveal className="lead max-w-[70ch] mb-8 -mt-2">
            Interprétation des essais, recherche des documents géologiques et
            cartographiques d'un site : nous étudions le comportement mécanique
            des sols et des roches pour assurer la faisabilité de vos projets.
          </Reveal>
          <ol className="grid gap-4">
            {MISSIONS.map((m, i) => (
              <Reveal as="li" key={m.code} delay={i * 50} className="flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-[16px] border border-line bg-white p-5 sm:items-center">
                <span className="inline-grid place-items-center shrink-0 w-14 h-14 rounded-[14px] bg-safe-gradient text-white font-mono font-semibold text-[1.2rem]">{m.code}</span>
                <div><h3 className="text-[1.08rem] mb-1">{m.t}</h3><p className="text-slate text-[0.95rem]">{m.d}</p></div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-6 rounded-[16px] bg-safe-soft border border-line p-5 flex flex-wrap items-center gap-4 justify-between">
            <p className="text-slate flex-1 min-w-[260px]">Vous vendez un terrain à bâtir ? La mission G1 peut être exigée par la loi ELAN.</p>
            <Link to="/loi-elan" className="btn btn-ghost btn-sm">En savoir plus sur la loi ELAN <Icon name="arrow" className="arrow w-[16px] h-[16px]" /></Link>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Un besoin précis sur votre projet ?" text="Sondage, essai en laboratoire ou mission G1 à G5 : décrivez-nous votre site, nous proposons la solution adaptée." />
    </>
  );
}
