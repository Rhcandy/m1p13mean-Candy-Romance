const HistoPrixCateg = require('../models/HistoPrixCateg');

const createPrix = async (data) => {
  return await HistoPrixCateg.create(data);
};

const getAllPrix = async () => {
  return await HistoPrixCateg.find().populate('typeboxId');
};

const getPrixByTypeBox = async (typeboxId) => {
  return await HistoPrixCateg.find({ typeboxId }).populate('typeboxId');
};

const updatePrix = async (id, data) => {
  return await HistoPrixCateg.findByIdAndUpdate(id, data, { new: true });
};

const deletePrix = async (id) => {
  return await HistoPrixCateg.findByIdAndDelete(id);
};

module.exports = {
  createPrix,
  getAllPrix,
  getPrixByTypeBox,
  updatePrix,
  deletePrix
};
