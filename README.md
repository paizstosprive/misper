# Permis B Belgique

Plateforme Node.js/Express/EJS pour l'entrainement au permis theorique B belge, avec paywall Stripe, deux series gratuites fixes, examen type premium, historique utilisateur, back-office admin et compatibilite SQLite en developpement / PostgreSQL en production.

## Stack

- Node.js
- Express.js
- EJS
- Sequelize
- SQLite3 en developpement
- PostgreSQL en production
- express-session + connect-session-sequelize
- bcrypt
- csurf
- helmet
- Stripe Checkout + webhook

## Fonctionnalites

- Authentification avec hash du mot de passe et session securisee
- Dashboard utilisateur
- 2 series gratuites fixes de 15 questions toujours disponibles
- Examen type premium de 50 questions aleatoires
- Series premium par chapitre avec toutes les questions du chapitre
- Historique des tentatives
- Abonnements Stripe `0,99 EUR / 3 jours` et `5 EUR / 1 mois`
- Activation automatique via webhook Stripe
- Back-office admin pour questions, utilisateurs, paiements et statistiques
- Seed de 180 questions originales avec prompts d'images

## Installation locale

1. Installer Node.js 20+ et npm.
2. Copier `.env.example` vers `.env`.
3. Renseigner au minimum :

```env
NODE_ENV=development
PORT=3000
APP_URL=http://localhost:3000
SESSION_SECRET=change_this_secret
DB_STORAGE=database.sqlite
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
STRIPE_PRICE_3_DAYS=price_xxx
STRIPE_PRICE_1_MONTH=price_xxx
FREE_SERIES_LIMIT=2
```

4. Installer les dependances :

```bash
npm install
```

5. Executer migrations et seeds :

```bash
npm run db:migrate
npm run db:seed
```

6. Demarrer le serveur :

```bash
npm run dev
```

Application disponible sur `http://localhost:3000`.

## Production PostgreSQL

Configurer :

```env
NODE_ENV=production
APP_URL=https://votre-domaine.com
DB_NAME=permis_theorique
DB_USER=postgres
DB_PASSWORD=motdepasse
DB_HOST=127.0.0.1
DB_PORT=5432
DB_SSL=false
SESSION_SECRET=secret_fort
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
STRIPE_PRICE_3_DAYS=price_xxx
STRIPE_PRICE_1_MONTH=price_xxx
```

Puis :

```bash
npm install --omit=dev
npm run db:migrate
npm run db:seed
npm start
```

## Stripe

1. Creer deux prix dans Stripe Checkout :
   - `pass5days` a `0,99 EUR / 3 jours`
   - `pass1month` a `5,00 EUR`
2. Reporter leurs `price_...` dans `.env` avec `STRIPE_PRICE_3_DAYS` et `STRIPE_PRICE_1_MONTH`.
3. Configurer le webhook Stripe vers :

```text
POST /webhooks/stripe
```

4. Ecouter au moins l'evenement :

```text
checkout.session.completed
```

En local avec Stripe CLI :

```bash
stripe listen --forward-to localhost:3000/webhooks/stripe
```

## Comptes de demonstration

- Admin : `admin@example.com` / `admin123`
- User : `user@example.com` / `user1234`

## Structure

```text
app.js
config/
controllers/
middlewares/
migrations/
models/
public/
routes/
seeders/
services/
utils/
views/
.env.example
image-prompts-nano-banana.md
README.md
```

## Regles metier implementees

- Le visiteur voit l'accueil, les chapitres et les tarifs sans connexion.
- Le quiz exige une connexion.
- Les 2 series gratuites fixes restent accessibles avec ou sans abonnement.
- Sans abonnement actif, l'utilisateur ne peut pas lancer l'examen type ni les series completes par chapitre.
- L'abonnement actif est synchronise automatiquement a chaque requete.
- Si la date d'expiration est depassee, l'acces premium est coupe.

## Images

- Les chemins d'images suivent `/public/images/img1.png` jusqu'a `img180.png`.
- Des placeholders JPEG minimaux sont fournis pour eviter les liens casses.
- Remplacez-les avec les images generees depuis `image-prompts-nano-banana.md`.

## Securite

- `helmet`
- `csurf`
- Validation serveur avec `express-validator`
- Mots de passe hashes avec `bcrypt`
- Cookies de session `httpOnly`, `sameSite=lax`, `secure` en production

## Idees d'amelioration

- Ajout d'un vrai stockage d'images admin
- Tableau de suivi plus detaille par chapitre
- Emails transactionnels apres paiement
- Tests automatises
- Internationalisation FR/NL
- Gestion d'abonnements recurrents
