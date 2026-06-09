import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { COMPANY } from '../data/site.js';

const concernes = [
  { icon: 'home', t: 'Les vendeurs de terrain', d: "Vendeur d'un terrain non bâti constructible situé en zone d'exposition moyenne ou forte au retrait-gonflement des argiles." },
  { icon: 'doc', t: 'Lors de la transaction', d: "L'étude géotechnique préalable est annexée à la promesse, puis à l'acte de vente, et reste valable 30 ans." },
  { icon: 'building', t: 'Avant de construire', d: "Elle éclaire les précautions de fondation face au mouvement des sols argileux (gonflement et retrait)." },
];

export default function LoiElan() {
  return (
    <>
      <Seo title="Loi ELAN : l'étude de sol obligatoire"
        description="La loi ELAN rend l'étude de sol obligatoire dans certaines zones argileuses lors de la vente d'un terrain constructible. SAFE Géotechnique réalise l'étude géotechnique préalable (G1)." />

      {/* HERO */}
      <section className="relative overflow-hidden bg-safe-gradient text-white">
        <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 w-[340px] h-[340px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 70%)' }} />
        <div className="container-safe relative" style={{ paddingBlock: 'clamp(2.75rem,6vw,4.75rem)' }}>
          <p className="label on-dark mb-4">Vente de terrain</p>
          <h1 className="text-white max-w-[20ch]">Loi ELAN : l'étude de sol devenue obligatoire</h1>
          <p className="mt-5 max-w-[60ch] text-white/90 text-[1.12rem]">
            Dans certaines zones argileuses, la vente d'un terrain constructible
            impose une étude géotechnique préalable. SAFE Géotechnique la réalise
            et sécurise votre transaction.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-light">Demander un devis <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
            <a href={COMPANY.phoneHref} className="btn text-white" style={{ borderColor: 'rgba(255,255,255,.55)' }}><Icon name="phone" className="w-[18px] h-[18px]" /> {COMPANY.phone}</a>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QUE + OBJECTIFS */}
      <section className="section">
        <div className="container-safe grid gap-[clamp(1.5rem,4vw,3rem)] lg:grid-cols-2">
          <Reveal>
            <p className="label mb-4">Qu'est-ce que la loi ELAN ?</p>
            <p className="text-slate text-[1.05rem]">
              La loi ELAN (Évolution du Logement, de l'Aménagement et du
              Numérique) a été promulguée le <strong className="text-ink">23 novembre 2018</strong>.
              Elle vise à simplifier les normes d'urbanisation en rendant l'étude
              de sol obligatoire dans certaines zones.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="label mb-4">Les objectifs de la loi</p>
            <p className="text-slate text-[1.05rem]">
              Mise en vigueur le <strong className="text-ink">1ᵉʳ janvier 2020</strong>, la
              loi ELAN a pour objectif de prévenir les désordres liés au
              retrait-gonflement des argiles (RGA), qui fait gonfler puis se
              rétracter certains sols au fil des saisons et peut fissurer les
              constructions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUI EST CONCERNÉ */}
      <section className="section bg-mist border-y border-line">
        <div className="container-safe">
          <Reveal className="max-w-[680px] mb-[clamp(1.75rem,4vw,2.75rem)]">
            <p className="label mb-4">Qui est concerné ?</p>
            <h2>Principalement les vendeurs de terrains à bâtir</h2>
          </Reveal>
          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-3">
            {concernes.map((c, i) => (
              <Reveal key={c.t} delay={i * 80} className="card">
                <span className="icon-badge mb-[1.1rem]"><Icon name={c.icon} /></span>
                <h3 className="mb-[0.6rem] text-[1.1rem]">{c.t}</h3>
                <p className="text-slate text-[0.95rem]">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUE DIT LA LOI + SAFE */}
      <section className="section">
        <div className="container-safe grid gap-[clamp(1.5rem,4vw,3rem)] lg:grid-cols-[1.3fr_0.7fr] items-start">
          <Reveal>
            <p className="label mb-4">Ce que dit la loi</p>
            <h2>Une étude géotechnique préalable (G1)</h2>
            <p className="lead mt-4">
              Lors de la vente d'un terrain non bâti constructible situé en zone
              d'exposition moyenne ou forte au retrait-gonflement des argiles,
              une étude géotechnique préalable de type G1 doit être réalisée, à la
              charge du vendeur.
            </p>
            <p className="mt-4 text-slate">
              Codifiée aux articles L.112-20 et suivants du Code de la
              construction et de l'habitation, elle est annexée à la promesse puis
              à l'acte de vente et reste valable trente ans tant que le terrain
              n'a pas été remanié.
            </p>
            <p className="note mt-6">Le périmètre exact (zones concernées, contenu de la mission) est fixé par la réglementation en vigueur et peut évoluer ; nous vous orientons selon votre situation précise.</p>
          </Reveal>
          <Reveal delay={120} className="bg-safe-soft border border-line rounded-xl2 p-[clamp(1.5rem,3vw,2rem)]">
            <h3 className="mb-2 text-[1.15rem]">SAFE réalise votre étude</h3>
            <p className="text-slate mb-5 text-[0.97rem]">Nous prenons en charge l'étude géotechnique préalable attendue lors de la vente, du sondage à la remise du rapport.</p>
            <div className="grid gap-3">
              <Link to="/contact" className="btn btn-primary">Demander un devis <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
              <a href={`mailto:${COMPANY.email}`} className="btn btn-ghost btn-sm"><Icon name="mail" className="w-[16px] h-[16px]" /> {COMPANY.email}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
