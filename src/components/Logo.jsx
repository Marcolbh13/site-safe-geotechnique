/* Logo SAFE — vrai logo officiel extrait de safe-geotechnique.fr (SVG vectoriel).
   - tone 'dark' (par défaut, fond clair) : logo couleur (emblème + texte).
   - tone 'light' (fond sombre, footer) : logotype blanc officiel. */
import logoColor from '../assets/images/logo-safe.svg';
import logoWhite from '../assets/images/logo-safe-white.svg';

export default function Logo({ height = 46, tone = 'dark', className = '' }) {
  const src = tone === 'light' ? logoWhite : logoColor;
  return (
    <img
      src={src}
      alt="SAFE Géotechnique"
      height={height}
      style={{ height: `${height}px`, width: 'auto', display: 'block' }}
      className={className}
    />
  );
}
