const {
  createPrix,
  getAllPrix,
  getPrixByTypeBox,
  updatePrix,
  deletePrix
} = require('../services/histoPrixCateg.service');

// ==========================================
// Créer un prix
// ==========================================
const create = async (req, res) => {
  try {
    const prix = await createPrix(req.body);
    res.status(201).json({ success: true, data: prix });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ==========================================
// Récupérer tous les prix
// ==========================================
const getAll = async (req, res) => {
  try {
    const prix = await getAllPrix();
    res.status(200).json({ success: true, data: prix });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// Récupérer prix par typebox
// ==========================================
const getByTypeBox = async (req, res) => {
  try {
    const { typeboxId } = req.params;
    const prix = await getPrixByTypeBox(typeboxId);
    res.status(200).json({ success: true, data: prix });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==========================================
// Mettre à jour un prix
// ==========================================
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const prix = await updatePrix(id, req.body);
    res.status(200).json({ success: true, data: prix });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ==========================================
// Supprimer un prix
// ==========================================
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePrix(id);
    res.status(200).json({ success: true, message: 'Prix supprimé' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { create, getAll, getByTypeBox, update, remove };
