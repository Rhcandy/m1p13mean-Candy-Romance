# Architecture du Système de Panier/Commande

## 📋 Vue d'ensemble

Le système de panier a été complètement refactorisé pour représenter un système de commande complet où un client peut avoir plusieurs commandes à différents stades.

## 🏗️ Architecture MVC

### **Models (Modèles)**
- **`Panier.js`** : Modèle de données principal représentant une commande
  - Gère les états : panier → en_attente → confirmee → preparation → expedie → livre
  - Inclut les informations de livraison, paiement, suivi
  - Numéro de commande unique automatique
  - Calculs automatiques des totaux

### **Services (Logique Métier)**
- **`panierService.js`** : Service contenant toute la logique métier
  - Gestion du panier actif
  - Création/Mise à jour des commandes
  - Calcul des totaux
  - Validation des transitions de statut
  - Statistiques et rapports

### **Controllers (Contrôleurs)**
- **`panierController.js`** : API client (utilisateurs connectés)
  - Gestion du panier personnel
  - Confirmation/paiement/annulation des commandes
  - Consultation des commandes personnelles
  
- **`adminPanierController.js`** : API administration
  - Gestion de toutes les commandes
  - Mise à jour des statuts
  - Statistiques globales
  - Export CSV

### **Routes (Routing)**
- **`panierRoutes.js`** : Routes client
- **`panierRoutes.new.js`** : Nouvelle structure des routes client
- **`adminPanierRoutes.js`** : Routes administration

## 🔄 Flux de Commande

### **1. Création du Panier**
```
POST /api/paniers/ajouter
→ Crée ou met à jour le panier actif (statut: "panier")
```

### **2. Confirmation de Commande**
```
POST /api/paniers/{id}/confirmer
→ Change le statut en "en_attente"
→ Ajoute adresse de livraison, méthode de paiement
```

### **3. Paiement**
```
POST /api/paniers/{id}/payer
→ Change le statut en "confirmee"
→ Enregistre la date de paiement
```

### **4. Préparation & Expédition (Admin)**
```
PUT /api/admin/paniers/{id}/statut
→ "confirmee" → "preparation" → "expedie" → "livre"
```

## 📊 Statuts Possibles

| Statut | Description | Accès |
|--------|-------------|-------|
| `panier` | Panier actif, modifiable | Client |
| `en_attente` | Commande confirmée, en attente de paiement | Client/Admin |
| `confirmee` | Commande payée, en préparation | Client/Admin |
| `preparation` | En cours de préparation | Admin |
| `expedie` | Expédiée, avec suivi | Admin |
| `livre` | Livrée au client | Client/Admin |
| `annule` | Commande annulée | Client/Admin |

## 🔧 API Endpoints

### **Client (Utilisateur Connecté)**

#### **Gestion du Panier**
- `POST /api/paniers/ajouter` - Ajouter des produits au panier
- `GET /api/paniers/mon-panier` - Voir le panier actif
- `PUT /api/paniers/{id}/quantite` - Modifier quantité d'un produit
- `DELETE /api/paniers/{id}` - Vider le panier

#### **Gestion des Commandes**
- `POST /api/paniers/{id}/confirmer` - Confirmer une commande
- `POST /api/paniers/{id}/payer` - Marquer comme payée
- `POST /api/paniers/{id}/annuler` - Annuler une commande
- `GET /api/paniers/mes-commandes` - Voir toutes mes commandes
- `GET /api/paniers/statistiques` - Statistiques personnelles

### **Administration**

#### **Gestion des Commandes**
- `GET /api/admin/paniers` - Liste toutes les commandes
- `GET /api/admin/paniers/{id}` - Détails d'une commande
- `PUT /api/admin/paniers/{id}/statut` - Mettre à jour statut
- `PUT /api/admin/paniers/{id}/suivi` - Ajouter suivi colis

#### **Statistiques & Export**
- `GET /api/admin/paniers/statistiques/globales` - Stats globales
- `GET /api/admin/paniers/export/csv` - Exporter commandes

## 📈 Fonctionnalités Avancées

### **Calculs Automatiques**
- Sous-total par produit (prix × quantité)
- Total de la commande (sous-total + frais de livraison)
- Quantité totale d'articles

### **Gestion des Stocks**
- Validation des quantités minimales
- Vérification de la disponibilité des produits

### **Suivi de Commande**
- Numéro de suivi unique
- Transporteur et lien de suivi
- Historique des changements de statut

### **Statistiques**
- Chiffre d'affaires par période
- Panier moyen
- Top produits vendus
- Répartition par statut

## 🔐 Sécurité

- **Authentification JWT** requise pour toutes les routes
- **Vérification d'appartenance** : un utilisateur ne peut voir que ses commandes
- **Rôles administratifs** pour les routes admin
- **Validation des transitions** de statut

## 📝 Notes d'Implémentation

### **Migration depuis l'ancien système**
1. Les anciens paniers sont conservés avec le statut "panier"
2. Les nouvelles commandes suivent le flux complet
3. Compatibilité maintenue avec les données existantes

### **Performance**
- Index sur `userId` et `statut` pour les requêtes rapides
- Index sur `numeroCommande` pour la recherche
- Agrégations optimisées pour les statistiques

### **Extensibilité**
- Ajout facile de nouveaux statuts
- Support multi-devises possible
- Intégration avec des services de paiement externes

## 🚀 Utilisation

### **Pour remplacer l'ancien système :**
1. Remplacer `panierController.js` par `panierController.new.js`
2. Remplacer `panierRoutes.js` par `panierRoutes.new.js`
3. Ajouter les routes admin dans le fichier principal des routes
4. Mettre à jour le frontend pour utiliser les nouveaux endpoints

### **Pour tester :**
```bash
# Ajouter au panier
POST /api/paniers/ajouter
{
  "produitsachete": [
    { "produit": "ID_PRODUIT", "qtt": 2 }
  ]
}

# Confirmer commande
POST /api/paniers/{ID_PANIER}/confirmer
{
  "adresseLivraison": { ... },
  "methodePaiement": "carte"
}
```

Cette architecture offre une gestion complète des commandes avec une séparation claire des responsabilités et une évolutivité optimale. 🎯
