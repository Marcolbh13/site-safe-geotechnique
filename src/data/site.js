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
  { to: '/recrutement', label: 'Recrutement' },
];

export const QUALIFS = ['AIPR', 'H0B0', 'SST'];

// Équipe (photos à fournir). Ordre hiérarchique : direction puis affaires.
export const TEAM = [
  { name: 'Cyrille Le Bihan', role: 'Président', initials: 'CL' },
  { name: 'Jérôme Hochard', role: 'Directeur', initials: 'JH' },
  { name: 'Aurélie Moitel', role: "Chargée d'affaires", initials: 'AM' },
  { name: 'Thomas Znidarsic', role: "Ingénieur chargé d'études", initials: 'TZ' },
];

import foretudeLogo from '../assets/logos/foretude.svg';
import stpaLogo from '../assets/logos/stpa.webp';
import sftpLogo from '../assets/logos/sftp.webp';
import resumLogo from '../assets/logos/resum.svg';

// SAFE Géotechnique est l'entité « études géotechniques » du Groupe RESUM.
export const GROUP = { name: 'Groupe RESUM', url: 'https://www.resum.fr/', logo: resumLogo };

// SAFOR : entité juridique qui réunit SAFE Géotechnique et Foretude Ingénierie.
export const SAFOR = {
  name: 'SAFOR',
  d: "L'entité juridique qui réunit SAFE Géotechnique et Foretude Ingénierie, alliant la reconnaissance des sols et l'ingénierie du forage dirigé.",
};

// Partenaires / sociétés du groupe (liens sortants vers leurs sites officiels).
export const PARTNERS = [
  { nom: 'Foretude Ingénierie', d: "Bureau d'études spécialisé dans le forage dirigé et les travaux sans tranchée, depuis plus de 15 ans.", url: 'https://www.foretude-ingenierie.fr/', logo: foretudeLogo },
  { nom: 'FTCS Forage', d: 'Spécialiste du forage dirigé et de la tarière depuis plus de 20 ans, société mère du Groupe RESUM.', url: 'https://ftcs-forage.com/', logo: null },
  { nom: 'STPA Forage', d: 'Forage dirigé et tarière, travaux sans tranchée (Groupe RESUM).', url: 'https://www.stpa-forage.fr/', logo: stpaLogo },
  { nom: 'SFTP Forage', d: 'Sud Forages TP : forage horizontal dirigé et travaux sans tranchée (Groupe RESUM).', url: 'https://www.sftp-forage.com/', logo: sftpLogo },
];

// Missions géotechniques G1 à G5 (référentiel NF P94-500), reformulées pour
// rester techniques tout en étant comprises par des débutants.
export const MISSIONS = [
  {
    code: 'G1', t: 'Étude géotechnique préalable', phase: 'En amont du projet',
    charge: "Maître d'ouvrage",
    short: "Première reconnaissance des risques du sol, avant la conception.",
    plain: "Avant de dessiner le projet, on apprend à connaître le terrain et on repère les principaux risques liés au sol.",
    detail: "La mission G1 intervient très tôt, au stade des premières esquisses (étude préliminaire, esquisse ou APS, l'avant-projet sommaire). Elle pose le cadre géotechnique du site et reste volontairement générale : elle ne dimensionne pas encore les ouvrages.",
    steps: [
      { t: 'Étude de site (ES)', d: "Enquête documentaire sur le contexte géologique, visite du site et de ses abords, puis investigations sur le terrain si besoin. Résultat : un modèle géologique préliminaire et une première liste des risques majeurs." },
      { t: 'Principes généraux de construction (PGC)', d: "À partir de ces données, on esquisse les grands principes de construction envisageables (fondations, terrassements, ouvrages enterrés, améliorations de sol) et on situe la zone d'influence géotechnique, la ZIG." },
    ],
  },
  {
    code: 'G2', t: 'Étude géotechnique de conception', phase: 'Conception',
    charge: "Maître d'ouvrage ou son mandataire",
    short: "Conception détaillée des ouvrages en contact avec le sol.",
    plain: "On conçoit précisément les fondations, soutènements et terrassements, en même temps que la maîtrise d'œuvre affine le projet.",
    detail: "Réalisée avec la maîtrise d'œuvre, la mission G2 traduit le projet en ouvrages géotechniques concrets. Elle se déroule en trois temps qui suivent l'avancement du projet.",
    steps: [
      { t: 'Avant-projet (AVP)', d: "Premières hypothèses géotechniques, principes de construction (terrassements, soutènements, pentes et talus, fondations, dallages et voiries) et un premier ordre de grandeur des dimensions." },
      { t: 'Projet (PRO)', d: "Choix constructifs arrêtés, valeurs caractéristiques des sols, notes de calcul de dimensionnement et premières quantités." },
      { t: 'Consultation des entreprises (DCE / ACT)', d: "Rédaction des pièces techniques pour consulter les entreprises, puis aide au maître d'ouvrage pour analyser les offres et finaliser les contrats de travaux." },
    ],
  },
  {
    code: 'G3', t: "Étude et suivi géotechniques d'exécution", phase: 'Exécution',
    charge: "Entrepreneur (sauf disposition contraire)",
    short: "Détails d'exécution et surveillance pendant les travaux.",
    plain: "Sur le chantier, on met au point l'exécution des ouvrages et on surveille en continu pour corriger à temps.",
    detail: "Confiée à l'entrepreneur sur la base du dossier G2, la mission G3 réduit les risques qui subsistent une fois les travaux lancés. Elle comprend deux phases qui se nourrissent l'une l'autre.",
    steps: [
      { t: 'Phase étude', d: "Note d'hypothèses, calculs justificatifs, méthodes et conditions d'exécution (phasage, contrôles, valeurs seuils), puis dossier d'exécution (plans, phasage, suivi)." },
      { t: 'Phase suivi', d: "Suivi continu des auscultations et de l'exécution, vérification sur le terrain des données géotechniques, et application des dispositions prévues si nécessaire." },
    ],
  },
  {
    code: 'G4', t: "Supervision géotechnique d'exécution", phase: 'Exécution',
    charge: "Maître d'ouvrage ou son mandataire",
    short: "Regard indépendant qui vérifie la conformité aux hypothèses.",
    plain: "Un avis extérieur contrôle que ce qui est exécuté respecte bien les hypothèses géotechniques prévues.",
    detail: "Réalisée pour le compte du maître d'ouvrage, la mission G4 supervise le travail d'exécution (G3) sans s'y substituer. Elle se déroule en deux phases.",
    steps: [
      { t: "Supervision de l'étude d'exécution", d: "Avis sur la pertinence des hypothèses, des dimensionnements, des méthodes, du plan de contrôle, du programme d'auscultation et des valeurs seuils." },
      { t: 'Supervision du suivi d\'exécution', d: "Visites ponctuelles du chantier pour vérifier le comportement réel de l'ouvrage et de ses abords, et avis sur les documents de fin de chantier (DOE, DIUO)." },
    ],
  },
  {
    code: 'G5', t: 'Diagnostic géotechnique', phase: "Vie de l'ouvrage",
    charge: 'Mission ponctuelle',
    short: "Étude ciblée d'un point précis, sans reprendre tout le projet.",
    plain: "On étudie un élément précis (un soutènement, l'origine d'une fissure) de façon ciblée, à un moment donné.",
    detail: "Pendant un projet ou au cours de la vie d'un ouvrage, la mission G5 répond à une question géotechnique limitée et précise. Elle mesure l'influence de cet élément sur les risques identifiés, sans embrasser l'ensemble du projet. Si le diagnostic conduit à des travaux, les missions de conception, d'exécution et de supervision sont menées ensuite.",
    steps: [],
  },
];

// Clients publics et privés (affichés en texte ; logos à valider, cf. A-VALIDER).
export const CLIENTS = {
  publics: ['Ville de Lille', 'Ministère de la Justice', 'SDIS', 'CAPSO', 'Enedis', 'Engie', 'Port fluvial de Lille'],
  prives: ['Free', 'Axians', 'Natrans', 'NGE Fondations', 'Ingeo', 'IXI Groupe', 'HDF Construction', 'Action', 'Tenerno'],
};
