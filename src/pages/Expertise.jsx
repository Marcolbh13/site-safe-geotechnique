import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';

import camionSafe from '../assets/images/foreuse-camion-safe.webp';
import heroForeuse from '../assets/images/hero-foreuse.webp';
import laboEchantillon from '../assets/images/labo-echantillon.webp';
import laboProctor from '../assets/images/labo-proctor.webp';
import laboPresse from '../assets/images/labo-presse.webp';

const chaine = [
  { n: '01', t: 'Sonder', d: 'Reconnaître les sols sur le terrain et prélever les échantillons.', href: '#sondages' },
  { n: '02', t: 'Analyser', d: 'Caractériser les sols au laboratoire, essais à l\'appui.', href: '#laboratoire' },
  { n: '03', t: 'Accompagner', d: 'Conduire les missions géotechniques G1 à G5.', href: '#missions' },
];

const sondages = [
  { icon: 'drill', t: 'Forage destructif et semi-destructif', d: 'Reconnaissance de la stratigraphie et des horizons rencontrés.' },
  { icon: 'layers', t: 'Carottage', d: 'Carottes intactes pour la description lithologique et les essais en laboratoire.' },
  { icon: 'compass', t: 'Essai pressiométrique', d: 'Mesure des caractéristiques géomécaniques des sols pour les calculs de dimensionnement.' },
  { icon: 'water', t: 'Pose de piézomètre et suivi', d: 'Niveau des eaux souterraines et prélèvements, avec suivi saisonnier (déclaration préalable auprès de l\'administration).' },
  { icon: 'cavity', t: 'Recherche de cavités souterraines', d: 'Forages destructifs et études microgravimétriques pour caractériser la géométrie des vides.' },
  { icon: 'flask', t: 'Prélèvements environnementaux', d: 'Évaluation de la pollution des sols et des eaux, échantillons analysés en laboratoire.' },
];

// Laboratoire : liste exacte des essais (source : site SAFE).
const essais = {
  identification: [
    { t: 'Classification GTR', d: 'Nature et possibilité de réemploi des sols.' },
    { t: 'Analyse granulométrique', d: 'Proportion des tailles de grains par tamisage.' },
    { t: 'Analyse sédimentométrique', d: 'Granulométrie de la fraction inférieure ou égale à 80 µm.' },
    { t: 'Teneur en eau', d: 'État hydrique du sol.' },
    { t: 'VBS · essai au bleu de méthylène', d: 'Degré d\'argilosité des sols.' },
    { t: 'Limites d\'Atterberg', d: 'Plasticité du sol et caractérisation du retrait-gonflement des argiles.' },
    { t: 'Masse volumique', d: 'Sur éléments de roches.' },
  ],
  mecaniques: [
    { t: 'Proctor + IPI', d: 'Portance d\'un matériau (compactage et indice portant immédiat).' },
    { t: 'Cisaillement à la boîte de Casagrande', d: 'Cohésion et angle de frottement du sol.' },
    { t: 'Essais triaxiaux (UU, CU+u, CD)', d: 'Cohésion, angle de frottement interne et de dilatance.' },
  ],
};

const missions = [
  { code: 'G1', t: 'Étude géotechnique préalable (ES + PGC)', d: 'Première identification des risques géotechniques du site. En amont : étude préliminaire, esquisse ou APS.' },
  { code: 'G2', t: 'Étude géotechnique de conception', d: 'Élaboration du projet des ouvrages géotechniques, en phases AVP, PRO et DCE/ACT. À la charge du maître d\'ouvrage.' },
  { code: 'G3', t: 'Étude et suivi géotechniques d\'exécution', d: 'Réduction des risques résiduels par des mesures correctives mises en œuvre à temps. Confiée à l\'entrepreneur, sauf disposition contraire.' },
  { code: 'G4', t: 'Supervision géotechnique d\'exécution', d: 'Vérification de la conformité des hypothèses géotechniques retenues. À la charge du maître d\'ouvrage.' },
  { code: 'G5', t: 'Diagnostic géotechnique', d: 'Étude ponctuelle d\'un ou plusieurs éléments géotechniques spécifiques, pendant le projet ou la vie de l\'ouvrage.' },
];

function EssaiItem({ t, d }) {
  return (
    <li className="flex gap-3 py-2.5 border-b border-line/70 last:border-0">
      <Icon name="check" className="w-[18px] h-[18px] text-safe-magenta shrink-0 mt-1" />
      <span>
        <span className="font-semibold text-ink">{t}</span>
        <span className="block text-slate text-[0.92rem]">{d}</span>
      </span>
    </li>
  );
}

export default function Expertise() {
  return (
    <>
      <Seo
        title="Notre expertise géotechnique"
        description="Sondages (forage, carottage, pressiomètre, piézométrie, recherche de cavités), essais en laboratoire et missions géotechniques G1 à G5 : l'expertise complète de SAFE Géotechnique."
      />

      {/* ===== HERO SOMBRE (foreuse SAFE) ===== */}
      <section className="relative overflow-hidden bg-plum text-white">
        <img src={camionSafe} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(27,19,32,0.95) 35%, rgba(122,42,95,0.6) 100%)' }} />
        <div className="container-safe relative" style={{ paddingBlock: 'clamp(3rem,7vw,5.5rem)' }}>
          <p className="kicker on-dark mb-[0.9rem]">Notre expertise</p>
          <h1 className="text-white max-w-[20ch]">Du sondage à l'étude, une géotechnique complète</h1>
          <p className="mt-5 max-w-[60ch] text-white/85 text-[1.12rem]">
            SAFE Géotechnique réalise les sondages sur le terrain, les essais en
            laboratoire et les missions d'ingénierie G1 à G5 pour sécuriser vos
            projets de construction.
          </p>
        </div>
      </section>

      {/* ===== CHAÎNE ===== */}
      <section className="section-tight">
        <div className="container-safe grid gap-6 md:grid-cols-3">
          {chaine.map((c) => (
            <a key={c.n} href={c.href} className="group flex items-start gap-4 rounded-xl2 border border-line bg-white p-6 shadow-sfsm transition hover:shadow-sfmd hover:border-safe-rose/40">
              <span className="num-eyebrow">{c.n}</span>
              <span>
                <span className="block text-[1.15rem] font-bold text-ink">{c.t}</span>
                <span className="block text-slate text-[0.96rem] mt-1">{c.d}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ===== 01 · SONDAGES ===== */}
      <section id="sondages" className="section border-t border-line">
        <div className="container-safe">
          <header className="flex items-end gap-5 mb-[clamp(1.75rem,4vw,2.75rem)]">
            <span className="num-eyebrow">01</span>
            <div>
              <p className="kicker mb-2">Sondages</p>
              <h2>Reconnaissance des sols sur le terrain</h2>
            </div>
          </header>

          <div className="grid items-start gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {sondages.map((p) => (
                <div key={p.t} className="rounded-[16px] border border-line bg-cloud p-5">
                  <span className="icon-badge mb-3"><Icon name={p.icon} /></span>
                  <h3 className="text-[1.05rem] mb-1.5">{p.t}</h3>
                  <p className="text-slate text-[0.93rem]">{p.d}</p>
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-[100px]">
              <figure className="rounded-xl2 overflow-hidden shadow-sfmd">
                <img src={heroForeuse} alt="Atelier de sondage SAFE EMCI 4.50 sur un chantier" className="w-full object-cover aspect-[4/5]" loading="lazy" />
              </figure>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="stat"><b>40 m</b><span>Atelier EMCI 4.50</span></div>
                <div className="stat"><b>80 m</b><span>Atelier EMCI 7.50</span></div>
              </div>
              <p className="mt-4 text-slate text-[0.93rem]">
                Profondeur de sondage selon l'atelier mobilisé et l'accessibilité
                du site. Reconnaissance de fondations d'ouvrages existants
                également réalisée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02 · LABORATOIRE ===== */}
      <section id="laboratoire" className="section bg-mist border-t border-line">
        <div className="container-safe">
          <header className="flex items-end gap-5 mb-[clamp(1.75rem,4vw,2.75rem)]">
            <span className="num-eyebrow">02</span>
            <div>
              <p className="kicker mb-2">Laboratoire</p>
              <h2>Identifier et caractériser les sols</h2>
            </div>
          </header>

          <div className="grid gap-4 sm:grid-cols-3 mb-[clamp(1.75rem,4vw,2.5rem)]">
            {[
              { src: laboEchantillon, alt: 'Préparation d\'un échantillon de sol au laboratoire SAFE', cap: 'Préparation des échantillons' },
              { src: laboProctor, alt: 'Essai de compactage Proctor sur moule normalisé', cap: 'Compactage (Proctor + IPI)' },
              { src: laboPresse, alt: 'Essai mécanique sur échantillon de sol', cap: 'Essai mécanique' },
            ].map((g) => (
              <figure key={g.cap} className="rounded-xl2 overflow-hidden shadow-sfmd bg-white">
                <img src={g.src} alt={g.alt} className="w-full object-cover aspect-[4/3]" loading="lazy" />
                <figcaption className="px-3.5 py-2.5 text-[0.85rem] text-muted">{g.cap}</figcaption>
              </figure>
            ))}
          </div>

          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] lg:grid-cols-2">
            <div className="card">
              <h3 className="text-[1.1rem] mb-1 flex items-center gap-2">
                <Icon name="microscope" className="w-5 h-5 text-safe-magenta" /> Identification et état des sols
              </h3>
              <ul className="mt-2">
                {essais.identification.map((e) => <EssaiItem key={e.t} {...e} />)}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-[1.1rem] mb-1 flex items-center gap-2">
                <Icon name="target" className="w-5 h-5 text-safe-magenta" /> Essais mécaniques
              </h3>
              <ul className="mt-2">
                {essais.mecaniques.map((e) => <EssaiItem key={e.t} {...e} />)}
              </ul>
              <p className="note mt-4 text-[0.92rem]">
                L'essai triaxial et le cisaillement à la boîte de Casagrande
                déterminent la résistance du sol dans des conditions différentes,
                choisies selon le besoin de l'étude.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 03 · MISSIONS G1 À G5 ===== */}
      <section id="missions" className="section border-t border-line">
        <div className="container-safe">
          <header className="flex items-end gap-5 mb-[clamp(1.75rem,4vw,2.75rem)]">
            <span className="num-eyebrow">03</span>
            <div>
              <p className="kicker mb-2">Ingénierie · Missions G1 à G5</p>
              <h2>De l'étude préalable au diagnostic d'ouvrage</h2>
            </div>
          </header>

          <ol className="grid gap-4">
            {missions.map((m) => (
              <li key={m.code} className="flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-[16px] border border-line bg-white p-5 sm:items-center">
                <span className="inline-grid place-items-center shrink-0 w-14 h-14 rounded-[14px] bg-safe-gradient text-white font-extrabold text-[1.25rem]">
                  {m.code}
                </span>
                <div>
                  <h3 className="text-[1.08rem] mb-1">{m.t}</h3>
                  <p className="text-slate text-[0.95rem]">{m.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-[16px] bg-safe-soft border border-line p-5">
            <p className="text-slate flex-1 min-w-[260px]">
              Nos études de conception s'appuient sur des outils de calcul
              spécialisés (FoxTech, Carrara, Talren) pour le dimensionnement et la
              vérification de stabilité des ouvrages.
            </p>
            <Link to="/loi-elan" className="btn btn-ghost btn-sm">
              Vente de terrain : la loi Élan
              <Icon name="arrow" className="arrow w-[16px] h-[16px]" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Un besoin précis sur votre projet ?"
        text="Sondage, essai en laboratoire ou mission G1 à G5 : décrivez-nous votre site, nous proposons la solution adaptée."
      />
    </>
  );
}
