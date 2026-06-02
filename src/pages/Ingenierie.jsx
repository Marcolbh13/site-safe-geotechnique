import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';

const logiciels = [
  { nom: 'FoxTech', desc: 'Calculs géotechniques et dimensionnement de fondations.' },
  { nom: 'Carrara', desc: "Exploitation et synthèse des données de sondages et d'essais." },
  { nom: 'Talren', desc: "Vérification de la stabilité des ouvrages et des pentes." },
];

export default function Ingenierie() {
  return (
    <>
      <Seo
        title="Ingénierie géotechnique"
        description="Missions géotechniques G1 et G2 : étude de site, avant-projet et projet. SAFE Géotechnique s'appuie sur des outils de calcul reconnus (FoxTech, Carrara, Talren)."
      />
      <PageHero
        kicker="Nos métiers · Ingénierie"
        title="Ingénierie géotechnique"
        intro="Au-delà du sondage et de l'essai, nous transformons la donnée en recommandations concrètes pour vos ouvrages, de l'étude de site à la phase projet."
      />

      {/* Missions G1 / G2 */}
      <section className="section">
        <div className="container-safe">
          <div className="max-w-[720px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="kicker mb-[0.9rem]">Nos missions</p>
            <h2>De l'étude de site à la conception</h2>
            <p className="lead mt-4">
              Nous réalisons des missions géotechniques structurées, qui
              sécurisent la conception de votre ouvrage et la maîtrise des
              risques liés au sol.
            </p>
          </div>

          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-2">
            <article className="card">
              <span className="inline-block text-[0.78rem] font-bold tracking-[0.06em] uppercase text-white bg-safe-gradient px-[0.7rem] py-1 rounded-full mb-[0.9rem]">
                Mission G1
              </span>
              <h3 className="mb-[0.6rem]">Étude géotechnique préalable</h3>
              <p className="text-slate">
                La mission G1 intervient en amont du projet. Elle pose le premier
                cadre géotechnique du site et des aléas à prendre en compte.
              </p>
              <ul className="ticks mt-4">
                <li>Première reconnaissance du contexte géotechnique du site</li>
                <li>Identification des principaux aléas</li>
                <li>Cadre pour les études de conception ultérieures</li>
              </ul>
            </article>

            <article className="card">
              <span className="inline-block text-[0.78rem] font-bold tracking-[0.06em] uppercase text-white bg-safe-gradient px-[0.7rem] py-1 rounded-full mb-[0.9rem]">
                Mission G2
              </span>
              <h3 className="mb-[0.6rem]">Étude de conception : AVP et PRO</h3>
              <p className="text-slate">
                La mission G2 accompagne la conception de l'ouvrage, de
                l'avant-projet (AVP) à la phase projet (PRO).
              </p>
              <ul className="ticks mt-4">
                <li><strong>AVP</strong> : principes de fondation et premiers dimensionnements</li>
                <li><strong>PRO</strong> : dimensionnements et dispositions constructives</li>
                <li>Recommandations adaptées à votre ouvrage</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Outils de calcul */}
      <section className="section bg-mist">
        <div className="container-safe">
          <div className="max-w-[720px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="kicker mb-[0.9rem]">Nos outils</p>
            <h2>Des logiciels de calcul reconnus</h2>
            <p className="lead mt-4">
              Nos études de conception (G2) s'appuient sur des outils de calcul
              spécialisés, employés pour le dimensionnement et la vérification de
              la stabilité des ouvrages géotechniques.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {logiciels.map((l) => (
              <div key={l.nom} className="card flex items-start gap-4">
                <span className="icon-badge shrink-0">
                  <Icon name="compass" />
                </span>
                <div>
                  <span className="block text-[1.2rem] font-bold tracking-tight">
                    {l.nom}
                  </span>
                  <p className="text-slate text-[0.95rem] mt-1">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loi Élan */}
      <section className="section">
        <div className="container-safe grid items-start gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="kicker mb-[0.9rem]">Vente de terrain</p>
            <h2>Loi Élan : l'étude géotechnique préalable</h2>
            <p className="lead mt-4">
              Issue de la loi Élan du 23 novembre 2018, la réglementation impose,
              lors de la vente d'un terrain non bâti constructible situé en zone
              d'exposition moyenne ou forte au retrait-gonflement des argiles, la
              réalisation d'une étude géotechnique préalable (mission de type G1),
              à la charge du vendeur du terrain.
            </p>
            <p className="mt-4 text-slate">
              Annexée à la promesse puis à l'acte de vente, cette étude informe
              l'acquéreur sur la nature du sol et les précautions à prévoir face
              au risque de mouvement des sols argileux. Codifiée aux articles
              L.112-20 et suivants du Code de la construction et de l'habitation,
              elle est en vigueur depuis le 1ᵉʳ janvier 2020 et reste valable
              trente ans tant que le terrain n'a pas été remanié.
            </p>
            <p className="note mt-6">
              Le périmètre exact (zones concernées, contenu de la mission) est
              fixé par la réglementation en vigueur et peut évoluer ; nous vous
              orientons selon votre situation précise.
            </p>
          </div>
          <aside className="bg-safe-soft border border-line rounded-xl2 p-[clamp(1.5rem,3vw,2rem)]">
            <h3 className="mb-[0.6rem]">Vous vendez un terrain ?</h3>
            <p className="text-slate mb-[1.3rem]">
              Nous réalisons l'étude géotechnique préalable attendue lors de la
              vente et sécurisons votre transaction.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Étudier mon cas <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
            </Link>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Une mission d'ingénierie à cadrer ?"
        text="G1 préalable ou G2 de conception : nous définissons ensemble la mission qui correspond à l'avancement de votre projet."
      />
    </>
  );
}
