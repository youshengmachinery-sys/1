import React from 'react';
import { 
  Mail, 
  Reply, 
  Flag, 
  Printer, 
  MapPin, 
  FileText, 
  Paperclip, 
  Image as ImageIcon,
  ChevronDown,
  Factory,
  ShieldCheck
} from 'lucide-react';

export default function Inquiries() {
  return (
    <div className="flex-1 flex overflow-hidden h-[calc(100vh-73px)]">
      {/* Message List */}
      <section className="w-1/3 bg-surface flex flex-col border-r border-outline-variant/20">
        <div className="p-6 flex justify-between items-center bg-surface-container-low/50">
          <h2 className="text-2xl font-bold font-headline tracking-tight text-primary">Inquiries</h2>
          <span className="bg-secondary-container/20 text-secondary text-xs font-bold px-2 py-1 rounded">12 New</span>
        </div>
        
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Inquiry Item: Active/Selected */}
          <div className="p-6 bg-surface-container-lowest border-l-4 border-secondary cursor-pointer transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-primary truncate pr-2">Hydro-Logic Solutions</h3>
              <span className="text-[10px] font-bold text-slate-400">2h ago</span>
            </div>
            <p className="text-sm font-semibold text-on-surface mb-1">Marcus Thorne</p>
            <p className="text-xs text-slate-500 line-clamp-2">Inquiry regarding custom chemical dosing skid for high-pressure saline environment...</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center gap-1 text-[10px] font-bold text-secondary uppercase tracking-wider">
                <Mail className="w-3 h-3" /> Unread
              </span>
            </div>
          </div>
          
          {/* Inquiry Item */}
          <div className="p-6 hover:bg-surface-container-low cursor-pointer transition-all border-b border-outline-variant/10">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-slate-700 truncate pr-2">PetroStream Systems</h3>
              <span className="text-[10px] font-bold text-slate-400">Oct 24</span>
            </div>
            <p className="text-sm font-semibold text-on-surface mb-1">Sarah Jenkins</p>
            <p className="text-xs text-slate-500 line-clamp-2">Technical requirements for modular pump skid assembly with integrated IoT sensors.</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <Reply className="w-3 h-3" /> Replied
              </span>
            </div>
          </div>
          
          {/* Inquiry Item */}
          <div className="p-6 hover:bg-surface-container-low cursor-pointer transition-all border-b border-outline-variant/10">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-slate-700 truncate pr-2">Global Aqua Corp</h3>
              <span className="text-[10px] font-bold text-slate-400">Oct 23</span>
            </div>
            <p className="text-sm font-semibold text-on-surface mb-1">David Zhang</p>
            <p className="text-xs text-slate-500 line-clamp-2">Urgent: Repair and parts consultation for Model 450-X skid currently on-site.</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center gap-1 text-[10px] font-bold text-error uppercase tracking-wider">
                <Flag className="w-3 h-3" /> Flagged
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Details */}
      <section className="flex-1 bg-surface-container-low p-10 flex flex-col overflow-y-auto custom-scrollbar">
        {/* Status Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-secondary rounded-full"></span>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Current Inquiry</p>
              <h2 className="text-3xl font-headline font-bold text-primary">Inquiry #7742-D</h2>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-surface-container-lowest text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-surface-container-high transition-colors">
              <Printer className="w-4 h-4" /> Print
            </button>
            <div className="relative">
              <select className="appearance-none bg-primary text-white pl-4 pr-10 py-2 rounded-lg text-sm font-bold focus:ring-2 focus:ring-secondary outline-none border-none cursor-pointer">
                <option>Assign to Engineer</option>
                <option>Eng. Michael Scott</option>
                <option>Eng. Jane Foster</option>
                <option>Eng. Robert Chen</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Inquiry Metadata Bento Grid */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-surface-container-lowest p-6 rounded-xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Sender Information</p>
            <h4 className="text-lg font-bold text-primary">Marcus Thorne</h4>
            <p className="text-sm text-slate-500">m.thorne@hydro-logic.com</p>
            <p className="text-sm text-slate-500 mt-1">+1 (555) 012-4493</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Company / Facility</p>
            <h4 className="text-lg font-bold text-primary">Hydro-Logic Solutions</h4>
            <p className="text-sm text-slate-500">Houston Technical Center</p>
            <div className="flex items-center gap-1 mt-2 text-secondary">
              <MapPin className="w-3 h-3" />
              <span className="text-xs font-bold">Texas, USA</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Priority Level</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-2 w-2 rounded-full bg-error"></div>
              <span className="text-lg font-bold text-error">High Priority</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Target Quote Date: Oct 30</p>
          </div>
        </div>

        {/* Main Requirements Content */}
        <div className="flex-1 space-y-8">
          <div className="bg-surface-container-lowest p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Factory className="w-32 h-32 -rotate-12" />
            </div>
            <h3 className="text-xl font-headline font-bold text-primary mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-secondary" />
              Project Requirements
            </h3>
            <div className="prose prose-slate max-w-none text-on-surface-variant leading-relaxed space-y-4">
              <p>We are seeking a custom chemical dosing skid for our new saline purification unit. The environment is highly corrosive with high-pressure discharge requirements (up to 1200 PSI).</p>
              <p><strong>Core Specifications requested:</strong></p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Materials: Duplex Stainless Steel or Titanium-clad components preferred.</li>
                <li>Flow Rate: Variable 5-45 L/min with +/- 0.5% precision.</li>
                <li>Integration: Modbus TCP communication protocol required for existing plant SCADA.</li>
                <li>Footprint: Limited to 1200mm x 1800mm maximum floor area.</li>
              </ul>
              <p>Looking for a preliminary quote and feasibility assessment before our November board meeting.</p>
            </div>
          </div>

          {/* Map Preview */}
          <div className="rounded-2xl h-48 overflow-hidden relative group">
            <img 
              alt="Map of Houston area" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlU7T9EFWBxyi1jdxSkucMyx5HNbFPbPEi4_k0Vzu-3de-A0SgxN9qtWx9vjHBq5nLl7cSLdaF8GqcJZxYFUHfDJRTLPxC9S7wJ-KVl64Mzu2SJx231_-UsuBNHWmqArfMJiGLlYpetcc5fSpRad0mIueeVncuamBMpkZk9ntT9m_Bf-oePfxblJAon9oOznLR5-NdZMeNYlzewk0q3ZGhB_1kqmkBpNYr-ORFl_VxSn3rSj0hXwUzzzrSvr6u9nresYX91KtZeqE"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center group-hover:bg-transparent transition-all">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-sm font-bold text-primary">Houston facility site</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reply Box */}
        <div className="mt-10 bg-white p-6 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white">
              <Reply className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-primary">Quick Response</h4>
            <div className="ml-auto flex gap-2">
              <button className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded hover:bg-slate-50">Request Specs</button>
              <button className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded hover:bg-slate-50">Confirm Receipt</button>
            </div>
          </div>
          <textarea 
            className="w-full bg-surface-container-high/50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary min-h-[120px] transition-all outline-none" 
            placeholder="Type your response to Marcus Thorne..."
          ></textarea>
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Paperclip className="w-5 h-5" /></button>
              <button className="p-2 text-slate-400 hover:text-primary transition-colors"><ImageIcon className="w-5 h-5" /></button>
            </div>
            <button className="bg-gradient-to-r from-secondary to-orange-600 text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-secondary/20 hover:-translate-y-0.5 transition-all active:translate-y-0">
              Send Response
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
