import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Shield } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { BusinessLogo } from './Navbar';

export default function Footer() {
  const { activeProfile } = useAppContext();
  const theme = activeProfile.theme;

  return (
    <footer className={`w-full bg-slate-900 text-slate-300 mt-auto ${theme.fontClass} border-t border-slate-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 text-left">
          
          {/* Brand/Summary column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className={`p-1.5 rounded-lg bg-slate-800 ${theme.textAccent}`}>
                <BusinessLogo iconName={activeProfile.logoIcon} className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {activeProfile.companyName}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {activeProfile.tagline}. Powered by our universal multi-vibe business layout boilerplate template. Safe, robust, responsive.
            </p>

            <div className="pt-2 flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-slate-500">
              <Shield className="h-3.5 w-3.5 text-slate-400" />
              <span>Full Device Sandboxing Enabled</span>
            </div>
          </div>
          
          {/* Quick links routes */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400 font-mono">Directory Access</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <NavLink to="/" className="text-slate-400 hover:text-white transition">
                  Overview Landing
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-slate-400 hover:text-white transition">
                  Services & Specs
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-slate-400 hover:text-white transition">
                  Get In Touch
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Secure details col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400 font-mono">Operations HQ</h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2 max-w-xs">
                <MapPin className="h-4 w-4 shrink-0 text-slate-500 mt-0.5" />
                <span>{activeProfile.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-500" />
                <a href={`mailto:${activeProfile.supportEmail}`} className="hover:text-white transition">
                  {activeProfile.supportEmail}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-500" />
                <span>{activeProfile.phone}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Absolute bottom copyright panel */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {activeProfile.companyName}. All structural blueprints verified.
          </p>
          <div className="flex gap-4">
            <a href="#terms" className="hover:text-slate-400 transition">Compliance Charter</a>
            <span>&bull;</span>
            <a href="#privacy" className="hover:text-slate-400 transition">Discretion Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
