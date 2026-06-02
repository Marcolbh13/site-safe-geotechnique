import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';
import forageChamp from '../assets/images/forage-champ.webp';

const piliers = [
  {
    icon: 'sun',
    title: 'Énergie et empreinte',
    text: "Nous cherchons à réduire l'empreinte de notre activité et à recourir davantage aux énergies renouvelables, notamment par l'installation de panneaux solaires sur nos locaux.",
  },
  {
    icon: 'users',
    title: 'Nos équipes',
    text: 'La formation continue, la sécurité au travail et la transmission des savoir-faire sont au cœur de notre fonctionnement.',
  },
  {
    icon: 'leaf',
    title: 'Respect des sites',
    text: 'Sur le terrain, nous veillons à limiter notre emprise et à préserver les sites sur lesquels nous intervenons.',
  },
];

export default function Rse() {
  return (
    <>
      <Seo
        title="RSE"
        description="L'engagement responsable de SAFE Géotechnique : maîtrise de l'empreinte énergétique, sécurité et formation des équipes, respect des sites d'intervention."
      />
      <PageHero
        kicker="Entreprise · RSE"
        title="Notre engagement responsable"
        intro="La géotechnique sécurise les projets de construction. Nous voulons exercer ce métier de façon responsable, envers l'environnement, nos équipes et les territoires où nous intervenons."
      />

      <section className="section">
        <div className="container-safe">
          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-3">
            {piliers.map((p) => (
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

      {/* Énergie */}
      <section className="section bg-mist">
        <div className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] md:grid-cols-2">
          <div>
            <p className="kicker mb-[0.9rem]">Énergie</p>
            <h2>Vers une activité plus sobre en énergie</h2>
            <p className="lead mt-4">
              Réduire notre consommation et produire une partie de notre énergie
              font partie de nos axes de progrès. L'installation de panneaux
              solaires sur nos locaux s'inscrit dans cette démarche, comme notre
              attention aux énergies renouvelables que nous croisons sur nos
              chantiers.
            </p>
            <p className="mt-4 text-slate">
              Nous préférons avancer concrètement et rendre compte de nos actions
              à mesure qu'elles se déploient, plutôt que d'afficher des promesses
              abstraites.
            </p>
          </div>
          <figure className="rounded-xl2 overflow-hidden shadow-sfmd order-first md:order-none">
            <img
              src={forageChamp}
              alt="Atelier de forage du groupe en zone rurale, éoliennes en arrière-plan"
              className="w-full h-full object-cover aspect-[16/10]"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container-safe">
          <div className="max-w-narrow">
          <p className="kicker mb-[0.9rem]">Notre démarche</p>
          <h2>Une RSE concrète, sans esbroufe</h2>
          <p className="lead mt-4">
            Qualité des prestations, sécurité des personnes et respect de
            l'environnement guident notre quotidien. Cette page sera enrichie au
            fil de nos actions et des indicateurs que nous pourrons documenter.
          </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Échangeons sur nos pratiques"
        text="Vous avez des exigences RSE pour votre projet ? Parlons-en : nous adaptons nos interventions en conséquence."
      />
    </>
  );
}
