// ============================================================
// js/data.js — Static service data + localStorage helpers
// ============================================================

const MOCK_SERVICES = [
  {
    id: '1',
    title: 'Luxury Hair Spa Treatment',
    category: 'Hair Care',
    provider: 'Élite Hair Studio',
    price: 2499,
    duration: 90,
    rating: 4.9,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80',
    description: 'Indulge in a deep-nourishing hair spa that restores moisture, eliminates frizz, and leaves your hair silky smooth. Includes keratin mask, scalp massage, and blowout.',
    location: 'Connaught Place, Delhi',
    tags: ['trending', 'popular'],
  },
  {
    id: '2',
    title: 'Glow Facial & Skin Brightening',
    category: 'Skin Care',
    provider: 'Lumière Skin Clinic',
    price: 3199,
    duration: 60,
    rating: 4.8,
    reviewCount: 96,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    description: 'A signature brightening facial using vitamin C serums, hyaluronic acid, and LED therapy to reveal radiant, even-toned skin. Perfect for dull or stressed skin.',
    location: 'Bandra West, Mumbai',
    tags: ['popular', 'new'],
  },
  {
    id: '3',
    title: 'Nail Art & Gel Extension',
    category: 'Nail Art',
    provider: 'Gloss Nail Bar',
    price: 1299,
    duration: 75,
    rating: 4.7,
    reviewCount: 214,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
    description: 'Premium gel nail extensions with hand-painted art. Choose from 200+ designs. Includes cuticle care, nail shaping, and long-lasting finish guaranteed for 3 weeks.',
    location: 'Koramangala, Bangalore',
    tags: ['trending'],
  },
  {
    id: '4',
    title: 'Bridal Makeup & Draping',
    category: 'Makeup',
    provider: 'Aura Bridal Studio',
    price: 12999,
    duration: 180,
    rating: 5.0,
    reviewCount: 47,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
    description: 'Full bridal transformation with HD airbrush makeup, saree/lehenga draping, hair styling, and accessories. Includes pre-bridal trial session.',
    location: 'Jubilee Hills, Hyderabad',
    tags: ['premium', 'popular'],
  },
  {
    id: '5',
    title: 'Swedish Deep Tissue Massage',
    category: 'Spa & Massage',
    provider: 'Serenity Wellness Spa',
    price: 1899,
    duration: 60,
    rating: 4.9,
    reviewCount: 183,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    description: 'Release tension and restore balance with our signature deep-tissue massage using warm aromatherapy oils. Targets chronic muscle pain and improves circulation.',
    location: 'Indiranagar, Bangalore',
    tags: ['popular'],
  },
  {
    id: '6',
    title: 'Microblading & Brow Sculpting',
    category: 'Eyebrows & Lashes',
    provider: 'Brow Architects',
    price: 4500,
    duration: 120,
    rating: 4.8,
    reviewCount: 62,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
    description: 'Achieve perfect, natural-looking brows with precision microblading by certified artists. Includes consultation, numbing, shaping, and touch-up session.',
    location: 'Hauz Khas, Delhi',
    tags: ['new', 'premium'],
  },
  {
    id: '7',
    title: 'Vitamin Infusion Body Wrap',
    category: 'Wellness',
    provider: 'Pure Bliss Retreat',
    price: 2799,
    duration: 90,
    rating: 4.6,
    reviewCount: 39,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
    description: 'Full-body detox wrap using antioxidant-rich clays and essential oils. Deeply hydrates skin, reduces bloating, and leaves skin soft and glowing.',
    location: 'Powai, Mumbai',
    tags: ['new'],
  },
  {
    id: '8',
    title: 'Men\'s Grooming & Beard Styling',
    category: 'Men Grooming',
    provider: 'The Gentleman\'s Den',
    price: 799,
    duration: 45,
    rating: 4.7,
    reviewCount: 291,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80',
    description: 'Premium men\'s grooming experience: haircut, hot towel shave, beard sculpting, and scalp massage. Walk out looking sharp and feeling fresh.',
    location: 'Sector 18, Noida',
    tags: ['trending', 'popular'],
  },
  {
    id: '9',
    title: 'Eyelash Lift & Tint',
    category: 'Eyebrows & Lashes',
    provider: 'Lash Luxe Studio',
    price: 1599,
    duration: 60,
    rating: 4.8,
    reviewCount: 77,
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=600&q=80',
    description: 'A game-changing lash lift that curls your natural lashes upward for 6-8 weeks, paired with a tint for dramatic, mascara-free eyes. Zero damage formula.',
    location: 'Andheri West, Mumbai',
    tags: ['popular'],
  },
  {
    id: '10',
    title: 'Hot Stone Chakra Balancing',
    category: 'Spa & Massage',
    provider: 'Zen Garden Spa',
    price: 3499,
    duration: 90,
    rating: 4.9,
    reviewCount: 54,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80',
    description: 'Ancient healing ritual using volcanic basalt stones and chakra-aligned essential oils. Melts away stress, re-energizes your body, and soothes the mind.',
    location: 'Whitefield, Bangalore',
    tags: ['premium', 'trending'],
  },
  {
    id: '11',
    title: 'Keratin Smoothing Treatment',
    category: 'Hair Care',
    provider: 'Silk & Shine Salon',
    price: 5999,
    duration: 150,
    rating: 4.7,
    reviewCount: 103,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    description: 'Brazilian keratin treatment that eliminates frizz, adds brilliant shine, and makes hair 80% straighter for up to 4 months. Includes hydrating hair mask.',
    location: 'Salt Lake, Kolkata',
    tags: ['popular'],
  },
  {
    id: '12',
    title: 'Hydra Dermabrasion Facial',
    category: 'Skin Care',
    provider: 'Derma Glow Clinic',
    price: 4200,
    duration: 75,
    rating: 4.9,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80',
    description: 'Medical-grade hydradermabrasion that exfoliates, extracts, and hydrates simultaneously. Targets blackheads, fine lines, and uneven texture. Zero downtime.',
    location: 'Banjara Hills, Hyderabad',
    tags: ['new', 'trending'],
  },
];

let SERVICES = [...MOCK_SERVICES];
const API_URL = 'http://localhost:5000/api';

async function loadServices() {
  try {
    const res = await fetch(`${API_URL}/services`);
    const data = await res.json();
    if (data.success && data.services && data.services.length > 0) {
      // Map _id to id so frontend template variables stay intact
      SERVICES = data.services.map(s => ({ ...s, id: s._id || s.id }));
    }
  } catch(e) {
    console.log('Using mock services (Backend unavailable)');
  }
  return SERVICES;
}

const CATEGORIES = [
  { id: 'all',              label: 'All Services', icon: '✨', image: '' },
  { id: 'Hair Care',        label: 'Hair Care',    icon: '💇', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&q=80' },
  { id: 'Skin Care',        label: 'Skin Care',    icon: '🌿', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80' },
  { id: 'Nail Art',         label: 'Nail Art',     icon: '💅', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80' },
  { id: 'Makeup',           label: 'Makeup',       icon: '💄', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80' },
  { id: 'Spa & Massage',    label: 'Spa & Massage',icon: '🧘', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80' },
  { id: 'Eyebrows & Lashes',label: 'Brows & Lashes',icon:'👁️', image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=400&q=80' },
  { id: 'Wellness',         label: 'Wellness',     icon: '🌸', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80' },
  { id: 'Men Grooming',     label: 'Men Grooming', icon: '🪒', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80' },
];

// ── LocalStorage helpers ────────────────────────────────────
const LS = {
  get:    (k, fb = []) => { try { return JSON.parse(localStorage.getItem(k)) ?? fb; } catch { return fb; } },
  set:    (k, v)        => localStorage.setItem(k, JSON.stringify(v)),
  push:   (k, item)     => { const arr = LS.get(k); arr.push(item); LS.set(k, arr); },
};

// Bookings
function getBookings()      { return LS.get('aura_bookings', []); }
function saveBooking(b)     { LS.push('aura_bookings', b); }
function cancelBooking(id)  {
  const all = getBookings().map(b => b.id === id ? { ...b, status: 'cancelled' } : b);
  LS.set('aura_bookings', all);
}

// Reviews
function getReviews(serviceId) { return LS.get(`aura_reviews_${serviceId}`, []); }
function saveReview(serviceId, r) { LS.push(`aura_reviews_${serviceId}`, r); }

// Auth & JWT Handlers
function getToken()  { return localStorage.getItem('aura_token'); }
function getUser()   { return LS.get('aura_user', null); }

function setUser(user, token) { 
  LS.set('aura_user', user); 
  if (token) localStorage.setItem('aura_token', token);
}

function logoutUser() { 
  localStorage.removeItem('aura_user'); 
  localStorage.removeItem('aura_token');
}

function isLoggedIn() { return !!getToken(); }
