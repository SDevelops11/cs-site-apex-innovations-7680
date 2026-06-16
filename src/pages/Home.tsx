import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Shield, Zap, Sparkles, MessageSquare, Sun } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { BusinessLogo } from '../components/Navbar';

export default function Home() {
  const { activeProfile, isLoading } = useAppContext();
  const theme = activeProfile.theme;

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${theme.logoColor}`} />
          <p className="text-sm font-medium text-gray-500 font-mono">Reshaping layout architecture...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col w-full text-gray-800 ${theme.fontClass} animate-fadeIn`}>
      
      {/* 🚀 DYNAMIC HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        {/* Background ambient subtle blur decorations that change with the theme colors */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className={`absolute -top-40 right-20 w-72 h-72 rounded-full blur-3xl filter ${
            activeProfile.id === 'tech-saas' ? 'bg-indigo-300' :
            activeProfile.id === 'creative-agency' ? 'bg-rose-300' :
            activeProfile.id === 'corporate-legal' ? 'bg-emerald-300' : 'bg-teal-300'
          }`} />
          <div className={`absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl filter ${
            activeProfile.id === 'tech-saas' ? 'bg-violet-200' :
            activeProfile.id === 'creative-agency' ? 'bg-amber-150' :
            activeProfile.id === 'corporate-legal' ? 'bg-stone-300' : 'bg-green-100'
          }`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            {/* Copy Block */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border w-max ${theme.badgeBg}`}>
                <BusinessLogo iconName={activeProfile.logoIcon} className="h-3 w-3" />
                <span>Premium {activeProfile.name} Template</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                {activeProfile.tagline}
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                {activeProfile.description}
              </p>
              
              <div className="flex flex-wrap gap-4 sm:items-center">
                <Link
                  to="/services"
                  className={`flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-xl text-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 ${theme.primaryBg} ${theme.primaryHover}`}
                >
                  Our Capabilities
                </Link>
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 justify-center font-semibold text-sm px-6 py-3 rounded-xl bg-gray-50 text-gray-800 hover:bg-gray-100 transition"
                >
                  <span>Book Consult</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Vibe Visual Anchor Component */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md">
                
                {activeProfile.id === 'tech-saas' && (
                  <div className="bg-slate-950 rounded-2xl shadow-2xl p-6 border border-slate-800 font-mono text-left w-full relative">
                    <div className="flex gap-1.5 mb-4 border-b border-slate-900 pb-3">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-[10px] text-slate-500 ml-2">vertex-ops-terminal</span>
                    </div>
                    <div className="space-y-2 text-xs sm:text-xs text-slate-300">
                      <p className="text-indigo-400">$ npm install @vertex/pipelines</p>
                      <p className="text-slate-500">✔ Initialized secure framework environments.</p>
                      <p className="text-slate-400">$ vertex deploy --tenant=enterprise</p>
                      <p className="text-emerald-400">⚡ Global Routing active [3000ms response]</p>
                      <p className="text-slate-500">✔ Sync complete: database.schema verified.</p>
                      <div className="bg-slate-900 p-3 rounded mt-4 border border-slate-800">
                        <div className="flex justify-between items-center text-[10px] text-indigo-400 mb-1">
                          <span>SYSTEM METRIC</span>
                          <span>ONLINE</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full w-[94%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeProfile.id === 'creative-agency' && (
                  <div className="relative select-none w-full aspect-square bg-gradient-to-tr from-rose-100 to-amber-100 rounded-3xl p-8 shadow-xl border border-rose-100 flex flex-col justify-between items-start text-left overflow-hidden">
                    <div className="absolute right-[-20%] top-[-20%] w-72 h-72 rounded-full border border-rose-300/40 animate-spin-slow" />
                    <Sparkles className="h-10 w-10 text-rose-500 mb-4" />
                    <div>
                      <h4 className="font-bold text-2xl tracking-tighter text-gray-900 uppercase">Aesthetic Overhaul</h4>
                      <p className="text-xs text-rose-800 tracking-wide font-mono mt-1">VOL. 09 // EDITION 2026</p>
                    </div>
                    <p className="text-sm font-light text-gray-700 leading-snug">
                      Pixel-perfect layouts designed to connect corporate ecosystems with luxury art principles.
                    </p>
                    <span className="text-[10px] bg-rose-600 text-white font-bold py-1 px-2.5 rounded-full uppercase tracking-wider">
                      Premium Craft
                    </span>
                  </div>
                )}

                {activeProfile.id === 'corporate-legal' && (
                  <div className="w-full bg-stone-50 border-4 border-double border-stone-300 shadow-xl p-8 rounded-lg text-left font-serif">
                    <div className="flex justify-between border-b-2 border-stone-200 pb-4 mb-4">
                      <Shield className="h-8 w-8 text-emerald-800" />
                      <div className="text-right text-[10px] tracking-wide font-sans text-stone-500 font-semibold uppercase">
                        <div>Established London, 1994</div>
                        <div>Reg. Counselor #440-9</div>
                      </div>
                    </div>
                    <h3 className="text-stone-900 font-bold text-xl leading-snug mb-3">
                      Audit Covenant of Absolute Safety
                    </h3>
                    <p className="text-xs sm:text-xs text-stone-700 leading-relaxed font-sans italic mb-4">
                      "Providing secure wealth vehicles, M&A oversight, and continuous international compliance checks across double-taxation structures."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center border border-emerald-800">
                        H
                      </div>
                      <div className="text-[10px] font-sans">
                        <div className="font-bold text-stone-900">Sir Alexander Hargreaves</div>
                        <div className="text-stone-500">Legal Senior Director</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeProfile.id === 'holistic-wellness' && (
                  <div className="w-full aspect-square rounded-full bg-gradient-to-br from-teal-50 to-emerald-50 p-12 border border-teal-100 flex flex-col justify-center items-center text-center shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial from-transparent to-teal-50/20" />
                    <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 text-teal-700 animate-pulse">
                      <Sun className="h-8 w-8" />
                    </div>
                    <h4 className="text-teal-900 font-bold text-lg mb-1 font-serif">Solen Breathing Circle</h4>
                    <p className="text-xs text-teal-700 max-w-[200px] leading-relaxed">
                      Deep somatic therapy cycles engineered for chronic adrenal exhaustion resetting.
                    </p>
                    <div className="mt-4 flex gap-1 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-200"></span>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📊 SERVICES DYNAMIC SUMMARY SECTION */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-100 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <span className={`text-xs font-bold uppercase tracking-wider ${theme.textAccent}`}>Expert Capabilities</span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-2 sm:text-4xl">Core Services Focused on Growth</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our business patterns are custom-built to support rapid deployment, modern digital architecture, and optimal client delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {activeProfile.services.map((service, index) => (
              <div 
                key={service.id} 
                className={`bg-white p-8 border border-gray-100 shadow-xs transition hover:shadow-md ${theme.cardRounding}`}
              >
                <div className={`p-3 w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-slate-50 ${theme.textAccent}`}>
                  <BusinessLogo iconName={activeProfile.logoIcon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className={`inline-flex items-center text-xs font-semibold ${theme.textAccent} hover:underline`}
                >
                  Explore service specifications &rarr;
                </Link>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link 
              to="/services" 
              className={`inline-flex items-center gap-2 font-semibold text-sm py-2.5 px-6 rounded-lg text-white ${theme.primaryBg} ${theme.primaryHover} shadow-xs transition`}
            >
              <span>View Services Matrix</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ⭐ TRUST & CLIENT TESTIMONIALS */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Client Testimonials</h2>
            <p className="mt-4 text-base text-gray-600">See how companies and founders scale using our systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeProfile.testimonials.map((t) => (
              <div 
                key={t.id} 
                className={`bg-gray-50/50 p-8 border border-gray-150 relative flex flex-col justify-between ${theme.cardRounding}`}
              >
                <span className="absolute top-4 right-6 text-6xl text-gray-200 font-serif leading-none select-none">“</span>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic relative z-10">"{t.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="h-11 w-11 rounded-full object-cover border border-gray-200" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 CTA PANEL */}
      <section className="w-full relative overflow-hidden text-white flex justify-center">
        <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo}`} />
        <div className="relative z-10 max-w-5xl text-center py-16 px-6 sm:py-24 sm:px-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
            Ready to Accelerate Your Enterprise?
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-white/90 leading-relaxed">
            Get in touch with an expert counselor today and prepare a solid roadmap custom tailored for your target audience.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-gray-900 font-bold rounded-xl text-sm shadow-md hover:bg-gray-50 transition"
            >
              Get In Touch Now
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 border border-white/40 text-white font-bold rounded-xl text-sm hover:bg-white/10 transition"
            >
              Explore Services Specification
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
