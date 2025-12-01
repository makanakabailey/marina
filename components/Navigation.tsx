import React from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', img: '/images/edited-photo.png', desc: 'Welcome' },
  { id: 'venues', label: 'Spaces', img: '/images/edited-photo-2.png', desc: 'Venues' },
  { id: 'dining', label: 'Dining', img: '/images/edited-photo-3.png', desc: 'Taste' },
  { id: 'casino', label: 'Casino', img: '/images/edited-photo-6.png', desc: 'Play' },
  { id: 'planners', label: 'Planners', img: '/images/copy.jpg', desc: 'Create' },
  { id: 'contact', label: 'Contact', img: '/images/edited-photo-5.png', desc: 'Connect' }
];

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({ activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  return (
    <>
      {/* Top Bar - All Screen Sizes */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md text-[#1a1a1a] z-50 border-b border-[#d4af37]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveSection('home')}>
              <div className="relative w-12 h-12 animate-sway">
                <img 
                  src="/images/marina-logo.png" 
                  alt="Marina Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-widest leading-none uppercase text-[#1a1a1a]">Marina</span>
                <span className="text-[8px] tracking-[0.2em] text-zinc-500 uppercase animate-wave">Harare</span>
              </div>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#d4af37] hover:text-[#1a1a1a] focus:outline-none">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
      </nav>

      {/* Sidebar Overlay - All Screen Sizes */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-[60]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Sliding Sidebar */}
          <div className="absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto scrollbar-hide animate-slide-in">
              {/* Logo in Sidebar */}
              <div className="p-6 border-b border-[#d4af37] bg-[#fafaf9] flex justify-center">
                <div className="relative w-20 h-20 animate-sway">
                  <img 
                    src="/images/marina-logo.png" 
                    alt="Marina Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Menu Items */}
              <div className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`group relative h-28 w-full overflow-hidden border-b border-[#e7e5e4] transition-all duration-300 ${activeSection === item.id ? 'border-[#d4af37]' : ''}`}
                  >
                    <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-active:scale-110 brightness-110"
                      style={{ backgroundImage: `url(${item.img})` }}></div>
                    <div className={`absolute inset-0 transition-colors duration-300 ${activeSection === item.id ? 'bg-[#d4af37]/70 mix-blend-multiply' : 'bg-[#1a1a1a]/50 group-active:bg-[#1a1a1a]/30'}`}></div>
                    <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                      <span className={`block text-xl font-black uppercase tracking-widest drop-shadow-md transition-colors duration-300 ${activeSection === item.id ? 'text-white' : 'text-white'}`}>{item.label}</span>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-[#d4af37] mt-1">{item.desc}</span>
                    </div>
                    {activeSection === item.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4af37]"></div>}
                  </button>
                ))}
              </div>
              
              {/* Footer */}
              <div className="p-4 bg-[#fafaf9] border-t border-[#e7e5e4] text-center">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Locheng Plaza</p>
              </div>
          </div>
        </div>
      )}
    </>
  );
}
