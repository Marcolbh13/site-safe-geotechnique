// Bandeau d'en-tête des pages intérieures.
export default function PageHero({ kicker, title, intro }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-safe-soft">
      <div
        className="container-safe"
        style={{ paddingBlock: 'clamp(2.75rem,6vw,4.75rem)' }}
      >
        <p className="kicker mb-[0.9rem]">{kicker}</p>
        <h1>{title}</h1>
        {intro && <p className="lead mt-[1.1rem] max-w-[60ch]">{intro}</p>}
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: '-80px',
          right: '-60px',
          width: '280px',
          height: '280px',
          background:
            'radial-gradient(circle at 50% 50%, rgba(194,49,123,0.1), transparent 70%)',
        }}
      />
    </section>
  );
}
