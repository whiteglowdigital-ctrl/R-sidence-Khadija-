/* =====================================================================
   CONTENU — Jëfya Hôtel (établissement FICTIF, site de démonstration)
   ---------------------------------------------------------------------
   Ce fichier ne contient QUE des données. L'interface (index.html) les lit.
   Pour un vrai client : dupliquer ce fichier et content/images.js,
   remplacer chaque valeur par les informations réelles de l'hôtel,
   puis passer `demo` à false et renseigner `contact.whatsapp`.
   ===================================================================== */
window.HOTEL = {
  /* Mode démo : les boutons d'appel et WhatsApp affichent un message au lieu d'appeler un vrai numéro. */
  demo: true,

  name: "Jëfya Hôtel",
  wordmark: { top: "Hôtel", bottom: "Jëfya" },
  tagline: "Un hôtel en bord de mer sur la Petite-Côte",

  location: {
    district: "Saly",
    city: "Petite-Côte",
    country: "Sénégal",
    detail: "Adresse fictive",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Saly+S%C3%A9n%C3%A9gal"
  },

  contact: {
    phones: [
      { label: "Réception", display: "+221 33 000 00 00", tel: "" },
      { label: "Réservations", display: "+221 77 000 00 00", tel: "" }
    ],
    emails: [
      { label: "Réservations", value: "reservations@jefya-hotel.demo" },
      { label: "Séminaires & événements", value: "evenements@jefya-hotel.demo" }
    ],
    website: "jefya-hotel.demo",
    /* WhatsApp : null en démo. Pour un vrai hôtel : { display: "+221 …", number: "221…" } */
    whatsapp: null
  },

  hero: {
    script: "Bienvenue sur la Petite-Côte",
    eyebrow: "Saly · Petite-Côte · Sénégal",
    title: "Jëfya Hôtel",
    subtitle: "Un hôtel en bord de mer pensé pour les escapades comme pour les séminaires, à une heure de Dakar."
  },

  intro: {
    eyebrow: "L'hôtel",
    title: "Entre l'océan et les palmiers, une adresse pour ralentir",
    paragraphs: [
      "Jëfya Hôtel réunit 48 chambres et suites, une piscine à débordement face à l'océan, un restaurant, un bar lounge et deux salles de séminaire, dans un jardin planté de palmiers.",
      "On y vient pour un week-end au soleil, pour une semaine en famille ou pour réunir une équipe le temps d'un séminaire. Le personnel s'occupe du reste, de l'arrivée au départ."
    ]
  },

  /* Chiffres de démonstration */
  keyFigures: [
    { value: "48", label: "chambres, dont 8 suites" },
    { value: "2", label: "salles de séminaire" },
    { value: "250", label: "places dans la grande salle" },
    { value: "1", label: "piscine à débordement" }
  ],

  /* Tarifs de démonstration */
  rooms: [
    { id: "classique", kind: "Chambre", name: "Chambre Classique", image: "roomStandard",
      blurb: "Lit double, salle de douche et bureau : l'essentiel pour un séjour simple et reposant.",
      price: 55000 },
    { id: "superieure", kind: "Chambre", name: "Chambre Supérieure", image: "roomSuperieure",
      blurb: "Plus d'espace, un coin lecture et une lumière douce en fin de journée.",
      price: 70000 },
    { id: "deluxe", kind: "Chambre", name: "Chambre Deluxe", image: "roomExecutive",
      blurb: "Un salon intégré pour travailler ou se détendre avant le dîner.",
      price: 90000 },
    { id: "familiale", kind: "Chambre", name: "Chambre Familiale", image: "roomFamille",
      blurb: "Deux lits pour voyager en famille sans réserver deux chambres.",
      price: 85000 },
    { id: "suite-junior", kind: "Suite", name: "Suite Junior", image: "suiteJunior",
      blurb: "Une chambre spacieuse aux tons chauds, pensée pour les longs séjours.",
      price: 120000 },
    { id: "suite-prestige", kind: "Suite", name: "Suite Prestige", image: "suiteSenior",
      blurb: "La plus grande suite de l'hôtel, avec un espace salon ouvert sur la lumière.",
      price: 180000 }
  ],
  roomsCommon: ["Accès par carte magnétique", "Wi-Fi haut débit gratuit", "Climatisation", "Service en chambre"],
  priceNote: "Tarifs de démonstration par nuitée, petit-déjeuner non inclus.",
  currency: "FCFA",

  pool: {
    eyebrow: "Piscine",
    title: "Une piscine à débordement face à l'océan",
    text: "Transats, cabanas et service au bord de l'eau, du matin jusqu'au coucher du soleil.",
    points: ["Vue sur l'océan", "Cabanas", "Service au bord de l'eau"]
  },

  rooftop: {
    eyebrow: "Bar lounge",
    title: "Le bar lounge, pour finir la journée",
    text: "Cocktails maison, jus de fruits frais et boissons fraîches, à prendre au comptoir ou sur la terrasse quand le soleil se couche."
  },

  dining: {
    eyebrow: "Restauration",
    title: "Un restaurant, un bar lounge",
    text: "Le restaurant sert une cuisine sénégalaise et internationale, du petit-déjeuner au dîner. Le service en chambre prend le relais à toute heure.",
    items: [
      { value: "1", label: "restaurant" },
      { value: "1", label: "bar lounge" },
      { value: "", label: "Petit-déjeuner" },
      { value: "", label: "Service en chambre" }
    ]
  },

  services: [
    { icon: "pool", name: "Piscine à débordement", note: "Face à l'océan" },
    { icon: "rooftop", name: "Terrasse lounge", note: "Au coucher du soleil" },
    { icon: "dining", name: "Restaurant", note: "Cuisine locale & internationale" },
    { icon: "fitness", name: "Salle fitness", note: "Sur place" },
    { icon: "billiard", name: "Salon de jeux", note: "Billard & détente" },
    { icon: "business", name: "Business corner", note: "Espace de travail" },
    { icon: "wifi", name: "Wi-Fi haut débit", note: "Gratuit" },
    { icon: "parking", name: "Parking", note: "Sur place" },
    { icon: "shuttle", name: "Navette", note: "Aéroport sur demande" },
    { icon: "prayer", name: "Salle de prière", note: "Sur place" },
    { icon: "roomservice", name: "Service en chambre", note: "À toute heure" },
    { icon: "rfid", name: "Carte magnétique", note: "Dans toutes les chambres" }
  ],

  meetings: {
    eyebrow: "Séminaires & événements",
    title: "Deux salles pour vos réunions et vos événements",
    text: "Réunions, séminaires, conférences et réceptions : les salles de l'hôtel se configurent selon l'événement. L'équipe événementielle vous accompagne, de l'hébergement des participants à la restauration sur place.",
    rooms: [
      { name: "Salle Baobab", capacity: "250", unit: "personnes max." },
      { name: "Salle Téranga", capacity: "80", unit: "personnes" },
      { name: "Salon privé", capacity: "", unit: "Comités et réunions restreintes" }
    ],
    total: "Plus de 300 personnes peuvent être accueillies sur l'ensemble des espaces.",
    formats: ["Réunions", "Séminaires", "Conférences", "Réceptions", "Mariages", "Hébergement des participants"]
  },

  gallery: [
    { image: "facade", cat: "Hôtel" },
    { image: "pool", cat: "Piscine" },
    { image: "suiteJunior", cat: "Chambres" },
    { image: "restaurant", cat: "Restaurant & bar" },
    { image: "seminar", cat: "Séminaires" },
    { image: "entrance", cat: "Hôtel" },
    { image: "cocktails", cat: "Restaurant & bar" },
    { image: "poolDeck", cat: "Piscine" },
    { image: "roomSuperieure", cat: "Chambres" },
    { image: "lounge", cat: "Hôtel" },
    { image: "banquet", cat: "Séminaires" },
    { image: "bar", cat: "Restaurant & bar" },
    { image: "suiteSenior", cat: "Chambres" },
    { image: "food", cat: "Restaurant & bar" },
    { image: "conference", cat: "Séminaires" },
    { image: "terrace", cat: "Hôtel" },
    { image: "bathroom", cat: "Chambres" },
    { image: "dessert", cat: "Restaurant & bar" },
    { image: "poolNight", cat: "Piscine" },
    { image: "roomDeluxe", cat: "Chambres" }
  ],

  heroHighlights: [
    { icon: "pool", title: "Piscine à débordement", note: "Face à l'océan" },
    { icon: "dining", title: "Restaurant & bar lounge", note: "Cuisine locale & internationale" },
    { icon: "business", title: "2 salles de séminaire", note: "Jusqu'à 250 personnes" }
  ],
  featuredRoom: "suite-junior",

  experiences: [
    { icon: "bed", title: "Chambres & suites", text: "48 chambres, dont 8 suites, toutes climatisées avec Wi-Fi gratuit.", href: "#chambres" },
    { icon: "pool", title: "Piscine & bar", text: "Une piscine à débordement face à l'océan et un bar lounge.", href: "#experiences" },
    { icon: "dining", title: "Restauration", text: "Un restaurant, le petit-déjeuner et le service en chambre.", href: "#experiences" },
    { icon: "business", title: "Séminaires", text: "Deux salles équipées, jusqu'à 250 personnes dans la grande salle.", href: "#seminaires" }
  ],

  amenities: ["pool", "rooftop", "dining", "fitness", "wifi", "shuttle", "billiard", "business", "parking"],

  eventSteps: [
    { title: "Votre demande", text: "Date, nombre de participants et type d'événement." },
    { title: "Proposition", text: "L'équipe événementielle vous propose une salle et un devis." },
    { title: "Organisation", text: "Hébergement des participants et restauration sur place." },
    { title: "Le jour J", text: "Votre événement se déroule à l'hôtel." }
  ],

  cta: {
    title: "Prêt à séjourner sur la Petite-Côte ?",
    text: "Choisissez vos dates : l'équipe de l'hôtel vous confirme la disponibilité et le tarif."
  },

  seo: {
    title: "Jëfya Hôtel · Site de démonstration",
    description: "Site de démonstration d'un hôtel fictif sur la Petite-Côte : chambres et suites, piscine à débordement, restaurant, bar lounge et salles de séminaire. Conçu par Jëfya."
  },

  demoNote: "Site de démonstration conçu par Jëfya. L'établissement, les tarifs et les coordonnées sont fictifs."
};
