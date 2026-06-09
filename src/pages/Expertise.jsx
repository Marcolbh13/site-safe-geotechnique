import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';

import chantierNuit from '../assets/images/chantier-nuit.webp';
import vermeer from '../assets/images/foreuse-vermeer.webp';
import camionSafe from '../assets/images/foreuse-camion-safe.webp';
import laboEchantillon from '../assets/images/labo-echantillon.webp';
import laboProctor from '../assets/images/labo-proctor.webp';
import laboPresse from '../assets/images/labo-presse.webp';

const chaine = [
  { n: '01', t: 'Sonder', d: 'Reconnaître les sols sur le terrain et prélever les échantillons.', href: '#sondages' },
  { n: '02', t: 'Analyser', d: 'Caractériser les sols au laboratoire selon un protocole normalisé.', href: '#laboratoire' },
  { n: '03', t: 'Concevoir', d: "Transformer la donnée en recommandations d'ingénierie.", href: '#ingenierie' },
];

const sondages = [
  { icon: 'drill', t: 'Forage destructif et semi-destructif', d: "Reconnaissance rapide de la stratigraphie et des horizons rencontrés." },
  { icon: 'layers', t: 'Carottage', d: 'Carottes continues pour observer le sol dans sa structure réelle.' },
  { icon: 'flask', t: 'Prélèvements', d: "Échantillons remaniés et intacts, conditionnés et tracés pour le laboratoire." },
  { icon: 'cavity', t: 'Recherche de cavités souterraines', d: 'Détection et caractérisation des vides du sous-sol.' },
];

const logiciels = [
  { nom: 'FoxTech', desc: 'Calculs géotechniques et dimensionnement de fondations.' },
  { nom: 'Carrara', desc: "Exploitation et synthèse des données de sondages et d'essais." },
  { nom: 'Talren', desc: 'Vérification de la stabilité des ouvrages et des pentes.' },
];

export default function Expertise() {
  return (
    <>
      <Seo
        title="Notre expertise géotechnique"
        description="Sondages, laboratoire et ingénierie : SAFE Géotechnique maîtrise la reconnaissance des sols de bout en bout, du forage à l'étude de conception (G1, G2)."
      />

      {/* ===== HERO SOMBRE ===== */}
      <section className="relative overflow-hidden bg-plum text-white">
        <img
          src={chantierNuit}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(120deg, rgba(27,19,32,0.95) 30%, rgba(122,42,95,0.65) 100%)' }}
        />
        <div className="container-safe relative" style={{ paddingBlock: 'clamp(3rem,7vw,5.5rem)' }}>
          <p className="kicker on-dark mb-[0.9rem]">Nos métiers</p>
          <h1 className="text-white max-w-[18ch]">Une chaîne complète, du terrain à l'étude</h1>
          <p className="mt-5 max-w-[58ch] text-white/85 text-[1.12rem]">
            Sondages, laboratoire et ingénierie réunis dans la même équipe :
            cette continuité garantit la cohérence entre la donnée de terrain et
            la recommandation finale.
          </p>
        </div>
      </section>

      {/* ===== CHAÎNE INTÉGRÉE ===== */}
      <section className="section-tight">
        <div className="container-safe grid gap-6 md:grid-cols-3">
          {chaine.map((c) => (
            <a
              key={c.n}
              href={c.href}
              className="group flex items-start gap-4 rounded-xl2 border border-line bg-white p-6 shadow-sfsm transition hover:shadow-sfmd hover:border-safe-rose/40"
            >
              <span className="num-eyebrow">{c.n}</span>
              <span>
                <span className="block text-[1.15rem] font-bold text-ink">{c.t}</span>
                <span className="block text-slate text-[0.96rem] mt-1">{c.d}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ===== 01 · SONDAGES ===== */}
      <section id="sondages" className="section border-t border-line">
        <div className="container-safe">
          <header className="flex items-end gap-5 mb-[clamp(1.75rem,4vw,2.75rem)]">
            <span className="num-eyebrow">01</span>
            <div>
              <p className="kicker mb-2">Sondages</p>
              <h2>Reconnaissance des sols sur le terrain</h2>
            </div>
          </header>

          <div className="grid items-start gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {sondages.map((p) => (
                  <div key={p.t} className="rounded-[16px] border border-line bg-cloud p-5">
                    <span className="icon-badge mb-3"><Icon name={p.icon} /></span>
                    <h3 className="text-[1.08rem] mb-1.5">{p.t}</h3>
                    <p className="text-slate text-[0.95rem]">{p.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[16px] bg-safe-soft border border-line p-6">
                <h3 className="text-[1.1rem] mb-2 flex items-center gap-2">
                  <Icon name="water" className="w-5 h-5 text-safe-magenta" /> Piézométrie
                </h3>
                <p className="text-slate">
                  Pose de piézomètres et suivi des eaux souterraines, en relevé
                  <strong> manuel</strong> comme en enregistrement
                  <strong> automatique</strong> dans la durée — un atout pour
                  ajuster la solution à l'enjeu de chaque projet.
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-[100px]">
              <figure className="rounded-xl2 overflow-hidden shadow-sfmd">
                <img src={vermeer} alt="Machine de forage du groupe sur un chantier sécurisé" className="w-full object-cover aspect-[4/5]" loading="lazy" />
              </figure>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="stat"><b>40 m</b><span>Profondeur · machine 450</span></div>
                <div className="stat"><b>80 m</b><span>Profondeur · machine 750</span></div>
              </div>
              <p className="mt-4 text-slate text-[0.95rem]">
                Habilitations transversales et formation continue du personnel,
                dans les cadres de prévention applicables (notamment CIPR, SNTT).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02 · LABORATOIRE ===== */}
      <section id="laboratoire" className="section bg-mist border-t border-line">
        <div className="container-safe">
          <header className="flex items-end gap-5 mb-[clamp(1.75rem,4vw,2.75rem)]">
            <span className="num-eyebrow">02</span>
            <div>
              <p className="kicker mb-2">Laboratoire</p>
              <h2>De l'échantillon à la donnée fiable</h2>
            </div>
          </header>

          {/* Galerie */}
          <div className="grid gap-4 sm:grid-cols-3 mb-[clamp(1.75rem,4vw,2.5rem)]">
            {[
              { src: laboEchantillon, alt: "Préparation d'un échantillon de sol", cap: 'Préparation des échantillons' },
              { src: laboProctor, alt: 'Essai de compactage Proctor', cap: 'Compactage (Proctor)' },
              { src: laboPresse, alt: 'Essai mécanique à la presse', cap: 'Essai mécanique' },
            ].map((g) => (
              <figure key={g.cap} className="rounded-xl2 overflow-hidden shadow-sfmd bg-white">
                <img src={g.src} alt={g.alt} className="w-full object-cover aspect-[4/3]" loading="lazy" />
                <figcaption className="px-3.5 py-2.5 text-[0.85rem] text-muted">{g.cap}</figcaption>
              </figure>
            ))}
          </div>

          <div className="grid gap-[clamp(1.5rem,3vw,2rem)] lg:grid-cols-2">
            <div className="grid gap-4 sm:grid-cols-2 content-start">
              <div className="card">
                <span className="icon-badge mb-3"><Icon name="microscope" /></span>
                <h3 className="text-[1.05rem] mb-2">Identification et état</h3>
                <ul className="ticks text-[0.95rem]">
                  <li>Granulométrie, limites d'Atterberg</li>
                  <li><strong>Valeur au bleu du sol (VBS)</strong></li>
                  <li>Teneur en eau</li>
                </ul>
              </div>
              <div className="card">
                <span className="icon-badge mb-3"><Icon name="layers" /></span>
                <h3 className="text-[1.05rem] mb-2">Compactage</h3>
                <ul className="ticks text-[0.95rem]">
                  <li><strong>Essai Proctor</strong> (moule normalisé)</li>
                  <li>Optimum de compactage</li>
                  <li>Aptitude au remblai</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl2 bg-safe-gradient text-white p-[clamp(1.5rem,3vw,2.2rem)] shadow-sflg relative overflow-hidden">
              <p className="kicker on-dark mb-3">Notre point fort</p>
              <h3 className="text-white text-[1.4rem] mb-3">Essai triaxial</h3>
              <p className="text-white/90">
                Essai exigeant et relativement coûteux, que peu de laboratoires
                réalisent en interne. Le proposer directement nous donne des
                paramètres de résistance robustes et raccourcit les délais.
              </p>
              <p className="mt-4 text-white/80 text-[0.95rem] border-t border-white/20 pt-4">
                Distinct du <strong className="text-white">cisaillement à la boîte (Casagrande)</strong> :
                les deux ne mesurent pas la résistance dans les mêmes conditions
                et sont choisis selon le besoin de l'étude.
              </p>
            </div>
          </div>
          <p className="mt-6 text-slate max-w-[70ch]">
            Chaque essai répond à un mode opératoire défini : nous suivons les
            normes en vigueur pour la conduite de nos analyses.
          </p>
        </div>
      </section>

      {/* ===== 03 · INGÉNIERIE ===== */}
      <section id="ingenierie" className="section border-t border-line">
        <div className="container-safe">
          <header className="flex items-end gap-5 mb-[clamp(1.75rem,4vw,2.75rem)]">
            <span className="num-eyebrow">03</span>
            <div>
              <p className="kicker mb-2">Ingénierie</p>
              <h2>De l'étude de site à la conception</h2>
            </div>
          </header>

          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-2">
            <article className="card">
              <span className="inline-block text-[0.78rem] font-bold tracking-[0.06em] uppercase text-white bg-safe-gradient px-[0.7rem] py-1 rounded-full mb-3">
                Mission G1
              </span>
              <h3 className="mb-2">Étude géotechnique préalable</h3>
              <p className="text-slate">
                En amont du projet : premier cadre géotechnique du site et des
                aléas à prendre en compte pour les études de conception.
              </p>
            </article>
            <article className="card">
              <span className="inline-block text-[0.78rem] font-bold tracking-[0.06em] uppercase text-white bg-safe-gradient px-[0.7rem] py-1 rounded-full mb-3">
                Mission G2
              </span>
              <h3 className="mb-2">Étude de conception : AVP et PRO</h3>
              <p className="text-slate">
                De l'avant-projet (AVP) à la phase projet (PRO) : principes de
                fondation, dimensionnements et dispositions constructives.
              </p>
            </article>
          </div>

          {/* Logiciels */}
          <div className="mt-8">
            <p className="text-[0.92rem] font-semibold text-muted uppercase tracking-[0.08em] mb-3">
              Nos outils de calcul
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {logiciels.map((l) => (
                <div key={l.nom} className="rounded-[14px] border border-line bg-cloud p-5">
                  <span className="block text-[1.15rem] font-bold tracking-tight">{l.nom}</span>
                  <p className="text-slate text-[0.92rem] mt-1">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Loi Élan */}
          <div className="mt-8 grid items-center gap-[clamp(1.5rem,3vw,2.5rem)] lg:grid-cols-[1.4fr_0.9fr] rounded-xl2 border border-line bg-safe-soft p-[clamp(1.5rem,3vw,2.2rem)]">
            <div>
              <p className="kicker mb-2">Vente de terrain · loi Élan</p>
              <h3 className="text-[1.4rem] mb-3">L'étude géotechnique préalable (G1)</h3>
              <p className="text-slate">
                Issue de la loi Élan du 23 novembre 2018, la réglementation impose,
                lors de la vente d'un terrain non bâti constructible situé en zone
                d'exposition moyenne ou forte au retrait-gonflement des argiles,
                une étude géotechnique préalable (type G1)
                <strong> à la charge du vendeur</strong>. Codifiée aux articles
                L.112-20 et suivants du Code de la construction et de l'habitation,
                elle est en vigueur depuis le 1ᵉʳ janvier 2020 et reste valable
                trente ans tant que le terrain n'a pas été remanié.
              </p>
            </div>
            <div className="bg-white rounded-[16px] border border-line p-6 shadow-sfsm">
              <h4 className="text-[1.05rem] mb-2 font-bold">Vous vendez un terrain ?</h4>
              <p className="text-slate text-[0.95rem] mb-4">
                Nous réalisons l'étude attendue et sécurisons votre transaction.
              </p>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Étudier mon cas <Icon name="arrow" className="arrow w-[16px] h-[16px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau image */}
      <section className="relative h-[clamp(220px,30vw,340px)] overflow-hidden">
        <img src={camionSafe} alt="Foreuse et fourgon SAFE sur un chantier" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-plum/85 to-plum/20" />
        <div className="container-safe relative h-full flex items-center">
          <p className="text-white text-[1.4rem] sm:text-[1.8rem] font-bold max-w-[20ch] leading-tight">
            Une seule équipe, du premier sondage à la recommandation finale.
          </p>
        </div>
      </section>

      <CtaBand
        title="Un besoin précis sur votre projet ?"
        text="Sondage, essai en laboratoire ou mission d'ingénierie : décrivez-nous votre site, nous proposons la solution adaptée."
      />
    </>
  );
}
