'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { INITIAL_STORES, INITIAL_OFFERS } from '@/lib/data';
import FloorMap from '@/components/FloorMap';
import { MapPin, Clock, Phone, Tag, ArrowLeft } from 'lucide-react';

export default function StoreDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const store = INITIAL_STORES.find(s => s.id === slug);

  if (!store) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="font-heading text-3xl font-bold">Store Not Found</h1>
        <p className="text-stone-400 text-sm">The store you requested is not listed in Bokaro Mall.</p>
        <Link href="/stores" className="bg-brand-700 text-white text-xs font-bold px-4 py-2 rounded-xl inline-block">
          Return to Store Directory
        </Link>
      </div>
    );
  }

  const storeOffers = INITIAL_OFFERS.filter(o => o.storeId === store.id);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-12">
      
      {/* Back Link */}
      <Link 
        href="/stores" 
        className="inline-flex items-center space-x-2 text-xs font-bold text-brand-700 dark:text-brand-400 hover:-translate-x-1 transition-transform"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Store Directory</span>
      </Link>

      {/* Store Banner & Bio Header */}
      <div className="bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Store Photo */}
        <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[300px]">
          <Image
            src={store.image}
            alt={store.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Store Information */}
        <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-md bg-brand-700 text-white text-xs font-bold uppercase tracking-wider">
                {store.category}
              </span>
              <span className="px-3 py-1 rounded-md bg-stone-800 text-stone-300 text-xs font-bold uppercase tracking-wider flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-brand-400" />
                <span>{store.floor}</span>
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-editorial-text dark:text-onyx-text">
              {store.name}
            </h1>

            {store.tagline && (
              <p className="text-base font-medium text-brand-700 dark:text-brand-400">
                "{store.tagline}"
              </p>
            )}

            <p className="text-sm text-editorial-subtext dark:text-onyx-subtext leading-relaxed">
              {store.description}
            </p>
          </div>

          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="text-stone-400 block">Operating Hours:</span>
              <span className="font-bold flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-brand-700 dark:text-brand-400" />
                <span>{store.hours}</span>
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-stone-400 block">Contact Desk:</span>
              <span className="font-bold flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-brand-700 dark:text-brand-400" />
                <span>{store.phone || '+91 62877 76111'}</span>
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Active Offers for this Store */}
      {storeOffers.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-heading text-xl font-bold flex items-center space-x-2">
            <Tag className="w-5 h-5 text-brand-700 dark:text-brand-400" />
            <span>Active Deals at {store.name}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {storeOffers.map(offer => (
              <div key={offer.id} className="p-4 rounded-2xl bg-editorial-muted dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex justify-between items-center text-xs">
                <div>
                  <h4 className="font-bold text-editorial-text dark:text-onyx-text">{offer.title}</h4>
                  <p className="text-[11px] text-stone-400">{offer.validTill}</p>
                </div>
                <span className="bg-brand-700 text-white font-bold px-3 py-1 rounded-lg">
                  {offer.discount}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Floor Map Location Highlight */}
      <div className="space-y-4">
        <h2 className="font-heading text-xl font-bold">Store Location on Interactive Map</h2>
        <FloorMap highlightStoreId={store.id} />
      </div>

    </div>
  );
}
