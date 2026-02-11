export interface Panier {
  _id: string;
  userId: string;
  produitsachete: Array<{
    produit: {
      _id: string;
      nom: string;
      photo?: string;
      prix: Array<{ prixUnitaire: number }>;
      averageRating: number;
    };
    qtt: number;
    _id: string;
  }>;
  total: number;
  qtt: number;
  isPaye: boolean;
  islivre: boolean;
  createdAt: string;
  updatedAt: string;
}
