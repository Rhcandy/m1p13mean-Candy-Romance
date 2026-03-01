const mongoose = require('mongoose');

const boxSchema = new mongoose.Schema(
  {
    Superficie: {
      type: Number,
      required: true,
      min: 0
    },
    typeBoxId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TypeBox',
      required: true
    },
    etage: {
      type: String,
      required: true,
      trim: true
    },
    numRef: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    centreId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Centre',
      required: true
    },
    isDisponible: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    collection: 'boxes'
  }
);

const Box = mongoose.model('Box', boxSchema);
module.exports = Box;
