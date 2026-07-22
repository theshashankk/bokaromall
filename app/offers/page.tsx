'use client';

import React from 'react';
import Link from 'next/link';
import { INITIAL_OFFERS } from '@/lib/data';
import { Tag, Clock, ArrowRight, Sparkles, Store as StoreIcon } from 'lucide-react';

export default function OffersPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-10">
      
      {/* Header */}
      <div className="max-w-2xl space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
          <Tag className="w-4 h-4" />
          <span>Active In-Store Savings</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text">
          Offers & Discount Promotions
        </h1>
        <p className="text-editorial-subtext dark:text-onyx-subtext text-base leading-relaxed">
          Overview of active promotional offers, seasonal discounts, and coupon codes available at Bokaro Mall retail outlets.
        </p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INITIAL_OFFERS.map((offer) => (
          <div 
            key={offer.id}
            className="bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 rounded-3xl p-6 space-y-6 flex flex-col justify-between hover:shadow-2xl transition-shadow"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-extrabold text-brand-700 dark:text-brand-400 uppercase tracking-wider block">
                    {offer.storeName}
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-editorial-text dark:text-onyx-text mt-1">
                    {offer.title}
                  </h2>
                </div>
                <span className="bg-brand-700 text-white font-extrabold text-xs px-3 py-1.5 rounded-lg shadow shrink-0">
                  {offer.discount}
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs text-editorial-subtext dark:text-onyx-subtext font-medium">
                <Clock className="w-4 h-4 text-brand-700 dark:text-brand-400" />
                <span>{offer.validTill} • Visit Store to Avail</span>
              </div>

              {offer.code && (
                <div className="p-3.5 rounded-2xl bg-editorial-muted dark:bg-stone-900 text-center font-mono text-xs font-bold text-brand-700 dark:text-brand-400 border border-dashed border-brand-300 dark:border-stone-800">
                  PROMO CODE: {offer.code}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
              <Link
                href={offer.storeId ? `/stores/${offer.storeId}` : '/stores'}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition shadow"
              >
                <span>Visit Store Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
