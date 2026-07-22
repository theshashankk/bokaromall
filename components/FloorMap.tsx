'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Store, INITIAL_STORES } from '@/lib/data';
import { 
  MapPin, 
  Search, 
  Download, 
  ExternalLink, 
  Clock,
  Compass
} from 'lucide-react';

const FLOORS = ['Ground', '1st Floor', '2nd Floor', '3rd Floor'] as const;
type FloorType = typeof FLOORS[number];

interface FloorMapProps {
  highlightStoreId?: string;
}

export default function FloorMap({ highlightStoreId }: FloorMapProps) {
  const [activeFloor, setActiveFloor] = useState<FloorType>('Ground');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Filter stores on active floor
  const floorStores = INITIAL_STORES.filter(s => s.floor === activeFloor);

  const handleSelectStore = (store: Store) => {
    if (store.floor !== activeFloor) {
      setActiveFloor(store.floor as FloorType);
    }
    setSelectedStore(store);
  };

  return (
    <div className="bg-editorial-card dark:bg-onyx-card rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xl p-6 md:p-8 space-y-8">
      
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
        
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 text-brand-700 dark:text-brand-400 font-extrabold text-xs uppercase tracking-widest">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>Architectural Vector Floor Plan</span>
          </div>
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-editorial-text dark:text-onyx-text">
            Bokaro Mall Floor Layout ({activeFloor})
          </h2>
        </div>

        {/* Search & Export Controls */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search store or category on map..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-editorial-muted dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-editorial-text dark:text-onyx-text text-xs rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-brand-700 font-medium"
            />
          </div>

          {/* Download PDF Fallback */}
          <a
            href={`#download-${activeFloor.toLowerCase().replace(' ', '-')}`}
            onClick={(e) => {
              e.preventDefault();
              alert(`Downloading architectural vector floor plan PDF for ${activeFloor}...`);
            }}
            className="inline-flex items-center space-x-2 bg-brand-700 hover:bg-brand-800 text-white px-4 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-md transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Printable PDF</span>
          </a>
        </div>
      </div>

      {/* Floor Switcher Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {FLOORS.map((floor) => {
          const isActive = activeFloor === floor;
          const countOnFloor = INITIAL_STORES.filter(s => s.floor === floor).length;

          return (
            <button
              key={floor}
              onClick={() => {
                setActiveFloor(floor);
                setSelectedStore(null);
              }}
              className={`px-5 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap flex items-center space-x-2.5 ${
                isActive
                  ? 'bg-brand-700 text-white shadow-lg shadow-brand-700/30'
                  : 'bg-editorial-muted dark:bg-stone-900 text-editorial-text dark:text-onyx-text hover:bg-brand-50 border border-stone-200 dark:border-stone-800'
              }`}
            >
              <span>{floor}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                isActive ? 'bg-white/20 text-white' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
              }`}>
                {countOnFloor} Shops
              </span>
            </button>
          );
        })}
      </div>

      {/* Architectural 3D Vector SVG Floor Layout Canvas */}
      <div className="relative w-full aspect-[16/9] bg-stone-950 rounded-3xl overflow-hidden border border-stone-800 flex items-center justify-center p-4 md:p-8 shadow-inner">
        
        {/* SVG Blueprint Design */}
        <svg 
          viewBox="0 0 1000 600" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Outer Wall Shell */}
          <rect x="40" y="40" width="920" height="520" rx="35" fill="#0F121A" stroke="#282F40" strokeWidth="6" />
          <rect x="50" y="50" width="900" height="500" rx="30" fill="#141824" stroke="#1F2636" strokeWidth="2" />
          
          {/* Central Skylight Atrium Core */}
          <rect x="340" y="140" width="320" height="320" rx="24" fill="#0B0D12" stroke="#87161a" strokeWidth="3" strokeDasharray="10 5" />
          <circle cx="500" cy="300" r="90" fill="#87161a" fillOpacity="0.08" stroke="#87161a" strokeWidth="2" />
          
          {/* Architectural Axis & Corridor Walkways */}
          <line x1="50" y1="300" x2="340" y2="300" stroke="#282F40" strokeWidth="3" />
          <line x1="660" y1="300" x2="950" y2="300" stroke="#282F40" strokeWidth="3" />
          <line x1="500" y1="50" x2="500" y2="140" stroke="#282F40" strokeWidth="3" />
          <line x1="500" y1="460" x2="500" y2="550" stroke="#282F40" strokeWidth="3" />

          {/* Department Bay Room Dividers */}
          <rect x="80" y="80" width="220" height="180" rx="12" fill="#1B2232" stroke="#2E384E" strokeWidth="2" />
          <rect x="80" y="340" width="220" height="180" rx="12" fill="#1B2232" stroke="#2E384E" strokeWidth="2" />
          <rect x="700" y="80" width="220" height="180" rx="12" fill="#1B2232" stroke="#2E384E" strokeWidth="2" />
          <rect x="700" y="340" width="220" height="180" rx="12" fill="#1B2232" stroke="#2E384E" strokeWidth="2" />

          {/* Zone Overlay Text Labels */}
          <text x="500" y="285" textAnchor="middle" fill="#F8FAFC" fontSize="16" fontWeight="bold" letterSpacing="2">
            CENTRAL ATRIUM & ESCALATORS
          </text>
          <text x="500" y="315" textAnchor="middle" fill="#87161a" fontSize="12" fontWeight="bold" letterSpacing="1">
            ELEVATORS • RESTROOMS • CONCOURSE
          </text>

          <text x="190" y="110" textAnchor="middle" fill="#64748B" fontSize="12" fontWeight="bold">WEST WING RETAIL</text>
          <text x="810" y="110" textAnchor="middle" fill="#64748B" fontSize="12" fontWeight="bold">EAST WING MULTIPLEX</text>
        </svg>

        {/* Interactive Store Hotspot Pins */}
        {floorStores.map((store) => {
          const isSelected = selectedStore?.id === store.id;
          const isHighlighted = highlightStoreId === store.id;

          return (
            <motion.div
              key={store.id}
              style={{
                left: `${store.mapHotspot.x}%`,
                top: `${store.mapHotspot.y}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                onClick={() => setSelectedStore(store)}
                className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                  isSelected || isHighlighted
                    ? 'bg-amber-500 text-stone-950 scale-125 shadow-2xl ring-4 ring-amber-300 animate-pulse'
                    : 'bg-brand-700 text-white hover:scale-110 hover:bg-brand-600 shadow-xl'
                }`}
                aria-label={`Hotspot for ${store.name}`}
              >
                <MapPin className="w-5 h-5" />
                
                {/* Store Label */}
                <span className="absolute -bottom-7 bg-stone-950/95 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-stone-800 whitespace-nowrap shadow-lg">
                  {store.name}
                </span>
              </button>
            </motion.div>
          );
        })}

        {/* Selected Store Popover Modal Overlay */}
        <AnimatePresence>
          {selectedStore && (
            <motion.div 
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-stone-950 border border-stone-800 text-white rounded-2xl p-6 shadow-2xl z-30 space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-extrabold text-brand-400 tracking-wider">
                    {selectedStore.category} • {selectedStore.floor}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mt-0.5">
                    {selectedStore.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStore(null)}
                  className="text-stone-400 hover:text-white text-xs font-bold px-2 py-1 bg-stone-900 rounded-md border border-stone-800"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                {selectedStore.tagline || selectedStore.description}
              </p>

              <div className="flex items-center justify-between text-xs pt-3 border-t border-stone-800">
                <span className="flex items-center space-x-1.5 text-stone-400">
                  <Clock className="w-3.5 h-3.5 text-brand-400" />
                  <span>{selectedStore.hours}</span>
                </span>

                <Link
                  href={`/stores/${selectedStore.id}`}
                  className="bg-brand-700 hover:bg-brand-800 text-white px-4 py-2 rounded-xl font-extrabold flex items-center space-x-1 text-xs shadow-md"
                >
                  <span>Store Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Directory Quick-Jump Selector */}
      <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-editorial-subtext dark:text-onyx-subtext">
          Shops Located on {activeFloor}:
        </h4>
        <div className="flex flex-wrap gap-2">
          {floorStores.map((store) => (
            <button
              key={store.id}
              onClick={() => handleSelectStore(store)}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition ${
                selectedStore?.id === store.id
                  ? 'bg-brand-700 text-white shadow'
                  : 'bg-editorial-muted dark:bg-stone-900 text-editorial-text dark:text-onyx-text hover:bg-brand-50 border border-stone-200 dark:border-stone-800'
              }`}
            >
              {store.name}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
