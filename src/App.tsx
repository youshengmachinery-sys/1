/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Inquiries from './views/Inquiries';
import Content from './views/Content';
import Landing from './views/Landing';

export default function App() {
  const [activeTab, setActiveTab] = useState('inquiries');
  const [showLanding, setShowLanding] = useState(false);

  if (showLanding) {
    return (
      <div className="relative">
        <Landing />
        <button 
          onClick={() => setShowLanding(false)}
          className="fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-full shadow-lg z-[100] hover:scale-105 transition-transform"
        >
          Back to Admin
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="ml-64 min-h-screen flex flex-col">
        <Header />
        
        <div className="flex-1 overflow-hidden">
          {activeTab === 'inquiries' && <Inquiries />}
          {activeTab === 'content' && <Content />}
          {activeTab === 'dashboard' && (
            <div className="p-10">
              <h2 className="text-3xl font-headline font-bold text-primary mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <p className="text-slate-500 text-sm font-medium">Total Inquiries</p>
                  <p className="text-4xl font-bold text-primary mt-2">1,284</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <p className="text-slate-500 text-sm font-medium">Active Projects</p>
                  <p className="text-4xl font-bold text-primary mt-2">42</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <p className="text-slate-500 text-sm font-medium">System Status</p>
                  <p className="text-4xl font-bold text-green-600 mt-2">Optimal</p>
                </div>
              </div>
              
              <div className="mt-10">
                <button 
                  onClick={() => setShowLanding(true)}
                  className="bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  View Public Landing Page
                </button>
              </div>
            </div>
          )}
          {activeTab === 'products' && (
            <div className="p-10">
              <h2 className="text-3xl font-headline font-bold text-primary mb-6">Product Catalog</h2>
              <p className="text-slate-500">Manage your industrial skid systems and components here.</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="p-10">
              <h2 className="text-3xl font-headline font-bold text-primary mb-6">System Settings</h2>
              <p className="text-slate-500">Configure administrative controls and user permissions.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
