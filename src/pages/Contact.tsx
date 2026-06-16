import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ShieldAlert,
  Building
} from 'lucide-react';
import { BusinessLogo } from '../components/Navbar';

export default function Contact() {
  const { activeProfile, isLoading } = useAppContext();
  const theme = activeProfile.theme;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    // Contextual fields:
    customFieldVal: '', 
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call and state tracking
    const payload = {
      ...formData,
      profileId: activeProfile.id,
      timestamp: new Date().toISOString(),
    };

    console.log('--- ENTERPRISE BOILERPLATE SUBMISSION PAYLOAD ---');
    console.log(JSON.stringify(payload, null, 2));

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(payload);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        customFieldVal: '',
        message: '',
      });
    }, 900);
  };

  // Define unique labels/fields based on business type:
  const getContextualFormDetails = () => {
    switch (activeProfile.id) {
      case 'tech-saas':
        return {
          customLabel: 'Primary Cloud Stack',
          customPlaceholder: 'e.g., AWS, React, Kubernetes',
          options: ['AWS / Cloud Native', 'Hybrid Multi-Cloud', 'Self-Hosted Baremetal', 'Other / Undecided'],
          messagePlaceholder: 'Tell us about your build pipelines or deployment challenges...',
        };
      case 'creative-agency':
        return {
          customLabel: 'Creative Budget Focus',
          customPlaceholder: 'Select budget scope',
          options: ['$10k - $25k', '$25k - $100k', '$100k - $250k', '$250k+ Enterprise'],
          messagePlaceholder: 'Tell us about your brand goals, target aesthetic, or visual timeline...',
        };
      case 'corporate-legal':
        return {
          customLabel: 'Legal Matter Practice Area',
          customPlaceholder: 'Select advisory sector',
          options: ['M&A Transaction Advisory', 'Regulatory Compliance & Audit', 'Asset Protection & Trust Structuring', 'Sovereign Governance Counsel'],
          messagePlaceholder: 'Please provide high level structural context regarding your matter...',
        };
      case 'holistic-wellness':
        return {
          customLabel: 'Adrenal Stress / Wellness Profile',
          customPlaceholder: 'Select recovery focus',
          options: ['Chronic Adrenal Recovery', 'Deep Somatic Body Alignment', 'Circadian Breathing Mentorship', 'General Day-Spa Escape'],
          messagePlaceholder: 'Are there any chronic pain, sleep patterns, or somatic desires you want us to handle...',
        };
      default:
        return {
          customLabel: 'Inquiry Category',
          customPlaceholder: 'General support inquiry',
          options: ['General Partnership', 'Enterprise Pricing Quote', 'Other Segment'],
          messagePlaceholder: 'Write your message here...',
        };
    }
  };

  const formDetails = getContextualFormDetails();

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[65vh]">
        <div className="flex flex-col items-center gap-4">
          <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${theme.logoColor}`} />
          <p className="text-sm font-medium text-gray-500 font-mono">Calibrating terminal portals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${theme.fontClass} animate-fadeIn`}>
      
      {/* HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border ${theme.badgeBg}`}>
          Connect Portal
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          Secure Partnership Handoff
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          Initialize communication lines regarding enterprise alignment. Complete the questionnaire and our sector leads will respond.
        </p>
      </div>

      {/* COMBINED FULL LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
        
        {/* 📋 LEFT: DYNAMIC CONTACT FORM MODULE */}
        <div className="lg:col-span-7">
          <div className="bg-white px-6 sm:px-10 py-10 shadow-xs border border-gray-150 rounded-2xl">
            
            {submittedData ? (
              <div className="text-left animate-slideUp">
                <div className="flex h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 justify-center items-center mb-6">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Transmission Successful</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Your secure payload has been ingested and dispatched to <strong>{activeProfile.supportEmail}</strong>. A review operator has was notified instantly.
                </p>
                
                <div className="bg-slate-900 text-slate-300 font-mono text-xs p-5 rounded-xl border border-slate-800 space-y-3 shadow-inner">
                  <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold border-b border-slate-850 pb-2 mb-2">Ingestion Receipt</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-slate-500">Sender:</span>
                    <span className="col-span-2 text-slate-200">{submittedData.fullName}</span>
                    
                    <span className="text-slate-500">Corporate:</span>
                    <span className="col-span-2 text-slate-200">{submittedData.company || 'N/A'}</span>
                    
                    <span className="text-slate-500">{formDetails.customLabel}:</span>
                    <span className="col-span-2 text-emerald-400">{submittedData.customFieldVal || 'N/A'}</span>
                    
                    <span className="text-slate-500">Relayed:</span>
                    <span className="col-span-2 text-slate-400 text-[11px] truncate md:w-56">{submittedData.timestamp}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="mt-8 text-xs font-bold text-indigo-650 hover:text-indigo-500 flex items-center gap-1 hover:underline"
                >
                  <span>Submit another request</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Full name input */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Full Representative Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g., Katherine Sterling"
                    className="block w-full rounded-xl border border-gray-200 bg-white/70 py-3 px-4 text-sm text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-hidden transition"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., k.sterling@yourcompany.com"
                    className="block w-full rounded-xl border border-gray-200 bg-white/70 py-3 px-4 text-sm text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-hidden transition"
                  />
                </div>

                {/* Grid for Dual dynamic elements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g., Sterling Trust Ltd"
                      className="block w-full rounded-xl border border-gray-200 bg-white/70 py-3 px-4 text-sm text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-hidden transition"
                    />
                  </div>

                  {/* Contextual dropdown element */}
                  <div>
                    <label htmlFor="customFieldVal" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      {formDetails.customLabel}
                    </label>
                    <select
                      name="customFieldVal"
                      id="customFieldVal"
                      required
                      value={formData.customFieldVal}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-gray-200 bg-white/70 py-3 px-4 text-sm text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-hidden transition appearance-none cursor-pointer"
                    >
                      <option value="">{formDetails.customPlaceholder}</option>
                      {formDetails.options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message block */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Inquiry Details & Context
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={formDetails.messagePlaceholder}
                    className="block w-full rounded-xl border border-gray-200 bg-white/70 py-3 px-4 text-sm text-gray-900 shadow-xs focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-hidden transition"
                  />
                </div>

                {/* Button container */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex w-full items-center justify-center py-3.5 px-6 rounded-xl font-semibold text-sm text-white shadow-md disabled:opacity-50 transition-all ${theme.primaryBg} ${theme.primaryHover}`}
                  >
                    <span>{isSubmitting ? 'Transmitting Ingestion...' : 'Dispatch Request Package'}</span>
                    {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 🏢 RIGHT: ADAPTIVE TENANT ASSETS SIDEBAR */}
        <div className="lg:col-span-5 space-y-8 text-left">
          
          {/* Card: Active directory coordinates */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2.5 rounded-xl bg-slate-800 ${theme.textAccent}`}>
                <BusinessLogo iconName={activeProfile.logoIcon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-100">{activeProfile.companyName}</h3>
                <span className="text-[10px] text-slate-450 uppercase font-mono tracking-widest">Active Directory ID</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-8">
              Communication submitted through this portal aligns with our corporate {activeProfile.name} data regulations. All queries are scrutinized within standard SLA structures.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-800 rounded-lg text-slate-400 mt-0.5">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Enterprise Registry Intake</span>
                  <a href={`mailto:${activeProfile.supportEmail}`} className="text-xs font-semibold text-slate-200 hover:underline">
                    {activeProfile.supportEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-800 rounded-lg text-slate-400 mt-0.5">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Telephone Hotline</span>
                  <span className="text-xs font-semibold text-slate-200 block">
                    {activeProfile.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-800 rounded-lg text-slate-400 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Physical Headquarters</span>
                  <span className="text-xs font-semibold text-slate-200 block leading-relaxed">
                    {activeProfile.address}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Secure disclaimer container */}
          <div className="bg-gray-50 border border-gray-150 rounded-2xl p-6 text-xs text-gray-500 leading-relaxed flex items-start gap-3">
            <Building className={`h-5 w-5 mt-0.5 shrink-0 ${theme.textAccent}`} />
            <div>
              <span className="font-bold text-gray-700 block mb-1">Dual-Sovereign Architecture Ready</span>
              Our servers store client configuration packages standardly in memory. Absolutely no telemetry is shared with outer platforms. Review response periods conform explicitly with chosen sandbox tiers.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
