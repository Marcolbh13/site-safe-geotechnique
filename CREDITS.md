# Crédits et licences des images

## Principe

- **Aucune image stock externe.** Tous les visuels proviennent des ressources
  fournies par SAFE.
- **Uniquement des visuels réellement géotechniques** (sondage + laboratoire).
  Les photos de forage dirigé / travaux spéciaux / réseaux ont été écartées :
  ce n'est pas l'activité de SAFE Géotechnique.

## Images utilisées (`src/assets/images/`)

Optimisées en WebP via `npm run optimize:images` (`scripts/optimize-images.mjs`).

| Fichier | Source | Sujet |
|---------|--------|-------|
| `hero-foreuse.webp` | `_ressources_claude/machine-sondage-450-eoliennes.jpg` | Atelier de sondage SAFE |
| `foreuse-camion-safe.webp` | `_ressources_claude/machine-sondage-camion-safe.jpg` | Foreuse + véhicule SAFE |
| `labo-proctor.webp` | `_ressources_claude/labo-moule-proctor.png` | Laboratoire — Proctor |
| `labo-presse.webp` | `_ressources_claude/labo-presse-essai.png` | Laboratoire — essai mécanique |
| `labo-echantillon.webp` | `_ressources_claude/labo-echantillon-sol.png` | Laboratoire — échantillon |
| `logo-safe-geotechnique.jpeg` | `_ressources_claude/logo-safe-geotechnique.jpeg` | Logo SAFE (JPEG basse déf, à remplacer) |

## Photos reprises du site officiel safe-geotechnique.fr (propriété SAFE)

Téléchargées depuis le site officiel de SAFE (leurs propres photos), optimisées
en WebP. Sources dans `_ressources_claude/site/`.

| Fichier (`src/assets/images/`) | Sujet |
|--------------------------------|-------|
| `atelier-450.webp`, `atelier-750.webp` | Ateliers de sondage EMCI 4.50 / 7.50 |
| `t-carottage.webp` | Carottage |
| `t-pressiometre.webp` | Essai pressiométrique |
| `t-piezo.webp` | Pose de piézomètre |
| `t-cavites.webp` | Recherche de cavités |
| `t-fondation.webp` | Reconnaissance de fondations |
| `e-gtr / e-granulo / e-sedimento / e-vbs / e-atterberg / e-proctor / e-cisaillement / e-volumique .webp` | Essais de laboratoire |
| `labo-triaxial.webp` | Cellule d'essai triaxial (IMG_5725) |

Écartées : vue satellite « background-mission-G1 » (cartographie) et `section1`.

## À améliorer

- Fournir davantage de **photos SAFE** (pressiomètre, piézomètre, carottes,
  équipes, locaux) pour enrichir le site sans recourir à du hors-sujet.
- Remplacer le logo par une version vectorielle / PNG HD (cf. README).
- Si des visuels stock devaient être ajoutés, n'utiliser que des sources
  **libres de droits** (Unsplash, Pexels) et les documenter ici.
