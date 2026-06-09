import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Reasons from '../components/Reasons.jsx';
import Decor from '../components/Decor.jsx';
import { COMPANY } from '../data/site.js';
import camionSafe from '../assets/images/foreuse-camion-safe.webp';

const engagements = [
  { icon: 'phone', t: 'Une réponse rapide', d: 'Nous revenons vers vous au plus vite après votre demande.' },
  { icon: 'compass', t: 'Un conseil clair', d: 'Nous vous orientons vers la prestation réellement utile à votre projet.' },
  { icon: 'doc', t: 'Un devis adapté', d: 'Une proposition ajustée à votre terrain et à vos contraintes.' },
];

const besoins = ['Sondage / reconnaissance des sols', 'Essais en laboratoire', 'Mission géotechnique (G1 à G5)', 'Étude de sol – vente de terrain (loi ELAN)', 'Autre demande'];

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const d = new FormData(form);
    const g = (k) => String(d.get(k) ?? '').trim();
    const subject = `Demande de devis · ${g('besoin')} · ${g('nom')}`;
    const body = [
      `Nom et prénom : ${g('nom')}`,
      `Société / organisme : ${g('structure') || '(non renseigné)'}`,
      `E-mail : ${g('email')}`,
      `Téléphone : ${g('telephone') || '(non renseigné)'}`,
      `Besoin : ${g('besoin')}`,
      `Localisation : ${g('lieu') || '(non renseignée)'}`,
      '', 'Message :', g('message'),
    ].join('\n');
    window.location.href = `mailto:${COMPANY.devisEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Votre logiciel de messagerie va s’ouvrir avec votre demande pré-remplie. Validez l’envoi pour nous la transmettre.');
  };

  return (
    <>
      <Seo title="Contact et devis"
        description="Contactez SAFE Géotechnique : 660 rue des Famards, 59273 Fretin. Téléphone 03 20 60 12 67. Demandez un devis pour vos sondages, essais et missions G1 à G5." />

      <section className="bg-white border-b border-line">
        <div className="container-safe" style={{ paddingBlock: 'clamp(2.5rem,5vw,4rem)' }}>
          <p className="label mb-4">Contactez-nous</p>
          <h1>Travaillons ensemble</h1>
          <div className="rule my-6" />
          <p className="lead max-w-[60ch]">Effectuez votre demande : nous vous contacterons le plus rapidement possible.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-safe grid items-start gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="grid gap-7">
            <InfoBlock icon="pin" title="Adresse">
              <p className="text-slate">{COMPANY.address}</p>
              <a className="inline-flex items-center gap-1.5 mt-1.5 font-semibold text-safe-magenta text-[0.92rem]"
                href="https://www.google.com/maps/search/?api=1&query=660+rue+des+Famards+59273+Fretin"
                target="_blank" rel="noopener noreferrer">Voir sur la carte <Icon name="arrow" className="w-[15px] h-[15px]" /></a>
            </InfoBlock>
            <InfoBlock icon="phone" title="Téléphone">
              <a className="font-mono font-semibold text-[1.05rem]" href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </InfoBlock>
            <InfoBlock icon="mail" title="E-mail">
              <a className="font-semibold" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </InfoBlock>
            <figure className="rounded-xl2 overflow-hidden shadow-sfmd mt-1">
              <img src={camionSafe} alt="Atelier de sondage et véhicule SAFE Géotechnique" className="w-full object-cover aspect-[4/3]" loading="lazy" />
            </figure>
          </Reveal>

          {/* Formulaire : mailto par défaut (envoi serveur documenté dans le README). */}
          <Reveal delay={120}>
            <form className="form-card" onSubmit={onSubmit} noValidate>
              <h2 className="text-[1.45rem]">Demander un devis</h2>
              <div className="grid gap-[1.1rem] sm:grid-cols-2">
                <Field label="Nom et prénom *" id="c-nom" name="nom" autoComplete="name" required />
                <Field label="Société / organisme" id="c-structure" name="structure" autoComplete="organization" />
              </div>
              <div className="grid gap-[1.1rem] sm:grid-cols-2">
                <Field label="E-mail *" id="c-email" name="email" type="email" autoComplete="email" required />
                <Field label="Téléphone" id="c-tel" name="telephone" type="tel" autoComplete="tel" />
              </div>
              <div className="grid gap-[1.1rem] sm:grid-cols-2">
                <div className="field">
                  <label htmlFor="c-besoin">Votre besoin *</label>
                  <select id="c-besoin" name="besoin" required defaultValue="">
                    <option value="" disabled>Choisissez</option>
                    {besoins.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <Field label="Localisation du projet" id="c-lieu" name="lieu" placeholder="Commune, département" />
              </div>
              <div className="field">
                <label htmlFor="c-message">Votre message *</label>
                <textarea id="c-message" name="message" rows="6" required placeholder="Décrivez votre projet, le type d'ouvrage, vos échéances et toute contrainte utile." />
              </div>
              <button type="submit" className="btn btn-primary justify-self-start">Envoyer ma demande <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></button>
              {status && <p className="text-[0.92rem] font-semibold text-safe-magenta" role="status" aria-live="polite">{status}</p>}
            </form>
          </Reveal>
        </div>
      </section>

      <Reasons
        label="Nos engagements"
        title="Ce que vous pouvez attendre de nous"
        items={engagements}
        tone="mist"
      />

      {/* Zone d'intervention */}
      <section className="section relative overflow-hidden">
        <Decor />
        <div className="container-safe relative z-10 grid gap-[clamp(1.5rem,4vw,3rem)] lg:grid-cols-[0.8fr_1.2fr] items-start">
          <Reveal>
            <p className="label mb-4">Zone d'intervention</p>
            <h2>Hauts-de-France et alentours</h2>
          </Reveal>
          <Reveal delay={120} className="text-slate text-[1.05rem] max-w-[64ch]">
            <p>
              Basés à <strong className="text-ink">Fretin</strong> ({COMPANY.address}),
              nous intervenons sur l'ensemble des Hauts-de-France et les
              départements limitrophes, des grands ouvrages aux projets les plus
              locaux. Nous nous déplaçons selon la nature et l'ampleur de votre
              opération.
            </p>
            <p className="mt-4">
              Un doute sur notre secteur d'intervention ?{' '}
              <a href={COMPANY.phoneHref} className="text-safe-magenta font-semibold">{COMPANY.phone}</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ icon, title, children }) {
  return (
    <div>
      <span className="icon-badge mb-2"><Icon name={icon} /></span>
      <h3 className="mt-1 mb-1 text-[1.1rem]">{title}</h3>
      {children}
    </div>
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
