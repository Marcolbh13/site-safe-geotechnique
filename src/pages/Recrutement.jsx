import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import { EMAILS } from '../data/site.js';
import travauxSpeciaux from '../assets/images/travaux-speciaux.webp';

const postes = [
  'Technicien de chantier / sondeur',
  'Technicien',
  'Technicien de laboratoire',
  'Ingénieur géotechnicien',
  'Candidature spontanée',
];

const atouts = [
  { icon: 'layers', title: 'Des métiers complets', text: "Du terrain au laboratoire et à l'ingénierie : des parcours variés au sein de la même équipe." },
  { icon: 'certificate', title: 'La formation continue', text: 'Nous entretenons et développons les compétences et habilitations de notre personnel.' },
  { icon: 'users', title: 'Une équipe à taille humaine', text: 'Proximité, entraide et transmission des savoir-faire au quotidien.' },
];

export default function Recrutement() {
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
    const cvName = data.get('cv')?.name;

    const subject = `Candidature - ${get('poste')} - ${get('nom')}`;
    const body = [
      `Nom et prénom : ${get('nom')}`,
      `E-mail : ${get('email')}`,
      `Téléphone : ${get('telephone')}`,
      `Poste visé : ${get('poste')}`,
      '',
      'Expérience :',
      get('experience') || '(non renseignée)',
      '',
      'Motivation :',
      get('motivation'),
      '',
      cvName ? `CV à joindre : ${cvName} (à ajouter manuellement à cet e-mail)` : '',
    ].join('\n');

    window.location.href = `mailto:${EMAILS.recrutement}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus(
      'Votre logiciel de messagerie va s’ouvrir avec votre candidature pré-remplie. Pensez à joindre votre CV avant d’envoyer.'
    );
  };

  return (
    <>
      <Seo
        title="Recrutement"
        description="Rejoignez SAFE Géotechnique : technicien de chantier, technicien, laboratoire ou ingénierie. Déposez votre candidature en ligne."
      />
      <PageHero
        kicker="Entreprise · Recrutement"
        title="Rejoignez SAFE Géotechnique"
        intro="Nous recherchons des personnes de terrain comme de laboratoire, curieuses et rigoureuses, pour accompagner notre activité. Découvrez nos métiers et postulez."
      />

      <section className="section">
        <div className="container-safe">
          <div className="grid gap-[clamp(1.25rem,2.5vw,1.75rem)] md:grid-cols-3">
            {atouts.map((a) => (
              <div key={a.title} className="card">
                <span className="icon-badge mb-[1.1rem]">
                  <Icon name={a.icon} />
                </span>
                <h3 className="mb-[0.6rem]">{a.title}</h3>
                <p className="text-slate">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-safe grid items-start gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="kicker mb-[0.9rem]">Candidature</p>
            <h2>Déposez votre candidature</h2>
            <p className="lead mt-4">
              Renseignez le formulaire ci-contre. Votre message nous parviendra à
              l'adresse dédiée au recrutement.
            </p>
            <ul className="ticks mt-6">
              <li>Les champs marqués d'un astérisque sont obligatoires.</li>
              <li>Format de CV recommandé : PDF (voir la note sous le formulaire).</li>
            </ul>
            <p className="mt-6 text-slate">
              Ou écrivez-nous directement :
              <br />
              <a
                href={`mailto:${EMAILS.recrutement}`}
                className="inline-flex items-center gap-2 font-bold mt-1"
              >
                <Icon name="mail" className="w-[18px] h-[18px]" /> {EMAILS.recrutement}
              </a>
            </p>

            <figure className="mt-8 rounded-xl2 overflow-hidden shadow-sfmd hidden md:block">
              <img
                src={travauxSpeciaux}
                alt="Intervention du groupe sur un chantier de travaux spéciaux"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </figure>
          </div>

          {/*
            Formulaire branché par DÉFAUT en mailto (destinataire recrutement).
            ⚠️ mailto ne peut pas joindre le CV automatiquement : le candidat
            l'ajoute manuellement. Pour un envoi serveur avec pièce jointe,
            brancher un service d'envoi (voir README, section « Formulaires »).
          */}
          <form className="form-card" onSubmit={onSubmit} noValidate>
            <Field label="Nom et prénom *" id="r-nom" name="nom" autoComplete="name" required />
            <div className="grid gap-[1.1rem] sm:grid-cols-2">
              <Field label="E-mail *" id="r-email" name="email" type="email" autoComplete="email" required />
              <Field label="Téléphone *" id="r-tel" name="telephone" type="tel" autoComplete="tel" required />
            </div>
            <div className="field">
              <label htmlFor="r-poste">Poste visé *</label>
              <select id="r-poste" name="poste" required defaultValue="">
                <option value="" disabled>Choisissez un poste</option>
                {postes.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="r-exp">Expérience</label>
              <textarea id="r-exp" name="experience" rows="3" placeholder="Vos expériences et formations marquantes" />
            </div>
            <div className="field">
              <label htmlFor="r-motivation">Motivation *</label>
              <textarea id="r-motivation" name="motivation" rows="5" required placeholder="Présentez-vous et expliquez votre intérêt pour SAFE Géotechnique" />
            </div>
            <div className="field">
              <label htmlFor="r-cv">CV (fichier)</label>
              <input id="r-cv" name="cv" type="file" accept=".pdf,.doc,.docx" />
              <p className="text-[0.84rem] text-muted mt-1">
                Avec l'envoi par e-mail, pensez à joindre votre CV manuellement à
                l'e-mail qui s'ouvrira (l'envoi automatique du fichier nécessite
                l'activation d'un service d'envoi : voir README).
              </p>
            </div>
            <button type="submit" className="btn btn-primary justify-self-start">
              Envoyer ma candidature <Icon name="arrow" className="arrow w-[18px] h-[18px]" />
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

function Field({ label, id, name, type = 'text', required, autoComplete }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} />
    </div>
  );
}
