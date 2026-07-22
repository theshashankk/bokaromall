'use client';

import React from 'react';
import Link from 'next/link';

const ANCHOR_BRANDS = [
  "Reliance Smart Bazaar",
  "Pantaloons",
  "Max Fashion",
  "PVR Cinemas",
  "Reliance Trends",
  "KFC",
  "Pizza Hut",
  "Manyavar",
  "Cafe Coffee Day",
  "Reliance Digital",
  "HP World",
  "Lemon Tree Hotel"
];

export default function BrandTicker() {
  return (
    <section className="bg-stone-900 text-stone-300 py-4 border-y border-stone-800 overflow-hidden select-none">
      <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
        <div className="flex items-center space-x-12 shrink-0">
          <span className="text-xs tracking-widest text-brand-500 font-bold uppercase">FLAGSHIP BRANDS:</span>
          {ANCHOR_BRANDS.map((brand, idx) => (
            <span key={idx} className="font-heading text-sm font-semibold tracking-wider hover:text-white transition-colors cursor-default">
              ✦ {brand}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-12 shrink-0">
          <span className="text-xs tracking-widest text-brand-500 font-bold uppercase">FLAGSHIP BRANDS:</span>
          {ANCHOR_BRANDS.map((brand, idx) => (
            <span key={`dup-${idx}`} className="font-heading text-sm font-semibold tracking-wider hover:text-white transition-colors cursor-default">
              ✦ {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
