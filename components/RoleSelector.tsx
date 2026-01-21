
import React, { useState } from 'react';
import { Star, Calendar, Heart, Users, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RoleSelector() {
  const [activeRole, setActiveRole] = useState('event');

  const content = {
    event: {
      title: "For Event Planners",
      desc: "Seamless logistics in Mutley Bend. Perfect for expos and conferences.",
      features: ["Real-time Floor Plans", "Vendor Loading Docs", "Proximity to Airport"],
      cta: "Download Planner Kit",
      image: "bg-blue-900"
    },
    wedding: {
      title: "For Wedding Planners",
      desc: "Create unforgettable moments with our ballroom and dining experiences.",
      features: ["Bridal Changing Facilities", "Custom Culinary Menus", "Preferred Florist List"],
      cta: "View Wedding Packages",
      image: "bg-pink-900"
    },
    marketing: {
      title: "For Brand Marketers",
      desc: "Activate your brand in a high-traffic hub. Digital billboards and pop-up zones.",
      features: ["Digital Billboard Access", "Pop-up Zones in Plaza", "Data Capture Integration"],
      cta: "Download Social Planner",
      image: "bg-purple-900"
    }
  };

  return (
    <div className="py-24 bg-[#1a1a1a] relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">Tailored Experience</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-6"></div>
          <p className="mt-6 text-zinc-500 uppercase tracking-widest text-sm">Select your role</p>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['event', 'wedding', 'marketing'].map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-8 py-4 font-bold uppercase tracking-wider transition-all border text-xs ${activeRole === role
                  ? 'bg-[#d4af37] text-white border-[#d4af37]'
                  : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-[#d4af37] hover:text-[#d4af37]'
                }`}
            >
              {role === 'event' ? 'Event Planner' : role === 'wedding' ? 'Wedding Planner' : 'Marketer'}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-zinc-900 border border-zinc-800 grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-black text-white uppercase mb-6 tracking-wide">
                  {content[activeRole as keyof typeof content].title}
                </h3>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed font-light">
                  {content[activeRole as keyof typeof content].desc}
                </p>
                <ul className="space-y-4 mb-10">
                  {content[activeRole as keyof typeof content].features.map((feat, idx) => (
                    <li key={idx} className="flex items-center text-zinc-300 font-medium text-sm uppercase tracking-wide">
                      <Star className="text-[#d4af37] mr-4 fill-[#d4af37]" size={14} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="group flex items-center gap-2 text-[#d4af37] font-black uppercase tracking-widest text-xs border-b-2 border-[#d4af37] pb-2 hover:text-white hover:border-white transition-colors">
                  {content[activeRole as keyof typeof content].cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative overflow-hidden bg-black flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50"></div>
            {/* Dynamic Icon Background */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole + 'icon'}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-[#d4af37]"
              >
                {activeRole === 'event' && <Calendar size={180} strokeWidth={0.5} />}
                {activeRole === 'wedding' && <Heart size={180} strokeWidth={0.5} />}
                {activeRole === 'marketing' && <Users size={180} strokeWidth={0.5} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
