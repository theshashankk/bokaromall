'use client';

import React from 'react';
import FloorMap from '@/components/FloorMap';
import ParkingWidget from '@/components/ParkingWidget';
import { MALL_INFO } from '@/lib/data';
import { MapPin, Navigation, Clock, Phone, Car, Bus, ShieldCheck } from 'lucide-react';

export default function VisitPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-12">
      
      {/* Header */}
      <div className="max-w-2xl space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
          <MapPin className="w-4 h-4" />
          <span>Location & Floor Layout</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text">
          Visit Bokaro Mall
        </h1>
        <p className="text-editorial-subtext dark:text-onyx-subtext text-base leading-relaxed">
          Plan your visit with our interactive 4-level floor map, live parking availability assistant, driving directions, and public transit guide.
        </p>
      </div>

      {/* 1. Interactive Floor Map Component */}
      <FloorMap />

      {/* 2. Live Parking Availability Widget */}
      <ParkingWidget />

      {/* 3. Getting Here & Directions Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Address Card */}
        <div className="bg-editorial-card dark:bg-onyx-card border border-editorial-border dark:border-onyx-border rounded-3xl p-6 space-y-3">
          <div className="p-3 rounded-2xl bg-brand-700 text-white w-fit">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-lg font-bold text-editorial-text dark:text-onyx-text">
            Mall Address
          </h3>
          <p className="text-xs text-editorial-subtext dark:text-onyx-subtext leading-relaxed">
            {MALL_INFO.address}
          </p>
          <div className="pt-2">
            <a
              href="https://maps.google.com/?q=The+Bokaro+Mall+Jharkhand"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-brand-700 dark:text-brand-400 inline-flex items-center space-x-1 hover:underline"
            >
              <span>Open in Google Maps</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Operating Hours Card */}
        <div className="bg-editorial-card dark:bg-onyx-card border border-editorial-border dark:border-onyx-border rounded-3xl p-6 space-y-3">
          <div className="p-3 rounded-2xl bg-amber-500 text-stone-950 w-fit">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-lg font-bold text-editorial-text dark:text-onyx-text">
            Opening Hours
          </h3>
          <p className="text-xs text-editorial-subtext dark:text-onyx-subtext leading-relaxed">
            Retail Outlets: 11:00 AM – 9:30 PM (Daily)<br />
            PVR Cinemas & Dining: 10:00 AM – 11:30 PM
          </p>
        </div>

        {/* Transit & Parking Info */}
        <div className="bg-editorial-card dark:bg-onyx-card border border-editorial-border dark:border-onyx-border rounded-3xl p-6 space-y-3">
          <div className="p-3 rounded-2xl bg-emerald-600 text-white w-fit">
            <Car className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-lg font-bold text-editorial-text dark:text-onyx-text">
            Parking & Access
          </h3>
          <p className="text-xs text-editorial-subtext dark:text-onyx-subtext leading-relaxed">
            1,200+ secure parking slots across B1, B2, and Open Deck with automated ticketing & EV charging points.
          </p>
        </div>

      </div>

    </div>
  );
}
