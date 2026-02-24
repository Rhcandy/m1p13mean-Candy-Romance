const User = require('../models/User');
const Produit = require('../models/Produit');

const favorisPopulate = {
  path: 'favoris',
  select: 'nom photo prix averageRating description variant promotions categorieId boutiqueId',
  populate: [
    { path: 'categorieId', select: 'nom' },
    { path: 'boutiqueId', select: 'nom' },
    { path: 'promotions', select: 'nom taux dateDebut dateFin categorie' }
  ]
};

exports.getFavoris = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId)
      .populate(favorisPopulate)
      .select('favoris');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Utilisateur non trouve'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Favoris recuperes avec succes',
      data: user.favoris || []
    });
  } catch (error) {
    console.error('Erreur recuperation favoris:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la recuperation des favoris',
      error: error.message
    });
  }
};

exports.addFavori = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { produitId } = req.params;

    const produit = await Produit.findById(produitId).select('_id');
    if (!produit) {
      return res.status(404).json({
        success: false,
        message: 'Produit introuvable'
      });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { favoris: produitId } },
      { new: true }
    ).populate(favorisPopulate);

    res.status(200).json({
      success: true,
      message: 'Produit ajoute aux favoris',
      data: user?.favoris || []
    });
  } catch (error) {
    console.error('Erreur ajout favori:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'ajout du favori',
      error: error.message
    });
  }
};

exports.removeFavori = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { produitId } = req.params;

    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { favoris: produitId } },
      { new: true }
    ).populate(favorisPopulate);

    res.status(200).json({
      success: true,
      message: 'Produit retire des favoris',
      data: user?.favoris || []
    });
  } catch (error) {
    console.error('Erreur suppression favori:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression du favori',
      error: error.message
    });
  }
};

exports.isFavori = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { produitId } = req.params;
    const isFavori = await User.exists({ _id: userId, favoris: produitId });

    res.status(200).json({
      success: true,
      message: 'OK',
      data: { isFavori: Boolean(isFavori) }
    });
  } catch (error) {
    console.error('Erreur verification favori:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la verification du favori',
      error: error.message
    });
  }
};
