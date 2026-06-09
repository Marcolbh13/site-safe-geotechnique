// Données partagées — contenu repris du site officiel safe-geotechnique.fr.

export const COMPANY = {
  name: 'SAFE Géotechnique',
  baseline: "Bureau d'études en géotechnique",
  email: 'contact@safe-geotechnique.fr',
  phone: '03 20 60 12 67',
  phoneHref: 'tel:+33320601267',
  address: '660 rue des Famards, 59273 Fretin',
  // Routage interne des demandes de devis (consigne client) :
  devisEmail: 'lebihan@resum.fr',
};

export const NAV = [
  { to: '/expertise', label: 'Expertise' },
  { to: '/loi-elan', label: 'Loi ELAN' },
];

export const QUALIFS = ['AIPR', 'H0B0', 'SST'];

export const MISSIONS = [
  { code: 'G1', t: 'Étude géotechnique préalable', d: "Première identification des risques géotechniques du site, en amont du projet (étude préliminaire, esquisse, APS)." },
  { code: 'G2', t: 'Étude géotechnique de conception', d: "Élaboration du projet des ouvrages géotechniques (phases AVP, PRO, DCE/ACT)." },
  { code: 'G3', t: "Étude et suivi géotechniques d'exécution", d: "Réduction des risques résiduels par des mesures correctives mises en œuvre à temps." },
  { code: 'G4', t: "Supervision géotechnique d'exécution", d: "Vérification de la conformité des hypothèses géotechniques retenues." },
  { code: 'G5', t: 'Diagnostic géotechnique', d: "Étude ponctuelle d'éléments géotechniques spécifiques, pendant le projet ou la vie de l'ouvrage." },
];
