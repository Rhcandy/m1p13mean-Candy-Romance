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



const prixProduitSchema = new mongoose.Schema({
  prixUnitaire: {
    type: Number,
    required: true,
    min: 1
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
  prix: [prixProduitSchema],
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  avis: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Avis'
  }]
}, {
  timestamps: true,
  collection: 'produits'
});

const Produit = mongoose.model('Produit', produitSchema);
module.exports = Produit;
