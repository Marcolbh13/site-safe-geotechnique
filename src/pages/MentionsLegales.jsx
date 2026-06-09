import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { COMPANY } from '../data/site.js';

const SOC = {
  raisonSociale: '[Raison sociale à compléter]',
  formeJuridique: '[Forme juridique et capital à compléter]',
  siret: '[SIRET / RCS à compléter]',
  tva: '[N° TVA intracommunautaire à compléter]',
  directeur: '[Directeur de la publication à compléter]',
  hebergeur: '[Hébergeur à compléter (nom, adresse, téléphone)]',
};

function Row({ label, children }) {
  return (
    <div className="grid sm:grid-cols-[210px_1fr] gap-y-1 gap-x-6 py-3 border-b border-line">
      <dt className="font-semibold text-ink">{label}</dt>
      <dd className="text-slate">{children}</dd>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <>
      <Seo title="Mentions légales" description="Mentions légales et traitement des données du site SAFE Géotechnique." />
      <section className="bg-white border-b border-line">
        <div className="container-safe" style={{ paddingBlock: 'clamp(2.5rem,5vw,4rem)' }}>
          <p className="label mb-4">Informations légales</p>
          <h1>Mentions légales</h1>
          <div className="rule my-6" />
        </div>
      </section>

      <section className="section">
        <div className="container-safe max-w-narrow">
          <h2 className="text-[1.5rem] mb-4">Éditeur du site</h2>
          <dl className="mb-12">
            <Row label="Dénomination">{SOC.raisonSociale}</Row>
            <Row label="Forme juridique">{SOC.formeJuridique}</Row>
            <Row label="Siège social">{COMPANY.address}</Row>
            <Row label="Immatriculation">{SOC.siret}</Row>
            <Row label="TVA">{SOC.tva}</Row>
            <Row label="Directeur de la publication">{SOC.directeur}</Row>
            <Row label="Téléphone"><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></Row>
            <Row label="Contact"><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></Row>
          </dl>

          <h2 className="text-[1.5rem] mb-4">Hébergement</h2>
          <p className="text-slate mb-12">{SOC.hebergeur}</p>

          <h2 className="text-[1.5rem] mb-4">Propriété intellectuelle</h2>
          <p className="text-slate mb-12">
            L'ensemble des contenus de ce site (textes, photographies, logo,
            éléments graphiques) est protégé. Toute reproduction ou utilisation
            sans autorisation préalable est interdite.
          </p>

          <h2 className="text-[1.5rem] mb-4">Données personnelles</h2>
          <p className="text-slate mb-4">
            Ce site ne dépose pas de cookie de mesure d'audience ni de traceur
            publicitaire. Le formulaire de contact fonctionne par messagerie : à
            la validation, votre logiciel de courrier s'ouvre et vous envoyez
            vous-même votre message. Les informations transmises servent
            uniquement à traiter votre demande et ne sont pas cédées à des tiers.
          </p>
          <p className="text-slate mb-12">
            Vous disposez d'un droit d'accès, de rectification et de suppression
            des données vous concernant : <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>

          <p className="note">Cadre prêt à l'emploi : les informations entre crochets sont à compléter par SAFE avant la mise en ligne officielle.</p>
          <p className="mt-8"><Link to="/" className="font-bold">← Retour à l'accueil</Link></p>
        </div>
      </section>
    </>
  );
}
