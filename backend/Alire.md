Guide AdvancedResults (filtres API)

Ce document explique comment utiliser le middleware advancedResults pour filtrer, trier, paginer et limiter les champs renvoyes.

1. Pagination
- page: numero de page (defaut 1)
- limit: nombre de resultats par page (defaut 10)
Exemple: ?page=2&limit=5

2. Tri (sort)
- sort: champs de tri separes par des virgules
- prefixer un champ par "-" pour un tri descendant
Exemples:
- ?sort=nom
- ?sort=-createdAt
- ?sort=nom,-createdAt

3. Projection des champs (fields)
- fields: liste des champs a inclure, separes par des virgules
Exemple: ?fields=nom,prix,photo
Par defaut, certains champs sensibles (ex: password) sont exclus.

4. Filtres simples
- Filtre exact: ?role=admin
- Recherche texte (regex): champ[regex]=valeur
- Options regex: champ[options]=i (insensible a la casse)
Exemple: ?nom[regex]=bonbon&nom[options]=i

5. Filtres par intervalle (nombres ou dates)
Utilisez gte, lte, gt, lt, ne, in, nin.
Exemples:
- ?age[gte]=18&age[lte]=30
- ?createdAt[gte]=2026-01-01&createdAt[lte]=2026-01-28
- ?role[in]=admin,user

6. Exemples pour Produits
- Filtrer par boutique et categorie:
  GET /api/produits?boutiqueId=ID_BOUTIQUE&categorieId=ID_CATEGORIE

- Recherche par nom (contient, insensible a la casse):
  GET /api/produits?nom[regex]=bonbon&nom[options]=i

- Filtrer par prix min/max (prix.prixUnitaire est un champ imbrique):
  GET /api/produits?prix.prixUnitaire[gte]=100&prix.prixUnitaire[lte]=500

- Exemple complet:
  GET /api/produits?page=1&limit=10&sort=-createdAt&nom[regex]=choco&nom[options]=i&categorieId=ID_CATEGORIE&boutiqueId=ID_BOUTIQUE&prix.prixUnitaire[gte]=100&prix.prixUnitaire[lte]=500

Resume
- Filtrage dynamique sur n'importe quel champ du modele
- Regex: champ[regex]=valeur (+ champ[options]=i)
- Intervalle: champ[gte]=valeur, champ[lte]=valeur
- Tri: sort=champ1,-champ2
- Pagination: page et limit
- Projection: fields=champ1,champ2
