'use client';

import React, { useState } from 'react';
import { MALL_INFO } from '@/lib/data';
import { Car, MapPin, CheckCircle, Save, Info } from 'lucide-react';

export default function ParkingWidget() {
  const [savedSlot, setSavedSlot] = useState<string | null>(null);
  const [slotInput, setSlotInput] = useState('');

  const handleSaveSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!slotInput.trim()) return;
    setSavedSlot(slotInput.toUpperCase());
    setSlotInput('');
  };

  return (
    <div className="bg-editorial-card dark:bg-onyx-card rounded-3xl border border-stone-200 dark:border-stone-800 p-6 md:p-8 shadow-xl space-y-6">
      
      <div className="flex items-center space-x-3.5 pb-5 border-b border-stone-200 dark:border-stone-800">
        <div className="p-3 rounded-2xl bg-brand-700 text-white shadow-md">
          <Car className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-extrabold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
            Smart Visitor Utilities
          </span>
          <h3 className="font-heading text-2xl font-extrabold text-editorial-text dark:text-onyx-text mt-0.5">
            Live Parking Availability Meter
          </h3>
        </div>
      </div>

      {/* Live Availability Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-editorial-muted dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
          <span className="text-xs font-bold text-editorial-subtext dark:text-onyx-subtext">Basement 1 (B1)</span>
          <div className="flex justify-between items-end">
            <span className="font-heading text-2xl font-extrabold text-emerald-700 dark:text-emerald-400">142 Slots</span>
            <span className="text-[11px] font-extrabold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-md">
              OPEN
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-editorial-muted dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
          <span className="text-xs font-bold text-editorial-subtext dark:text-onyx-subtext">Basement 2 (B2)</span>
          <div className="flex justify-between items-end">
            <span className="font-heading text-2xl font-extrabold text-emerald-700 dark:text-emerald-400">120 Slots</span>
            <span className="text-[11px] font-extrabold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-md">
              OPEN
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-editorial-muted dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
          <span className="text-xs font-bold text-editorial-subtext dark:text-onyx-subtext">Open Deck</span>
          <div className="flex justify-between items-end">
            <span className="font-heading text-2xl font-extrabold text-emerald-700 dark:text-emerald-400">80 Slots</span>
            <span className="text-[11px] font-extrabold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-md">
              OPEN
            </span>
          </div>
        </div>
      </div>

      {/* "Save My Parked Car Location" Helper Tool */}
      <div className="p-5 rounded-2xl bg-brand-50/80 dark:bg-stone-900 border border-brand-200 dark:border-stone-800 space-y-3">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-800 dark:text-brand-400 flex items-center space-x-1.5">
          <Save className="w-4 h-4 text-brand-700 dark:text-brand-400" />
          <span>Save Your Parked Car Location</span>
        </h4>

        {!savedSlot ? (
          <form onSubmit={handleSaveSlot} className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. B1-Slot 42"
              value={slotInput}
              onChange={(e) => setSlotInput(e.target.value)}
              className="flex-1 bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-2.5 text-xs text-editorial-text dark:text-onyx-text outline-none focus:ring-2 focus:ring-brand-700 font-semibold"
            />
            <button
              type="submit"
              className="bg-brand-700 hover:bg-brand-800 text-white px-5 py-2.5 rounded-xl text-xs font-extrabold shadow-md"
            >
              Save Location
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-between bg-white dark:bg-stone-950 p-3.5 rounded-xl border border-emerald-500/40">
            <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
              <CheckCircle className="w-4.5 h-4.5" />
              <span>Saved Location: {savedSlot}</span>
            </div>
            <button
              onClick={() => setSavedSlot(null)}
              className="text-xs font-bold text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white underline"
            >
              Clear
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
