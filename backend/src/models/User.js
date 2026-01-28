const mongoose = require('mongoose');
const Role = require('./Role');

const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  prenom: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  }
}, {
  timestamps: true,
  collection: 'users'
});

const User = mongoose.model('User', userSchema);

module.exports = User;
