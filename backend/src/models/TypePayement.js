const mongoose = require('mongoose');

const typePayementSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  detail: {
    type: String,
    trim: true,
    default: null
  }
}, {
  timestamps: true,
  collection: 'typepayement'
});

const TypePayement = mongoose.model('TypePayement', typePayementSchema);
module.exports = TypePayement;
