# Site vitrine — SAFE Géotechnique

Site internet vitrine de **SAFE Géotechnique** (sondages, laboratoire,
ingénierie). Site multi-pages, en français, pensé pour un rendu premium et une
mise en ligne simple.

## Stack

- **[Vite](https://vitejs.dev/) + [React](https://react.dev/) 18** — application
  rapide, structure standard et largement supportée.
- **[React Router](https://reactrouter.com/)** — navigation multi-pages côté
  client (une route par page).
- **[Tailwind CSS](https://tailwindcss.com/)** — charte couleurs de SAFE
  centralisée dans `tailwind.config.js`, styles premium dans `src/index.css`.
- **[sharp](https://sharp.pixelplumbing.com/)** (outil de build uniquement) —
  optimisation des photos en WebP.

> Stack volontairement **simple et standard**, sans dépendance exotique, pour
> être facilement **recréée / importée dans Bolt.new** (voir plus bas).

## Prérequis

- [Node.js](https://nodejs.org/) **18 ou supérieur** (testé avec Node 22).
- npm.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Site servi sur **http://localhost:5173** avec rechargement à chaud.

## Build de production

```bash
npm run build      # génère le dossier dist/
npm run preview    # prévisualise le build localement
```

## Optimisation des images

Les photos lourdes (ressources fournies + photos du groupe) sont converties en
WebP optimisés dans `src/assets/images/` :

```bash
npm run optimize:images
```

Le script `scripts/optimize-images.mjs` lit les sources (dans
`_ressources_claude/` et sur le Bureau) et écrit les versions optimisées déjà
présentes dans le dépôt. **Inutile de le relancer** sauf si vous remplacez des
photos sources. Voir `CREDITS.md` pour l'origine de chaque image.

## Structure du projet

```
index.html              Point d'entrée HTML (polices, favicon, meta)
vite.config.js          Configuration Vite
tailwind.config.js      Charte SAFE (couleurs, ombres, dégradés, polices)
postcss.config.js       Tailwind + autoprefixer
scripts/
  optimize-images.mjs   Génération des WebP optimisés
src/
  main.jsx              Montage React + Router
  App.jsx               Définition des routes (pages)
  index.css             Base + composants (boutons, cartes, formulaires…)
  data/site.js          Navigation, e-mails de contact (source unique)
  assets/images/        Images optimisées (WebP) + logo
  components/
    Logo.jsx            ← POINT UNIQUE DE RÉGLAGE DU LOGO
    Header.jsx          En-tête + navigation (menu mobile)
    Footer.jsx          Pied de page
    Layout.jsx          Gabarit (header + footer + remontée en haut de page)
    Seo.jsx             Titre + meta description par page
    Icon.jsx            Icônes au trait (SVG)
    PageHero.jsx        Bandeau d'en-tête des pages intérieures
    CtaBand.jsx         Bandeau d'appel à l'action réutilisable
  pages/
    Home.jsx        Accueil
    Expertise.jsx   Sondages + Laboratoire + Ingénierie (ancres #sondages…)
    APropos.jsx     Qui sommes-nous (métier, valeurs, RSE, références)
    Recrutement.jsx Recrutement (formulaire)
    Contact.jsx     Contact / devis (formulaire)
    NotFound.jsx    Page 404
public/
  favicon.svg           Favicon provisoire (à remplacer, cf. A-VALIDER.md)
  _redirects            Réécriture SPA (hébergement type Netlify)
```

## Remplacer le logo (important)

Le logo fourni (`logo-safe-geotechnique.jpeg`) est un **JPEG basse définition
sur fond blanc**, isolé dans un seul composant pour être remplacé facilement par
une version vectorielle ou un PNG HD transparent.

1. Déposer le nouveau fichier dans `src/assets/images/` (idéalement `.svg` ou
   PNG HD transparent).
2. Dans **`src/components/Logo.jsx`**, modifier l'import `logoSrc`.
3. Si le logo est transparent, passer la constante `IS_JPEG` à `false` pour
   retirer le cartouche blanc.

Penser aussi à remplacer `public/favicon.svg`.

## Formulaires (Contact et Recrutement)

Les deux formulaires fonctionnent **sans serveur**, via `mailto:` : à la
validation, le logiciel de messagerie s'ouvre, pré-rempli, vers la bonne
adresse.

- **Devis (page Contact)** → `lebihan@resum.fr`
- **Recrutement (page Recrutement)** → `v.lebihan@ftcs-forage.com`

Les adresses sont centralisées dans **`src/data/site.js`** (objet `EMAILS`).

### Activer un envoi réel (avec pièce jointe)

`mailto:` ne peut pas joindre le fichier CV automatiquement. Pour un envoi
serveur (transmission directe, pièce jointe, accusé de réception), brancher un
service de formulaires, par exemple **Formspree** :

1. Créer un formulaire sur [formspree.io](https://formspree.io/) → URL
   `https://formspree.io/f/XXXXXXX`.
2. Dans `Contact.jsx` / `Recrutement.jsx`, remplacer le handler `onSubmit`
   (qui compose le `mailto:`) par un envoi `fetch(url, { method: 'POST', body:
   new FormData(form) })`, ou poser `action`/`method` sur le `<form>` et retirer
   le `e.preventDefault()`.
3. Pour la pièce jointe, conserver le champ `<input type="file" name="cv">`.

Alternatives : **Netlify Forms** (si hébergé sur Netlify) ou un back-end maison.

## Déploiement

`dist/` est un site statique. Le routage étant côté client, configurer une
**réécriture SPA** vers `index.html` (le fichier `public/_redirects` la fournit
pour Netlify). Sur un hébergement classique (Apache), ajouter une règle
équivalente (`.htaccess`).

- **Netlify / Vercel** : build `npm run build`, dossier publié `dist`.
- **Hébergement FTP** : téléverser le contenu de `dist/` + règle de réécriture.

## Portage vers Bolt.new

La stack (Vite + React + Tailwind + React Router) correspond au gabarit standard
de Bolt.new. Pour recréer le projet :

1. Démarrer un projet **Vite + React** dans Bolt.new et y ajouter **Tailwind**
   et **react-router-dom**.
2. Recopier `src/`, `index.html`, `tailwind.config.js`, `postcss.config.js`,
   `vite.config.js` et le dossier `public/`.
3. Importer les images optimisées de `src/assets/images/` (déjà légères).
   Le script `scripts/optimize-images.mjs` n'est **pas nécessaire** au runtime.

## Accessibilité et performance

- Langue `fr`, titres hiérarchisés, lien d'évitement, focus visible, navigation
  clavier, libellés de formulaires associés, `aria-current` sur l'onglet actif.
- Respect de `prefers-reduced-motion`.
- Images WebP optimisées (47–211 ko), `loading="lazy"` hors hero, JS raisonnable.

## À compléter / valider

Voir **`A-VALIDER.md`** (contenus et ressources à confirmer) et **`CREDITS.md`**
(origine et statut des images).
