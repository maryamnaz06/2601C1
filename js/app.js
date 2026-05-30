const products = [
 
  // ==========================================
  // SAMSUNG PRODUCTS (7)
  // ==========================================
  {
    id: "samsung-windfree",
    name: "WindFree Elite",
    brand: "Samsung",
    image: "Image/Sumsung/Sumsung-product1.png",
    detailsPage: "docs/samsung-windfree-elite.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    text: "Smart AI",
    wifi: "Yes",
    filter: "HEPA + Deodorizer",
    warranty: "5 Years",
    price: "PKR 145,000",
    noise: "19 dB",
    cooling: "5,200 W",
    description: "WindFree™ technology with 23,000 micro air holes. Zero direct wind. Maximum comfort."
  },
  {
    id: "samsung-classic",
    name: "Wind-Free Classic",
    brand: "Samsung",
    image: "Image/Sumsung/SM-8-removebg-preview.png",
    detailsPage: "docs/samsung-windfree-elite.html",
    capacity: "1 Ton",
    star: "3-Star",
    tech: "Wi-Fi",
    wifi: "Yes",
    filter: "Anti-Bacterial",
    warranty: "3 Years",
    price: "PKR 100,000",
    noise: "22 dB",
    cooling: "3,500 W",
    description: "Budget-friendly Samsung quality with essential smart features and Wi-Fi control."
  },
  {
    id: "samsung-t-series",
    name: "T-Series Inverter",
    brand: "Samsung",
    image: "Image/Sumsung/SM-3.webp",
    detailsPage: "docs/samsung-windfree-elite.html",
    capacity: "2 Ton",
    star: "4-Star",
    tech: "Fast Cooling",
    wifi: "No",
    filter: "HD Filter",
    warranty: "5 Years",
    price: "PKR 185,000",
    noise: "24 dB",
    cooling: "6,800 W",
    description: "Heavy-duty performance designed to cool large living rooms instantly during peak summers."
  },
  {
    id: "samsung-geo-pure",
    name: "Geo Pure Inverter",
    brand: "Samsung",
    image: "Image/Sumsung/SM-5.webp",
    detailsPage: "docs/samsung-windfree-elite.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "PM 1.0 Filter",
    wifi: "Yes",
    filter: "Electrostatic Filter",
    warranty: "10 Years",
    price: "PKR 160,000",
    noise: "20 dB",
    cooling: "5,300 W",
    description: "Advanced air purification system that captures ultra-fine dust and sterilizes bacteria."
  },
  {
    id: "samsung-max-cool",
    name: "MaxCool Eco",
    brand: "Samsung",
    image: "Image/Sumsung/Sumsung-product2.png",
    detailsPage: "docs/samsung-windfree-elite.html",
    capacity: "1 Ton",
    star: "3-Star",
    tech: "Triple Protector",
    wifi: "No",
    filter: "Dust Filter",
    warranty: "3 Years",
    price: "PKR 105,000",
    noise: "23 dB",
    cooling: "3,600 W",
    description: "Equipped with built-in voltage stabilizer protection against sudden power surges."
  },
  {
    id: "samsung-crystal",
    name: "Crystal Inverter Pro",
    brand: "Samsung",
    image: "Image/Sumsung/SM-7.webp",
    detailsPage: "docs/samsung-windfree-elite.html",
    capacity: "1.5 Ton",
    star: "4-Star",
    tech: "Digital Inverter",
    wifi: "Yes",
    filter: "Silver Ion",
    warranty: "5 Years",
    price: "PKR 138,000",
    noise: "21 dB",
    cooling: "5,100 W",
    description: "Saves up to 73% energy with Digital Inverter Boost technology and neodymium magnets."
  },
  {
    id: "samsung-ultra-heavy",
    name: "Ultra Heavy 2.5",
    brand: "Samsung",
    image: "Image/Sumsung/SM-9.webp",
    detailsPage: "docs/samsung-windfree-elite.html",
    capacity: "2.5 Ton",
    star: "5-Star",
    tech: "Twin Rotary",
    wifi: "Yes",
    filter: "HEPA Filter",
    warranty: "5 Years",
    price: "PKR 220,000",
    noise: "26 dB",
    cooling: "8,200 W",
    description: "Commercial grade cooling performance adapted perfectly for premium corporate spaces."
  },

  // ==========================================
  // LG PRODUCTS (7)
  // ==========================================
  {
    id: "lg-dual",
    name: "Dual Inverter Pro",
    brand: "LG",
    image: "Image/LG/LG-1.webp",
    detailsPage: "docs/lg-dual-inverter-pro.html",
    capacity: "2 Ton",
    star: "5-Star",
    tech: "Dual Inverter",
    wifi: "Yes",
    filter: "Anti-Virus + HD",
    warranty: "10 Years",
    price: "PKR 178,000",
    noise: "21 dB",
    cooling: "6,700 W",
    description: "LG's Dual Inverter compressor saves up to 70% energy with high-speed stability."
  },
  {
    id: "lg-artcool",
    name: "Artcool Mirror Black",
    brand: "LG",
    image: "Image/LG/LG-2.webp",
    detailsPage: "docs/lg-dual-inverter-pro.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "ThinQ Wi-Fi",
    wifi: "Yes",
    filter: "Plasmaster Ionizer",
    warranty: "10 Years",
    price: "PKR 185,000",
    noise: "19 dB",
    cooling: "5,250 W",
    description: "Premium black mirror glass design with smart ThinQ remote control app functionality."
  },
  {
    id: "lg-eco-plus",
    name: "Eco Plus Inverter",
    brand: "LG",
    image: "Image/LG/LG-3.webp",
    detailsPage: "docs/lg-dual-inverter-pro.html",
    capacity: "1 Ton",
    star: "3-Star",
    tech: "Active Energy Control",
    wifi: "No",
    filter: "Dual Protection",
    warranty: "5 Years",
    price: "PKR 112,000",
    noise: "22 dB",
    cooling: "3,520 W",
    description: "Allows you to adjust energy consumption levels across 4 distinct functional stages."
  },
  {
    id: "lg-super-cool",
    name: "SuperCool Hyper",
    brand: "LG",
    image: "Image/LG/LG-4.webp",
    detailsPage: "docs/lg-dual-inverter-pro.html",
    capacity: "1.5 Ton",
    star: "4-Star",
    tech: "Monsoon Comfort",
    wifi: "No",
    filter: "Micro Dust Filter",
    warranty: "5 Years",
    price: "PKR 142,000",
    noise: "23 dB",
    cooling: "5,100 W",
    description: "Perfect choice for humid climates, managing ambient moisture levels automatically."
  },
  {
    id: "lg-smart-fit",
    name: "SmartFit Compact",
    brand: "LG",
    image: "Image/LG/LG-5-removebg-preview.png",
    detailsPage: "docs/lg-dual-inverter-pro.html",
    capacity: "1 Ton",
    star: "4-Star",
    tech: "Auto Cleaning",
    wifi: "Yes",
    filter: "Allergy Filter",
    warranty: "10 Years",
    price: "PKR 125,000",
    noise: "21 dB",
    cooling: "3,550 W",
    description: "Prevents bacteria formation inside the unit by drying the heat exchanger automatically."
  },
  {
    id: "lg-thunder-bolt",
    name: "ThunderBolt 2Ton",
    brand: "LG",
    image: "Image/LG/LG-product.png",
    detailsPage: "docs/lg-dual-inverter-pro.html",
    capacity: "2 Ton",
    star: "5-Star",
    tech: "4-Way Swing",
    wifi: "Yes",
    filter: "PM 2.5 Filter",
    warranty: "10 Years",
    price: "PKR 195,000",
    noise: "25 dB",
    cooling: "7,000 W",
    description: "Delivers rapid airflow across all corners of your large room via multi-directional adjustments."
  },
  {
    id: "lg-window-smart",
    name: "Dual Inverter Window",
    brand: "LG",
    image: "Image/LG/LG-7-removebg-preview.png",
    detailsPage: "docs/lg-dual-inverter-pro.html",
    capacity: "1.5 Ton",
    star: "3-Star",
    tech: "Low Noise Window",
    wifi: "Yes",
    filter: "Washable Mesh",
    warranty: "5 Years",
    price: "PKR 118,000",
    noise: "32 dB",
    cooling: "5,000 W",
    description: "High performance window system utilizing specialized dynamic dual rotary compressors."
  },

  // ==========================================
  // DAIKIN PRODUCTS (7)
  // ==========================================
  {
    id: "daikin-streamer",
    name: "Streamer X-Series",
    brand: "Daikin",
    image: "Image/Daikin/DK-1-removebg-preview.png",
    detailsPage: "docs/daikin-streamer.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Purifier",
    wifi: "Yes",
    filter: "Streamer Purifier",
    warranty: "5 Years",
    price: "PKR 195,000",
    noise: "20 dB",
    cooling: "5,200 W",
    description: "Daikin Streamer technology deactivates 99.9% viruses and bacteria while cooling."
  },
  {
    id: "daikin-ftkf",
    name: "FTKF Smile Series",
    brand: "Daikin",
    image: "Image/Daikin/DK-2-removebg-preview.png",
    detailsPage: "docs/daikin-streamer.html",
    capacity: "1 Ton",
    star: "5-Star",
    tech: "Econo Mode",
    wifi: "No",
    filter: "Titanium Apatite",
    warranty: "3 Years",
    price: "PKR 130,000",
    noise: "19 dB",
    cooling: "3,400 W",
    description: "Extremely efficient operations that drastically minimize overall electricity usage safely."
  },
  {
    id: "daikin-coanda",
    name: "Coanda Airflow Pro",
    brand: "Daikin",
    image: "Image/Daikin/DK-3-removebg-preview.png",
    detailsPage: "docs/daikin-streamer.html",
    capacity: "1.5 Ton",
    star: "4-Star",
    tech: "Coanda Panel",
    wifi: "No",
    filter: "PM 2.5 Filter",
    warranty: "5 Years",
    price: "PKR 165,000",
    noise: "22 dB",
    cooling: "5,150 W",
    description: "Circulates cool air along the ceiling to prevent annoying cold drafts on people directly."
  },
  {
    id: "daikin-max-t",
    name: "Max-T Heavy Duty",
    brand: "Daikin",
    image: "Image/Daikin/DK-9-removebg-preview.png",
    detailsPage: "docs/daikin-streamer.html",
    capacity: "2 Ton",
    star: "5-Star",
    tech: "Neo Swing Inverter",
    wifi: "Yes",
    filter: "Deodorizing Filter",
    warranty: "5 Years",
    price: "PKR 225,000",
    noise: "24 dB",
    cooling: "6,900 W",
    description: "Engineered specifically to survive extreme ambient heatwaves climbing all the way up to 54°C."
  },
  {
    id: "daikin-eco-lite",
    name: "EcoLite Non-Inverter",
    brand: "Daikin",
    image: "Image/Daikin/DK-5-removebg-preview.png",
    detailsPage: "docs/daikin-streamer.html",
    capacity: "1.5 Ton",
    star: "3-Star",
    tech: "Power Chill",
    wifi: "No",
    filter: "Saran Net",
    warranty: "1 Year",
    price: "PKR 115,000",
    noise: "26 dB",
    cooling: "5,000 W",
    description: "Classic high-airflow non-inverter unit delivering reliable cooling output seamlessly."
  },
  {
    id: "daikin-urnus",
    name: "Urusara 7 Premium",
    brand: "Daikin",
    image: "Image/Daikin/DK-4.webp",
    detailsPage: "docs/daikin-streamer.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Humidifier Sync",
    wifi: "Yes",
    filter: "Self-Cleaning Thermal",
    warranty: "10 Years",
    price: "PKR 260,000",
    noise: "18 dB",
    cooling: "5,300 W",
    description: "Imported Japanese model featuring advanced internal automated temperature-humidity balancing."
  },
  {
    id: "daikin-compact",
    name: "Compact Lite 1Ton",
    brand: "Daikin",
    image: "Image/Daikin/DK-8-removebg-preview.png",
    detailsPage: "docs/daikin-streamer.html",
    capacity: "1 Ton",
    star: "4-Star",
    tech: "Intelligent Eye",
    wifi: "Yes",
    filter: "Ag-Ion Filter",
    warranty: "3 Years",
    price: "PKR 140,000",
    noise: "20 dB",
    cooling: "3,500 W",
    description: "Features dynamic infrared sensors that drop power automatically if a room stays empty."
  },

  // ==========================================
  // WHIRLPOOL PRODUCTS (6)
  // ==========================================
  {
    id: "whirlpool-magicool",
    name: "Magicool Pro",
    brand: "Whirlpool",
    image: "Image/Whirlpool/WHP-1.webp",
    detailsPage: "docs/whirlpool-magicool.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Auto-Dry",
    wifi: "Yes",
    filter: "Auto-Dry + Purifier",
    warranty: "5 Years",
    price: "PKR 125,000",
    noise: "24 dB",
    cooling: "5,100 W",
    description: "6th Sense technology auto-adjusts cooling and saves power intelligently."
  },
  {
    id: "whirlpool-3d-cool",
    name: "3D Cool Xtreme",
    brand: "Whirlpool",
    image: "Image/Whirlpool/WHP-2.webp",
    detailsPage: "docs/whirlpool-magicool.html",
    capacity: "1.5 Ton",
    star: "4-Star",
    tech: "3D Vent Intake",
    wifi: "No",
    filter: "Carbon Filter",
    warranty: "3 Years",
    price: "PKR 118,000",
    noise: "23 dB",
    cooling: "5,050 W",
    description: "Unique three-dimensional intake vents remove hot room air much faster than regular ACs."
  },
  {
    id: "whirlpool-supreme",
    name: "Supreme Inverter 2Ton",
    brand: "Whirlpool",
    image: "Image/Whirlpool/WHP-3.webp",
    detailsPage: "docs/whirlpool-magicool.html",
    capacity: "2 Ton",
    star: "5-Star",
    tech: "Intellicompressor",
    wifi: "Yes",
    filter: "Catechin Filter",
    warranty: "5 Years",
    price: "PKR 165,000",
    noise: "25 dB",
    cooling: "6,600 W",
    description: "Premium large format luxury design providing reliable energy adjustments based on space loads."
  },
  {
    id: "whirlpool-eco",
    name: "EcoFresh Smart",
    brand: "Whirlpool",
    image: "Image/Whirlpool/WHp-7.webp",
    detailsPage: "docs/whirlpool-magicool.html",
    capacity: "1 Ton",
    star: "3-Star",
    tech: "Turbo Cool",
    wifi: "No",
    filter: "Anti-Dust Net",
    warranty: "2 Years",
    price: "PKR 88,000",
    noise: "24 dB",
    cooling: "3,450 W",
    description: "Affordable and robust inverter option built for efficient cooling in small office chambers."
  },
  {
    id: "whirlpool-elite-four",
    name: "Elite 4-in-1 Flex",
    brand: "Whirlpool",
    image: "Image/Whirlpool/WHP-5.webp",
    detailsPage: "docs/whirlpool-magicool.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Convertible 4-in-1",
    wifi: "Yes",
    filter: "HEPA Shield",
    warranty: "5 Years",
    price: "PKR 135,000",
    noise: "21 dB",
    cooling: "5,200 W",
    description: "Convert your operational cooling capacities cleanly between 0.9, 1.1, 1.3, or 1.5 Ton capacities."
  },
  {
    id: "whirlpool-frost",
    name: "FrostGuard Comfort",
    brand: "Whirlpool",
    image: "Image/Whirlpool/WHP-6.webp",
    detailsPage: "docs/whirlpool-magicool.html",
    capacity: "1 Ton",
    star: "4-Star",
    tech: "Smart De-frost",
    wifi: "No",
    filter: "Antibacterial",
    warranty: "3 Years",
    price: "PKR 98,000",
    noise: "22 dB",
    cooling: "3,500 W",
    description: "Advanced internal sensors prevent standard indoor coil icing over long continuous runtimes."
  },

  // ==========================================
  // HAIER PRODUCTS (7)
  // ==========================================
  {
    id: "haier-cleancool",
    name: "CleanCool Ultra",
    brand: "Haier",
    image: "Image/haier/HR-1.webp",
    detailsPage: "docs/haier-cleancool.html",
    capacity: "1 Ton",
    star: "3-Star",
    tech: "Eco Mode",
    wifi: "No",
    filter: "Self-Cleaning Filter",
    warranty: "3 Years",
    price: "PKR 75,000",
    noise: "26 dB",
    cooling: "3,400 W",
    description: "Self-cleaning filter with eco-mode. Affordable excellence for small rooms."
  },
  {
    id: "haier-puri-inverter",
    name: "PuriInverter Smart",
    brand: "Haier",
    image: "Image/haier/HR-8.webp",
    detailsPage: "docs/haier-cleancool.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "IFD Air Purifier",
    wifi: "Yes",
    filter: "IFD Filter Module",
    warranty: "10 Years",
    price: "PKR 148,000",
    noise: "20 dB",
    cooling: "5,250 W",
    description: "Superb dual combo offering hospital grade air-purification and heavy inverter cooling outputs."
  },
  {
    id: "haier-hsu-smart",
    name: "Smart Inverter HSU",
    brand: "Haier",
    image: "Image/haier/HR-9.webp",
    detailsPage: "docs/haier-cleancool.html",
    capacity: "1.5 Ton",
    star: "4-Star",
    tech: "Haier Smart App",
    wifi: "Yes",
    filter: "Anti-Mold Net",
    warranty: "5 Years",
    price: "PKR 132,000",
    noise: "22 dB",
    cooling: "5,100 W",
    description: "Control your operations via simple voice control compatibility with Alexa and Google Home."
  },
  {
    id: "haier-hyper",
    name: "Hyper T3 Inverter",
    brand: "Haier",
    image: "Image/haier/HR-4.webp",
    detailsPage: "docs/haier-cleancool.html",
    capacity: "2 Ton",
    star: "5-Star",
    tech: "T3 Compressor",
    wifi: "No",
    filter: "Dust Defense",
    warranty: "5 Years",
    price: "PKR 185,000",
    noise: "25 dB",
    cooling: "7,100 W",
    description: "Equipped with hyper structural T3 engineering to maintain full structural cooling at 50°C."
  },
  {
    id: "haier-pearl",
    name: "Pearl Inverter Eco",
    brand: "Haier",
    image: "Image/haier/fsqfddqd.png",
    detailsPage: "docs/haier-cleancool.html",
    capacity: "1 Ton",
    star: "4-Star",
    tech: "Upsurge Flow",
    wifi: "Yes",
    filter: "UVC Sterilization",
    warranty: "5 Years",
    price: "PKR 105,000",
    noise: "21 dB",
    cooling: "3,600 W",
    description: "Features custom built-in UV-C LEDs that neutralize atmospheric pathogens safely."
  },
  {
    id: "haier-marvel",
    name: "Marvel Split 1.5Ton",
    brand: "Haier",
    image: "Image/haier/HR-6.webp",
    detailsPage: "docs/haier-cleancool.html",
    capacity: "1.5 Ton",
    star: "3-Star",
    tech: "Turbo Airflow",
    wifi: "No",
    filter: "Standard Mesh",
    warranty: "3 Years",
    price: "PKR 118,000",
    noise: "24 dB",
    cooling: "5,000 W",
    description: "Reliable traditional non-purifier model built strictly for long stable lifespans."
  },
  {
    id: "haier-titan",
    name: "Titan Heavy 2.5Ton",
    brand: "Haier",
    image: "Image/haier/HR-7.webp",
    detailsPage: "docs/haier-cleancool.html",
    capacity: "2.5 Ton",
    star: "5-Star",
    tech: "Long Distance Throw",
    wifi: "Yes",
    filter: "High Density HD",
    warranty: "5 Years",
    price: "PKR 235,000",
    noise: "28 dB",
    cooling: "8,500 W",
    description: "Features massive optimized structural blowers throwing cold air out up to 50 feet away."
  },

  // ==========================================
  // GREE PRODUCTS (6)
  // ==========================================
  {
    id: "gree-fairy",
    name: "Fairy Series",
    brand: "Gree",
    image: "Image/Gree/GREE-8-removebg-preview.png",
    detailsPage: "docs/gree-fairy.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Heat+Cool",
    wifi: "No",
    filter: "Dust Filter",
    warranty: "3 Years",
    price: "PKR 85,000",
    noise: "25 dB",
    cooling: "5,000 W",
    description: "Heat and cool in one unit. Best value for money with turbo cooling mode."
  },
  {
    id: "gree-pular",
    name: "Pular Inverter Smart",
    brand: "Gree",
    image: "Image/Gree/GREE-9-removebg-preview.png",
    detailsPage: "docs/gree-fairy.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "G-10 Inverter",
    wifi: "Yes",
    filter: "Cold Plasma Filter",
    warranty: "5 Years",
    price: "PKR 144,000",
    noise: "21 dB",
    cooling: "5,280 W",
    description: "Flagship G-10 inverter system that dials back runtime consumption down to ultra-low levels."
  },
  {
    id: "gree-soybean",
    name: "Soyal Premium AI",
    brand: "Gree",
    image: "Image/Gree/GREE-4-removebg-preview.png",
    detailsPage: "docs/gree-fairy.html",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Thermal Sensor Eye",
    wifi: "Yes",
    filter: "Biological Sterilization",
    warranty: "10 Years",
    price: "PKR 190,000",
    noise: "18 dB",
    cooling: "5,350 W",
    description: "Ultra luxury platform with direct/indirect tracking airflow features via localized sensors."
  },
  {
    id: "gree-g10-one",
    name: "G10 Eco 1Ton",
    brand: "Gree",
    image: "Image/Gree/GREE-5-removebg-preview.png",
    detailsPage: "docs/gree-fairy.html",
    capacity: "1 Ton",
    star: "4-Star",
    tech: "Low Freq Operation",
    wifi: "No",
    filter: "Catechin Plus",
    warranty: "3 Years",
    price: "PKR 105,000",
    noise: "22 dB",
    cooling: "3,510 W",
    description: "Maintains exact room temperatures stably without stopping and starting the compressor."
  },
  {
    id: "gree-viola",
    name: "Viola Regular Split",
    brand: "Gree",
    image: "Image/Gree/GREE-6-removebg-preview.png",
    detailsPage: "docs/gree-fairy.html",
    capacity: "1.5 Ton",
    star: "3-Star",
    tech: "Golden Fin Condenser",
    wifi: "No",
    filter: "Anti-Bacterial Mesh",
    warranty: "2 Years",
    price: "PKR 110,000",
    noise: "24 dB",
    cooling: "4,950 W",
    description: "Features premium anti-corrosive coatings that protect internal elements from rust."
  },
  {
    id: "gree-hyper-two",
    name: "Hyper Force 2Ton",
    brand: "Gree",
    image: "Image/Gree/GREE-7-removebg-preview.png",
    detailsPage: "docs/gree-fairy.html",
    capacity: "2 Ton",
    star: "5-Star",
    tech: "Dual Stage Turbo",
    wifi: "Yes",
    filter: "Multifunctional Filter",
    warranty: "5 Years",
    price: "PKR 188,000",
    noise: "26 dB",
    cooling: "7,200 W",
    description: "Designed strictly for instant relief in open concept floorplans and large drawing rooms."
  }
];



function displayProducts() {
  const productGrid = document.getElementById("productGrid");

  if (!productGrid) return;

  productGrid.innerHTML = "";




  products.forEach(product => {

    productGrid.innerHTML += `

      <div class="col-md-6 col-lg-4 product-item" data-brand="${product.brand.toLowerCase()}">

        <div class="product-card">

          <div class="product-brand-tag">
            ${product.brand}
          </div>

          <div class="product-visual">

            <img src="${product.image}" class="card-img" alt="${product.name}">

            <div class="product-glow"></div>

          </div>

          <div class="product-info">

            <h5>${product.name}</h5>

            <p class="product-specs">
              <i class="bi bi-snow2"></i> ${product.capacity}
              &nbsp;
              <i class="bi bi-lightning"></i> ${product.star}
              &nbsp;
              <i class="bi bi-cpu"></i> ${product.tech}
            </p>

            <p class="product-desc">
              ${product.description}
            </p>

            <div class="d-flex justify-content-between align-items-center mt-3">

              <span class="product-price">
                ${product.price}
              </span>

              <a href="${product.detailsPage}"
                 class="btn btn-sm btn-glow-sm"
                 target="_blank">

                Details
                <i class="bi bi-file-text"></i>

              </a>

            </div>

            <div class="d-flex justify-content-between align-items-center mt-3 gap-3">

             <button
  class="btn btn-info w-100"
  onclick="addToCart('${product.id}')">

  Add to Cart

</button>

             

            </div>

          </div>

        </div>

      </div>
    `;
  });
}

if (document.getElementById("productGrid")) {
  displayProducts();
}



// ---- Compare Fields Labels ----
const compareFields = [
  { key: "brand", label: "Brand" },
  { key: "capacity", label: "Capacity" },
  { key: "star", label: "Energy Rating" },
  { key: "tech", label: "Technology" },
  { key: "wifi", label: "Wi-Fi Control" },
  { key: "filter", label: "Air Filter" },
  { key: "cooling", label: "Cooling Power" },
  { key: "noise", label: "Noise Level" },
  { key: "warranty", label: "Warranty" },
  { key: "price", label: "Price" }
];

// =====================
// 1. BRAND FILTER
// =====================
function initBrandFilter() {
  const btns = document.querySelectorAll('#brandFilters .btn-brand');
  const productItems = document.querySelectorAll('.product-item');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const brand = btn.getAttribute('data-brand');

      // Filter products
      let visibleCount = 0;
      productItems.forEach(item => {
        const itemBrand = item.getAttribute('data-brand');
        if (brand === 'all' || itemBrand === brand) {
          item.classList.remove('hidden');
          visibleCount++;
        } else {
          item.classList.add('hidden');
        }
      });

      // Show "no products" if none visible
      const noMsg = document.getElementById('noProducts');
      if (noMsg) noMsg.classList.toggle('d-none', visibleCount > 0);
    });
  });

  // Brand logo cards also filter
  document.querySelectorAll('.brand-card-wrap').forEach(card => {
    card.addEventListener('click', () => {
      const brand = card.getAttribute('data-brand');
      // Activate the filter button
      btns.forEach(b => {
        if (b.getAttribute('data-brand') === brand) b.click();
      });
      // Scroll to products
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ==========================================
// DYNAMICALLY POPULATE COMPARE DROPDOWNS
// ==========================================
function populateCompareDropdowns() {
  const selectA = document.getElementById("compareA");
  const selectB = document.getElementById("compareB");

  // Agar page par dropdowns missing hain, to execution ruk jaye
  if (!selectA || !selectB) return;

  // Initial placeholder option
  let optionsHTML = '<option value="">-- Select Product --</option>';
  
  // Array me se loop chala kar options append karein
  products.forEach(product => {
    optionsHTML += `<option value="${product.id}">${product.brand} - ${product.name} (${product.capacity})</option>`;
  });

  // Dono dropdowns ke innerHTML ko update karein
  selectA.innerHTML = optionsHTML;
  selectB.innerHTML = optionsHTML;
}

// ==========================================
// RUN THE COMPARE LOGIC AND SHOW TABLE
// ==========================================
function compareProducts() {
  // Dropdowns ki selected values uthayein
  const keyA = document.getElementById('compareA').value;
  const keyB = document.getElementById('compareB').value;

  // Validation 1: Dono select hona zaroori hain
  if (!keyA || !keyB) {
    alert('Please select two products to compare!');
    return;
  }
  
  // Validation 2: Same product compare nahi ho sakta
  if (keyA === keyB) {
    alert('Please select two different products!');
    return;
  }

  // Global 'products' array me se specific items ko filter karein
  const pA = products.find(p => p.id === keyA);
  const pB = products.find(p => p.id === keyB);

  // Check karein agar database/array me product na mile
  if (!pA || !pB) {
    alert('Selected product data not found!');
    return;
  }

  // Table header headers change karein takay actual Name show ho
  document.getElementById('colA').textContent = pA.name;
  document.getElementById('colB').textContent = pB.name;

  // Table Body clear karein purani search se
  const tbody = document.getElementById('compareBody');
  tbody.innerHTML = '';

  // compareFields array se rows render karein
  compareFields.forEach(f => {
    const tr = document.createElement('tr');
    
    // Agar object me property missing ho to 'N/A' display hoga
    const valA = pA[f.key] !== undefined ? pA[f.key] : 'N/A';
    const valB = pB[f.key] !== undefined ? pB[f.key] : 'N/A';

    tr.innerHTML = `
      <td class="fw-bold">${f.label}</td>
      <td>${valA}</td>
      <td>${valB}</td>
    `;
    tbody.appendChild(tr);
  });

  // Result Section se 'd-none' remove kar ke smooth scroll karwein
  const resultDiv = document.getElementById('compareResult');
  resultDiv.classList.remove('d-none');
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ==========================================
// DOM INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Page load hote hi dropdowns load ho jayein
  populateCompareDropdowns();
});


// =====================
// 3. CONTACT FORM
// =====================
function sendMsg() {
  const success = document.getElementById('msgSuccess');
  if (success) {
    success.classList.remove('d-none');
    setTimeout(() => success.classList.add('d-none'), 5000);
  }
}

// =====================
// 4. NAVBAR SCROLL EFFECT
// =====================
function initNavbarScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(2,4,8,0.98)';
    } else {
      nav.style.background = 'rgba(2,4,8,0.9)';
    }
  });
}

// =====================
// 5. AC TEMP ANIMATION
// =====================
function initTempAnimation() {
  const tempEl = document.getElementById('heroTemp');
  if (!tempEl) return;
  const temps = ['16°C', '18°C', '20°C', '22°C', '24°C', '22°C', '20°C', '18°C'];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % temps.length;
    tempEl.style.opacity = '0';
    setTimeout(() => {
      tempEl.textContent = temps[idx];
      tempEl.style.opacity = '1';
    }, 300);
    tempEl.style.transition = 'opacity .3s';
  }, 2000);
}

// =====================
// 6. SCROLL REVEAL (simple)
// =====================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .brand-logo-card, .contact-info-card, .contact-form-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
}

// =====================
// INIT ALL
// =====================
document.addEventListener('DOMContentLoaded', () => {
  initBrandFilter();
  initNavbarScroll();
  initTempAnimation();
  initScrollReveal();
});


let cart = [];
let total = 0;

try {
  cart = JSON.parse(localStorage.getItem('userCart')) || [];
  total = parseInt(localStorage.getItem('cartTotal')) || 0;
} catch (e) {
  console.error("Local storage error:", e);
  cart = [];
  total = 0;
}

// 1. ADD TO CART
function addToCart(productId) {
  const productData = products.find(p => p.id === productId);
  if (!productData) return;

  let numericPrice = productData.price;
  if (typeof numericPrice === 'string') {
    // Sirf numbers nikalna, chahe PKR ho ya $
    numericPrice = parseInt(numericPrice.replace(/[^\d]/g, '')) || 0;
  }

  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: productData.name,
      price: numericPrice,
      quantity: 1
    });
  }

  total += numericPrice;
  updateStorage();
  renderCart();
}
// 2. SAVE DATA
function updateStorage() {
  localStorage.setItem('userCart', JSON.stringify(cart));
  localStorage.setItem('cartTotal', total.toString());
}

// 3. RENDER UI (Navbar + Table)

function renderCart() {
  const countEl = document.getElementById("cart-count");
  const totalNavEl = document.getElementById("total");
  const tableBody = document.getElementById('cart-table-body');
  const pageTotal = document.getElementById('cart-page-total');
  const emptyMsg = document.getElementById('empty-msg');
  const cartContent = document.getElementById('cart-content');

  // Navbar update
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  if (countEl) countEl.innerText = totalItems;
  if (totalNavEl) totalNavEl.innerText = total.toLocaleString();

  // Agar Cart page par nahi hain toh yahin ruk jayein
  if (!tableBody) return;

  if (cart.length === 0) {
    if (cartContent) cartContent.classList.add('d-none');
    if (emptyMsg) emptyMsg.classList.remove('d-none');
  } else {
    if (cartContent) cartContent.classList.remove('d-none');
    if (emptyMsg) emptyMsg.classList.add('d-none');

    tableBody.innerHTML = cart.map((item, index) => `
            <tr>
                <td>${item.name}</td>
                <td>PKR ${item.price.toLocaleString()}</td>
                <td>${item.quantity}</td>
                <td><button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button></td>
            </tr>
        `).join('');

    if (pageTotal) pageTotal.innerText = total.toLocaleString();
  }
}

// 4. REMOVE ITEM
function removeItem(index) {
  const item = cart[index];
  if (item.quantity > 1) {
    // Agar 1 se zyada hain to sirf quantity kam karein
    item.quantity -= 1;
    total -= item.price;
  } else {
    // Agar aakhri piece hai to row hi khatam kar dein
    total -= item.price;
    cart.splice(index, 1);
  }
  updateStorage();
  renderCart();
}
// 5. CHECKOUT
function processPurchase() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  localStorage.clear();
  cart = [];
  total = 0;

  document.body.innerHTML = `
        <div class="text-center mt-5" style="color: white; background: #050505; height: 100vh; padding-top: 100px;">
            <h1 class="text-info">🎉 Order Success!</h1>
            <p>Thank you for choosing COSY AC.</p>
            <button class="btn btn-info" onclick="window.location.href='index.html'">Go Back To Shop</button>
        </div>`;
}

// Initialization on Load
document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  // Baaki animations ko load karein agar exist karti hain
  if (typeof initBrandFilter === 'function') initBrandFilter();
  if (typeof initNavbarScroll === 'function') initNavbarScroll();
  if (typeof initTempAnimation === 'function') initTempAnimation();
  if (typeof initScrollReveal === 'function') initScrollReveal();
});