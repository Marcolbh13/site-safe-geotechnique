import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Decor from '../components/Decor.jsx';
import Steps from '../components/Steps.jsx';
import Reasons from '../components/Reasons.jsx';
import { COMPANY } from '../data/site.js';
import { sendForm } from '../lib/send.js';
import bandLoiElan from '../assets/images/band-loielan.webp';
import illLoiElan from '../assets/illustrations/ill-loielan.svg';

const risque = [
  { icon: 'water', t: 'Le retrait-gonflement', d: 'Les sols argileux gonflent avec l\'eau, puis se rétractent en séchant, au fil des saisons.' },
  { icon: 'building', t: 'Des désordres coûteux', d: 'Ce mouvement du sol peut fissurer les murs et endommager les fondations.' },
  { icon: 'shield', t: 'Une prévention', d: 'L\'étude de sol adapte la construction au comportement réel du terrain.' },
];

const accompagnement = [
  { t: 'Prise de contact', d: 'Vous nous décrivez le terrain, sa localisation et votre projet.' },
  { t: 'Sondage sur site', d: 'Reconnaissance des sols adaptée à la parcelle concernée.' },
  { t: 'Essais & analyse', d: 'Caractérisation des sols argileux dans notre laboratoire.' },
  { t: 'Rapport G1', d: 'Un rapport d\'étude géotechnique préalable, à annexer à la vente.' },
];

const GEORISQUES = 'https://www.georisques.gouv.fr/';
const ELAN_GOUV = 'https://www.ecologie.gouv.fr/politiques-publiques/loi-portant-evolution-du-logement-lamenagement-du-numerique-elan';

const reperes = [
  { t: 'Une étude de type G1', d: "L'étude géotechnique préalable (mission G1) identifie les risques liés au sol avant la construction." },
  { t: 'À la charge du vendeur', d: "Lors de la vente d'un terrain non bâti constructible concerné, l'étude est fournie par le vendeur." },
  { t: 'Valable 30 ans', d: "Annexée à la promesse puis à l'acte de vente, elle reste valable trente ans tant que le terrain n'est pas remanié." },
];

const types = ['Construction', 'Achat', 'Vente', 'Autre'];

export default function LoiElan() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const d = new FormData(form);
    const g = (k) => String(d.get(k) ?? '').trim();
    const fields = {
      'Nom': g('nom'), 'Prénom': g('prenom'),
      'Téléphone': g('telephone'), 'E-mail': g('email'),
      'Type de projet': g('type'),
      'Surface du terrain': g('surface'),
      'Adresse du terrain': `${g('adresse')} ${g('cp')} ${g('ville')}`.trim(),
      'Détails': g('details'),
    };
    setStatus('sending');
    try {
      await sendForm({ type: 'devis', fields });
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Seo title="Loi ELAN : l'étude de sol obligatoire"
        description="Depuis la loi ELAN, l'étude de sol (G1) est obligatoire pour les terrains à bâtir en zone d'argiles. SAFE Géotechnique réalise votre étude géotechnique préalable." />

      {/* HERO dégradé (page plus vivante) */}
      <section className="relative overflow-hidden bg-safe-gradient text-white">
        <Decor variant="dark" />
        <div className="container-safe relative z-10" style={{ paddingBlock: 'clamp(2.75rem,6vw,4.75rem)' }}>
          <Reveal>
            <p className="label on-dark mb-4">Loi ELAN</p>
            <h1 className="text-white max-w-[20ch]">L'étude de sol devenue obligatoire</h1>
            <p className="mt-5 max-w-[60ch] text-white/90 text-[1.12rem]">
              Un projet de construction ou de vente ? Vous souhaitez réaliser une
              étude de sol G1 ? Depuis le 10 août 2020, la loi ELAN rend l'étude
              de sol obligatoire dans certaines zones argileuses.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-light">Demander un devis G1 <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
              <a href={ELAN_GOUV} target="_blank" rel="noopener noreferrer" className="btn text-white" style={{ borderColor: 'rgba(255,255,255,.55)' }}>
                <Icon name="doc" className="w-[18px] h-[18px]" /> La loi ELAN · ecologie.gouv.fr
              </a>
              <a href={GEORISQUES} target="_blank" rel="noopener noreferrer" className="btn text-white" style={{ borderColor: 'rgba(255,255,255,.55)' }}>
                <Icon name="map" className="w-[18px] h-[18px]" /> Carte des risques
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SUIS-JE CONCERNÉ */}
      <section className="section">
        <div className="container-safe grid gap-[clamp(1.5rem,4vw,3rem)] lg:grid-cols-2 items-start">
          <Reveal>
            <p className="label mb-4">Suis-je concerné ?</p>
            <h2>Les terrains à bâtir en zone d'argiles</h2>
            <p className="text-slate mt-4 text-[1.05rem]">
              L'étude G1 est obligatoire pour les terrains à bâtir situés dans des
              zones soumises à l'aléa de <strong className="text-ink">retrait /
              gonflement des sols argileux</strong>. Pour savoir si votre commune
              est concernée, consultez la carte interactive et cochez la case
              « Argiles » dans les paramètres des couches.
            </p>
            <a href={GEORISQUES} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6">
              <Icon name="map" className="w-[18px] h-[18px]" /> Consulter la carte des argiles
            </a>
          </Reveal>
          <Reveal delay={120} className="grid">
            {reperes.map((r) => (
              <div key={r.t} className="flex gap-4 py-4 border-t border-line">
                <Icon name="check" className="w-6 h-6 text-safe-magenta shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[1.05rem] mb-1">{r.t}</h3>
                  <p className="text-slate text-[0.95rem]">{r.d}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Bande photo */}
      <section className="relative">
        <div className="relative h-[clamp(240px,34vw,380px)] overflow-hidden">
          <img src={bandLoiElan} alt="Atelier de sondage SAFE sur un terrain à bâtir" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(110,35,80,.85) 0%, rgba(110,35,80,.35) 55%, rgba(110,35,80,0) 100%)' }} />
          <div className="container-safe relative h-full flex items-center">
            <Reveal className="max-w-[540px] text-white">
              <h2 className="text-white text-[clamp(1.5rem,3vw,2.1rem)]">Une étude adaptée à votre terrain</h2>
              <p className="mt-3 text-white/90">Nous sondons votre parcelle, caractérisons les sols argileux et remettons le rapport G1 attendu pour la vente.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* POURQUOI CETTE OBLIGATION */}
      <Reasons
        label="Le risque"
        title="Pourquoi cette obligation ?"
        intro="La loi vise à prévenir les désordres causés par les sols argileux, fréquents dans certaines régions."
        items={risque}
        tone="mist"
      />

      {/* ACCOMPAGNEMENT */}
      <Steps
        label="Notre accompagnement"
        title="Comment SAFE vous accompagne ?"
        intro="De la prise de contact à la remise du rapport, nous prenons en charge votre étude G1."
        steps={accompagnement}
      />

      {/* DEVIS G1 */}
      <section className="section bg-mist border-y border-line">
        <div className="container-safe grid gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[0.8fr_1.2fr] items-start">
          <Reveal>
            <p className="label mb-4">Demande d'étude</p>
            <h2>Réaliser votre étude de sol G1</h2>
            <p className="lead mt-4">
              Décrivez votre projet : nous vous adressons un devis pour l'étude
              géotechnique préalable adaptée à votre terrain.
            </p>
            <ul className="grid gap-3 mt-6 text-slate text-[0.97rem]">
              <li className="flex items-center gap-2.5"><Icon name="phone" className="w-[18px] h-[18px] text-safe-magenta" /><a href={COMPANY.phoneHref} className="font-mono font-semibold">{COMPANY.phone}</a></li>
              <li className="flex items-center gap-2.5"><Icon name="mail" className="w-[18px] h-[18px] text-safe-magenta" /><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            </ul>
            <img src={illLoiElan} alt="" aria-hidden="true" className="hidden lg:block w-full max-w-[260px] mt-9" loading="lazy" />
          </Reveal>

          {/* Formulaire G1 : envoi via /api/contact (Resend) -> lebihan@resum.fr */}
          <Reveal delay={120}>
            <form className="form-card" onSubmit={onSubmit} noValidate>
              <div className="grid gap-[1.1rem] sm:grid-cols-2">
                <Field label="Nom *" id="e-nom" name="nom" autoComplete="family-name" required />
                <Field label="Prénom *" id="e-prenom" name="prenom" autoComplete="given-name" required />
              </div>
              <div className="grid gap-[1.1rem] sm:grid-cols-2">
                <Field label="Téléphone *" id="e-tel" name="telephone" type="tel" autoComplete="tel" required />
                <Field label="E-mail *" id="e-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="grid gap-[1.1rem] sm:grid-cols-2">
                <div className="field">
                  <label htmlFor="e-type">Type de projet *</label>
                  <select id="e-type" name="type" required defaultValue="">
                    <option value="" disabled>Choisissez</option>
                    {types.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <Field label="Surface du terrain" id="e-surface" name="surface" placeholder="en m²" />
              </div>
              <div className="grid gap-[1.1rem] sm:grid-cols-[1fr_2fr]">
                <Field label="Code postal" id="e-cp" name="cp" autoComplete="postal-code" />
                <Field label="Ville" id="e-ville" name="ville" autoComplete="address-level2" />
              </div>
              <Field label="Adresse du terrain" id="e-adresse" name="adresse" autoComplete="street-address" />
              <div className="field">
                <label htmlFor="e-details">Détails supplémentaires</label>
                <textarea id="e-details" name="details" rows="4" placeholder="Toute précision utile sur votre projet." />
              </div>
              <button type="submit" disabled={status === 'sending'} className="btn btn-primary justify-self-start disabled:opacity-60">
                {status === 'sending' ? 'Envoi…' : <>Demander mon devis G1 <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></>}
              </button>
              {status === 'ok' && <p className="text-[0.95rem] font-semibold text-safe-magenta" role="status" aria-live="polite">Merci ! Votre demande d'étude G1 a bien été envoyée. Nous vous recontactons rapidement.</p>}
              {status === 'error' && <p className="text-[0.92rem] font-semibold text-safe-magenta" role="alert">Une erreur est survenue lors de l'envoi. Merci de réessayer, ou de nous appeler au {COMPANY.phone}.</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, id, name, type = 'text', required, autoComplete, placeholder }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} />
    </div>
  );
}
