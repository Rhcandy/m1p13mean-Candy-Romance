export interface Avis {
  _id: string;
  userId: {
    _id: string;
    nom: string;
    email: string;
  };
  produitId: {
    _id: string;
    nom: string;
  };
  note: number;
  commentaire?: string;
  createdAt: string;
  updatedAt: string;
}
