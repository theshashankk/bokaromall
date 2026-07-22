'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Compass
} from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    title: "Redefining Luxury & Entertainment in Bokaro",
    subtitle: "Discover 150+ flagship fashion stores, 4-screen PVR multiplex cinema, gourmet dining, and 4-star Lemon Tree hospitality under one roof.",
    badge: "Bokaro's Flagship Shopping Landmark",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1920&auto=format&fit=crop",
    ctaText: "Explore Store Directory",
    ctaLink: "/stores",
    isExternal: false
  },
  {
    id: 2,
    title: "PVR Cinemas 4D Dolby Sound Experience",
    subtitle: "Catch latest blockbusters at PVR Bokaro Mall. Book showtimes directly on BookMyShow or visit our 3rd floor multiplex.",
    badge: "PVR Multiplex 3rd Floor",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1920&auto=format&fit=crop",
    ctaText: "Book Tickets on BookMyShow",
    ctaLink: "https://in.bookmyshow.com/bokaro",
    isExternal: true
  },
  {
    id: 3,
    title: "Chaupal & Gourmet Dining Destinations",
    subtitle: "Savor global cuisines, street delicacies, artisanal espresso cafes, and family fine dining at our 3rd floor food court.",
    badge: "Gastronomy & Food Court",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1920&auto=format&fit=crop",
    ctaText: "Explore Dining Outlets",
    ctaLink: "/dining",
    isExternal: false
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-stone-950 text-white">
      
      {/* Slide Background Images with Parallax Zoom */}
      {HERO_SLIDES.map((s, idx) => (
        <div 
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={idx === 0}
            className="object-cover object-center filter brightness-[0.65]"
          />
          {/* Apple-Style Dark Gradient Scrollytelling Tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 lg:pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl space-y-6">
          
          {/* Eyebrow Badge (Apple Wide Tracking) */}
          <motion.div 
            key={`badge-${currentSlide}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{slide.badge}</span>
          </motion.div>

          {/* Title (Apple-Style Giant Gradient Text Clipping) */}
          <motion.h1 
            key={`title-${currentSlide}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-100 to-brand-300 drop-shadow-2xl"
          >
            {slide.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            key={`sub-${currentSlide}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
          >
            {slide.subtitle}
          </motion.p>

          {/* Action CTAs (Emil Kowalski Physics) */}
          <motion.div 
            key={`cta-${currentSlide}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {slide.isExternal ? (
              <motion.a
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                whileTap={{ scale: 0.97 }}
                href={slide.ctaLink}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-700 hover:bg-brand-800 text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center space-x-2.5"
              >
                <span>{slide.ctaText}</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            ) : (
              <motion.div
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={slide.ctaLink}
                  className="bg-brand-700 hover:bg-brand-800 text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center space-x-2.5 group"
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/visit"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider backdrop-blur-xl transition-all flex items-center space-x-2.5"
              >
                <Compass className="w-4 h-4 text-gold-400" />
                <span>Interactive Floor Plan</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Slider Indicators & Controls */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pb-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-10 bg-brand-500' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl flex items-center justify-center transition border border-white/10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl flex items-center justify-center transition border border-white/10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Apple-Style Glass Bento Stats Strip */}
      <div className="relative z-10 bg-stone-950/80 border-t border-white/10 backdrop-blur-2xl py-6">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">150+</div>
            <div className="text-[11px] text-stone-400 uppercase tracking-[0.15em] font-extrabold">Flagship Stores</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-gold-400">4 Screens</div>
            <div className="text-[11px] text-stone-400 uppercase tracking-[0.15em] font-extrabold">PVR Multiplex</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">30+</div>
            <div className="text-[11px] text-stone-400 uppercase tracking-[0.15em] font-extrabold">Dining & Food Outlets</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">1200+</div>
            <div className="text-[11px] text-stone-400 uppercase tracking-[0.15em] font-extrabold">Parking Spaces</div>
          </div>
        </div>
      </div>

    </section>
  );
}
