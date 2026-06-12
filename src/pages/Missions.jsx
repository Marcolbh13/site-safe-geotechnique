import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import PhotoBand from '../components/PhotoBand.jsx';
import heroMissions from '../assets/images/hero-missions.webp';
import bandMissions from '../assets/images/labo-proctor.webp';
import illEnjeux from '../assets/illustrations/ill-enjeux.svg';
import Decor from '../components/Decor.jsx';
import Steps from '../components/Steps.jsx';
import Reasons from '../components/Reasons.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { MISSIONS } from '../data/site.js';

const enjeux = [
  { icon: 'shield', t: 'Sécuriser l\'ouvrage', d: 'Comprendre le sol, c\'est éviter tassements, fissures et désordres après construction.' },
  { icon: 'target', t: 'Maîtriser les coûts', d: 'Anticiper les risques du sol limite les mauvaises surprises en cours de chantier.' },
  { icon: 'doc', t: 'Respecter la réglementation', d: 'Certaines études sont exigées, par exemple lors de la vente d\'un terrain (loi ELAN).' },
  { icon: 'compass', t: 'Dimensionner juste', d: 'Des fondations adaptées au sol : ni surdimensionnées, ni risquées.' },
];

const moments = [
  { t: 'Avant le projet (G1)', d: 'Première reconnaissance des risques géotechniques du site.' },
  { t: 'À la conception (G2)', d: 'Dimensionnement des ouvrages géotechniques (AVP, PRO, DCE).' },
  { t: 'Pendant les travaux (G3 / G4)', d: 'Étude, suivi et supervision de l\'exécution.' },
  { t: 'Sur un ouvrage (G5)', d: 'Diagnostic ciblé d\'un désordre ou d\'un élément spécifique.' },
];

export default function Missions() {
  return (
    <>
      <Seo title="Missions géotechniques G1 à G5"
        description="Les missions géotechniques G1 à G5 expliquées simplement : étude préalable, conception, étude et suivi d'exécution, supervision et diagnostic géotechnique." />

      <PageHero
        label="Ingénierie · Missions G1 à G5"
        title="De l'étude préalable au diagnostic d'ouvrage"
        intro="Nous interprétons les essais et rassemblons les documents géologiques et cartographiques du site pour étudier le comportement mécanique des sols et des roches. La norme structure cette ingénierie en cinq missions : voici, simplement, à quoi sert chacune."
        image={heroMissions}
        imageAlt="Observation d'échantillons de sol prélevés sur le terrain"
      />

      <Reasons
        label="L'enjeu"
        title="Pourquoi une étude géotechnique ?"
        intro="Le sol conditionne la tenue de tout ouvrage. L'étude géotechnique le caractérise pour construire sereinement."
        items={enjeux}
        tone="mist"
        illustration={illEnjeux}
        illSize="max-w-[260px]"
      />

      <PhotoBand
        image={bandMissions}
        alt="Technicien SAFE réalisant un essai géotechnique au laboratoire"
        label="Du préalable au diagnostic"
        title="Une mission adaptée à chaque étape de votre projet"
      >
        De l'étude préalable à la supervision des travaux, nous vous accompagnons
        sur l'ensemble du cycle de vie de l'ouvrage.
      </PhotoBand>

      <section className="section relative overflow-hidden">
        <Decor />
        <div className="container-safe relative z-10">
          <ol className="relative grid gap-[clamp(2.5rem,5vw,4rem)] sm:pl-12 sm:before:absolute sm:before:left-[19px] sm:before:top-2 sm:before:bottom-2 sm:before:w-px sm:before:bg-line">
            {MISSIONS.map((m) => (
              <Reveal as="li" key={m.code} className="relative">
                {/* nœud losange (écho du logo) */}
                <span className="hidden sm:grid place-items-center absolute -left-12 top-0.5 w-10 h-10" aria-hidden="true">
                  <span className="absolute inset-0 rotate-45 rounded-[28%] bg-safe-gradient" />
                  <span className="relative font-mono text-white text-[0.7rem] font-bold">{m.code}</span>
                </span>

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <h2 className="text-[1.3rem]"><span className="font-mono text-safe-magenta mr-2 sm:hidden">{m.code}</span>{m.t}</h2>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">{m.phase}</span>
                </div>

                <p className="border-l-2 border-safe-magenta/50 pl-4 text-ink text-[1.05rem] mb-1">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-safe-magenta block mb-0.5">En clair</span>
                  {m.plain}
                </p>
                <p className="font-mono text-[0.78rem] text-muted mt-2">À la charge : <span className="text-safe-magenta">{m.charge}</span></p>

                <details className="group mt-3">
                  <summary className="inline-flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-bold text-safe-magenta text-[0.95rem] select-none">
                    En savoir plus
                    <Icon name="arrow" className="w-[16px] h-[16px] rotate-90 transition-transform group-open:rotate-[270deg]" />
                  </summary>
                  <div className="mt-3 animate-fade-up">
                    <p className="text-slate max-w-[75ch]">{m.detail}</p>
                    {m.steps.length > 0 && (
                      <ul className="grid sm:grid-cols-2 gap-x-[clamp(1.5rem,4vw,3rem)] mt-4">
                        {m.steps.map((s) => (
                          <li key={s.t} className="border-t border-line py-3">
                            <span className="flex items-center gap-2 font-semibold text-ink mb-0.5">
                              <Icon name="check" className="w-[17px] h-[17px] text-safe-magenta shrink-0" /> {s.t}
                            </span>
                            <span className="block text-slate text-[0.93rem]">{s.d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              </Reveal>
            ))}
          </ol>

          <Reveal className="border-l-4 border-safe-magenta/60 pl-5 sm:pl-6 mt-[clamp(2.5rem,5vw,4rem)] sm:flex sm:items-center sm:justify-between gap-6">
            <div className="max-w-[640px]">
              <h2 className="text-[1.25rem] mb-1.5">Vente d'un terrain à bâtir ?</h2>
              <p className="text-slate">La mission G1 peut être exigée par la loi ELAN, à la charge du vendeur, en zone d'argiles.</p>
            </div>
            <Link to="/loi-elan" className="btn btn-primary shrink-0 mt-4 sm:mt-0">Comprendre la loi ELAN <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
          </Reveal>
        </div>
      </section>

      <Steps
        label="Repères"
        title="Le bon moment pour chaque mission"
        intro="Chaque mission correspond à une étape précise de la vie de votre projet."
        steps={moments}
        tone="mist"
      />

      <CtaBand title="Une mission à cadrer ?" text="G1 préalable, G2 de conception, G3 et G4 en exécution ou G5 de diagnostic : nous définissons ensemble la mission adaptée à l'avancement de votre projet." />
    </>
  );
}
