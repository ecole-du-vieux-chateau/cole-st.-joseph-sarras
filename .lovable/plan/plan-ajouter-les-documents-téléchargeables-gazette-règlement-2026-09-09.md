# Plan : ajouter les documents téléchargeables (Gazette + règlement)

## Objectif
Ajouter sur la page **Informations pratiques** une section permettant de télécharger la Gazette de l'école et le règlement intérieur, via des liens publics Google Drive.

## Décisions validées
- Hébergement : liens Google Drive publics (à remplacer plus tard par les vrais liens utilisateur).
- Page cible : **Informations pratiques**.
- Documents : la Gazette + le règlement intérieur.
- Intitulés : proposés par l'agent, validés par l'utilisateur ensuite si besoin.

## Travail à réaliser

1. **Ajouter une section "Documents utiles"** sur `src/routes/infos-pratiques.tsx`, après les horaires/tarifs ou avant le bloc contact, avec un titre clair.

2. **Créer deux cartes de téléchargement** :
   - **Gazette de l'école** : icône journal/document, intitulé "Télécharger la Gazette", lien fictif `https://drive.google.com/file/d/FAKE_GAZETTE_ID/view`.
   - **Règlement intérieur** : icône règles/document officiel, intitulé "Télécharger le règlement intérieur", lien fictif `https://drive.google.com/file/d/FAKE_REGLEMENT_ID/view`.

3. **Comportement des liens** :
   - Ouvrir dans un nouvel onglet (`target="_blank"`, `rel="noopener noreferrer"`).
   - Utiliser un style cohérent avec les boutons/liens existants (couleurs sages, bordures douces, ombre légère).
   - Afficher une mention indiquant que les liens seront mis à jour avec les vrais documents Google Drive.

4. **Accessibilité / SEO** :
   - Texte des liens explicite.
   - Icônes décoratives avec `aria-hidden`.

5. **Vérification** :
   - `bun run build` passe.
   - Aperçu visuel de la page Informations pratiques sans erreur console.

## Après livraison
- L'utilisateur remplacera les deux liens fictifs par les vrais liens Google Drive publics.
