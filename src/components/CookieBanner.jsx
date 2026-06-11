import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'safe-cookie-consent';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch { /* localStorage indisponible */ }
  }, []);

  const choose = (value) => {
    try { localStorage.setItem(KEY, value); } catch { /* ignore */ }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4 pointer-events-none" role="dialog" aria-label="Gestion des cookies">
      <div className="container-safe">
        <div className="pointer-events-auto bg-white border border-line shadow-sflg rounded-xl2 p-4 sm:p-5 flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="text-slate text-[0.92rem] flex-1">
            Nous utilisons uniquement des cookies nécessaires au bon fonctionnement
            du site, sans traceur publicitaire ni mesure d'audience.{' '}
            <Link to="/mentions-legales" className="text-safe-magenta font-semibold underline-offset-2 hover:underline">
              En savoir plus
            </Link>.
          </p>
          <div className="flex gap-2.5 shrink-0">
            <button type="button" onClick={() => choose('refused')} className="btn btn-ghost btn-sm">Refuser</button>
            <button type="button" onClick={() => choose('accepted')} className="btn btn-primary btn-sm">Accepter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
