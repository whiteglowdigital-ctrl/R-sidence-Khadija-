# Hôtel Résidence Khadija : prototype Jëfya

Prototype de site vitrine premium (Thiès, Sénégal).

## Structure (réutilisable pour un autre hôtel)

| Dossier | Rôle |
|---|---|
| `content/hotel.js` | **Contenu** : nom, adresse, contacts, chambres, tarifs, services, salles… |
| `content/images.js` | **Images** : une entrée par emplacement. Renseigner `src: "images/xxx.jpg"` pour remplacer l'illustration. |
| `images/` | Photographies officielles de l'hôtel (renommées par contenu). |
| `ui/scenes.js` | Illustrations d'ambiance affichées tant qu'aucune photo n'est fournie. |
| `index.html` | **Interface** : mise en page, styles, interactions (réservation, galerie, menu). |

## À valider par l'hôtel avant mise en ligne
- Tarifs indicatifs (`verified: false` dans `content/hotel.js`)
- Numéro WhatsApp (laissé à `null` volontairement)
- Correspondance photos / catégories de chambres (voir `content/images.js`)
- Photo du rooftop (non fournie)
