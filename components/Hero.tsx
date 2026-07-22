'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShoppingBag, 
  MapPin, 
  Film, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  ExternalLink
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
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-stone-950 text-white">
      
      {/* Slide Background Images */}
      {HERO_SLIDES.map((s, idx) => (
        <div 
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={idx === 0}
            className="object-cover object-center"
          />
          {/* Dark Overlay Tint for High Typography Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 lg:pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          
          {/* Badge */}
          <motion.div 
            key={`badge-${currentSlide}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-700/90 border border-brand-500/30 text-white text-xs font-semibold tracking-wide uppercase backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{slide.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            key={`title-${currentSlide}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
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

          {/* Action CTAs */}
          <motion.div 
            key={`cta-${currentSlide}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {slide.isExternal ? (
              <a
                href={slide.ctaLink}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-700 hover:bg-brand-800 text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-xl hover:shadow-brand-700/30 transition-all flex items-center space-x-2 group"
              >
                <span>{slide.ctaText}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <Link
                href={slide.ctaLink}
                className="bg-brand-700 hover:bg-brand-800 text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-xl hover:shadow-brand-700/30 transition-all flex items-center space-x-2 group"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            <Link
              href="/visit"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-semibold text-base backdrop-blur-md transition-all flex items-center space-x-2"
            >
              <MapPin className="w-4 h-4 text-brand-400" />
              <span>Interactive Floor Plan</span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Slider Controls & Carousel Dots */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pb-8 flex items-center justify-between">
        
        {/* Slide Indicators */}
        <div className="flex items-center space-x-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-brand-500' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev/Next Arrows */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="relative z-10 bg-stone-900/90 border-t border-stone-800/80 backdrop-blur-lg py-5">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="font-heading text-2xl md:text-3xl font-extrabold text-brand-400">150+</div>
            <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">Flagship Stores</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading text-2xl md:text-3xl font-extrabold text-amber-400">4 Screens</div>
            <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">PVR Multiplex</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading text-2xl md:text-3xl font-extrabold text-emerald-400">30+</div>
            <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">Dining & Food Outlets</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading text-2xl md:text-3xl font-extrabold text-sky-400">1200+</div>
            <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">Parking Spaces</div>
          </div>
        </div>
      </div>

    </section>
  );
}
