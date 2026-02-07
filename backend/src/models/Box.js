const mongoose = require('mongoose');

const boxSchema = new mongoose.Schema({
  Superficie: {
    type: Number,
    required: true,
    min: 0
  },
  typeBoxId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TypeBox',
    required: true
  },
  etage: {
    type: String,
    required: true,
    trim: true
  },
  numRef: {
    type: String,
    required: true,
    trim: true
  },
  centreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Centre',
    required: true
  },
  isDisponible: {
    type: Boolean,
    default: true
  },
  coordonnees: {
    type: {
      type: String,
      enum: ['Polygon'],
      required: true
    },
    coordinates: {
      type: [[[Number]]], // Array of arrays of arrays of numbers for Polygon
      required: true
    }
  }
}, {
  timestamps: true,
  collection: 'boxes'
});

// Index géospatial pour les requêtes de localisation
boxSchema.index({ coordonnees: '2dsphere' });

const Box = mongoose.model('Box', boxSchema);
module.exports = Box;
