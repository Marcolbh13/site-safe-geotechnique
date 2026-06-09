import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import { EMAILS, PHONE, PHONE_HREF } from '../data/site.js';

const concernes = [
  { icon: 'home', t: 'Vous vendez un terrain', d: 'Un terrain non bâti constructible situé en zone d\'exposition moyenne ou forte au retrait-gonflement des argiles.' },
  { icon: 'doc', t: 'Vous préparez la vente', d: 'L\'étude est annexée à la promesse, puis à l\'acte de vente, pour informer l\'acquéreur.' },
  { icon: 'building', t: 'Vous allez construire', d: 'L\'étude éclaire les précautions de fondation face au mouvement des sols argileux.' },
];

const points = [
  { t: 'Une obligation depuis 2020', d: 'Issue de la loi Élan du 23 novembre 2018, l\'obligation est en vigueur depuis le 1ᵉʳ janvier 2020.' },
  { t: 'À la charge du vendeur', d: 'L\'étude géotechnique préalable est fournie et financée par le vendeur du terrain.' },
  { t: 'Une étude de type G1', d: 'Il s\'agit d\'une étude géotechnique préalable (mission G1), qui identifie les risques liés au sol.' },
  { t: 'Valable 30 ans', d: 'L\'étude reste valable trente ans tant que le terrain n\'a pas été remanié.' },
];

export default function LoiElan() {
  return (
    <>
      <Seo
        title="Loi Élan : l'étude de sol obligatoire"
        description="Vente d'un terrain constructible en zone argileuse : la loi Élan impose une étude géotechnique préalable (G1) à la charge du vendeur. SAFE Géotechnique la réalise."
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-safe-gradient text-white">
        <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 w-[320px] h-[320px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.16), transparent 70%)' }} />
        <div className="container-safe relative grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center" style={{ paddingBlock: 'clamp(2.75rem,6vw,4.75rem)' }}>
          <div>
            <p className="kicker on-dark mb-4">Vente de terrain</p>
            <h1 className="text-white max-w-[20ch]">Loi Élan : l'étude de sol devenue obligatoire</h1>
            <p className="mt-5 max-w-[58ch] text-white/90 text-[1.12rem]">
              Depuis 2020, la vente d'un terrain constructible en zone argileuse
              impose une étude géotechnique préalable. SAFE Géotechnique la
              réalise et sécurise votre transaction.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-light">
                Demander un devis <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
              </Link>
              <a href={PHONE_HREF} className="btn text-white" style={{ borderColor: 'rgba(255,255,255,0.55)' }}>
                <Icon name="phone" className="w-[18px] h-[18px]" /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EN BREF ===== */}
      <section className="section">
        <div className="container-safe">
          <div className="max-w-[680px] mb-[clamp(1.75rem,4vw,2.75rem)]">
            <p className="kicker mb-3">En bref</p>
            <h2>Ce que dit la loi, simplement</h2>
            <p className="lead mt-4">
              Le retrait-gonflement des argiles (RGA) fait gonfler puis se
              rétracter certains sols au fil des saisons, ce qui peut fissurer les
              constructions. Pour prévenir ce risque, la loi encadre la vente des
              terrains concernés.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.t} className="flex gap-4 rounded-[16px] border border-line bg-cloud p-5">
                <Icon name="check" className="w-6 h-6 text-safe-magenta shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[1.05rem] mb-1">{p.t}</h3>
                  <p className="text-slate text-[0.95rem]">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUI EST CONCERNÉ ===== */}
      <section className="section bg-mist border-y border-line">
        <div className="container-safe">
          <div className="max-w-[680px] mb-[clamp(1.75rem,4vw,2.75rem)]">
            <p className="kicker mb-3">Êtes-vous concerné ?</p>
            <h2>Principalement les vendeurs de terrains à bâtir</h2>
          </div>
          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-3">
            {concernes.map((c) => (
              <div key={c.t} className="card">
                <span className="icon-badge mb-[1.1rem]"><Icon name={c.icon} /></span>
                <h3 className="mb-[0.6rem]">{c.t}</h3>
                <p className="text-slate">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CADRE + SAFE ===== */}
      <section className="section">
        <div className="container-safe grid gap-[clamp(1.5rem,4vw,3rem)] lg:grid-cols-[1.3fr_0.7fr] items-start">
          <div>
            <p className="kicker mb-3">Le cadre réglementaire</p>
            <h2>Une étude géotechnique préalable (G1)</h2>
            <p className="lead mt-4">
              La réglementation impose, lors de la vente d'un terrain non bâti
              constructible situé en zone d'exposition moyenne ou forte au
              retrait-gonflement des argiles, la réalisation d'une étude
              géotechnique préalable de type G1, à la charge du vendeur.
            </p>
            <p className="mt-4 text-slate">
              Issue de la loi Élan du 23 novembre 2018 et codifiée aux articles
              L.112-20 et suivants du Code de la construction et de l'habitation,
              cette obligation est en vigueur depuis le 1ᵉʳ janvier 2020. L'étude,
              annexée à la promesse puis à l'acte de vente, reste valable trente
              ans tant que le terrain n'a pas été remanié.
            </p>
            <p className="note mt-6">
              Le périmètre exact (zones concernées, contenu de la mission) est
              fixé par la réglementation en vigueur et peut évoluer ; nous vous
              orientons selon votre situation précise.
            </p>
          </div>

          <aside className="bg-safe-soft border border-line rounded-xl2 p-[clamp(1.5rem,3vw,2rem)]">
            <h3 className="mb-2">SAFE réalise votre étude</h3>
            <p className="text-slate mb-5">
              Nous prenons en charge l'étude géotechnique préalable attendue lors
              de la vente, du sondage à la remise du rapport.
            </p>
            <div className="grid gap-3">
              <Link to="/contact" className="btn btn-primary">
                Demander un devis <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
              </Link>
              <a href={`mailto:${EMAILS.contact}`} className="btn btn-ghost btn-sm">
                <Icon name="mail" className="w-[16px] h-[16px]" /> {EMAILS.contact}
              </a>
              <a href={PHONE_HREF} className="btn btn-ghost btn-sm">
                <Icon name="phone" className="w-[16px] h-[16px]" /> {PHONE}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
