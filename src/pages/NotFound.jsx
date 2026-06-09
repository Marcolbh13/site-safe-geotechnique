import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" description="La page demandée n'existe pas." />
      <section className="section">
        <div className="container-safe max-w-narrow text-center">
          <p className="label justify-center mb-4">Erreur 404</p>
          <h1>Cette page est introuvable</h1>
          <p className="lead mt-4">Le lien que vous avez suivi n'existe pas ou plus. Revenons en terrain connu.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-[0.85rem]">
            <Link to="/" className="btn btn-primary">Retour à l'accueil <Icon name="arrow" className="arrow w-[18px] h-[18px]" /></Link>
            <Link to="/contact" className="btn btn-ghost">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
