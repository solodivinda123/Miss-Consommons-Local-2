# Miss Consommons Local — site statique

Site vitrine pour le concours **Miss Consommons Local** (Kinshasa, 24 communes, ambassadrices du consommer local).

## Fichiers

- `index.html` — page unique (sections : hero, mission, 24 communes, calendrier, organisation, partenaires, FAQ, contact)
- `css/styles.css` — thème (verts / or) et compléments au framework
- `js/main.js` — grille des 24 communes (photos locales via `COMMUNE_PHOTOS`, ex. `commune-gombe.png`, `commune-kasa-vubu.png`, `commune-kimbanseke.png`, `commune-kinshasa.png`, `commune-kintambo.png`, `commune-kisenso.png`, `commune-masina.png`, `commune-matete.png`, `commune-mont-ngafula.png`, `commune-ndjili.png`, `commune-ngaba.png`, `commune-selembao.png`), menu, formulaire de démo, année dans le pied de page
- `images/hero-slide-1.png`, `hero-slide-2.png`, `hero-slide-3.png` — carrousel d’accueil (sans voile CSS sur les photos ; classe `hero-mcl--photo-plain` dans `index.html`).
- `images/partenaire-1.png` — logo partenaire (Ministère de l’Agriculture RDC), section Partenaires.
- `images/partenaire-2.png` — logo RTNC (Radio-Télévision nationale congolaise), section Partenaires.
- `images/partenaire-3.png` — logo Ministère de la Jeunesse et Éveil Patriotique (RDC), section Partenaires.
- `images/partenaire-4.png` — logo Miss Ambassadrice Consommer Local Kinshasa 2026-2027, section Partenaires.
- `images/organisation-jury-president.png`, `organisation-jury-direction.png`, `organisation-jury-agricole.png` — portraits section Organisation & jury.
- Section « Les 24 communes » : image d’**agriculture** en fond via URL Pexels dans `css/styles.css` (`.section-ambassadrices__bg`) ; vous pouvez la remplacer par `url("../images/votre-photo.jpg")` si besoin.
- Section « Organisation & jury » : fond **or foncé** + même type d’image agriculture (`.section-organisation` dans `css/styles.css`).

## Ouvrir le site

- **Recommandé :** ouvrir le dossier dans VS Code / Cursor et utiliser **Live Server** (ou équivalent) pour servir les fichiers en `http://localhost` (évite certains blocages sur les scripts).
- Sinon : double-cliquer sur `index.html` (selon le navigateur, certaines fonctionnalités peuvent rester limitées).

## Placeholders à remplacer

- **Hero** : images locales dans `images/` ; organisation / grille communes : remplacer les placeholders Pexels par les photos officielles si besoin (`js/main.js` pour les cartes communes).
- **Icônes SVG** : symboles inline dans `index.html` — vous pouvez les échanger contre des exports Figma / SVG libres.
- **Date de la finale** : section Calendrier — texte « Date à confirmer ».
- **Partenaires** : blocs gris — logos réels.
- **Formulaire** : envoi simulé côté client ; brancher un backend ou un service mail pour la production.

## Technique

- HTML5, CSS3, JavaScript sans framework JS
- **Bootstrap 5.3** (CDN) — grille, composants, responsive
- Polices : **Playfair Display** + **Source Sans 3** (Google Fonts)
