import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';

import vermeer from '../assets/images/foreuse-vermeer.webp';
import camionSafe from '../assets/images/foreuse-camion-safe.webp';

const prestations = [
  {
    icon: 'drill',
    title: 'Forage destructif et semi-destructif',
    text: "Reconnaissance rapide de la stratigraphie et des horizons rencontrés. Le forage semi-destructif concilie vitesse d'avancement et qualité de l'information récoltée.",
  },
  {
    icon: 'layers',
    title: 'Carottage',
    text: "Prélèvement de carottes continues pour observer le sol et le sous-sol dans leur structure réelle, et sélectionner les échantillons destinés au laboratoire.",
  },
  {
    icon: 'flask',
    title: 'Prélèvements',
    text: "Prélèvements d'échantillons remaniés et intacts, conditionnés et tracés pour préserver leurs caractéristiques jusqu'à l'analyse en laboratoire.",
  },
  {
    icon: 'cavity',
    title: 'Recherche de cavités souterraines',
    text: "Détection et caractérisation de cavités (anciennes exploitations, dissolutions, vides) afin de sécuriser les projets exposés à ce risque.",
  },
];

export default function Sondages() {
  return (
    <>
      <Seo
        title="Sondages géotechniques"
        description="Forage destructif et semi-destructif, carottage, prélèvements, piézométrie et recherche de cavités souterraines : les moyens de sondage de SAFE Géotechnique."
      />
      <PageHero
        kicker="Nos métiers · Sondages"
        title="Sondages et reconnaissance des sols"
        intro="Nos équipes interviennent sur le terrain pour reconnaître les sols, prélever les échantillons et installer les dispositifs de suivi. Un parc de machines dédié, au plus près de votre chantier."
      />

      {/* Prestations */}
      <section className="section">
        <div className="container-safe">
          <div className="max-w-[720px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="kicker mb-[0.9rem]">Sur le terrain</p>
            <h2>Des techniques adaptées à chaque reconnaissance</h2>
          </div>
          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-2">
            {prestations.map((p) => (
              <div key={p.title} className="card">
                <span className="icon-badge mb-[1.1rem]">
                  <Icon name={p.icon} />
                </span>
                <h3 className="mb-[0.6rem]">{p.title}</h3>
                <p className="text-slate">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piézométrie */}
      <section className="section bg-mist">
        <div className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] md:grid-cols-2">
          <div>
            <p className="kicker mb-[0.9rem]">Élément différenciant</p>
            <h2>Piézométrie : pose et suivi</h2>
            <p className="lead mt-4">
              La connaissance des eaux souterraines est déterminante pour la
              tenue d'un ouvrage. Nous installons les piézomètres et en assurons
              le suivi dans la durée.
            </p>
            <ul className="ticks mt-6">
              <li>
                <strong>Pose de piézomètres</strong> adaptés au contexte
                hydrogéologique du site.
              </li>
              <li>
                <strong>Suivi manuel</strong> : relevés ponctuels du niveau
                d'eau, à intervalles définis avec vous.
              </li>
              <li>
                <strong>Suivi automatique</strong> : enregistrement en continu
                des variations de niveau, pour une vision fine sur la durée.
              </li>
            </ul>
            <p className="note mt-6">
              Proposer à la fois le suivi manuel et le suivi automatique nous
              permet d'ajuster la solution à l'enjeu et au budget de chaque
              projet.
            </p>
          </div>
          <figure className="rounded-xl2 overflow-hidden shadow-sfmd order-first md:order-none">
            <img
              src={vermeer}
              alt="Machine de forage du groupe installée sur un chantier, sécurisé par des barrières"
              className="w-full h-full object-cover aspect-[5/4]"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Parc machines / profondeurs */}
      <section className="section">
        <div className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] md:grid-cols-2">
          <div>
            <p className="kicker mb-[0.9rem]">Notre parc de sondage</p>
            <h2>Des machines pour aller à la bonne profondeur</h2>
            <p className="lead mt-4">
              Nous mobilisons des foreuses dimensionnées selon la profondeur de
              reconnaissance recherchée et l'accessibilité du site.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex-1 min-w-[180px] bg-white border border-line rounded-[14px] px-[1.3rem] py-[1.1rem] shadow-sfsm">
                <span className="block text-[2rem] font-extrabold tracking-tight bg-safe-gradient bg-clip-text text-transparent">
                  40 m
                </span>
                <span className="block text-slate text-[0.92rem] mt-0.5">
                  Profondeur avec la machine 450
                </span>
              </div>
              <div className="flex-1 min-w-[180px] bg-white border border-line rounded-[14px] px-[1.3rem] py-[1.1rem] shadow-sfsm">
                <span className="block text-[2rem] font-extrabold tracking-tight bg-safe-gradient bg-clip-text text-transparent">
                  80 m
                </span>
                <span className="block text-slate text-[0.92rem] mt-0.5">
                  Profondeur avec la machine 750
                </span>
              </div>
            </div>
            <p className="mt-6 text-slate">
              Du fourgon d'intervention aux foreuses chenillées, nos moyens sont
              choisis pour limiter l'emprise au sol et s'adapter aux terrains
              difficiles d'accès.
            </p>
          </div>
          <figure className="rounded-xl2 overflow-hidden shadow-sfmd order-first md:order-none">
            <img
              src={camionSafe}
              alt="Foreuse de sondage chenillée et fourgon SAFE sur un chantier en bord de route"
              className="w-full h-full object-cover aspect-[5/4]"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Habilitations */}
      <section className="section bg-mist">
        <div className="container-safe">
          <div className="max-w-[720px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="kicker mb-[0.9rem]">Sécurité et compétences</p>
            <h2>Des habilitations transversales</h2>
            <p className="lead mt-4">
              Intervenir sur des chantiers variés suppose des compétences et des
              autorisations entretenues dans le temps. Nous investissons dans la
              formation continue de notre personnel.
            </p>
          </div>
          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-3">
            <div className="card">
              <span className="icon-badge mb-[1.1rem]">
                <Icon name="shield" />
              </span>
              <h3 className="mb-[0.6rem]">Personnel formé</h3>
              <p className="text-slate">
                Des équipes formées aux risques de chantier et à la conduite des
                opérations de sondage, dans le respect des règles de sécurité.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge mb-[1.1rem]">
                <Icon name="certificate" />
              </span>
              <h3 className="mb-[0.6rem]">Habilitations entretenues</h3>
              <p className="text-slate">
                Nos habilitations sont maintenues à jour par la formation
                continue, pour couvrir la diversité des environnements
                d'intervention.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge mb-[1.1rem]">
                <Icon name="doc" />
              </span>
              <h3 className="mb-[0.6rem]">Cadres de prévention</h3>
              <p className="text-slate">
                Nos interventions s'inscrivent dans les cadres de prévention
                applicables au travail à proximité des réseaux et sur les voies,
                notamment CIPR et SNTT.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Un sondage à programmer ?"
        text="Décrivez-nous votre site et vos contraintes. Nous vous proposons les moyens de reconnaissance adaptés."
      />
    </>
  );
}
