import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import ClientsCarousel from '../components/ClientsCarousel.jsx';
import Decor from '../components/Decor.jsx';
import Reasons from '../components/Reasons.jsx';
import Steps from '../components/Steps.jsx';
import { COMPANY, QUALIFS, MISSIONS, PARTNERS, GROUP, SAFOR, TEAM } from '../data/site.js';

const reasons = [
  { icon: 'layers', t: 'Une chaîne intégrée', d: 'Sondage, laboratoire et ingénierie réunis : la donnée de terrain reste cohérente jusqu\'à la recommandation.' },
  { icon: 'shield', t: 'Une équipe qualifiée', d: 'Personnel qualifié AIPR, H0B0 et SST, attentif à la sécurité des réseaux existants.' },
  { icon: 'check', t: 'Le respect des normes', d: 'Essais et missions conduits dans le respect de la législation et des règles de l\'art.' },
  { icon: 'compass', t: 'L\'appui d\'un groupe', d: 'Membre du Groupe RESUM, pionnier du forage sans tranchée depuis plus de 20 ans.' },
];

const methode = [
  { t: 'Écoute & cadrage', d: 'Nous analysons votre projet, votre terrain et vos contraintes pour définir la mission adaptée.' },
  { t: 'Sondages sur le terrain', d: 'Nos ateliers reconnaissent les sols et prélèvent les échantillons directement sur site.' },
  { t: 'Essais en laboratoire', d: 'Les échantillons sont identifiés et caractérisés selon un protocole d\'essais normalisé.' },
  { t: 'Rapport & recommandations', d: 'Nous interprétons les résultats et remettons des recommandations claires et exploitables.' },
];

// Logiciels de calcul géotechnique de la suite Terrasol (Setec).
const logiciels = [
  { nom: 'FOXTA', url: 'https://terrasol.setec.fr/logiciels/foxta/',
    d: 'Calcul des fondations superficielles et profondes, groupes de pieux, radiers et interactions sol-structure.' },
  { nom: 'K-REA', url: 'https://terrasol.setec.fr/logiciels/k-rea/',
    d: 'Dimensionnement des écrans de soutènement : parois, rideaux de palplanches, calcul aux coefficients de réaction.' },
  { nom: 'TALREN', url: 'https://terrasol.setec.fr/logiciels/talren/',
    d: 'Analyse de la stabilité des pentes et talus, et des ouvrages en sol renforcé (clouage, soutènements).' },
];

import heroForeuse from '../assets/images/hero-foreuse.webp';
import camionSafe from '../assets/images/foreuse-camion-safe.webp';
import laboTriaxial from '../assets/images/labo-triaxial.webp';
import saforLogo from '../assets/logos/safor.webp';
import illIngenierie from '../assets/illustrations/ill-ingenierie.svg';
import illSecurite from '../assets/illustrations/ill-securite.svg';
import illPourquoi from '../assets/illustrations/ill-pourquoi.svg';
import illMethode from '../assets/illustrations/ill-methode.svg';
import logicielEcran from '../assets/images/logiciel-ecran.webp';

const services = [
  { icon: 'drill', title: 'Sondage', to: '/sondage',
    text: "Forage semi-destructif, forage destructif, carottage, prélèvements environnementaux : nos solutions d'identification et de classification des sols." },
  { icon: 'flask', title: 'Laboratoire', to: '/laboratoire',
    text: "Classification GTR, VBS, Atterberg, granulométrie, sédimentométrie, masse volumique, Proctor + IPI, cisaillement : identifier les sols par leur nature et leur résistance." },
  { icon: 'compass', title: 'Ingénierie', to: '/missions',
    text: "Interprétation des essais, recherche des documents géologiques et cartographiques, missions G1 à G5 : étudier le comportement mécanique des sols et des roches." },
];

export default function Home() {
  return (
    <>
      <Seo title="SAFE Géotechnique | Bureau d'études en géotechnique"
        description="SAFE Géotechnique, bureau d'études en géotechnique : sondages, essais en laboratoire et missions G1 à G5. Garantir la sécurité de vos projets est notre unique objectif." />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-line bg-safe-soft">
        <div className="absolute inset-0 strata opacity-60" aria-hidden="true" />
        <Decor />
        <div className="container-safe relative z-10 grid items-center gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[1.05fr_0.95fr]" style={{ paddingBlock: 'clamp(2.75rem,6vw,5rem)' }}>
          <div>
            <p className="label mb-5">{COMPANY.baseline}</p>
            <h1 className="animate-fade-up text-balance text-[clamp(2rem,4.4vw,3.15rem)]">
              Garantir la sécurité<br className="hidden sm:block" /> de vos projets
            </h1>
            <p className="lead mt-5 max-w-[52ch]">
              Chez SAFE Géotechnique, c'est notre unique objectif. De l'étude au
              diagnostic, nous gérons l'ensemble des missions géotechniques
              <span className="mono-tag"> G1 à G5</span> et assurons le suivi de
              chaque étape de votre projet.
            </p>
            <div className="mt-8 flex flex-wrap gap-[0.85rem]">
              <Link to="/contact" className="btn btn-primary">Demander un devis <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
              <Link to="/sondage" className="btn btn-ghost">Découvrir notre expertise</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Qualifications">
              {QUALIFS.map((q) => (
                <li key={q} className="font-mono text-[0.8rem] font-semibold text-safe-magenta bg-white border border-line rounded-full px-3.5 py-1.5">{q}</li>
              ))}
              <li className="font-mono text-[0.8rem] text-slate self-center">· sécurité des réseaux existants</li>
            </ul>
          </div>

          <div className="relative">
            <figure className="rounded-xl2 overflow-hidden shadow-sflg">
              <img src={heroForeuse} alt="Atelier de sondage SAFE Géotechnique sur un chantier"
                className="w-full object-cover aspect-[4/3]" width="1600" height="1200" fetchpriority="high" />
            </figure>
            <div className="absolute -bottom-5 -left-3 sm:left-5 bg-white rounded-2xl shadow-sfmd border border-line px-5 py-3.5">
              <span className="block font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">Missions gérées</span>
              <span className="block font-mono font-semibold text-[1.4rem] text-safe-magenta mt-0.5">G1 → G5</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section relative overflow-hidden">
        <Decor />
        <div className="container-safe relative z-10">
          <Reveal className="max-w-[680px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="label mb-4">Nos activités</p>
            <h2>Trois savoir-faire, une seule équipe</h2>
          </Reveal>
          <div className="grid md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}
                className={
                  'group ' +
                  (i > 0
                    ? 'border-t border-line pt-9 mt-9 md:border-t-0 md:pt-0 md:mt-0 md:border-l md:pl-[clamp(1.5rem,3vw,2.75rem)]'
                    : 'md:pr-[clamp(1.5rem,3vw,2.75rem)]')
                }
              >
                <Link to={s.to} className="block">
                  <span className="relative inline-grid place-items-center w-12 h-12 mb-5" aria-hidden="true">
                    <span className="absolute inset-0 rotate-45 rounded-[26%] border-2 border-safe-magenta/35 transition-colors group-hover:border-safe-magenta" />
                    <Icon name={s.icon} className="relative w-6 h-6 text-safe-magenta" />
                  </span>
                  <h3 className="mb-2.5 transition-colors group-hover:text-safe-magenta">{s.title}</h3>
                  <p className="text-slate text-[0.97rem]">{s.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-safe-magenta text-[0.95rem]">
                    En savoir plus <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BANDE PHOTO TERRAIN ===== */}
      <section className="relative">
        <div className="relative h-[clamp(320px,46vw,520px)] overflow-hidden">
          <img src={camionSafe} alt="Atelier de sondage et véhicule SAFE installés sur un chantier" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(110,35,80,.82) 0%, rgba(110,35,80,.4) 52%, rgba(110,35,80,0) 100%)' }} />
          <div className="container-safe relative h-full flex items-center">
            <Reveal className="max-w-[560px] text-white">
              <p className="label on-dark mb-3">Sur le terrain</p>
              <h2 className="text-white">Nous venons reconnaître vos sols, au plus près de votre projet</h2>
              <p className="mt-4 text-white/90 text-[1.06rem]">
                Nos ateliers se déplacent sur vos chantiers, en ville comme en
                rase campagne, dans le respect des règles de sécurité.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== POURQUOI NOUS CHOISIR (réassurance) ===== */}
      <Reasons
        label="Pourquoi nous choisir ?"
        title="La sécurité de vos projets, par une équipe spécialisée"
        intro="Nous réunissons les conditions d'une reconnaissance des sols fiable, du terrain à l'étude."
        items={reasons}
        illustration={illPourquoi}
        illSize="max-w-[280px]"
      />

      {/* ===== MISSIONS G1-G5 (clair) ===== */}
      <section className="section bg-mist border-y border-line">
        <div className="container-safe">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-x-10 gap-y-6 items-center mb-[clamp(2rem,4vw,3rem)]">
            <Reveal className="max-w-[680px]">
              <p className="label mb-4">Notre expertise au service de votre projet</p>
              <h2>Les missions géotechniques G1 à G5</h2>
              <p className="mt-4 text-slate text-[1.08rem] max-w-[62ch]">
                SAFE Géotechnique vous accompagne tout au long de votre projet, de
                l'étude préalable jusqu'au diagnostic de l'ouvrage.
              </p>
            </Reveal>
            <Reveal delay={120} className="hidden lg:block">
              <img src={illIngenierie} alt="" aria-hidden="true" className="w-full max-w-[360px] ml-auto" loading="lazy" />
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-[clamp(2rem,5vw,4rem)]">
            {MISSIONS.map((m, i) => (
              <Reveal key={m.code} delay={(i % 2) * 70} className="flex gap-5 py-5 border-t border-line">
                <span className="font-mono font-bold text-safe-magenta text-[1.15rem] shrink-0 w-10 mt-0.5">{m.code}</span>
                <div>
                  <h3 className="text-[1.05rem] mb-1">{m.t}</h3>
                  <p className="text-slate text-[0.93rem]">{m.short}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-9">
            <Link to="/missions" className="btn btn-primary">
              Voir le détail des missions <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== VIDÉO DE PRÉSENTATION ===== */}
      <section className="section relative overflow-hidden bg-safe-soft border-y border-line">
        <Decor />
        <div className="container-safe relative z-10 grid lg:grid-cols-2 gap-[clamp(1.5rem,4vw,3rem)] items-center">
          <Reveal>
            <p className="label mb-4">SAFE en vidéo</p>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)]">Découvrez notre métier en images</h2>
            <p className="text-slate mt-4 text-[1.05rem] max-w-[52ch]">
              Du sondage sur le terrain aux essais en laboratoire : une courte
              vidéo pour comprendre ce que fait SAFE Géotechnique.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-video rounded-xl2 overflow-hidden shadow-sflg bg-plum">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/AoUUbJXnGEc?rel=0"
                title="SAFE Géotechnique : vidéo de présentation"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== QUALITÉ / SÉCURITÉ ===== */}
      <section className="section">
        <div className="container-safe grid lg:grid-cols-[1.2fr_0.8fr] gap-x-[clamp(2rem,5vw,4rem)] gap-y-8 items-center">
          <Reveal>
            <p className="label mb-4">Sécurité &amp; règles de l'art</p>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)]">Le respect de la législation, dans les règles de l'art</h2>
            <p className="text-slate mt-4 max-w-[60ch]">
              Nos équipes mettent un point d'honneur à respecter la législation
              en matière de sécurité des biens et des personnes. Notre personnel
              est qualifié et porte une attention particulière à la sécurité des
              réseaux existants.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col items-center lg:items-end gap-7">
            <img src={illSecurite} alt="" aria-hidden="true" className="w-full max-w-[250px]" loading="lazy" />
            <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center lg:justify-end">
              {QUALIFS.map((q) => (
                <span key={q} className="font-mono font-bold text-safe-magenta text-[1.6rem] tracking-tight">{q}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== MÉTHODE ===== */}
      <Steps
        label="Notre méthode"
        title="Comment nous travaillons ?"
        intro="Une démarche simple et lisible, du premier échange à la remise du rapport."
        steps={methode}
        tone="mist"
        illustration={illMethode}
        illSize="max-w-[320px]"
      />

      {/* ===== LABORATOIRE (visuel) ===== */}
      <section className="section">
        <div className="container-safe grid items-center gap-[clamp(2rem,5vw,3.5rem)] md:grid-cols-2">
          <Reveal className="order-first md:order-none">
            <figure className="rounded-xl2 overflow-hidden shadow-sfmd">
              <img src={laboTriaxial} alt="Cellule d'essai triaxial au laboratoire SAFE" className="w-full object-cover aspect-[5/4]" loading="lazy" />
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
            <div className="mt-7"><Link to="/laboratoire" className="btn btn-ghost">Le laboratoire en détail <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link></div>
          </Reveal>
        </div>
      </section>

      {/* ===== OUTILS DE CALCUL (logiciels) ===== */}
      <section className="section relative overflow-hidden bg-mist border-y border-line">
        <Decor />
        <div className="container-safe relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-x-10 gap-y-6 items-center mb-[clamp(2rem,4vw,3rem)]">
            <Reveal className="max-w-[680px]">
              <p className="label mb-4">Nos outils de calcul</p>
              <h2>Des logiciels d'ingénierie de référence</h2>
              <p className="mt-4 text-slate text-[1.08rem] max-w-[64ch]">
                Pour le dimensionnement géotechnique, nous nous appuyons sur la
                suite <strong className="text-ink">Terrasol</strong> (Setec),
                référence du calcul en France : fondations, soutènements et
                stabilité des ouvrages sont vérifiés avec des outils éprouvés.
              </p>
            </Reveal>
            <Reveal delay={120} className="hidden lg:block">
              <figure className="ml-auto max-w-[420px] rounded-xl2 overflow-hidden shadow-sfmd border border-line">
                <img src={logicielEcran} alt="Logiciel d'analyse géotechnique sur un poste de travail SAFE" className="w-full object-cover aspect-[4/3]" loading="lazy" />
              </figure>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 border-t border-line">
            {logiciels.map((l, i) => (
              <Reveal
                key={l.nom}
                delay={i * 90}
                className={
                  'py-8 md:py-9 border-b border-line ' +
                  (i > 0
                    ? 'md:border-b-0 md:border-l md:border-line md:pl-[clamp(1.5rem,3vw,2.75rem)]'
                    : 'md:border-b-0 md:pr-[clamp(1.5rem,3vw,2.75rem)]')
                }
              >
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <h3 className="font-mono tracking-tight text-[1.5rem] mb-3 transition-colors group-hover:text-safe-magenta">{l.nom}</h3>
                  <p className="text-slate text-[0.97rem]">{l.d}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-safe-magenta text-[0.95rem]">
                    Découvrir <Icon name="arrow" className="arrow w-[16px] h-[16px] -rotate-45" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="text-muted text-[0.85rem] mt-6">Les liens ouvrent le site de l'éditeur Terrasol (Setec) dans un nouvel onglet.</p>
        </div>
      </section>

      {/* ===== QUI SOMMES-NOUS (équipe) ===== */}
      <section className="section relative overflow-hidden border-y border-line">
        <Decor />
        <div className="container-safe relative z-10">
          <Reveal className="max-w-[720px] mb-[clamp(2rem,4vw,3rem)]">
            <p className="label mb-4">Qui sommes-nous ?</p>
            <h2>Une équipe à taille humaine</h2>
            <p className="text-slate mt-4 text-[1.05rem]">
              Derrière SAFE Géotechnique, des femmes et des hommes qui suivent
              vos projets de bout en bout, de la direction au terrain. Pour les
              investigations, nous disposons de <strong className="text-ink">trois
              équipes terrain</strong> qui mènent les sondages et la reconnaissance
              des sols sur vos chantiers.
            </p>
          </Reveal>
          <div className="grid gap-x-[clamp(1.5rem,4vw,2.5rem)] gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                {/* emplacement photo (initiales en attendant la vraie photo) */}
                <div className="aspect-[4/5] rounded-xl2 mb-4 grid place-items-center bg-safe-soft border border-line overflow-hidden">
                  <span className="font-mono font-bold text-[2.2rem] text-safe-magenta/65">{p.initials}</span>
                </div>
                <h3 className="text-[1.15rem]">{p.name}</h3>
                <p className="text-safe-magenta font-semibold text-[0.95rem]">{p.role}</p>
                <p className="text-slate text-[0.9rem] mt-1.5">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GROUPE / SAFOR / PARTENAIRES ===== */}
      <section className="section relative overflow-hidden bg-mist border-y border-line">
        <Decor />
        <div className="container-safe relative z-10">
          <Reveal className="max-w-[720px] mb-[clamp(1.75rem,4vw,2.5rem)]">
            <p className="label mb-4">Notre groupe & nos partenaires</p>
            <h2>De l'étude de sol aux travaux sans tranchée</h2>
            <p className="text-slate mt-4 max-w-[64ch]">
              SAFE Géotechnique forme, avec Foretude Ingénierie, l'entité{' '}
              <strong className="text-ink">SAFOR</strong>, et appartient au{' '}
              <a href={GROUP.url} target="_blank" rel="noopener noreferrer" className="text-safe-magenta font-semibold underline-offset-2 hover:underline">{GROUP.name}</a>.
              De la reconnaissance des sols jusqu'à la phase finale des travaux
              sans tranchée, nous collaborons avec des sociétés spécialisées pour
              vous assurer les meilleures prestations.
            </p>
          </Reveal>

          {/* SAFOR — lockup ouvert avec logo */}
          <Reveal className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 border-l-4 border-safe-magenta/60 pl-5 sm:pl-6 mb-[clamp(2rem,4vw,3rem)]">
            <span className="shrink-0 inline-flex items-center justify-center bg-white rounded-2xl px-5 py-4 shadow-sfsm self-start sm:self-center">
              <img src={saforLogo} alt="Logo SAFOR" className="h-[64px] w-auto" />
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="font-mono font-bold text-[1.5rem] text-safe-magenta tracking-tight">SAFOR</span>
                <span className="font-semibold text-ink">SAFE Géotechnique <span className="text-muted font-normal">×</span> Foretude Ingénierie</span>
              </div>
              <p className="text-slate max-w-[72ch]">{SAFOR.d}</p>
            </div>
          </Reveal>

          {/* Mur de logos partenaires (sans cadres) */}
          <div className="grid sm:grid-cols-2 gap-x-[clamp(2rem,5vw,4rem)]">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.nom} delay={(i % 2) * 90}>
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-5 py-6 border-t border-line">
                  <div className="w-[140px] shrink-0 flex items-center justify-center">
                    {p.logo
                      ? (p.chip
                          ? <span className="inline-flex items-center justify-center bg-white rounded-xl2 border border-line shadow-sfsm px-4 py-3">
                              <img src={p.logo} alt={`Logo ${p.nom}`} className="max-h-10 max-w-[110px] w-auto object-contain" loading="lazy" />
                            </span>
                          : <img src={p.logo} alt={`Logo ${p.nom}`} className="max-h-12 max-w-[140px] w-auto object-contain" loading="lazy" />)
                      : <span className="font-extrabold text-[1.3rem] tracking-tight text-ink">{p.nom}</span>}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.05rem] mb-1 inline-flex items-center gap-2 group-hover:text-safe-magenta transition-colors">
                      {p.nom}
                      <Icon name="arrow" className="arrow w-[15px] h-[15px] text-safe-magenta -rotate-45" />
                    </h3>
                    <p className="text-slate text-[0.93rem]">{p.d}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="text-muted text-[0.85rem] mt-5">Les liens ouvrent les sites de nos partenaires dans un nouvel onglet.</p>
        </div>
      </section>

      {/* ===== CLIENTS (carousel) ===== */}
      <section className="border-t border-line pt-[clamp(2.5rem,5vw,4rem)] pb-[clamp(2.5rem,5vw,4rem)]">
        <div className="container-safe">
          <Reveal className="max-w-[680px] mb-8">
            <p className="label mb-4">Ils nous font confiance</p>
            <h2>Nos partenaires & clients</h2>
            <p className="text-slate mt-4">
              Sociétés du groupe, partenaires spécialisés et donneurs d'ordre
              publics comme privés nous accompagnent, des grands ouvrages aux
              projets les plus locaux.
            </p>
          </Reveal>
        </div>
        <ClientsCarousel />
      </section>

      {/* ===== LOI ELAN (bande pleine largeur) ===== */}
      <section className="relative overflow-hidden bg-safe-soft border-y border-line">
        <Decor />
        <div className="container-safe relative z-10 section-tight sm:flex sm:items-center sm:justify-between gap-8">
          <Reveal className="max-w-[640px]">
            <p className="label mb-3">Vente de terrain</p>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)]">La loi ELAN et l'étude de sol obligatoire</h2>
            <p className="text-slate mt-3">Vous vendez un terrain constructible en zone argileuse ? Une étude géotechnique préalable peut être requise. Nous vous expliquons tout.</p>
          </Reveal>
          <Reveal delay={120} className="mt-6 sm:mt-0 shrink-0">
            <Link to="/loi-elan" className="btn btn-primary">Comprendre la loi ELAN <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
