'use client';

import React, { useState } from 'react';
import { MALL_INFO } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-12">
      
      {/* Header */}
      <div className="max-w-2xl space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
          <MessageSquare className="w-4 h-4" />
          <span>Customer Desk & Help Desk</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text">
          Contact Bokaro Mall
        </h1>
        <p className="text-editorial-subtext dark:text-onyx-subtext text-base leading-relaxed">
          Have a question about store locations, cinema schedules, lost & found, or parking? Get in touch with our customer service team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-editorial-card dark:bg-onyx-card border border-editorial-border dark:border-onyx-border rounded-3xl p-6 md:p-8 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-heading text-2xl font-bold text-editorial-text dark:text-onyx-text">
                Send Us a Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 62877 76111"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Lost & Found">Lost & Found</option>
                    <option value="PVR Movie Booking">PVR Movie Booking</option>
                    <option value="Feedback / Complaint">Feedback / Complaint</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-400 uppercase">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist your visit today?"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-2xl font-bold">Message Sent Successfully!</h2>
              <p className="text-xs text-stone-400 max-w-sm mx-auto">
                Thank you, {formData.name}. Our customer helpdesk team at Bokaro Mall will reply to {formData.email} as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-stone-800 text-white text-xs font-bold px-4 py-2 rounded-xl mt-4"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-editorial-card dark:bg-onyx-card border border-editorial-border dark:border-onyx-border rounded-3xl p-6 space-y-4">
            <h3 className="font-heading text-lg font-bold text-editorial-text dark:text-onyx-text">
              Direct Contact Lines
            </h3>

            <div className="space-y-3 text-xs text-editorial-subtext dark:text-onyx-subtext">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                <span>{MALL_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-700 shrink-0" />
                <a href={`tel:${MALL_INFO.phone}`} className="hover:text-brand-700 font-semibold">
                  {MALL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-700 shrink-0" />
                <a href={`mailto:${MALL_INFO.email}`} className="hover:text-brand-700 font-semibold">
                  {MALL_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-700 shrink-0" />
                <span>{MALL_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 aspect-video relative shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.322930088195!2d86.14552981497975!3d23.664406884631813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f423b252cd201d%3A0x5a78b039edaf2055!2sThe+Bokaro+Mall!5e0!3m2!1sen!2sin!4v1484388093241" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
            />
          </div>
        </div>

      </div>

    </div>
  );
}
