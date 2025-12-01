import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white py-16 border-t border-[#404040] overflow-hidden">
      {/* Background Image - Same as Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]/60 z-10"></div>
        <div className="w-full h-full bg-[url('/images/edited-photo.png')] bg-cover bg-center opacity-65 brightness-90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="text-3xl font-black uppercase tracking-widest mb-6 flex items-center">
              <span className="text-[#d4af37] mr-1">///</span> Marina
            </div>
            <p className="text-xs text-white uppercase tracking-wider leading-relaxed">
              Casino Marina is a registered trademark of Rank Entertainment Holdings.<br/>
              Locheng Plaza, Mutley Bend, Harare, Zimbabwe.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
            <div>
              <h4 className="text-[#d4af37] font-black uppercase tracking-widest text-xs mb-6">Planners</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-wide text-white">
                <li><a href="#" className="hover:text-[#d4af37] hover:underline decoration-[#d4af37] underline-offset-4">Specs</a></li>
                <li><a href="#" className="hover:text-[#d4af37] hover:underline decoration-[#d4af37] underline-offset-4">Menus</a></li>
                <li><a href="#" className="hover:text-[#d4af37] hover:underline decoration-[#d4af37] underline-offset-4">RFP</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[#d4af37] font-black uppercase tracking-widest text-xs mb-6">Play</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-wide text-white">
                <li><a href="#" className="hover:text-[#d4af37] hover:underline decoration-[#d4af37] underline-offset-4">Tables</a></li>
                <li><a href="#" className="hover:text-[#d4af37] hover:underline decoration-[#d4af37] underline-offset-4">Draws</a></li>
                <li><a href="#" className="hover:text-[#d4af37] hover:underline decoration-[#d4af37] underline-offset-4">Dining</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[#d4af37] font-black uppercase tracking-widest text-xs mb-6">Social</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-wide text-white">
                <li><a href="#" className="hover:text-[#d4af37]">Facebook</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Instagram</a></li>
                <li><a href="#" className="hover:text-[#d4af37]">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white">
          <p>&copy; 2025 Marina Convention Center & Casino Harare.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-[#d4af37]">Privacy</a>
            <a href="#" className="hover:text-[#d4af37]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
