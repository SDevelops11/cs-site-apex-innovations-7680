import React, { createContext, useContext, useState, ReactNode } from 'react';
import customData from '../customData.json';

export type BusinessPresetId = 'tech-saas' | 'creative-agency' | 'corporate-legal' | 'holistic-wellness' | 'custom-business';

export interface BusinessService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BusinessTestimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface BusinessTheme {
  primaryBg: string;
  primaryHover: string;
  textAccent: string;
  bgLight: string;
  badgeBg: string;
  gradientFrom: string;
  gradientTo: string;
  ringFocus: string;
  fontClass: string;
  logoColor: string;
  cardRounding: string;
}

export interface BusinessProfile {
  id: BusinessPresetId;
  name: string;
  companyName: string;
  tagline: string;
  description: string;
  supportEmail: string;
  phone: string;
  address: string;
  logoIcon: string;
  theme: BusinessTheme;
  services: BusinessService[];
  testimonials: BusinessTestimonial[];
}

interface AppContextType {
  activeProfile: BusinessProfile;
  setActiveProfileId: (id: BusinessPresetId) => void;
  profiles: BusinessProfile[];
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const businessProfiles: BusinessProfile[] = [
  {
    id: 'tech-saas',
    name: 'SaaS Technology',
    companyName: 'Vertex Pipelines',
    tagline: 'Automate complex software delivery with a single click',
    description: 'A military-grade continuous integration platfrom bridging the gap between raw compute and blazing fast instant deployments. Scale infinitely without breaking a sweat.',
    supportEmail: 'ops@vertexpipelines.io',
    phone: '+1 (800) 555-0142',
    address: '100 Infinite Loop, Suite 400, Cupertino, CA',
    logoIcon: 'Terminal',
    theme: {
      primaryBg: 'bg-indigo-600',
      primaryHover: 'hover:bg-indigo-500',
      textAccent: 'text-indigo-600',
      bgLight: 'bg-slate-50',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      gradientFrom: 'from-indigo-600',
      gradientTo: 'to-violet-500',
      ringFocus: 'focus:ring-indigo-500',
      fontClass: 'font-sans',
      logoColor: 'text-indigo-600',
      cardRounding: 'rounded-xl',
    },
    services: [
      { id: '1', title: 'Kubernetes Orchestration', description: 'Run thousands of container microservices on auto-healing cloud environments.', icon: 'Cpu' },
      { id: '2', title: 'Vulnerabilities Firewall', description: 'Continuous static analysis, sandboxing, and automated threat mitigations.', icon: 'ShieldCheck' },
      { id: '3', title: 'Data Lake Syncing', description: 'Zero-latency pipelining from transactional relational nodes direct into analytics engines.', icon: 'Database' },
    ],
    testimonials: [
      { id: '1', name: 'Leah Vance', role: 'Head of Reliability at Hyperion', quote: 'Vertex reduced our monthly build cycles from 4 hours down to 9 minutes. The zero-trust isolation is breathtakingly flawless.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120' },
      { id: '2', name: 'Kenji Sato', role: 'VP of Platform Engineering', quote: 'Usually multi-cloud pipelines are an absolute headache. With the context preset mechanics here, we switched over in just one afternoon.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120' },
    ],
  },
  {
    id: 'creative-agency',
    name: 'Creative Agency',
    companyName: 'Studio Prism',
    tagline: 'We build digital identities that demand to be noticed',
    description: 'A high-fidelity boutique creative consultancy crafting award-winning visual experiences, luxury web ecosystems, and radical design narratives for ambitious brands.',
    supportEmail: 'hello@studioprism.design',
    phone: '+1 (212) 555-8930',
    address: '402 Broadway, Penthouse Route, New York, NY',
    logoIcon: 'Sparkles',
    theme: {
      primaryBg: 'bg-rose-600',
      primaryHover: 'hover:bg-rose-500',
      textAccent: 'text-rose-600',
      bgLight: 'bg-zinc-50',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-100',
      gradientFrom: 'from-rose-500',
      gradientTo: 'to-amber-500',
      ringFocus: 'focus:ring-rose-500',
      fontClass: 'font-display',
      logoColor: 'text-rose-600',
      cardRounding: 'rounded-3xl',
    },
    services: [
      { id: '1', title: 'Radical Identity Design', description: 'Total sensory branding from conceptual layout, fluid logos, up to custom luxury packaging.', icon: 'Palette' },
      { id: '2', title: 'Next-Gen Web Art', description: 'Spline-enabled interactive web masterpieces utilizing responsive, micro-animated gestures.', icon: 'Sparkles' },
      { id: '3', title: 'Editorial Storytelling', description: 'High-concept video essays, organic campaign photography, and copy writing that drives raw desire.', icon: 'Compass' },
    ],
    testimonials: [
      { id: '1', name: 'Sophia Chen', role: 'Founder of VELA Cosmetics', quote: 'Prism completely transformed how we look to the luxury market. Every client immediately remarks on our typography and brand voice.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120' },
      { id: '2', name: 'Maximilian Vance', role: 'Brand Director, Solitude Wear', quote: 'They do not copy standard templates. Their design principles are incredibly refreshing and highly precise.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120' },
    ],
  },
  {
    id: 'corporate-legal',
    name: 'Consulting & Legal',
    companyName: 'Hargreaves Advisory',
    tagline: 'Pragmatic structures. Bulletproof counsel. Absolute discretion.',
    description: 'Experienced transactional analysts providing defensive wealth structures, regulatory compliance counseling, and M&A advisory to sovereign founders and business families.',
    supportEmail: 'advisory@hargreaves.com',
    phone: '+44 20 7946 0192',
    address: '40 Bank Street, Canary Wharf, London, UK',
    logoIcon: 'Shield',
    theme: {
      primaryBg: 'bg-emerald-800',
      primaryHover: 'hover:bg-emerald-700',
      textAccent: 'text-emerald-800',
      bgLight: 'bg-neutral-50',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-100',
      gradientFrom: 'from-emerald-800',
      gradientTo: 'to-stone-700',
      ringFocus: 'focus:ring-emerald-800',
      fontClass: 'font-serif',
      logoColor: 'text-emerald-800',
      cardRounding: 'rounded-lg border border-neutral-200/80',
    },
    services: [
      { id: '1', title: 'Governance Blueprinting', description: 'Defensive organizational bylaws, boardroom dynamics, and shareholder conflict pre-mediation.', icon: 'Scale' },
      { id: '2', title: 'Multi-State Tax Structuring', description: 'Proactive off-shore asset planning, transfer-pricing defense, and sovereign structural isolation.', icon: 'Coins' },
      { id: '3', title: 'Transactional Liquidity', description: 'End-to-end strategic advisory for joint-ventures, standard stock purchases, and final exits.', icon: 'Briefcase' },
    ],
    testimonials: [
      { id: '1', name: 'Lord Sterling Arthur', role: 'Executive Vice Chair, GBC Trust', quote: 'Hargreaves is our ultimate defensive line. Their contract reviews and transaction auditing are relentlessly thorough.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120' },
      { id: '2', name: 'Elena Rostova', role: 'Founder of Rostova Holdings', quote: 'Their counsel doesn\'t come with fluff. They give direct, concrete transaction pathways that save millions in risk.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120' },
    ],
  },
  {
    id: 'holistic-wellness',
    name: 'Wellness & Lifestyle',
    companyName: 'Solen Aura Sanctuary',
    tagline: 'Nervous system recovery through organic sensory design',
    description: 'An eco-conscious restorative retreat center and botanical day spa offering sensory somatic adjustments, advanced breathwork classes, and nutritional cellular realignment.',
    supportEmail: 'retreats@solenaura.life',
    phone: '+1 (415) 555-0918',
    address: '77 Ocean View Way, Big Sur, CA',
    logoIcon: 'Sun',
    theme: {
      primaryBg: 'bg-teal-700',
      primaryHover: 'hover:bg-teal-600',
      textAccent: 'text-teal-700',
      bgLight: 'bg-stone-50/50',
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-100',
      gradientFrom: 'from-teal-600',
      gradientTo: 'to-emerald-500',
      ringFocus: 'focus:ring-teal-700',
      fontClass: 'font-sans',
      logoColor: 'text-teal-700',
      cardRounding: 'rounded-2xl',
    },
    services: [
      { id: '1', title: 'Somatic Tissue Re-Balancing', description: 'Expert neuromuscular release techniques combining organic botanical essential therapies.', icon: 'Heart' },
      { id: '2', title: 'Circadian Breathwork Cycles', description: 'Guided oxygen saturation sessions structured to downregulate chronic stress responses.', icon: 'Sun' },
      { id: '3', title: 'Cellular Adaptogen Mapping', description: 'Individually integrated nutritional planning focusing on active herbal restoration paths.', icon: 'Apple' },
    ],
    testimonials: [
      { id: '1', name: 'Maya Lin', role: 'Meditation Author & Educator', quote: 'Solen Aura is more than just a spa; it is a sacred clinical reset button. The air quality and therapeutic wisdom is unparalleled.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120' },
      { id: '2', name: 'David Carter', role: 'Marathon Trainer', quote: 'The muscular recovery therapy here completely ended two years of recurring back tension. Their staff is profoundly talented.', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120' },
    ],
  },
];

const getPrimaryColorHex = (profile: BusinessProfile): string => {
  // Try to find a hex pattern like #123456 in any of the theme colors
  const themeValues = Object.values(profile.theme);
  for (const val of themeValues) {
    if (typeof val === 'string') {
      const match = val.match(/#(?:[0-9a-fA-F]{3,4}){1,2}\b/);
      if (match) {
        return match[0];
      }
    }
  }
  
  // Fallbacks for presets
  const presets: Record<string, string> = {
    'tech-saas': '#4F46E5',
    'creative-agency': '#E11D48',
    'corporate-legal': '#065F46',
    'holistic-wellness': '#0F766E'
  };
  return presets[profile.id] || '#4F46E5';
};

const customProfile: BusinessProfile | null = (() => {
  if (customData && typeof customData === 'object' && 'id' in customData) {
    const profile = { ...(customData as any) };
    profile.theme = {
      ...profile.theme,
      primaryBg: 'bg-[var(--primary-color)]',
      primaryHover: 'hover:opacity-90',
      textAccent: 'text-[var(--primary-color)]',
      badgeBg: 'bg-[var(--primary-color)]/10 text-[var(--primary-color)] border-[var(--primary-color)]/20',
      gradientFrom: 'from-[var(--primary-color)]',
      logoColor: 'text-[var(--primary-color)]',
      ringFocus: 'focus:ring-[var(--primary-color)]',
    };
    return profile;
  }
  return null;
})();

const allProfiles = customProfile ? [customProfile, ...businessProfiles] : businessProfiles;

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeProfileId, setActiveProfileId] = useState<BusinessPresetId>(
    customProfile ? customProfile.id : 'tech-saas'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const activeProfile = allProfiles.find(p => p.id === activeProfileId) || allProfiles[0];

  React.useEffect(() => {
    const hex = getPrimaryColorHex(activeProfile);
    document.documentElement.style.setProperty('--primary-color', hex);
  }, [activeProfile]);

  const handleProfileChange = (id: BusinessPresetId) => {
    setIsLoading(true);
    // Mimic smooth transitional loading for mock API action
    setTimeout(() => {
      setActiveProfileId(id);
      setIsLoading(false);
    }, 450);
  };

  return (
    <AppContext.Provider 
      value={{ 
        activeProfile, 
        setActiveProfileId: handleProfileChange, 
        profiles: allProfiles, 
        isLoading, 
        setIsLoading 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
