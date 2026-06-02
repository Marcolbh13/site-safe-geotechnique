// Données partagées du site SAFE Géotechnique.

export const EMAILS = {
  devis: 'lebihan@resum.fr',
  recrutement: 'v.lebihan@ftcs-forage.com',
};

// Navigation principale (l'accueil est accessible via le logo).
export const NAV = [
  { to: '/sondages', label: 'Sondages' },
  { to: '/laboratoire', label: 'Laboratoire' },
  { to: '/ingenierie', label: 'Ingénierie' },
  { to: '/references', label: 'Références' },
  { to: '/rse', label: 'RSE' },
  { to: '/recrutement', label: 'Recrutement' },
];

export const FOOTER_COLS = [
  {
    title: 'Métiers',
    links: [
      { to: '/sondages', label: 'Sondages' },
      { to: '/laboratoire', label: 'Laboratoire' },
      { to: '/ingenierie', label: 'Ingénierie géotechnique' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { to: '/references', label: 'Références' },
      { to: '/rse', label: 'RSE' },
      { to: '/recrutement', label: 'Recrutement' },
      { to: '/contact', label: 'Contact' },
    ],
  },
];
