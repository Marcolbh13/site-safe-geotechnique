import Reveal from './Reveal.jsx';

// Bandeau pleine largeur : photo + filtre rosé (charte SAFE), texte à gauche.
// Filtre dégradé : assez dense à gauche pour la lisibilité, légèrement rosé à droite.
export default function PhotoBand({
  image,
  alt,
  label,
  title,
  children,
  height = 'clamp(300px,42vw,480px)',
}) {
  return (
    <section className="relative">
      <div className="relative overflow-hidden" style={{ height }}>
        <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(110,35,80,.82) 0%, rgba(141,42,99,.55) 46%, rgba(192,48,123,.30) 100%)' }}
        />
        <div className="container-safe relative h-full flex items-center">
          <Reveal className="max-w-[580px] text-white">
            {label && <p className="label on-dark mb-3">{label}</p>}
            {title && <h2 className="text-white text-[clamp(1.5rem,3vw,2.1rem)]">{title}</h2>}
            {children && <div className="mt-4 text-white/90 text-[1.06rem]">{children}</div>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
