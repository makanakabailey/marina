import React from 'react';

export default function ServicesShowcase() {
  const services = [
    { img: '/images/edited-photo-1.png', title: "Location", desc: "Locheng Plaza. Close to National Sports Stadium and airport access." },
    { img: '/images/edited-photo-3.png', title: "Dining", desc: "Hyderabadi Indian, Chinese, American, and local Zimbabwean dishes." },
    { img: '/images/edited-photo-7.png', title: "Lounge", desc: "A waterfront dining destination with live music on weekends." },
    { img: '/images/edited-photo-6.png', title: "Entertainment", desc: "Casino floor and entertainment options for your guests after events." }
  ];

  return (
    <div className="py-24 bg-[#1a1a1a] relative overflow-hidden" id="services">
      {/* Dark background image with increased visibility */}
      <div className="absolute inset-0 bg-[url('/images/edited-photo-4.png')] bg-cover bg-center opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">The Amenities</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Convention Excellence • Premium Dining • Complete Experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="relative h-80 overflow-hidden group border border-[#404040] hover:border-[#d4af37] transition-all duration-300">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${s.img}')` }}
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-black text-white uppercase mb-3 tracking-wide group-hover:text-[#d4af37] transition-colors">
                  {s.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
