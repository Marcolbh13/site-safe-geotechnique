/* Losanges décoratifs (écho du logo SAFE).
   Règles : formes ENTIÈRES (jamais rognées), placées dans des coins opposés
   avec une marge, donc jamais superposées ni sous le texte. Discrètes.
   Masquées sur mobile (le texte y occupe toute la largeur).
   Le parent doit être `relative overflow-hidden` et le contenu `relative z-10`. */

// marge interne : garantit que le losange (carré pivoté à 45°) reste entier.
const PAD = 44;

const LAYOUTS = {
  soft: [
    { vx: 'right', vy: 'top', s: 122, fill: false },
    { vx: 'left', vy: 'bottom', s: 88, fill: true },
  ],
  dark: [
    { vx: 'right', vy: 'top', s: 130, fill: false, dark: true },
    { vx: 'left', vy: 'bottom', s: 92, fill: true, dark: true },
  ],
};

function pos(vx, vy) {
  return {
    [vy === 'top' ? 'top' : 'bottom']: PAD,
    [vx === 'left' ? 'left' : 'right']: PAD,
  };
}

function Shape({ vx, vy, s, fill, dark }) {
  const magentaFill = 'linear-gradient(135deg, rgba(192,48,123,.12), rgba(110,35,80,.05))';
  const whiteFill = 'linear-gradient(135deg, rgba(255,255,255,.12), rgba(255,255,255,.04))';
  const border = dark ? '1.5px solid rgba(255,255,255,.18)' : '1.5px solid rgba(141,42,99,.16)';
  return (
    <span
      className="absolute block rounded-[24%]"
      style={{
        ...pos(vx, vy),
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
    <div className="hidden sm:block pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      {shapes.map((sh, i) => <Shape key={i} {...sh} />)}
    </div>
  );
}
