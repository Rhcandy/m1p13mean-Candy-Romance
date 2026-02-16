const mongoose = require('mongoose');

const produitAcheteSchema = new mongoose.Schema({
  produit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produit',
    required: true
  },
  qtt: {
    type: Number,
    required: true,
    min: 1
  },
  prixUnitaire: {
    type: Number,
    required: true,
    min: 0
  },
  sousTotal: {
    type: Number,
    required: true,
    min: 0
  }
}, { _id: false });

const panierSchema = new mongoose.Schema({
  // Référence au client
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Numéro de commande unique
  numeroCommande: {
    type: String,
    unique: true,
    required: true
  },
  
  // Liste des produits achetés
  produitsachete: [produitAcheteSchema],
  
  // Informations sur la commande
  qtt: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  
  // Montants
  sousTotal: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  
  // Statut du panier (actif ou non)
  isActive: {
    type: Boolean,
    default: true
  },
  
  fraisLivraison: {
    type: Number,
    default: 0,
    min: 0
  },
  
  total: {
    type: Number,
    required: true,
    min: 0
  },
  
  // Statuts
  statut: {
    type: String,
    enum: ['panier', 'en_attente', 'confirmee', 'preparation', 'expedie', 'livre', 'annule'],
    default: 'panier'
  },
  
  isPaye: {
    type: Boolean,
    default: false
  },
  
  islivre: {
    type: Boolean,
    default: false
  },
  
  // Dates importantes
  datePaiement: {
    type: Date
  },
  
  dateLivraison: {
    type: Date
  },
  
  dateAnnulation: {
    type: Date
  },
  
  // Adresse de livraison
  adresseLivraison: {
    rue: String,
    ville: String,
    codePostal: String,
    pays: { type: String, default: 'France' },
    telephone: String
  },
  
  // Méthode de paiement
  methodePaiement: {
    type: String,
    enum: ['carte', 'paypal', 'virement', 'espece'],
    default: 'carte'
  },
  
  // Notes du client
  notes: {
    type: String,
    maxlength: 500
  },
  
  // Suivi de livraison
  suiviColis: {
    transporteur: String,
    numeroSuivi: String,
    lienSuivi: String
  },
  
  // Expiration du panier
  expiresAt: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 heures par défaut
  }
}, {
  timestamps: true,
  collection: 'paniers'
});

// Index pour optimiser les requêtes
panierSchema.index({ userId: 1, statut: 1 });
panierSchema.index({ createdAt: -1 });
panierSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 }); // TTL index for automatic expiration

// Middleware pour générer le numéro de commande automatiquement
panierSchema.pre('save', async function() {
  if (this.isNew && !this.numeroCommande) {
    const count = await this.constructor.countDocuments();
    this.numeroCommande = `CMD-${Date.now()}-${String(count + 1).padStart(4, '0')}`;
  }
});

// Middleware pour calculer les totaux automatiquement
panierSchema.pre('save', function() {
  if (this.isModified('produitsachete')) {
    // Calculer le sous-total
    this.sousTotal = this.produitsachete.reduce((total, item) => {
      return total + (item.sousTotal || 0);
    }, 0);
    
    // Calculer le total final
    this.total = this.sousTotal + (this.fraisLivraison || 0);
    
    // Mettre à jour la quantité totale
    this.qtt = this.produitsachete.reduce((total, item) => {
      return total + item.qtt;
    }, 0);
  }
});

// Middleware pour libérer le stock lors de la suppression du panier
panierSchema.pre('deleteOne', { document: false, query: true }, async function(next) {
  try {
    const panier = await this.model.findOne(this.getFilter());
    
    if (panier && panier.produitsachete) {
      const Product = require('./Produit');
      
      // Libérer le stock pour chaque produit dans le panier
      for (const item of panier.produitsachete) {
        const produit = await Product.findById(item.produit);
        
        if (produit) {
          // Trouver la variante appropriée
          let variant;
          if (item.attributes && Object.keys(item.attributes).length > 0) {
            variant = produit.variant.find(v => {
              return Object.keys(item.attributes).every(key => 
                v.attributes.get(key) === item.attributes[key]
              );
            });
          } else {
            variant = produit.variant[0];
          }
          
          if (variant) {
            // Libérer le stock réservé
            variant.reserved = Math.max(0, variant.reserved - item.qtt);
            await produit.save();
          }
        }
      }
    }
    
    next();
  } catch (error) {
    next(error);
  }
});

// Middleware pour libérer le stock lors de l'expiration (TTL)
panierSchema.pre(['deleteMany', 'findOneAndDelete'], async function(next) {
  try {
    const panier = await this.model.findOne(this.getFilter());
    
    if (panier && panier.produitsachete) {
      const Product = require('./Produit');
      
      // Libérer le stock pour chaque produit dans le panier
      for (const item of panier.produitsachete) {
        const produit = await Product.findById(item.produit);
        
        if (produit) {
          // Trouver la variante appropriée
          let variant;
          if (item.attributes && Object.keys(item.attributes).length > 0) {
            variant = produit.variant.find(v => {
              return Object.keys(item.attributes).every(key => 
                v.attributes.get(key) === item.attributes[key]
              );
            });
          } else {
            variant = produit.variant[0];
          }
          
          if (variant) {
            // Libérer le stock réservé
            variant.reserved = Math.max(0, variant.reserved - item.qtt);
            await produit.save();
          }
        }
      }
    }
    
    next();
  } catch (error) {
    next(error);
  }
});

// Méthodes d'instance
panierSchema.methods.confirmerCommande = function() {
  if (this.statut === 'panier') {
    this.statut = 'en_attente';
    return this.save();
  }
  throw new Error('Impossible de confirmer une commande qui n\'est pas dans le panier');
};

panierSchema.methods.payerCommande = function() {
  if (!this.isPaye) {
    this.isPaye = true;
    this.datePaiement = new Date();
    this.statut = 'confirmee';
    return this.save();
  }
  throw new Error('Commande déjà payée');
};

panierSchema.methods.livrerCommande = function() {
  if (this.isPaye && !this.islivre) {
    this.islivre = true;
    this.dateLivraison = new Date();
    this.statut = 'livre';
    return this.save();
  }
  if (!this.isPaye) {
    throw new Error('Impossible de livrer une commande non payée');
  }
  throw new Error('Commande déjà livrée');
};

panierSchema.methods.annulerCommande = function(motif) {
  if (this.statut !== 'livre' && this.statut !== 'annule') {
    this.statut = 'annule';
    this.dateAnnulation = new Date();
    if (motif) {
      this.notes = motif;
    }
    return this.save();
  }
  throw new Error('Impossible d\'annuler cette commande');
};

// Méthodes statiques
panierSchema.statics.getCommandesByStatus = function(status) {
  return this.find({ statut: status })
    .populate('userId', 'nom email')
    .populate('produitsachete.produit', 'nom photo')
    .sort({ createdAt: -1 });
};

panierSchema.statics.getPanierActif = function(userId) {
  return this.findOne({ 
    userId, 
    statut: 'panier',
    isPaye: false 
  })
    .populate('produitsachete.produit', 'nom photo prix')
    .populate('userId', 'nom email');
};

panierSchema.statics.getChiffreAffaires = function(dateDebut, dateFin) {
  return this.aggregate([
    {
      $match: {
        isPaye: true,
        datePaiement: {
          $gte: dateDebut,
          $lte: dateFin
        }
      }
    },
    {
      $group: {
        _id: null,
        chiffreAffaires: { $sum: '$total' },
        nombreCommandes: { $sum: 1 },
        panierMoyen: { $avg: '$total' }
      }
    }
  ]);
};

const Panier = mongoose.model('Panier', panierSchema);
module.exports = Panier;
