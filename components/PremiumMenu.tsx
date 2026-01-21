
import React, { useState } from 'react';
import { Download, ChefHat, Wine, Coffee, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PremiumMenu() {
  const [activeMenu, setActiveMenu] = useState('restaurant');

  const handleDownload = (menuType: string) => {
    window.open(`/menus/${menuType}-menu.html`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Menu Navigation */}
      <div className="sticky top-20 z-40 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveMenu('restaurant')}
              className={`px-6 py-3 font-bold uppercase tracking-widest transition-all border text-xs ${activeMenu === 'restaurant'
                ? 'bg-[#d4af37] text-white border-[#d4af37]'
                : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-[#d4af37] hover:text-[#d4af37]'
                }`}
            >
              <ChefHat className="inline mr-2" size={16} />
              Restaurant & Buffet
            </button>
            <button
              onClick={() => setActiveMenu('lounge')}
              className={`px-6 py-3 font-bold uppercase tracking-widest transition-all border text-xs ${activeMenu === 'lounge'
                ? 'bg-[#d4af37] text-white border-[#d4af37]'
                : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-[#d4af37] hover:text-[#d4af37]'
                }`}
            >
              <Coffee className="inline mr-2" size={16} />
              Lounge & Bites
            </button>
            <button
              onClick={() => setActiveMenu('bar')}
              className={`px-6 py-3 font-bold uppercase tracking-widest transition-all border text-xs ${activeMenu === 'bar'
                ? 'bg-[#d4af37] text-white border-[#d4af37]'
                : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-[#d4af37] hover:text-[#d4af37]'
                }`}
            >
              <Wine className="inline mr-2" size={16} />
              Libations
            </button>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          key={activeMenu}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeMenu === 'restaurant' && <RestaurantMenu onDownload={handleDownload} />}
          {activeMenu === 'lounge' && <LoungeMenu onDownload={handleDownload} />}
          {activeMenu === 'bar' && <BarMenu onDownload={handleDownload} />}
        </motion.div>
      </div>
    </div>
  );
}

// Restaurant & Buffet Menu
function RestaurantMenu({ onDownload }: { onDownload: (type: string) => void }) {
  return (
    <div className="space-y-24">
      {/* Header */}
      <div className="text-center relative py-12 border-b border-zinc-800">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-2 uppercase tracking-tighter opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full truncate">
          The Marina
        </h1>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4 tracking-tight">
            Culinary <span className="text-[#d4af37]">Collection</span>
          </h2>
          <p className="text-sm text-[#d4af37] uppercase tracking-[0.4em] font-medium">
            Global Flavors, Local Soul
          </p>
        </div>

        <button
          onClick={() => onDownload('restaurant')}
          className="mt-12 inline-flex items-center px-8 py-3 border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest text-xs hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
        >
          <Download size={14} className="mr-2" />
          Full Menu PDF
        </button>
      </div>

      {/* Hero Showcase - Replaces Golden Triangle */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-black uppercase text-white leading-none">
            The Grand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-yellow-700">Buffet Experience</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
            An unlimited exploration of Hyderabadi spices and Local Zimbabwean Heritage, meticulously prepared by our master chefs.
          </p>
          <div className="flex items-end gap-2">
            <span className="text-6xl font-black text-white">$25</span>
            <span className="text-sm text-zinc-500 uppercase tracking-widest mb-2 font-bold">/ Person</span>
          </div>
        </div>
        <div className="relative aspect-video bg-zinc-800 overflow-hidden border border-zinc-700 group">
          <img
            src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?auto=format&fit=crop&q=80&w=1200"
            alt="Buffet Spread"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Chef's Signatures - Grid Cards */}
      <div className="space-y-12">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
          <h3 className="text-3xl font-black uppercase text-white tracking-tight">Chef's Signatures</h3>
          <span className="text-xs text-[#d4af37] uppercase tracking-widest border border-[#d4af37] px-3 py-1">Highly Recommended</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MenuItemCard
            name="Hyderabadi Dum Biryani"
            description="Slow-cooked basmati rice, aromatic spices, sealed in a clay pot"
            price="18"
            image="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=400"
          />
          <MenuItemCard
            name="Mirchi Ka Salan"
            description="Fiery green chilies in tangy peanut and sesame gravy"
            price="14"
            image="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=400"
          />
          <MenuItemCard
            name="Haleem"
            description="Slow-cooked wheat, lentils, and tender meat blend"
            price="16"
            image="https://images.unsplash.com/photo-1514326640560-7d063ef95046?auto=format&fit=crop&q=80&w=400"
          />
        </div>
      </div>


      {/* The Wok & The Grill - Bento Style */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-zinc-900 border border-zinc-800 p-10 hover:border-[#d4af37] transition-all duration-300">
          <h3 className="text-2xl font-black uppercase text-[#d4af37] mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#d4af37]"></span> The Wok
          </h3>
          <div className="space-y-6">
            <MenuItemRow name="Kung Pao Chicken" description="Spicy stir-fry with peanuts" price="15" />
            <MenuItemRow name="Sweet & Sour Pork" description="Crispy pork in tangy sauce" price="16" />
            <MenuItemRow name="Singapore Noodles" description="Curry-spiced with shrimp" price="14" />
            <MenuItemRow name="Szechuan Beef" description="Fiery beef with bell peppers" price="17" />
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-10 hover:border-[#d4af37] transition-all duration-300">
          <h3 className="text-2xl font-black uppercase text-[#d4af37] mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#d4af37]"></span> The Grill
          </h3>
          <div className="space-y-6">
            <MenuItemRow name="NY Strip Steak" description="12oz prime cut, herb butter" price="28" />
            <MenuItemRow name="Marina Burger" description="Wagyu beef, truffle aioli" price="18" />
            <MenuItemRow name="BBQ Ribs" description="Fall-off-the-bone, house sauce" price="22" />
            <MenuItemRow name="Grilled Salmon" description="Atlantic salmon, lemon butter" price="24" />
          </div>
        </div>
      </div>

      {/* Zimbabwean Heritage */}
      <div className="bg-gradient-to-b from-zinc-900 to-[#1a1a1a] p-12 text-center rounded-sm border border-zinc-800">
        <h3 className="text-3xl font-black uppercase mb-2 text-white">Zimbabwean Heritage</h3>
        <p className="text-sm text-zinc-500 mb-12 tracking-widest uppercase">From Our Soil to Your Soul</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <MenuItemCard
            name="Sadza & Stew"
            description="Traditional maize meal with oxtail stew"
            price="12"
            image="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=400"
          />
          <MenuItemCard
            name="Flame-Grilled Bream"
            description="Fresh from Lake Kariba, served whole"
            price="16"
            image="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400"
          />
          <MenuItemCard
            name="Mopane Delicacies"
            description="Crispy mopane worms, a local delicacy"
            price="10"
            image="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=400"
          />
        </div>
      </div>
    </div>
  );
}

// Lounge Menu
function LoungeMenu({ onDownload }: { onDownload: (type: string) => void }) {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-5xl font-black uppercase text-white mb-4 tracking-tighter">Lounge & Bites</h1>
        <p className="text-zinc-500 max-w-xl mx-auto">Perfect social plates for gaming, socializing, and quick refreshments in our executive spaces.</p>
        <button
          onClick={() => onDownload('lounge')}
          className="mt-8 text-[#d4af37] border-b border-[#d4af37] pb-1 text-xs font-bold uppercase tracking-widest hover:text-white hover:border-white transition-all"
        >
          View Full Menu
        </button>
      </div>

      {/* Small Plates Grid */}
      <div>
        <h2 className="text-2xl font-black uppercase text-white mb-8 border-l-4 border-[#d4af37] pl-4">Small Plates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ShareableItem
            name="Wings Trio"
            options="Sticky Asian / BBQ / Buffalo"
            price="12"
            image="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=400"
          />
          <ShareableItem
            name="Samosa Platter"
            options="Vegetable / Meat"
            price="10"
            image="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400"
          />
          <ShareableItem
            name="Loaded Fries"
            options="Cheese / Bacon / Chili"
            price="9"
            image="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400"
          />
        </div>
      </div>

      {/* Quick Comfort */}
      <div className="bg-zinc-900 border border-zinc-800 p-12">
        <h2 className="text-2xl font-black uppercase text-white mb-8">Quick Comfort</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <MenuItemRow name="Club Sandwich" description="Triple-decker with fries" price="11" />
          <MenuItemRow name="Chicken Wrap" description="Grilled chicken, fresh vegetables" price="10" />
          <MenuItemRow name="Pizza Slice" description="Ask for today's selection" price="5" />
          <MenuItemRow name="Whole Pizza" description="12-inch, choice of toppings" price="18" />
        </div>
        <p className="mt-8 text-xs text-[#d4af37] uppercase tracking-widest text-center border-t border-zinc-800 pt-8">
          Ask your server for our 'Express Service' options.
        </p>
      </div>
    </div>
  );
}

// Bar Menu
function BarMenu({ onDownload }: { onDownload: (type: string) => void }) {
  return (
    <div className="space-y-20">
      <div className="text-center">
        <h1 className="text-5xl font-black uppercase text-white mb-4 tracking-tighter">Libations</h1>
        <p className="text-zinc-500 uppercase tracking-widest text-sm">Crafted cocktails • Premium spirits • Fine wines</p>
      </div>

      {/* Signature Cocktails Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-3 mb-4 flex items-center gap-4">
          <h2 className="text-3xl font-black uppercase text-white">Signatures</h2>
          <div className="h-[1px] bg-zinc-800 flex-1"></div>
        </div>

        <MenuItemCard
          name="The Jackpot"
          description="Gold-dusted martini, premium vodka"
          price="15"
          image="https://images.unsplash.com/photo-1542849187-5ec942478a8a?auto=format&fit=crop&q=80&w=400"
        />
        <MenuItemCard
          name="Marina Sunset"
          description="Rum, tropical juices, grenadine"
          price="12"
          image="https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&q=80&w=400"
        />
        <MenuItemCard
          name="Royal Flush"
          description="Whiskey, amaretto, cherry bitters"
          price="14"
          image="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=400"
        />
      </div>


      {/* Wine & Spirits Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Wine */}
        <div className="bg-zinc-900 border border-zinc-800 p-10">
          <h2 className="text-2xl font-black uppercase text-white mb-8">Wine Cellar</h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-4">Bold & Red</h4>
              <div className="space-y-4">
                <MenuItemRow name="Cabernet Sauvignon" description="Full-bodied, South African" price="35" />
                <MenuItemRow name="Merlot" description="Smooth, Chilean reserve" price="30" />
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-4">Crisp & White</h4>
              <div className="space-y-4">
                <MenuItemRow name="Sauvignon Blanc" description="Zesty, New Zealand" price="32" />
                <MenuItemRow name="Chardonnay" description="Buttery, California" price="38" />
              </div>
            </div>
          </div>
        </div>

        {/* Spirits */}
        <div className="bg-zinc-900 border border-zinc-800 p-10">
          <h2 className="text-2xl font-black uppercase text-white mb-8">Spirits</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Whiskey</h4>
              <div className="space-y-2">
                <p className="text-white font-bold flex justify-between">JW Blue <span className="text-[#d4af37]">$25</span></p>
                <p className="text-white font-bold flex justify-between">Glenfiddich 18 <span className="text-[#d4af37]">$18</span></p>
                <p className="text-white font-bold flex justify-between">Jack Daniel's <span className="text-[#d4af37]">$10</span></p>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Clear Spirits</h4>
              <div className="space-y-2">
                <p className="text-white font-bold flex justify-between">Grey Goose <span className="text-[#d4af37]">$12</span></p>
                <p className="text-white font-bold flex justify-between">Bombay Sapphire <span className="text-[#d4af37]">$11</span></p>
                <p className="text-white font-bold flex justify-between">Patrón Silver <span className="text-[#d4af37]">$15</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helpers
function MenuItemCard({ name, description, price, image }: { name: string; description: string; price: string; image: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden mb-4 relative bg-zinc-900 border border-zinc-800">
        <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur px-2 py-1 text-white font-black text-sm border border-white/10">
          ${price}
        </div>
      </div>
      <h4 className="text-xl font-black uppercase text-white group-hover:text-[#d4af37] transition-colors">{name}</h4>
      <p className="text-sm text-zinc-500 mt-1 line-clamp-2">{description}</p>
    </div>
  )
}

function MenuItemRow({ name, description, price }: { name: string; description: string; price: string }) {
  return (
    <div className="flex justify-between items-start group">
      <div className="pr-4">
        <h5 className="font-bold text-white text-lg group-hover:text-[#d4af37] transition-colors uppercase">{name}</h5>
        <p className="text-xs text-zinc-500">{description}</p>
      </div>
      <span className="font-black text-[#d4af37] text-lg">${price}</span>
    </div>
  )
}

function ShareableItem({ name, options, price, image }: { name: string; options: string; price: string; image: string }) {
  return (
    <div className="group relative overflow-hidden bg-zinc-900 border border-zinc-700 hover:border-[#d4af37] transition-all duration-300">
      <div className="aspect-[3/2] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-black uppercase text-white group-hover:text-[#d4af37] transition-colors">{name}</h4>
          <span className="text-[#d4af37] font-black">${price}</span>
        </div>
        <p className="text-xs text-zinc-400 uppercase tracking-wide">{options}</p>
      </div>
    </div>
  )
}
