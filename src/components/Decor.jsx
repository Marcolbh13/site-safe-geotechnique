/* Losanges décoratifs (écho du logo SAFE), très discrets.
   Règles : 2 formes maximum, dans des coins OPPOSÉS, qui débordent hors du
   cadre (donc seulement « rognées » par le bord, jamais coupées en plein
   milieu ni superposées), et toujours derrière le contenu (parent
   `relative overflow-hidden`, contenu en `relative z-10`). */

// décalage : la forme déborde de ~60 % hors du coin -> seul un angle apparaît.
const PEEK = 0.62;

const LAYOUTS = {
  // coin haut-droit (rempli) + coin bas-gauche (contour)
  soft: [
    { corner: 'tr', s: 300, fill: true },
    { corner: 'bl', s: 340, fill: false },
  ],
  dark: [
    { corner: 'tr', s: 320, fill: false, dark: true },
    { corner: 'bl', s: 300, fill: true, dark: true },
  ],
};

function pos(corner, s) {
  const off = -Math.round(s * PEEK);
  switch (corner) {
    case 'tr': return { top: off, right: off };
    case 'bl': return { bottom: off, left: off };
    case 'tl': return { top: off, left: off };
    default: return { bottom: off, right: off };
  }
}

function Shape({ corner, s, fill, dark }) {
  const magentaFill = 'linear-gradient(135deg, rgba(192,48,123,.07), rgba(110,35,80,.03))';
  const whiteFill = 'linear-gradient(135deg, rgba(255,255,255,.10), rgba(255,255,255,.03))';
  const border = dark ? '1.5px solid rgba(255,255,255,.12)' : '1.5px solid rgba(141,42,99,.11)';
  return (
    <span
      className="absolute block rounded-[26%]"
      style={{
        ...pos(corner, s),
        width: s, height: s, transform: 'rotate(45deg)',
        background: fill ? (dark ? whiteFill : magentaFill) : 'transparent',
        border: fill ? 'none' : border,
      }}
    />
  );
}

export default function Decor({ variant = 'soft' }) {
  const shapes = LAYOUTS[variant] || LAYOUTS.soft;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      {shapes.map((sh, i) => <Shape key={i} {...sh} />)}
    </div>
  );
}
