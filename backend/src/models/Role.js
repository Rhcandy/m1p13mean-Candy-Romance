const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
}, {
  timestamps: true,
  collection: 'roles'
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;