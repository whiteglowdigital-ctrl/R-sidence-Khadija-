/* =====================================================================
   IMAGES — une seule table pour toutes les photographies du site.
   ---------------------------------------------------------------------
   Pour intégrer une vraie photo : déposer le fichier dans /images
   puis renseigner `src`, par exemple  src: "images/piscine.jpg".
   Tant que `src` est vide, le site affiche une illustration d'ambiance
   (`scene`), signalée comme « Visuel d'illustration » :
   ce ne sont PAS des photographies officielles de l'hôtel.
   ===================================================================== */
window.HOTEL_IMAGES = {
  hero:           { src: "", scene: "facade",       alt: "Façade de l'Hôtel Résidence Khadija au crépuscule, à Thiès" },
  facade:         { src: "", scene: "facade",       alt: "Façade de l'hôtel et ses palmiers" },
  facadeNight:    { src: "", scene: "facadeNight",  alt: "L'hôtel de nuit, fenêtres éclairées" },
  introA:         { src: "", scene: "lobby",        alt: "Espace d'accueil de l'hôtel" },
  introB:         { src: "", scene: "poolDeck",     alt: "Transats au bord de la piscine" },

  roomStandard:   { src: "", scene: "room:standard",   alt: "Chambre Standard" },
  roomSuperieure: { src: "", scene: "room:superieure", alt: "Chambre Supérieure" },
  roomExecutive:  { src: "", scene: "room:executive",  alt: "Chambre Exécutive" },
  roomFamille:    { src: "", scene: "room:famille",    alt: "Chambre Famille" },
  suiteJunior:    { src: "", scene: "room:junior",     alt: "Suite Junior" },
  suiteSenior:    { src: "", scene: "room:senior",     alt: "Suite Senior" },

  pool:           { src: "", scene: "pool",         alt: "Les deux bassins de la piscine extérieure" },
  poolDeck:       { src: "", scene: "poolDeck",     alt: "Bord de piscine avec transats et parasols" },
  rooftop:        { src: "", scene: "rooftop",      alt: "Le rooftop de l'hôtel à la tombée de la nuit" },
  rooftopBar:     { src: "", scene: "rooftopBar",   alt: "Le bar du rooftop" },
  restaurant:     { src: "", scene: "restaurant",   alt: "Salle de restaurant dressée" },
  bar:            { src: "", scene: "bar",          alt: "Le bar de l'hôtel" },
  seminar:        { src: "", scene: "seminar",      alt: "Grande salle de séminaire en configuration conférence" },
  seminarBoard:   { src: "", scene: "boardroom",    alt: "Salle de commission en configuration réunion" },
  billiard:       { src: "", scene: "billiard",     alt: "Table de billard" },
  business:       { src: "", scene: "business",     alt: "Business corner et espace multimédia" },
  fitness:        { src: "", scene: "fitness",      alt: "Salle fitness" },
  map:            { src: "", scene: "map",          alt: "Plan stylisé du quartier Grand Standing à Thiès" }
};
