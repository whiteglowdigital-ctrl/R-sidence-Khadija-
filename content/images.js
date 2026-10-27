/* =====================================================================
   IMAGES — une seule table pour toutes les photographies du site.
   ---------------------------------------------------------------------
   src : chemin de la photo (dossier /images). Vide = illustration `scene`.
   pos : cadrage (CSS object-position) quand la photo est recadrée.
   Photos libres de droits provenant d'Unsplash (licence Unsplash :
   usage gratuit, y compris commercial, sans attribution obligatoire).
   Elles illustrent un établissement fictif.
   ===================================================================== */
window.HOTEL_IMAGES = {
  hero:           { src: "images/hotel-palmiers.jpg",        pos: "50% 55%", alt: "Hôtel aux murs blancs entouré de palmiers, au crépuscule" },
  facade:         { src: "images/hotel-palmiers.jpg",        pos: "50% 55%", alt: "Bâtiments de l'hôtel et palmiers au crépuscule" },
  entrance:       { src: "images/hotel-piscine-facade.jpg",  pos: "50% 50%", alt: "Façade blanche de l'hôtel au bord de la piscine" },
  introA:         { src: "images/hotel-piscine-facade.jpg",  pos: "50% 45%", alt: "Façade blanche de l'hôtel au bord de la piscine" },
  introB:         { src: "images/salon.jpg",                 pos: "40% 50%", alt: "Salon lumineux avec canapés" },
  lounge:         { src: "images/salon.jpg",                 pos: "50% 50%", alt: "Salon lumineux avec canapés" },
  terrace:        { src: "images/terrasse-restaurant.jpg",   pos: "50% 50%", alt: "Terrasse du restaurant au bord de la piscine, à la tombée du jour" },

  roomStandard:   { src: "images/chambre-classique.jpg",     pos: "50% 55%", alt: "Chambre Classique avec lit double" },
  roomSuperieure: { src: "images/chambre-superieure.jpg",    pos: "50% 55%", alt: "Chambre Supérieure aux tons clairs" },
  roomExecutive:  { src: "images/chambre-deluxe.jpg",        pos: "50% 55%", alt: "Chambre Deluxe avec canapé" },
  roomFamille:    { src: "images/chambre-familiale.jpg",     pos: "50% 55%", alt: "Chambre Familiale avec deux lits" },
  suiteJunior:    { src: "images/suite-junior.jpg",          pos: "50% 55%", alt: "Suite Junior aux tons chauds" },
  suiteSenior:    { src: "images/suite-prestige.jpg",        pos: "50% 55%", alt: "Suite Prestige avec espace salon" },
  roomDeluxe:     { src: "images/chambre-boisee.jpg",        pos: "50% 55%", alt: "Chambre aux boiseries et lumière tamisée" },
  bathroom:       { src: "images/salle-de-bain.jpg",         pos: "50% 50%", alt: "Salle de bain avec baignoire îlot" },

  pool:           { src: "images/piscine-debordement.jpg",   pos: "50% 60%", alt: "Piscine à débordement face à l'océan, avec cabanas" },
  poolDeck:       { src: "images/terrasse-transats.jpg",     pos: "50% 55%", alt: "Transats et parasols sur la terrasse face à la mer" },
  poolNight:      { src: "images/piscine-nuit.jpg",          pos: "50% 60%", alt: "Piscine éclairée à la nuit tombée" },

  restaurant:     { src: "images/restaurant.jpg",            pos: "50% 50%", alt: "Salle du restaurant" },
  bar:            { src: "images/bar.jpg",                   pos: "50% 50%", alt: "Comptoir du bar lounge" },
  cocktails:      { src: "images/cocktails.jpg",             pos: "50% 50%", alt: "Cocktails maison au comptoir" },
  dessert:        { src: "images/plat.jpg",                  pos: "50% 55%", alt: "Plat servi au restaurant" },
  food:           { src: "images/assiettes.jpg",             pos: "50% 50%", alt: "Assiettes du restaurant" },

  seminar:        { src: "images/salle-seminaire.jpg",       pos: "50% 50%", alt: "Salle de séminaire lumineuse avec grande table" },
  banquet:        { src: "images/salle-reception.jpg",       pos: "50% 50%", alt: "Salle de réception dressée pour un événement" },
  conference:     { src: "images/conference.jpg",            pos: "50% 50%", alt: "Conférence devant un grand écran" },

  /* Pas de photo : plan stylisé */
  map:            { src: "", scene: "map",                   alt: "Plan stylisé du quartier" }
};
