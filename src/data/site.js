// Données partagées du site SAFE Géotechnique.

export const EMAILS = {
  // E-mail public officiel (affiché)
  contact: 'contact@safe-geotechnique.fr',
  // Routage des formulaires (consignes internes)
  devis: 'lebihan@resum.fr',
  recrutement: 'v.lebihan@ftcs-forage.com',
};

export const PHONE = '03 20 60 12 67';
export const PHONE_HREF = 'tel:+33320601267';

// Navigation principale (accueil via le logo, contact via le bouton).
export const NAV = [
  { to: '/expertise', label: 'Expertise' },
  { to: '/loi-elan', label: 'Loi Élan' },
  { to: '/a-propos', label: 'Qui sommes-nous' },
  { to: '/recrutement', label: 'Recrutement' },
];

export const FOOTER_COLS = [
  {
    title: 'Expertise',
    links: [
      { to: '/expertise#sondages', label: 'Sondages' },
      { to: '/expertise#laboratoire', label: 'Laboratoire' },
      { to: '/expertise#missions', label: 'Missions G1 à G5' },
      { to: '/loi-elan', label: 'Loi Élan' },
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
