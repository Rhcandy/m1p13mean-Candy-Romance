const Box = require('../models/Box');
const TypeBox = require('../models/TypeBox');
const Boutique = require('../models/Boutique');
const advancedResults = require('../middlewares/advancedResults');
const { addDefaultCentre } = require('../helpers/centreHelper');

exports.createBox = [
  addDefaultCentre,
  async (req, res) => {
    try {
      const { Superficie, typeBoxId, etage, numRef, centreId, isDisponible } = req.body;

      if (!Superficie || !typeBoxId || !etage || !numRef || !centreId) {
        return res.status(400).json({
          success: false,
          message: 'Champs obligatoires: Superficie, typeBoxId, etage, numRef, centreId'
        });
      }

      const typeBox = await TypeBox.findById(typeBoxId).select('_id');
      if (!typeBox) {
        return res.status(400).json({ success: false, message: 'Type de box non trouve' });
      }

      const existingBox = await Box.findOne({ numRef, centreId }).select('_id');
      if (existingBox) {
        return res.status(400).json({
          success: false,
          message: 'Une box avec cette reference existe deja dans ce centre'
        });
      }

      const box = await Box.create({
        Superficie: Number(Superficie),
        typeBoxId,
        etage,
        numRef,
        centreId,
        isDisponible: isDisponible !== undefined ? !!isDisponible : true
      });

      const populated = await Box.findById(box._id)
        .populate('typeBoxId', 'nom periode minOccupationDays remuneration')
        .populate('centreId', 'nom adresse');

      return res.status(201).json({
        success: true,
        message: 'Box creee avec succes',
        data: populated
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Erreur serveur',
        error: error.message
      });
    }
  }
];

exports.getAllBoxes = advancedResults(Box);

exports.getBoxesResults = async (req, res) => {
  try {
    const populatedResults = await Box.populate(res.advancedResults.items, [
      { path: 'typeBoxId', select: 'nom periode minOccupationDays remuneration' },
      { path: 'centreId', select: 'nom adresse' }
    ]);

    return res.status(200).json({
      success: true,
      message: 'Boxes recuperees avec succes',
      items: populatedResults,
      pagination: res.advancedResults.pagination
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getAllBoxesSimple = async (_req, res) => {
  try {
    const boxes = await Box.find()
      .populate('typeBoxId', 'nom periode minOccupationDays remuneration')
      .populate('centreId', 'nom adresse')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: 'Boxes recuperees avec succes',
      data: boxes
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getBoxById = async (req, res) => {
  try {
    const box = await Box.findById(req.params.id)
      .populate('typeBoxId', 'nom periode minOccupationDays remuneration description')
      .populate('centreId', 'nom adresse');

    if (!box) {
      return res.status(404).json({ success: false, message: 'Box non trouvee' });
    }

    return res.status(200).json({
      success: true,
      message: 'Box recuperee avec succes',
      data: box
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.updateBox = async (req, res) => {
  try {
    const { Superficie, typeBoxId, etage, numRef, centreId, isDisponible } = req.body;

    let box = await Box.findById(req.params.id);
    if (!box) {
      return res.status(404).json({ success: false, message: 'Box non trouvee' });
    }

    if (typeBoxId) {
      const typeBox = await TypeBox.findById(typeBoxId).select('_id');
      if (!typeBox) {
        return res.status(400).json({ success: false, message: 'Type de box non trouve' });
      }
    }

    if (numRef && centreId) {
      const existing = await Box.findOne({
        numRef,
        centreId,
        _id: { $ne: req.params.id }
      }).select('_id');

      if (existing) {
        return res.status(400).json({
          success: false,
          message: 'Une box avec cette reference existe deja dans ce centre'
        });
      }
    }

    const payload = {};
    if (Superficie !== undefined) payload.Superficie = Number(Superficie);
    if (typeBoxId !== undefined) payload.typeBoxId = typeBoxId;
    if (etage !== undefined) payload.etage = etage;
    if (numRef !== undefined) payload.numRef = numRef;
    if (centreId !== undefined) payload.centreId = centreId;
    if (isDisponible !== undefined) payload.isDisponible = !!isDisponible;

    box = await Box.findByIdAndUpdate(req.params.id, payload, { new: true, runValidators: true })
      .populate('typeBoxId', 'nom periode minOccupationDays remuneration')
      .populate('centreId', 'nom adresse');

    return res.status(200).json({
      success: true,
      message: 'Box mise a jour avec succes',
      data: box
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.deleteBox = async (req, res) => {
  try {
    const box = await Box.findById(req.params.id);
    if (!box) {
      return res.status(404).json({ success: false, message: 'Box non trouvee' });
    }

    if (box.isDisponible === false) {
      const activeOccupyingBoutique = await Boutique.findOne({
        isActive: true,
        'contratlocation.boxes': box._id
      }).select('_id nom');

      if (activeOccupyingBoutique) {
        return res.status(400).json({
          success: false,
          message: 'Suppression impossible: cette box est occupee par une boutique active.'
        });
      }
    }

    await Boutique.updateMany({ 'contratlocation.boxes': box._id }, { $pull: { 'contratlocation.boxes': box._id } });
    await Box.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: 'Box supprimee avec succes'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getBoxesByCentre = async (req, res) => {
  try {
    const { centreId } = req.params;
    const { typeBoxId, isDisponible, etage } = req.query;

    const filter = { centreId };
    if (typeBoxId) filter.typeBoxId = typeBoxId;
    if (isDisponible !== undefined) filter.isDisponible = String(isDisponible) === 'true';
    if (etage) filter.etage = etage;

    const boxes = await Box.find(filter)
      .populate('typeBoxId', 'nom periode minOccupationDays remuneration')
      .sort({ etage: 1, numRef: 1 });

    return res.status(200).json({
      success: true,
      message: 'Boxes du centre recuperees avec succes',
      data: boxes
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};

exports.getAvailableBoxes = async (req, res) => {
  try {
    const { centreId, typeBoxId } = req.query;

    const filter = { isDisponible: true };
    if (centreId) filter.centreId = centreId;
    if (typeBoxId) filter.typeBoxId = typeBoxId;

    const boxes = await Box.find(filter)
      .populate('typeBoxId', 'nom periode minOccupationDays remuneration')
      .populate('centreId', 'nom adresse')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: 'Boxes disponibles recuperees avec succes',
      data: boxes
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur serveur',
      error: error.message
    });
  }
};
