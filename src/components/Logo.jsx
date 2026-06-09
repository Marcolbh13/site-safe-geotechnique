/* ==========================================================================
   Logo SAFE — POINT UNIQUE DE RÉGLAGE
   Le fichier actuel est un JPEG basse déf sur fond blanc. Pour le remplacer
   par une version vectorielle / PNG HD transparente :
     1. Déposez le fichier dans src/assets/images/
     2. Changez l'import `logoSrc` ci-dessous
     3. Si fond transparent, passez IS_JPEG à false (retire le cartouche blanc)
   ========================================================================== */
import logoSrc from '../assets/images/logo-safe-geotechnique.jpeg';

const IS_JPEG = true;

export default function Logo({ height = 44, variant = 'default', className = '' }) {
  return (
    <span className={`inline-flex items-center ${className}`} style={{ lineHeight: 0 }}>
      <img
        src={logoSrc}
        alt="SAFE Géotechnique"
        height={height}
        style={{
          height: `${height}px`, width: 'auto',
          ...(IS_JPEG ? {
            background: '#fff', borderRadius: '10px', padding: '5px 9px',
            boxShadow: variant === 'light' ? '0 2px 12px rgba(0,0,0,.2)' : 'none',
          } : {}),
        }}
      />
    </span>
  );
}
