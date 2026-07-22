'use client';

import React from 'react';
import Link from 'next/link';
import { INITIAL_OFFERS } from '@/lib/data';
import { Tag, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function OffersPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-10">
      
      <div className="max-w-2xl space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
          <Tag className="w-4 h-4" />
          <span>Exclusive Retail Deals</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text">
          Offers & Promotions
        </h1>
        <p className="text-editorial-subtext dark:text-onyx-subtext text-base leading-relaxed">
          Unlock exclusive discount coupons, flash sales, and seasonal deals available across flagship stores in Bokaro Mall.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INITIAL_OFFERS.map((offer) => (
          <div 
            key={offer.id}
            className="bg-editorial-card dark:bg-onyx-card border border-editorial-border dark:border-onyx-border rounded-3xl p-6 space-y-4 hover:shadow-2xl transition-shadow flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-wider">
                  {offer.storeName}
                </span>
                <span className="bg-brand-700 text-white font-extrabold text-xs px-3 py-1 rounded-lg">
                  {offer.discount}
                </span>
              </div>

              <h2 className="font-heading text-xl font-bold text-editorial-text dark:text-onyx-text">
                {offer.title}
              </h2>

              <p className="text-xs text-editorial-subtext dark:text-onyx-subtext flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-brand-700" />
                <span>{offer.validTill}</span>
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-editorial-border dark:border-onyx-border">
              {offer.code && (
                <div className="p-3 rounded-xl bg-editorial-muted dark:bg-onyx-muted text-center font-mono text-xs font-bold text-brand-700 dark:text-brand-400 border border-dashed border-brand-300 dark:border-stone-700">
                  COUPON: {offer.code}
                </div>
              )}

              <Link
                href={`/stores/${offer.storeId}`}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 transition"
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
