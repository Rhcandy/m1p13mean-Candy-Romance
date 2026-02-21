const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  taux: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  categorie: {
    type: String,
    required: true,
    enum: ['boutique', 'acheteur','produit']
  },
  dateDebut: {
    type: Date,
    required: true
  },
  dateFin: {
    type: Date,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  produitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produit',
    default: null
  },
  boutiqueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boutique',
    default: null
  },
  acheteurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }
}, {
  timestamps: true,
  collection: 'promotions'
});
promotionSchema.pre('save', function () {
  if (this.dateFin <= this.dateDebut) {
    throw new Error('La date de fin doit être postérieure à la date de début');
  }
});

const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;
