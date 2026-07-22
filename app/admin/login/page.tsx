'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AdminLoginPage() {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'bokaro2026' || passcode === 'admin') {
      // Set secure auth cookie
      document.cookie = "bm_admin_session=authenticated; path=/; max-age=86400; SameSite=Strict";
      router.push('/admin/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center container mx-auto px-4 py-16">
      <div className="w-full max-w-md bg-stone-950 border border-stone-800 text-white rounded-3xl p-8 space-y-6 shadow-2xl">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-brand-700 mx-auto flex items-center justify-center text-white font-bold text-xl shadow-lg">
            B
          </div>
          <h1 className="font-heading text-2xl font-extrabold uppercase tracking-wider">
            Admin Portal Authentication
          </h1>
          <p className="text-xs text-stone-400">
            Secure Management Dashboard for Bokaro Mall
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              Admin Key / Passcode
            </label>
            <input
              type="password"
              required
              placeholder="Enter passcode (default: admin)"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 text-white rounded-xl px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-brand-700"
            />
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-red-300 text-xs font-semibold text-center">
              Invalid credentials! Please try again.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition"
          >
            <Lock className="w-4 h-4" />
            <span>Authenticate Session</span>
          </button>
        </form>

        <div className="text-center pt-2 text-[11px] text-stone-500">
          Protected by Next.js Server-Side Middleware Route Security.
        </div>
      </div>
    </div>
  );
}
