import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';

import camionSafe from '../assets/images/foreuse-camion-safe.webp';
import forageChamp from '../assets/images/forage-champ.webp';

const valeurs = [
  { t: 'Rigueur', d: "Un protocole normalisé et le respect des normes en vigueur à chaque étape, du prélèvement à l'étude." },
  { t: 'Proximité', d: 'Une relation directe, faite d\'écoute et de conseil, quelle que soit la taille du projet.' },
  { t: 'Sécurité', d: 'La protection des personnes et des sites au cœur de nos interventions de terrain.' },
  { t: 'Transparence', d: 'Des livrables clairs et lisibles, et des engagements que nous tenons.' },
];

const chaine = [
  { icon: 'drill', t: 'Sonder', d: 'Reconnaître les sols et prélever sur le terrain.' },
  { icon: 'flask', t: 'Analyser', d: 'Caractériser les sols au laboratoire.' },
  { icon: 'compass', t: 'Concevoir', d: "Produire la recommandation d'ingénierie." },
];

const rse = [
  { icon: 'sun', t: 'Énergie et empreinte', d: "Réduire notre consommation et recourir davantage aux énergies renouvelables, notamment via des panneaux solaires sur nos locaux." },
  { icon: 'users', t: 'Nos équipes', d: 'Formation continue, sécurité au travail et transmission des savoir-faire.' },
  { icon: 'leaf', t: 'Respect des sites', d: 'Limiter notre emprise et préserver les sites sur lesquels nous intervenons.' },
];

const secteurs = [
  'Maîtres d\'ouvrage publics',
  'Réseaux et télécoms',
  'Énergie',
  'Bâtiment et construction',
  'Industrie et logistique',
  'Activités fluviales et portuaires',
];

export default function APropos() {
  return (
    <>
      <Seo
        title="Qui sommes-nous"
        description="SAFE Géotechnique, bureau de sondages et d'ingénierie géotechnique : notre métier, notre chaîne intégrée, nos valeurs et notre engagement responsable."
      />

      {/* ===== HERO ÉDITORIAL ===== */}
      <section className="bg-white border-b border-line">
        <div className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] lg:grid-cols-[1.05fr_0.95fr]" style={{ paddingBlock: 'clamp(2.75rem,6vw,4.75rem)' }}>
          <div>
            <p className="kicker mb-4">Qui sommes-nous</p>
            <h1 className="max-w-[16ch]">La reconnaissance des sols, de bout en bout</h1>
            <div className="rule my-6" />
            <p className="lead max-w-[54ch]">
              SAFE Géotechnique est un bureau de sondages et d'ingénierie
              géotechnique. Nous reconnaissons les sols, les analysons dans notre
              laboratoire et accompagnons la conception de vos ouvrages, au
              service des ouvrages linéaires, des bâtiments et des particuliers.
            </p>
          </div>
          <figure className="rounded-xl2 overflow-hidden shadow-sflg order-first lg:order-none">
            <img src={camionSafe} alt="Foreuse de sondage et fourgon SAFE sur un chantier" className="w-full object-cover aspect-[5/4]" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ===== NOTRE MÉTIER (récit) ===== */}
      <section className="section">
        <div className="container-safe grid gap-[clamp(1.5rem,4vw,3rem)] lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-balance">Notre métier, en quelques mots</h2>
          <div className="grid gap-4 text-slate text-[1.05rem] max-w-[64ch]">
            <p>
              La géotechnique consiste à comprendre le comportement des sols pour
              sécuriser ce qu'on y construit. Avant de fonder un bâtiment, de
              tracer un réseau ou d'implanter un ouvrage, il faut savoir ce qu'il
              y a sous la surface : nature des terrains, présence d'eau, aléas.
            </p>
            <p>
              Notre force est de réunir les trois maillons de cette mission dans
              une même équipe. Nous <strong>sondons</strong> le terrain, nous
              <strong> analysons</strong> les sols au laboratoire et nous
              <strong> concevons</strong> les recommandations d'ingénierie. Cette
              continuité supprime les pertes d'information entre intervenants et
              garantit la cohérence entre la donnée et la décision.
            </p>
            <p>
              Notre principal objectif est de sécuriser vos projets par une
              reconnaissance des sols fiable et lisible, en nous appuyant sur des
              moyens de forage et de chantier éprouvés et sur une équipe de
              spécialistes dont nous entretenons les compétences.
            </p>
            <p>
              <Link to="/expertise" className="font-bold inline-flex items-center gap-1.5">
                Découvrir notre expertise en détail
                <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ===== CHAÎNE INTÉGRÉE ===== */}
      <section className="section-tight">
        <div className="container-safe">
          <div className="rounded-xl2 bg-plum text-white overflow-hidden p-[clamp(1.75rem,4vw,3rem)]">
            <p className="kicker on-dark mb-6">Une chaîne intégrée</p>
            <div className="grid gap-8 md:grid-cols-3">
              {chaine.map((c, i) => (
                <div key={c.t} className="relative">
                  <span className="inline-grid place-items-center w-12 h-12 rounded-[14px] bg-white/10 text-white mb-3">
                    <Icon name={c.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="text-white text-[1.2rem] mb-1">
                    <span className="text-safe-rose mr-2">0{i + 1}</span>{c.t}
                  </h3>
                  <p className="text-white/75 text-[0.97rem]">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALEURS ===== */}
      <section className="section">
        <div className="container-safe">
          <div className="max-w-[640px] mb-[clamp(1.75rem,4vw,2.75rem)]">
            <p className="kicker mb-3">Nos valeurs</p>
            <h2>Une géotechnique rigoureuse, naturelle et humaine</h2>
          </div>
          <div className="grid gap-x-[clamp(2rem,5vw,4rem)] gap-y-8 sm:grid-cols-2">
            {valeurs.map((v) => (
              <div key={v.t} className="pl-5 border-l-2 border-safe-rose/50">
                <h3 className="text-[1.15rem] mb-1.5">{v.t}</h3>
                <p className="text-slate">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RSE ===== */}
      <section className="section bg-mist border-y border-line">
        <div className="container-safe grid items-center gap-[clamp(1.75rem,4vw,3.5rem)] lg:grid-cols-2">
          <figure className="rounded-xl2 overflow-hidden shadow-sfmd order-last lg:order-first">
            <img src={forageChamp} alt="Atelier du groupe en zone rurale, éoliennes en arrière-plan" className="w-full object-cover aspect-[16/10]" loading="lazy" />
          </figure>
          <div>
            <p className="kicker mb-3">Engagement responsable</p>
            <h2>Une RSE concrète, sans esbroufe</h2>
            <p className="lead mt-4 mb-6">
              Nous voulons exercer notre métier de façon responsable, envers
              l'environnement, nos équipes et les territoires où nous intervenons.
            </p>
            <ul className="grid gap-5">
              {rse.map((r) => (
                <li key={r.t} className="flex gap-4">
                  <span className="icon-badge shrink-0"><Icon name={r.icon} /></span>
                  <span>
                    <span className="block font-bold text-ink">{r.t}</span>
                    <span className="block text-slate text-[0.97rem]">{r.d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== ILS NOUS FONT CONFIANCE ===== */}
      {/*
        Droits d'usage des marques clients non confirmés : aucun logo ni nom
        publié. Liste de travail (NE PAS publier sans accord — cf. A-VALIDER.md) :
        Free/Axians, Natrans, Ville de Lille, Ministère de la Justice/DISP, SDIS,
        CAPSO, Sica & Oise, HDF Construction, SAS Pavard Lele, Action, Tenerno,
        Torréfacteur de Louis, Port fluvial de Lille ; chantier réf. ENGIE à Calais.
      */}
      <section className="section">
        <div className="container-safe">
          <div className="max-w-[640px] mb-[clamp(1.5rem,3vw,2.25rem)]">
            <p className="kicker mb-3">Ils nous font confiance</p>
            <h2>Des acteurs publics et privés</h2>
            <p className="text-slate mt-4">
              Nous intervenons sur des projets variés par leur taille et leur
              nature, pour des maîtres d'ouvrage de secteurs très différents.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3 mb-6">
            {secteurs.map((s) => (
              <li key={s} className="rounded-full border border-line bg-cloud px-4 py-2 text-[0.95rem] text-slate font-medium">
                {s}
              </li>
            ))}
          </ul>
          <p className="note max-w-[70ch]">
            Par respect des droits d'usage des marques, nous n'affichons pas les
            logos ni les noms de nos clients sans leur accord. La liste détaillée
            de nos références et des exemples de chantiers peut vous être
            communiquée sur demande.
          </p>
        </div>
      </section>

      <CtaBand
        title="Envie d'en savoir plus sur SAFE ?"
        text="Une question sur notre démarche, nos moyens ou un projet en particulier ? Écrivons-nous."
      />
    </>
  );
}
