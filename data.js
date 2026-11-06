export const categories = ["All Products", "Food Grade", "Cosmetic Grade", "Bundles", "Foodservice / B2B", "Gourmet Infusions", "Sustainable Living", "Limited Edition", "Travel & Wellness"];

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

export const getProduct = (id) => products.find((product) => product.id === id);
