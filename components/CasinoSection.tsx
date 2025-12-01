import React from 'react';

const GAMES = [
  { name: "Blackjack", desc: "Blackjack is very scientific; if you play it right even you can become a savant." },
  { name: "Baccarat", desc: "Winner or not, everyone loves baccarat." },
  { name: "Roulette", desc: "Every time the ball drops a winner is born. We offer both dealt roulette and auto roulette." },
  { name: "Poker", desc: "A game of skill masquerading as a game of chance. We offer 3 card, 5 card and 7 card poker." },
  { name: "Slots", desc: "A colorful experience on the fanciest machines on the market." },
];

export default function CasinoSection() {
  return (
    <div id="casino" className="bg-[#1a1a1a]">
      {/* Games Grid */}
      <div className="py-32 bg-[#1a1a1a] relative overflow-hidden">
        {/* Background Image - Same as Casino Nav */}
        <div className="absolute inset-0 bg-[url('/images/edited-photo-6.png')] bg-cover bg-center opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">The Games</h2>
            <div className="h-1 w-40 bg-[#d4af37] mx-auto"></div>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {GAMES.map((game, idx) => (
              <div key={idx} className="relative h-80 overflow-hidden group border border-zinc-700 hover:border-[#d4af37] transition-all duration-300 bg-transparent backdrop-blur-sm">
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-black text-white uppercase mb-3 tracking-wide group-hover:text-[#d4af37] transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-medium uppercase tracking-wide">
                    {game.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
