# Site vitrine — École du Vieux Château, Sarras

Site vitrine moderne, chaleureux et rassurant pour une école catholique privée (TPS → CM2, 3 classes), pensé pour générer des demandes d'inscription.

## Identité visuelle

- Palette douce : bleu profond apaisant, vert sauge, beige/sable, blanc cassé — définie en tokens sémantiques (aucune couleur codée en dur).
- Typographie : un serif élégant pour les titres, un sans-serif très lisible pour le texte.
- Angles arrondis doux, ombres légères, grandes photos plein cadre, beaucoup d'air.
- Photos générées sur mesure (enfants en activité, nature, vie de classe, cour d'école), cohérentes en style et lumière.

## Pages

1. **Accueil** (`/`) — bandeau photo plein écran avec le slogan « Grandir, apprendre et s'épanouir dans un environnement bienveillant. », présentation courte, bouton « Demander un rendez-vous », les 4 valeurs (Bienveillance, Respect, Confiance, Réussite de chaque enfant) et les chiffres clés (sous contrat avec l'État, TPS→CM2, 3 classes, structure familiale).
2. **Notre école** (`/notre-ecole`) — tutelle Saint-Joseph, contrat d'association, programmes de l'Éducation nationale, accompagnement personnalisé, respect et entraide.
3. **Les classes** (`/les-classes`) — 3 cartes photo : Maternelle (TPS, PS, MS, GS), Cycle 2 (CP, CE1), Cycle 3 (CE2, CM1, CM2), avec description pédagogique et environnement adapté.
4. **Vie scolaire** (`/vie-scolaire`) — garderie (7h30–8h20 / 16h00–18h30), restauration par prestataire, projets pédagogiques (sorties, sport, arts, partage inter-classes).
5. **Projet éducatif** (`/projet-educatif`) — accompagnement global, autonomie, responsabilité, coopération, respect, valeurs chrétiennes d'accueil et de solidarité, présentés en grille d'icônes.
6. **Galerie** (`/galerie`) — galerie filtrable par catégorie (Vie de l'école, Classes, Activités, Sorties scolaires, Fêtes et événements) avec vue agrandie au clic.
7. **Informations pratiques** (`/infos-pratiques`) — adresse 5 Place du Peycher, 07370 Sarras ; 04 75 23 15 87 ; 06 30 15 93 34 ; email ; horaires ; carte Google Maps intégrée ; formulaire de contact.
8. **Inscriptions** (`/inscriptions`) — étapes du processus d'inscription, formulaire de demande d'information, bouton « Prendre contact ».
9. **Mentions légales** (`/mentions-legales`) et **Politique de confidentialité** (`/politique-de-confidentialite`).

En-tête de navigation clair + pied de page avec coordonnées, sur toutes les pages. Pas de blog, pas d'actualités, pas d'espace parent.

## Formulaires

Les demandes de contact et d'inscription sont enregistrées dans Lovable Cloud (base de données intégrée) afin qu'aucune demande ne se perde, avec confirmation à l'écran. Validation stricte des champs côté client et côté serveur. L'école pourra consulter les demandes ; un envoi d'e-mail automatique pourra être ajouté ensuite si souhaité.

## Détails techniques

- TanStack Start, une route par page, `head()` dédié par page (titre, description, og/twitter) pour le SEO local.
- Données structurées JSON-LD `School` sur l'accueil (nom, adresse, téléphone, zone desservie Sarras / Ardèche).
- Tokens de design dans `src/styles.css` (`@theme inline`), composants shadcn adaptés.
- Images générées puis importées en assets, chargement différé hors du premier écran.
- Carte via iframe Google Maps (chargement différé), formulaires validés avec zod, table protégée par RLS (insertion publique, lecture réservée).
