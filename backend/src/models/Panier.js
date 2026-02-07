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
  }
}, { _id: false });

const panierSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  produitsachete: [produitAcheteSchema],
  qtt: {
    type: Number,
    required: true,
    min: 0
  },
  total: {
    type: Number,
    required: true,
    min: 0
  },
  isPaye: {
    type: Boolean,
    default: false
  },
  islivre: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  collection: 'paniers'
});

const Panier = mongoose.model('Panier', panierSchema);
module.exports = Panier;
