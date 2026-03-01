const {
  createPrix,
  getAllPrix,
  getPrixByTypeBox,
  updatePrix,
  deletePrix
} = require('../services/histoPrixCateg.service');

const create = async (req, res) => {
  try {
    const prix = await createPrix(req.body);
    return res.status(201).json({ success: true, data: prix });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const prix = await getAllPrix();
    return res.status(200).json({ success: true, data: prix });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getByTypeBox = async (req, res) => {
  try {
    const { typeboxId } = req.params;
    const prix = await getPrixByTypeBox(typeboxId);
    return res.status(200).json({ success: true, data: prix });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const prix = await updatePrix(req.params.id, req.body);
    return res.status(200).json({ success: true, data: prix });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    await deletePrix(req.params.id);
    return res.status(200).json({ success: true, message: 'Prix supprime' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { create, getAll, getByTypeBox, update, remove };
