const mongoose = require('mongoose');

const categorieProduitSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    trim: true
  }
}, {
  timestamps: true,
  collection: 'categoriesProduit'
});

const CategorieProduit = mongoose.model('CategorieProduit', categorieProduitSchema);
module.exports = CategorieProduit;
