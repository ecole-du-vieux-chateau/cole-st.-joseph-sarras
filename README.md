# Site de l'École du Vieux Château

Site vitrine de l'École du Vieux Château à Sarras (Ardèche), construit avec React, TanStack Start, TanStack Router, Vite et Tailwind CSS.

## Prise en main

Prérequis : Node.js et npm.

```sh
npm install
npm run dev
```

Le site est alors disponible à l'adresse indiquée par Vite, généralement `http://localhost:5173`.

Commandes disponibles :

```sh
npm run dev          # serveur de développement
npm run build        # build de production
npm run build:dev    # build en mode développement
npm run preview      # prévisualisation du build
npm run lint         # vérification ESLint
npm run format       # formatage Prettier
```

## Organisation du code

- `src/routes/` : une page par fichier, avec routage basé sur les fichiers.
- `src/components/` : composants partagés, notamment l'en-tête, le pied de page et le hero.
- `src/components/ui/` : composants d'interface réutilisables.
- `src/assets/` : photos et logos référencés par les pages.
- `src/lib/site.ts` : coordonnées de l'école et liens de navigation communs.
- `src/routeTree.gen.ts` : fichier généré automatiquement, ne pas modifier manuellement.
- `src/server.ts` : entrée serveur et gestion des erreurs SSR.
- `vite.config.ts` : configuration Vite/TanStack Start.

## Pages

Les routes principales sont :

- `/` : accueil
- `/notre-ecole` : présentation de l'école
- `/les-classes` : classes et niveaux
- `/vie-scolaire` : garderie, cantine et projets
- `/projet-educatif` : projet éducatif et pastoral
- `/galerie` : galerie photos
- `/infos-pratiques` : coordonnées et accès
- `/inscriptions` : demandes d'inscription
- `/mentions-legales` : mentions légales
- `/politique-de-confidentialite` : politique de confidentialité

## Modifier le contenu

- Coordonnées générales, téléphone et navigation : `src/lib/site.ts`.
- Textes et liens d'une page : fichier correspondant dans `src/routes/`.
- Photos : ajouter ou remplacer les assets dans `src/assets/`, puis mettre à jour l'import de la page concernée.
- Galerie : modifier les entrées de galerie dans `src/routes/galerie.tsx`.
- En-tête et pied de page : `src/components/site-header.tsx` et `src/components/site-footer.tsx`.

Après une modification, lancer au minimum `npm run lint` et `npm run build`.

## Adresses de contact

Ces adresses sont utilisées dans `src/routes/vie-scolaire.tsx` :

- Enseignement et absences : `ecoleduvieuxchateau.sarras@gmail.com`
- École / OGEC : `adm.ogecduvieuxchateau007@gmail.com`
- Cantine : `cantine.ecoleduvieuxchateau@gmail.com`
- Facturation : `ogec.sarras.comptabilite@gmail.com`
- Événements / APEL : `apel.sarras@gmail.com`

Si une adresse change, mettre à jour à la fois le lien `mailto:` et le texte affiché.

## Déploiement et collaboration

Conserver un historique Git propre. Éviter de réécrire l'historique déjà publié : pas de force push, rebase, amend ou squash de commits publiés.

Avant un commit :

```sh
npm run lint
npm run build
git status
git diff
```

Ne pas versionner de secrets ni de fichiers `.env`.
