
import React from 'react';
import { Utensils, Wine, Coffee, ArrowUpRight } from 'lucide-react'; // Added ArrowUpRight for SpaceCatalog consistency
import { motion } from 'framer-motion';

export default function DiningMenu() {
  const cuisines = [
    {
      title: "Hyderabadi Indian",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600",
      description: "Authentic flavors from Hyderabad",
      dishes: ["Hyderabadi Biryani", "Haleem", "Mirchi Ka Salan", "Double Ka Meetha"],
      tags: ["Spicy", "Authentic"] // Added tags for consistency
    },
    {
      title: "Chinese Fusion",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=600",
      description: "Traditional and contemporary Chinese cuisine",
      dishes: ["Kung Pao Chicken", "Sweet & Sour Pork", "Fried Rice", "Spring Rolls"],
      tags: ["Wok", "Classic"]
    },
    {
      title: "American Grill",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
      description: "Classic American favorites",
      dishes: ["Burgers", "Steaks", "BBQ Ribs", "Mac & Cheese"],
      tags: ["Grill", "Comfort"]
    },
    {
      title: "Zimbabwean Roots",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600",
      description: "Local traditional dishes",
      dishes: ["Sadza & Stew", "Mopane Worms", "Kapenta", "Mazondo"],
      tags: ["Local", "Heritage"]
    }
  ];

  const buffetOptions = [
    { name: "Indian Buffet", desc: "Featuring Hyderabadi specialties and vegetarian options" },
    { name: "Local Cuisine Buffet", desc: "Traditional Zimbabwean dishes and sides" },
    { name: "International Buffet", desc: "Mix of Chinese, American, and local favorites" },
    { name: "Custom Buffet", desc: "Tailored to your event requirements" }
  ];

  const beverages = [
    { category: "Cocktails", items: ["Signature Martinis", "Mojitos", "Old Fashioned", "Custom Cocktails"] },
    { category: "Wines", items: ["Red Wines", "White Wines", "Sparkling Wines", "Local Selections"] },
    { category: "Spirits", items: ["Whiskey", "Vodka", "Gin", "Rum", "Tequila"] },
    { category: "Beers", items: ["Local Lagers", "Imported Beers", "Craft Beers", "Non-Alcoholic"] }
  ];

  return (
    <div className="py-24 bg-[#1a1a1a] text-white"> {/* Dark Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
              Dining <span className="text-[#d4af37]">Menu</span>
            </h1>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto tracking-wide">
              Exceptional culinary experiences for your events. From intimate gatherings to grand celebrations.
            </p>
          </motion.div>
        </div>

        {/* Cuisine Types - SpaceCatalog Style Cards */}
        <div className="mb-32">
          <div className="flex items-center mb-12 border-b border-zinc-800 pb-4">
            <Utensils className="text-[#d4af37] mr-3" size={24} />
            <h2 className="text-2xl font-black uppercase text-white tracking-widest">Cuisine Options</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cuisines.map((cuisine, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/5] bg-zinc-900 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: `url(${cuisine.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                  </motion.div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowUpRight className="text-white" size={20} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {cuisine.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] border border-[#d4af37] px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                    {cuisine.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4 italic">{cuisine.description}</p>

                  <ul className="space-y-1">
                    {cuisine.dishes.slice(0, 3).map((dish, i) => ( // Showing top 3 dishes
                      <li key={i} className="text-xs text-zinc-500 flex items-center font-bold uppercase tracking-wider">
                        <span className="w-1 h-1 bg-[#d4af37] rounded-full mr-2"></span>
                        {dish}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Buffet Options - Bento Grid Style */}
        <div className="mb-32">
          <div className="flex items-center mb-12 border-b border-zinc-800 pb-4">
            <Coffee className="text-[#d4af37] mr-3" size={24} />
            <h2 className="text-2xl font-black uppercase text-white tracking-widest">Buffet Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {buffetOptions.map((option, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-[#d4af37] transition-colors duration-300 group">
                <h3 className="text-xl font-black uppercase text-white group-hover:text-[#d4af37] transition-colors mb-3">{option.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">{option.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-[#d4af37] hover:bg-white hover:text-[#1a1a1a] text-white px-10 py-4 font-black uppercase tracking-[0.2em] transition-colors duration-300">
              Request Custom Menu
            </button>
          </div>
        </div>

        {/* Bar & Beverages - Dark Style */}
        <div className="mb-24">
          <div className="flex items-center mb-12 border-b border-zinc-800 pb-4">
            <Wine className="text-[#d4af37] mr-3" size={24} />
            <h2 className="text-2xl font-black uppercase text-white tracking-widest">Bar & Beverages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beverages.map((bev, idx) => (
              <div key={idx} className="bg-zinc-900 p-8 border border-zinc-800 hover:border-[#d4af37] transition-all duration-300 group">
                <h3 className="text-lg font-black uppercase text-[#d4af37] mb-6 border-b border-zinc-800 pb-4 group-hover:border-[#d4af37] transition-colors">
                  {bev.category}
                </h3>
                <ul className="space-y-3">
                  {bev.items.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-400 flex items-center gap-2 group-hover:text-zinc-200 transition-colors">
                      <span className="text-[#d4af37] text-xs">■</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center bg-zinc-900 p-6 border border-zinc-800">
            <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest">
              Full bar service available with professional bartenders
            </p>
          </div>
        </div>

        {/* Download Menus Section */}
        <div className="bg-zinc-900 p-12 border border-zinc-800 relative overflow-hidden group">
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-black uppercase mb-6 text-white tracking-tight">Download Menus</h3>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">View our complete menu selections in print-ready format for your team.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/menus/restaurant-menu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-zinc-600 text-white hover:border-[#d4af37] hover:text-[#d4af37] px-8 py-3 font-bold uppercase tracking-widest transition-all text-xs flex items-center justify-center gap-2"
              >
                Restaurant <ArrowUpRight size={14} />
              </a>
              <a
                href="/menus/lounge-menu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-zinc-600 text-white hover:border-[#d4af37] hover:text-[#d4af37] px-8 py-3 font-bold uppercase tracking-widest transition-all text-xs flex items-center justify-center gap-2"
              >
                Lounge <ArrowUpRight size={14} />
              </a>
              <a
                href="/menus/bar-menu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-zinc-600 text-white hover:border-[#d4af37] hover:text-[#d4af37] px-8 py-3 font-bold uppercase tracking-widest transition-all text-xs flex items-center justify-center gap-2"
              >
                Bar <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 text-center bg-[#d4af37] text-[#1a1a1a] p-16 relative overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter">Plan Your Feast</h3>
            <p className="text-xl mb-8 font-medium opacity-90 max-w-2xl mx-auto">
              Our culinary team awaits to craft your perfect event menu.
            </p>
            <button className="bg-[#1a1a1a] text-white hover:bg-white hover:text-[#1a1a1a] px-12 py-5 font-black uppercase tracking-[0.2em] transition-all duration-300 border border-transparent hover:border-[#1a1a1a]">
              Contact Event Planner
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
