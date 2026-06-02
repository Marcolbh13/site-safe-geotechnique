import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import { EMAILS } from '../data/site.js';

const besoins = [
  'Sondages / reconnaissance des sols',
  'Essais en laboratoire',
  'Mission d’ingénierie (G1 / G2)',
  'Étude géotechnique pour vente de terrain (loi Élan)',
  'Projet de particulier',
  'Autre demande',
];

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const get = (k) => String(data.get(k) ?? '').trim();

    const subject = `Demande de devis - ${get('besoin')} - ${get('nom')}`;
    const body = [
      `Nom et prénom : ${get('nom')}`,
      `Société / organisme : ${get('structure') || '(non renseigné)'}`,
      `E-mail : ${get('email')}`,
      `Téléphone : ${get('telephone') || '(non renseigné)'}`,
      `Besoin : ${get('besoin')}`,
      `Localisation : ${get('lieu') || '(non renseignée)'}`,
      '',
      'Message :',
      get('message'),
    ].join('\n');

    window.location.href = `mailto:${EMAILS.devis}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus(
      'Votre logiciel de messagerie va s’ouvrir avec votre demande pré-remplie. Validez l’envoi pour nous la transmettre.'
    );
  };

  return (
    <>
      <Seo
        title="Contact et devis"
        description="Contactez SAFE Géotechnique pour un devis : sondages, laboratoire ou ingénierie géotechnique. Une équipe à l'écoute de vos projets, des plus modestes aux plus importants."
      />
      <PageHero
        kicker="Contact"
        title="Parlons de votre projet"
        intro="Décrivez-nous votre besoin et votre site : nous revenons vers vous avec une proposition adaptée. Aucun projet n'est trop petit ni trop grand."
      />

      <section className="section">
        <div className="container-safe grid items-start gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* Coordonnées */}
          <aside className="grid gap-7">
            <InfoBlock icon="mail" title="Devis et projets">
              <p className="text-slate text-[0.97rem]">Pour toute demande d'étude ou de devis :</p>
              <a className="inline-block font-bold mt-1" href={`mailto:${EMAILS.devis}`}>
                {EMAILS.devis}
              </a>
            </InfoBlock>

            <InfoBlock icon="users" title="Recrutement">
              <p className="text-slate text-[0.97rem]">Vous souhaitez nous rejoindre ?</p>
              <a className="inline-block font-bold mt-1" href={`mailto:${EMAILS.recrutement}`}>
                {EMAILS.recrutement}
              </a>
              <p className="mt-2">
                <Link to="/recrutement">Accéder au formulaire de recrutement</Link>
              </p>
            </InfoBlock>

            <InfoBlock icon="map" title="Secteur d'intervention">
              <p className="text-slate text-[0.97rem]">
                Hauts-de-France et régions limitrophes. Nous nous déplaçons selon
                la nature et l'ampleur de votre projet.
              </p>
            </InfoBlock>
          </aside>

          {/*
            Formulaire de devis branché par DÉFAUT en mailto vers le service devis.
            Pour un envoi serveur, brancher un service d'envoi (voir README).
          */}
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
                  {besoins.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <Field label="Localisation du projet" id="c-lieu" name="lieu" placeholder="Commune, département" />
            </div>
            <div className="field">
              <label htmlFor="c-message">Votre message *</label>
              <textarea
                id="c-message"
                name="message"
                rows="6"
                required
                placeholder="Décrivez votre projet, le type d'ouvrage, vos échéances et toute contrainte utile."
              />
            </div>
            <button type="submit" className="btn btn-primary justify-self-start">
              Envoyer ma demande <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
            </button>
            {status && (
              <p className="text-[0.92rem] font-semibold text-safe-magenta" role="status" aria-live="polite">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ icon, title, children }) {
  return (
    <div>
      <span className="icon-badge mb-2">
        <Icon name={icon} />
      </span>
      <h3 className="mt-1 mb-1">{title}</h3>
      {children}
    </div>
  );
}

function Field({ label, id, name, type = 'text', required, autoComplete, placeholder }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </div>
  );
}
