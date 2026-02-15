const mongoose = require('mongoose');

const variantSchema  = new mongoose.Schema({
  attributes: {
    type: Map,
    of: String
    // ex:
    // { taille: "M", couleur: "Rouge" }
    // { couleur: "Noir" }
  },
  qtt: {
    type: Number,
    required: true,
    min: 1
  }
}, { 
  _id: false,
  timestamps: true 
});

const stockSchema = new mongoose.Schema({
  qtt: {
    type: Number,
    required: true,
    min: 0
  },
  created: {
    type: Date,
    default: Date.now
  }
}, { _id: false });

const prixProduitSchema = new mongoose.Schema({
  prixUnitaire: {
    type: Number,
    required: true,
    min: 1
  },
  devise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Devise',
    required: true
  }
}, { 
  _id: false,
  timestamps: true 
});

const produitSchema = new mongoose.Schema({
  boutiqueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boutique',
    required: true
  },
  categorieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CategorieProduit',
    required: true
  },
  nom: {
    type: String,
    required: true,
    trim: true
  },
  photo: {
    type: String,
    default: null
  },
  description: {
    type: String,
    trim: true
  },
  variant: [variantSchema],
  Stock: [stockSchema],
  prix: [prixProduitSchema]
}, {
  timestamps: true,
  collection: 'produits'
});

const Produit = mongoose.model('Produit', produitSchema);
module.exports = Produit;
