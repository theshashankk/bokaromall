export interface Store {
  id: string;
  name: string;
  category: 'fashion' | 'electronics' | 'dining' | 'entertainment' | 'beauty' | 'hypermarket' | 'hospitality';
  floor: 'Ground' | '1st Floor' | '2nd Floor' | '3rd Floor' | 'East Wing';
  logo: string;
  image: string;
  tagline: string;
  description: string;
  hours: string;
  phone: string;
  mapHotspot: { x: number; y: number }; // Percentage coordinates for SVG Map sync
  offersCount?: number;
  isAnchor?: boolean;
}

export interface MallEvent {
  id: string;
  title: string;
  category: 'Cultural' | 'Shopping Festival' | 'Cinema Release' | 'Dining Special';
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  isFeatured?: boolean;
}

export interface SpecialOffer {
  id: string;
  storeId: string;
  storeName: string;
  title: string;
  discount: string;
  validTill: string;
  code?: string;
  image: string;
}

export const MALL_INFO = {
  name: "Bokaro Mall",
  tagline: "The Premier Shopping, Dining & Entertainment Destination of Bokaro",
  developer: "Amit Realty & Amrit Housing",
  address: "Sector III/C, Bokaro Steel City, Jharkhand - 827003, India",
  phone: "+91 62877 76111",
  email: "helpdeskbokaro@amitreallty.com",
  hours: "11:00 AM – 9:30 PM (Sun–Sat)",
  cinemaHours: "10:00 AM – 11:30 PM",
  parkingSlots: {
    total: 1200,
    available: 342,
    floors: ["Basement 1", "Basement 2", "Open Deck"]
  },
  socials: {
    facebook: "https://www.facebook.com/MyBokaroMall",
    instagram: "https://www.instagram.com/thebokaromall/",
    youtube: "https://www.youtube.com/@socialmediabokaromall",
    twitter: "https://x.com/bokaromall",
    linkedin: "https://www.linkedin.com/company/27941627/"
  }
};

export const INITIAL_STORES: Store[] = [
  {
    id: "reliance-smart-bazaar",
    name: "Reliance Smart Bazaar",
    category: "hypermarket",
    floor: "Ground",
    logo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1200&auto=format&fit=crop",
    tagline: "One-stop destination for grocery, home essentials & daily needs.",
    description: "Reliance Smart Bazaar offers an unbeatable shopping experience in Bokaro Mall, featuring fresh produce, packaged foods, apparel, homeware, and electronics at everyday lowest prices.",
    hours: "10:00 AM – 10:00 PM",
    phone: "+91 62877 76111",
    mapHotspot: { x: 25, y: 35 },
    offersCount: 3,
    isAnchor: true
  },
  {
    id: "pantaloons",
    name: "Pantaloons",
    category: "fashion",
    floor: "Ground",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    tagline: "Trendy fashion apparel for women, men & kids.",
    description: "Pantaloons at Bokaro Mall brings top ethnic, western, footwear, and accessory brands together under one spacious, vibrant flagship department store.",
    hours: "11:00 AM – 9:30 PM",
    phone: "+91 62877 76112",
    mapHotspot: { x: 70, y: 30 },
    offersCount: 2,
    isAnchor: true
  },
  {
    id: "max-fashion",
    name: "Max Fashion",
    category: "fashion",
    floor: "1st Floor",
    logo: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
    tagline: "Everyday stylish fashion for the modern family.",
    description: "Max Fashion offers high-style clothing, footwear, and accessories crafted for dynamic urban lifestyles with continuous fresh wardrobe collections.",
    hours: "11:00 AM – 9:30 PM",
    phone: "+91 62877 76113",
    mapHotspot: { x: 30, y: 55 },
    offersCount: 1,
    isAnchor: true
  },
  {
    id: "reliance-trends",
    name: "Reliance Trends",
    category: "fashion",
    floor: "1st Floor",
    logo: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop",
    tagline: "India's favorite apparel & fashion store.",
    description: "Trends features democratized fashion with exclusive domestic and global brands across ethnic wear, denim, formal wear, and casual weekend attire.",
    hours: "11:00 AM – 9:30 PM",
    phone: "+91 62877 76114",
    mapHotspot: { x: 75, y: 60 },
    offersCount: 2
  },
  {
    id: "manyavar",
    name: "Manyavar Mohey",
    category: "fashion",
    floor: "2nd Floor",
    logo: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    tagline: "Timeless Indian wedding & festive couture.",
    description: "Celebrated Indian celebration wear featuring handcrafted sherwanis, bandhgalas, bridal lehengas, and festive kurtas.",
    hours: "11:00 AM – 9:30 PM",
    phone: "+91 62877 76115",
    mapHotspot: { x: 20, y: 40 },
    offersCount: 1
  },
  {
    id: "reliance-digital",
    name: "Reliance Digital",
    category: "electronics",
    floor: "1st Floor",
    logo: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1200&auto=format&fit=crop",
    tagline: "Personalized consumer electronics & smart gadgets destination.",
    description: "Bokaro's largest tech hub carrying laptops, smartphones, 4K TVs, home appliances, audio gear, and personal care tech with expert live demos.",
    hours: "11:00 AM – 9:30 PM",
    phone: "+91 62877 76116",
    mapHotspot: { x: 50, y: 25 }
  },
  {
    id: "hp-world",
    name: "HP World Store",
    category: "electronics",
    floor: "1st Floor",
    logo: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop",
    tagline: "Official HP laptops, gaming PCs & accessories experience center.",
    description: "Explore the latest HP Spectre, Envy, OMEN gaming laptops, Smart Tank printers, and genuine HP accessories.",
    hours: "11:00 AM – 9:30 PM",
    phone: "+91 62877 76117",
    mapHotspot: { x: 80, y: 25 }
  },
  {
    id: "pvr-cinemas",
    name: "PVR Cinemas (4 Screens)",
    category: "entertainment",
    floor: "3rd Floor",
    logo: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    tagline: "Premium multiplex cinema with Dolby Atmos sound & plush seating.",
    description: "Experience blockbusters in 4D acoustic luxury, featuring 4 screens, ergonomic recliners, gourmet snacks, and seamless digital booking.",
    hours: "10:00 AM – 11:30 PM",
    phone: "+91 62877 76118",
    mapHotspot: { x: 45, y: 70 },
    offersCount: 1,
    isAnchor: true
  },
  {
    id: "fun-city",
    name: "Fun City Game Zone",
    category: "entertainment",
    floor: "3rd Floor",
    logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    tagline: "Arcade, VR simulators, bowling & soft play zone for kids.",
    description: "The ultimate family entertainment center in Bokaro Mall, complete with prize redemption arcade games, bumper cars, and birthday party arenas.",
    hours: "11:00 AM – 9:30 PM",
    phone: "+91 62877 76119",
    mapHotspot: { x: 80, y: 70 }
  },
  {
    id: "pizza-hut",
    name: "Pizza Hut",
    category: "dining",
    floor: "3rd Floor",
    logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    tagline: "Pan pizzas, pastas, wings & garlic breads.",
    description: "Sit-down casual dining restaurant offering signature pan pizzas, cheesy crusts, fresh salads, and refreshing coolers.",
    hours: "11:00 AM – 10:30 PM",
    phone: "+91 62877 76120",
    mapHotspot: { x: 25, y: 25 },
    offersCount: 1
  },
  {
    id: "kfc",
    name: "KFC Restaurant",
    category: "dining",
    floor: "3rd Floor",
    logo: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=1200&auto=format&fit=crop",
    tagline: "Finger lickin' good fried chicken, burgers & rice bowls.",
    description: "Famous secret recipe fried chicken, Zinger burgers, popcorn chicken, and Krushers served hot in Bokaro Mall's food court.",
    hours: "11:00 AM – 10:30 PM",
    phone: "+91 62877 76121",
    mapHotspot: { x: 40, y: 25 }
  },
  {
    id: "cafe-coffee-day",
    name: "Cafe Coffee Day",
    category: "dining",
    floor: "3rd Floor",
    logo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    tagline: "A lot can happen over coffee.",
    description: "Cozy café space serving hand-crafted espresso coffees, frappes, hot teas, sandwiches, and chocolate cakes.",
    hours: "11:00 AM – 9:30 PM",
    phone: "+91 62877 76122",
    mapHotspot: { x: 55, y: 25 }
  },
  {
    id: "chatori-chaupal",
    name: "Chatori & Chaupal Food Court",
    category: "dining",
    floor: "3rd Floor",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    tagline: "Authentic Indian street food, thalis & regional savories.",
    description: "Generous Indian food court section serving chole bhature, pav bhaji, momos, South Indian dosas, and fresh lassis.",
    hours: "11:00 AM – 10:00 PM",
    phone: "+91 62877 76123",
    mapHotspot: { x: 70, y: 25 }
  },
  {
    id: "sugar-cosmetics",
    name: "Sugar Cosmetics & Beauty",
    category: "beauty",
    floor: "2nd Floor",
    logo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    tagline: "High-performance makeup & skincare essentials.",
    description: "Boutique beauty store featuring long-lasting lipsticks, foundations, eye makeup, and clean skincare line.",
    hours: "11:00 AM – 9:30 PM",
    phone: "+91 62877 76124",
    mapHotspot: { x: 60, y: 40 }
  },
  {
    id: "lemon-tree-hotel",
    name: "Lemon Tree Hotel",
    category: "hospitality",
    floor: "East Wing",
    logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=200&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    tagline: "4-Star Upscale Hospitality Integrated with Bokaro Mall.",
    description: "Features contemporary guest rooms, fine-dining Citrus Café, fitness pool, and full banquet facilities seamlessly connected to Bokaro Mall.",
    hours: "24 Hours Service",
    phone: "+91 62877 76125",
    mapHotspot: { x: 90, y: 50 },
    isAnchor: true
  }
];

export const INITIAL_EVENTS: MallEvent[] = [
  {
    id: "festive-shopping-carnival",
    title: "Bokaro Grand Shopping Carnival 2026",
    category: "Shopping Festival",
    date: "AUG 15 - AUG 25, 2026",
    time: "11:00 AM Onwards",
    location: "Central Atrium & All Floors",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop",
    description: "Shop for ₹3,000+ across any store in Bokaro Mall to enter daily lucky draws for gold coins, LED TVs, and a bumper car prize! Live music performances every weekend.",
    isFeatured: true
  },
  {
    id: "monsoon-food-fest",
    title: "Chaupal Monsoon Street Food Fest",
    category: "Dining Special",
    date: "JUL 28 - AUG 05, 2026",
    time: "01:00 PM – 09:30 PM",
    location: "3rd Floor Food Court",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    description: "Savor artisanal hot jalebis, kulhad chai, crispy pakoras, and fusion street delicacies prepared live by master chefs.",
    isFeatured: true
  },
  {
    id: "pvr-blockbuster-weekend",
    title: "PVR Dolby Atmos Blockbuster Week",
    category: "Cinema Release",
    date: "JUL 25 - JUL 31, 2026",
    time: "Multiple Showtimes",
    location: "PVR Multiplex 3rd Floor",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    description: "Catch the biggest summer action releases with complimentary popcorn upgrades on all morning shows."
  }
];

export const INITIAL_OFFERS: SpecialOffer[] = [
  {
    id: "pantaloons-flat-40",
    storeId: "pantaloons",
    storeName: "Pantaloons",
    title: "End of Season Super Sale",
    discount: "FLAT 40% OFF",
    validTill: "Valid till Aug 15",
    code: "BOKARO40",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "reliance-smart-grocery",
    storeId: "reliance-smart-bazaar",
    storeName: "Reliance Smart Bazaar",
    title: "Monthly Grocery Savings Fest",
    discount: "UP TO 50% OFF",
    validTill: "Valid till Aug 05",
    code: "SMART50",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "pizza-hut-combo",
    storeId: "pizza-hut",
    storeName: "Pizza Hut",
    title: "Family Meal Pizza Combo",
    discount: "BUY 1 GET 1 FREE",
    validTill: "Valid on Weekdays",
    code: "PIZZAHUTBOGO",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"
  }
];
