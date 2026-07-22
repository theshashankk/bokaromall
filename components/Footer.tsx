'use client';

import React from 'react';
import Link from 'next/link';
import { MALL_INFO } from '@/lib/data';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Linkedin,
  ArrowUpRight,
  Building
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800/80 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-stone-800/80">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-brand-700 text-white font-heading font-bold text-xl flex items-center justify-center shadow-lg">
                B
              </div>
              <span className="font-heading text-2xl font-bold tracking-wider text-white uppercase">
                BOKARO MALL
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              Bokaro Steel City's premier landmark for fashion, gastronomy, PVR 4-screen multiplex entertainment, and integrated Lemon Tree hospitality.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-stone-300 text-xs font-medium">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>{MALL_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-300 text-xs font-medium">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={`tel:${MALL_INFO.phone}`} className="hover:text-white transition-colors">
                  {MALL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-stone-300 text-xs font-medium">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={`mailto:${MALL_INFO.email}`} className="hover:text-white transition-colors">
                  {MALL_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-stone-300 text-xs font-medium">
                <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                <span>{MALL_INFO.hours}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={MALL_INFO.socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:bg-brand-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={MALL_INFO.socials.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:bg-brand-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={MALL_INFO.socials.youtube} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:bg-brand-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href={MALL_INFO.socials.twitter} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:bg-brand-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={MALL_INFO.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:bg-brand-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold text-white tracking-widest uppercase">Explore</h3>
            <ul className="space-y-2.5 text-xs text-stone-400 font-medium">
              <li><Link href="/stores" className="hover:text-white transition-colors">Store Directory</Link></li>
              <li><Link href="/dining" className="hover:text-white transition-colors">Dining & Cafes</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events & Highlights</Link></li>
              <li><Link href="/offers" className="hover:text-white transition-colors">Active Offers</Link></li>
              <li><Link href="/visit" className="hover:text-white transition-colors">Interactive Mall Map</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Visitor Amenities</Link></li>
            </ul>
          </div>

          {/* Business & Leasing Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold text-white tracking-widest uppercase">Business</h3>
            <ul className="space-y-2.5 text-xs text-stone-400 font-medium">
              <li><Link href="/leasing" className="hover:text-white transition-colors flex items-center justify-between"><span>Retail Leasing</span> <ArrowUpRight className="w-3.5 h-3.5 opacity-60" /></Link></li>
              <li><Link href="/leasing" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/stores/lemon-tree-hotel" className="hover:text-white transition-colors">Lemon Tree Hotel</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Helpdesk Inquiry</Link></li>
            </ul>
          </div>

          {/* Developer Info Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold text-white tracking-widest uppercase">Developer</h3>
            <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-2 text-xs text-stone-300">
              <div className="flex items-center space-x-2 text-brand-400 font-bold">
                <Building className="w-4 h-4" />
                <span>{MALL_INFO.developer}</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Promoters of commercial retail and hospitality developments.
              </p>
              <div className="pt-2 text-[10px] text-stone-500 border-t border-stone-800">
                PVR Multiplex: Open till 11:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4 font-medium">
          <p>© {new Date().getFullYear()} Bokaro Mall. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-stone-300 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
