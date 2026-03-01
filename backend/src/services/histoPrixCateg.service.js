const HistoPrixCateg = require('../models/HistoPrixCateg');
const TypeBox = require('../models/TypeBox');

async function assertTypeBoxExists(typeboxId) {
  const typeBox = await TypeBox.findById(typeboxId).select('_id');
  if (!typeBox) {
    throw new Error('Type de box introuvable');
  }
}

async function createPrix(data) {
  const { typeboxId, prixParM2 } = data;
  if (!typeboxId || prixParM2 === undefined) {
    throw new Error('typeboxId et prixParM2 sont obligatoires');
  }

  await assertTypeBoxExists(typeboxId);

  return HistoPrixCateg.create({
    typeboxId,
    prixParM2: Number(prixParM2)
  });
}

async function getAllPrix() {
  return HistoPrixCateg.find().populate('typeboxId', 'nom minOccupationDays periode remuneration').sort({
    typeboxId: 1,
    createdAt: -1
  });
}

async function getPrixByTypeBox(typeboxId) {
  return HistoPrixCateg.find({ typeboxId })
    .populate('typeboxId', 'nom minOccupationDays periode remuneration')
    .sort({ createdAt: -1 });
}

async function updatePrix(id, data) {
  const current = await HistoPrixCateg.findById(id);
  if (!current) throw new Error('Historique de prix introuvable');

  const payload = {};
  if (data.prixParM2 !== undefined) payload.prixParM2 = Number(data.prixParM2);

  return HistoPrixCateg.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true
  }).populate('typeboxId', 'nom minOccupationDays periode remuneration');
}

async function deletePrix(id) {
  return HistoPrixCateg.findByIdAndDelete(id);
}

module.exports = {
  createPrix,
  getAllPrix,
  getPrixByTypeBox,
  updatePrix,
  deletePrix
};
