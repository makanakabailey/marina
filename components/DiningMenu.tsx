import React from 'react';
import { Utensils, Wine, Coffee } from 'lucide-react';

export default function DiningMenu() {
  const cuisines = [
    {
      title: "Hyderabadi Indian",
      icon: "🍛",
      description: "Authentic flavors from Hyderabad",
      dishes: ["Hyderabadi Biryani", "Haleem", "Mirchi Ka Salan", "Double Ka Meetha"]
    },
    {
      title: "Chinese",
      icon: "🥢",
      description: "Traditional and contemporary Chinese cuisine",
      dishes: ["Kung Pao Chicken", "Sweet & Sour Pork", "Fried Rice", "Spring Rolls"]
    },
    {
      title: "American",
      icon: "🍔",
      description: "Classic American favorites",
      dishes: ["Burgers", "Steaks", "BBQ Ribs", "Mac & Cheese"]
    },
    {
      title: "Zimbabwean",
      icon: "🍲",
      description: "Local traditional dishes",
      dishes: ["Sadza & Stew", "Mopane Worms", "Kapenta", "Mazondo"]
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
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#1a1a1a] mb-4">
            Dining Menu
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Exceptional culinary experiences for your events. From intimate gatherings to grand celebrations.
          </p>
        </div>

        {/* Cuisine Types */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Utensils className="text-[#d4af37] mr-3" size={32} />
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#1a1a1a]">Cuisine Options</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cuisines.map((cuisine, idx) => (
              <div key={idx} className="bg-[#fafaf9] border border-[#e7e5e4] p-6 hover:border-[#d4af37] transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl mb-4 text-center">{cuisine.icon}</div>
                <h3 className="text-xl font-black uppercase text-[#1a1a1a] mb-2 text-center">{cuisine.title}</h3>
                <p className="text-sm text-zinc-600 mb-4 text-center italic">{cuisine.description}</p>
                <ul className="space-y-2">
                  {cuisine.dishes.map((dish, i) => (
                    <li key={i} className="text-sm text-zinc-700 flex items-center">
                      <span className="text-[#d4af37] mr-2">•</span>
                      {dish}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Buffet Options */}
        <div className="mb-20 bg-[#f5f5f4] p-8 md:p-12">
          <div className="flex items-center justify-center mb-12">
            <Coffee className="text-[#d4af37] mr-3" size={32} />
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#1a1a1a]">Buffet Experience</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {buffetOptions.map((option, idx) => (
              <div key={idx} className="bg-white border-l-4 border-[#d4af37] p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-black uppercase text-[#1a1a1a] mb-2">{option.name}</h3>
                <p className="text-sm text-zinc-600">{option.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-zinc-600 mb-4">Focus on Indian and local cuisine with customizable options</p>
            <button className="bg-[#d4af37] hover:bg-[#b8941f] text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors">
              Request Custom Menu
            </button>
          </div>
        </div>

        {/* Bar & Beverages */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <Wine className="text-[#d4af37] mr-3" size={32} />
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#1a1a1a]">Bar & Beverages</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beverages.map((bev, idx) => (
              <div key={idx} className="bg-[#1a1a1a] text-white p-6 hover:bg-[#2d2d2d] transition-colors">
                <h3 className="text-xl font-black uppercase text-[#d4af37] mb-4 border-b border-[#d4af37] pb-2">
                  {bev.category}
                </h3>
                <ul className="space-y-2">
                  {bev.items.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-300 flex items-center">
                      <span className="text-[#d4af37] mr-2">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center bg-[#fafaf9] p-6 border border-[#e7e5e4]">
            <p className="text-zinc-700 font-semibold">
              Full bar service available with professional bartenders for your events
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-[#d4af37] text-white p-12">
          <h3 className="text-3xl font-black uppercase mb-4">Plan Your Event Menu</h3>
          <p className="text-lg mb-6 opacity-90">
            Our culinary team will work with you to create the perfect dining experience
          </p>
          <button className="bg-white text-[#1a1a1a] hover:bg-[#f5f5f4] px-10 py-4 font-black uppercase tracking-widest transition-colors">
            Contact Event Planner
          </button>
        </div>
      </div>
    </div>
  );
}
