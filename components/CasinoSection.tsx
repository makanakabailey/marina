
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedGraph from './AnimatedGraph';
import { ArrowUpRight } from 'lucide-react';

const GAMES = [
  { name: "Blackjack", desc: "Scientific strategy meets high stakes. Play it right to win big." },
  { name: "Baccarat", desc: "The game of kings. Pure chance, pure elegance." },
  { name: "Roulette", desc: "Classic European and American wheels. Watch the ball drop." },
  { name: "Poker", desc: "Texas Hold'em, Omaha, and 7-Card Stud. Test your skill." },
  { name: "Slots", desc: "State-of-the-art machines with progressive jackpots." },
];

const STATS = [
  { label: "Active Players", value: "2.5k" },
  { label: "Jackpots Won", value: "$4M+" },
  { label: "Live Games", value: "500+" },
];

export default function CasinoSection() {
  return (
    <div id="casino" className="bg-[#1a1a1a] py-32 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/images/edited-photo-6.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              The <span className="text-[#d4af37]">Casino</span>
            </h2>
            <div className="h-1 w-24 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-zinc-500 uppercase tracking-widest text-sm max-w-lg mx-auto">
              High stakes • Premium Service • Exclusive Access
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-32 items-center">
          <div className="lg:col-span-1 border border-zinc-800 bg-[#1a1a1a]/50 backdrop-blur p-6 rounded-sm">
            <AnimatedGraph />
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.2, type: "spring" }}
                className="text-center p-8 border border-zinc-800 bg-zinc-900/50 hover:border-[#d4af37] transition-colors duration-300"
              >
                <p className="text-5xl md:text-6xl font-black text-[#d4af37] mb-2">{stat.value}</p>
                <p className="text-xs text-zinc-400 uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {GAMES.map((game, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative h-80 group border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-[#d4af37] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-[#d4af37]" size={20} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-wide group-hover:text-[#d4af37] transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {game.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-white border-b border-[#d4af37] pb-1 text-sm font-bold uppercase tracking-widest hover:text-[#d4af37] transition-colors">
            View VIP Packages
          </button>
        </div>
      </div>
    </div>
  );
}
