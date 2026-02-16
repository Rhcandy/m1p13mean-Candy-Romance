const mongoose = require('mongoose');

const paiementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  libelle: {
    type: String,
    trim: true,
    default: null
  },
  montant: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });

const loyerSchema = new mongoose.Schema({
  boutiqueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boutique',
    required: true
  },

  periode: {              // MOIS CONCERNÉ
    type: String,         // ex: "2026-01"
    required: true
  },

  total: {                // montant calculé
    type: Number,
    required: true,
    min: 0
  },

  reste: {                // total - paiements
    type: Number,
    required: true,
    min: 0
  },

  statut: {
    type: String,
    enum: ['IMPAYE', 'PARTIEL', 'PAYE', 'RETARD'],
    default: 'IMPAYE'
  },

  dateEcheance: {         // ex: 5 du mois
    type: Date,
    required: true
  },

  paiements: [paiementSchema]

}, {
  timestamps: true,
  collection: 'loyers'
});

// éviter doublon boutique + période
loyerSchema.index({ boutiqueId: 1, periode: 1 }, { unique: true });

module.exports = mongoose.model('Loyer', loyerSchema);
