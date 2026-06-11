import Reveal from './Reveal.jsx';
import Decor from './Decor.jsx';

// En-tête de page clair et premium (label mono + titre + intro), motif strates.
// Image optionnelle : mise en page 2 colonnes (texte + visuel).
export default function PageHero({ label, title, intro, children, image, imageAlt = '' }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-safe-soft">
      <div className="absolute inset-0 strata opacity-50" aria-hidden="true" />
      <Decor />
      <div
        className={
          'container-safe relative z-10 ' +
          (image ? 'grid lg:grid-cols-[1.1fr_0.9fr] gap-[clamp(1.5rem,4vw,3rem)] items-center' : '')
        }
        style={{ paddingBlock: 'clamp(2.5rem,6vw,4.25rem)' }}
      >
        <Reveal>
          <p className="label mb-4">{label}</p>
          <h1 className="max-w-[20ch]">{title}</h1>
          {intro && <p className="lead mt-5 max-w-[60ch]">{intro}</p>}
          {children}
        </Reveal>
        {image && (
          <Reveal delay={120} className="hidden lg:block">
            <figure className="rounded-xl2 overflow-hidden shadow-sfmd border border-line ml-auto max-w-[460px]">
              <img src={image} alt={imageAlt} className="w-full object-cover aspect-[4/3]" loading="eager" />
            </figure>
          </Reveal>
        )}
      </div>
    </section>
  );
}
