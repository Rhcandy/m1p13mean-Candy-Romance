const mongoose = require('mongoose');

const historiqueDeviseSchema = new mongoose.Schema({
  prix: {
    type: Number,
    required: true,
    min: 0
  },
  created: {
    type: Date,
    default: Date.now
  }
}, { _id: false });

const deviseSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  symbole: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  historique: [historiqueDeviseSchema]
}, {
  timestamps: true,
  collection: 'devises'
});

const Devise = mongoose.model('Devise', deviseSchema);
module.exports = Devise;
