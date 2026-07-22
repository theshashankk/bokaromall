'use client';

import React from 'react';
import { 
  Car, 
  Wifi, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  Gift, 
  HeartHandshake, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

const AMENITIES = [
  {
    icon: Car,
    title: "Multi-Level Automated Parking",
    description: "1,200+ secure parking slots with EV charging stations and vehicle slot memory assistance."
  },
  {
    icon: Wifi,
    title: "Complimentary High-Speed Wi-Fi",
    description: "Seamless free Wi-Fi connectivity throughout all retail concourses and dining floors."
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security & First Aid Desk",
    description: "Trained security personnel, CCTV surveillance, emergency first-aid station, and paramedic support."
  },
  {
    icon: CreditCard,
    title: "ATMs & Banking Kiosks",
    description: "Multi-bank ATMs (SBI, HDFC, ICICI) located conveniently on Ground and 1st Floors."
  },
  {
    icon: Users,
    title: "Family Care & Baby Changing Rooms",
    description: "Private, hygienic baby nursing rooms, pram rentals, and family-friendly restrooms."
  },
  {
    icon: HeartHandshake,
    title: "Wheelchair & Accessibility Support",
    description: "Complimentary wheelchairs, dedicated elevator priority, and barrier-free ramps."
  },
  {
    icon: Gift,
    title: "Bokaro Mall Gift Cards",
    description: "Prepaid shopping cards redeemable across all 150+ retail, cinema, and dining outlets."
  },
  {
    icon: HelpCircle,
    title: "Concierge & Lost & Found Desk",
    description: "Central Helpdesk at Ground Floor atrium for store directions, lost items, and mall assistance."
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-10">
      
      <div className="max-w-2xl space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>Visitor Amenities</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text">
          Services & Facilities
        </h1>
        <p className="text-editorial-subtext dark:text-onyx-subtext text-base leading-relaxed">
          Designed for world-class convenience, safety, and comfort for every guest visiting Bokaro Mall.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {AMENITIES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className="bg-editorial-card dark:bg-onyx-card border border-editorial-border dark:border-onyx-border rounded-3xl p-6 space-y-4 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-700/10 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-editorial-text dark:text-onyx-text">
                {item.title}
              </h3>
              <p className="text-xs text-editorial-subtext dark:text-onyx-subtext leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  );
}
