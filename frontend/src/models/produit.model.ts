export interface Produit {
  _id: string;
  boutiqueId: string;
  categorieId: string;
  nom: string;
  photo?: string;
  description?: string;
  variant?: Array<{
    attributes: Map<string, string>;
    qtt: number;
    createdAt: string;
    updatedAt: string;
  }>;
  prix: Array<{
    prixUnitaire: number;
    createdAt: string;
    updatedAt: string;
  }>;
  averageRating: number;
  avis: Array<string>;
  createdAt: string;
  updatedAt: string;
}
