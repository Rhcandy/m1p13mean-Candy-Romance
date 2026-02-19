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
  }
}, {
  timestamps: true,
  collection: 'promotions'
});

// Validation pour s'assurer que dateFin est après dateDebut
promotionSchema.pre('save', function(next) {
  if (this.dateFin <= this.dateDebut) {
    next(new Error('La date de fin doit être postérieure à la date de début'));
  } else {
    next();
  }
});

const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;
