// Optimisation des images sources -> WebP compressés dans src/assets/images.
// Lancé manuellement : `npm run optimize:images`.
// Les images sources (lourdes) restent hors du site ; seules les versions
// optimisées sont importées par l'application.
import sharp from 'sharp';
import { mkdirSync, existsSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DESKTOP = resolve(ROOT, '..'); // /Users/.../Desktop
const RES = resolve(ROOT, '_ressources_claude');
const OUT = resolve(ROOT, 'src/assets/images');

mkdirSync(OUT, { recursive: true });

// { source absolue, nom de sortie (sans extension), largeur max }
const jobs = [
  // Ressources fournies par SAFE
  { src: `${RES}/machine-sondage-450-eoliennes.jpg`, out: 'hero-foreuse', maxW: 1600 },
  { src: `${RES}/machine-sondage-camion-safe.jpg`, out: 'foreuse-camion-safe', maxW: 1400 },
  { src: `${RES}/labo-moule-proctor.png`, out: 'labo-proctor', maxW: 1200 },
  { src: `${RES}/labo-presse-essai.png`, out: 'labo-presse', maxW: 1200 },
  { src: `${RES}/labo-echantillon-sol.png`, out: 'labo-echantillon', maxW: 1200 },
  // Photos du groupe (trouvées sur le poste de Marco)
  { src: `${DESKTOP}/IImage chantier .png`, out: 'chantier-nuit', maxW: 1800 },
  { src: `${DESKTOP}/IImage SFTP 3.jpeg`, out: 'forage-champ', maxW: 1800 },
  { src: `${DESKTOP}/IImage SFTP.png`, out: 'foreuse-vermeer', maxW: 1400 },
  { src: `${DESKTOP}/IImage Travaux spéciaux.jpeg`, out: 'travaux-speciaux', maxW: 1100 },
];

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
if (existsSync(logoSrc)) {
  copyFileSync(logoSrc, `${OUT}/logo-safe-geotechnique.jpeg`);
  console.log('✓ logo-safe-geotechnique.jpeg (copié)');
}

console.log(`\nTerminé : ${ok} image(s) optimisée(s).`);
