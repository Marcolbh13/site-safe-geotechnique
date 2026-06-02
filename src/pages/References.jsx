import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';
import chantierNuit from '../assets/images/chantier-nuit.webp';

/*
  ⚠️ DROITS D'USAGE DES MARQUES CLIENTS NON CONFIRMÉS.
  Aucun logo ni nom de client n'est publié tant que l'autorisation écrite
  de chaque client n'a pas été obtenue.

  Liste de travail (NE PAS PUBLIER sans accord — cf. A-VALIDER.md) :
    Free / Axians · Natrans · Ville de Lille · Ministère de la Justice / DISP ·
    SDIS · CAPSO · Sica & Oise · HDF Construction · SAS Pavard Lele · Action ·
    Tenerno · Torréfacteur de Louis · Port fluvial de Lille.
  Chantier de référence cité : ENGIE à Calais (à documenter et faire valider).

  Quand les accords seront obtenus : remplacer les emplacements ci-dessous
  par les logos (ou noms) autorisés.
*/

const secteurs = [
  { icon: 'building', title: "Maîtres d'ouvrage publics", text: "Collectivités, services de l'État et établissements publics, pour leurs équipements et leurs infrastructures." },
  { icon: 'road', title: 'Réseaux et télécoms', text: "Opérateurs et intégrateurs de réseaux, pour le déploiement d'infrastructures linéaires." },
  { icon: 'compass', title: 'Énergie', text: "Acteurs de l'énergie, pour des projets nécessitant une reconnaissance fine des sols." },
  { icon: 'home', title: 'Bâtiment et construction', text: 'Entreprises de construction et promoteurs, pour la portance et les fondations de leurs ouvrages.' },
  { icon: 'users', title: 'Industrie et logistique', text: "Sites industriels et plateformes logistiques, pour leurs projets d'aménagement et d'extension." },
  { icon: 'water', title: 'Activités fluviales et portuaires', text: "Aménagements en bord d'eau, où la connaissance des sols et de l'eau est déterminante." },
];

export default function References() {
  return (
    <>
      <Seo
        title="Références"
        description="SAFE Géotechnique intervient pour des maîtres d'ouvrage publics et privés : collectivités, réseaux, énergie, construction, industrie et activités portuaires."
      />
      <PageHero
        kicker="Entreprise · Références"
        title="Ils nous font confiance"
        intro="Nous intervenons aux côtés d'acteurs publics et privés, sur des projets variés par leur taille et leur nature. Voici les grands types de maîtres d'ouvrage que nous accompagnons."
      />

      <section className="section">
        <div className="container-safe">
          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] sm:grid-cols-2 lg:grid-cols-3">
            {secteurs.map((s) => (
              <div key={s.title} className="card">
                <span className="icon-badge mb-[1.1rem]">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mb-[0.6rem]">{s.title}</h3>
                <p className="text-slate">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau image */}
      <section className="relative">
        <div className="relative h-[clamp(240px,34vw,380px)] overflow-hidden">
          <img
            src={chantierNuit}
            alt="Chantier du groupe en intervention de nuit sur un réseau enterré"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum/85 via-plum/55 to-transparent" />
          <div className="container-safe relative h-full flex items-center">
            <div className="max-w-[540px] text-white">
              <h2 className="text-white">Des chantiers de toutes tailles, de jour comme de nuit</h2>
              <p className="mt-4 text-white/90 text-[1.05rem]">
                Nous nous adaptons aux contraintes d'exploitation de nos clients,
                y compris sur des interventions sensibles ou en horaires décalés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholders logos */}
      <section className="section bg-mist">
        <div className="container-safe">
          <div className="text-center max-w-[720px] mx-auto mb-[clamp(2rem,4vw,3rem)]">
            <p className="kicker justify-center mb-[0.9rem]">Une relation de confiance</p>
            <h2>Des références publiques et privées</h2>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-7">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                aria-hidden="true"
                className="aspect-[16/9] rounded-[14px] bg-white border border-dashed border-line grid place-items-center text-muted text-[0.8rem] tracking-[0.04em]"
              >
                Logo client
              </div>
            ))}
          </div>

          <p className="note max-w-[720px] mx-auto">
            Par respect des droits d'usage des marques, nous n'affichons pas les
            logos ni les noms de nos clients sans leur accord. La liste détaillée
            de nos références, ainsi que des exemples de chantiers, peut vous être
            communiquée sur demande.
          </p>
        </div>
      </section>

      <CtaBand
        title="Vous souhaitez des références précises ?"
        text="Contactez-nous : nous vous présenterons des exemples de chantiers proches de votre projet."
      />
    </>
  );
}
