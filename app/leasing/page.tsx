'use client';

import React, { useState } from 'react';
import { Building, Download, Send, CheckCircle, Briefcase, FileText } from 'lucide-react';
import { MALL_INFO } from '@/lib/data';

export default function LeasingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    contactPerson: '',
    email: '',
    phone: '',
    category: 'fashion',
    spaceReq: '1000 - 2500 sq ft',
    notes: ''
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
          <Building className="w-4 h-4" />
          <span>Business & Retail Expansion</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-editorial-text dark:text-onyx-text">
          Leasing & Careers
        </h1>
        <p className="text-editorial-subtext dark:text-onyx-subtext text-base leading-relaxed">
          Partner with Bokaro's highest-footfall commercial landmark. Inquire for retail store space, kiosk units, or explore career opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Inquiry Form Column */}
        <div className="lg:col-span-7 bg-editorial-card dark:bg-onyx-card border border-editorial-border dark:border-onyx-border rounded-3xl p-6 md:p-8 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-heading text-2xl font-bold text-editorial-text dark:text-onyx-text">
                Retail Space Leasing Application
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase">Brand / Business Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zara / Starbucks"
                    value={formData.brandName}
                    onChange={e => setFormData({...formData, brandName: e.target.value})}
                    className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase">Contact Person</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.contactPerson}
                    onChange={e => setFormData({...formData, contactPerson: e.target.value})}
                    className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase">Official Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@brand.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase">Category</label>
                  <select
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                  >
                    <option value="fashion">Fashion & Apparel</option>
                    <option value="dining">Food & Beverage / Cafe</option>
                    <option value="electronics">Electronics & Tech</option>
                    <option value="kiosk">Atrium Kiosk / Pop-up</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase">Space Required</label>
                  <select
                    value={formData.spaceReq}
                    onChange={e => setFormData({...formData, spaceReq: e.target.value})}
                    className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                  >
                    <option value="500 - 1000 sq ft">500 - 1,000 sq ft</option>
                    <option value="1000 - 2500 sq ft">1,000 - 2,500 sq ft</option>
                    <option value="2500 - 5000 sq ft">2,500 - 5,000 sq ft</option>
                    <option value="5000+ sq ft">5,000+ sq ft Anchor Space</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-400 uppercase">Additional Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Describe your brand concept, target launch date, etc."
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-editorial-muted dark:bg-onyx-muted text-editorial-text dark:text-onyx-text rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-brand-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Leasing Application</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-2xl font-bold">Leasing Application Received</h2>
              <p className="text-xs text-stone-400 max-w-sm mx-auto">
                Thank you, {formData.contactPerson}. The leasing team at {MALL_INFO.developer} will review your application for {formData.brandName} and contact you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-stone-800 text-white text-xs font-bold px-4 py-2 rounded-xl mt-4"
              >
                Submit Another Application
              </button>
            </div>
          )}
        </div>

        {/* Specs & Downloads Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-editorial-card dark:bg-onyx-card border border-editorial-border dark:border-onyx-border rounded-3xl p-6 space-y-4">
            <h3 className="font-heading text-lg font-bold text-editorial-text dark:text-onyx-text flex items-center space-x-2">
              <FileText className="w-5 h-5 text-brand-700" />
              <span>Leasing Brochure & Specs</span>
            </h3>
            <p className="text-xs text-editorial-subtext dark:text-onyx-subtext leading-relaxed">
              Download the official technical specification document, floorplan layouts, footfall demographic reports, and MEP guidelines for Bokaro Mall.
            </p>
            <a
              href="#download-spec"
              onClick={(e) => {
                e.preventDefault();
                alert("Downloading Bokaro Mall Commercial Leasing Brochure (PDF)...");
              }}
              className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download Leasing Prospectus (PDF)</span>
            </a>
          </div>

          <div className="bg-editorial-card dark:bg-onyx-card border border-editorial-border dark:border-onyx-border rounded-3xl p-6 space-y-4">
            <h3 className="font-heading text-lg font-bold text-editorial-text dark:text-onyx-text flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-brand-700" />
              <span>Career Opportunities</span>
            </h3>
            <p className="text-xs text-editorial-subtext dark:text-onyx-subtext leading-relaxed">
              Interested in joining the operations, facility management, or marketing team at Bokaro Mall? Send your CV directly to <code className="text-brand-700 dark:text-brand-400">{MALL_INFO.email}</code>.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
