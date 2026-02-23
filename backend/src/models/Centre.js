const mongoose = require('mongoose');

const centreSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  adresse: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  fraisLivraison: {
    baseFrais: {
      type: Number,
      default: 3000,
      min: 0
    },
    coutParKm: {
      type: Number,
      default: 2,
      min: 0
    },
    kmGratuits: {
      type: Number,
      default: 3,
      min: 0
    }
  },
  locataire: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true,
  collection: 'centres'
});

const Centre = mongoose.model('Centre', centreSchema);
module.exports = Centre;
