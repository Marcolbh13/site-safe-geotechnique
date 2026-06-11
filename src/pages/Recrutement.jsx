import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import PhotoBand from '../components/PhotoBand.jsx';
import Reasons from '../components/Reasons.jsx';
import CtaBand from '../components/CtaBand.jsx';
import bandRecrut from '../assets/images/band-recrutement.webp';
import illRecrutement from '../assets/illustrations/ill-recrutement.svg';
import illCv from '../assets/illustrations/ill-cv.svg';
import { COMPANY } from '../data/site.js';
import { sendForm, fileToCv } from '../lib/send.js';

const RECRUT_EMAIL = 'v.lebihan@ftcs-forage.com';
const postes = ['Technicien de chantier / sondeur', 'Technicien de laboratoire', 'Ingénieur géotechnicien', 'Foreur', 'Candidature spontanée'];

const atouts = [
  { icon: 'layers', t: 'Des métiers complets', d: 'Du terrain au laboratoire et à l\'ingénierie : des parcours variés au sein de la même équipe.' },
  { icon: 'shield', t: 'La formation continue', d: 'Qualifications (AIPR, H0B0, SST) entretenues et montée en compétences accompagnée.' },
  { icon: 'compass', t: 'Une équipe à taille humaine', d: 'Proximité, entraide et appartenance au Groupe RESUM.' },
];

export default function Recrutement() {
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'mailto' | 'error'

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const d = new FormData(form);
    const g = (k) => String(d.get(k) ?? '').trim();
    const fields = {
      'Nom et prénom': g('nom'),
      'E-mail': g('email'),
      'Téléphone': g('telephone'),
      'Poste visé': g('poste'),
      'Expérience': g('experience'),
      'Message': g('message'),
    };
    setStatus('sending');
    try {
      const file = d.get('cv');
      const cv = file && file.size ? await fileToCv(file) : null;
      if (cv && cv.base64 && cv.base64.length > 7_000_000) {
        setStatus('error');
        return;
      }
      await sendForm({ type: 'recrutement', fields, cv });
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Seo title="Recrutement"
        description="Rejoignez SAFE Géotechnique : technicien de chantier, laboratoire ou ingénierie. Déposez votre candidature et votre CV en ligne." />

      <PageHero
        label="Rejoignez-nous"
        title="Construisons ensemble la sécurité des projets"
        intro="Vous êtes curieux, rigoureux et attiré par le terrain comme par l'analyse ? Découvrez nos métiers et envoyez-nous votre candidature, CV à l'appui."
      />

      <Reasons label="Pourquoi nous rejoindre ?" title="Travailler chez SAFE Géotechnique" items={atouts} tone="mist" illustration={illRecrutement} illSize="max-w-[340px]" />

      <PhotoBand
        image={bandRecrut}
        alt="Atelier et véhicule SAFE Géotechnique sur un chantier"
        label="Nos métiers"
        title="Du terrain au laboratoire, des parcours qui ont du sens"
      >
        Rejoignez une équipe à taille humaine, du sondage à l'ingénierie, au sein
        du Groupe RESUM.
      </PhotoBand>

      <section className="section relative overflow-hidden">
        <div className="container-safe grid items-start gap-[clamp(1.75rem,4vw,3rem)] lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="label mb-4">Candidature</p>
            <h2>Déposez votre CV</h2>
            <p className="lead mt-4">
              Renseignez le formulaire et joignez votre CV. Votre candidature
              nous parvient directement, à l'adresse dédiée au recrutement.
            </p>
            <ul className="grid gap-3 mt-6 text-slate text-[0.97rem]">
              <li className="flex items-center gap-2.5"><Icon name="mail" className="w-[18px] h-[18px] text-safe-magenta" /><a href={`mailto:${RECRUT_EMAIL}`}>{RECRUT_EMAIL}</a></li>
              <li className="flex items-center gap-2.5"><Icon name="phone" className="w-[18px] h-[18px] text-safe-magenta" /><a href={COMPANY.phoneHref} className="font-mono font-semibold">{COMPANY.phone}</a></li>
            </ul>
            <img src={illCv} alt="" aria-hidden="true" className="hidden lg:block w-full max-w-[240px] mt-9" loading="lazy" />
          </Reveal>

          <Reveal delay={120}>
            <form className="form-card" onSubmit={onSubmit} noValidate>
              <div className="grid gap-[1.1rem] sm:grid-cols-2">
                <Field label="Nom et prénom *" id="r-nom" name="nom" autoComplete="name" required />
                <Field label="Téléphone *" id="r-tel" name="telephone" type="tel" autoComplete="tel" required />
              </div>
              <div className="grid gap-[1.1rem] sm:grid-cols-2">
                <Field label="E-mail *" id="r-email" name="email" type="email" autoComplete="email" required />
                <div className="field">
                  <label htmlFor="r-poste">Poste visé *</label>
                  <select id="r-poste" name="poste" required defaultValue="">
                    <option value="" disabled>Choisissez</option>
                    {postes.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <Field label="Expérience" id="r-exp" name="experience" placeholder="Années d'expérience, domaines, diplômes…" />
              <div className="field">
                <label htmlFor="r-msg">Message</label>
                <textarea id="r-msg" name="message" rows="4" placeholder="Présentez-vous en quelques lignes." />
              </div>
              <div className="field">
                <label htmlFor="r-cv">CV (PDF, DOC, 5 Mo max)</label>
                <input id="r-cv" name="cv" type="file" accept=".pdf,.doc,.docx" />
              </div>
              <button type="submit" disabled={status === 'sending'} className="btn btn-primary justify-self-start disabled:opacity-60">
                {status === 'sending' ? 'Envoi…' : <>Envoyer ma candidature <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></>}
              </button>
              {status === 'ok' && <p className="text-[0.95rem] font-semibold text-safe-magenta" role="status">Merci ! Votre candidature a bien été envoyée. Nous reviendrons vers vous rapidement.</p>}
              {status === 'error' && <p className="text-[0.92rem] font-semibold text-safe-magenta" role="alert">L'envoi a échoué (vérifiez que le CV fait moins de 5 Mo). Merci de réessayer, ou de nous écrire à {RECRUT_EMAIL}.</p>}
            </form>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Une question avant de postuler ?" text="Écrivez-nous : nous serons ravis d'échanger sur nos métiers et nos besoins." />
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
