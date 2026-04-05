import React from 'react';
import { 
  Zap, 
  Droplets, 
  ShieldAlert, 
  CheckCircle, 
  Share2, 
  LineChart, 
  ShieldCheck, 
  Leaf,
  MapPin
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="bg-surface font-body text-on-surface">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold tracking-tighter text-blue-950">SkidMaster</span>
            <div className="h-6 w-[1px] bg-slate-300 hidden md:block"></div>
            <div className="hidden md:flex items-center gap-2 text-[0.75rem] font-bold">
              <button className="text-primary hover:text-blue-600 transition-colors">EN</button>
              <span className="text-slate-300">/</span>
              <button className="text-slate-400 hover:text-primary transition-colors">CN</button>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a className="text-slate-600 hover:text-blue-900 transition-colors text-sm font-medium" href="#">Products</a>
            <a className="text-blue-900 font-bold border-b-2 border-orange-500 pb-1 text-sm" href="#">Solutions</a>
            <a className="text-slate-600 hover:text-blue-900 transition-colors text-sm font-medium" href="#">Technology</a>
            <a className="text-slate-600 hover:text-blue-900 transition-colors text-sm font-medium" href="#">About</a>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95 duration-150">
            Contact Us <span className="ml-1 opacity-70">联系我们</span>
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center overflow-hidden bg-primary group">
          <div className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-105">
            <img 
              alt="Industrial infrastructure" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi_ccjtDtsSyEwHXV8N8Leq22X31ZPWhBd4ByvMLJ8MWpPKtUCtyZBXTvwt1n8ySnPB7ebjozdShKbjtVPOjFfu1_zCILJNYlsI2fub74fJwLbJIl9m2uGKtEpq36nOqKMbozfufbQtnb9TkDQVOQs1k58Eksq8HS0rmbFRJj3PXwvRDJ9l1wFaNsGzAsnUUWyjiI6tFdc5bnz3wNpv9oTaKhqYCXA5P1Pga8MW8BVlAKi62FXUd47Lwe7VyqZjrLRBRhJreiK9OY"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <p className="text-[0.6875rem] tracking-[0.1em] uppercase font-bold text-secondary-container mb-4">Engineering excellence | 工程卓越</p>
            <h1 className="text-6xl font-headline font-bold text-white tracking-tight max-w-3xl leading-none">
              The Architecture <br/> of Flow Control
              <span className="block text-3xl mt-2 font-normal opacity-80">流量控制架构</span>
            </h1>
            <p className="text-blue-200 mt-6 max-w-xl text-lg">
              Modular skid systems designed for extreme environments. Precision-engineered for safety, compliance, and rapid operational readiness.
              <span className="block text-sm mt-2 font-light text-slate-300">为极端环境设计的模块化橇装系统。为安全、合规和快速运行准备而精密设计。</span>
            </p>
          </div>
        </section>

        {/* Safety First Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-[0.6875rem] tracking-[0.1em] uppercase font-bold text-outline">Section 01 | 第一节</span>
                <h2 className="text-5xl font-headline font-bold text-primary mt-2">Safety First | 安全第一</h2>
                <p className="text-on-surface-variant mt-4 text-lg">Our multi-layered safety architecture mitigates risk at every mechanical and digital touchpoint.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Explosion-Proof Tech */}
              <div className="relative bg-surface-container-lowest p-8 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-outline-variant">
                <div className="w-1 h-full absolute left-0 top-0 bg-secondary transition-all duration-300 group-hover:w-2"></div>
                <Zap className="text-secondary w-10 h-10 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-headline font-bold text-primary mb-2">Explosion-Proof Technology</h3>
                <p className="text-xs text-outline mb-4 font-bold uppercase tracking-wider">防爆技术</p>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Class 1 Div 1 certified electrical enclosures and non-sparking mechanical interfaces ensure stability.</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-xs font-bold text-primary gap-2 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-4 h-4" /> ATEX COMPLIANT COMPONENTS
                  </li>
                  <li className="flex items-center text-xs font-bold text-primary gap-2 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-4 h-4" /> FLAME ARRESTOR INTEGRATION
                  </li>
                </ul>
              </div>
              {/* Leak Detection */}
              <div className="relative bg-surface-container-lowest p-8 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-outline-variant">
                <div className="w-1 h-full absolute left-0 top-0 bg-blue-500 transition-all duration-300 group-hover:w-2"></div>
                <Droplets className="text-blue-500 w-10 h-10 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-headline font-bold text-primary mb-2">Acoustic Leak Detection</h3>
                <p className="text-xs text-outline mb-4 font-bold uppercase tracking-wider">声学泄漏检测</p>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Ultrasonic sensors identify structural micro-fissures long before fluid loss occurs, triggering alerts.</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-xs font-bold text-primary gap-2 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-4 h-4" /> REAL-TIME PRESSURE MONITORING
                  </li>
                  <li className="flex items-center text-xs font-bold text-primary gap-2 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-4 h-4" /> OPTICAL FLUID ANALYSIS
                  </li>
                </ul>
              </div>
              {/* Auto Shut-off */}
              <div className="relative bg-surface-container-lowest p-8 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-outline-variant">
                <div className="w-1 h-full absolute left-0 top-0 bg-secondary transition-all duration-300 group-hover:w-2"></div>
                <ShieldAlert className="text-secondary w-10 h-10 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-headline font-bold text-primary mb-2">Automatic Shut-off</h3>
                <p className="text-xs text-outline mb-4 font-bold uppercase tracking-wider">自动紧急切断</p>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Redundant fail-safe valves close within 500ms of any critical anomaly detection, isolating the unit.</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-xs font-bold text-primary gap-2 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-4 h-4" /> HARD-WIRED INTERLOCKS
                  </li>
                  <li className="flex items-center text-xs font-bold text-primary gap-2 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-4 h-4" /> REMOTE KILL-SWITCH CAPABLE
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Monitoring Section */}
        <section className="py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[0.6875rem] tracking-[0.1em] uppercase font-bold text-blue-500">Section 02 | 第二节</span>
                <h2 className="text-5xl font-headline font-bold text-primary mt-4 mb-2">Smart Monitoring & Cloud Analytics</h2>
                <h3 className="text-2xl font-headline font-bold text-blue-500 mb-8">智能监控与云端分析</h3>
                <div className="space-y-8">
                  <div className="flex gap-6 group cursor-pointer">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary text-white rounded-lg group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <Share2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary group-hover:text-blue-500 transition-colors">Unified Ecosystem | 统一生态系统</h4>
                      <p className="text-on-surface-variant text-sm">Every sensor data point is aggregated and visualized in a real-time command center.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group cursor-pointer">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-primary text-white rounded-lg group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <LineChart className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary group-hover:text-blue-500 transition-colors">Predictive Maintenance | 预测性维护</h4>
                      <p className="text-on-surface-variant text-sm">AI-driven analytics forecast component fatigue, reducing downtime by up to 35%.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group cursor-crosshair">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-500"></div>
                <div className="glass-panel p-4 rounded-xl shadow-2xl relative z-10 overflow-hidden border border-white/20 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    alt="Dashboard interface" 
                    className="w-full rounded-lg" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGqodglWexuDomI5cuMV3v4zAQ1Jv5o2kz1sapIzTVuqwQRBtQmwL9leW6vRTUUCf7z1BG8jr9ddOadcGn9-5UY959ZuAI9p7qptHzxA_yXuTMrADCqregevdT6w0R8Z-3DQGghS0fOpdQyoAKspsdJmrZ25RNCxX01d_VMOqOjCCqZBF6WtQ00wFAQMuXyJ-PJ2f8BoRWYy-hWX2Z3b-pM-hq4jmqW4nj3bl_BbtnDjAxfcQYukiX7fj0sbrm-ldSx3Lag6Qt740"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-primary px-4 py-2 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">INTERACT WITH DATA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Compliance Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <span className="text-[0.6875rem] tracking-[0.1em] uppercase font-bold text-outline">Section 03 | 第三节</span>
              <h2 className="text-5xl font-headline font-bold text-primary mt-2">Zero-Footprint Integrity | 零足迹完整性</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-surface-container-high rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-surface p-12 flex flex-col justify-center group">
                <span className="text-[0.6875rem] tracking-[0.1em] uppercase font-bold text-secondary mb-2">Structure | 结构</span>
                <h3 className="text-3xl font-headline font-bold text-primary mb-2">Double-Wall Secondary Containment</h3>
                <p className="text-sm font-bold text-outline-variant mb-6 uppercase">双层壁二次围护系统</p>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Our skids feature self-bunded tanks constructed from S235JR structural steel. The 360-degree interstitial monitoring system provides 110% containment capacity.</p>
                <div className="flex items-center gap-4 py-4 px-6 bg-surface-container-low rounded-lg w-fit transition-all group-hover:bg-primary group-hover:text-white cursor-pointer">
                  <ShieldCheck className="text-secondary group-hover:text-white w-5 h-5" />
                  <span className="text-xs font-bold">ISO 14001 CERTIFIED DESIGN</span>
                </div>
              </div>
              <div className="bg-primary p-0 min-h-[400px] group overflow-hidden relative">
                <img 
                  alt="Technical construction" 
                  className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXSguA0gPMMENmQs7kHz1mM-3uQgay35kjC59HDVMhua19dAJxHL0At7e_rdGm5kp0F_kXi3-lKaOf_SC6piiTGcodP_3-aF3eqpmIlvk7z9Hs6M-XcX4G-oD7f20Lgv3Tb2J-yzNuqZeFIhR18QH_QBqZcEZrh1TuVHhvmWlKTL1CrB4kYzFLwX6jEeBUMeqa-g743eO6zmyJTJbVkELi-lDkeJBaMreZekj3rfQ1qrSIsCswmWPtL504wnZzH5sq4ZdXeCwKUYM"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-1 gap-1 px-1 bg-surface-container-high rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-primary p-0 min-h-[400px] order-2 md:order-1 group overflow-hidden relative">
                <img 
                  alt="Vapor recovery" 
                  className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN3YX63MYf0QmcnsxFddWgJYofqNBYBvUt9Jz4NMJhiK9Poye376YGyfywZn9dw5R4d1jUOtpbaVVn3YM_8FR9hRJ3CIMlBVqB35WyWPvXZYYafYVO3wZBMNSs4vHMKNLfj2JywB8ZuLNyx0YH_tOgGOvxXeMxeG8hU3mbeVTLop7Obqccy03Y7vip8sSM_xnRqm_xuz6UX8OaxI-SjfqHG4v3rjTJX3gDpNszcRo0N-N5iMX7bzO3BCkOhgLYmWkXiPSQLm6Pzzg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-surface p-12 flex flex-col justify-center order-1 md:order-2 group">
                <span className="text-[0.6875rem] tracking-[0.1em] uppercase font-bold text-secondary mb-2">Systems | 系统</span>
                <h3 className="text-3xl font-headline font-bold text-primary mb-2">Stage II Vapor Recovery</h3>
                <p className="text-sm font-bold text-outline-variant mb-6 uppercase">二级油气回收</p>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Integrated active vapor balancing systems capture 99% of VOC emissions during transfer operations. The closed-loop architecture prevents atmospheric discharge.</p>
                <div className="flex items-center gap-4 py-4 px-6 bg-surface-container-low rounded-lg w-fit transition-all group-hover:bg-primary group-hover:text-white cursor-pointer">
                  <Leaf className="text-secondary group-hover:text-white w-5 h-5" />
                  <span className="text-xs font-bold">ULTRA-LOW VOC TECHNOLOGY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation & Maintenance Section */}
        <section className="py-24 bg-surface-container-high">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 sticky top-32">
                <span className="text-[0.6875rem] tracking-[0.1em] uppercase font-bold text-outline">Section 04 | 第四节</span>
                <h2 className="text-5xl font-headline font-bold text-primary mt-2">Rapid Deployment Guide</h2>
                <h3 className="text-2xl font-headline font-bold text-outline mt-2">快速部署指南</h3>
                <p className="text-on-surface-variant mt-6 text-lg">From shipment arrival to operational status in under 48 hours. Our "Plug & Pump" architecture eliminates lengthy site preparation.</p>
              </div>
              <div className="md:w-2/3 space-y-4">
                {/* Step 1 */}
                <div className="bg-surface p-10 rounded-xl relative group border-l-4 border-primary hover:shadow-lg transition-all duration-300">
                  <span className="absolute -left-5 top-8 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-headline font-bold group-hover:scale-110 transition-transform">01</span>
                  <h4 className="text-2xl font-headline font-bold text-primary mb-1">Foundation Prep & Placement</h4>
                  <p className="text-xs text-outline mb-4 font-bold uppercase">基础准备与放置</p>
                  <p className="text-on-surface-variant mb-6">Units arrive pre-assembled on heavy-duty structural steel frames. Only a level concrete pad is required for immediate crane placement.</p>
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      alt="Crane placement" 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQmBBhGlsnduJMIBNlLw7tnFlj2Hn9WnAi9pCIz0JRj_0XyJyY8U2kJNMdhpe4II4TuwfKPa8s5JY45RHw66Q6t06RCybO-V766QPCS3zrSGiu61JqcbVfr_2B2kYfzeoli9q1j5TqQ2r21vzG-5gsMKjdd5i20zPakNelwdAypqAEsjlj-qaOkylGK2eVUfOCHt-Pb1i6MNDAzEhBzNl9sW2OzNuLzpgVlJc89OCD17kwqSmKnR-GcHZkaIxvqGSFOiMeFiu27Ho"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                {/* Step 2 */}
                <div className="bg-surface p-10 rounded-xl relative group border-l-4 border-outline-variant hover:border-primary hover:shadow-lg transition-all duration-300">
                  <span className="absolute -left-5 top-8 w-10 h-10 rounded-full bg-outline-variant group-hover:bg-primary text-white flex items-center justify-center font-headline font-bold transition-all">02</span>
                  <h4 className="text-2xl font-headline font-bold text-primary mb-1">Interface Integration</h4>
                  <p className="text-xs text-outline mb-4 font-bold uppercase">接口集成</p>
                  <p className="text-on-surface-variant">Standardized flange connections and rapid-connect electrical busbars facilitate instant coupling to site infrastructure.</p>
                </div>
                {/* Step 3 */}
                <div className="bg-surface p-10 rounded-xl relative group border-l-4 border-outline-variant hover:border-primary hover:shadow-lg transition-all duration-300">
                  <span className="absolute -left-5 top-8 w-10 h-10 rounded-full bg-outline-variant group-hover:bg-primary text-white flex items-center justify-center font-headline font-bold transition-all">03</span>
                  <h4 className="text-2xl font-headline font-bold text-primary mb-1">Automated Calibration</h4>
                  <p className="text-xs text-outline mb-4 font-bold uppercase">自动校准</p>
                  <p className="text-on-surface-variant">The onboard computer executes a 50-point diagnostic routine, verifying all safety interlocks and calibrating flow meters.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <span className="text-xl font-black text-blue-950 mb-4 block">SkidMaster</span>
            <p className="text-[11px] uppercase tracking-[0.1em] font-bold text-slate-500">
              © 2024 Precision Skid Systems. Engineering Excellence.<br/>
              精密橇装系统。工程卓越。
            </p>
          </div>
          <div>
            <h5 className="text-[11px] uppercase tracking-[0.1em] font-bold text-blue-900 mb-6">Products | 产品</h5>
            <ul className="space-y-4">
              <li><a className="text-[11px] uppercase tracking-[0.1em] font-bold text-slate-500 hover:text-blue-900 underline decoration-2 underline-offset-4 transition-all duration-300" href="#">Product Catalog | 产品目录</a></li>
              <li><a className="text-[11px] uppercase tracking-[0.1em] font-bold text-slate-500 hover:text-blue-900 underline decoration-2 underline-offset-4 transition-all duration-300" href="#">Safety Certifications | 安全认证</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] uppercase tracking-[0.1em] font-bold text-blue-900 mb-6">Support | 支持</h5>
            <ul className="space-y-4">
              <li><a className="text-[11px] uppercase tracking-[0.1em] font-bold text-slate-500 hover:text-blue-900 underline decoration-2 underline-offset-4 transition-all duration-300" href="#">Inquiry Portal | 询价入口</a></li>
              <li><a className="text-[11px] uppercase tracking-[0.1em] font-bold text-slate-500 hover:text-blue-900 underline decoration-2 underline-offset-4 transition-all duration-300" href="#">Technical Support | 技术支持</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] uppercase tracking-[0.1em] font-bold text-blue-900 mb-6">Legal | 法律</h5>
            <ul className="space-y-4">
              <li><a className="text-[11px] uppercase tracking-[0.1em] font-bold text-slate-500 hover:text-blue-900 underline decoration-2 underline-offset-4 transition-all duration-300" href="#">Privacy Policy | 隐私政策</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
