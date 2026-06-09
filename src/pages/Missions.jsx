import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { MISSIONS } from '../data/site.js';

export default function Missions() {
  return (
    <>
      <Seo title="Missions géotechniques G1 à G5"
        description="SAFE Géotechnique réalise les missions géotechniques G1 à G5 : étude préalable, étude de conception, étude et suivi d'exécution, supervision et diagnostic géotechnique." />

      <PageHero
        label="Ingénierie · Missions G1 à G5"
        title="De l'étude préalable au diagnostic d'ouvrage"
        intro="Nous interprétons les essais et rassemblons les documents géologiques et cartographiques du site pour étudier le comportement mécanique des sols et des roches. La norme structure cette ingénierie en cinq missions, chacune attachée à une phase précise du projet."
      />

      <section className="section">
        <div className="container-safe">
          <ol className="relative grid gap-5 sm:pl-8 sm:before:absolute sm:before:left-[11px] sm:before:top-2 sm:before:bottom-2 sm:before:w-0.5 sm:before:bg-line">
            {MISSIONS.map((m, i) => (
              <Reveal as="li" key={m.code} delay={i * 60} className="relative">
                <span className="hidden sm:block absolute -left-8 top-3 w-6 h-6 rounded-full bg-safe-gradient ring-4 ring-white" aria-hidden="true" />
                <div className="rounded-xl2 border border-line bg-white p-[clamp(1.25rem,2.5vw,1.9rem)] shadow-sfsm">
                  <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    <span className="inline-grid place-items-center w-12 h-12 rounded-[14px] bg-safe-gradient text-white font-mono font-semibold text-[1.1rem] shrink-0">{m.code}</span>
                    <h2 className="text-[1.2rem] flex-1 min-w-[180px]">{m.t}</h2>
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-safe-magenta bg-safe-soft border border-line rounded-full px-3 py-1">{m.phase}</span>
                  </div>
                  <p className="text-slate">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-8 rounded-xl2 bg-safe-soft border border-line p-[clamp(1.5rem,3vw,2rem)] flex flex-wrap items-center gap-5 justify-between">
            <div className="max-w-[640px]">
              <h2 className="text-[1.25rem] mb-1.5">Vente d'un terrain à bâtir ?</h2>
              <p className="text-slate">La mission G1 peut être exigée par la loi ELAN, à la charge du vendeur, en zone d'argiles.</p>
            </div>
            <Link to="/loi-elan" className="btn btn-primary shrink-0">Comprendre la loi ELAN <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Une mission à cadrer ?" text="G1 préalable, G2 de conception, G3/G4 en exécution ou G5 de diagnostic : nous définissons ensemble la mission adaptée à l'avancement de votre projet." />
    </>
  );
}
