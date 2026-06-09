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
  { to: '/sondage', label: 'Sondage' },
  { to: '/laboratoire', label: 'Laboratoire' },
  { to: '/missions', label: 'Missions G1 à G5' },
  { to: '/loi-elan', label: 'Loi ELAN' },
];

export const QUALIFS = ['AIPR', 'H0B0', 'SST'];

// SAFE Géotechnique est l'entité « études géotechniques » du Groupe RESUM.
export const GROUP = { name: 'Groupe RESUM', url: 'https://www.resum.fr/' };

// Partenaires / sociétés du groupe (liens sortants).
// STPA et SFTP : pas de site dédié vérifié -> renvoi vers le Groupe RESUM
// (à mettre à jour si une URL officielle est confirmée — cf. A-VALIDER.md).
export const PARTNERS = [
  { nom: 'Foretude Ingénierie', d: "Bureau d'études spécialisé dans le forage dirigé et les travaux sans tranchée, depuis plus de 15 ans.", url: 'https://www.foretude-ingenierie.fr/' },
  { nom: 'FTCS Forage', d: 'Spécialiste du forage dirigé et de la tarière depuis plus de 20 ans, société mère du Groupe RESUM.', url: 'https://ftcs-forage.com/' },
  { nom: 'STPA', d: 'Forage dirigé et tarière, société du Groupe RESUM.', url: 'https://www.resum.fr/' },
  { nom: 'SFTP', d: 'Société du Groupe RESUM au service des projets de travaux sans tranchée.', url: 'https://www.resum.fr/' },
];

export const MISSIONS = [
  {
    code: 'G1', t: 'Étude géotechnique préalable', phase: 'En amont du projet',
    short: "Première identification des risques géotechniques du site.",
    d: "Réalisée en amont (étude préliminaire, esquisse ou APS), elle comprend une phase d'Étude de Site (ES) et une phase Principes Généraux de Construction (PGC). Objectif : identifier les premiers risques géotechniques et réduire les conséquences des aléas majeurs avant la conception.",
  },
  {
    code: 'G2', t: 'Étude géotechnique de conception', phase: 'Conception',
    short: "Élaboration du projet des ouvrages géotechniques.",
    d: "Conduite en trois temps — avant-projet (AVP), projet (PRO) et phase DCE/ACT — elle précise les ouvrages géotechniques et réduit les risques importants. Elle est à la charge du maître d'ouvrage ou de son mandataire.",
  },
  {
    code: 'G3', t: "Étude et suivi géotechniques d'exécution", phase: 'Exécution',
    short: "Maîtrise des risques résiduels pendant les travaux.",
    d: "Pendant l'exécution, elle réduit les risques géotechniques résiduels par la mise en œuvre, à temps, de mesures correctives. Elle est confiée à l'entrepreneur, sauf disposition contractuelle contraire.",
  },
  {
    code: 'G4', t: "Supervision géotechnique d'exécution", phase: 'Exécution',
    short: "Vérification de la conformité des hypothèses.",
    d: "En phase travaux, elle vérifie la conformité aux hypothèses géotechniques retenues lors de la conception. Elle est à la charge du maître d'ouvrage ou de son mandataire.",
  },
  {
    code: 'G5', t: 'Diagnostic géotechnique', phase: "Vie de l'ouvrage",
    short: "Étude ponctuelle d'un élément spécifique.",
    d: "Elle étudie de manière ciblée un ou plusieurs éléments géotechniques spécifiques, pendant le déroulement d'un projet ou au cours de la vie d'un ouvrage, pour préciser leur influence sur les risques identifiés.",
  },
];
