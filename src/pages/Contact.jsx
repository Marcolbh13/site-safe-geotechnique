import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Reasons from '../components/Reasons.jsx';
import Decor from '../components/Decor.jsx';
import { COMPANY } from '../data/site.js';
import { sendForm } from '../lib/send.js';
import hdfLogo from '../assets/logos/inst-hauts-de-france.webp';

// Coordonnées géocodées du siège (rue des Famards, Fretin) — fiables pour le lien et la carte.
const MAPS_COORDS = '50.5843092,3.1318136';
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_COORDS)}`;
// Carte intégrée OpenStreetMap (sans clé ni traceur), centrée sur le siège (Fretin).
const MAPS_EMBED = 'https://www.openstreetmap.org/export/embed.html?bbox=3.1258%2C50.5803%2C3.1378%2C50.5883&layer=mapnik&marker=50.5843092%2C3.1318136';

const engagements = [
  { icon: 'phone', t: 'Une réponse rapide', d: 'Nous revenons vers vous au plus vite après votre demande.' },
  { icon: 'compass', t: 'Un conseil clair', d: 'Nous vous orientons vers la prestation réellement utile à votre projet.' },
  { icon: 'doc', t: 'Un devis adapté', d: 'Une proposition ajustée à votre terrain et à vos contraintes.' },
];

const besoins = ['Sondage / reconnaissance des sols', 'Essais en laboratoire', 'Mission géotechnique (G1 à G5)', 'Étude de sol – vente de terrain (loi ELAN)', 'Autre demande'];

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const d = new FormData(form);
    const g = (k) => String(d.get(k) ?? '').trim();
    const fields = {
      'Nom et prénom': g('nom'),
      'Société / organisme': g('structure'),
      'E-mail': g('email'),
      'Téléphone': g('telephone'),
      'Besoin': g('besoin'),
      'Localisation': g('lieu'),
      'Message': g('message'),
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
        <div className="container-safe grid items-start gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="grid gap-6 content-start">
            <ul className="grid list-none p-0 border-t border-line">
              <li className="flex items-start gap-4 py-4 border-b border-line">
                <span className="icon-badge shrink-0"><Icon name="pin" /></span>
                <div>
                  <p className="font-semibold text-ink">Adresse</p>
                  <p className="text-slate">{COMPANY.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 py-4 border-b border-line">
                <span className="icon-badge shrink-0"><Icon name="phone" /></span>
                <div>
                  <p className="font-semibold text-ink">Téléphone</p>
                  <a className="font-mono font-semibold text-[1.05rem] text-ink hover:text-safe-magenta transition-colors" href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-4 py-4 border-b border-line">
                <span className="icon-badge shrink-0"><Icon name="mail" /></span>
                <div className="min-w-0">
                  <p className="font-semibold text-ink">E-mail</p>
                  <a className="font-semibold text-ink hover:text-safe-magenta transition-colors break-words" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </li>
            </ul>

            <figure className="rounded-xl2 overflow-hidden shadow-sfmd border border-line">
              <iframe
                title="Localisation de SAFE Géotechnique à Fretin"
                src={MAPS_EMBED}
                className="block w-full aspect-[4/3] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </figure>
            <a className="btn btn-ghost justify-self-start" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
              Ouvrir dans Google Maps <Icon name="arrow" className="arrow w-[16px] h-[16px] -rotate-45" />
            </a>
          </Reveal>

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
              <button type="submit" disabled={status === 'sending'} className="btn btn-primary justify-self-start disabled:opacity-60">
                {status === 'sending' ? 'Envoi…' : <>Envoyer ma demande <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></>}
              </button>
              {status === 'ok' && <p className="text-[0.95rem] font-semibold text-safe-magenta" role="status" aria-live="polite">Merci ! Votre demande a bien été envoyée. Nous vous recontactons rapidement.</p>}
              {status === 'error' && <p className="text-[0.92rem] font-semibold text-safe-magenta" role="alert">Une erreur est survenue lors de l'envoi. Merci de réessayer, ou de nous appeler au {COMPANY.phone}.</p>}
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
        <div className="container-safe relative z-10 grid gap-[clamp(1.5rem,5vw,3.5rem)] lg:grid-cols-[0.7fr_1.3fr] items-center">
          <Reveal className="flex flex-col items-center">
            <img src={hdfLogo} alt="Région Hauts-de-France" className="w-auto max-h-[150px] h-auto" loading="lazy" />
            <p className="font-mono text-[0.78rem] uppercase tracking-[0.14em] text-muted mt-4 text-center">Base Hauts-de-France · toute la France</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="label mb-3">Zone d'intervention</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">Basés dans les Hauts-de-France, nous intervenons dans toute la France</h2>
            <p className="text-slate mt-4 text-[1.05rem] max-w-[64ch]">
              Notre siège est à <strong className="text-ink">Fretin</strong> ({COMPANY.address}),
              au cœur des Hauts-de-France. De là, nous nous déplaçons sur
              l'ensemble du territoire national, des grands ouvrages aux projets
              les plus locaux, selon la nature et l'ampleur de votre opération.
            </p>
            <p className="text-slate mt-3">
              Un doute sur un déplacement ?{' '}
              <a href={COMPANY.phoneHref} className="text-safe-magenta font-semibold">{COMPANY.phone}</a>.
            </p>
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
