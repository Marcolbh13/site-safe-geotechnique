import Icon from './Icon.jsx';

/* Emplacement d'image prêt à recevoir une vraie photo SAFE.
   Reste élégant tant que l'image n'est pas fournie (jamais d'image cassée).
   Pour le remplacer : mettre une vraie photo à la place de ce composant. */
export default function ImagePlaceholder({ ratio = '4 / 3', icon = 'drill', label = 'Visuel à venir', hint, className = '' }) {
  return (
    <div className={`img-ph ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={hint || label}>
      <div className="text-center px-4">
        <span className="grid place-items-center w-14 h-14 rounded-2xl bg-white/70 border border-safe-magenta/20 mx-auto mb-3">
          <Icon name={icon} className="w-7 h-7" />
        </span>
        <span className="img-ph__label block">{label}</span>
        {hint && <span className="block text-slate text-[0.85rem] mt-1 normal-case tracking-normal font-sans">{hint}</span>}
      </div>
    </div>
  );
}
