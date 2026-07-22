'use client';

import React, { useState } from 'react';
import StoreCard from '@/components/StoreCard';
import { INITIAL_STORES, Store } from '@/lib/data';
import { Search, ShoppingBag, Filter } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'fashion', label: 'Fashion & Apparel' },
  { id: 'hypermarket', label: 'Hypermarket' },
  { id: 'entertainment', label: 'Cinema & Gaming' },
  { id: 'dining', label: 'Dining & Cafes' },
  { id: 'beauty', label: 'Beauty & Cosmetics' },
  { id: 'hospitality', label: 'Hospitality' },
];

const FLOORS = ['All Floors', 'Ground', '1st Floor', '2nd Floor', '3rd Floor'];

export default function StoresDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFloor, setSelectedFloor] = useState('All Floors');

  const filteredStores = INITIAL_STORES.filter((store) => {
    const matchesSearch = 
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (store.tagline || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (store.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || store.category === selectedCategory;
    const matchesFloor = selectedFloor === 'All Floors' || store.floor === selectedFloor;

    return matchesSearch && matchesCategory && matchesFloor;
  });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-10">
      
      {/* Page Header */}
      <div className="max-w-2xl space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
          <ShoppingBag className="w-4 h-4" />
          <span>Full Retail Directory</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text">
          Store Directory & Brands
        </h1>
        <p className="text-editorial-subtext dark:text-onyx-subtext text-base leading-relaxed">
          Explore 150+ flagship apparel stores, hypermarket superstores, beauty kiosks, food court outlets, and entertainment venues at Bokaro Mall.
        </p>
      </div>

      {/* Filter & Search Bar Controls */}
      <div className="bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 rounded-3xl p-6 shadow-xl space-y-6">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search stores by brand name, category, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-editorial-muted dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-editorial-text dark:text-onyx-text text-sm rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-brand-700 font-medium"
          />
        </div>

        {/* Category Pills */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
            Filter by Category
          </label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition ${
                  selectedCategory === cat.id
                    ? 'bg-brand-700 text-white shadow-md'
                    : 'bg-editorial-muted dark:bg-stone-900 text-editorial-text dark:text-onyx-text hover:bg-stone-200 dark:hover:bg-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Floor Pills */}
        <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-stone-800">
          <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
            Filter by Floor Level
          </label>
          <div className="flex flex-wrap gap-2">
            {FLOORS.map((floor) => (
              <button
                key={floor}
                onClick={() => setSelectedFloor(floor)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition ${
                  selectedFloor === floor
                    ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-950 font-bold shadow-md'
                    : 'bg-editorial-muted dark:bg-stone-900 text-editorial-text dark:text-onyx-text hover:bg-stone-200 dark:hover:bg-stone-800'
                }`}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Store Results Summary */}
      <div className="flex justify-between items-center text-xs font-bold text-editorial-subtext dark:text-onyx-subtext">
        <span>Showing {filteredStores.length} stores</span>
        {(searchQuery || selectedCategory !== 'all' || selectedFloor !== 'All Floors') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedFloor('All Floors');
            }}
            className="text-brand-700 dark:text-brand-400 hover:underline"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Store Grid */}
      {filteredStores.length === 0 ? (
        <div className="text-center py-16 bg-editorial-card dark:bg-onyx-card rounded-3xl border border-stone-200 dark:border-stone-800 space-y-3">
          <Filter className="w-8 h-8 text-stone-400 mx-auto" />
          <h3 className="font-heading text-lg font-bold">No stores found</h3>
          <p className="text-xs text-stone-400 max-w-sm mx-auto">
            No retail stores match your search query or filter selection. Try clearing filters or searching for another brand.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      )}

    </div>
  );
}
