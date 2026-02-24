const mongoose = require('mongoose');
const Role = require('./Role');

const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true
  },
  pdppath: {
    type: String,
    default: null
  },
  sexe: {
    type: String,
    default: null
  },
  numtel: {
    type: [String],
    default: null,
    trim: true,
  },
  dtnaissance: {
    type: Date,
    default: null
  },
  adresse: {
    nomEndroit: {
      type: String,
      trim: true,
      default: null
    },
    longitude: {
      type: Number,
      default: null
    },
    latitude: {
      type: Number,
      default: null
    }
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  coderesetpwd: {
    code: {
      type: Number,
      default: null
    },
    expiresAt: {
      type: Date,
      default: null
    }
  },
  favoris: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produit'
  }],
  promotions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Promotion'
  }]
}, {
  timestamps: true,
  collection: 'users'
});

const User = mongoose.model('User', userSchema);

module.exports = User;
