import Reveal from './Reveal.jsx';

// En-tête de page clair et premium (label mono + titre + intro), motif strates.
export default function PageHero({ label, title, intro, children }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-safe-soft">
      <div className="absolute inset-0 strata opacity-50" aria-hidden="true" />
      <div className="container-safe relative" style={{ paddingBlock: 'clamp(2.5rem,6vw,4.25rem)' }}>
        <Reveal>
          <p className="label mb-4">{label}</p>
          <h1 className="max-w-[20ch]">{title}</h1>
          {intro && <p className="lead mt-5 max-w-[60ch]">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
