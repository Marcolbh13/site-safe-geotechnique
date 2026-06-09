import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import DepthScale from '../components/DepthScale.jsx';
import Steps from '../components/Steps.jsx';
import Reasons from '../components/Reasons.jsx';
import CtaBand from '../components/CtaBand.jsx';
import heroForeuse from '../assets/images/hero-foreuse.webp';

const deroulement = [
  { t: 'Préparation & déclarations', d: 'Repérage des réseaux (DICT) et organisation de l\'intervention en sécurité.' },
  { t: 'Implantation', d: 'Positionnement des points de sondage selon le projet et l\'accessibilité du site.' },
  { t: 'Forage & prélèvements', d: 'Forage, carottage et essais in situ ; conditionnement des échantillons prélevés.' },
  { t: 'Restitution', d: 'Transmission des données de terrain, prêtes pour le laboratoire et l\'étude.' },
];

const garanties = [
  { icon: 'drill', t: 'Un parc d\'ateliers EMCI', d: 'Sondages pressiométriques, destructifs et carottés jusqu\'à 100 m de profondeur.' },
  { icon: 'shield', t: 'La sécurité des réseaux', d: 'Personnel qualifié AIPR, attentif aux réseaux existants sur chaque chantier.' },
  { icon: 'flask', t: 'Une chaîne intégrée', d: 'Les sols prélevés sont analysés par notre propre laboratoire, sans rupture.' },
  { icon: 'check', t: 'Le respect des normes', d: 'Des sondages conduits dans le respect des normes en vigueur.' },
];

const prestations = [
  { icon: 'drill', t: 'Forage destructif et semi-destructif', d: "Reconnaissance rapide de la stratigraphie et des horizons traversés, pour dresser la coupe du sol." },
  { icon: 'core', t: 'Carottage', d: 'Prélèvement de carottes intactes : observation lithologique et sélection des échantillons pour le laboratoire.' },
  { icon: 'gauge', t: 'Essai pressiométrique', d: 'Mesure in situ des caractéristiques géomécaniques des sols, base des calculs de dimensionnement.' },
  { icon: 'water', t: 'Pose de piézomètre et suivi', d: "Mesure du niveau des eaux souterraines et prélèvements, avec suivi saisonnier (déclaration préalable auprès de l'administration)." },
  { icon: 'cavity', t: 'Recherche de cavités souterraines', d: 'Forages destructifs et études microgravimétriques pour localiser et caractériser la géométrie des vides.' },
  { icon: 'flask', t: 'Prélèvements environnementaux', d: 'Évaluation de la pollution des sols et des eaux ; échantillons analysés en laboratoire.' },
];

export default function Sondage() {
  return (
    <>
      <Seo title="Sondage"
        description="Sondages géotechniques SAFE : forage destructif et semi-destructif, carottage, essai pressiométrique, piézométrie, recherche de cavités et prélèvements environnementaux. Ateliers EMCI jusqu'à 100 m." />

      <PageHero
        label="Nos activités · Sondage"
        title="Reconnaissance des sols sur le terrain"
        intro="Nos équipes interviennent directement sur votre site pour identifier et classifier les sols. Chaque technique répond à un objectif précis, du repérage des couches à la mesure de leurs caractéristiques."
      />

      {/* Prestations — liste éditoriale */}
      <section className="section">
        <div className="container-safe">
          <Reveal><p className="label mb-3">Nos prestations</p><h2 className="mb-[clamp(1.5rem,3vw,2.25rem)]">Des techniques adaptées à chaque reconnaissance</h2></Reveal>
          <div className="grid sm:grid-cols-2 gap-x-[clamp(2rem,5vw,4rem)]">
            {prestations.map((p, i) => (
              <Reveal as="article" key={p.t} delay={(i % 2) * 80} className="flex gap-4 py-6 border-t border-line">
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
          <Reveal className="mt-6">
            <p className="text-slate">Nous réalisons également la <strong className="text-ink">reconnaissance de fondations</strong> d'ouvrages existants.</p>
          </Reveal>
        </div>
      </section>

      {/* Déroulement */}
      <Steps
        label="Le déroulement"
        title="Comment se déroule un sondage"
        intro="De la préparation en sécurité à la restitution des données, chaque étape est cadrée."
        steps={deroulement}
        tone="mist"
      />

      {/* Bande photo terrain */}
      <section className="relative">
        <div className="relative h-[clamp(280px,40vw,460px)] overflow-hidden">
          <img src={heroForeuse} alt="Atelier de sondage SAFE EMCI en intervention sur un chantier" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(110,35,80,.8) 0%, rgba(110,35,80,.3) 55%, rgba(110,35,80,0) 100%)' }} />
          <div className="container-safe relative h-full flex items-center">
            <Reveal className="max-w-[540px] text-white">
              <h2 className="text-white text-[clamp(1.5rem,3vw,2.1rem)]">Du terrain à l'échantillon, sans rupture</h2>
              <p className="mt-3 text-white/90">Nos foreuses prélèvent les sols que notre laboratoire analyse ensuite : une chaîne maîtrisée de bout en bout.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ateliers EMCI */}
      <section className="section bg-mist border-y border-line">
        <div className="container-safe">
          <Reveal className="grid gap-[clamp(2rem,5vw,3.5rem)] items-center lg:grid-cols-[auto_1fr]">
            <div className="flex justify-center lg:justify-start">
              <DepthScale className="w-[250px] max-w-full h-auto" />
            </div>
            <div>
              <p className="label mb-4">Notre matériel</p>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">Des ateliers EMCI pour atteindre la bonne profondeur</h2>
              <p className="text-slate mt-3 mb-6 max-w-[58ch]">
                Sondages pressiométriques, destructifs et carottés, dans le
                respect des normes en vigueur. Nous mobilisons l'atelier adapté à
                la profondeur recherchée et à l'accessibilité du site.
              </p>
              <div className="grid gap-7 sm:grid-cols-2 max-w-[500px]">
                <div>
                  <span className="mono-tag text-[1.05rem]">EMCI 4.50</span>
                  <div className="stat my-1.5"><b>40 m</b></div>
                  <p className="text-slate text-[0.9rem]">Profondeur de sondage.</p>
                </div>
                <div className="sm:border-l sm:border-line sm:pl-7">
                  <span className="mono-tag text-[1.05rem]">EMCI 7.50</span>
                  <div className="stat my-1.5"><b>100 m</b></div>
                  <p className="text-slate text-[0.9rem]">Profondeur de sondage.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reasons
        label="Vos garanties"
        title="Pourquoi confier vos sondages à SAFE"
        items={garanties}
      />

      <CtaBand title="Un sondage à programmer ?" text="Décrivez-nous votre site et vos contraintes : nous vous proposons les moyens de reconnaissance adaptés." />
    </>
  );
}
