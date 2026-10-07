export interface BiryaniFeature {
  id: string;
  name: string;
  portion: string;
  description: string;
  badge: string;
  image: string;
}

export interface FoodFeature {
  id: string;
  name: string;
  category: string;
  description: string;
  tag: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  tag: 'THE FOOD' | 'THE SPACE' | 'THE PAAKASHALA' | 'NIZAMABAD';
  image: string;
  caption: string;
}

export const CAFE_INFO = {
  name: "SOUTH CAFE",
  subname: "THE PAAKASHALA",
  tagline: "A little taste of the South, right here in Nizamabad.",
  foundedYear: 2026,
  address: "House No. 1-1, B4/F1, Hanuman Junction, Vinayak Nagar, Nizamabad, Telangana 503003",
  phone: "+91 99666 99735",
  phoneDisplay: "+91 99666 99735",
  hours: "11:00 AM – 10:30 PM",
  days: "Open Daily",
  rating: "5.0",
  reviewCount: "7 Verified Visits",
  swiggyUrl: "https://www.swiggy.com/city/nizamabad/south-cafe-the-paakashala-puhlong-x-road-rest1410216",
  zomatoUrl: "https://www.zomato.com/nizamabad/south-cafe-the-paakashala-nizamabad-locality/order",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=South+Cafe+The+Paakashala+Vinayak+Nagar+Nizamabad",
};

/**
 * SOURCE OF TRUTH ASSET MAP
 * Real photographs representing the actual South Cafe — The Paakashala.
 * Zero fictional luxury interiors. Strictly authentic documentary assets.
 */
export const ASSETS = {
  officialLogo: "/src/assets/images/south_cafe_official_logo.svg",
  heroBiryani: "/src/assets/images/biryani_hero_1791390348001.jpg",
  vegBiryani: "/src/assets/images/veg_biryani_1791390462260.jpg",
  eggBiryani: "/src/assets/images/egg_biryani_authentic_1791391622418.jpg",
  masalaDosa: "/src/assets/images/masala_dosa_1791390420844.jpg",
  uttapamSet: "/src/assets/images/uttapam_authentic_1791391657318.jpg",
  pavBhaji: "/src/assets/images/pav_bhaji_1791390435706.jpg",
  papdiChaat: "/src/assets/images/chaat_papdi_authentic_1791391645804.jpg",
  shahiTukda: "/src/assets/images/shahi_tukda_authentic_1791391633313.jpg",
};

/**
 * Editorial Biryani Collection (each entry uses a distinct photograph)
 */
export const BIRYANI_COLLECTION: BiryaniFeature[] = [
  {
    id: "chicken-dum",
    name: "Chicken Dum Biryani",
    portion: "Clay Handi Slow-Cooked",
    description: "Layered with aromatic long-grain basmati, marinated country-style chicken pieces, saffron-infused ghee, crispy caramelized birista onions, and mint leaves.",
    badge: "House Specialty",
    image: ASSETS.heroBiryani,
  },
  {
    id: "veg-dum",
    name: "Royal Veg Dum Biryani",
    portion: "Fragrant Saffron Basmati",
    description: "Long-grain basmati cooked with roasted golden paneer cubes, whole cashews, fresh garden peas, mint sprigs, and toasted South Indian whole spices.",
    badge: "Vegetarian Dum",
    image: ASSETS.vegBiryani,
  },
  {
    id: "egg-bagara",
    name: "Egg Biryani / Bagara Rice",
    portion: "Classic Serving",
    description: "Richly spiced Telangana bagara basmati topped with hard-boiled egg halves, golden fried onions, whole cashews, and aromatic mint.",
    badge: "Comfort Favorite",
    image: ASSETS.eggBiryani,
  },
];

/**
 * Beyond Biryani: South Indian Tiffins, Evening Street Chaat & Sweet Endings
 * Each entry uses a UNIQUE photograph. Zero repetitions.
 */
export const FOOD_FEATURES: FoodFeature[] = [
  {
    id: "masala-dosa",
    name: "Crispy Masala Dosa",
    category: "South Indian Tiffins",
    description: "Fermented crepe griddled golden and crisp, rolled with mustard-tempered potato masala filling, served on banana leaf with fresh coconut and red tomato chutneys.",
    tag: "Morning & Evening",
    image: ASSETS.masalaDosa,
  },
  {
    id: "uttapam-set",
    name: "Vegetable Uttapam / Set Dosa",
    category: "South Indian Tiffins",
    description: "Soft, thick griddled dosas served on a banana leaf with steaming piping-hot sambar, spicy red chutney, and fresh coconut chutney.",
    tag: "Traditional Tiffin",
    image: ASSETS.uttapamSet,
  },
  {
    id: "pav-bhaji",
    name: "Special Butter Pav Bhaji",
    category: "Quick Bites",
    description: "Slow-simmered vegetable bhaji infused with aromatic spices and topped with a melting cube of butter, paired with golden toasted buttered pav buns.",
    tag: "Street Classic",
    image: ASSETS.pavBhaji,
  },
  {
    id: "papdi-chaat",
    name: "Dahi Papdi Chaat",
    category: "Quick Bites & Chaat",
    description: "Crisp semolina wafers loaded with diced potatoes, whisked sweet dahi, tangy tamarind drizzle, spicy green chutney, pomegranate seeds, and fine sev.",
    tag: "Evening Chaat",
    image: ASSETS.papdiChaat,
  },
  {
    id: "shahi-tukda",
    name: "Shahi Tukda Bread Halwa",
    category: "Dessert & Sweets",
    description: "Ghee-crisped bread triangles immersed in fragrant saffron-infused rabri custard, finished with whole cashews, pistachios, and fresh mint.",
    tag: "Sweet Finish",
    image: ASSETS.shahiTukda,
  },
];

/**
 * Gallery Showcase: Real food presentations
 */
export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "gal-shahi",
    title: "Shahi Tukda Bread Halwa",
    tag: "THE FOOD",
    image: ASSETS.shahiTukda,
    caption: "Golden fried bread steeped in rich saffron rabri custard with whole cashews and pistachios.",
  },
  {
    id: "gal-chaat",
    title: "Fresh Street Dahi Papdi Chaat",
    tag: "THE FOOD",
    image: ASSETS.papdiChaat,
    caption: "Crispy semolina wafers topped with diced potatoes, whisked sweet dahi, tangy tamarind, and fine sev.",
  },
];
