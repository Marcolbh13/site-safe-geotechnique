# À valider et à fournir — Site SAFE Géotechnique

Site **entièrement refait** à partir du contenu du site officiel
**safe-geotechnique.fr** (textes repris fidèlement), dans une version moderne et
premium. Ce document liste les points à confirmer et les éléments à fournir.

## Structure — calquée sur le site officiel (6 pages + utilitaires)

Mêmes pages que safe-geotechnique.fr : **Accueil**, **Sondage** (`/sondage`),
**Laboratoire** (`/laboratoire`), **Missions G1 à G5** (`/missions`),
**Loi ELAN** (`/loi-elan`), **Contact** (`/contact`) + **Mentions légales** et
page 404. Anciennes URLs redirigées (`/expertise`, `/missions-g1-a-g5`,
`/loi_elan`, `/nous-contacter`).

## Logo, partenaires et choix de design (à valider)

- **Logo vectoriel (SVG)** : recréé proprement (hexagone + molécule + wordmark),
  fond transparent, s'adaptant au fond clair/sombre. C'est une **reproduction**
  de l'esprit du logo SAFE, à **remplacer par le logo officiel vectoriel** dès
  qu'il sera fourni (composant unique `src/components/Logo.jsx`).
- **Profondeur EMCI 7.50 = 100 m** et **« unique objectif »** : repris **tels
  quels du site officiel** (ils contredisent les consignes initiales « 80 m » et
  « principal objectif » — à trancher).
- **Partenaires (liens sortants)** : Foretude → foretude-ingenierie.fr, FTCS →
  ftcs-forage.com (vérifiés). **STPA** et **SFTP** : pas d'URL dédiée vérifiée →
  renvoi provisoire vers le **Groupe RESUM** (resum.fr). À remplacer par leurs
  sites officiels si disponibles.
- **Couleurs** : suppression des fonds violet/sombre froids ; palette resserrée
  sur le magenta/fuchsia du logo + neutres clairs (fond clair dominant).
- **Carousel clients** (accueil) : noms affichés en **texte** (publics et privés).
  À confirmer : droit d'afficher chaque client + fourniture des **logos** pour
  remplacer le texte. Liste dans `src/data/site.js` (`CLIENTS`).
- **Emplacements d'images** (`ImagePlaceholder`, « Visuel à venir ») répartis sur
  les pages : à remplacer par de vraies photos SAFE (carottes, pressiomètre,
  piézomètre, essais labo, locaux, équipe). Aucune image cassée en attendant.
- **Missions G1 à G5** : explications reprises du site officiel et reformulées
  pour rester techniques mais accessibles (bloc « En clair » + détail + phases).

## Contenu repris du site officiel (fiable)

- **Accroche** : « Bureau d'études en géotechnique ».
- **Slogan** : « Garantir la sécurité de vos projets est notre unique objectif… »
- **Qualifications** : **AIPR, H0B0, SST** + sécurité des réseaux existants.
- **Sondage** : forage destructif/semi-destructif, carottage, essai
  pressiométrique, piézométrie (suivi saisonnier), recherche de cavités
  (microgravimétrie), prélèvements environnementaux, reconnaissance de fondations.
- **Laboratoire** : GTR, granulométrie, sédimentométrie, teneur en eau, VBS
  (bleu de méthylène), Atterberg, masse volumique, Proctor + IPI, cisaillement
  Casagrande, essais triaxiaux (UU, CU+u, CD).
- **Missions G1 à G5** (descriptions reprises).
- **Matériel** : ateliers EMCI 4.50 (40 m) et EMCI 7.50 (100 m), sondages
  pressiométriques/destructifs/carottés.
- **Partenaires** : Foretude (forage dirigé, +15 ans), FTCS Forage (forage
  dirigé et tarière, +20 ans).
- **Coordonnées** : 660 rue des Famards, 59273 Fretin · 03 20 60 12 67 ·
  contact@safe-geotechnique.fr.

## ⚠️ Points où j'ai suivi le site officiel (≠ consignes initiales)

- **« unique objectif »** : le site officiel écrit « notre unique objectif »
  (tu avais demandé « principal objectif »). → repris tel quel du site.
- **Profondeur EMCI 7.50 = 100 m** : le site officiel indique 100 m (tu avais
  dit 80 m). → repris tel quel du site.
  → **À confirmer si l'une de ces formulations doit être ajustée.**

## À confirmer

- **Routage du formulaire de devis** : la demande part vers `lebihan@resum.fr`
  (consigne interne), alors que l'e-mail public affiché est
  `contact@safe-geotechnique.fr`. Garder ce routage, ou tout envoyer vers
  contact@… ?
- **Recrutement** : pas de page recrutement (absente du site officiel). À
  réintroduire si besoin (l'adresse `v.lebihan@ftcs-forage.com` était prévue).
- **Loi ELAN** : sur le site officiel, les sections « Qui est concerné ? » et
  « Ce que dit la loi » étaient **vides**. Je les ai complétées avec un contenu
  réglementaire exact et prudent (loi du 23/11/2018, en vigueur 01/01/2020,
  étude G1 à la charge du vendeur en zone de retrait-gonflement des argiles,
  articles L.112-20 et s. du Code de la construction, validité 30 ans).
  → **Relecture juridique recommandée** avant usage contractuel.

## À fournir

- **Mentions légales** : raison sociale, forme juridique/capital, SIRET/RCS,
  TVA, directeur de la publication, hébergeur (champs entre crochets dans
  `src/pages/MentionsLegales.jsx`). L'adresse du siège est déjà renseignée.
- **Logo** vectoriel (SVG) ou PNG HD transparent + **favicon HD** (le logo
  actuel est un JPEG basse déf ; remplacement décrit dans le README,
  composant `Logo.jsx`).
- **Photos SAFE supplémentaires** : seuls des visuels réellement géotechniques
  sont utilisés (2 foreuses de sondage + 3 photos de laboratoire — cf.
  `CREDITS.md`). Idéalement : pressiomètre, piézomètre, carottes, équipes,
  locaux. (Les photos de forage dirigé / travaux spéciaux ont été écartées :
  ce n'est pas de la géotechnique.)
- **Nom de domaine / envoi serveur des formulaires** (cf. README).
