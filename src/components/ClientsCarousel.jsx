import { CLIENTS } from '../data/site.js';

function Row({ items, reverse }) {
  // On double la liste pour un défilement continu et fluide.
  const doubled = [...items, ...items];
  return (
    <div className="marquee py-1.5">
      <ul className={`marquee__track list-none p-0 ${reverse ? 'marquee__track--rev' : ''}`}>
        {doubled.map((c, i) => (
          <li key={`${c}-${i}`} aria-hidden={i >= items.length ? 'true' : undefined}
            className="shrink-0 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-[0.95rem] font-semibold text-ink shadow-sfsm">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ClientsCarousel() {
  return (
    <div className="grid gap-3" aria-label="Nos clients publics et privés">
      <Row items={CLIENTS.publics} />
      <Row items={CLIENTS.prives} reverse />
    </div>
  );
}
