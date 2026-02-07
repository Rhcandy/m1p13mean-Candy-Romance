const mongoose = require('mongoose');

const contratLocationSchema = new mongoose.Schema({
  boxes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Box'
  }],
  dateDebutLocation: {
    type: Date,
    required: true
  },
  dateFinLocation: {
    type: Date,
    required: true
  },
  jLocation: {
    lundi: {
      type: Boolean,
      default: true
    },
    mardi: {
      type: Boolean,
      default: true
    },
    mercredi: {
      type: Boolean,
      default: true
    },
    jeudi: {
      type: Boolean,
      default: true
    },
    vendredi: {
      type: Boolean,
      default: true
    },
    samedi: {
      type: Boolean,
      default: true
    },
    dimanche: {
      type: Boolean,
      default: true
    }
  }
}, { _id: false });

const boutiqueSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  logo: {
    type: String,
    default: null
  },
  typepayement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TypePayement',
    required: true
  },
  promotions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Promotion'
  }],
  locataire: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  contratlocation: contratLocationSchema
}, {
  timestamps: true,
  collection: 'boutiques'
});

// Validation pour s'assurer que dateFinLocation est après dateDebutLocation
boutiqueSchema.pre('save', function(next) {
  if (this.contratlocation && this.contratlocation.dateFinLocation <= this.contratlocation.dateDebutLocation) {
    next(new Error('La date de fin de location doit être postérieure à la date de début'));
  } else {
    next();
  }
});

const Boutique = mongoose.model('Boutique', boutiqueSchema);
module.exports = Boutique;
