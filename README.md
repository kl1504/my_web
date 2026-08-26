# Mini Projet

Petit site statique HTML / CSS / JavaScript avec pipeline CI/CD GitHub Actions vers GitHub Pages.

## Structure
- `index.html` — page principale
- `style.css` — styles
- `script.js` — interactivité (compteur de clics)
- `.github/workflows/deploy.yml` — pipeline : validation HTML, vérification des liens, déploiement sur GitHub Pages

## Déploiement
1. Pousse ce projet sur un dépôt GitHub.
2. Dans **Settings → Pages → Source**, choisis **GitHub Actions**.
3. À chaque push sur `main`, le site est vérifié puis déployé automatiquement.
