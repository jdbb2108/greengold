export const categories = ["All Products", "Food Grade", "Cosmetic Grade", "Bundles", "Foodservice / B2B", "Gourmet Infusions", "Sustainable Living", "Limited Edition", "Travel & Wellness"];
export const currencies = {
  USD: { symbol: 'US$', rate: 1, label: 'USD — US dollar' },
  NZD: { symbol: 'NZ$', rate: 1.63, label: 'NZD — New Zealand dollar' },
  HUF: { symbol: 'Ft', rate: 365, label: 'HUF — Hungarian forint' }
};
// Static demo display rates only, centralised for replacement with a verified exchange-rate service.
export const convertPrice = (usd, currency) => Math.round(usd * currencies[currency].rate * (currency === 'HUF' ? 1 : 100)) / (currency === 'HUF' ? 1 : 100);

// Product names, formats, prices and descriptions are based only on the public Wix catalogue.
export const products = [
  { id: "drum-10l", badge: "Commercial B2B", name: "Wholesale Bakery & Culinary Drum", size: "10 Liters", price: 380, category: "Foodservice / B2B", icon: "◒" },
  { id: "wood-crate", badge: "Luxury Gift Set", name: "Artisan Wood Crate Tasting Collection", size: "3 x 250 ml", price: 82, category: "Bundles", icon: "▦" },
  { id: "lip-trio", badge: "Pocket Essential", name: "Intensive Avocado Lip Treatment Trio", size: "3 x 15g jars", price: 24, category: "Cosmetic Grade", icon: "◉" },
  { id: "sachets", badge: "Travel Ready", name: "On-the-Go Pocket Sachet Box", size: "20 x 10 ml single-serves", price: 32, category: "Travel & Wellness", icon: "▤" },
  { id: "reserve-500", badge: "Exclusive Reserve", name: "Single-Origin Extra Virgin Reserve", size: "Limited Harvest 500 ml", price: 54, category: "Limited Edition", icon: "◈" },
  { id: "pouch-1l", badge: "Eco Refill - Save 20%", name: "Eco-Refill Culinary Pouch", size: "1 Liter", price: 68, category: "Sustainable Living", icon: "◒" },
  { id: "cleansing-oil", badge: "Gentle Cleanse", name: "Nourishing Avocado Melt Cleansing Oil", size: "200 ml", price: 34, category: "Cosmetic Grade", icon: "◉" },
  { id: "face-serum", badge: "Skin Superfood", name: "Overnight Radiance Renewal Face Serum", size: "50 ml", price: 45, category: "Cosmetic Grade", icon: "◉" },
  { id: "chili-oil", badge: "Spicy & Bold", name: "Andean Chili & Smoked Paprika Avocado Oil", size: "250 ml", price: 28, category: "Gourmet Infusions", icon: "♨" },
  { id: "garlic-oil", badge: "Chef Special", name: "Roasted Garlic & Herb Infused Avocado Oil", size: "250 ml", price: 28, category: "Gourmet Infusions", icon: "✳" },
  { id: "master-crate", badge: "Bulk Commercial", name: "B2B Hospitality Master Crate", size: "3 x 3L Jugs", price: 295, category: "Foodservice / B2B", icon: "▦" },
  { id: "refill-case", badge: "Value Pack", name: "Gourmet Kitchen Refill Case", size: "3 x 500 ml", price: 108, category: "Bundles", icon: "▦" },
  { id: "airfryer-pack", badge: "Save 15%", name: "Air-Fryer Pantry 6-Pack", size: "6 x 200 ml Sprays", price: 110, category: "Bundles", icon: "✺" },
  { id: "hair-therapy", badge: "Organic Care", name: "Pure Avocado Hair & Scalp Therapy", size: "150 ml", price: 36, category: "Cosmetic Grade", icon: "◉" },
  { id: "bulk-3l", badge: "Chef Choice", name: "Chef’s Bulk Reserve", size: "3 Liters", price: 115, category: "Foodservice / B2B", icon: "◒" },
  { id: "tasting-250", badge: "Entry Choice", name: "Culinary Gold Tasting Size", size: "250 ml", price: 26, category: "Food Grade", icon: "◈" },
  { id: "discovery-duo", badge: "Popular Gift", name: "Green Gold Discovery Duo Pack", size: "", price: 65, category: "Bundles", icon: "▦" },
  { id: "spray-200", badge: "New Arrival", name: "Green Gold Avocado Cooking Spray", size: "200 ml", price: 22, category: "Food Grade", icon: "✺" },
  { id: "radiance-elixir", badge: "Clean Beauty", name: "Radiance Elixir Face & Body", size: "100 ml", price: 32, category: "Cosmetic Grade", icon: "◉" },
  { id: "extra-virgin-500", badge: "Best Seller", name: "Culinary Gold Extra Virgin", size: "500 ml", price: 42, category: "Food Grade", icon: "◈", description: "100% pure Colombian cold-pressed avocado oil from Antioquia. Features a high smoke point of 260°C (500°F) and nutrient-rich oleic acid. Certified MPI compliant." }
];

const wixImages = [
'8728e3_94f4c3156b84405497c26da59800371b~mv2.jpg','8728e3_1b974f41b8d641e28e93463c4f50712c~mv2.jpg','8728e3_f5f983db1db34eb1b33bd057b44a2908~mv2.jpg','8728e3_c91e7931c43a4a7eba3ded1f97cede44~mv2.jpg','8728e3_c2f490b4c20549898e3fe142187dfefe~mv2.jpg','8728e3_b9752058c95b43a6bfebf1d27f6aa322~mv2.jpg','8728e3_d65d458a097e4e0080028c12f1fc25e9~mv2.jpg','8728e3_993e4a417000416f814bf093d872c565~mv2.jpg','8728e3_5a64648f283e45d8b521c116dd7e8d27~mv2.jpg','8728e3_b726d235603e4649b6be3a389572406e~mv2.jpg','8728e3_60866df9d7e14066a3a73bb56a6d1d1e~mv2.jpg','8728e3_eceadc276a6b4be0959e559041441a81~mv2.jpg','8728e3_a4d0cc3c638d4b7fa20fee48567479c0~mv2.jpg','8728e3_21d2315838c640bd80c376487dc379c9~mv2.jpg','8728e3_3fcffd99add6453ca809b384fbab54ef~mv2.jpg','8728e3_67abfceb59f1446ca17aa06ad041f61b~mv2.jpg','8728e3_7e9fe4e47a50423a8496d565642cc98c~mv2.jpg','8728e3_9e454324d77445e188eaa2ac1c64ed25~mv2.jpg','8728e3_5612d6d176b64c318c8fcfab40669a39~mv2.jpg','8728e3_cc0773c3b4d64afda87a8ba6d94371d5~mv2.jpg'
];
products.forEach((product, index) => { product.image = `https://static.wixstatic.com/media/${wixImages[index]}/v1/fill/w_900,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/${wixImages[index]}`; });

export const getProduct = (id) => products.find((product) => product.id === id);
