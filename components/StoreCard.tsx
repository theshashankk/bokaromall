'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Store } from '@/lib/data';
import { MapPin, Clock, ArrowRight, Tag, Star } from 'lucide-react';

interface StoreCardProps {
  store: Store;
}

export default function StoreCard({ store }: StoreCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { type: "spring", stiffness: 400, damping: 25 } }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      className="group bg-editorial-card dark:bg-onyx-card rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Card Header & Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200 dark:bg-stone-800">
          <Image
            src={store.image}
            alt={store.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Backdrop Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />

          {/* Category & Floor Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <span className="px-2.5 py-1 rounded-md bg-brand-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
              {store.category}
            </span>
            {store.isAnchor && (
              <span className="px-2.5 py-1 rounded-md bg-amber-500 text-stone-950 text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1">
                <Star className="w-3 h-3 fill-stone-950" />
                Anchor
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
            <span className="inline-flex items-center space-x-1 text-xs bg-stone-950/90 text-white px-2.5 py-1 rounded-lg font-semibold shadow-md">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>{store.floor}</span>
            </span>
            {store.offersCount && store.offersCount > 0 && (
              <span className="inline-flex items-center space-x-1 text-xs bg-emerald-600 text-white px-2.5 py-1 rounded-lg font-bold shadow-md">
                <Tag className="w-3.5 h-3.5" />
                <span>{store.offersCount} Active Deals</span>
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          <h3 className="font-heading text-xl font-bold text-editorial-text dark:text-onyx-text group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors line-clamp-1">
            {store.name}
          </h3>

          <p className="text-xs font-normal text-editorial-subtext dark:text-onyx-subtext line-clamp-2 leading-relaxed">
            {store.tagline || store.description}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-stone-200/80 dark:border-stone-800/80 mt-auto">
        <span className="text-xs font-semibold text-editorial-subtext dark:text-onyx-subtext flex items-center space-x-1.5">
          <Clock className="w-3.5 h-3.5 text-brand-700 dark:text-brand-400" />
          <span>{store.hours}</span>
        </span>

        <Link
          href={`/stores/${store.id}`}
          className="inline-flex items-center space-x-1 text-xs font-extrabold text-brand-700 dark:text-brand-400 group-hover:translate-x-1 transition-transform"
        >
          <span>View Store</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
