const mongoose = require('mongoose');

const prixProduitSchema = new mongoose.Schema({
  prixUnitaire: {
    type: Number,
    required: true,
    min: 0
  },
  devise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Devise',
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
}, { _id: false });

const produitSchema = new mongoose.Schema({
  boutiqueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boutique',
    required: true
  },
  nom: {
    type: String,
    required: true,
    trim: true
  },
  categorie: {
    type: String,
    required: true,
    trim: true
  },
  qtt: {
    type: Number,
    required: true,
    min: 0
  },
  prix: [prixProduitSchema]
}, {
  timestamps: true,
  collection: 'produits'
});

const Produit = mongoose.model('Produit', produitSchema);
module.exports = Produit;
