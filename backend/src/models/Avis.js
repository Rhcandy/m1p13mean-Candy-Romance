const mongoose = require('mongoose');

const avisSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  produitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produit',
    required: true
  },
  note: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  commentaire: {
    type: String,
    trim: true,
    default: null
  }
}, {
  timestamps: true,
  collection: 'avis'
});

// Index pour éviter les avis en double
avisSchema.index({ userId: 1, produitId: 1 }, { unique: true });

const Avis = mongoose.model('Avis', avisSchema);
module.exports = Avis;
