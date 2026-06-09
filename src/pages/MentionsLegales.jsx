import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { EMAILS, PHONE, PHONE_HREF } from '../data/site.js';

/*
  Champs société à COMPLÉTER par SAFE (cf. A-VALIDER.md).
  Les valeurs ci-dessous sont des emplacements à remplacer par les
  informations officielles. Tout ce qui n'est pas connu est laissé
  explicitement « à compléter » plutôt qu'inventé.
*/
const SOC = {
  raisonSociale: '[Raison sociale à compléter]',
  formeJuridique: '[Forme juridique et capital à compléter]',
  adresse: '[Adresse du siège à compléter]',
  siret: '[SIRET / RCS à compléter]',
  tva: '[N° TVA intracommunautaire à compléter]',
  directeur: '[Directeur de la publication à compléter]',
  telephone: null, // non communiqué pour le moment
  hebergeur: '[Hébergeur à compléter — nom, adresse, téléphone]',
};

function Row({ label, children }) {
  return (
    <div className="grid sm:grid-cols-[200px_1fr] gap-y-1 gap-x-6 py-3 border-b border-line">
      <dt className="font-semibold text-ink">{label}</dt>
      <dd className="text-slate">{children}</dd>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <>
      <Seo
        title="Mentions légales"
        description="Mentions légales et informations sur le traitement des données du site SAFE Géotechnique."
      />

      <section className="bg-white border-b border-line">
        <div className="container-safe" style={{ paddingBlock: 'clamp(2.5rem,5vw,4rem)' }}>
          <p className="kicker mb-4">Informations légales</p>
          <h1>Mentions légales</h1>
          <div className="rule my-6" />
          <p className="lead max-w-[60ch]">
            Informations relatives à l'éditeur du site, à son hébergement et au
            traitement des données transmises via nos formulaires.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-safe max-w-narrow">
          <h2 className="text-[1.5rem] mb-4">Éditeur du site</h2>
          <dl className="mb-12">
            <Row label="Dénomination">{SOC.raisonSociale}</Row>
            <Row label="Forme juridique">{SOC.formeJuridique}</Row>
            <Row label="Siège social">{SOC.adresse}</Row>
            <Row label="Immatriculation">{SOC.siret}</Row>
            <Row label="TVA">{SOC.tva}</Row>
            <Row label="Directeur de la publication">{SOC.directeur}</Row>
            <Row label="Téléphone">
              <a href={PHONE_HREF}>{PHONE}</a>
            </Row>
            <Row label="Contact">
              <a href={`mailto:${EMAILS.contact}`}>{EMAILS.contact}</a>
            </Row>
          </dl>

          <h2 className="text-[1.5rem] mb-4">Hébergement</h2>
          <p className="text-slate mb-12">{SOC.hebergeur}</p>

          <h2 className="text-[1.5rem] mb-4">Propriété intellectuelle</h2>
          <p className="text-slate mb-4">
            L'ensemble des contenus de ce site (textes, photographies, logo,
            éléments graphiques) est protégé. Toute reproduction ou utilisation,
            totale ou partielle, sans autorisation préalable est interdite. Les
            photographies présentées illustrent l'activité du groupe ; les
            marques d'équipement éventuellement visibles appartiennent à leurs
            propriétaires respectifs.
          </p>
          <p className="text-slate mb-12">
            Aucun logo ni nom de client n'est publié sans l'accord des intéressés.
          </p>

          <h2 className="text-[1.5rem] mb-4">Données personnelles</h2>
          <p className="text-slate mb-4">
            Ce site ne dépose pas de cookie de mesure d'audience ni de traceur
            publicitaire. Les formulaires de contact et de recrutement
            fonctionnent par messagerie : à la validation, votre logiciel de
            courrier s'ouvre et vous envoyez vous-même votre message. Les
            informations que vous nous transmettez (identité, coordonnées,
            message, et le cas échéant CV) sont utilisées uniquement pour traiter
            votre demande et ne sont pas cédées à des tiers.
          </p>
          <p className="text-slate mb-12">
            Conformément à la réglementation applicable, vous disposez d'un droit
            d'accès, de rectification et de suppression des données vous
            concernant. Pour l'exercer, écrivez-nous à{' '}
            <a href={`mailto:${EMAILS.contact}`}>{EMAILS.contact}</a>.
          </p>

          <p className="note">
            Cette page est un cadre prêt à l'emploi : les informations entre
            crochets sont à compléter par SAFE avant la mise en ligne officielle.
          </p>

          <p className="mt-8">
            <Link to="/" className="font-bold">← Retour à l'accueil</Link>
          </p>
        </div>
      </section>
    </>
  );
}
