export interface Paiement {
  reference: string;
  title: string;
  libelle: string | null;
  montant: number;
  modePaiement?: string;
  datePaiement?: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Boutique {
  _id: string;
  nom: string;
  adresse?: string;
}

export interface Loyer {
  _id: string;
  boutiqueId: Boutique;
  periode: string;
  dateDebutPeriode?: string;
  dateFinPeriode?: string;
  joursFactures?: number;
  baseHebdo?: number;
  total: number;
  reste: number;
  statut: string;
  dateEcheance: string;
  paiements: Paiement[];
  createdAt: string;
  updatedAt: string;
}
