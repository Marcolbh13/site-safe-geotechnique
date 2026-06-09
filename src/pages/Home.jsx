import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import DepthScale from '../components/DepthScale.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { COMPANY, QUALIFS, MISSIONS } from '../data/site.js';

import heroForeuse from '../assets/images/hero-foreuse.webp';
import laboPresse from '../assets/images/labo-presse.webp';

const services = [
  { icon: 'drill', title: 'Sondage', to: '/expertise#sondage',
    text: "Forage semi-destructif, forage destructif, carottage, prélèvements environnementaux : nos solutions d'identification et de classification des sols." },
  { icon: 'flask', title: 'Laboratoire', to: '/expertise#laboratoire',
    text: "Classification GTR, VBS, Atterberg, granulométrie, sédimentométrie, masse volumique, Proctor + IPI, cisaillement : identifier les sols par leur nature et leur résistance." },
  { icon: 'compass', title: 'Ingénierie', to: '/expertise#missions',
    text: "Interprétation des essais, recherche des documents géologiques et cartographiques, missions G1 à G5 : étudier le comportement mécanique des sols et des roches." },
];

const partenaires = [
  { nom: 'Foretude', d: "Bureau d'études spécialisé dans le forage dirigé depuis plus de 15 ans." },
  { nom: 'FTCS Forage', d: 'Spécialiste du forage dirigé et de la tarière depuis plus de 20 ans.' },
];

export default function Home() {
  return (
    <>
      <Seo title="SAFE Géotechnique | Bureau d'études en géotechnique"
        description="SAFE Géotechnique, bureau d'études en géotechnique : sondages, essais en laboratoire et missions G1 à G5. Garantir la sécurité de vos projets est notre unique objectif." />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-line bg-safe-soft">
        <div className="absolute inset-0 strata opacity-60" aria-hidden="true" />
        <div className="container-safe relative grid items-center gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[1.05fr_0.95fr]" style={{ paddingBlock: 'clamp(2.75rem,6vw,5rem)' }}>
          <div>
            <p className="label mb-5">{COMPANY.baseline}</p>
            <h1 className="animate-fade-up">Garantir la sécurité de vos projets</h1>
            <p className="lead mt-5 max-w-[52ch]">
              Chez SAFE Géotechnique, c'est notre unique objectif. De l'étude au
              diagnostic, nous gérons l'ensemble des missions géotechniques
              <span className="mono-tag"> G1 à G5</span> et assurons le suivi de
              chaque étape de votre projet.
            </p>
            <div className="mt-8 flex flex-wrap gap-[0.85rem]">
              <Link to="/contact" className="btn btn-primary">Demander un devis <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
              <Link to="/expertise" className="btn btn-ghost">Découvrir notre expertise</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Qualifications">
              {QUALIFS.map((q) => (
                <li key={q} className="font-mono text-[0.8rem] font-semibold text-safe-magenta bg-white border border-line rounded-full px-3.5 py-1.5">{q}</li>
              ))}
              <li className="font-mono text-[0.8rem] text-slate self-center">· sécurité des réseaux existants</li>
            </ul>
          </div>

          <Reveal className="relative">
            <figure className="rounded-xl2 overflow-hidden shadow-sflg">
              <img src={heroForeuse} alt="Atelier de sondage SAFE Géotechnique sur un chantier"
                className="w-full object-cover aspect-[4/3]" width="1600" height="1200" fetchpriority="high" />
            </figure>
            <div className="absolute -bottom-5 -left-3 sm:left-5 bg-white rounded-2xl shadow-sfmd border border-line px-5 py-3.5">
              <span className="block font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">Missions gérées</span>
              <span className="block font-mono font-semibold text-[1.4rem] text-safe-magenta mt-0.5">G1 → G5</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section">
        <div className="container-safe">
          <Reveal className="max-w-[680px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="label mb-4">Nos activités</p>
            <h2>Trois savoir-faire, une seule équipe</h2>
          </Reveal>
          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <Link to={s.to} className="card card-link flex flex-col">
                  <span className="icon-badge mb-5"><Icon name={s.icon} /></span>
                  <h3 className="mb-2.5">{s.title}</h3>
                  <p className="text-slate text-[0.97rem]">{s.text}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 font-bold text-safe-magenta text-[0.95rem]">
                    En savoir plus <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSIONS G1-G5 (bande sombre) ===== */}
      <section className="relative bg-plum text-white strata overflow-hidden">
        <div className="container-safe section">
          <Reveal className="max-w-[720px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="label on-dark mb-4">Notre expertise au service de votre projet</p>
            <h2 className="text-white">Les missions géotechniques G1 à G5</h2>
            <p className="mt-4 text-white/80 text-[1.08rem] max-w-[60ch]">
              SAFE Géotechnique vous accompagne tout au long de votre projet, de
              l'étude préalable jusqu'au diagnostic de l'ouvrage.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MISSIONS.map((m, i) => (
              <Reveal key={m.code} delay={i * 60} className="rounded-2xl border border-white/12 bg-white/[0.04] p-5">
                <span className="font-mono font-semibold text-safe-rose text-[1.05rem]">{m.code}</span>
                <h3 className="text-white text-[1.08rem] mt-1 mb-1.5">{m.t}</h3>
                <p className="text-white/70 text-[0.92rem]">{m.d}</p>
              </Reveal>
            ))}
            <Reveal delay={MISSIONS.length * 60} className="rounded-2xl bg-safe-gradient p-5 flex flex-col justify-center">
              <p className="text-white font-semibold mb-3">Une mission à cadrer ?</p>
              <Link to="/expertise#missions" className="btn btn-light btn-sm self-start">
                Voir le détail <Icon name="arrow" className="arrow w-[16px] h-[16px]" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MATÉRIEL + ÉCHELLE ===== */}
      <section className="section">
        <div className="container-safe grid items-center gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="flex justify-center">
            <DepthScale className="w-full max-w-[300px] h-auto" />
          </Reveal>
          <Reveal delay={120}>
            <p className="label mb-4">Notre matériel</p>
            <h2>Des ateliers EMCI pour atteindre la bonne profondeur</h2>
            <p className="lead mt-4 mb-7">
              Sondages pressiométriques, destructifs et carottés, dans le respect
              des normes en vigueur.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card">
                <span className="mono-tag text-[1.05rem]">EMCI 4.50</span>
                <div className="stat my-2"><b>40 m</b></div>
                <p className="text-slate text-[0.93rem]">Sondages pressiométriques, destructifs et carottés jusqu'à 40 m de profondeur.</p>
              </div>
              <div className="card">
                <span className="mono-tag text-[1.05rem]">EMCI 7.50</span>
                <div className="stat my-2"><b>100 m</b></div>
                <p className="text-slate text-[0.93rem]">Sondages pressiométriques, destructifs et carottés jusqu'à 100 m de profondeur.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== QUALITÉ / SÉCURITÉ ===== */}
      <section className="section-tight">
        <div className="container-safe">
          <Reveal className="rounded-xl2 border border-line bg-mist p-[clamp(1.75rem,4vw,2.75rem)] grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <p className="label mb-4">Sécurité &amp; règles de l'art</p>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)]">Le respect de la législation, dans les règles de l'art</h2>
              <p className="text-slate mt-4 max-w-[60ch]">
                Nos équipes mettent un point d'honneur à respecter la législation
                en matière de sécurité des biens et des personnes. Notre personnel
                est qualifié et porte une attention particulière à la sécurité des
                réseaux existants.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2.5 lg:justify-end">
              {QUALIFS.map((q) => (
                <li key={q} className="font-mono font-semibold text-safe-magenta bg-white border border-line rounded-xl px-4 py-3 text-center min-w-[88px] shadow-sfsm">{q}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== LABORATOIRE (visuel) ===== */}
      <section className="section">
        <div className="container-safe grid items-center gap-[clamp(2rem,5vw,3.5rem)] md:grid-cols-2">
          <Reveal className="order-first md:order-none">
            <figure className="rounded-xl2 overflow-hidden shadow-sfmd">
              <img src={laboPresse} alt="Essai mécanique sur échantillon de sol au laboratoire SAFE" className="w-full object-cover aspect-[5/4]" loading="lazy" />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <p className="label mb-4">Laboratoire intégré</p>
            <h2>Identifier les sols par leur nature et leur résistance</h2>
            <p className="lead mt-4">
              Nos essais en laboratoire transforment chaque échantillon en données
              fiables pour l'ingénierie.
            </p>
            <ul className="ticks mt-6">
              <li><strong>Identification</strong> : GTR, granulométrie, sédimentométrie, VBS, limites d'Atterberg.</li>
              <li><strong>État et compactage</strong> : teneur en eau, masse volumique, Proctor + IPI.</li>
              <li><strong>Résistance mécanique</strong> : cisaillement de Casagrande et essais triaxiaux.</li>
            </ul>
            <div className="mt-7"><Link to="/expertise#laboratoire" className="btn btn-ghost">Le laboratoire en détail <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link></div>
          </Reveal>
        </div>
      </section>

      {/* ===== PARTENAIRES ===== */}
      <section className="section-tight">
        <div className="container-safe">
          <Reveal className="max-w-[680px] mb-8">
            <p className="label mb-4">Nos partenaires</p>
            <h2>Jusqu'aux travaux sans tranchée</h2>
            <p className="text-slate mt-4">
              De l'étude de sol à la phase finale des travaux sans tranchée, nous
              collaborons avec nos partenaires pour vous assurer les meilleures
              prestations.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {partenaires.map((p, i) => (
              <Reveal key={p.nom} delay={i * 90} className="card flex items-start gap-4">
                <span className="icon-badge shrink-0"><Icon name="compass" /></span>
                <div>
                  <h3 className="text-[1.15rem] mb-1">{p.nom}</h3>
                  <p className="text-slate text-[0.95rem]">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOI ELAN ===== */}
      <section className="section-tight">
        <div className="container-safe">
          <Reveal className="rounded-xl2 border border-line bg-safe-soft p-[clamp(1.75rem,4vw,2.75rem)] sm:flex sm:items-center sm:justify-between gap-8">
            <div className="max-w-[640px]">
              <p className="label mb-3">Vente de terrain</p>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)]">La loi ELAN et l'étude de sol obligatoire</h2>
              <p className="text-slate mt-3">Vous vendez un terrain constructible en zone argileuse ? Une étude géotechnique préalable peut être requise. Nous vous expliquons tout.</p>
            </div>
            <div className="mt-6 sm:mt-0 shrink-0">
              <Link to="/loi-elan" className="btn btn-primary">Comprendre la loi ELAN <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
