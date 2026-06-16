import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Terminal, 
  Sparkles, 
  Shield, 
  Sun, 
  Menu, 
  X, 
  ChevronDown, 
  Box, 
  Settings,
  RefreshCw
} from 'lucide-react';
import { useAppContext, BusinessPresetId } from '../context/AppContext';

// Dynamic logo component mapping for business types
export function BusinessLogo({ iconName, className = "h-6 w-6" }: { iconName: string; className?: string }) {
  switch (iconName) {
    case 'Terminal':
      return <Terminal className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Sun':
      return <Sun className={className} />;
    default:
      return <Box className={className} />;
  }
}

export default function Navbar() {
  const { activeProfile, setActiveProfileId, profiles, isLoading } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPresetDropdownOpen, setIsPresetDropdownOpen] = useState(false);

  const theme = activeProfile.theme;
  const isLocal = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  return (
    <div className={`w-full ${theme.fontClass} flex flex-col`}>
      {/* 🛠️ PREMIUM TESTING BAR: Dynamic Multi-Business Preset Controller */}
      {isLocal && (
        <div className="w-full bg-slate-900 text-xs py-2 px-4 text-slate-300 flex flex-wrap gap-y-2 items-center justify-between border-b border-slate-800 z-50">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-slate-200">BOILERPLATE CONTROL PANEL:</span>
            <span className="text-slate-400 hidden sm:inline">Inspect how the app adapts instantly across templates</span>
          </div>
          <div className="flex items-center gap-2">
            {isLoading && <RefreshCw className="h-3.5 w-3.5 text-indigo-400 animate-spin mr-1" />}
            <div className="relative">
              <button
                onClick={() => setIsPresetDropdownOpen(!isPresetDropdownOpen)}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-750 text-slate-100 py-1 px-3 rounded-md border border-slate-700 transition"
                id="preset-mode-dropdown-btn"
              >
                <span>Vibe: <strong className={theme.textAccent}>{activeProfile.name}</strong></span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isPresetDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPresetDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40 bg-transparent" 
                    onClick={() => setIsPresetDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-52 bg-slate-950 border border-slate-800 rounded-lg shadow-2xl z-50 py-1 text-slate-200 text-left">
                    {profiles.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setActiveProfileId(p.id);
                          setIsPresetDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between py-2 px-3 text-xs hover:bg-slate-800 transition text-left ${
                          activeProfile.id === p.id ? 'bg-slate-800 font-bold text-white' : 'text-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <BusinessLogo iconName={p.logoIcon} className="h-3.5 w-3.5 text-slate-400" />
                          {p.name}
                        </span>
                        {activeProfile.id === p.id && <span className="text-[9px] bg-slate-700 px-1 py-0.5 rounded text-white">Active</span>}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main sticky navigation header */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Header Brand */}
            <NavLink to="/" className="flex items-center gap-2.5 group">
              <div className={`p-2 rounded-xl bg-gray-50 group-hover:scale-105 transition ${theme.logoColor}`}>
                <BusinessLogo iconName={activeProfile.logoIcon} className="h-6 w-6" />
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900 group-hover:text-black transition">
                {activeProfile.companyName}
              </span>
            </NavLink>
            
            {/* Desktop Navigation Link menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => `text-[13px] font-medium transition ${theme.fontClass} ${
                  isActive ? `${theme.textAccent} font-semibold` : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Overview
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `text-[13px] font-medium transition ${theme.fontClass} ${
                  isActive ? `${theme.textAccent} font-semibold` : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Services & Capabilities
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `text-[13px] font-medium transition ${theme.fontClass} ${
                  isActive ? `${theme.textAccent} font-semibold` : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Get In Touch
              </NavLink>
              
              {/* Primary Call To Action in Header */}
              <NavLink 
                to="/contact"
                className={`ml-4 text-xs font-semibold px-4 py-2 rounded-lg text-white shadow-xs transition-transform hover:-translate-y-0.5 ${theme.primaryBg} ${theme.primaryHover}`}
              >
                Partner With Us
              </NavLink>
            </nav>
            
            {/* Portable Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-gray-700 p-2 focus:ring-2 focus:ring-gray-100 rounded-lg transition"
                aria-label="Toggle menu"
                id="hamburger-navigation-menu-btn"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Portable Mobile Full Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white shadow-lg animate-fadeIn">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <NavLink 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-base font-medium transition ${
                  isActive ? `${theme.primaryBg} text-white` : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Overview
              </NavLink>
              <NavLink 
                to="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-base font-medium transition ${
                  isActive ? `${theme.primaryBg} text-white` : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Services & Capabilities
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-base font-medium transition ${
                  isActive ? `${theme.primaryBg} text-white` : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Get In Touch
              </NavLink>
              
              {isLocal && (
                <div className="pt-4 border-t border-gray-100 px-3">
                  <div className="bg-gray-50 rounded-xl p-4.5 border border-gray-100">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 block mb-2">Preset Switcher</span>
                    <div className="grid grid-cols-2 gap-2">
                      {profiles.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            setActiveProfileId(p.id);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`py-1.5 px-2 rounded-lg text-xs font-medium text-left border flex items-center gap-1.5 transition ${
                            activeProfile.id === p.id 
                              ? 'bg-amber-100 text-amber-900 border-amber-200 shadow-xs' 
                              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <BusinessLogo iconName={p.logoIcon} className="h-3 w-3" />
                          <span className="truncate">{p.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
