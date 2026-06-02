# Crédits et licences des images

Ce fichier recense l'origine et le statut de chaque visuel utilisé sur le site.

## Principe appliqué

- **Aucune image stock externe n'a été téléchargée.** Tous les visuels du site
  proviennent des ressources fournies par SAFE / le groupe (RESUM · FTCS Forage).
- **Aucun logo tiers, aucune photo de concurrent.** Les marques d'équipement
  éventuellement visibles sur les photos (foreuses, pelles) sont incidentes au
  contexte de chantier et ne constituent pas un usage de logo tiers.

## Images sources et versions optimisées

Les images sont optimisées en WebP par `npm run optimize:images`
(script `scripts/optimize-images.mjs`), puis importées par l'application.

| Fichier site (`src/assets/images/`) | Source                                   | Origine / statut |
|--------------------------------------|------------------------------------------|------------------|
| `hero-foreuse.webp`                  | `_ressources_claude/machine-sondage-450-eoliennes.jpg` | Photo SAFE (foreuse 4.50) |
| `foreuse-camion-safe.webp`           | `_ressources_claude/machine-sondage-camion-safe.jpg`   | Photo SAFE (foreuse + fourgon SAFE) |
| `labo-proctor.webp`                  | `_ressources_claude/labo-moule-proctor.png`            | Photo laboratoire SAFE |
| `labo-presse.webp`                   | `_ressources_claude/labo-presse-essai.png`             | Photo laboratoire SAFE |
| `labo-echantillon.webp`              | `_ressources_claude/labo-echantillon-sol.png`          | Photo laboratoire SAFE |
| `chantier-nuit.webp`                 | Bureau : `IImage chantier .png`                        | Photo du groupe (chantier réseaux, nuit) |
| `forage-champ.webp`                  | Bureau : `IImage SFTP 3.jpeg`                          | Photo du groupe (atelier forage, champ + éoliennes) |
| `foreuse-vermeer.webp`               | Bureau : `IImage SFTP.png`                             | Photo du groupe (machine de forage) |
| `travaux-speciaux.webp`             | Bureau : `IImage Travaux spéciaux.jpeg`                | Photo du groupe (travaux spéciaux) |
| `logo-safe-geotechnique.jpeg`        | `_ressources_claude/logo-safe-geotechnique.jpeg`       | Logo SAFE (JPEG basse déf, à remplacer) |

Images écartées volontairement :
- `IImage Recrutement.jpeg/.png`, `Nous recrutons.png` : clipart générique
  « NOUS RECRUTONS » (qualité et droits incertains).

## À confirmer / à améliorer

- **Droits d'usage internes au groupe** : confirmer que les photos issues du
  poste (chantier nuit, forage champ, Vermeer, travaux spéciaux), qui montrent
  des moyens du groupe (RESUM / FTCS Forage), peuvent être publiées sous la
  marque SAFE Géotechnique.
- **Idéalement**, remplacer/compléter par des **photos spécifiques SAFE** :
  forage destructif/carottage, pose de piézomètre, essai triaxial, cisaillement
  à la boîte, panneaux solaires des locaux, portraits d'équipe.
- Si des visuels stock devaient être ajoutés ultérieurement, n'utiliser que des
  sources **libres de droits** (Unsplash, Pexels) et documenter ici source +
  licence + lien.
