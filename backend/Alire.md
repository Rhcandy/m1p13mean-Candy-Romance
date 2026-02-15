🔹 Guide de recherche avancée – Middleware AdvancedResults
Ce guide explique comment effectuer des recherches avancées sur une API utilisant le middleware advancedResults pour filtrer, trier, paginer et sélectionner les champs renvoyés.

1️⃣ Pagination
Permet de diviser les résultats en pages.

Paramètre	Type	Description	Valeur par défaut
page	integer	Numéro de la page à afficher	1
limit	integer	Nombre de résultats par page	10
Exemple :
?page=2&limit=5 → affiche la deuxième page avec 5 résultats par page.

2️⃣ Tri (sort)
Permet de trier les résultats sur un ou plusieurs champs.

Paramètre	Type	Exemple	Description
sort	string	name,-createdAt	Champs pour trier. - devant un champ = tri décroissant
Exemples :

sort=name → tri par name ascendant
sort=-createdAt → tri par createdAt décroissant
sort=name,-createdAt → tri par name croissant, puis createdAt décroissant
3️⃣ Projection des champs (fields)
Permet de limiter les champs renvoyés dans la réponse.

Paramètre	Type	Exemple	Description
fields	string	name,email,role	Liste des champs à inclure dans la réponse
Par défaut, certains champs sensibles comme password sont exclus.

4️⃣ Filtres simples
Filtrage exact ou via texte partiel (regex).

Paramètre	Type	Exemple	Description
role	string	role=admin	Filtre exact sur le rôle
isActive	boolean	isActive=true	Filtre sur l’état actif
email	string	email[regex]=axel	Recherche texte partielle, insensible à la casse
name	string	name[regex]=john	Recherche texte partielle sur le nom
Syntaxe regex : champ[regex]=valeur → correspond à “contient”.

5️⃣ Filtres intervalle (dates ou nombres)
Permet de filtrer selon une valeur minimale ou maximale.

Paramètre	Opérateur	Exemple URL	Description
age[gte]	≥	age[gte]=18	Valeur minimale
age[lte]	≤	age[lte]=30	Valeur maximale
age[gt]	>	age[gt]=18	Strictement supérieur
age[lt]	<	age[lt]=30	Strictement inférieur
role[ne]	≠	role[ne]=admin	Valeur différente
role[in]	in	role[in]=admin,user	Une des valeurs de la liste
role[nin]	not in	role[nin]=admin,user	Aucune des valeurs de la liste
name[regex]	regex	name[regex]=axel	Recherche texte insensible à la casse
createdAt[gte]	≥	createdAt[gte]=2026-01-01	Date minimum
createdAt[lte]	≤	createdAt[lte]=2026-01-28	Date maximum
Les opérateurs gte, lte, gt, lt fonctionnent pour nombres et dates.
Les opérateurs in et nin acceptent plusieurs valeurs séparées par des virgules.
$regex est utile pour la recherche texte insensible à la casse.

6️⃣ Exemples de requêtes
Exemple 1 – Filtre simple
GET /api/users?role=admin&isActive=true
Récupère tous les utilisateurs actifs avec rôle admin.
Exemple 2 – Recherche texte
GET /api/users?email[regex]=axel
Récupère tous les utilisateurs dont l’email contient “axel”.
Exemple 3 – Intervalle de dates
GET /api/users?createdAt[gte]=2026-01-01&createdAt[lte]=2026-01-28
Récupère les utilisateurs créés entre le 1er et le 28 janvier 2026.
Exemple 4 – Combinaison complète
GET /api/users?page=2&limit=5&sort=name,-createdAt&fields=name,email,role&email[regex]=axel&role=boutique&isActive=true&createdAt[gte]=2026-01-01&createdAt[lte]=2026-01-28
Deuxième page, 5 résultats par page
Tri par name croissant puis createdAt décroissant
Affiche seulement name, email, role
Filtre sur email contenant “axel”, rôle boutique, actif seulement
Créés entre le 1er et 28 janvier 2026
7️⃣ Résumé
Filtrage dynamique : n’importe quel champ du modèle
Recherche texte : champ[regex]=valeur
Intervalle : champ[gte]=valeur, champ[lte]=valeur
Tri : sort=champ1,-champ2
Pagination : page et limit
Projection : fields pour choisir les champs à renvoyer