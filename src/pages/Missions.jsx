import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { MISSIONS } from '../data/site.js';

export default function Missions() {
  return (
    <>
      <Seo title="Missions géotechniques G1 à G5"
        description="Les missions géotechniques G1 à G5 expliquées simplement : étude préalable, conception, étude et suivi d'exécution, supervision et diagnostic géotechnique." />

      <PageHero
        label="Ingénierie · Missions G1 à G5"
        title="De l'étude préalable au diagnostic d'ouvrage"
        intro="Nous interprétons les essais et rassemblons les documents géologiques et cartographiques du site pour étudier le comportement mécanique des sols et des roches. La norme structure cette ingénierie en cinq missions : voici, simplement, à quoi sert chacune."
      />

      <section className="section">
        <div className="container-safe grid gap-8">
          {MISSIONS.map((m, i) => (
            <Reveal as="article" key={m.code} delay={(i % 2) * 60}
              className="rounded-xl2 border border-line bg-white shadow-sfsm overflow-hidden">
              {/* En-tête de la mission */}
              <div className="p-[clamp(1.5rem,3vw,2.25rem)]">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-grid place-items-center w-14 h-14 rounded-[16px] bg-safe-gradient text-white font-mono font-semibold text-[1.25rem] shrink-0">{m.code}</span>
                  <h2 className="text-[1.3rem] flex-1 min-w-[200px]">{m.t}</h2>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-safe-magenta bg-safe-soft border border-line rounded-full px-3 py-1">{m.phase}</span>
                </div>

                {/* En clair (accessible) */}
                <p className="flex gap-3 text-ink text-[1.05rem] bg-safe-soft border border-line rounded-2xl p-4 mb-4">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-safe-magenta shrink-0 mt-1">En clair</span>
                  <span>{m.plain}</span>
                </p>

                <p className="text-slate">{m.detail}</p>

                {/* Sous-étapes */}
                {m.steps.length > 0 && (
                  <ul className="grid gap-3 mt-5 sm:grid-cols-2">
                    {m.steps.map((s) => (
                      <li key={s.t} className="rounded-2xl border border-line bg-cloud p-4">
                        <span className="flex items-center gap-2 font-semibold text-ink mb-1">
                          <Icon name="check" className="w-[18px] h-[18px] text-safe-magenta" /> {s.t}
                        </span>
                        <span className="block text-slate text-[0.93rem]">{s.d}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="font-mono text-[0.78rem] text-muted mt-5">À la charge : <span className="text-safe-magenta">{m.charge}</span></p>
              </div>
            </Reveal>
          ))}

          <Reveal className="rounded-xl2 bg-safe-soft border border-line p-[clamp(1.5rem,3vw,2rem)] flex flex-wrap items-center gap-5 justify-between">
            <div className="max-w-[640px]">
              <h2 className="text-[1.25rem] mb-1.5">Vente d'un terrain à bâtir ?</h2>
              <p className="text-slate">La mission G1 peut être exigée par la loi ELAN, à la charge du vendeur, en zone d'argiles.</p>
            </div>
            <Link to="/loi-elan" className="btn btn-primary shrink-0">Comprendre la loi ELAN <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
          </Reveal>
        </div>
      </section>

      {/* Emplacement d'image (chantier / ingénierie) */}
      <section className="section-tight">
        <div className="container-safe">
          <Reveal>
            <ImagePlaceholder ratio="21 / 9" icon="compass" hint="Photo d'équipe ou de chantier géotechnique (à fournir)" className="w-full" />
          </Reveal>
        </div>
      </section>

      <CtaBand title="Une mission à cadrer ?" text="G1 préalable, G2 de conception, G3 et G4 en exécution ou G5 de diagnostic : nous définissons ensemble la mission adaptée à l'avancement de votre projet." />
    </>
  );
}
