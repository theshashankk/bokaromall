// Bokaro Mall - Data Layer & Single Source of Truth

export interface Store {
  id: string;
  name: string;
  category: 'fashion' | 'electronics' | 'dining' | 'entertainment' | 'beauty' | 'hypermarket' | 'hospitality';
  floor: 'Ground' | '1st Floor' | '2nd Floor' | '3rd Floor';
  logo?: string;
  tagline?: string;
  hours: string;
  phone?: string;
  description: string;
  image: string;
  mapHotspot: { x: number; y: number }; // X and Y percentages (0-100) on floor map
  isAnchor?: boolean;
  offersCount?: number;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

export interface OfferItem {
  id: string;
  storeName: string;
  storeId?: string;
  title: string;
  discount: string;
  code?: string;
  validTill: string;
}

export const MALL_INFO = {
  name: "Bokaro Mall",
  address: "Sector III/C, Bokaro Steel City, Jharkhand - 827003, India",
  phone: "+91 62877 76111",
  email: "helpdeskbokaro@amitreallty.com",
  developer: "Amit Realty",
  hours: "11:00 AM – 9:30 PM (Daily)",
  socials: {
    facebook: "https://facebook.com/bokaromall",
    instagram: "https://instagram.com/bokaromall",
    youtube: "https://youtube.com/bokaromall",
    twitter: "https://twitter.com/bokaromall",
    linkedin: "https://linkedin.com/company/amitrealty"
  }
};

export const INITIAL_STORES: Store[] = [
  {
    id: "reliance-smart-bazaar",
    name: "Reliance Smart Bazaar",
    category: "hypermarket",
    floor: "Ground",
    tagline: "Jharkhand's Largest Hypermarket & Superstore",
    hours: "10:00 AM – 10:00 PM",
    phone: "+91 62877 76111",
    description: "Your one-stop hypermarket for daily groceries, fresh produce, electronics, home decor, and general merchandise at unbelievable prices.",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1000&auto=format&fit=crop",
    mapHotspot: { x: 25, y: 35 },
    isAnchor: true,
    offersCount: 2
  },
  {
    id: "pantaloons",
    name: "Pantaloons",
    category: "fashion",
    floor: "Ground",
    tagline: "Trendy Western & Ethnic Fashion Destination",
    hours: "11:00 AM – 09:30 PM",
    phone: "+91 62877 76112",
    description: "Explore latest apparel trends for men, women, and kids from leading Indian and international fashion brands.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    mapHotspot: { x: 75, y: 35 },
    isAnchor: true,
    offersCount: 1
  },
  {
    id: "max-fashion",
    name: "Max Fashion",
    category: "fashion",
    floor: "1st Floor",
    tagline: "Everyday Affordable Style & Footwear",
    hours: "11:00 AM – 09:30 PM",
    phone: "+91 62877 76113",
    description: "Great value fashion collections for the whole family with contemporary designs across clothing and accessories.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop",
    mapHotspot: { x: 30, y: 40 },
    isAnchor: true,
    offersCount: 3
  },
  {
    id: "pvr-cinemas",
    name: "PVR Cinemas",
    category: "entertainment",
    floor: "3rd Floor",
    tagline: "4-Screen Multiplex with Dolby Atmos Sound",
    hours: "11:00 AM – 11:30 PM",
    phone: "+91 62877 76114",
    description: "Catch the latest Bollywood, Hollywood, and regional blockbusters in plush recliners with state-of-the-art Dolby Atmos audio.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop",
    mapHotspot: { x: 78, y: 25 },
    isAnchor: true
  },
  {
    id: "lemon-tree-hotel",
    name: "Lemon Tree Hotel",
    category: "hospitality",
    floor: "3rd Floor",
    tagline: "4-Star Hospitality & Banquet Suites",
    hours: "24 Hours Open",
    phone: "+91 62877 76115",
    description: "Upscale 4-star hotel integrated into Bokaro Mall, featuring luxury rooms, conference halls, and fine dining.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    mapHotspot: { x: 80, y: 70 },
    isAnchor: true
  },
  {
    id: "kfc",
    name: "KFC",
    category: "dining",
    floor: "3rd Floor",
    tagline: "Finger Lickin' Good Fried Chicken",
    hours: "11:00 AM – 10:30 PM",
    phone: "+91 62877 76116",
    description: "Original recipe fried chicken, burgers, popcorn chicken, and refreshing beverages at our 3rd floor food court.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    mapHotspot: { x: 20, y: 75 }
  },
  {
    id: "pizza-hut",
    name: "Pizza Hut",
    category: "dining",
    floor: "3rd Floor",
    tagline: "Pan Pizzas & Italian Pastas",
    hours: "11:00 AM – 10:30 PM",
    phone: "+91 62877 76117",
    description: "Delicious signature pan pizzas, garlic breadsticks, pastas, and desserts for family dining.",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1000&auto=format&fit=crop",
    mapHotspot: { x: 40, y: 75 }
  },
  {
    id: "reliance-trends",
    name: "Reliance Trends",
    category: "fashion",
    floor: "1st Floor",
    tagline: "India's Favorite Fashion Store",
    hours: "11:00 AM – 09:30 PM",
    description: "A wide variety of high-fashion apparel and accessories catering to women, men, and kids at democratic pricing.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
    mapHotspot: { x: 60, y: 40 }
  },
  {
    id: "manyavar",
    name: "Manyavar & Mohey",
    category: "fashion",
    floor: "2nd Floor",
    tagline: "Traditional & Wedding Ethnic Wear",
    hours: "11:00 AM – 09:30 PM",
    description: "Premium sherwanis, kurtas, Indo-western suits, and bridal lehengas for grand celebrations.",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1000&auto=format&fit=crop",
    mapHotspot: { x: 25, y: 55 }
  },
  {
    id: "sugar-cosmetics",
    name: "Sugar Cosmetics",
    category: "beauty",
    floor: "Ground",
    tagline: "Bold & High-Performance Makeup",
    hours: "11:00 AM – 09:30 PM",
    description: "Cruelty-free, high-pigment cosmetics and skincare products tailored for modern Indian beauty enthusiasts.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    mapHotspot: { x: 50, y: 25 }
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: "monsoon-shopping-fest",
    title: "Monsoon Fashion Carnival 2026",
    date: "July 25 – August 10, 2026",
    time: "11:00 AM onwards",
    location: "Central Atrium, Ground Floor",
    category: "Shopping Fest",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
    description: "Exclusive discounts up to 50% off across 100+ top fashion brands. Stand a chance to win mega prizes on every purchase."
  },
  {
    id: "pvr-blockbuster-premiere",
    title: "PVR Blockbuster Premiere Night",
    date: "Every Friday Evening",
    time: "06:30 PM & 09:30 PM",
    location: "PVR Cinemas, 3rd Floor",
    category: "Cinema Release",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop",
    description: "Experience new movie releases with Dolby Atmos sound and complimentary popcorn upgrades."
  }
];

export const INITIAL_OFFERS: OfferItem[] = [
  {
    id: "offer-1",
    storeName: "Pantaloons",
    storeId: "pantaloons",
    title: "Flat 40% Off on Monsoon Trends",
    discount: "40% OFF",
    code: "BOKARO40",
    validTill: "Valid till Aug 15"
  },
  {
    id: "offer-2",
    storeName: "Reliance Smart Bazaar",
    storeId: "reliance-smart-bazaar",
    title: "Buy 1 Get 1 Free on Select Groceries",
    discount: "BUY 1 GET 1",
    code: "SMART50",
    validTill: "Valid till July 31"
  },
  {
    id: "offer-3",
    storeName: "Max Fashion",
    storeId: "max-fashion",
    title: "Flat ₹500 Cashback on ₹2999 Spend",
    discount: "₹500 OFF",
    code: "MAX500",
    validTill: "Valid till Aug 05"
  }
];
