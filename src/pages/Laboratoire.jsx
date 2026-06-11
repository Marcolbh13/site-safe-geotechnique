import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import PhotoBand from '../components/PhotoBand.jsx';
import imgPresse from '../assets/images/labo-presse.webp';
import illLaboratoire from '../assets/illustrations/ill-laboratoire.svg';
import illResistance from '../assets/illustrations/ill-resistance.svg';
import illProcessus from '../assets/illustrations/ill-processus.svg';
import Steps from '../components/Steps.jsx';
import Reasons from '../components/Reasons.jsx';
import CtaBand from '../components/CtaBand.jsx';

const processus = [
  { t: 'Réception & conditionnement', d: 'Chaque échantillon est référencé et préparé pour les essais.' },
  { t: 'Essais d\'identification', d: 'Nature du sol, granulométrie, argilosité (VBS) et état hydrique.' },
  { t: 'Essais mécaniques', d: 'Compactage (Proctor + IPI), cisaillement et essais triaxiaux.' },
  { t: 'Interprétation & rapport', d: 'Les résultats deviennent des données fiables pour l\'ingénierie.' },
];

const atouts = [
  { icon: 'microscope', t: 'Des essais complets', d: 'De l\'identification (GTR, VBS, Atterberg) à la résistance (triaxial, cisaillement).' },
  { icon: 'check', t: 'Le respect des normes', d: 'Des modes opératoires conformes aux normes en vigueur.' },
  { icon: 'compass', t: 'Intégré à l\'étude', d: 'Un lien direct entre l\'essai et la mission géotechnique G1 à G5.' },
  { icon: 'gauge', t: 'Des délais maîtrisés', d: 'Laboratoire interne : nous gardons la main sur les délais de vos projets.' },
];

import imgGtr from '../assets/images/e-gtr.webp';
import imgGranulo from '../assets/images/e-granulo.webp';
import imgSedimento from '../assets/images/e-sedimento.webp';
import imgAtterberg from '../assets/images/e-atterberg.webp';
import imgVbs from '../assets/images/e-vbs.webp';
import imgVolumique from '../assets/images/e-volumique.webp';
import imgProctor from '../assets/images/e-proctor.webp';
import imgCisaillement from '../assets/images/e-cisaillement.webp';
import imgTriaxial from '../assets/images/labo-triaxial.webp';

const identification = [
  { img: imgGtr, t: 'Classification GTR', d: "Classe le sol selon sa nature et indique s'il est réemployable en remblai." },
  { img: imgGranulo, t: 'Analyse granulométrique', d: 'Mesure la répartition des tailles de grains par tamisage.' },
  { img: imgSedimento, t: 'Analyse sédimentométrique', d: 'Prolonge la granulométrie sur les fines (≤ 80 µm) par sédimentation.' },
  { img: imgAtterberg, t: 'Limites d’Atterberg', d: 'Situent les seuils de plasticité et révèlent la sensibilité au retrait-gonflement des argiles.' },
  { img: imgVbs, t: 'Valeur au bleu du sol (VBS)', d: "Quantifie l'argilosité du sol, déterminante pour son comportement à l'eau." },
  { img: imgVolumique, t: 'Teneur en eau & masse volumique', d: "Décrivent l'état hydrique du sol et la densité des éléments de roche." },
];
const mecaniques = [
  { img: imgProctor, t: 'Proctor + IPI', d: "Définissent la teneur en eau optimale de compactage et la portance immédiate d'un matériau." },
  { img: imgCisaillement, t: 'Cisaillement à la boîte (Casagrande)', d: "Donne la cohésion et l'angle de frottement, sous une sollicitation simple." },
  { img: imgTriaxial, t: 'Essais triaxiaux (UU, CU+u, CD)', d: 'Mesurent cohésion, angle de frottement interne et dilatance dans des conditions de drainage maîtrisées.' },
];

function EssaiItem({ img, t, d }) {
  return (
    <Reveal as="article">
      <figure className="rounded-xl2 overflow-hidden shadow-sfsm mb-4">
        <img src={img} alt={t} className="w-full object-cover aspect-[4/3]" loading="lazy" />
      </figure>
      <h3 className="text-[1.08rem] mb-1.5">{t}</h3>
      <p className="text-slate text-[0.95rem]">{d}</p>
    </Reveal>
  );
}

export default function Laboratoire() {
  return (
    <>
      <Seo title="Laboratoire"
        description="Essais de sols en laboratoire SAFE : classification GTR, granulométrie, sédimentométrie, VBS, limites d'Atterberg, Proctor + IPI, cisaillement et essais triaxiaux." />

      <PageHero
        label="Nos activités · Laboratoire"
        title="Identifier les sols par leur nature et leur résistance"
        intro="En laboratoire, chaque échantillon prélevé devient une donnée exploitable. Nos essais permettent d'abord d'identifier le sol (sa nature, son état), puis de mesurer sa résistance mécanique."
      />

      {/* Identification */}
      <section className="section">
        <div className="container-safe">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-x-10 gap-y-6 items-center mb-[clamp(2rem,4vw,3rem)]">
            <Reveal className="max-w-[640px]">
              <p className="label mb-3">Identification & état</p>
              <h2>Connaître le sol avant tout calcul</h2>
              <p className="text-slate mt-4 text-[1.05rem]">Sa composition, sa teneur en argile et son rapport à l'eau conditionnent toute la suite de l'étude.</p>
            </Reveal>
            <Reveal delay={120} className="hidden lg:block">
              <img src={illLaboratoire} alt="" aria-hidden="true" className="w-full max-w-[320px] ml-auto" loading="lazy" />
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[clamp(1.5rem,3vw,2.5rem)] gap-y-[clamp(1.75rem,3vw,2.5rem)]">
            {identification.map((e) => <EssaiItem key={e.t} {...e} />)}
          </div>
        </div>
      </section>

      <PhotoBand
        image={imgPresse}
        alt="Technicien SAFE réalisant un essai mécanique au laboratoire"
        label="Au laboratoire"
        title="Des essais normalisés, conduits par nos techniciens"
      >
        De la réception de l'échantillon à la mesure, chaque essai suit un
        protocole maîtrisé, dans notre laboratoire intégré.
      </PhotoBand>

      {/* Résistance mécanique */}
      <section className="section bg-mist border-y border-line">
        <div className="container-safe">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-x-10 gap-y-6 items-center mb-[clamp(2rem,4vw,3rem)]">
            <Reveal className="max-w-[680px]">
              <p className="label mb-3">Résistance mécanique</p>
              <h2>Mesurer le comportement sous charge</h2>
              <p className="text-slate mt-4 text-[1.05rem]">La capacité du sol à supporter un ouvrage et à résister au cisaillement. Cisaillement de Casagrande et essais triaxiaux mesurent cette résistance dans des conditions différentes, choisies selon le besoin de l'étude.</p>
            </Reveal>
            <Reveal delay={120} className="hidden lg:block">
              <img src={illResistance} alt="" aria-hidden="true" className="w-full max-w-[300px] ml-auto" loading="lazy" />
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[clamp(1.5rem,3vw,2.5rem)] gap-y-[clamp(1.75rem,3vw,2.5rem)]">
            {mecaniques.map((e) => <EssaiItem key={e.t} {...e} />)}
          </div>
        </div>
      </section>

      <Steps
        label="Notre processus"
        title="De l'échantillon au résultat"
        intro="Chaque échantillon suit un parcours maîtrisé, de sa réception au rapport."
        steps={processus}
        illustration={illProcessus}
        illSize="max-w-[300px]"
      />

      <Reasons
        label="Pourquoi notre laboratoire"
        title="Un laboratoire au service de vos projets"
        items={atouts}
        tone="mist"
      />

      <CtaBand title="Des échantillons à analyser ?" text="Confiez-nous vos prélèvements ou intégrez le laboratoire à votre mission de reconnaissance des sols." />
    </>
  );
}
