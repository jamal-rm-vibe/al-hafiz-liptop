/* 
================================================================
  AL HAFIZ LAPTOP - PREMIUM STOREFRONT LOGIC
  Author: Antigravity AI
  Location: Akora Khattak, KPK, Pakistan
================================================================
*/

// --- Product & Accessory Database ---
const products = [
  // New & Used Laptops (Category: laptops)
  {
    id: "laptop-hp-840",
    name: "HP EliteBook 840 G8",
    brand: "HP",
    category: "laptops",
    type: "new",
    processor: "Intel Core i7 11th Gen",
    ram: "16GB DDR4",
    ssd: "512GB NVMe",
    screen: "14.0\" FHD IPS",
    warranty: "6 Months Local",
    price: 89000,
    oldPrice: 95000,
    rating: 4.8,
    reviews: 24,
    stock: "in",
    image: "images/hp-laptop.jpg" // Local User Image!
  },
  {
    id: "laptop-dell-7420",
    name: "Dell Latitude 7420",
    brand: "Dell",
    category: "laptops",
    type: "used",
    processor: "Intel Core i5 11th Gen",
    ram: "16GB DDR4",
    ssd: "256GB NVMe",
    screen: "14.0\" FHD WVA",
    warranty: "3 Months Checking",
    price: 74000,
    oldPrice: 79000,
    rating: 4.7,
    reviews: 18,
    stock: "in",
    image: "images/dell-laptop.jpg" // Local User Image!
  },
  {
    id: "laptop-lenovo-t14",
    name: "Lenovo ThinkPad T14 Gen 2",
    brand: "Lenovo",
    category: "laptops",
    type: "used",
    processor: "AMD Ryzen 5 Pro 5650U",
    ram: "16GB DDR4",
    ssd: "512GB NVMe",
    screen: "14.0\" FHD IPS",
    warranty: "3 Months Checking",
    price: 78500,
    oldPrice: 85000,
    rating: 4.9,
    reviews: 32,
    stock: "in",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "laptop-apple-macbook",
    name: "Apple MacBook Air M1",
    brand: "Apple",
    category: "laptops",
    type: "new",
    processor: "Apple M1 Octa-Core",
    ram: "8GB Unified",
    ssd: "256GB SSD",
    screen: "13.3\" Retina display",
    warranty: "1 Year International",
    price: 185000,
    oldPrice: 195000,
    rating: 4.9,
    reviews: 45,
    stock: "in",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "laptop-asus-vivobook",
    name: "ASUS VivoBook 15",
    brand: "ASUS",
    category: "laptops",
    type: "new",
    processor: "Intel Core i5 12th Gen",
    ram: "8GB DDR4",
    ssd: "512GB NVMe",
    screen: "15.6\" FHD NanoEdge",
    warranty: "1 Year Local",
    price: 96000,
    oldPrice: 105000,
    rating: 4.6,
    reviews: 12,
    stock: "in",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "laptop-acer-aspire",
    name: "Acer Aspire 5",
    brand: "Acer",
    category: "laptops",
    type: "new",
    processor: "Intel Core i3 11th Gen",
    ram: "8GB DDR4",
    ssd: "256GB SSD",
    screen: "15.6\" FHD SlimBezel",
    warranty: "1 Year Local",
    price: 68000,
    oldPrice: 72000,
    rating: 4.4,
    reviews: 8,
    stock: "in",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "laptop-msi-gf63",
    name: "MSI GF63 Thin Gaming",
    brand: "MSI",
    category: "laptops",
    type: "new",
    processor: "Intel Core i5 11th Gen",
    ram: "8GB DDR4",
    ssd: "512GB NVMe",
    screen: "15.6\" FHD 144Hz",
    warranty: "1 Year Local",
    price: 135000,
    oldPrice: 145000,
    rating: 4.5,
    reviews: 15,
    stock: "in",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80"
  },

  // Gaming Laptops (Category: gaming)
  {
    id: "gaming-msi-titan",
    name: "MSI Raider GE76 Gaming",
    brand: "MSI",
    category: "gaming",
    type: "gaming",
    processor: "Intel i9 12th Gen | RTX 3080",
    ram: "32GB DDR5",
    ssd: "1TB NVMe",
    screen: "17.3\" QHD 240Hz",
    warranty: "1 Year Local",
    price: 345000,
    oldPrice: 370000,
    rating: 5.0,
    reviews: 11,
    stock: "in",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "gaming-asus-rog",
    name: "ASUS ROG Strix G15",
    brand: "ASUS",
    category: "gaming",
    type: "gaming",
    processor: "Ryzen 9 5900HX | RTX 3060",
    ram: "16GB DDR4",
    ssd: "512GB NVMe",
    screen: "15.6\" FHD 300Hz",
    warranty: "1 Year Local",
    price: 245000,
    oldPrice: 260000,
    rating: 4.9,
    reviews: 23,
    stock: "in",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "gaming-lenovo-legion",
    name: "Lenovo Legion 5 Pro",
    brand: "Lenovo",
    category: "gaming",
    type: "gaming",
    processor: "AMD Ryzen 7 5800H | RTX 3070",
    ram: "16GB DDR4",
    ssd: "1TB NVMe",
    screen: "16.0\" QHD IPS 165Hz",
    warranty: "6 Months Local",
    price: 220000,
    oldPrice: 240000,
    rating: 4.8,
    reviews: 19,
    stock: "in",
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "gaming-acer-predator",
    name: "Acer Predator Helios 300",
    brand: "Acer",
    category: "gaming",
    type: "gaming",
    processor: "Intel i7 11th Gen | RTX 3060",
    ram: "16GB DDR4",
    ssd: "512GB NVMe",
    screen: "15.6\" FHD 144Hz",
    warranty: "1 Year Local",
    price: 185000,
    oldPrice: 200000,
    rating: 4.7,
    reviews: 16,
    stock: "in",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "gaming-hp-omen",
    name: "HP Omen 16 Gaming",
    brand: "HP",
    category: "gaming",
    type: "gaming",
    processor: "Intel i7 12th Gen | RTX 3060",
    ram: "16GB DDR5",
    ssd: "1TB NVMe",
    screen: "16.1\" QHD 165Hz",
    warranty: "1 Year Local",
    price: 215000,
    oldPrice: 230000,
    rating: 4.8,
    reviews: 14,
    stock: "in",
    image: "https://images.unsplash.com/photo-1580522151917-c5e4db5ad33f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "gaming-dell-alienware",
    name: "Dell Alienware m15 R6",
    brand: "Dell",
    category: "gaming",
    type: "gaming",
    processor: "Intel i7 11th Gen | RTX 3070",
    ram: "32GB DDR4",
    ssd: "1TB NVMe",
    screen: "15.6\" FHD 360Hz",
    warranty: "6 Months Local",
    price: 285000,
    oldPrice: 310000,
    rating: 4.9,
    reviews: 9,
    stock: "in",
    image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=600&auto=format&fit=crop&q=80"
  }
];

const accessories = [
  {
    id: "acc-1",
    name: "Wireless Logitech Mouse M185",
    desc: "Compact, plug-and-play wireless mouse with 1-year battery life.",
    price: 2200,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-2",
    name: "Razer DeathAdder Gaming Mouse",
    desc: "Ergonomic wired gaming mouse with 6400 DPI optical sensor.",
    price: 6500,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-3",
    name: "Redragon K552 Mechanical Keyboard",
    desc: "RGB Backlit mechanical keyboard with blue switches.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-4",
    name: "Premium Leather Laptop Bag",
    desc: "Genuine leather office bag, water-resistant with multiple compartments.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-5",
    name: "Waterproof Laptop Backpack",
    desc: "Modern gray backpack with USB charging port and anti-theft pocket.",
    price: 3200,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-6",
    name: "RGB Laptop Cooling Pad",
    desc: "Dual silent fans with adjustable height stands and blue LED lights.",
    price: 2500,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-7",
    name: "Anker USB-C 4-Port Hub",
    desc: "Ultra-slim portable hub with high-speed data transfer.",
    price: 3800,
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-8",
    name: "Braided HDMI 4K Cable 3m",
    desc: "High-speed 18Gbps gold-plated connectors for UHD resolution.",
    price: 950,
    image: "https://images.unsplash.com/photo-1557002666-417c27afa8b2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-9",
    name: "Samsung T7 1TB External SSD",
    desc: "Superfast pocket-sized portable solid-state drive.",
    price: 24500,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-10",
    name: "Kingston 64GB USB 3.2 Flash Drive",
    desc: "Metal casing key ring design flash drive with fast read speeds.",
    price: 1600,
    image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-11",
    name: "Sony WH-CH520 Wireless Headphones",
    desc: "On-ear Bluetooth headphones with up to 50 hours battery life.",
    price: 12500,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-12",
    name: "Redragon GS520 Anvil Speakers",
    desc: "Desktop dynamic RGB stereo speakers for laptops.",
    price: 4800,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-13",
    name: "Logitech C920 Pro HD Webcam",
    desc: "Full HD 1080p video calling with stereo microphones.",
    price: 18500,
    image: "https://images.unsplash.com/photo-1603566115049-74d7870a4a6f?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-14",
    name: "Universal 90W Laptop Charger",
    desc: "Comes with 10 interchangeable tips compatible with HP, Dell, Lenovo, ASUS.",
    price: 2200,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-15",
    name: "HP EliteBook OEM Battery",
    desc: "Genuine replacement battery for 840 G5, G6, G7, G8 models.",
    price: 5800,
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-16",
    name: "9H Matte Screen Protector",
    desc: "Anti-glare scratch resistant protective film for 14\" and 15.6\".",
    price: 650,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-17",
    name: "Aluminium Foldable Laptop Stand",
    desc: "Ergonomic multi-angle laptop holder with cooling ventilation.",
    price: 2800,
    image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-18",
    name: "Dell USB-C Dual Docking Station",
    desc: "Universal dock supporting dual displays, gigabit Ethernet, charging.",
    price: 19500,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-19",
    name: "Logitech MX Keys Bluetooth Keyboard",
    desc: "Advanced wireless illuminated keyboard for multi-device workflows.",
    price: 24500,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "acc-20",
    name: "Anker Soundcore P20i Wireless Earbuds",
    desc: "True wireless earbuds with 10mm drivers, Bluetooth 5.3, IPX5.",
    price: 5200,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&auto=format&fit=crop&q=80"
  }
];

// --- Application State ---
let cart = JSON.parse(localStorage.getItem('alhafiz_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('alhafiz_wishlist')) || [];
let activeBrandFilter = 'All';

// --- WhatsApp Config ---
const WHATSAPP_PHONE = "923338865194"; // Format: CC + number without zero

// --- UI Elements Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderLaptops();
  renderGamingLaptops();
  renderAccessories();
  updateCartCounters();
  updateWishlistStates();
  setupEventListeners();
  setupStickyHeader();
  setupScrollTopBtn();
  setupHero3DTilt();
});

// --- Render Functions ---

// 1. Render Normal Laptops
function renderLaptops(filterBrand = 'All') {
  const container = document.getElementById('laptop-products-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Filter only standard laptops, matching selected brand
  const filtered = products.filter(p => {
    const matchesCategory = p.category === 'laptops';
    const matchesBrand = filterBrand === 'All' || p.brand.toLowerCase() === filterBrand.toLowerCase();
    return matchesCategory && matchesBrand;
  });
  
  if (filtered.length === 0) {
    container.innerHTML = `<div class="cart-empty-message" style="grid-column: span 3; padding: 40px;"><i class="fas fa-box-open"></i> No laptops found for brand "${filterBrand}".</div>`;
    return;
  }
  
  filtered.forEach(p => {
    const isWished = wishlist.includes(p.id);
    const oldPriceHTML = p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString()} PKR</span>` : '';
    const badgeHTML = p.type === 'new' 
      ? `<span class="product-badge badge-new">New</span>` 
      : `<span class="product-badge badge-used">Used</span>`;
      
    const card = document.createElement('div');
    card.className = 'product-card animate-fade-in-up';
    card.innerHTML = `
      ${badgeHTML}
      <button class="wishlist-heart ${isWished ? 'active' : ''}" onclick="toggleWishlist('${p.id}')" aria-label="Add to wishlist">
        <i class="fa${isWished ? 's' : 'r'} fa-heart"></i>
      </button>
      <div class="product-img-wrapper">
        <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand}</span>
        <h3 class="product-title">${p.name}</h3>
        <div class="product-specs">
          <div class="spec-item"><i class="fas fa-microchip"></i><span>${p.processor}</span></div>
          <div class="spec-item"><i class="fas fa-memory"></i><span>${p.ram}</span></div>
          <div class="spec-item"><i class="fas fa-hdd"></i><span>${p.ssd}</span></div>
          <div class="spec-item"><i class="fas fa-shield-alt"></i><span>${p.warranty}</span></div>
        </div>
        <div class="product-meta">
          <div class="product-price-box">
            ${oldPriceHTML}
            <span class="price-current">${p.price.toLocaleString()} PKR</span>
          </div>
          <div class="product-rating">
            <i class="fas fa-star"></i>
            <span>${p.rating} (${p.reviews})</span>
          </div>
        </div>
        <div class="product-meta" style="margin-bottom: 12px; margin-top: -10px;">
          <div class="stock-status stock-in">
            <span class="stock-dot"></span>In Stock
          </div>
        </div>
        <div class="product-actions">
          <button class="btn-card-cart" onclick="addToCart('${p.id}')">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
          <button class="btn-card-buy" onclick="quickBuy('${p.id}')">
            Buy Now
          </button>
          <button class="btn-card-whatsapp" onclick="whatsappInquiry('${p.id}')">
            <i class="fab fa-whatsapp"></i> WhatsApp Inquiry
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 2. Render Gaming Laptops
function renderGamingLaptops() {
  const container = document.getElementById('gaming-products-grid');
  if (!container) return;
  
  container.innerHTML = '';
  const gamingProducts = products.filter(p => p.category === 'gaming');
  
  gamingProducts.forEach(p => {
    const isWished = wishlist.includes(p.id);
    const oldPriceHTML = p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString()} PKR</span>` : '';
    
    const card = document.createElement('div');
    card.className = 'product-card gaming-card animate-fade-in-up';
    card.innerHTML = `
      <span class="product-badge badge-sale">Gaming Spec</span>
      <button class="wishlist-heart ${isWished ? 'active' : ''}" onclick="toggleWishlist('${p.id}')" aria-label="Add to wishlist">
        <i class="fa${isWished ? 's' : 'r'} fa-heart"></i>
      </button>
      <div class="product-img-wrapper">
        <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-brand" style="color: var(--gaming-neon);">${p.brand}</span>
        <h3 class="product-title">${p.name}</h3>
        <div class="product-specs">
          <div class="spec-item"><i class="fas fa-gamepad"></i><span>${p.processor}</span></div>
          <div class="spec-item"><i class="fas fa-memory"></i><span>${p.ram}</span></div>
          <div class="spec-item"><i class="fas fa-hdd"></i><span>${p.ssd}</span></div>
          <div class="spec-item"><i class="fas fa-desktop"></i><span>${p.screen}</span></div>
        </div>
        <div class="product-meta">
          <div class="product-price-box">
            ${oldPriceHTML}
            <span class="price-current" style="color: var(--gaming-neon);">${p.price.toLocaleString()} PKR</span>
          </div>
          <div class="product-rating">
            <i class="fas fa-star" style="color: var(--gaming-neon);"></i>
            <span>${p.rating} (${p.reviews})</span>
          </div>
        </div>
        <div class="product-actions">
          <button class="btn-card-cart" onclick="addToCart('${p.id}')">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
          <button class="btn-card-buy" onclick="quickBuy('${p.id}')">
            Buy Now
          </button>
          <button class="btn-card-whatsapp" onclick="whatsappInquiry('${p.id}')" style="grid-column: span 2;">
            <i class="fab fa-whatsapp"></i> Inquiry on WhatsApp
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 3. Render Accessories
function renderAccessories() {
  const container = document.getElementById('accessories-products-grid');
  if (!container) return;
  
  container.innerHTML = '';
  accessories.forEach(acc => {
    const card = document.createElement('div');
    card.className = 'accessory-card animate-fade-in-up';
    card.innerHTML = `
      <div class="accessory-img-wrapper">
        <img class="accessory-img" src="${acc.image}" alt="${acc.name}" loading="lazy">
      </div>
      <h3 class="accessory-title">${acc.name}</h3>
      <p class="accessory-desc">${acc.desc}</p>
      <div class="accessory-footer">
        <span class="accessory-price">${acc.price.toLocaleString()} PKR</span>
        <button class="btn-acc-add" onclick="addAccessoryToCart('${acc.id}')" aria-label="Add to cart">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// --- Cart System ---

function addToCart(productId) {
  const item = products.find(p => p.id === productId);
  if (!item) return;
  
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      brand: item.brand,
      category: 'laptop',
      quantity: 1
    });
  }
  saveCart();
  updateCartCounters();
  openCartDrawer();
}

function addAccessoryToCart(accId) {
  const item = accessories.find(a => a.id === accId);
  if (!item) return;
  
  const existing = cart.find(i => i.id === accId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      brand: 'Accessory',
      category: 'accessory',
      quantity: 1
    });
  }
  saveCart();
  updateCartCounters();
  openCartDrawer();
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  saveCart();
  updateCartCounters();
  renderCartItems();
}

function updateQuantity(itemId, delta) {
  const item = cart.find(i => i.id === itemId);
  if (!item) return;
  
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(itemId);
  } else {
    saveCart();
    updateCartCounters();
    renderCartItems();
  }
}

function saveCart() {
  localStorage.setItem('alhafiz_cart', JSON.stringify(cart));
}

function openCartDrawer() {
  document.getElementById('cart-overlay').classList.add('active');
  document.getElementById('cart-drawer').classList.add('active');
  renderCartItems();
}

function closeCartDrawer() {
  document.getElementById('cart-overlay').classList.remove('active');
  document.getElementById('cart-drawer').classList.remove('active');
}

function renderCartItems() {
  const wrapper = document.getElementById('cart-items-wrapper');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  
  if (!wrapper) return;
  
  wrapper.innerHTML = '';
  let subtotal = 0;
  
  if (cart.length === 0) {
    wrapper.innerHTML = `
      <div class="cart-empty-message">
        <i class="fas fa-shopping-basket"></i>
        <p>Your shopping cart is empty.</p>
      </div>
    `;
    subtotalEl.innerText = "0 PKR";
    totalEl.innerText = "0 PKR";
    return;
  }
  
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">${item.brand}</div>
        <div class="cart-item-price">${(item.price * item.quantity).toLocaleString()} PKR</div>
        <div class="cart-item-control">
          <div class="quantity-selector">
            <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
            <span class="quantity-val">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
            <i class="fas fa-trash-alt"></i> Remove
          </button>
        </div>
      </div>
    `;
    wrapper.appendChild(itemEl);
  });
  
  subtotalEl.innerText = `${subtotal.toLocaleString()} PKR`;
  totalEl.innerText = `${subtotal.toLocaleString()} PKR`;
}

function updateCartCounters() {
  const cartBadge = document.getElementById('cart-badge');
  const cartTotalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) {
    cartBadge.innerText = cartTotalQty;
    cartBadge.style.display = cartTotalQty > 0 ? 'flex' : 'none';
  }
}

// --- Wishlist System ---

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(productId);
  }
  localStorage.setItem('alhafiz_wishlist', JSON.stringify(wishlist));
  updateWishlistStates();
}

function updateWishlistStates() {
  const wishBadge = document.getElementById('wishlist-badge');
  if (wishBadge) {
    wishBadge.innerText = wishlist.length;
    wishBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';
  }
  
  // Update heart icons on cards
  document.querySelectorAll('.wishlist-heart').forEach(btn => {
    // We can re-trigger render or toggle class
  });
  
  // For standard laptops and gaming, we can re-render to keep it simple, or toggle active status
  renderLaptops(activeBrandFilter);
  renderGamingLaptops();
}

// --- Live Search ---

function filterProductsBySearch() {
  const query = document.getElementById('search-input').value.toLowerCase().trim();
  const searchResultsDiv = document.getElementById('search-results-modal');
  const resultsGrid = document.getElementById('search-results-grid');
  
  if (query.length === 0) {
    if (searchResultsDiv) searchResultsDiv.classList.remove('active');
    return;
  }
  
  // Search items across products database & accessories database
  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query) || p.processor.toLowerCase().includes(query));
  const filteredAccessories = accessories.filter(a => a.name.toLowerCase().includes(query) || a.desc.toLowerCase().includes(query));
  
  if (searchResultsDiv && resultsGrid) {
    searchResultsDiv.classList.add('active');
    resultsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0 && filteredAccessories.length === 0) {
      resultsGrid.innerHTML = `<div style="grid-column: span 3; text-align: center; padding: 40px; color: var(--text-light);"><i class="fas fa-search-minus" style="font-size: 3rem; margin-bottom:15px; display:block;"></i>No matches found for "${query}"</div>`;
      return;
    }
    
    // Render Laptop results
    filteredProducts.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card animate-fade-in-up';
      card.style.transform = 'scale(0.95)';
      card.innerHTML = `
        <div class="product-img-wrapper" style="padding-top:50%;">
          <img class="product-img" src="${p.image}" alt="${p.name}">
        </div>
        <div class="product-info" style="padding:15px;">
          <span class="product-brand">${p.brand}</span>
          <h3 class="product-title" style="font-size:1rem; margin-bottom:8px;">${p.name}</h3>
          <div class="price-current" style="font-size:1.15rem; margin-bottom:12px;">${p.price.toLocaleString()} PKR</div>
          <button class="btn-card-buy" onclick="quickBuy('${p.id}')" style="width:100%;">Order Now</button>
        </div>
      `;
      resultsGrid.appendChild(card);
    });
    
    // Render Accessories results
    filteredAccessories.forEach(a => {
      const card = document.createElement('div');
      card.className = 'accessory-card animate-fade-in-up';
      card.style.transform = 'scale(0.95)';
      card.innerHTML = `
        <div class="accessory-img-wrapper" style="padding-top:60%;">
          <img class="accessory-img" src="${a.image}" alt="${a.name}">
        </div>
        <h3 class="accessory-title" style="font-size:0.9rem; margin-bottom:6px;">${a.name}</h3>
        <div class="accessory-price" style="font-size:1rem; margin-bottom:10px;">${a.price.toLocaleString()} PKR</div>
        <button class="btn-card-buy" onclick="quickBuyAcc('${a.id}')" style="width:100%; font-size:0.8rem; padding:8px;">Order Now</button>
      `;
      resultsGrid.appendChild(card);
    });
  }
}

// --- WhatsApp Checkout & Inquiries ---

// 1. Single Laptop Direct Order
function quickBuy(productId) {
  const item = products.find(p => p.id === productId);
  if (!item) return;
  
  const text = `*Al Hafiz Laptop - New Order Inquiry*\n` +
               `---------------------------------\n` +
               `*Product:* ${item.name}\n` +
               `*Brand:* ${item.brand}\n` +
               `*Specs:* ${item.processor} | ${item.ram} | ${item.ssd}\n` +
               `*Warranty:* ${item.warranty}\n` +
               `*Price:* ${item.price.toLocaleString()} PKR\n` +
               `---------------------------------\n` +
               `Hello, I would like to purchase this laptop. Is it currently in stock at your Akora Khattak store?`;
               
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// 2. Single Accessory Direct Order
function quickBuyAcc(accId) {
  const item = accessories.find(a => a.id === accId);
  if (!item) return;
  
  const text = `*Al Hafiz Laptop - Accessory Order*\n` +
               `---------------------------------\n` +
               `*Product:* ${item.name}\n` +
               `*Price:* ${item.price.toLocaleString()} PKR\n` +
               `---------------------------------\n` +
               `Hello, I would like to buy this accessory. Please let me know the availability.`;
               
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// 3. Laptop Info Inquiry
function whatsappInquiry(productId) {
  const item = products.find(p => p.id === productId);
  if (!item) return;
  
  const text = `*Al Hafiz Laptop - Product Inquiry*\n` +
               `---------------------------------\n` +
               `*Product:* ${item.name}\n` +
               `*Price:* ${item.price.toLocaleString()} PKR\n` +
               `---------------------------------\n` +
               `Hi, I have a question about this laptop. Could you provide details about its body condition, battery health, and packaging details? Thanks!`;
               
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// 4. Cart Full Order WhatsApp Checkout
function checkoutCart() {
  if (cart.length === 0) return;
  
  let orderDetails = '';
  let grandTotal = 0;
  
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;
    orderDetails += `${index + 1}. *${item.name}* (Qty: ${item.quantity}) - ${itemTotal.toLocaleString()} PKR\n`;
  });
  
  const text = `*Al Hafiz Laptop - Store Checkout Order*\n` +
               `---------------------------------\n` +
               `*Items Ordered:*\n${orderDetails}\n` +
               `*Grand Total:* ${grandTotal.toLocaleString()} PKR\n` +
               `---------------------------------\n` +
               `Hello, I want to confirm my order for the items listed above. Please share your bank transfer details or delivery timing for Akora Khattak.`;
               
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  
  // Clear cart on successful order handover
  cart = [];
  saveCart();
  updateCartCounters();
  closeCartDrawer();
}

// --- Modals Toggle Logic ---

function openRepairModal(serviceName = '') {
  const modal = document.getElementById('repair-modal');
  const serviceInput = document.getElementById('repair-service-input');
  if (modal) {
    modal.classList.add('active');
    if (serviceInput && serviceName) {
      serviceInput.value = serviceName;
    }
  }
}

function closeRepairModal() {
  const modal = document.getElementById('repair-modal');
  if (modal) modal.classList.remove('active');
}

function openCartCheckoutModal() {
  closeCartDrawer();
  const modal = document.getElementById('checkout-form-modal');
  if (modal) modal.classList.add('active');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-form-modal');
  if (modal) modal.classList.remove('active');
}

// --- Submit Forms ---

function submitRepairForm(e) {
  e.preventDefault();
  const name = document.getElementById('repair-name').value;
  const phone = document.getElementById('repair-phone').value;
  const service = document.getElementById('repair-service-input').value;
  const details = document.getElementById('repair-details').value;
  
  const text = `*Al Hafiz Laptop - Laptop Repair Request*\n` +
               `---------------------------------\n` +
               `*Client Name:* ${name}\n` +
               `*Phone Number:* ${phone}\n` +
               `*Service Type:* ${service}\n` +
               `*Issue Description:* ${details}\n` +
               `---------------------------------\n` +
               `Hi Al Hafiz team, I want to request laptop repair assistance. Please confirm a time for me to bring my device to the Akora Khattak shop.`;
               
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  
  closeRepairModal();
  document.getElementById('repair-booking-form').reset();
}

function submitCheckoutForm(e) {
  e.preventDefault();
  const name = document.getElementById('cust-name').value;
  const phone = document.getElementById('cust-phone').value;
  const address = document.getElementById('cust-address').value;
  const notes = document.getElementById('cust-notes').value || 'None';
  
  let orderDetails = '';
  let grandTotal = 0;
  
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;
    orderDetails += `${index + 1}. *${item.name}* (Qty: ${item.quantity}) - ${itemTotal.toLocaleString()} PKR\n`;
  });
  
  const text = `*Al Hafiz Laptop - Delivery Checkout Order*\n` +
               `---------------------------------\n` +
               `*Customer Name:* ${name}\n` +
               `*WhatsApp/Phone:* ${phone}\n` +
               `*Delivery Address:* ${address}\n` +
               `*Order Notes:* ${notes}\n` +
               `---------------------------------\n` +
               `*Items Ordered:*\n${orderDetails}\n` +
               `*Grand Total:* ${grandTotal.toLocaleString()} PKR\n` +
               `---------------------------------\n` +
               `Thank you! Please process my delivery details.`;
               
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  
  cart = [];
  saveCart();
  updateCartCounters();
  closeCheckoutModal();
  document.getElementById('checkout-detail-form').reset();
}

// --- Events & Navigation Helpers ---

function setupEventListeners() {
  // Brand Tabs Filter
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelector('.filter-tab.active').classList.remove('active');
      tab.classList.add('active');
      activeBrandFilter = tab.getAttribute('data-brand');
      renderLaptops(activeBrandFilter);
    });
  });
  
  // Hamburguer Menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuBtn.querySelector('i').classList.toggle('fa-bars');
      menuBtn.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close nav on menu item click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.querySelector('i').classList.add('fa-bars');
        menuBtn.querySelector('i').classList.remove('fa-times');
      });
    });
  }
}

// Change header background color on scroll
function setupStickyHeader() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Floating scroll to top button
function setupScrollTopBtn() {
  const btn = document.getElementById('btn-scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function closeSearchModal() {
  const searchModal = document.getElementById('search-results-modal');
  if (searchModal) searchModal.classList.remove('active');
  document.getElementById('search-input').value = '';
}

// --- Interactive 3D Holographic Tilt ---
function setupHero3DTilt() {
  const heroArea = document.querySelector('.hero-image-area');
  const heroLaptop = document.querySelector('.hero-laptop-composition');
  
  if (!heroArea || !heroLaptop) return;
  
  heroArea.addEventListener('mousemove', (e) => {
    const rect = heroArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 12; // Tilts vertical
    const angleY = (x - xc) / 12; // Tilts horizontal
    
    heroLaptop.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });
  
  // Smoothly restore horizontal status when cursor leaves
  heroArea.addEventListener('mouseleave', () => {
    heroLaptop.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    heroLaptop.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
  
  heroArea.addEventListener('mouseenter', () => {
    heroLaptop.style.transition = 'transform 0.1s ease-out';
  });
}
