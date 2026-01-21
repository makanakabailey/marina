
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesShowcase() {
  const services = [
    {
      img: '/images/edited-photo-1.png',
      title: "Location",
      desc: "Locheng Plaza. Strategic access to National Sports Stadium and Airport.",
      availability: 90,
      tag: "Prime Spot"
    },
    {
      img: '/images/edited-photo-3.png',
      title: "Dining",
      desc: "World-class culinary options ranging from Hyderabadi to Local ZW flavors.",
      availability: 75,
      tag: "Gourmet"
    },
    {
      img: '/images/edited-photo-7.png',
      title: "Lounge",
      desc: "Executive waterfront lounge for VIP networking and relaxation.",
      availability: 60,
      tag: "Exclusive"
    },
    {
      img: '/images/edited-photo-6.png',
      title: "Entertainment",
      desc: "Premier casino floor and live entertainment stages.",
      availability: 100,
      tag: "Nightlife"
    }
  ];

  return (
    <div className="py-32 bg-[#1a1a1a] relative overflow-hidden" id="services">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('/images/edited-photo-4.png')] bg-cover bg-center opacity-10 blur-sm mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-zinc-800 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">
              The <span className="text-[#d4af37]">Amenities</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right mt-8 md:mt-0"
          >
            <p className="text-zinc-500 uppercase tracking-widest text-sm font-medium">Convention Excellence • Premium Lifestyle</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] overflow-hidden group bg-zinc-900 border border-zinc-800 hover:border-[#d4af37] transition-all duration-500"
            >
              {/* Background Image with Hover Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url('${s.img}')` }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Top Tag */}
              <div className="absolute top-6 left-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] border border-[#d4af37] px-2 py-1 bg-[#1a1a1a]/80 backdrop-blur-sm">
                  {s.tag}
                </span>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white/10 backdrop-blur p-2 rounded-full border border-white/20">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-black text-white uppercase mb-3 tracking-wide group-hover:text-[#d4af37] transition-colors translate-y-4 group-hover:translate-y-0 duration-500">
                  {s.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-l-2 border-[#d4af37] pl-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-x-4 group-hover:translate-x-0">
                  {s.desc}
                </p>

                {/* Availability Bar - refined */}
                <div>
                  <div className="flex justify-between text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-bold">
                    <span>Availability</span>
                    <span className="text-[#d4af37]">{s.availability}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-[2px] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.availability}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-[#d4af37]"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
