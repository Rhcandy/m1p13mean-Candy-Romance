const TypeBox = require('../models/TypeBox');
const Box = require('../models/Box');
const advancedResults = require('../middlewares/advancedResults');

exports.createTypeBox = async (req, res) => {
  try {
    const { nom, minOccupationDays, periode, description, remuneration } = req.body;
    const minDays = Number(minOccupationDays || periode);

    if (!nom || !minDays || remuneration === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Veuillez fournir nom, minOccupationDays et remuneration'
      });
    }

    const existing = await TypeBox.findOne({ nom }).select('_id');
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'Un type de box avec ce nom existe deja'
      });
    }

    const typeBox = await TypeBox.create({
      nom,
      minOccupationDays: minDays,
      periode: minDays,
      description: description || null,
      remuneration: Number(remuneration)
    });

    return res.status(201).json({
      success: true,
      message: 'Type de box cree avec succes',
      data: typeBox
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getAllTypeBoxes = advancedResults(TypeBox);

exports.getTypeBoxesResults = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: 'Types de box recuperes avec succes',
      ...res.advancedResults
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getAllTypeBoxesSimple = async (_req, res) => {
  try {
    const typeBoxes = await TypeBox.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: 'Types de box recuperes avec succes',
      data: typeBoxes
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getTypeBoxById = async (req, res) => {
  try {
    const typeBox = await TypeBox.findById(req.params.id);
    if (!typeBox) {
      return res.status(404).json({ success: false, message: 'Type de box non trouve' });
    }
    return res.status(200).json({
      success: true,
      message: 'Type de box recupere avec succes',
      data: typeBox
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.updateTypeBox = async (req, res) => {
  try {
    const { nom, minOccupationDays, periode, description, remuneration } = req.body;
    const minDays = minOccupationDays !== undefined || periode !== undefined
      ? Number(minOccupationDays || periode)
      : undefined;

    const current = await TypeBox.findById(req.params.id);
    if (!current) {
      return res.status(404).json({ success: false, message: 'Type de box non trouve' });
    }

    if (nom && nom !== current.nom) {
      const existing = await TypeBox.findOne({ nom }).select('_id');
      if (existing) {
        return res.status(400).json({
          success: false,
          message: 'Un type de box avec ce nom existe deja'
        });
      }
    }

    const payload = {};
    if (nom !== undefined) payload.nom = nom;
    if (minDays !== undefined) {
      payload.minOccupationDays = minDays;
      payload.periode = minDays;
    }
    if (description !== undefined) payload.description = description;
    if (remuneration !== undefined) payload.remuneration = Number(remuneration);

    const updated = await TypeBox.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true
    });

    return res.status(200).json({
      success: true,
      message: 'Type de box mis a jour avec succes',
      data: updated
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.deleteTypeBox = async (req, res) => {
  try {
    const typeBox = await TypeBox.findById(req.params.id);
    if (!typeBox) {
      return res.status(404).json({ success: false, message: 'Type de box non trouve' });
    }

    const used = await Box.findOne({ typeBoxId: req.params.id }).select('_id');
    if (used) {
      return res.status(400).json({
        success: false,
        message: 'Impossible de supprimer: ce type est utilise par une box'
      });
    }

    await TypeBox.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: 'Type de box supprime avec succes'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
