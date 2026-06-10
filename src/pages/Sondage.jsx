import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import DepthScale from '../components/DepthScale.jsx';
import Steps from '../components/Steps.jsx';
import Reasons from '../components/Reasons.jsx';
import CtaBand from '../components/CtaBand.jsx';
import heroForeuse from '../assets/images/hero-foreuse.webp';
import imgCarottage from '../assets/images/t-carottage.webp';
import imgPressio from '../assets/images/t-pressiometre.webp';
import imgPiezo from '../assets/images/t-piezo.webp';
import imgCavites from '../assets/images/t-cavites.webp';
import imgFondation from '../assets/images/t-fondation.webp';
import imgEchantillon from '../assets/images/labo-echantillon.webp';
import atelier450 from '../assets/images/atelier-450.webp';
import atelier750 from '../assets/images/atelier-750.webp';

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
  { img: heroForeuse, t: 'Forage destructif et semi-destructif', d: "Reconnaissance rapide de la stratigraphie et des horizons traversés, pour dresser la coupe du sol." },
  { img: imgCarottage, t: 'Carottage', d: 'Prélèvement de carottes intactes : observation lithologique et sélection des échantillons pour le laboratoire.' },
  { img: imgPressio, t: 'Essai pressiométrique', d: 'Mesure in situ des caractéristiques géomécaniques des sols, base des calculs de dimensionnement.' },
  { img: imgPiezo, t: 'Pose de piézomètre et suivi', d: "Mesure du niveau des eaux souterraines et prélèvements, avec suivi saisonnier (déclaration préalable auprès de l'administration)." },
  { img: imgCavites, t: 'Recherche de cavités souterraines', d: 'Forages destructifs et études microgravimétriques pour localiser et caractériser la géométrie des vides.' },
  { img: imgEchantillon, t: 'Prélèvements environnementaux', d: 'Évaluation de la pollution des sols et des eaux ; échantillons analysés en laboratoire.' },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[clamp(1.5rem,3vw,2.5rem)] gap-y-[clamp(1.75rem,3vw,2.5rem)]">
            {prestations.map((p, i) => (
              <Reveal as="article" key={p.t} delay={(i % 3) * 80}>
                <figure className="rounded-xl2 overflow-hidden shadow-sfsm mb-4">
                  <img src={p.img} alt={p.t} className="w-full object-cover aspect-[4/3]" loading="lazy" />
                </figure>
                <h3 className="text-[1.12rem] mb-1.5">{p.t}</h3>
                <p className="text-slate text-[0.95rem]">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reconnaissance de fondations — bande image + texte */}
      <section className="section-tight">
        <div className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] md:grid-cols-2">
          <Reveal className="order-last md:order-first">
            <figure className="rounded-xl2 overflow-hidden shadow-sfmd">
              <img src={imgFondation} alt="Reconnaissance de fondations d'un ouvrage existant" className="w-full object-cover aspect-[16/10]" loading="lazy" />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <p className="label mb-3">Ouvrages existants</p>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)]">Reconnaissance de fondations</h2>
            <p className="text-slate mt-4 max-w-[58ch]">
              Au-delà des terrains à bâtir, nous diagnostiquons les fondations
              d'ouvrages existants pour en évaluer la nature, la géométrie et la
              portance, et éclairer vos travaux de reprise ou d'extension.
            </p>
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
              <div className="grid gap-7 sm:grid-cols-2 max-w-[560px]">
                <div>
                  <figure className="rounded-[16px] overflow-hidden shadow-sfsm mb-3">
                    <img src={atelier450} alt="Atelier de sondage SAFE EMCI 4.50" className="w-full object-cover aspect-[4/3]" loading="lazy" />
                  </figure>
                  <span className="mono-tag text-[1.05rem]">EMCI 4.50</span>
                  <div className="stat my-1.5"><b>40 m</b></div>
                  <p className="text-slate text-[0.9rem]">Profondeur de sondage.</p>
                </div>
                <div>
                  <figure className="rounded-[16px] overflow-hidden shadow-sfsm mb-3">
                    <img src={atelier750} alt="Atelier de sondage SAFE EMCI 7.50" className="w-full object-cover aspect-[4/3]" loading="lazy" />
                  </figure>
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
