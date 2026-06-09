// Échelle de profondeur de sondage (motif signature, thématique géotechnique).
// 0 -> 100 m, avec les deux ateliers EMCI repérés. Décoratif (aria-hidden).
const TICKS = [0, 20, 40, 60, 80, 100];
const TOP = 22;
const BOT = 354;
const X = 64; // axe décalé à droite pour laisser la place aux libellés « 100 m »
const yOf = (m) => TOP + (m / 100) * (BOT - TOP);

export default function DepthScale({ className = '', light = false }) {
  const axis = light ? 'rgba(255,255,255,.35)' : 'rgba(141,42,99,.25)';
  const txt = light ? 'rgba(255,255,255,.85)' : '#5a5060';
  const strong = light ? '#ffffff' : '#8d2a63';

  return (
    <svg viewBox="0 0 250 376" className={className} role="img"
      aria-label="Échelle de profondeur de sondage de 0 à 100 mètres">
      {/* dégradé du fût */}
      <defs>
        <linearGradient id="ds-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c0307b" />
          <stop offset="1" stopColor="#6e2350" />
        </linearGradient>
      </defs>

      {/* fût de forage */}
      <line x1={X} y1={TOP} x2={X} y2={BOT} stroke="url(#ds-grad)" strokeWidth="3" strokeLinecap="round" />

      {/* graduations + profondeurs */}
      {TICKS.map((m) => (
        <g key={m}>
          <line x1={X - 7} y1={yOf(m)} x2={X + 7} y2={yOf(m)} stroke={axis} strokeWidth="1.5" />
          <text x={X - 12} y={yOf(m) + 4} textAnchor="end"
            fontFamily="'IBM Plex Mono', monospace" fontSize="11" fill={txt}>{m} m</text>
        </g>
      ))}

      {/* marqueurs ateliers */}
      {[
        { m: 40, label: 'EMCI 4.50' },
        { m: 100, label: 'EMCI 7.50' },
      ].map((a) => (
        <g key={a.label}>
          <circle cx={X} cy={yOf(a.m)} r="6" fill={strong} />
          <circle cx={X} cy={yOf(a.m)} r="11" fill="none" stroke={strong} strokeWidth="1.5" opacity="0.45" />
          <text x={X + 22} y={yOf(a.m) - 2} fontFamily="'IBM Plex Mono', monospace"
            fontSize="13" fontWeight="600" fill={strong}>{a.label}</text>
          <text x={X + 22} y={yOf(a.m) + 14} fontFamily="Manrope, sans-serif"
            fontSize="12" fill={txt}>jusqu'à {a.m} m</text>
        </g>
      ))}
    </svg>
  );
}
