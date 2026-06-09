// Données partagées du site SAFE Géotechnique.

export const EMAILS = {
  devis: 'lebihan@resum.fr',
  recrutement: 'v.lebihan@ftcs-forage.com',
};

// Navigation principale (l'accueil est accessible via le logo,
// le contact via le bouton « Demander un devis »).
export const NAV = [
  { to: '/expertise', label: 'Expertise' },
  { to: '/a-propos', label: 'Qui sommes-nous' },
  { to: '/recrutement', label: 'Recrutement' },
];

export const FOOTER_COLS = [
  {
    title: 'Expertise',
    links: [
      { to: '/expertise#sondages', label: 'Sondages' },
      { to: '/expertise#laboratoire', label: 'Laboratoire' },
      { to: '/expertise#ingenierie', label: 'Ingénierie géotechnique' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { to: '/a-propos', label: 'Qui sommes-nous' },
      { to: '/recrutement', label: 'Recrutement' },
      { to: '/contact', label: 'Contact' },
    ],
  },
];
