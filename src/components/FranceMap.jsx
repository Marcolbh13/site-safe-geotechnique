// Visuel « zone d'intervention » : la France (l'Hexagone) avec la base
// Hauts-de-France repérée au nord. Décoratif (aria-hidden), libellé en texte.
export default function FranceMap({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img"
      aria-label="Carte de la France : base dans les Hauts-de-France, intervention sur tout le territoire">
      <defs>
        <linearGradient id="fr-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbf2f7" />
          <stop offset="1" stopColor="#f3e3ee" />
        </linearGradient>
        <linearGradient id="fr-hdf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c0307b" />
          <stop offset="1" stopColor="#6e2350" />
        </linearGradient>
      </defs>

      {/* France = hexagone */}
      <polygon points="100,16 174,58 174,142 100,184 26,142 26,58"
        fill="url(#fr-grad)" stroke="#c0307b" strokeWidth="2" strokeOpacity="0.5" strokeLinejoin="round" />

      {/* Hauts-de-France : pointe nord */}
      <path d="M100,16 174,58 142,72 100,52 58,72 26,58 Z" fill="url(#fr-hdf)" opacity="0.92" />

      {/* repère base (Fretin) */}
      <g transform="translate(118,40)">
        <path d="M0,-9 C5,-9 9,-5 9,0 C9,6 0,15 0,15 C0,15 -9,6 -9,0 C-9,-5 -5,-9 0,-9 Z" fill="#ffffff" />
        <circle cx="0" cy="0" r="3.4" fill="#8d2a63" />
      </g>

      {/* points d'intervention dispersés sur le territoire */}
      <g fill="#8d2a63" opacity="0.55">
        <circle cx="78" cy="104" r="3" />
        <circle cx="126" cy="120" r="3" />
        <circle cx="96" cy="150" r="3" />
        <circle cx="58" cy="92" r="2.4" />
        <circle cx="146" cy="96" r="2.4" />
      </g>
    </svg>
  );
}
