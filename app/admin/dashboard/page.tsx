'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { INITIAL_STORES, Store } from '@/lib/data';
import { 
  ShieldCheck, 
  Plus, 
  Trash2, 
  LogOut,
  Activity,
  CheckCircle2
} from 'lucide-react';

interface AuditLog {
  id: number;
  action: string;
  user: string;
  time: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [stores, setStores] = useState<Store[]>([]);
  const [activeTab, setActiveTab] = useState<'stores' | 'map' | 'audit'>('stores');
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);

  // Load dynamic data from localStorage on mount (No hardcoded mock arrays)
  useEffect(() => {
    // 1. Load Stores from localStorage or fallback to single source of truth
    const savedStores = localStorage.getItem('bm_admin_stores');
    if (savedStores) {
      try {
        setStores(JSON.parse(savedStores));
      } catch (e) {
        setStores(INITIAL_STORES);
      }
    } else {
      setStores(INITIAL_STORES);
    }

    // 2. Load Dynamic Audit Logs from localStorage (defaults to empty array if none exist)
    const savedLogs = localStorage.getItem('bm_admin_audit_logs');
    if (savedLogs) {
      try {
        setAuditLogs(JSON.parse(savedLogs));
      } catch (e) {
        setAuditLogs([]);
      }
    } else {
      setAuditLogs([]);
    }
  }, []);

  // Save stores state to localStorage
  const saveStoresToStorage = (updatedStores: Store[]) => {
    setStores(updatedStores);
    localStorage.setItem('bm_admin_stores', JSON.stringify(updatedStores));
  };

  // Log dynamic admin action and persist to localStorage
  const logAdminAction = (actionText: string) => {
    const newLog: AuditLog = {
      id: Date.now(),
      action: actionText,
      user: "admin@bokaromall.com",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' - ' + new Date().toLocaleDateString()
    };
    const updatedLogs = [newLog, ...auditLogs];
    setAuditLogs(updatedLogs);
    localStorage.setItem('bm_admin_audit_logs', JSON.stringify(updatedLogs));
  };

  const handleLogout = () => {
    document.cookie = "bm_admin_session=; path=/; max-age=0";
    router.push('/admin/login');
  };

  const handleUpdateHotspot = (storeId: string, x: number, y: number) => {
    const storeObj = stores.find(s => s.id === storeId);
    const updated = stores.map(s => s.id === storeId ? { ...s, mapHotspot: { x, y } } : s);
    saveStoresToStorage(updated);
    logAdminAction(`Repositioned map hotspot for ${storeObj?.name || storeId} (X: ${x}%, Y: ${y}%)`);
  };

  const handleDeleteStore = (storeId: string) => {
    const storeObj = stores.find(s => s.id === storeId);
    if (confirm(`Are you sure you want to delete ${storeObj?.name} from directory & map?`)) {
      const updated = stores.filter(s => s.id !== storeId);
      saveStoresToStorage(updated);
      logAdminAction(`Deleted tenant ${storeObj?.name || storeId} from store directory & interactive floor map`);
    }
  };

  const handleClearLogs = () => {
    if (confirm("Are you sure you want to clear system audit logs?")) {
      setAuditLogs([]);
      localStorage.removeItem('bm_admin_audit_logs');
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-8">
      
      {/* Top Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
        <div>
          <div className="flex items-center space-x-2 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Authenticated Super Admin Session</span>
          </div>
          <h1 className="font-heading text-3xl font-extrabold text-editorial-text dark:text-onyx-text mt-1">
            Bokaro Mall Control Center
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 w-fit shadow"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Exit / Logout Session</span>
        </button>
      </div>

      {/* Admin Subnav Tabs */}
      <div className="flex space-x-2 border-b border-stone-200 dark:border-stone-800 pb-2">
        <button
          onClick={() => setActiveTab('stores')}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
            activeTab === 'stores' ? 'bg-brand-700 text-white shadow' : 'bg-editorial-muted dark:bg-onyx-muted text-stone-500'
          }`}
        >
          Store Directory ({stores.length})
        </button>
        <button
          onClick={() => setActiveTab('map')}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
            activeTab === 'map' ? 'bg-brand-700 text-white shadow' : 'bg-editorial-muted dark:bg-onyx-muted text-stone-500'
          }`}
        >
          Map Hotspot Repositioning
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
            activeTab === 'audit' ? 'bg-brand-700 text-white shadow' : 'bg-editorial-muted dark:bg-onyx-muted text-stone-500'
          }`}
        >
          Dynamic Audit Logs ({auditLogs.length})
        </button>
      </div>

      {/* Tab 1: Store Directory Manager */}
      {activeTab === 'stores' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="font-heading text-xl font-bold">Manage Shops & Tenants</h2>
            <button
              onClick={() => {
                const name = prompt("Enter new store name:");
                if (!name) return;
                const newStore: Store = {
                  id: name.toLowerCase().replace(/\s+/g, '-'),
                  name: name,
                  category: "fashion",
                  floor: "Ground",
                  tagline: "Retail Outlet at Bokaro Mall",
                  hours: "11:00 AM - 09:30 PM",
                  phone: "+91 62877 76111",
                  description: "Newly added retail tenant at Bokaro Mall.",
                  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
                  mapHotspot: { x: 50, y: 50 }
                };
                const updated = [...stores, newStore];
                saveStoresToStorage(updated);
                logAdminAction(`Added new tenant ${name} to store directory`);
              }}
              className="bg-brand-700 hover:bg-brand-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-1 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Store</span>
            </button>
          </div>

          <div className="bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 rounded-3xl overflow-hidden shadow-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-editorial-muted dark:bg-stone-900 text-editorial-subtext dark:text-onyx-subtext uppercase font-bold">
                <tr>
                  <th className="p-4">Store Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Floor</th>
                  <th className="p-4">Map Coordinates</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                {stores.map((store) => (
                  <tr key={store.id} className="hover:bg-stone-100 dark:hover:bg-stone-900/50 transition">
                    <td className="p-4 font-bold text-editorial-text dark:text-onyx-text">{store.name}</td>
                    <td className="p-4 text-stone-500 dark:text-stone-400 uppercase font-semibold">{store.category}</td>
                    <td className="p-4 font-medium">{store.floor}</td>
                    <td className="p-4 font-mono text-brand-700 dark:text-brand-400 font-semibold">
                      X: {store.mapHotspot.x}%, Y: {store.mapHotspot.y}%
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button 
                        onClick={() => handleDeleteStore(store.id)}
                        className="p-1.5 rounded-lg bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 hover:bg-red-200"
                        title="Delete Tenant"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Map Hotspot Positioning Editor */}
      {activeTab === 'map' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-bold">
            Single Source of Truth: Updating X/Y hotspot percentages here automatically updates the vector map position for visitors and saves to dynamic storage.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {stores.map((store) => (
              <div key={store.id} className="bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 rounded-2xl p-5 space-y-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-heading font-bold text-base">{store.name}</h3>
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-semibold">{store.floor}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-500 dark:text-stone-400">X Coordinate ({store.mapHotspot.x}%)</label>
                    <input
                      type="range"
                      min="5"
                      max="95"
                      value={store.mapHotspot.x}
                      onChange={(e) => handleUpdateHotspot(store.id, parseInt(e.target.value), store.mapHotspot.y)}
                      className="w-full accent-brand-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-500 dark:text-stone-400">Y Coordinate ({store.mapHotspot.y}%)</label>
                    <input
                      type="range"
                      min="5"
                      max="95"
                      value={store.mapHotspot.y}
                      onChange={(e) => handleUpdateHotspot(store.id, store.mapHotspot.x, parseInt(e.target.value))}
                      className="w-full accent-brand-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Dynamic System Audit Logs */}
      {activeTab === 'audit' && (
        <div className="bg-editorial-card dark:bg-onyx-card border border-stone-200 dark:border-stone-800 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="flex justify-between items-center">
            <h2 className="font-heading text-xl font-bold flex items-center space-x-2">
              <Activity className="w-5 h-5 text-brand-700 dark:text-brand-400" />
              <span>Real-Time Admin Action Audit Trail</span>
            </h2>
            {auditLogs.length > 0 && (
              <button
                onClick={handleClearLogs}
                className="text-xs text-red-500 hover:text-red-700 font-bold underline"
              >
                Clear Audit History
              </button>
            )}
          </div>

          {auditLogs.length === 0 ? (
            <div className="p-8 text-center text-xs text-stone-400 border border-dashed border-stone-200 dark:border-stone-800 rounded-2xl space-y-1">
              <CheckCircle2 className="w-6 h-6 text-stone-400 mx-auto opacity-50" />
              <p className="font-bold text-stone-300">No admin actions recorded yet.</p>
              <p className="text-[11px]">Perform actions like repositioning a map hotspot or adding/deleting a store to record dynamic logs in real time.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-4 rounded-xl bg-editorial-muted dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex justify-between items-center text-xs">
                  <div className="space-y-0.5">
                    <p className="font-bold text-editorial-text dark:text-onyx-text">{log.action}</p>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">User: {log.user}</p>
                  </div>
                  <span className="text-[11px] text-brand-700 dark:text-brand-400 font-extrabold font-mono">{log.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
