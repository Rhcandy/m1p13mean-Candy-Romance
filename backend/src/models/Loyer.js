const mongoose = require('mongoose');

const detailLoyerSchema = new mongoose.Schema({
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
  montantPaye: {
    type: Number,
    required: true,
    min: 0
  },
  restePaye: {
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
  details: [detailLoyerSchema]
}, {
  timestamps: true,
  collection: 'loyers'
});

const Loyer = mongoose.model('Loyer', loyerSchema);
module.exports = Loyer;
