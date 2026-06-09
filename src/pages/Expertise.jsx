import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import DepthScale from '../components/DepthScale.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { MISSIONS } from '../data/site.js';

import heroForeuse from '../assets/images/hero-foreuse.webp';
import laboEchantillon from '../assets/images/labo-echantillon.webp';
import laboProctor from '../assets/images/labo-proctor.webp';
import laboPresse from '../assets/images/labo-presse.webp';

const sondages = [
  { icon: 'drill', t: 'Forage destructif et semi-destructif', d: "Reconnaissance rapide de la stratigraphie et des horizons traversés, pour dresser la coupe du sol." },
  { icon: 'core', t: 'Carottage', d: 'Prélèvement de carottes intactes : observation lithologique et sélection des échantillons pour le laboratoire.' },
  { icon: 'gauge', t: 'Essai pressiométrique', d: 'Mesure in situ des caractéristiques géomécaniques des sols, base des calculs de dimensionnement.' },
  { icon: 'water', t: 'Pose de piézomètre et suivi', d: "Mesure du niveau des eaux souterraines et prélèvements, avec suivi saisonnier (déclaration préalable auprès de l'administration)." },
  { icon: 'cavity', t: 'Recherche de cavités souterraines', d: 'Forages destructifs et études microgravimétriques pour localiser et caractériser la géométrie des vides.' },
  { icon: 'flask', t: 'Prélèvements environnementaux', d: 'Évaluation de la pollution des sols et des eaux ; échantillons analysés en laboratoire.' },
];

// Laboratoire — chaque essai expliqué en langage clair (« à quoi ça sert »).
const identification = [
  ['Classification GTR', "classe le sol selon sa nature et indique s'il est réemployable en remblai."],
  ['Granulométrie & sédimentométrie', 'mesurent la répartition des tailles de grains, du sable aux fines (≤ 80 µm).'],
  ['Limites d’Atterberg', 'situent les seuils de plasticité et révèlent la sensibilité au retrait-gonflement des argiles.'],
  ['Valeur au bleu (VBS)', "quantifie l'argilosité du sol, déterminante pour son comportement à l'eau."],
  ['Teneur en eau & masse volumique', "décrivent l'état hydrique du sol et la densité des éléments de roche."],
];
const mecaniques = [
  ['Proctor + IPI', "définissent la teneur en eau optimale de compactage et la portance immédiate d'un matériau."],
  ['Cisaillement à la boîte (Casagrande)', "donne la cohésion et l'angle de frottement, sous une sollicitation simple."],
  ['Essais triaxiaux (UU, CU+u, CD)', "mesurent cohésion, angle de frottement interne et dilatance dans des conditions de drainage maîtrisées."],
];

function SectionHead({ n, label, title }) {
  return (
    <Reveal className="flex items-end gap-5 mb-[clamp(1.75rem,4vw,2.75rem)]">
      <span className="font-mono font-semibold text-[clamp(2.4rem,5vw,3.4rem)] leading-none text-transparent bg-clip-text bg-safe-gradient">{n}</span>
      <div><p className="label mb-2">{label}</p><h2>{title}</h2></div>
    </Reveal>
  );
}

export default function Expertise() {
  return (
    <>
      <Seo title="Notre expertise géotechnique"
        description="Sondages (forage, pressiomètre, piézométrie, cavités), essais en laboratoire et missions géotechniques G1 à G5 : l'expertise complète de SAFE Géotechnique." />

      {/* ===== HERO (clair) ===== */}
      <section className="relative overflow-hidden border-b border-line bg-safe-soft">
        <div className="absolute inset-0 strata opacity-50" aria-hidden="true" />
        <div className="container-safe relative grid items-center gap-[clamp(2rem,5vw,3.5rem)] lg:grid-cols-[1.05fr_0.95fr]" style={{ paddingBlock: 'clamp(2.5rem,6vw,4.5rem)' }}>
          <div>
            <p className="label mb-4">Notre expertise</p>
            <h1 className="max-w-[20ch]">Du sondage à l'étude, une géotechnique complète</h1>
            <p className="lead mt-5 max-w-[58ch]">
              SAFE Géotechnique réalise les sondages sur le terrain, les essais en
              laboratoire et les missions d'ingénierie <span className="mono-tag">G1 à G5</span>,
              pour assurer la faisabilité et la sécurité de vos projets.
            </p>
            <nav className="mt-7 flex flex-wrap gap-2.5 font-mono text-[0.85rem]" aria-label="Sections de la page">
              {[['#sondage', 'Sondage'], ['#laboratoire', 'Laboratoire'], ['#missions', 'Missions G1–G5']].map(([h, l]) => (
                <a key={h} href={h} className="rounded-full border border-safe-magenta/30 px-4 py-2 text-safe-magenta hover:bg-white transition-colors">{l}</a>
              ))}
            </nav>
          </div>
          <Reveal className="relative">
            <figure className="rounded-xl2 overflow-hidden shadow-sflg">
              <img src={heroForeuse} alt="Atelier de sondage SAFE Géotechnique sur un chantier" className="w-full object-cover aspect-[4/3]" width="1600" height="1200" fetchpriority="high" />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ===== 01 · SONDAGE ===== */}
      <section id="sondage" className="section">
        <div className="container-safe">
          <SectionHead n="01" label="Sondage" title="Reconnaissance des sols sur le terrain" />
          <Reveal className="lead max-w-[68ch] -mt-2 mb-[clamp(2rem,4vw,3rem)]">
            Nos équipes interviennent directement sur votre site pour identifier
            et classifier les sols. Chaque technique répond à un objectif précis,
            du repérage des couches à la mesure de leurs caractéristiques.
          </Reveal>

          {/* Liste éditoriale (sans cartouches) */}
          <div className="grid sm:grid-cols-2 gap-x-[clamp(2rem,5vw,4rem)]">
            {sondages.map((p, i) => (
              <Reveal as="article" key={p.t} delay={(i % 2) * 80}
                className="flex gap-4 py-6 border-t border-line">
                <span className="grid place-items-center w-11 h-11 rounded-full border border-safe-magenta/25 text-safe-magenta shrink-0">
                  <Icon name={p.icon} className="w-[22px] h-[22px]" />
                </span>
                <div>
                  <h3 className="text-[1.12rem] mb-1.5">{p.t}</h3>
                  <p className="text-slate text-[0.97rem]">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-slate mt-6">
            Nous réalisons également la <strong className="text-ink">reconnaissance de fondations</strong> d'ouvrages existants.
          </p>
        </div>
      </section>

      {/* ===== ATELIERS EMCI (bande équilibrée) ===== */}
      <section className="section-tight">
        <div className="container-safe">
          <Reveal className="rounded-xl2 border border-line bg-mist p-[clamp(1.5rem,4vw,3rem)] grid gap-[clamp(2rem,5vw,3.5rem)] items-center lg:grid-cols-[auto_1fr]">
            <div className="flex justify-center lg:justify-start">
              <DepthScale className="w-[250px] max-w-full h-auto" />
            </div>
            <div>
              <p className="label mb-4">Nos ateliers EMCI</p>
              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)]">Atteindre la bonne profondeur</h2>
              <p className="text-slate mt-3 mb-6 max-w-[56ch]">
                Sondages pressiométriques, destructifs et carottés, dans le
                respect des normes en vigueur. Nous mobilisons l'atelier adapté à
                la profondeur recherchée et à l'accès du site.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 max-w-[460px]">
                <div className="rounded-2xl border border-line bg-white p-5">
                  <span className="mono-tag text-[1.05rem]">EMCI 4.50</span>
                  <div className="stat my-1.5"><b>40 m</b></div>
                  <p className="text-slate text-[0.9rem]">Profondeur de sondage.</p>
                </div>
                <div className="rounded-2xl border border-line bg-white p-5">
                  <span className="mono-tag text-[1.05rem]">EMCI 7.50</span>
                  <div className="stat my-1.5"><b>100 m</b></div>
                  <p className="text-slate text-[0.9rem]">Profondeur de sondage.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== 02 · LABORATOIRE ===== */}
      <section id="laboratoire" className="section bg-mist border-y border-line">
        <div className="container-safe">
          <SectionHead n="02" label="Laboratoire" title="Identifier les sols par leur nature et leur résistance" />
          <Reveal className="lead max-w-[70ch] -mt-2 mb-[clamp(2rem,4vw,3rem)]">
            En laboratoire, chaque échantillon prélevé devient une donnée
            exploitable. Nos essais se répartissent en deux familles : d'abord
            <strong className="text-ink"> identifier</strong> le sol (sa nature,
            son état), puis mesurer sa <strong className="text-ink">résistance
            mécanique</strong>.
          </Reveal>

          {/* Galerie */}
          <div className="grid gap-4 sm:grid-cols-3 mb-[clamp(2rem,4vw,3rem)]">
            {[[laboEchantillon, 'Préparation des échantillons', "Préparation d'un échantillon de sol"],
              [laboProctor, 'Compactage — Proctor + IPI', 'Essai de compactage Proctor'],
              [laboPresse, 'Essais mécaniques', 'Essai mécanique sur échantillon']].map(([src, cap, alt], i) => (
              <Reveal key={cap} delay={i * 70}>
                <figure className="rounded-xl2 overflow-hidden shadow-sfmd bg-white">
                  <img src={src} alt={alt} className="w-full object-cover aspect-[4/3]" loading="lazy" />
                  <figcaption className="px-4 py-3 text-[0.88rem] font-medium text-ink">{cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-[clamp(1.5rem,3vw,2.5rem)] lg:grid-cols-2">
            <Reveal className="bg-white rounded-xl2 border border-line p-[clamp(1.5rem,3vw,2rem)]">
              <p className="label mb-3">Identification & état</p>
              <p className="text-slate mb-5">
                Avant tout calcul, il faut <strong className="text-ink">connaître
                le sol</strong> : sa composition, sa teneur en argile et son
                rapport à l'eau. Ces essais conditionnent toute la suite de
                l'étude.
              </p>
              <dl className="grid gap-4">
                {identification.map(([t, d]) => (
                  <div key={t} className="border-t border-line pt-3">
                    <dt className="font-semibold text-ink">{t}</dt>
                    <dd className="text-slate text-[0.95rem] mt-0.5">{d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120} className="bg-white rounded-xl2 border border-line p-[clamp(1.5rem,3vw,2rem)]">
              <p className="label mb-3">Résistance mécanique</p>
              <p className="text-slate mb-5">
                On mesure ensuite <strong className="text-ink">comment le sol se
                comporte sous charge</strong> : sa capacité à supporter un
                ouvrage et à résister au cisaillement.
              </p>
              <dl className="grid gap-4">
                {mecaniques.map(([t, d]) => (
                  <div key={t} className="border-t border-line pt-3">
                    <dt className="font-semibold text-ink">{t}</dt>
                    <dd className="text-slate text-[0.95rem] mt-0.5">{d}</dd>
                  </div>
                ))}
              </dl>
              <p className="note mt-5 text-[0.92rem]">
                Cisaillement de Casagrande et essais triaxiaux mesurent la
                résistance dans des conditions différentes : nous choisissons
                l'essai selon le besoin de l'étude.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 03 · MISSIONS G1 À G5 ===== */}
      <section id="missions" className="section">
        <div className="container-safe">
          <SectionHead n="03" label="Ingénierie · Missions G1 à G5" title="De l'étude préalable au diagnostic d'ouvrage" />
          <Reveal className="lead max-w-[72ch] -mt-2 mb-[clamp(2rem,4vw,3rem)]">
            Nous interprétons les essais et rassemblons les documents géologiques
            et cartographiques du site pour étudier le comportement mécanique des
            sols et des roches. La norme structure cette ingénierie en cinq
            missions, chacune attachée à une phase précise du projet.
          </Reveal>

          {/* Timeline détaillée */}
          <ol className="relative grid gap-5 sm:pl-8 sm:before:absolute sm:before:left-[11px] sm:before:top-2 sm:before:bottom-2 sm:before:w-0.5 sm:before:bg-line">
            {MISSIONS.map((m, i) => (
              <Reveal as="li" key={m.code} delay={i * 60} className="relative">
                <span className="hidden sm:block absolute -left-8 top-2 w-6 h-6 rounded-full bg-safe-gradient ring-4 ring-white" aria-hidden="true" />
                <div className="rounded-xl2 border border-line bg-white p-[clamp(1.25rem,2.5vw,1.75rem)]">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="inline-grid place-items-center w-12 h-12 rounded-[14px] bg-safe-gradient text-white font-mono font-semibold text-[1.1rem] shrink-0">{m.code}</span>
                    <h3 className="text-[1.15rem] flex-1 min-w-[180px]">{m.t}</h3>
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-safe-magenta bg-safe-soft border border-line rounded-full px-3 py-1">{m.phase}</span>
                  </div>
                  <p className="text-slate">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-7 rounded-xl2 bg-safe-soft border border-line p-5 flex flex-wrap items-center gap-4 justify-between">
            <p className="text-slate flex-1 min-w-[260px]">Vous vendez un terrain à bâtir ? La mission G1 peut être exigée par la loi ELAN.</p>
            <Link to="/loi-elan" className="btn btn-ghost btn-sm">En savoir plus sur la loi ELAN <Icon name="arrow" className="arrow w-[16px] h-[16px]" /></Link>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Un besoin précis sur votre projet ?" text="Sondage, essai en laboratoire ou mission G1 à G5 : décrivez-nous votre site, nous proposons la solution adaptée." />
    </>
  );
}
