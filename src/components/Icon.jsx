// Icônes au trait (24x24, currentColor), sobres et cohérentes.
const PATHS = {
  drill: 'M7 2h6l-1 5H8L7 2Z M8 7h4v4H8z M10 11v9 M6 22h8 M14 9l4 2',
  core: 'M8 3h8v4H8z M8 7v13a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V7 M8 11h8 M8 15h8',
  flask: 'M9 2h6 M10 2v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V2 M7 15h10',
  gauge: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 12l4-3 M12 12a1.4 1.4 0 1 0 0 .01',
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M15.5 8.5l-2 5-5 2 2-5 5-2Z',
  layers: 'M12 2l9 5-9 5-9-5 9-5Z M3 12l9 5 9-5 M3 17l9 5 9-5',
  water: 'M12 2.5S5 10 5 15a7 7 0 0 0 14 0c0-5-7-12.5-7-12.5Z',
  shield: 'M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z M9 12l2 2 4-4',
  cavity: 'M3 7h18 M5 7v6a7 7 0 0 0 14 0V7 M9 13a3 3 0 0 0 6 0',
  building: 'M4 3h16v18H4z M9 7h2 M13 7h2 M9 11h2 M13 11h2 M9 15h2 M13 15h2 M10 21v-3h4v3',
  home: 'M3 11l9-7 9 7 M5 10v10h14V10 M10 20v-6h4v6',
  microscope: 'M6 21h12 M9 21a6 6 0 0 0 6-9 M10 6l4-3 2 3-4 3-2-3Z M8 9l4 6',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  doc: 'M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M14 2v5h5 M9 13h6 M9 17h6',
  map: 'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z M9 4v14 M15 6v14',
  mail: 'M3 5h18v14H3z M3 7l9 6 9-6',
  phone: 'M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 14l2 5v3a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1Z',
  pin: 'M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  check: 'M4 12l5 5L20 6',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  rock: 'M5 20l4-11 6-2 4 6-3 7H5Z M9 9l3 4 3-6',
};

export default function Icon({ name, className = '', ...rest }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {d.split(' M').map((seg, i) => (<path key={i} d={i === 0 ? seg : 'M' + seg} />))}
    </svg>
  );
}
