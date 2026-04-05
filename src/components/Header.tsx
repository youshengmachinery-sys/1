import React from 'react';
import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-slate-50 dark:bg-slate-900 flex justify-between items-center px-8 py-4 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            className="w-full bg-surface-container-highest border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-secondary transition-all outline-none" 
            placeholder="Search inquiries, clients, or projects..." 
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="relative text-slate-500 hover:bg-slate-200/50 p-2 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="text-sm font-bold text-sky-950 dark:text-white leading-none">Alex Rivera</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Chief Engineer</p>
          </div>
          <img 
            alt="User profile avatar" 
            className="w-10 h-10 rounded-full object-cover border-2 border-surface-container-high group-hover:border-secondary transition-colors" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATCA49lF_EAvPPgRRSMajuuPYw1WSh3BqS7dXscQHtEBHZM6EoGFLGdbpFJZoU8HGI6clVyXqjd1Cx0SlTh_5LC9T6dUIcJx-Dv7T33-zsxubBrge5vC-DlqvwYVWTgRsAlWeTeHrU1x-Dx5WWuRLciAJ82UgAmcF5HdtmZYoHHp71pvuzfH70FbAhybe-onvQ1WWPzRxxQOGqBGoqNOjtU9eK4DHsGeFRwBCDOomrstLtNvYXLBJI6ODYrOcAtLD4PN5OZVNzKTs"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
