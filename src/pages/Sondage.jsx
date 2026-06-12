import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import Decor from '../components/Decor.jsx';
import DepthScale from '../components/DepthScale.jsx';
import Steps from '../components/Steps.jsx';
import Reasons from '../components/Reasons.jsx';
import CtaBand from '../components/CtaBand.jsx';
import imgForage from '../assets/images/t-forage.webp';
import imgCarottage from '../assets/images/t-carottage.webp';
import imgPressio from '../assets/images/t-pressiometre.webp';
import imgPiezo from '../assets/images/t-piezo.webp';
import imgCavites from '../assets/images/t-cavites.webp';
import imgFondation from '../assets/images/t-fondation.webp';
import imgEchantillon from '../assets/images/labo-echantillon.webp';
import atelier450 from '../assets/images/atelier-450.webp';
import atelier750 from '../assets/images/atelier-750.webp';
import illTechniques from '../assets/illustrations/ill-techniques.svg';
import heroSondage from '../assets/images/hero-sondage.webp';
import bandSondage from '../assets/images/band-sondage.webp';

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
  { img: imgForage, t: 'Forage destructif et semi-destructif', d: "Le forage progresse en broyant le terrain. En semi-destructif, les débris remontés restent analysables. Rapide, il établit la coupe du sol (la succession des couches) et repère la profondeur des horizons rencontrés." },
  { img: imgCarottage, t: 'Carottage', d: "On prélève des carottes de sol intactes, sous forme de cylindres continus. Elles permettent d'observer le terrain dans sa structure réelle et de sélectionner les échantillons à tester en laboratoire." },
  { img: imgPressio, t: 'Essai pressiométrique', d: "Réalisé directement dans le forage, il mesure comment le sol se déforme sous pression. Ses résultats alimentent les calculs de portance et de tassement des fondations." },
  { img: imgPiezo, t: 'Pose de piézomètre et suivi', d: "Un tube crépiné est installé dans le forage pour mesurer le niveau de la nappe. Le suivi saisonnier en révèle les variations (déclaration préalable auprès de l'administration)." },
  { img: imgCavites, t: 'Recherche de cavités souterraines', d: "Pour les terrains exposés aux vides (anciennes carrières, dissolutions), on combine forages destructifs et microgravimétrie afin de localiser et caractériser la géométrie des cavités." },
  { img: imgEchantillon, t: 'Prélèvements environnementaux', d: "Des échantillons de sol et d'eau sont prélevés puis analysés en laboratoire pour évaluer une éventuelle pollution du site." },
  { img: imgFondation, t: 'Reconnaissance de fondations', d: "Au-delà des terrains à bâtir, nous diagnostiquons les fondations d'ouvrages existants pour en évaluer la nature, la géométrie et la portance, et éclairer vos travaux de reprise ou d'extension." },
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
        image={heroSondage}
        imageAlt="Atelier de sondage SAFE E4.50 sur le terrain"
      />

      {/* Prestations — une section par technique (lignes alternées) */}
      <section className="section relative overflow-hidden">
        <Decor />
        <div className="container-safe relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-x-10 gap-y-6 items-center mb-[clamp(2.5rem,5vw,4rem)]">
            <Reveal className="max-w-[680px]">
              <p className="label mb-3">Nos prestations</p>
              <h2>Des techniques adaptées à chaque reconnaissance</h2>
            </Reveal>
            <Reveal delay={120} className="hidden lg:block">
              <img src={illTechniques} alt="" aria-hidden="true" className="w-full max-w-[290px] ml-auto" loading="lazy" />
            </Reveal>
          </div>
          <div className="grid gap-[clamp(3rem,6vw,5.5rem)]">
            {prestations.map((p, i) => (
              <Reveal as="article" key={p.t}
                className="grid items-center gap-[clamp(1.5rem,4vw,3.5rem)] md:grid-cols-2">
                <figure className={`rounded-xl2 overflow-hidden shadow-sfmd ${i % 2 ? 'md:order-2' : ''}`}>
                  <img src={p.img} alt={p.t} className="w-full object-cover aspect-[16/10]" loading="lazy" />
                </figure>
                <div>
                  <span className="font-mono text-[0.78rem] uppercase tracking-[0.14em] text-safe-magenta">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[clamp(1.3rem,2.4vw,1.7rem)] mt-1 mb-3">{p.t}</h3>
                  <p className="text-slate text-[1.02rem] max-w-[56ch]">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <Steps
        label="Le déroulement"
        title="Comment se déroule un sondage ?"
        intro="De la préparation en sécurité à la restitution des données, chaque étape est cadrée."
        steps={deroulement}
        tone="mist"
      />

      {/* Bande photo terrain */}
      <section className="relative">
        <div className="relative h-[clamp(280px,40vw,460px)] overflow-hidden">
          <img src={bandSondage} alt="Atelier de sondage SAFE E4.50 en intervention sur un chantier" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
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
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">Des ateliers pour atteindre la bonne profondeur</h2>
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
        title="Pourquoi confier vos sondages à SAFE ?"
        items={garanties}
      />

      <CtaBand title="Un sondage à programmer ?" text="Décrivez-nous votre site et vos contraintes : nous vous proposons les moyens de reconnaissance adaptés." />
    </>
  );
}
