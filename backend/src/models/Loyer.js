const mongoose = require('mongoose');

const paiementSchema = new mongoose.Schema(
  {
    reference: {
      type: String,
      required: true,
      trim: true
    },
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
    },
    modePaiement: {
      type: String,
      trim: true,
      default: 'virement'
    },
    datePaiement: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const loyerSchema = new mongoose.Schema(
  {
    boutiqueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Boutique',
      required: true
    },

    // Format: YYYY-MM
    periode: {
      type: String,
      required: true
    },

    dateDebutPeriode: {
      type: Date,
      required: true
    },

    dateFinPeriode: {
      type: Date,
      required: true
    },

    // Nombre de jours reellement factures dans la periode.
    joursFactures: {
      type: Number,
      required: true,
      min: 0
    },

    // Base pour 7 jours de location.
    baseHebdo: {
      type: Number,
      required: true,
      min: 0
    },

    total: {
      type: Number,
      required: true,
      min: 0
    },

    reste: {
      type: Number,
      required: true,
      min: 0
    },

    statut: {
      type: String,
      enum: ['IMPAYE', 'PARTIEL', 'PAYE', 'RETARD'],
      default: 'IMPAYE'
    },

    // Facture du mois M payable dans la 1ere semaine de M+1.
    dateEcheance: {
      type: Date,
      required: true
    },

    // Aide front pour expliquer pourquoi aucun pre-paiement supplementaire n'est autorise.
    isLockedByContractEnd: {
      type: Boolean,
      default: false
    },

    paiements: [paiementSchema],

    commentaire: {
      type: String,
      trim: true,
      default: null
    }
  },
  {
    timestamps: true,
    collection: 'loyers'
  }
);

// Eviter doublon boutique + periode.
loyerSchema.index({ boutiqueId: 1, periode: 1 }, { unique: true });

module.exports = mongoose.model('Loyer', loyerSchema);
