/* =====================================================================
   IMAGES — une seule table pour toutes les photographies du site.
   ---------------------------------------------------------------------
   src   : chemin de la photo (dossier /images). Vide = illustration `scene`.
   pos   : cadrage (CSS object-position) quand la photo est recadrée.
   Photographies fournies par l'hôtel. L'attribution des photos aux
   catégories de chambres est À CONFIRMER par l'établissement.
   ===================================================================== */
window.HOTEL_IMAGES = {
  hero:           { src: "images/facade-jour.jpeg",        pos: "50% 22%", alt: "Façade de l'Hôtel Résidence Khadija à Thiès, avec son enseigne et ses palmiers" },
  facade:         { src: "images/facade-jour.jpeg",        pos: "50% 30%", alt: "Façade de l'hôtel" },
  entrance:       { src: "images/entree-enseigne.jpeg",    pos: "40% 40%", alt: "Entrée de l'hôtel et son enseigne éclairée" },
  introA:         { src: "images/entree-enseigne.jpeg",    pos: "35% 45%", alt: "Entrée de l'Hôtel Résidence Khadija, enseigne éclairée" },
  introB:         { src: "images/salon-accueil.jpeg",      pos: "50% 50%", alt: "Salon d'accueil aux fauteuils orange" },
  lounge:         { src: "images/salon-accueil.jpeg",      pos: "50% 50%", alt: "Salon d'accueil" },
  hall:           { src: "images/hall-escalier.jpeg",      pos: "50% 50%", alt: "Hall et escalier de l'hôtel" },
  car:            { src: "images/vehicule-hotel.jpeg",     pos: "50% 60%", alt: "Véhicule aux couleurs de l'hôtel devant la façade" },

  /* Chambres — correspondance photo / catégorie à confirmer par l'hôtel */
  roomStandard:   { src: "images/chambre-double.jpeg",          pos: "50% 55%", alt: "Chambre avec lit double et tête de lit capitonnée" },
  roomSuperieure: { src: "images/chambre-tete-capitonnee.jpeg", pos: "50% 55%", alt: "Chambre avec lit double et linge aux motifs orange" },
  roomExecutive:  { src: "images/chambre-canape.jpeg",          pos: "50% 55%", alt: "Chambre avec lit double et canapé" },
  roomFamille:    { src: "images/chambre-lits-jumeaux.jpeg",    pos: "50% 55%", alt: "Chambre avec deux lits" },
  suiteJunior:    { src: "images/chambre-coin-salon.jpeg",      pos: "50% 55%", alt: "Chambre avec coin salon et table" },
  suiteSenior:    { src: "images/suite-sejour.jpeg",            pos: "50% 55%", alt: "Espace séjour avec canapé et coin repas" },
  roomTwin2:      { src: "images/chambre-lits-jumeaux-2.jpeg",  pos: "50% 55%", alt: "Chambre avec deux lits" },
  roomDesk:       { src: "images/chambre-bureau.jpeg",          pos: "50% 55%", alt: "Bureau en chambre" },
  bathroom:       { src: "images/salle-de-bain.jpeg",           pos: "50% 50%", alt: "Salle de bain et peignoir" },
  robes:          { src: "images/peignoir-logo.jpeg",           pos: "50% 50%", alt: "Peignoir brodé au logo de l'hôtel" },

  pool:           { src: "images/piscine.jpeg",            pos: "50% 62%", alt: "Piscine extérieure bordée de transats et de palmiers" },
  poolDeck:       { src: "images/piscine-transats.jpeg",   pos: "50% 60%", alt: "Transats et parasol au bord de la piscine" },

  restaurant:     { src: "images/restaurant.jpeg",         pos: "50% 60%", alt: "Salle de restaurant dressée" },
  banquet:        { src: "images/salle-banquet.jpeg",      pos: "50% 60%", alt: "Salle dressée en tables longues pour une réception" },
  bar:            { src: "images/bar-comptoir.jpeg",       pos: "50% 55%", alt: "Comptoir du bar" },
  barMural:       { src: "images/bar-fresque.jpeg",        pos: "50% 50%", alt: "Bar et sa fresque murale" },
  cocktails:      { src: "images/cocktails.jpeg",          pos: "50% 50%", alt: "Cocktails servis au bar" },
  cocktails2:     { src: "images/cocktails-2.jpeg",        pos: "50% 50%", alt: "Cocktails et boissons fraîches" },
  burger:         { src: "images/burger-piscine.jpeg",     pos: "50% 55%", alt: "Burger servi au bord de la piscine" },
  dessert:        { src: "images/fondant-chocolat.jpeg",   pos: "50% 50%", alt: "Fondant au chocolat" },
  coffee:         { src: "images/cafe-frappe.jpeg",        pos: "50% 50%", alt: "Café frappé" },

  seminar:        { src: "images/seminaire-salle-u.jpeg",  pos: "50% 50%", alt: "Salle de séminaire en U avec écran de projection" },
  seminarBoard:   { src: "images/seminaire-salle-2.jpeg",  pos: "50% 50%", alt: "Salle de réunion en U" },
  business:       { src: "images/business-corner.jpeg",    pos: "50% 50%", alt: "Business corner et postes informatiques" },

  /* Pas de photo fournie : illustration conservée */
  map:            { src: "", scene: "map",                 alt: "Plan stylisé du quartier Grand Standing à Thiès" }
};
