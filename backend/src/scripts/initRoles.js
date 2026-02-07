const mongoose = require('mongoose');
const Role = require('../models/Role');
const Centre = require('../models/Centre');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
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

    // Créer le centre "Royal City" s'il n'existe pas
    const existingCentre = await Centre.findOne({ nom: 'Royal City' });
    if (!existingCentre) {
      const centre = new Centre({
        nom: 'Royal City',
        adresse: {
          type: 'Point',
          coordinates: [-18.952783162227885, 47.528457818843464]
        },
        proprietaire: []
      });
      await centre.save();
      console.log('Centre "Royal City" créé avec succès');
    } else {
      console.log('Centre "Royal City" existe déjà');
    }

    // Créer l'utilisateur admincenter s'il n'existe pas
    const existingUser = await User.findOne({ email: 'admincenter@gmail.com' });
    if (!existingUser) {
      const adminCentreRole = await Role.findOne({ nom: 'admin_centre' });
      const royalCityCentre = await Centre.findOne({ nom: 'Royal City' });
      
      if (adminCentreRole && royalCityCentre) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admincenter1234', salt);
        
        const user = new User({
          nom: 'admincenter',
          email: 'admincenter@gmail.com',
          password: hashedPassword,
          pdppath: null,
          role: adminCentreRole._id
        });
        
        await user.save();
        
        // Ajouter l'utilisateur comme propriétaire du centre
        royalCityCentre.proprietaire.push(user._id);
        await royalCityCentre.save();
        
        console.log('Utilisateur "admincenter" créé avec succès et associé au centre Royal City');
      }
    } else {
      console.log('Utilisateur "admincenter" existe déjà');
    }

    console.log('Initialisation terminée');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation:', error);
    process.exit(1);
  }
}

initializeRoles();
