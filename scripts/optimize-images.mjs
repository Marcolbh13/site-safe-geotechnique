// Optimisation des images sources -> WebP compressés dans src/assets/images.
// Lancé manuellement : `npm run optimize:images`.
// Les images sources (lourdes) restent hors du site ; seules les versions
// optimisées sont importées par l'application.
import sharp from 'sharp';
import { mkdirSync, existsSync, copyFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DESKTOP = resolve(ROOT, '..'); // /Users/.../Desktop
const RES = resolve(ROOT, '_ressources_claude');
const OUT = resolve(ROOT, 'src/assets/images');

mkdirSync(OUT, { recursive: true });

// { source absolue, nom de sortie (sans extension), largeur max }
// IMPORTANT : on ne garde QUE les visuels réellement géotechniques de SAFE
// (foreuses de sondage SAFE + laboratoire). Les photos de forage dirigé /
// travaux spéciaux / réseaux du groupe (FTCS, etc.) ne sont PAS de la
// géotechnique et ont été volontairement écartées.
const jobs = [
  { src: `${RES}/machine-sondage-450-eoliennes.jpg`, out: 'hero-foreuse', maxW: 1600 },
  { src: `${RES}/machine-sondage-camion-safe.jpg`, out: 'foreuse-camion-safe', maxW: 1500 },
  { src: `${RES}/labo-moule-proctor.png`, out: 'labo-proctor', maxW: 1200 },
  { src: `${RES}/labo-presse-essai.png`, out: 'labo-presse', maxW: 1200 },
  { src: `${RES}/labo-echantillon-sol.png`, out: 'labo-echantillon', maxW: 1200 },

  // Photos reprises du site officiel safe-geotechnique.fr (propriété SAFE).
  // Ateliers EMCI
  { src: `${RES}/site/atelier450.png`, out: 'atelier-450', maxW: 900 },
  { src: `${RES}/site/atelier750.png`, out: 'atelier-750', maxW: 900 },
  // Sondage — techniques
  { src: `${RES}/site/carottage.png`, out: 't-carottage', maxW: 900 },
  { src: `${RES}/site/sondage-pressiometrique.png`, out: 't-pressiometre', maxW: 900 },
  { src: `${RES}/site/piezo-1024x542.png`, out: 't-piezo', maxW: 900 },
  { src: `${RES}/site/cavites.png`, out: 't-cavites', maxW: 900 },
  { src: `${RES}/site/fondation-1024x542.png`, out: 't-fondation', maxW: 900 },
  // Laboratoire — essais
  { src: `${RES}/site/gtr.png`, out: 'e-gtr', maxW: 900 },
  { src: `${RES}/site/granulo.png`, out: 'e-granulo', maxW: 900 },
  { src: `${RES}/site/sedimentometrie.png`, out: 'e-sedimento', maxW: 900 },
  { src: `${RES}/site/vbs.png`, out: 'e-vbs', maxW: 900 },
  { src: `${RES}/site/atterberg-1024x553.png`, out: 'e-atterberg', maxW: 900 },
  { src: `${RES}/site/proctor.png`, out: 'e-proctor', maxW: 900 },
  { src: `${RES}/site/cisaillement.png`, out: 'e-cisaillement', maxW: 900 },
  { src: `${RES}/site/volumique-1024x542.png`, out: 'e-volumique', maxW: 900 },
  { src: `${RES}/site/IMG_5725-1-1024x757.jpg`, out: 'labo-triaxial', maxW: 1200 },
];

// référence muette pour éviter l'avertissement de variable inutilisée
void DESKTOP;

let ok = 0;
for (const job of jobs) {
  if (!existsSync(job.src)) {
    console.warn(`⚠ source absente, ignorée : ${job.src}`);
    continue;
  }
  const dest = `${OUT}/${job.out}.webp`;
  await sharp(job.src)
    .rotate()
    .resize({ width: job.maxW, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(dest);
  ok++;
  console.log(`✓ ${job.out}.webp`);
}

// Logo : copié tel quel (JPEG basse déf). À remplacer par une version HD/SVG.
const logoSrc = `${RES}/logo-safe-geotechnique.jpeg`;
const logoDest = `${OUT}/logo-safe-geotechnique.jpeg`;
if (existsSync(logoSrc)) {
  try {
    if (existsSync(logoDest)) rmSync(logoDest, { force: true });
    copyFileSync(logoSrc, logoDest);
    console.log('✓ logo-safe-geotechnique.jpeg (copié)');
  } catch (e) {
    console.warn(`⚠ logo non recopié (déjà présent ?) : ${e.code || e.message}`);
  }
}

console.log(`\nTerminé : ${ok} image(s) optimisée(s).`);
