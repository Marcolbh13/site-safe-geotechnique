import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Remonte en haut à chaque changement de page, ou défile vers l'ancre (#id).
function useScrollManagement() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Laisse le temps au DOM de la nouvelle page de se monter.
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        window.scrollTo({ top: 0 });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);
}

export default function Layout({ children }) {
  useScrollManagement();
  return (
    <>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
