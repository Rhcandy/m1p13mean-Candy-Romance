const mongoose = require('mongoose');

const typeBoxSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  periode: {
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

const TypeBox = mongoose.model('TypeBox', typeBoxSchema);
module.exports = TypeBox;
