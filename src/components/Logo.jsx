/* ==========================================================================
   Logo SAFE — version VECTORIELLE (SVG), fond transparent, sans cartouche.
   - Marque : hexagone dégradé magenta/fuchsia + molécule (rappel du logo SAFE).
   - Texte « SAFE » + « GÉOTECHNIQUE » en `currentColor` : s'accorde au fond
     (sombre sur fond clair, blanc sur fond sombre) via la prop `tone`.
   Pour repasser au logo fourni (JPEG) : voir l'historique / remplacer ce
   composant. Le SVG ci-dessous est éditable directement.
   ========================================================================== */
export default function Logo({ height = 44, tone = 'dark', className = '' }) {
  const textColor = tone === 'light' ? '#ffffff' : '#1b141d';
  const sub = tone === 'light' ? 'rgba(255,255,255,.72)' : '#8d2a63';
  const uid = tone === 'light' ? 'lg-l' : 'lg-d';

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      style={{ height, lineHeight: 0, color: textColor }}
      aria-label="SAFE Géotechnique"
      role="img"
    >
      <svg width={height} height={height} viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`${uid}-hex`} x1="6" y1="4" x2="46" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c0307b" />
            <stop offset="1" stopColor="#6e2350" />
          </linearGradient>
        </defs>
        {/* hexagone */}
        <path
          d="M26 2.5 46.7 14.25 V37.75 L26 49.5 5.3 37.75 V14.25 Z"
          fill={`url(#${uid}-hex)`}
        />
        {/* molécule (sphères reliées) */}
        <g stroke="#ffffff" strokeWidth="1.6" opacity="0.95">
          <line x1="17" y1="34" x2="24" y2="27" />
          <line x1="24" y1="27" x2="34" y2="30" />
          <line x1="24" y1="27" x2="27" y2="17" />
        </g>
        <g fill="#ffffff">
          <circle cx="17" cy="34.5" r="3.1" />
          <circle cx="24" cy="26.8" r="3.6" />
          <circle cx="34" cy="30.2" r="2.7" />
          <circle cx="27" cy="16.6" r="2.4" />
        </g>
      </svg>

      <span className="flex flex-col justify-center" style={{ lineHeight: 1 }}>
        <span
          className="font-extrabold tracking-tight"
          style={{ fontSize: height * 0.5, color: textColor, letterSpacing: '-0.01em' }}
        >
          SAFE
        </span>
        <span
          className="font-mono font-semibold"
          style={{ fontSize: height * 0.205, letterSpacing: '0.24em', color: sub, marginTop: height * 0.04 }}
        >
          GÉOTECHNIQUE
        </span>
      </span>
    </span>
  );
}
