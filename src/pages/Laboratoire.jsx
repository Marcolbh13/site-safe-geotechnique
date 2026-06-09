import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';

import laboEchantillon from '../assets/images/labo-echantillon.webp';
import laboProctor from '../assets/images/labo-proctor.webp';
import laboPresse from '../assets/images/labo-presse.webp';

const identification = [
  ['Classification GTR', "classe le sol selon sa nature et indique s'il est réemployable en remblai."],
  ['Granulométrie & sédimentométrie', 'mesurent la répartition des tailles de grains, du sable aux fines (≤ 80 µm).'],
  ['Limites d’Atterberg', 'situent les seuils de plasticité et révèlent la sensibilité au retrait-gonflement des argiles.'],
  ['Valeur au bleu du sol (VBS)', "quantifie l'argilosité du sol, déterminante pour son comportement à l'eau."],
  ['Teneur en eau & masse volumique', "décrivent l'état hydrique du sol et la densité des éléments de roche."],
];
const mecaniques = [
  ['Proctor + IPI', "définissent la teneur en eau optimale de compactage et la portance immédiate d'un matériau."],
  ['Cisaillement à la boîte (Casagrande)', "donne la cohésion et l'angle de frottement, sous une sollicitation simple."],
  ['Essais triaxiaux (UU, CU+u, CD)', "mesurent cohésion, angle de frottement interne et dilatance dans des conditions de drainage maîtrisées."],
];

const gallery = [
  [laboEchantillon, 'Préparation des échantillons', "Préparation d'un échantillon de sol"],
  [laboProctor, 'Compactage (Proctor + IPI)', 'Essai de compactage Proctor'],
  [laboPresse, 'Essais mécaniques', 'Essai mécanique sur échantillon'],
];

function EssaisCard({ label, intro, items, note, divider }) {
  return (
    <div className={divider ? 'lg:border-l lg:border-line lg:pl-[clamp(1.5rem,3vw,3rem)]' : ''}>
      <p className="label mb-3">{label}</p>
      <p className="text-slate mb-5">{intro}</p>
      <dl className="grid gap-4">
        {items.map(([t, d]) => (
          <div key={t} className="border-t border-line pt-3">
            <dt className="font-semibold text-ink">{t}</dt>
            <dd className="text-slate text-[0.95rem] mt-0.5">{d}</dd>
          </div>
        ))}
      </dl>
      {note && <p className="note mt-5 text-[0.92rem]">{note}</p>}
    </div>
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

      {/* Galerie */}
      <section className="section">
        <div className="container-safe">
          <div className="grid gap-4 sm:grid-cols-3 mb-[clamp(2rem,4vw,3rem)]">
            {gallery.map(([src, cap, alt], i) => (
              <Reveal key={cap} delay={i * 70}>
                <figure className="rounded-xl2 overflow-hidden shadow-sfmd bg-white">
                  <img src={src} alt={alt} className="w-full object-cover aspect-[4/3]" loading="lazy" />
                  <figcaption className="px-4 py-3 text-[0.88rem] font-medium text-ink">{cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-[clamp(1.5rem,3vw,2.5rem)] lg:grid-cols-2">
            <Reveal>
              <EssaisCard
                label="Identification & état"
                intro="Avant tout calcul, il faut connaître le sol : sa composition, sa teneur en argile et son rapport à l'eau. Ces essais conditionnent toute la suite de l'étude."
                items={identification}
              />
            </Reveal>
            <Reveal delay={120}>
              <EssaisCard
                divider
                label="Résistance mécanique"
                intro="On mesure ensuite comment le sol se comporte sous charge : sa capacité à supporter un ouvrage et à résister au cisaillement."
                items={mecaniques}
                note="Cisaillement de Casagrande et essais triaxiaux mesurent la résistance dans des conditions différentes : nous choisissons l'essai selon le besoin de l'étude."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand title="Des échantillons à analyser ?" text="Confiez-nous vos prélèvements ou intégrez le laboratoire à votre mission de reconnaissance des sols." />
    </>
  );
}
