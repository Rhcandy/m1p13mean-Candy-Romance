# API Backend MEAN Stack - Gestion des Utilisateurs

## Structure du projet

```
backend/
├── src/
│   ├── controllers/       # Logique métier : traitement des requêtes
│   │   ├── authController.js
│   │   └── userController.js
│   │
│   ├── models/            # Schémas MongoDB (Mongoose)
│   │   ├── User.js
│   │   └── Role.js
│   │
│   ├── routes/            # Définition des routes API
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── middlewares/       # Middlewares (authentification, rôle, erreurs)
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── services/          # Services métier
│   │   ├── authService.js
│   │   └── userService.js
│   │
│   ├── scripts/           # Scripts d'initialisation
│   │   └── initRoles.js
│   │
│   └── app.js             # Configuration principale de l'application
├── .env                   # Variables d'environnement
├── package.json           # Dépendances du projet
└── README.md              # Documentation
```

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Configurer les variables d'environnement dans le fichier `.env` :
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/mean_db
JWT_SECRET=votre_secret_jwt
```

3. Initialiser les rôles dans la base de données :
```bash
npm run init-roles
```

4. Démarrer le serveur :
```bash
# Mode développement
npm run dev

# Mode production
npm start
```

## Documentation Swagger

🔥 **Nouveauté** : Documentation interactive disponible sur : `http://localhost:3000/api-docs`

La documentation Swagger vous permet de :
- Visualiser toutes les routes API
- Tester les endpoints directement depuis votre navigateur
- Voir les schémas de requêtes/réponses
- Gérer l'authentification JWT

### Comment utiliser Swagger pour tester l'API :

1. **Accéder à la documentation** : Ouvrez `http://localhost:3000/api-docs` dans votre navigateur

2. **S'authentifier** :
   - Développez la section "Authentification"
   - Cliquez sur `POST /api/auth/login`
   - Cliquez sur "Try it out"
   - Remplissez le formulaire avec email et password
   - Copiez le token retourné

3. **Utiliser le token** :
   - Cliquez sur le bouton "Authorize" en haut à droite
   - Collez le token dans le format : `Bearer votre_token`
   - Cliquez sur "Authorize"

4. **Tester les routes protégées** :
   - Vous pouvez maintenant tester toutes les routes qui nécessitent une authentification

## Routes API

### Authentification (`/api/auth`)

- `POST /api/auth/register` - Inscription d'un nouvel utilisateur
- `POST /api/auth/login` - Connexion d'un utilisateur
- `POST /api/auth/refresh-token` - Rafraîchir le token JWT
- `POST /api/auth/logout` - Déconnexion (protégé)

### Utilisateurs (`/api/users`)

- `POST /api/users` - Créer un utilisateur (publique)
- `GET /api/users/profile` - Obtenir son profil (protégé)
- `PUT /api/users/profile` - Mettre à jour son profil (protégé)
- `PUT /api/users/change-password` - Changer son mot de passe (protégé)
- `GET /api/users` - Lister tous les utilisateurs (admin/manager)
- `GET /api/users/:id` - Obtenir un utilisateur par ID (admin/manager)
- `PUT /api/users/:id` - Mettre à jour un utilisateur (admin)
- `DELETE /api/users/:id` - Supprimer un utilisateur (admin)

## Exemples de requêtes

### Inscription
```json
POST /api/auth/register
{
  "nom": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "roleName": "user"
}
```

### Connexion
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Réponse de connexion
```json
{
  "success": true,
  "message": "Connexion réussie",
  "data": {
    "user": {
      "id": "64a1b2c3d4e5f6789012345",
      "nom": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## Utilisation des tokens JWT

Pour accéder aux routes protégées, incluez le token dans l'en-tête Authorization :
```
Authorization: Bearer votre_token_jwt
```

## Rôles et permissions

- **admin** : Accès complet à toutes les routes
- **manager** : Accès en lecture aux utilisateurs, gestion limitée
- **user** : Accès uniquement à son profil

## Sécurité

- Les mots de passe sont hashés avec bcryptjs
- Tokens JWT avec expiration de 24h
- Validation des entrées et gestion des erreurs
- Protection contre les accès non autorisés

## Dépendances principales

- Express.js : Framework web
- Mongoose : ODM MongoDB
- bcryptjs : Hashage des mots de passe
- jsonwebtoken : Gestion des tokens JWT
- dotenv : Gestion des variables d'environnement
- cors : Gestion des CORS
- swagger-jsdoc & swagger-ui-express : Documentation API interactive

## Dépannage

### Problèmes courants

1. **Erreur de connexion MongoDB** : Vérifiez que MongoDB est en cours d'exécution et que l'URI dans `.env` est correct

2. **Token invalide** : Assurez-vous d'inclure "Bearer " avant le token dans l'en-tête Authorization

3. **Permissions refusées** : Vérifiez que vous avez le rôle approprié pour accéder à la route

4. **Rôles non trouvés** : Exécutez `npm run init-roles` pour créer les rôles par défaut
