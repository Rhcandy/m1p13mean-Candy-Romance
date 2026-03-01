const mongoose = require('mongoose');

const HistoPrixCategSchema = new mongoose.Schema({
  typeboxId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TypeBox',
    required: true
  },
  prixParM2: {
    type: Number,
    required: true,
    min: 0
  },
  // Legacy: conserve pour compatibilite ancienne data, non utilisee dans la logique metier.
  dateDebut: {
    type: Date,
    default: Date.now
  },
  // Legacy: non utilisee dans la logique metier courante.
  dateFin: {
    type: Date,
    default: null
  }
}, {
  timestamps: true,
  collection: 'histo_prix_categ'
});

HistoPrixCategSchema.index({ typeboxId: 1, createdAt: -1 });

const HistoPrixCateg = mongoose.models.HistoPrixCateg || mongoose.model('HistoPrixCateg', HistoPrixCategSchema);
module.exports = HistoPrixCateg;
