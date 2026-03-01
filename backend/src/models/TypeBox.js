const mongoose = require('mongoose');

const typeBoxSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  // Compatibilite legacy: ancien champ utilise dans le projet.
  periode: {
    type: Number,
    min: 1,
    default: null
  },
  // Regle metier: nombre minimum de jours d'occupation.
  minOccupationDays: {
    type: Number,
    required: true,
    min: 1
  },
  description: {
    type: String,
    trim: true,
    default: null
  },
  remuneration: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
}, {
  timestamps: true,
  collection: 'typebox'
});

// Synchronise les deux champs pour eviter les regressions front/back.
typeBoxSchema.pre('validate', function syncPeriodeAndMinDays(next) {
  if (!this.minOccupationDays && this.periode) {
    this.minOccupationDays = this.periode;
  }

  if (!this.periode && this.minOccupationDays) {
    this.periode = this.minOccupationDays;
  }

  next();
});

const TypeBox = mongoose.model('TypeBox', typeBoxSchema);
module.exports = TypeBox;
