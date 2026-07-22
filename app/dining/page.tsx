'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { INITIAL_STORES } from '@/lib/data';
import StoreCard from '@/components/StoreCard';
import { Utensils, Coffee, Pizza, Sparkles, Clock, CheckCircle } from 'lucide-react';

export default function DiningPage() {
  const diningStores = INITIAL_STORES.filter(s => s.category === 'dining');

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-12">
      
      {/* Page Hero */}
      <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white p-8 md:p-14 border border-stone-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-700 text-white text-xs font-bold uppercase tracking-wider">
            <Utensils className="w-4 h-4" />
            <span>Gourmet & Street Food</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Dining & Gastronomy at Bokaro Mall
          </h1>

          <p className="text-stone-300 text-base leading-relaxed">
            From the vibrant flavors of Chaupal Indian Street Food and Chatori counters to international favorites like Pizza Hut, KFC, and artisanal espresso at Cafe Coffee Day.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-semibold text-stone-300 pt-2">
            <span className="flex items-center space-x-1.5 bg-stone-800 px-3 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-brand-400" />
              <span>Food Court Hours: 11:00 AM – 10:30 PM</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-stone-800 px-3 py-1.5 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Pure Veg & Non-Veg Outlets</span>
            </span>
          </div>
        </div>

        <div className="relative aspect-video w-full lg:w-96 rounded-2xl overflow-hidden shadow-2xl border border-stone-700">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
            alt="Chaupal Food Court Bokaro Mall"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Outlets Grid */}
      <div className="space-y-6">
        <div className="flex justify-between items-end pb-4 border-b border-editorial-border dark:border-onyx-border">
          <div>
            <span className="text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
              3rd Floor Gastronomy Zone
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-editorial-text dark:text-onyx-text mt-1">
              Restaurants & Cafes
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diningStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>

    </div>
  );
}
