import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { 
  Briefcase, 
  Code, 
  Check, 
  CheckCircle,
  Database,
  ShieldCheck,
  Cpu,
  Palette,
  Sparkles,
  Compass,
  Scale,
  Coins,
  Heart,
  Sun,
  Apple,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

// Dynamic service icon mapping
function ServiceIcon({ iconName, className = "h-6 w-6" }: { iconName: string; className?: string }) {
  switch (iconName) {
    case 'Cpu':
      return <Cpu className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Coins':
      return <Coins className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'Sun':
      return <Sun className={className} />;
    case 'Apple':
      return <Apple className={className} />;
    default:
      return <CheckCircle className={className} />;
  }
}

export default function Services() {
  const { activeProfile, isLoading } = useAppContext();
  const theme = activeProfile.theme;

  // 🧮 SANDBOX CONFIG STATE FOR CLIENT SPECIFICATION
  const [slaTier, setSlaTier] = useState<'standard' | 'priority' | 'mission-critical'>('priority');
  const [timeline, setTimeline] = useState<number>(3); // Months duration

  const basePriceMultiplier = 
    slaTier === 'standard' ? 1.0 :
    slaTier === 'priority' ? 1.5 : 2.5;

  const calculatedSLA = 
    slaTier === 'standard' ? '48 hours response' :
    slaTier === 'priority' ? '12 hours response' : '15 minutes response (Dedicated Team)';

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${theme.logoColor}`} />
          <p className="text-sm font-medium text-gray-500 font-mono">Assembling capability registry...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-12 sm:py-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${theme.fontClass} animate-fadeIn`}>
      
      {/* 🔝 HEADER TITLE SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border ${theme.badgeBg}`}>
          Services Catalog
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          Tailored Professional Capabilities
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          Explore our structured solutions designed to maximize efficiency, protect data integrity, and scale with your goals.
        </p>
      </div>

      {/* 🚀 SERVICE GRIDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {activeProfile.services.map((service) => (
          <div 
            key={service.id} 
            className={`bg-white rounded-2xl p-8 border border-gray-150 shadow-xs flex flex-col transition hover:scale-[1.01] hover:shadow-md ${theme.cardRounding}`}
          >
            <div className={`p-3 bg-gray-50 text-gray-800 rounded-xl mb-6 w-max ${theme.textAccent}`}>
              <ServiceIcon iconName={service.icon} className="h-6 w-6" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
            
            <div className="border-t border-gray-100 pt-5 mt-auto">
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-3">Deliverables Include</span>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className={`h-3.5 w-3.5 ${theme.textAccent}`} />
                  <span>Custom architecture & layout specs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className={`h-3.5 w-3.5 ${theme.textAccent}`} />
                  <span>SLA compliance & validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className={`h-3.5 w-3.5 ${theme.textAccent}`} />
                  <span>Full knowledge transfer & handoff</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 🎛️ COHESIVE INTERACTIVE COMPatibility SANDBOX PANEL */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Interactive Panel */}
        <div className="p-8 lg:p-12 lg:col-span-7 flex flex-col text-left">
          <div className="flex items-center gap-2 mb-4">
            <Award className={`h-5 w-5 ${theme.textAccent}`} />
            <span className="text-xs uppercase font-bold tracking-widest text-gray-400">Specification Sandbox</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Estimate Your Enterprise Requirements</h2>
          <p className="text-sm text-gray-600 mb-8 max-w-lg">
            Configure target project constraints to gauge the response speeds and structural guarantees built from our {activeProfile.name} methods.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* SLA Choice */}
            <div>
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Service Level Agreement Tier</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'standard', name: 'Standard SLA', detail: '48h Response' },
                  { id: 'priority', name: 'Priority SLA', detail: '12h Response' },
                  { id: 'mission-critical', name: 'Mission Critical', detail: '15m Response' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSlaTier(tier.id as any)}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold transition text-left flex flex-col gap-1 ${
                      slaTier === tier.id 
                        ? `${theme.primaryBg} text-white border-transparent shadow-sm scale-[1.02]` 
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100/70'
                    }`}
                  >
                    <span>{tier.name}</span>
                    <span className={`text-[10px] font-normal ${slaTier === tier.id ? 'text-white/80' : 'text-gray-400'}`}>
                      {tier.detail}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Project Timeline Duration</span>
                <span className="text-sm font-bold text-gray-900">{timeline} Months</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="12" 
                value={timeline} 
                onChange={(e) => setTimeline(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[10px] text-gray-450 mt-1.5 font-mono">
                <span>1 Month</span>
                <span>6 Months</span>
                <span>12 Months</span>
              </div>
            </div>
          </form>
        </div>

        {/* Right Output Panel */}
        <div className="bg-slate-900 p-8 lg:p-12 lg:col-span-5 text-white flex flex-col justify-between text-left lg:border-l border-gray-200">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 block mb-6">PROPOSAL SUMMARY</span>
            
            <div className="space-y-4 mb-8">
              <div>
                <span className="text-xs text-slate-450 block mb-1">Assigned Business Profile</span>
                <h4 className="font-bold text-sm text-slate-100 flex items-center gap-1.5">
                  <ServiceIcon iconName={activeProfile.logoIcon} className="h-4 w-4 text-slate-400" />
                  <span>{activeProfile.companyName}</span>
                </h4>
              </div>

              <div>
                <span className="text-xs text-slate-450 block mb-1">Response Guarantee</span>
                <h4 className={`font-bold text-sm ${theme.textAccent}`}>{calculatedSLA}</h4>
              </div>

              <div>
                <span className="text-xs text-slate-450 block mb-1 font-mono">PROJECT ESTIMATE RADAR</span>
                <div className="flex items-center gap-2 mt-1">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs text-slate-300">
                    Optimal staffing with standard {timeline} months rollout.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-xs text-slate-400">Base Cost Scalar</span>
              <span className="text-lg font-bold font-mono text-slate-100">{basePriceMultiplier.toFixed(1)}x</span>
            </div>
            
            <button 
              onClick={() => alert(`Redirecting to inquiry with parameters: Tier=${slaTier}, Duration=${timeline}m`)}
              className={`w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white transition ${theme.primaryBg} ${theme.primaryHover}`}
            >
              Lock In Specification
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
