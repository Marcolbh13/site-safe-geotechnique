import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import { COMPANY } from '../data/site.js';

const GEORISQUES = 'https://www.georisques.gouv.fr/';

const reperes = [
  { t: 'Une étude de type G1', d: "L'étude géotechnique préalable (mission G1) identifie les risques liés au sol avant la construction." },
  { t: 'À la charge du vendeur', d: "Lors de la vente d'un terrain non bâti constructible concerné, l'étude est fournie par le vendeur." },
  { t: 'Valable 30 ans', d: "Annexée à la promesse puis à l'acte de vente, elle reste valable trente ans tant que le terrain n'est pas remanié." },
];

const types = ['Construction', 'Achat', 'Vente', 'Autre'];

export default function LoiElan() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const d = new FormData(form);
    const g = (k) => String(d.get(k) ?? '').trim();
    const subject = `Étude de sol G1 (loi ELAN) · ${g('type')} · ${g('nom')} ${g('prenom')}`;
    const body = [
      `Nom : ${g('nom')}`, `Prénom : ${g('prenom')}`,
      `Téléphone : ${g('telephone')}`, `E-mail : ${g('email')}`,
      `Type de projet : ${g('type')}`,
      `Surface du terrain : ${g('surface') || '(non renseignée)'}`,
      `Adresse du terrain : ${g('adresse') || ''} ${g('cp') || ''} ${g('ville') || ''}`.trim(),
      '', 'Détails : ', g('details') || '(aucun)',
    ].join('\n');
    window.location.href = `mailto:${COMPANY.devisEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Votre logiciel de messagerie va s’ouvrir avec votre demande d’étude G1 pré-remplie.');
  };

  return (
    <>
      <Seo title="Loi ELAN : l'étude de sol obligatoire"
        description="Depuis la loi ELAN, l'étude de sol (G1) est obligatoire pour les terrains à bâtir en zone d'argiles. SAFE Géotechnique réalise votre étude géotechnique préalable." />

      <PageHero
        label="Loi ELAN"
        title="L'étude de sol devenue obligatoire"
        intro="Un projet de construction ou de vente ? Vous souhaitez réaliser une étude de sol G1 ? Depuis le 10 août 2020, la loi ELAN vise à simplifier les normes d'urbanisation en rendant l'étude de sol obligatoire dans certaines zones."
      />

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
          <Reveal delay={120} className="grid gap-3">
            {reperes.map((r) => (
              <div key={r.t} className="flex gap-4 rounded-2xl border border-line bg-cloud p-5">
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
          </Reveal>

          {/* Formulaire G1 — mailto (envoi serveur documenté dans le README). */}
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
              <button type="submit" className="btn btn-primary justify-self-start">Demander mon devis G1 <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></button>
              {status && <p className="text-[0.92rem] font-semibold text-safe-magenta" role="status" aria-live="polite">{status}</p>}
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
