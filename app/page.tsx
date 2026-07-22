'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import BrandTicker from '@/components/BrandTicker';
import StoreCard from '@/components/StoreCard';
import ParkingWidget from '@/components/ParkingWidget';
import { INITIAL_STORES, INITIAL_EVENTS, INITIAL_OFFERS, MALL_INFO } from '@/lib/data';
import { 
  ShoppingBag, 
  Utensils, 
  Film, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Clock,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function HomePage() {
  const featuredStores = INITIAL_STORES.slice(0, 6);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Flagship Brand Ticker */}
      <BrandTicker />

      {/* 3. "Welcome to Bokaro Mall" Editorial Intro Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photography Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800">
              <Image
                src="https://images.unsplash.com/photo-1567449303078-57ad995bd301?q=80&w=1200&auto=format&fit=crop"
                alt="Bokaro Mall Interior Atrium"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
            </div>

            {/* Overlaid Floating Badge */}
            <div className="absolute -bottom-6 -right-2 md:bottom-6 md:-right-6 bg-editorial-card dark:bg-onyx-card border border-brand-700/40 p-5 rounded-2xl shadow-2xl max-w-xs space-y-1">
              <span className="text-[10px] font-bold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
                JHARKHAND'S PREMIER LANDMARK
              </span>
              <h4 className="font-heading text-base font-bold text-editorial-text dark:text-onyx-text">
                150+ Stores & Integrated Lemon Tree Hotel
              </h4>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider border border-brand-200 dark:border-brand-900">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Bokaro Mall</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-editorial-text dark:text-onyx-text leading-tight">
              Bokaro's Ultimate Destination for Fashion, Dining & Cinema
            </h2>

            <p className="text-editorial-subtext dark:text-onyx-subtext text-base leading-relaxed">
              Developed by {MALL_INFO.developer}, Bokaro Mall stands as the benchmark for commercial retail and lifestyle luxury in Bokaro Steel City. Visit us in person to experience flagship apparel stores, a 4-screen PVR multiplex, and gourmet food court dining.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-editorial-muted dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <CheckCircle2 className="w-5 h-5 text-brand-700 dark:text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-editorial-text dark:text-onyx-text">PVR Multiplex</h4>
                  <p className="text-[11px] text-editorial-subtext dark:text-onyx-subtext">4-screen Dolby Atmos sound & recliners</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-editorial-muted dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <CheckCircle2 className="w-5 h-5 text-brand-700 dark:text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-editorial-text dark:text-onyx-text">Hypermarket Anchors</h4>
                  <p className="text-[11px] text-editorial-subtext dark:text-onyx-subtext">Reliance Smart Bazaar, Pantaloons, Max</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/stores"
                className="bg-brand-700 hover:bg-brand-800 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-md flex items-center space-x-2"
              >
                <span>Browse All 150+ Stores</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/visit"
                className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-md flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>Visit Mall Info</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Store Directory Preview */}
      <section className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-editorial-border dark:border-onyx-border">
          <div>
            <span className="text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
              Store Directory Preview
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-editorial-text dark:text-onyx-text mt-1">
              Top Brands at Bokaro Mall
            </h2>
          </div>

          <Link
            href="/stores"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-brand-700 dark:text-brand-400 hover:translate-x-1 transition-transform"
          >
            <span>View All Stores</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </section>

      {/* 5. Cinemax Experience Highlight Banner (External Link to BookMyShow) */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white p-8 md:p-12 border border-stone-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl relative z-10">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Film className="w-3.5 h-3.5" />
              <span>PVR Multiplex 3rd Floor</span>
            </span>

            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
              Experience Summer Blockbusters in 4D Dolby Atmos
            </h2>

            <p className="text-stone-300 text-sm leading-relaxed">
              Check live screening showtimes and reserve movie tickets on BookMyShow or Paytm Movies for PVR Bokaro Mall.
            </p>

            <a
              href="https://in.bookmyshow.com/bokaro"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-brand-700 hover:bg-brand-800 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl"
            >
              <span>Book Tickets on BookMyShow</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Poster Graphic */}
          <div className="relative aspect-video w-full lg:w-96 rounded-2xl overflow-hidden shadow-xl border border-stone-700">
            <Image
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop"
              alt="PVR Multiplex Cinema"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* 6. Active Deals & Offers Section */}
      <section className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="flex justify-between items-end pb-4 border-b border-editorial-border dark:border-onyx-border">
          <div>
            <span className="text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
              Visit Mall for In-Store Savings
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-editorial-text dark:text-onyx-text mt-1">
              Active Offers & Promotions
            </h2>
          </div>
          <Link
            href="/offers"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-brand-700 dark:text-brand-400 hover:translate-x-1 transition-transform"
          >
            <span>View All Deals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_OFFERS.map((offer) => (
            <div 
              key={offer.id}
              className="bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden p-5 space-y-4 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-wider">
                    {offer.storeName}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-editorial-text dark:text-onyx-text mt-0.5">
                    {offer.title}
                  </h3>
                </div>
                <span className="bg-brand-700 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg">
                  {offer.discount}
                </span>
              </div>

              <p className="text-xs font-semibold text-editorial-subtext dark:text-onyx-subtext">
                {offer.validTill} • Visit Store to Avail
              </p>

              {offer.code && (
                <div className="p-2.5 rounded-xl bg-editorial-muted dark:bg-stone-900 text-center font-mono text-xs font-bold text-brand-700 dark:text-brand-400 border border-dashed border-brand-300 dark:border-stone-700">
                  COUPON: {offer.code}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Visitor Utilities & Parking Tracker Widget */}
      <section className="container mx-auto px-4 md:px-6">
        <ParkingWidget />
      </section>

    </div>
  );
}
