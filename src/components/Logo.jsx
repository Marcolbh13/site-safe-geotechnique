/* ==========================================================================
   Logo SAFE Géotechnique — POINT UNIQUE DE RÉGLAGE DU LOGO
   --------------------------------------------------------------------------
   Le fichier actuel (logo-safe-geotechnique.jpeg) est un JPEG basse définition
   sur fond BLANC. Il est isolé ici pour être remplacé FACILEMENT par une
   version vectorielle / PNG HD transparente.

   POUR REMPLACER LE LOGO :
   1. Déposez le nouveau fichier dans src/assets/images/
      (idéalement .svg ou un PNG HD à fond transparent).
   2. Changez l'import `logoSrc` ci-dessous.
   3. Si le logo a un fond transparent, passez la constante IS_JPEG à false
      pour retirer le cartouche blanc.

   Tout le site utilise <Logo /> : aucune autre modification nécessaire.
   ========================================================================== */
import logoSrc from '../assets/images/logo-safe-geotechnique.jpeg';

// true tant que le logo est un JPEG/JPG à fond blanc -> on ajoute un cartouche.
const IS_JPEG = true;

export default function Logo({ height = 44, variant = 'default', className = '' }) {
  return (
    <span
      className={`inline-flex items-center leading-none ${className}`}
      style={{ lineHeight: 0 }}
    >
      <img
        src={logoSrc}
        alt="SAFE Géotechnique"
        height={height}
        style={{
          height: `${height}px`,
          width: 'auto',
          ...(IS_JPEG
            ? {
                background: '#fff',
                borderRadius: '10px',
                padding: '5px 9px',
                boxShadow:
                  variant === 'light' ? '0 2px 10px rgba(0,0,0,0.18)' : 'none',
              }
            : {}),
        }}
      />
    </span>
  );
}
