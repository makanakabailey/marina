
import React, { useState } from 'react';
import { CheckCircle, Info, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VENUES = [
  {
    id: 1,
    name: "Grand Convention Hall",
    type: "Ballroom",
    capacity: 1200,
    sqft: 15000,
    features: ["Divisible", "High Ceilings", "State-of-the-art AV"],
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Marina Lounge",
    type: "Social",
    capacity: 200,
    sqft: 3000,
    features: ["Waterfront Views", "Live Music Stage", "Weekend Events"],
    img: "https://images.unsplash.com/photo-1543007630-9710e4a0058d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Executive Boardroom",
    type: "Meeting",
    capacity: 25,
    sqft: 800,
    features: ["Video Conf", "Ergonomic Chairs", "Catering Station"],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Expo Center",
    type: "Exhibition",
    capacity: 3000,
    sqft: 40000,
    features: ["Loading Dock", "High Voltage", "Concession Stands"],
    img: "https://images.unsplash.com/photo-1551818243-e8fa31536497?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Marina Restaurant",
    type: "Dining",
    capacity: 150,
    sqft: 2500,
    features: ["Hyderabadi Cuisine", "Buffet Area", "Private Dining"],
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600"
  },
];

export default function VenueFinder() {
  const [filter, setFilter] = useState('All');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  // Dummy filter logic
  const filteredVenues = VENUES.filter(v => {
    if (showAvailableOnly && v.capacity > 1000) return false;
    return filter === 'All' ? true : v.type === filter;
  });

  return (
    <div className="py-24 bg-[#1a1a1a] text-white" id="venues">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
              Find Your <span className="text-[#d4af37]">Space</span>
            </h2>
            <p className="mt-2 text-zinc-500 uppercase tracking-widest text-sm font-medium">From intimate to infinite</p>
          </div>

          <div className="flex flex-col items-end gap-6 mt-8 md:mt-0">
            {/* Toggle Switch */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setShowAvailableOnly(!showAvailableOnly)}>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Available Only</span>
              <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 flex items-center ${showAvailableOnly ? 'bg-[#d4af37]' : 'bg-zinc-800 border border-zinc-700'}`}>
                <motion.div
                  layout
                  className="w-4 h-4 bg-white rounded-full shadow-md"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-end">
              {['All', 'Ballroom', 'Social', 'Meeting', 'Dining'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${filter === f
                    ? 'bg-[#d4af37] border-[#d4af37] text-white'
                    : 'border-zinc-800 bg-zinc-900 text-zinc-500 hover:border-[#d4af37] hover:text-[#d4af37]'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredVenues.map(venue => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={venue.id}
                className="group relative bg-zinc-900 border border-zinc-800 hover:border-[#d4af37] transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Image Section */}
                <div className="h-72 w-full relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url('${venue.img}')` }}
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur border border-white/20 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="text-white" size={20} />
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] border border-[#d4af37] px-2 py-1 bg-[#1a1a1a]/90">
                      {venue.type}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-black uppercase text-white mb-1 leading-none tracking-tight group-hover:text-[#d4af37] transition-colors">{venue.name}</h3>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6">
                  <div className="flex justify-between text-zinc-500 text-xs font-bold uppercase tracking-wider mb-6 border-b border-zinc-800 pb-4">
                    <span>{venue.capacity} Guests</span>
                    <span>{venue.sqft} sq ft</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {venue.features.map((f, i) => (
                      <div key={i} className="flex items-center text-sm text-zinc-400 relative group/tooltip">
                        <CheckCircle size={14} className="text-[#d4af37] mr-3" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-[#1a1a1a] border border-zinc-700 hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-white text-zinc-300 text-xs font-black uppercase tracking-[0.2em] transition-all">
                    View Floor Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
