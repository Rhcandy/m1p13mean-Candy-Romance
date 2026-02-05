const mongoose = require('mongoose');
const Role = require('../models/Role');
require('dotenv').config();

async function initializeRoles() {
  try {
    // Connexion à MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connecté à MongoDB');

    // Rôles à créer
    const roles = [
      { nom: 'user' },
      { nom: 'admin_boutique' },
      { nom: 'admin_centre' },
      { nom: 'super_admin' }
    ];

    // Créer les rôles s'ils n'existent pas
    for (const roleData of roles) {
      const existingRole = await Role.findOne({ nom: roleData.nom });
      if (!existingRole) {
        const role = new Role(roleData);
        await role.save();
        console.log(`Rôle "${roleData.nom}" créé avec succès`);
      } else {
        console.log(`Rôle "${roleData.nom}" existe déjà`);
      }
    }

    console.log('Initialisation des rôles terminée');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des rôles:', error);
    process.exit(1);
  }
}

initializeRoles();
