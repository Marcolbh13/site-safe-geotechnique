/* Formes géométriques décoratives (losanges, écho du logo SAFE).
   Filigrane discret aux couleurs de la marque. Toujours derrière le contenu
   (le parent doit être `relative overflow-hidden`, le contenu `relative`). */

const SOFT = [
  { t: '-7%', l: '-4%', s: 260, fill: true },
  { t: '10%', r: '5%', s: 130, fill: false },
  { b: '-10%', r: '-3%', s: 300, fill: false },
  { b: '6%', l: '9%', s: 96, fill: true },
  { t: '44%', l: '40%', s: 70, fill: false },
  { t: '60%', r: '22%', s: 60, fill: true },
];

const DARK = [
  { t: '-12%', r: '-4%', s: 320, fill: false, dark: true },
  { b: '-14%', l: '-5%', s: 280, fill: true, dark: true },
  { t: '30%', l: '14%', s: 110, fill: false, dark: true },
];

function Shape({ t, b, l, r, s, fill, dark }) {
  const magentaFill = 'linear-gradient(135deg, rgba(192,48,123,.13), rgba(110,35,80,.06))';
  const whiteFill = 'linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.05))';
  const border = dark ? '1.5px solid rgba(255,255,255,.16)' : '1.5px solid rgba(141,42,99,.18)';
  return (
    <span
      className="absolute block rounded-[26%]"
      style={{
        top: t, bottom: b, left: l, right: r,
        width: s, height: s, transform: 'rotate(45deg)',
        background: fill ? (dark ? whiteFill : magentaFill) : 'transparent',
        border: fill ? 'none' : border,
      }}
    />
  );
}

export default function Decor({ variant = 'soft' }) {
  const shapes = variant === 'dark' ? DARK : SOFT;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      {shapes.map((sh, i) => <Shape key={i} {...sh} />)}
    </div>
  );
}
