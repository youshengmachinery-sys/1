import React from 'react';
import { 
  LayoutDashboard, 
  Box, 
  Factory, 
  MessageSquare, 
  Settings 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'content', label: 'Content', icon: Box },
    { id: 'products', label: 'Products', icon: Factory },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-100 dark:bg-slate-950 border-r border-slate-200/50 dark:border-slate-800/50 flex flex-col py-6 z-50">
      <div className="px-6 mb-8">
        <h1 className="text-xl font-black text-sky-900 dark:text-white font-headline">SkidMaster Admin</h1>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">Precision Control</p>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 transition-all duration-200 ease-in-out font-medium text-sm text-left ${
                isActive 
                  ? 'text-sky-950 dark:text-white bg-white dark:bg-sky-900/20 border-l-4 border-orange-600' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-sky-900 dark:hover:text-sky-200 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
      
      <div className="px-6 mt-auto">
        <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
          New Analysis
        </button>
      </div>
    </aside>
  );
}
