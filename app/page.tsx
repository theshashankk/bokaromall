'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import Hero from '@/components/Hero';
import BrandTicker from '@/components/BrandTicker';
import StoreCard from '@/components/StoreCard';
import ParkingWidget from '@/components/ParkingWidget';
import { INITIAL_STORES, INITIAL_OFFERS, MALL_INFO } from '@/lib/data';
import { 
  ShoppingBag, 
  Film, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  MapPin,
  ExternalLink,
  Building,
  Award
} from 'lucide-react';

export default function HomePage() {
  const featuredStores = INITIAL_STORES.slice(0, 6);
  const shouldReduceMotion = useReducedMotion();

  const appleScrollytellingVariant = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="space-y-24 lg:space-y-36 pb-32">
      
      {/* 1. Hero Banner (Apple Gradient Text & Parallax) */}
      <Hero />

      {/* 2. Flagship Brand Ticker */}
      <BrandTicker />

      {/* 3. Apple Bento Grid Showcase Section */}
      <motion.section 
        variants={appleScrollytellingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 md:px-6 space-y-12"
      >
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-700/10 dark:bg-brand-400/10 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-[0.2em] border border-brand-700/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture & Experience</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-editorial-text dark:text-onyx-text tracking-tight">
            Jharkhand’s Premier Lifestyle Landmark
          </h2>
          <p className="text-editorial-subtext dark:text-onyx-subtext text-base md:text-lg font-medium leading-relaxed">
            Developed by {MALL_INFO.developer}, Bokaro Mall integrates 150+ flagship apparel stores, a 4-screen PVR multiplex, and 4-star Lemon Tree hospitality into a single luxury destination.
          </p>
        </div>

        {/* Apple-Style Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Large Featured Interior Showcase */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden bg-stone-900 text-white min-h-[420px] p-8 md:p-12 flex flex-col justify-end border border-stone-800 shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1567449303078-57ad995bd301?q=80&w=1200&auto=format&fit=crop"
              alt="Bokaro Mall Interior Atrium"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            <div className="relative z-10 space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-400">
                Central Atrium & Skylight Core
              </span>
              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white">
                World-Class Retail Architecture
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                4 expansive retail levels connected by glass elevators, central atrium skylights, and multi-tier parking facilities.
              </p>
            </div>
          </div>

          {/* Bento Card 2: Lemon Tree Hotel & Hospitality */}
          <div className="md:col-span-4 rounded-3xl bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-shadow space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em] block">
                Integrated Hospitality
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-editorial-text dark:text-onyx-text">
                Lemon Tree Hotel
              </h3>
              <p className="text-xs text-editorial-subtext dark:text-onyx-subtext leading-relaxed font-medium">
                4-Star premium accommodation with banqueting suites and luxury hospitality services built directly inside Bokaro Mall.
              </p>
            </div>

            <Link
              href="/stores/lemon-tree-hotel"
              className="inline-flex items-center space-x-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-400 hover:underline"
            >
              <span>Explore Lemon Tree</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Bento Card 3: PVR Cinema Showcase */}
          <div className="md:col-span-6 rounded-3xl bg-stone-950 border border-stone-800 p-8 md:p-10 text-white flex flex-col justify-between shadow-2xl space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-700/30 text-brand-400 text-[11px] font-extrabold uppercase tracking-widest border border-brand-500/30">
                <Film className="w-3.5 h-3.5" />
                <span>3rd Floor Multiplex</span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold text-white">
                PVR Cinemas 4D Dolby Atmos
              </h3>
              <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-medium">
                4 multiplex screens equipped with Dolby Atmos immersive sound, plush recliner seats, and artisanal popcorn combos.
              </p>
            </div>

            <a
              href="https://in.bookmyshow.com/bokaro"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-brand-700 hover:bg-brand-800 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg w-fit"
            >
              <span>BookMyShow Reference Link</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Bento Card 4: Hypermarket & Fashion Anchors */}
          <div className="md:col-span-6 rounded-3xl bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 p-8 md:p-10 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-shadow space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-extrabold uppercase tracking-widest">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Ground & 1st Floor Anchors</span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold text-editorial-text dark:text-onyx-text">
                Reliance Smart Bazaar & Fashion
              </h3>
              <p className="text-xs md:text-sm text-editorial-subtext dark:text-onyx-subtext leading-relaxed font-medium">
                Shop flagship collections at Reliance Smart Bazaar, Pantaloons, Max Fashion, Reliance Trends, Monte Carlo, Cantabil, and Sugar Cosmetics.
              </p>
            </div>

            <Link
              href="/stores"
              className="inline-flex items-center space-x-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md w-fit"
            >
              <span>Browse All Stores</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </motion.section>

      {/* 4. Store Directory Preview with Apple Scrollytelling */}
      <motion.section 
        variants={appleScrollytellingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 md:px-6 space-y-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-editorial-border dark:border-onyx-border">
          <div>
            <span className="text-xs font-extrabold text-brand-700 dark:text-brand-400 uppercase tracking-[0.2em]">
              Store Directory Showcase
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text mt-1">
              Top Brands at Bokaro Mall
            </h2>
          </div>

          <Link
            href="/stores"
            className="inline-flex items-center space-x-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-400 hover:translate-x-1 transition-transform"
          >
            <span>View Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </motion.section>

      {/* 5. Active Deals Section with Apple Scrollytelling */}
      <motion.section 
        variants={appleScrollytellingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 md:px-6 space-y-10"
      >
        <div className="flex justify-between items-end pb-6 border-b border-editorial-border dark:border-onyx-border">
          <div>
            <span className="text-xs font-extrabold text-brand-700 dark:text-brand-400 uppercase tracking-[0.2em]">
              In-Store Savings
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text mt-1">
              Active Offers & Promotions
            </h2>
          </div>
          <Link
            href="/offers"
            className="inline-flex items-center space-x-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-400 hover:translate-x-1 transition-transform"
          >
            <span>View All Deals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_OFFERS.map((offer) => (
            <div 
              key={offer.id}
              className="bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 rounded-3xl p-6 space-y-4 hover:shadow-2xl transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-extrabold text-brand-700 dark:text-brand-400 uppercase tracking-wider">
                    {offer.storeName}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-editorial-text dark:text-onyx-text mt-1">
                    {offer.title}
                  </h3>
                </div>
                <span className="bg-brand-700 text-white font-extrabold text-xs px-3 py-1 rounded-lg shadow">
                  {offer.discount}
                </span>
              </div>

              <p className="text-xs font-bold text-editorial-subtext dark:text-onyx-subtext">
                {offer.validTill} • Visit Store to Avail
              </p>

              {offer.code && (
                <div className="p-3 rounded-xl bg-editorial-muted dark:bg-stone-900 text-center font-mono text-xs font-bold text-brand-700 dark:text-brand-400 border border-dashed border-brand-300 dark:border-stone-800">
                  COUPON: {offer.code}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* 6. Visitor Parking Tracker Widget */}
      <motion.section 
        variants={appleScrollytellingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 md:px-6"
      >
        <ParkingWidget />
      </motion.section>

    </div>
  );
}
