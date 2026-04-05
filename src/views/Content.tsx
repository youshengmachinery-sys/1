import React from 'react';
import { 
  ChevronRight, 
  Phone, 
  Link as LinkIcon, 
  Eye, 
  PlusCircle, 
  Upload, 
  GripVertical, 
  X, 
  Clock, 
  Save, 
  Info,
  Trash2
} from 'lucide-react';

export default function Content() {
  return (
    <div className="p-8 max-w-7xl mx-auto pb-32">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Page Navigation Sidebar */}
        <div className="w-full lg:w-1/4 space-y-6">
          <div className="bg-surface-container p-6 rounded-lg">
            <h3 className="text-[10px] uppercase tracking-[0.1em] text-outline mb-4 font-bold">Site Structure</h3>
            <nav className="space-y-2">
              <button className="w-full flex items-center justify-between p-4 bg-surface-container-lowest text-primary font-bold rounded shadow-sm border-l-4 border-secondary">
                <span>Home Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-high transition-colors text-on-surface-variant font-medium rounded">
                <span>Products</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-high transition-colors text-on-surface-variant font-medium rounded">
                <span>Technology</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-high transition-colors text-on-surface-variant font-medium rounded">
                <span>About Us</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
          
          <div className="bg-surface-container p-6 rounded-lg border-t-4 border-primary">
            <h3 className="text-[10px] uppercase tracking-[0.1em] text-outline mb-4 font-bold">Global Elements</h3>
            <nav className="space-y-2">
              <button className="w-full flex items-center gap-3 p-3 hover:bg-surface-container-high transition-colors text-on-surface-variant font-medium rounded text-sm">
                <Phone className="w-4 h-4" />
                <span>Contact Info</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 hover:bg-surface-container-high transition-colors text-on-surface-variant font-medium rounded text-sm">
                <LinkIcon className="w-4 h-4" />
                <span>Footer Links</span>
              </button>
            </nav>
          </div>

          <div className="bg-primary p-6 rounded-lg text-white relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-lg font-headline font-bold mb-2">Live Preview</h4>
              <p className="text-xs text-on-primary-container mb-4">View changes in real-time before publishing.</p>
              <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:underline">
                Open Website <Eye className="w-3 h-3" />
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Eye className="w-24 h-24" />
            </div>
          </div>
        </div>

        {/* Editor Section */}
        <div className="w-full lg:w-3/4 space-y-8">
          {/* Section: Global Contact Information */}
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-slate-200/50">
            <div className="mb-6 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-headline font-bold text-primary">Global Contact Info</h2>
                <p className="text-on-surface-variant text-sm mt-1">Updates company-wide contact details in header and footer.</p>
              </div>
              <span className="bg-primary/10 px-3 py-1 rounded font-bold text-primary text-[10px]">GLOBAL</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="text-[10px] uppercase tracking-[0.1em] text-outline block mb-2 font-bold">Company Phone</label>
                <input className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary/50 rounded p-3 text-sm font-medium text-primary outline-none" type="text" defaultValue="+1 (555) 012-3456"/>
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-[0.1em] text-outline block mb-2 font-bold">Support Email</label>
                <input className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary/50 rounded p-3 text-sm font-medium text-primary outline-none" type="email" defaultValue="ops@skidmaster.com"/>
              </div>
              <div className="group md:col-span-2">
                <label className="text-[10px] uppercase tracking-[0.1em] text-outline block mb-2 font-bold">Office Address</label>
                <input className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary/50 rounded p-3 text-sm font-medium text-primary outline-none" type="text" defaultValue="Industrial Park East, Suite 400, Houston, TX 77001"/>
              </div>
            </div>
          </section>

          {/* Section: Page Content Editor (Home) */}
          <section className="bg-surface-container-lowest p-8 rounded-xl relative shadow-sm border border-slate-200/50">
            <div className="absolute left-0 top-8 w-1.5 h-12 bg-secondary rounded-r"></div>
            <div className="mb-8 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-headline font-bold text-primary">Home: Hero Content</h2>
                <p className="text-on-surface-variant text-sm mt-1">Manage the primary messaging and landing visuals.</p>
              </div>
              <span className="bg-surface-container-highest px-3 py-1 rounded font-bold text-primary text-[10px]">SECTION 01</span>
            </div>
            <div className="space-y-6">
              <div className="group">
                <label className="text-[10px] uppercase tracking-[0.1em] text-outline block mb-2 font-bold">Headline</label>
                <input className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-secondary transition-all p-4 text-xl font-headline font-bold text-primary outline-none" type="text" defaultValue="Sustainable & Secure Refueling Solutions"/>
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-[0.1em] text-outline block mb-2 font-bold">Body Text</label>
                <textarea className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-secondary transition-all p-4 text-on-surface-variant leading-relaxed text-sm outline-none" rows={3} defaultValue="Providing high-performance, mobile refueling infrastructure designed for rapid deployment in critical environments. Engineering excellence for the fuel industry." />
              </div>
              
              <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[10px] uppercase tracking-[0.1em] text-outline font-bold">Hero Slide Imagery</label>
                  <button className="flex items-center gap-1.5 text-secondary font-bold text-xs hover:opacity-80">
                    <PlusCircle className="w-4 h-4" /> Add Slide
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="group relative aspect-video rounded overflow-hidden bg-surface-container-highest border-2 border-transparent hover:border-secondary transition-all cursor-pointer">
                    <img 
                      alt="Industrial steel pipes" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA76Yblz1mhPk-afftpmujQQmn3NDB7J_RNzcBAQQvq1HZhVDe5sU_0zoHLzq_dvcpf3SZbieSiJPSUTZvg7sqE3c_af5QcPv6HtuxuoCRI9pTd9Uvu7XReMhvEOwwWn1Re9dnK2DORvg9HZr_rxP--sDtwMDWgViRLZVLPQnzJnwzjU_M5t1AWj5XtfFK-PTgnNxEse4LcPR9k2_xKTcrgYVgccmDqP7Z_QG3_KhTjKOyXQaHQ0mb-a2XIZNvq-IeTk_S4rrlkEwE"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <div className="flex gap-2 w-full">
                        <button className="flex-1 py-1 bg-white/20 backdrop-blur text-white text-[10px] uppercase font-bold rounded hover:bg-white/40">Change</button>
                        <button className="p-1 bg-error/80 backdrop-blur text-white rounded hover:bg-error">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-secondary text-white text-[10px] px-2 py-0.5 font-bold rounded">Active</div>
                  </div>
                  <div className="group relative aspect-video rounded overflow-hidden bg-surface-container-highest border-2 border-transparent hover:border-secondary transition-all cursor-pointer">
                    <img 
                      alt="Technician operating control panel" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfAp4EIf2vaiHrGkl0wSvWFzRBysvt7rEI2T1J091a5CJTdSsExGjHlj7oycrG6FplVq0Sybp8wW1swwNy3gCdyof2emzVHAlX7tDqf8F5OMxzIZcIifjQrhAhdaCSx4UNOsuW_SYR_g4lwG9dvb3XChC4R2DgPYLrkbEeyImiC4x-AFkSkwBxwxBjsInvuprTSVKOIgFOXLHrKRiUn8GzqePXx0SNs31hllnwWzqUv4Ct0R5njMnKVlxmA5KgYAnUTVhs4jZO4hQ"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <div className="flex gap-2 w-full">
                        <button className="flex-1 py-1 bg-white/20 backdrop-blur text-white text-[10px] uppercase font-bold rounded hover:bg-white/40">Change</button>
                        <button className="p-1 bg-error/80 backdrop-blur text-white rounded hover:bg-error">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video rounded border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-2 hover:bg-surface-container transition-colors cursor-pointer group">
                    <Upload className="w-6 h-6 text-outline group-hover:text-secondary transition-colors" />
                    <span className="text-[9px] uppercase font-bold text-outline tracking-widest">Upload Asset</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Footer Link Management */}
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-slate-200/50">
            <div className="mb-6 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-headline font-bold text-primary">Footer Navigation</h2>
                <p className="text-on-surface-variant text-sm mt-1">Manage links and legal mentions in the site footer.</p>
              </div>
              <span className="bg-primary/10 px-3 py-1 rounded font-bold text-primary text-[10px]">NAVIGATION</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-surface-container p-3 rounded group">
                <GripVertical className="w-4 h-4 text-outline cursor-grab" />
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <input className="bg-transparent border-none text-sm font-bold text-primary p-0 focus:ring-0 outline-none" type="text" defaultValue="Privacy Policy"/>
                  <input className="bg-transparent border-none text-xs text-outline p-0 focus:ring-0 outline-none" type="text" defaultValue="/legal/privacy"/>
                </div>
                <button className="text-outline hover:text-error transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-4 bg-surface-container p-3 rounded group">
                <GripVertical className="w-4 h-4 text-outline cursor-grab" />
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <input className="bg-transparent border-none text-sm font-bold text-primary p-0 focus:ring-0 outline-none" type="text" defaultValue="Terms of Service"/>
                  <input className="bg-transparent border-none text-xs text-outline p-0 focus:ring-0 outline-none" type="text" defaultValue="/legal/terms"/>
                </div>
                <button className="text-outline hover:text-error transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <button className="w-full py-2 border-2 border-dashed border-outline-variant rounded text-xs font-bold text-outline hover:border-secondary hover:text-secondary transition-colors uppercase tracking-widest">
                + Add Link
              </button>
            </div>
          </section>

          {/* SEO Metadata & Publication Status */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-slate-200/50">
              <h3 className="text-[10px] uppercase tracking-[0.1em] text-outline mb-6 font-bold">SEO Metadata</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[9px] font-bold text-on-surface-variant uppercase mb-1 block">Meta Title</label>
                  <input className="w-full bg-surface-container-highest border-none text-sm p-3 rounded font-medium outline-none" type="text" defaultValue="SkidMaster | Leader in Fuel Infrastructure"/>
                </div>
                <div>
                  <label className="text-[9px] font-bold text-on-surface-variant uppercase mb-1 block">Meta Description</label>
                  <textarea className="w-full bg-surface-container-highest border-none text-sm p-3 rounded font-medium outline-none" rows={2} defaultValue="Explore SkidMaster's range of sustainable refueling solutions designed for the modern energy landscape." />
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-primary shadow-sm">
              <h3 className="text-[10px] uppercase tracking-[0.1em] text-outline mb-6 font-bold">Publication Status</h3>
              <div className="flex items-center justify-between mb-4 p-3 bg-surface-container rounded">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-sm font-bold text-primary">Live on Production</span>
                </div>
                <span className="text-[10px] font-bold text-outline uppercase">v2.4.1</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-on-surface-variant" />
                <span className="text-[10px] font-medium text-on-surface-variant">Last synced: 2 hours ago by admin_jake</span>
              </div>
              <div className="mt-6 flex gap-2">
                <button className="flex-1 py-2 text-xs font-bold text-primary border border-primary/20 rounded hover:bg-primary/5">View History</button>
                <button className="flex-1 py-2 text-xs font-bold text-white bg-primary rounded hover:bg-primary/90">Publish Updates</button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 z-50">
        <div className="glass-panel border border-white/50 p-4 rounded-xl shadow-2xl flex items-center justify-between">
          <div className="flex items-center gap-4 text-primary">
            <Info className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">You have 3 unsaved changes in Global and Home sections.</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 text-sm font-bold text-primary hover:bg-slate-200/50 transition-colors rounded">
              Discard
            </button>
            <button className="px-8 py-2.5 bg-gradient-to-br from-primary to-primary-container text-white text-sm font-bold rounded hover:opacity-90 shadow-lg flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
