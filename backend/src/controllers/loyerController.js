const Loyer = require('../models/Loyer');
const Boutique = require('../models/Boutique');
const advancedResults = require('../middlewares/advancedResults');

exports.getAllLoyers = advancedResults(Loyer);

// @desc    Recuperer les resultats des loyers (middleware advancedResults)
// @route   GET /api/loyers
// @access  Private (admin centre / super admin)
exports.getLoyersResults = async (req, res) => {
  try {
    const populatedResults = await Loyer.populate(res.advancedResults.items, [
      { path: 'boutiqueId', select: 'nom isActive isPendingFirstActivation contratlocation' }
    ]);

    res.status(200).json({
      success: true,
      message: 'Loyers recuperes avec succes',
      items: populatedResults,
      pagination: res.advancedResults.pagination
    });
  } catch (error) {
    console.error('Erreur recuperation loyers:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

// @desc    Recuperer tous les loyers sans pagination
// @route   GET /api/loyers/all
// @access  Private (admin centre / super admin)
exports.getAllLoyersSimple = async (req, res) => {
  try {
    const loyers = await Loyer.find()
      .populate('boutiqueId', 'nom isActive isPendingFirstActivation contratlocation')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Loyers recuperes avec succes',
      data: loyers
    });
  } catch (error) {
    console.error('Erreur recuperation loyers:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

// @desc    Recuperer un loyer par ID
// @route   GET /api/loyers/:id
// @access  Private (admin centre / super admin)
exports.getLoyerById = async (req, res) => {
  try {
    const loyer = await Loyer.findById(req.params.id).populate(
      'boutiqueId',
      'nom isActive isPendingFirstActivation contratlocation'
    );

    if (!loyer) {
      return res.status(404).json({
        success: false,
        message: 'Loyer non trouve'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Loyer recupere avec succes',
      data: loyer
    });
  } catch (error) {
    console.error('Erreur recuperation loyer:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

// @desc    Creer un loyer
// @route   POST /api/loyers
// @access  Private (admin centre / super admin)
exports.createLoyer = async (req, res) => {
  try {
    const { boutiqueId, details } = req.body;

    if (!boutiqueId) {
      return res.status(400).json({
        success: false,
        message: 'Le champ boutiqueId est obligatoire'
      });
    }

    const boutique = await Boutique.findById(boutiqueId).select('_id');
    if (!boutique) {
      return res.status(404).json({
        success: false,
        message: 'Boutique non trouvee'
      });
    }

    const existingLoyer = await Loyer.findOne({ boutiqueId }).select('_id');
    if (existingLoyer) {
      return res.status(400).json({
        success: false,
        message: 'Un loyer existe deja pour cette boutique'
      });
    }

    const loyer = await Loyer.create({
      boutiqueId,
      details: Array.isArray(details) ? details : []
    });

    const populated = await Loyer.findById(loyer._id).populate(
      'boutiqueId',
      'nom isActive isPendingFirstActivation contratlocation'
    );

    res.status(201).json({
      success: true,
      message: 'Loyer cree avec succes',
      data: populated
    });
  } catch (error) {
    console.error('Erreur creation loyer:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

// @desc    Mettre a jour un loyer
// @route   PUT /api/loyers/:id
// @access  Private (admin centre / super admin)
exports.updateLoyer = async (req, res) => {
  try {
    const { boutiqueId, details } = req.body;

    const existingLoyer = await Loyer.findById(req.params.id);
    if (!existingLoyer) {
      return res.status(404).json({
        success: false,
        message: 'Loyer non trouve'
      });
    }

    if (boutiqueId) {
      const boutique = await Boutique.findById(boutiqueId).select('_id');
      if (!boutique) {
        return res.status(404).json({
          success: false,
          message: 'Boutique non trouvee'
        });
      }

      const duplicate = await Loyer.findOne({
        boutiqueId,
        _id: { $ne: req.params.id }
      }).select('_id');

      if (duplicate) {
        return res.status(400).json({
          success: false,
          message: 'Un autre loyer existe deja pour cette boutique'
        });
      }
    }

    const payload = {};
    if (boutiqueId !== undefined) payload.boutiqueId = boutiqueId;
    if (details !== undefined) payload.details = Array.isArray(details) ? details : [];

    const updated = await Loyer.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true
    }).populate('boutiqueId', 'nom isActive isPendingFirstActivation contratlocation');

    res.status(200).json({
      success: true,
      message: 'Loyer mis a jour avec succes',
      data: updated
    });
  } catch (error) {
    console.error('Erreur mise a jour loyer:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

// @desc    Supprimer un loyer
// @route   DELETE /api/loyers/:id
// @access  Private (admin centre / super admin)
exports.deleteLoyer = async (req, res) => {
  try {
    const loyer = await Loyer.findById(req.params.id).select('_id');

    if (!loyer) {
      return res.status(404).json({
        success: false,
        message: 'Loyer non trouve'
      });
    }

    await Loyer.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Loyer supprime avec succes'
    });
  } catch (error) {
    console.error('Erreur suppression loyer:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
