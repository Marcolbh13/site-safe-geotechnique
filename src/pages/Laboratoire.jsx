import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';

import laboEchantillon from '../assets/images/labo-echantillon.webp';
import laboProctor from '../assets/images/labo-proctor.webp';
import laboPresse from '../assets/images/labo-presse.webp';

const galerie = [
  { src: laboEchantillon, alt: "Préparation d'un échantillon de sol au laboratoire SAFE", cap: 'Préparation et traitement des échantillons.' },
  { src: laboProctor, alt: 'Essai de compactage Proctor sur moule normalisé', cap: 'Essai de compactage (Proctor) sur moule normalisé.' },
  { src: laboPresse, alt: 'Essai mécanique sur échantillon de sol à la presse', cap: 'Essai mécanique sur presse.' },
];

export default function Laboratoire() {
  return (
    <>
      <Seo
        title="Laboratoire géotechnique"
        description="Essais de sols en laboratoire selon un protocole normalisé : identification, Valeur au bleu du sol (VBS), compactage Proctor, essai triaxial et cisaillement à la boîte (Casagrande)."
      />
      <PageHero
        kicker="Nos métiers · Laboratoire"
        title="Le laboratoire de SAFE Géotechnique"
        intro="Les sols prélevés sur le terrain prennent ici toute leur valeur : nous les identifions, les caractérisons et mesurons leur comportement, selon un protocole normalisé."
      />

      {/* Intro normes */}
      <section className="section">
        <div className="container-safe">
          <p className="lead max-w-narrow">
            Notre laboratoire réalise les essais qui transforment un échantillon
            de sol en données exploitables pour l'ingénierie. Chaque essai répond
            à un mode opératoire défini, et nous suivons les normes en vigueur
            pour la conduite de nos analyses.
          </p>
        </div>
      </section>

      {/* Galerie */}
      <section className="section-tight pt-0">
        <div className="container-safe">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galerie.map((g) => (
              <figure
                key={g.cap}
                className="rounded-xl2 overflow-hidden shadow-sfmd bg-white"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <figcaption className="px-[0.9rem] py-[0.7rem] text-[0.86rem] text-muted">
                  {g.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Familles d'essais */}
      <section className="section bg-mist">
        <div className="container-safe">
          <div className="max-w-[720px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="kicker mb-[0.9rem]">Nos essais</p>
            <h2>Identifier, caractériser, mesurer</h2>
          </div>
          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-2">
            <div className="card">
              <span className="icon-badge mb-[1.1rem]">
                <Icon name="microscope" />
              </span>
              <h3 className="mb-[0.6rem]">Identification et état des sols</h3>
              <ul className="ticks mt-2">
                <li>Granulométrie et nature des matériaux</li>
                <li>Limites d'Atterberg</li>
                <li><strong>Valeur au bleu du sol (VBS)</strong></li>
                <li>Teneur en eau</li>
              </ul>
            </div>
            <div className="card">
              <span className="icon-badge mb-[1.1rem]">
                <Icon name="layers" />
              </span>
              <h3 className="mb-[0.6rem]">Compactage</h3>
              <ul className="ticks mt-2">
                <li><strong>Essai Proctor</strong> sur moule normalisé</li>
                <li>Détermination de l'optimum de compactage</li>
                <li>Aptitude des matériaux au remblai</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Triaxial en avant */}
      <section className="section">
        <div className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] md:grid-cols-2">
          <div>
            <p className="kicker mb-[0.9rem]">Notre point fort</p>
            <h2>Essai triaxial</h2>
            <p className="lead mt-4">
              L'essai triaxial mesure le comportement mécanique d'un sol sous
              contrainte, dans des conditions maîtrisées. C'est un essai exigeant
              et relativement coûteux, que peu de laboratoires réalisent en
              interne.
            </p>
            <p className="mt-4 text-slate">
              Le proposer directement nous permet de vous fournir des paramètres
              de résistance et de déformation robustes, sans dépendre d'un
              prestataire extérieur, et de raccourcir les délais d'étude.
            </p>
            <p className="note mt-6">
              L'essai triaxial est distinct de l'essai de cisaillement à la boîte
              (Casagrande) : ils ne mesurent pas la résistance du sol dans les
              mêmes conditions et sont choisis selon le besoin de l'étude.
            </p>
          </div>
          <figure className="rounded-xl2 overflow-hidden shadow-sfmd order-first md:order-none">
            <img
              src={laboPresse}
              alt="Essai mécanique sur échantillon de sol au laboratoire SAFE"
              className="w-full h-full object-cover aspect-[5/4]"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Cisaillement boîte */}
      <section className="section bg-mist">
        <div className="container-safe">
          <div className="max-w-narrow">
          <p className="kicker mb-[0.9rem]">Également au laboratoire</p>
          <h2>Cisaillement à la boîte (Casagrande)</h2>
          <p className="lead mt-4">
            L'essai de cisaillement à la boîte, dit essai de Casagrande,
            détermine les caractéristiques de résistance au cisaillement d'un
            sol. Il complète notre offre d'essais mécaniques aux côtés de l'essai
            triaxial.
          </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Des échantillons à analyser ?"
        text="Confiez-nous vos prélèvements ou intégrez le laboratoire à votre mission de reconnaissance des sols."
      />
    </>
  );
}
