# Jëfya Hôtel : site de démonstration

Site vitrine premium d'un **hôtel fictif** (Petite-Côte, Sénégal), conçu par Jëfya
pour montrer le niveau de site proposé aux établissements hôteliers.

L'établissement, les tarifs, les chiffres et les coordonnées sont fictifs.
Les photos proviennent d'Unsplash (licence Unsplash : usage gratuit, y compris commercial).

## Structure (réutilisable pour un vrai hôtel)

| Dossier | Rôle |
|---|---|
| `content/hotel.js` | **Contenu** : nom, adresse, contacts, chambres, tarifs, services, salles… |
| `content/images.js` | **Images** : une entrée par emplacement (`src`, cadrage `pos`, texte `alt`). |
| `images/` | Les photographies. |
| `ui/scenes.js` | Plan stylisé affiché à la place d'une photo manquante. |
| `index.html` | **Interface** : mise en page, styles, animations, demande de réservation. |

## Passer d'une démo à un vrai site
1. Remplacer le contenu de `content/hotel.js` par les informations réelles.
2. Passer `demo` à `false` et renseigner `contact.whatsapp` (numéro qui reçoit les demandes).
3. Remplacer les photos dans `images/` et mettre à jour `content/images.js`.
4. Retirer `<meta name="robots" content="noindex">` de `index.html` pour être référencé.
