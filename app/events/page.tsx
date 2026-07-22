'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { INITIAL_EVENTS } from '@/lib/data';
import { Calendar, MapPin, Clock, ExternalLink, Sparkles } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-10">
      
      {/* Header */}
      <div className="max-w-2xl space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
          <Calendar className="w-4 h-4" />
          <span>Mall Calendar & Highlights</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text">
          Events & What's New
        </h1>
        <p className="text-editorial-subtext dark:text-onyx-subtext text-base leading-relaxed">
          Overview of upcoming cultural carnivals, seasonal shopping festivals, live music concerts, and cinema releases taking place at Bokaro Mall.
        </p>
      </div>

      {/* Events List */}
      <div className="space-y-8">
        {INITIAL_EVENTS.map((event) => (
          <div 
            key={event.id}
            className="bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 hover:shadow-2xl transition-shadow"
          >
            {/* Event Photo */}
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-700 text-white font-extrabold text-xs px-3 py-1 rounded-lg uppercase tracking-wider">
                {event.category}
              </div>
            </div>

            {/* Event Details */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-4 text-xs font-bold text-brand-700 dark:text-brand-400">
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </span>
                  <span className="flex items-center space-x-1.5 text-stone-500 dark:text-stone-400">
                    <Clock className="w-4 h-4 text-brand-700 dark:text-brand-400" />
                    <span>{event.time}</span>
                  </span>
                  <span className="flex items-center space-x-1.5 text-stone-500 dark:text-stone-400">
                    <MapPin className="w-4 h-4 text-brand-700 dark:text-brand-400" />
                    <span>{event.location}</span>
                  </span>
                </div>

                <h2 className="font-heading text-2xl font-extrabold text-editorial-text dark:text-onyx-text">
                  {event.title}
                </h2>

                <p className="text-sm text-editorial-subtext dark:text-onyx-subtext leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  ✦ Open to All Visitors at Bokaro Mall
                </span>
                
                {event.category === 'Cinema Release' ? (
                  <a
                    href="https://in.bookmyshow.com/bokaro"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brand-700 hover:bg-brand-800 text-white px-4 py-2 rounded-xl font-bold text-xs shadow flex items-center space-x-1.5"
                  >
                    <span>BookMyShow Reference</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href="/visit"
                    className="bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-xl font-bold text-xs shadow flex items-center space-x-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-brand-400" />
                    <span>Visit Central Atrium</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
