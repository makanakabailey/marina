import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const VENUES = [
  { id: 1, name: "Grand Convention Hall", type: "Ballroom", capacity: 1200, sqft: 15000, features: ["Divisible", "High Ceilings", "State-of-the-art AV"], img: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" },
  { id: 2, name: "Marina Lounge", type: "Social", capacity: 200, sqft: 3000, features: ["Waterfront Views", "Live Music Stage", "Weekend Events"], img: "linear-gradient(135deg, #4a0404 0%, #7f1d1d 100%)" },
  { id: 3, name: "Executive Boardroom", type: "Meeting", capacity: 25, sqft: 800, features: ["Video Conf", "Ergonomic Chairs", "Catering Station"], img: "linear-gradient(135deg, #3f3f46 0%, #52525b 100%)" },
  { id: 4, name: "Expo Center", type: "Exhibition", capacity: 3000, sqft: 40000, features: ["Loading Dock", "High Voltage", "Concession Stands"], img: "linear-gradient(135deg, #3730a3 0%, #4338ca 100%)" },
  { id: 5, name: "Marina Restaurant", type: "Dining", capacity: 150, sqft: 2500, features: ["Hyderabadi Cuisine", "Buffet Area", "Private Dining"], img: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)" },
];

export default function VenueFinder() {
  const [filter, setFilter] = useState('All');
  const filteredVenues = filter === 'All' ? VENUES : VENUES.filter(v => v.type === filter);

  return (
    <div className="py-24 bg-white text-[#1a1a1a]" id="venues">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1a1a1a]">Spaces</h2>
            <p className="mt-2 text-zinc-600 uppercase tracking-widest text-sm">Find your stage</p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {['All', 'Ballroom', 'Social', 'Meeting', 'Dining'].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                  filter === f 
                    ? 'bg-[#d4af37] border-[#d4af37] text-white' 
                    : 'border-[#e7e5e4] text-zinc-600 hover:border-[#d4af37] hover:text-[#d4af37]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVenues.map(venue => (
            <div key={venue.id} className="bg-[#fafaf9] group border border-[#e7e5e4] hover:border-[#d4af37] transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="h-64 w-full relative overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 brightness-125" style={{ background: venue.img }}></div>
                <div className="absolute top-4 right-0 bg-[#d4af37] text-[#1a1a1a] text-xs font-black px-3 py-1 uppercase tracking-wider">
                  {venue.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-black uppercase text-white mb-1 leading-none">{venue.name}</h3>
                </div>
              </div>
              
              <div className="p-6 pt-2">
                <div className="flex justify-between text-zinc-600 text-xs font-bold uppercase tracking-wider mb-6 border-b border-[#e7e5e4] pb-4">
                  <span>{venue.capacity} Guests</span>
                  <span>{venue.sqft} sq ft</span>
                </div>
                <div className="space-y-3 mb-6">
                  {venue.features.map((f, i) => (
                    <div key={i} className="flex items-center text-sm text-zinc-700">
                      <CheckCircle size={14} className="text-[#d4af37] mr-3" /> {f}
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 bg-[#1a1a1a] hover:bg-[#d4af37] hover:text-white text-white text-xs font-bold uppercase tracking-widest transition-colors">
                  View Floor Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
