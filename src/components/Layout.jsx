import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Remonte en haut de page à chaque navigation.
function useScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
}

export default function Layout({ children }) {
  useScrollTop();
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
