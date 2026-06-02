# À valider et à fournir — Site SAFE Géotechnique

Le site a été finalisé en autonomie : les mentions « À VALIDER » visibles ont
été retirées et remplacées par des **formulations sûres**. Aucun fait faux,
aucune certification ni chiffre précis n'a été inventé. Ce document garde la
**trace des décisions prises** et des **points encore incertains** à confirmer.

---

## 1. Décisions rédactionnelles prises (formulations sûres)

- **Effectifs** : aucun chiffre. Formulation retenue « une équipe de
  spécialistes » / « équipe à taille humaine ».
- **Objectif** : « Notre **principal objectif** est de sécuriser vos projets… »
  (formulation demandée, retenue).
- **Laboratoire / normes** : « **protocole normalisé** », « **laboratoire** »,
  « **Valeur au bleu du sol (VBS)** ». Sur l'étalonnage : **non affirmé** →
  « nous suivons les normes en vigueur ».
- **Essais** : « essai triaxial » mis en avant (rare/coûteux), **distinct** du
  « cisaillement à la boîte (Casagrande) ».
- **Sondages** : forage destructif/semi-destructif, carottage, prélèvements,
  piézométrie (pose + suivi **manuel ET automatique**), recherche de cavités.
  Profondeurs **40 m (450)** et **80 m (750)** ; jamais 100 m.
- **Secteur géographique** (pied de page / contact) : « Hauts-de-France et
  régions limitrophes ». **Décision par défaut, à confirmer.**

## 2. Points à confirmer (sans incidence bloquante)

- **CIPR / SNTT** : mentionnés comme cadres de prévention liés au travail à
  proximité des réseaux et sur voies. **Intitulés exacts et périmètre à
  confirmer.**
- **Habilitations** : décrites sans liste détaillée. Fournir la liste précise
  (certifications, habilitations) si vous souhaitez l'afficher.
- **Logiciels d'ingénierie** : FoxTech, Carrara, Talren. Les courtes
  descriptions ajoutées (usage de chaque outil) sont des formulations générales
  **à vérifier** (notamment l'orthographe exacte de « FoxTech » / « Carrara »).
- **Loi Élan (page Ingénierie)** : texte basé sur la réglementation issue de la
  **loi Élan du 23 novembre 2018**, codifiée aux **articles L.112-20 et
  suivants du Code de la construction et de l'habitation**, en vigueur depuis le
  **1ᵉʳ janvier 2020**, étude géotechnique préalable (type G1) **à la charge du
  vendeur** d'un terrain non bâti constructible en zone d'exposition moyenne ou
  forte au **retrait-gonflement des argiles**, **valable 30 ans**. 
  → Sources publiques officielles (service-public, ministères). **Une relecture
  juridique finale est recommandée** avant usage contractuel ; le périmètre peut
  évoluer (texte rédigé prudemment en ce sens).

## 3. Contenus / coordonnées encore manquants

- **Téléphone** et **adresse postale** : non affichés (non fournis). À ajouter
  page Contact + pied de page (`src/data/site.js` pour centraliser si besoin).
- **Mentions légales** : page à rédiger (SIRET, forme juridique, hébergeur,
  directeur de publication). Lien présent dans le pied de page (cible à créer).
- **RSE** : la mention « panneaux solaires » est conservée **sans chiffres**
  (puissance, production). Paragraphes qualité/sécurité/environnement et
  indicateurs à fournir pour enrichir la page.
- **Références** : **aucun logo ni nom client publié** (droits non confirmés).
  Liste de travail conservée **en commentaire** dans `src/pages/References.jsx`.
  → Obtenir l'**autorisation écrite** de chaque client avant tout affichage ;
  documenter le chantier de référence **ENGIE à Calais**.

## 4. Ressources à fournir

- **Logo vectoriel (SVG) ou PNG HD transparent** + **favicon HD** (le logo
  actuel est un JPEG basse déf ; remplacement décrit dans le `README.md`).
- **Photos** : voir `CREDITS.md`. Idéalement, remplacer les photos « groupe »
  (chantier nuit, forage champ, Vermeer, travaux spéciaux) par des **photos
  spécifiques SAFE**, et confirmer leurs **droits d'usage internes au groupe**.
  Photos souhaitées : forage destructif/carottage, pose de piézomètre, essai
  triaxial, cisaillement à la boîte, panneaux solaires, équipe/locaux.

## 5. Mise en ligne

- **Nom de domaine** définitif (à renseigner dans les meta / `Seo.jsx` si URLs
  canoniques souhaitées).
- **Envoi des formulaires** : `mailto:` par défaut ; activer un service d'envoi
  réel pour transmettre le CV en pièce jointe (cf. `README.md`).
