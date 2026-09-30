/* =====================================================================
   CONTENU — Hôtel Résidence Khadija
   ---------------------------------------------------------------------
   Ce fichier ne contient QUE des données. L'interface (index.html) les lit.
   Pour un autre hôtel : dupliquer ce fichier et content/images.js.
   Toute information marquée `verified: false` doit être confirmée
   par l'établissement avant une mise en ligne réelle.
   ===================================================================== */
window.HOTEL = {
  name: "Hôtel Résidence Khadija",
  wordmark: { top: "Hôtel Résidence", bottom: "Khadija" },
  tagline: "Une adresse de standing à Thiès",

  location: {
    district: "Grand Standing",
    city: "Thiès",
    country: "Sénégal",
    detail: "Quartier derrière JAH OIL",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=H%C3%B4tel+R%C3%A9sidence+Khadija+Grand+Standing+Thi%C3%A8s"
  },

  contact: {
    phones: [
      { label: "Réception", display: "+221 33 989 09 09", tel: "+221339890909" },
      { label: "Mobile", display: "+221 77 766 62 84", tel: "+221777666284" }
    ],
    emails: [
      { label: "Direction & réservations", value: "direction@residenceskhadija.com" },
      { label: "Commercial & séminaires", value: "commercial@residenceskhadija.com" }
    ],
    website: "www.residenceskhadija.com",
    /* WhatsApp : numéro qui reçoit les demandes de séjour et d'événement (format international, chiffres uniquement). */
    whatsapp: { display: "+221 77 766 62 84", number: "221777666284" }
  },

  hero: {
    script: "Bienvenue à Thiès",
    eyebrow: "Grand Standing · Thiès · Sénégal",
    title: "Hôtel Résidence Khadija",
    subtitle: "Une adresse de standing à Thiès, pour les séjours d'affaires comme pour la découverte de la région."
  },

  intro: {
    eyebrow: "L'hôtel",
    title: "Au calme de Grand Standing, au cœur de la cité du rail",
    paragraphs: [
      "L'Hôtel Résidence Khadija s'est installé dans Grand Standing, le quartier résidentiel de Thiès. Il réunit sous un même toit 32 chambres et suites, deux bassins, un rooftop et trois salles de séminaire.",
      "Le voyageur d'affaires y trouve un espace de travail et des salles équipées. Le visiteur de passage y trouve une piscine, un rooftop et une table sur place, à deux pas de la ville."
    ]
  },

  /* Chiffres réels communiqués par l'hôtel — aucune statistique inventée. */
  keyFigures: [
    { value: "32", label: "chambres, dont 6 suites" },
    { value: "3", label: "salles de séminaire" },
    { value: "300", label: "places dans la grande salle" },
    { value: "2", label: "bassins extérieurs" }
  ],

  /* Chambres : aucune caractéristique technique inventée (surface, vue, literie…).
     price : tarif indicatif affiché sur le site officiel, à confirmer (verified:false). */
  rooms: [
    { id: "standard", kind: "Chambre", name: "Chambre Standard", image: "roomStandard",
      blurb: "La catégorie de référence de la résidence, pour un séjour de travail ou une escale à Thiès.",
      price: 65000, verified: false },
    { id: "superieure", kind: "Chambre", name: "Chambre Supérieure", image: "roomSuperieure",
      blurb: "Une montée en gamme par rapport à la Standard.",
      price: null },
    { id: "executive", kind: "Chambre", name: "Chambre Exécutive", image: "roomExecutive",
      blurb: "Pensée pour la clientèle professionnelle de passage à Thiès.",
      price: 60000, verified: false },
    { id: "famille", kind: "Chambre", name: "Chambre Famille", image: "roomFamille",
      blurb: "Pour voyager à plusieurs sans se séparer.",
      price: 60000, verified: false },
    { id: "suite-junior", kind: "Suite", name: "Suite Junior", image: "suiteJunior",
      blurb: "L'une des 6 suites de l'hôtel.",
      price: 75000, verified: false },
    { id: "suite-senior", kind: "Suite", name: "Suite Senior", image: "suiteSenior",
      blurb: "La suite la plus haute de la gamme.",
      price: null }
  ],
  roomsCommon: ["Ouverture des portes par carte RFID", "Wi-Fi haut débit gratuit", "Climatisation", "Service en chambre"],
  priceNote: "Tarifs indicatifs par nuitée, publiés par l'hôtel et à confirmer au moment de la demande.",
  currency: "FCFA",

  pool: {
    eyebrow: "Piscine",
    title: "Deux bassins en plein air",
    text: "La piscine extérieure compte deux bassins, avec un bar côté piscine pour les fins d'après-midi.",
    points: ["2 bassins", "Bar côté piscine", "Piscine extérieure"]
  },

  /* Aucune photo du rooftop fournie : la section met en avant les bars. */
  rooftop: {
    eyebrow: "Bars & rooftop",
    title: "Un bar au bord de la piscine, un autre sur le toit",
    text: "Cocktails, jus frais et boissons fraîches : l'hôtel compte deux bars, l'un côté piscine et l'autre sur le rooftop, pour prendre un verre au-dessus de Grand Standing à la tombée du jour."
  },

  dining: {
    eyebrow: "Restauration",
    title: "Deux restaurants, deux bars",
    text: "Deux salles de restaurant, un bar au bord de la piscine et un autre sur le rooftop. Le petit-déjeuner est servi sur place, et le service en chambre prend le relais.",
    items: [
      { value: "2", label: "salles de restaurant" },
      { value: "2", label: "bars : piscine & rooftop" },
      { value: "", label: "Petit-déjeuner" },
      { value: "", label: "Service en chambre" }
    ]
  },

  services: [
    { icon: "pool", name: "Piscine extérieure", note: "2 bassins" },
    { icon: "rooftop", name: "Rooftop", note: "Bar sur le toit" },
    { icon: "dining", name: "Restauration", note: "2 restaurants, 2 bars" },
    { icon: "fitness", name: "Salle fitness", note: "Sur place" },
    { icon: "billiard", name: "Billard", note: "Espace détente" },
    { icon: "business", name: "Business corner", note: "Espace multimédia" },
    { icon: "wifi", name: "Wi-Fi haut débit", note: "Gratuit" },
    { icon: "parking", name: "Parking", note: "Sur place" },
    { icon: "shuttle", name: "Navette", note: "Service de navette" },
    { icon: "prayer", name: "Salle de prière", note: "Sur place" },
    { icon: "roomservice", name: "Service en chambre", note: "Pendant votre séjour" },
    { icon: "rfid", name: "Accès RFID", note: "Dans toutes les chambres" }
  ],

  meetings: {
    eyebrow: "Séminaires & événements",
    title: "Trois salles pour vos réunions et vos événements",
    text: "Réunions, séminaires, conférences et réceptions : les trois salles de l'hôtel se configurent selon l'événement. L'équipe commerciale vous accompagne dans l'organisation, de l'hébergement des participants à la restauration sur place.",
    rooms: [
      { name: "Grande salle", capacity: "300", unit: "personnes max." },
      { name: "Salle moyenne", capacity: "60", unit: "personnes" },
      { name: "Salle de commission", capacity: "", unit: "Délibérations et comités restreints" }
    ],
    total: "Plus de 350 personnes peuvent être accueillies sur l'ensemble des salles.",
    formats: ["Réunions", "Séminaires", "Conférences", "Réceptions", "Délibérations", "Hébergement des participants"]
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
    { image: "barMural", cat: "Restaurant & bar" },
    { image: "suiteSenior", cat: "Chambres" },
    { image: "burger", cat: "Restaurant & bar" },
    { image: "business", cat: "Séminaires" },
    { image: "hall", cat: "Hôtel" },
    { image: "bathroom", cat: "Chambres" },
    { image: "dessert", cat: "Restaurant & bar" },
    { image: "car", cat: "Hôtel" },
    { image: "robes", cat: "Chambres" }
  ],

  /* Cartes flottantes du hero (informations réelles uniquement) */
  heroHighlights: [
    { icon: "pool", title: "Piscine extérieure", note: "2 bassins" },
    { icon: "rooftop", title: "Rooftop & bars", note: "Côté piscine et sur le toit" },
    { icon: "business", title: "3 salles de séminaire", note: "Jusqu'à 300 personnes" }
  ],
  featuredRoom: "suite-junior",

  experiences: [
    { icon: "bed", title: "Chambres & suites", text: "32 chambres, dont 6 suites, avec accès par carte RFID.", href: "#chambres" },
    { icon: "pool", title: "Piscine & bars", text: "Deux bassins, un bar côté piscine et un bar sur le rooftop.", href: "#experiences" },
    { icon: "dining", title: "Restauration", text: "Deux salles de restaurant, petit-déjeuner et service en chambre.", href: "#experiences" },
    { icon: "business", title: "Séminaires", text: "Trois salles équipées, jusqu'à 300 personnes dans la grande salle.", href: "#seminaires" }
  ],

  /* Icônes affichées dans le panneau sombre « Services » */
  amenities: ["pool", "rooftop", "dining", "fitness", "wifi", "shuttle", "billiard", "business", "parking"],

  eventSteps: [
    { title: "Votre demande", text: "Date, nombre de participants et type d'événement." },
    { title: "Proposition", text: "L'équipe commerciale vous propose une salle et un devis." },
    { title: "Organisation", text: "Hébergement des participants et restauration sur place." },
    { title: "Le jour J", text: "Votre événement se déroule à l'hôtel." }
  ],

  cta: {
    title: "Prêt à séjourner à Thiès ?",
    text: "Choisissez vos dates : l'équipe de l'hôtel vous confirme la disponibilité et le tarif."
  },

  seo: {
    title: "Hôtel Résidence Khadija · Thiès",
    description: "Hôtel à Thiès, quartier Grand Standing : 32 chambres dont 6 suites, piscine à deux bassins, rooftop, restaurants et trois salles de séminaire. Demandez vos disponibilités."
  },

  credit: "Prototype conçu par Jëfya. Contenus et tarifs à valider par l'établissement."
};
