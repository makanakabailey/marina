import React, { useState } from 'react';
import { Star, Calendar, Heart, Users } from 'lucide-react';

export default function RoleSelector() {
  const [activeRole, setActiveRole] = useState('event');

  const content = {
    event: {
      title: "For Event Planners",
      desc: "Seamless logistics in Mutley Bend. Our spaces are perfect for expos and conferences, supported by the surrounding plaza amenities.",
      features: ["Real-time Floor Plans", "Vendor Loading Docs", "Proximity to Airport (45 min)"],
      cta: "Download Planner Kit"
    },
    wedding: {
      title: "For Wedding Planners",
      desc: "Create unforgettable moments. While we don't offer accommodation, our ballroom and dining experiences provide the perfect day-venue solution.",
      features: ["Bridal Changing Facilities", "Custom Culinary Menus", "Preferred Florist List"],
      cta: "View Wedding Packages"
    },
    marketing: {
      title: "For Brand Marketers",
      desc: "Activate your brand in a high-traffic tourist hub. Leverage the footfall of Locheng Plaza's shopping mall and our busy casino floor.",
      features: ["Digital Billboard Access", "Pop-up Zones in Plaza", "Data Capture Integration"],
      cta: "Media Kit Request"
    }
  };

  return (
    <div className="py-24 bg-[#f5f5f4] relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight">Tailored Experience</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-6"></div>
          <p className="mt-6 text-zinc-600 uppercase tracking-widest text-sm">Select your role</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['event', 'wedding', 'marketing'].map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-8 py-4 font-bold uppercase tracking-wider transition-all border-2 ${
                activeRole === role 
                  ? 'bg-[#d4af37] text-white border-[#d4af37]' 
                  : 'bg-transparent text-zinc-600 border-[#e7e5e4] hover:border-[#d4af37] hover:text-[#d4af37]'
              }`}
            >
              {role === 'event' ? 'Event Planner' : role === 'wedding' ? 'Wedding Planner' : 'Marketer'}
            </button>
          ))}
        </div>
        
        <div className="bg-white border border-[#e7e5e4] p-0 flex flex-col md:flex-row items-stretch min-h-[400px] shadow-xl">
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-black text-[#1a1a1a] uppercase mb-6 tracking-wide">
              {content[activeRole as keyof typeof content].title}
            </h3>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              {content[activeRole as keyof typeof content].desc}
            </p>
            <ul className="space-y-4 mb-10">
              {content[activeRole as keyof typeof content].features.map((feat, idx) => (
                <li key={idx} className="flex items-center text-zinc-700 font-medium">
                  <Star className="text-[#d4af37] mr-4 fill-[#d4af37]" size={16} /> 
                  <span className="uppercase text-sm tracking-wider">{feat}</span>
                </li>
              ))}
            </ul>
            <div>
              <button className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 font-bold uppercase tracking-widest hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all">
                {content[activeRole as keyof typeof content].cta}
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative overflow-hidden bg-[#f5f5f4]">
            <div className={`absolute inset-0 opacity-40 mix-blend-overlay ${
              activeRole === 'event' ? 'bg-blue-900' : activeRole === 'wedding' ? 'bg-pink-900' : 'bg-purple-900'
            }`}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-zinc-300 opacity-30 transform scale-150">
                {activeRole === 'event' && <Calendar size={200} strokeWidth={0.5} />}
                {activeRole === 'wedding' && <Heart size={200} strokeWidth={0.5} />}
                {activeRole === 'marketing' && <Users size={200} strokeWidth={0.5} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
