import React from 'react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <div className="relative bg-[#fafaf9] h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf9] via-transparent to-transparent z-20"></div>
        <div className="w-full h-full bg-[url('/images/edited-photo.png')] bg-cover bg-center opacity-70 brightness-110"></div>
      </div>
      
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block border-2 border-[#d4af37] text-[#d4af37] px-6 py-2 text-xs font-black uppercase tracking-[0.2em] mb-8 bg-white/80 backdrop-blur">
          Harare&apos;s Premier Convention Center
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#1a1a1a] uppercase tracking-tighter mb-6 leading-none drop-shadow-2xl">
          World-Class Spaces.<br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b8941f]">Effortless Execution.</span>
        </h1>
        
        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#0a0a0a] max-w-3xl mx-auto mb-12 font-semibold">
          Located in Locheng Plaza. World-class convention spaces, exceptional dining, and entertainment that elevates every event.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => setActiveSection('planners')}
            className="bg-[#d4af37] hover:bg-[#b8941f] text-[#1a1a1a] px-10 py-4 font-black text-sm uppercase tracking-widest transition-transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
          >
            Plan Your Event
          </button>
          <button 
            onClick={() => setActiveSection('venues')}
            className="bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-10 py-4 font-black text-sm uppercase tracking-widest transition-all"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
          >
            Explore Venues
          </button>
        </div>
      </div>
    </div>
  );
}
