'use client';

import React, { useState } from 'react';
import StoreCard from '@/components/StoreCard';
import { INITIAL_STORES } from '@/lib/data';
import { Search, SlidersHorizontal, ShoppingBag } from 'lucide-react';

const CATEGORIES = [
  { label: 'All Categories', value: 'all' },
  { label: 'Fashion & Apparel', value: 'fashion' },
  { label: 'Electronics & Tech', value: 'electronics' },
  { label: 'Dining & Cafes', value: 'dining' },
  { label: 'Entertainment', value: 'entertainment' },
  { label: 'Beauty & Wellness', value: 'beauty' },
  { label: 'Hypermarket', value: 'hypermarket' },
];

const FLOORS = ['All Floors', 'Ground', '1st Floor', '2nd Floor', '3rd Floor'];

export default function StoresPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFloor, setSelectedFloor] = useState('All Floors');

  const filteredStores = INITIAL_STORES.filter((store) => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          store.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || store.category === selectedCategory;
    const matchesFloor = selectedFloor === 'All Floors' || store.floor === selectedFloor;

    return matchesSearch && matchesCategory && matchesFloor;
  });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-10">
      
      {/* Page Header */}
      <div className="max-w-2xl space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
          <ShoppingBag className="w-4 h-4" />
          <span>Full Retail Directory</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text">
          Store Directory
        </h1>
        <p className="text-editorial-subtext dark:text-onyx-subtext text-base leading-relaxed">
          Explore 150+ international and Indian fashion brands, hypermarkets, electronics hubs, and beauty boutiques at Bokaro Mall.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-editorial-card dark:bg-onyx-card p-6 rounded-3xl border border-editorial-border dark:border-onyx-border shadow-lg space-y-6">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by store name, brand, or item..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-brand-700 transition"
          />
        </div>

        {/* Category Pills */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-editorial-subtext dark:text-onyx-subtext uppercase tracking-wider">
            Filter by Category
          </label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedCategory === cat.value
                    ? 'bg-brand-700 text-white shadow-md'
                    : 'bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text hover:bg-brand-50 dark:hover:bg-onyx-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Floor Filter */}
        <div className="space-y-2 pt-2 border-t border-editorial-border/40 dark:border-onyx-border/40">
          <label className="text-xs font-bold text-editorial-subtext dark:text-onyx-subtext uppercase tracking-wider">
            Filter by Floor
          </label>
          <div className="flex flex-wrap gap-2">
            {FLOORS.map((floor) => (
              <button
                key={floor}
                onClick={() => setSelectedFloor(floor)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedFloor === floor
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text hover:bg-stone-200 dark:hover:bg-stone-800'
                }`}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count & Store Grid */}
      <div className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-wider text-editorial-subtext dark:text-onyx-subtext">
          Showing {filteredStores.length} Stores
        </div>

        {filteredStores.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-editorial-card dark:bg-onyx-card rounded-3xl border border-editorial-border dark:border-onyx-border space-y-3">
            <h3 className="font-heading text-xl font-bold">No stores found</h3>
            <p className="text-xs text-editorial-subtext dark:text-onyx-subtext">
              Try adjusting your search query or category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedFloor('All Floors');
              }}
              className="bg-brand-700 text-white text-xs font-bold px-4 py-2 rounded-xl mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
