'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/lib/theme-context';
import { 
  ShoppingBag, 
  Utensils, 
  Calendar, 
  Tag, 
  MapPin, 
  Phone, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Clock,
  ChevronRight
} from 'lucide-react';
import { MALL_INFO } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Stores', href: '/stores', icon: ShoppingBag },
    { name: 'Dining', href: '/dining', icon: Utensils },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Offers', href: '/offers', icon: Tag },
    { name: 'Visit & Map', href: '/visit', icon: MapPin },
    { name: 'Services', href: '/services' },
    { name: 'Leasing', href: '/leasing' },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-brand-700 text-white text-xs py-2 px-4 flex justify-between items-center z-40 relative font-medium border-b border-brand-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>Mall Hours: {MALL_INFO.hours}</span>
            </span>
            <span className="hidden sm:inline-flex items-center space-x-2 text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OPEN TODAY</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`tel:${MALL_INFO.phone}`} className="hover:underline flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5" />
              <span>{MALL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled 
            ? 'bg-editorial-canvas/95 dark:bg-onyx-canvas/95 backdrop-blur-md shadow-lg py-3.5 border-b border-editorial-border dark:border-onyx-border' 
            : 'bg-editorial-canvas dark:bg-onyx-canvas py-5 border-b border-editorial-border/40 dark:border-onyx-border/40'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center text-white font-heading text-xl font-bold shadow-md group-hover:scale-105 transition-transform">
              B
            </div>
            <div>
              <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-editorial-text dark:text-onyx-text group-hover:text-brand-700 transition-colors uppercase">
                BOKARO MALL
              </span>
              <span className="block text-[9px] tracking-widest text-brand-700 font-extrabold uppercase">
                Shopping & Hospitality Destination
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-extrabold transition-all ${
                    isActive 
                      ? 'bg-brand-700 text-white shadow-md' 
                      : 'text-editorial-text/80 dark:text-onyx-text/80 hover:text-brand-700 dark:hover:text-brand-400 hover:bg-brand-50/60 dark:hover:bg-onyx-card'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions (Theme, CTA) */}
          <div className="flex items-center space-x-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-stone-200 dark:border-stone-800 text-editorial-text dark:text-onyx-text hover:bg-editorial-muted dark:hover:bg-onyx-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-stone-700" />
              ) : (
                <Sun className="w-4 h-4 text-gold-400" />
              )}
            </button>

            {/* Quick Map CTA */}
            <Link
              href="/visit"
              className="hidden sm:inline-flex items-center space-x-2 bg-brand-700 hover:bg-brand-800 text-white px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Floor Map</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/70 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm bg-editorial-canvas dark:bg-onyx-canvas h-full p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex justify-between items-center pb-6 border-b border-editorial-border dark:border-onyx-border mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-700 text-white font-heading font-bold flex items-center justify-center">
                    B
                  </div>
                  <span className="font-heading font-bold text-lg uppercase tracking-wider">BOKARO MALL</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-editorial-muted dark:hover:bg-onyx-muted text-stone-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-extrabold uppercase tracking-wider transition ${
                        isActive
                          ? 'bg-brand-700 text-white font-bold shadow'
                          : 'text-editorial-text dark:text-onyx-text hover:bg-brand-50 dark:hover:bg-onyx-card'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-editorial-border dark:border-onyx-border space-y-3">
              <Link
                href="/visit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-brand-700 hover:bg-brand-800 text-white py-3 rounded-xl text-center text-xs font-extrabold uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Interactive Floor Map</span>
              </Link>
              <div className="text-xs text-center text-editorial-subtext dark:text-onyx-subtext font-medium">
                Sector III/C, Bokaro Steel City • +91 62877 76111
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
