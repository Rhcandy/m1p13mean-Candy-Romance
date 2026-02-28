const mongoose = require('mongoose');

const HistoPrixCategSchema = new mongoose.Schema({
  prixParM2: {
    type: Number,
    required: true,
    min: 0
  },
  typeboxId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TypeBox',
    required: true
  }
}, {
  timestamps: true,
  collection: 'histo_prix_categ'
});

const HistoPrixCateg = mongoose.models.HistoPrixCateg || mongoose.model('HistoPrixCateg', HistoPrixCategSchema);
module.exports = HistoPrixCateg;
