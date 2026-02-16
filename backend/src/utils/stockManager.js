const Product = require('../models/Produit');

/**
 * Gestionnaire de stock pour les produits
 */
class StockManager {
  /**
   * Vérifier si un produit a suffisamment de stock
   * @param {string} productId - ID du produit
   * @param {number} quantity - Quantité souhaitée
   * @returns {Promise<{available: boolean, stock: number, product: Object}>}
   */
  static async checkStock(productId, quantity) {
    const product = await Product.findById(productId);
    if (!product) {
      return { available: false, stock: 0, product: null };
    }

    const currentStock = product.variant && product.variant.length > 0 ? product.variant[0].qtt || 0 : 999;
    
    return {
      available: currentStock >= quantity,
      stock: currentStock,
      product
    };
  }

  /**
   * Décrémenter le stock d'un produit
   * @param {string} productId - ID du produit
   * @param {number} quantity - Quantité à décrémenter
   * @returns {Promise<{success: boolean, newStock: number}>}
   */
  static async decrementStock(productId, quantity) {
    const product = await Product.findById(productId);
    if (!product) {
      return { success: false, newStock: 0 };
    }

    if (!product.variant || product.variant.length === 0) {
      return { success: true, newStock: 999 }; // Stock illimité
    }

    const currentStock = product.variant[0].qtt || 0;
    if (currentStock < quantity) {
      return { success: false, newStock: currentStock };
    }

    product.variant[0].qtt = currentStock - quantity;
    await product.save();

    return { success: true, newStock: product.variant[0].qtt };
  }

  /**
   * Incrémenter le stock d'un produit
   * @param {string} productId - ID du produit
   * @param {number} quantity - Quantité à incrémenter
   * @returns {Promise<{success: boolean, newStock: number}>}
   */
  static async incrementStock(productId, quantity) {
    const product = await Product.findById(productId);
    if (!product) {
      return { success: false, newStock: 0 };
    }

    if (!product.variant || product.variant.length === 0) {
      return { success: true, newStock: 999 }; // Stock illimité
    }

    const currentStock = product.variant[0].qtt || 0;
    product.variant[0].qtt = currentStock + quantity;
    await product.save();

    return { success: true, newStock: product.variant[0].qtt };
  }

  /**
   * Mettre à jour le stock (décrémenter ou incrémenter selon le signe)
   * @param {string} productId - ID du produit
   * @param {number} quantity - Quantité (positive pour incrémenter, négative pour décrémenter)
   * @returns {Promise<{success: boolean, newStock: number}>}
   */
  static async updateStock(productId, quantity) {
    if (quantity > 0) {
      return await this.incrementStock(productId, quantity);
    } else if (quantity < 0) {
      return await this.decrementStock(productId, Math.abs(quantity));
    }
    return { success: true, newStock: (await this.checkStock(productId, 0)).stock };
  }
}

module.exports = StockManager;
