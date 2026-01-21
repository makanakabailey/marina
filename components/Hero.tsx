import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <div className="relative bg-[#fafaf9] h-screen flex items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf9] via-transparent to-transparent z-20"></div>
        <div className="w-full h-full bg-[url('/images/edited-photo.png')] bg-cover bg-center opacity-70 brightness-110"></div>
      </motion.div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-block border-2 border-[#d4af37] text-[#d4af37] px-6 py-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6 sm:mb-8 bg-white/80 backdrop-blur"
        >
          Harare&apos;s Premier Convention Center
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#1a1a1a] uppercase tracking-tighter mb-6 leading-none drop-shadow-2xl">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="block"
          >
            World-Class Spaces.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b8941f]"
          >
            Effortless Execution.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#0a0a0a] max-w-2xl mx-auto mb-10 sm:mb-12 font-semibold leading-relaxed"
        >
          Don&apos;t let another booking slip away. Experience Harare&apos;s most prestigious venue at Locheng Plaza.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-0"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('planners')}
            className="bg-[#d4af37] text-[#1a1a1a] px-8 sm:px-10 py-4 sm:py-5 font-black text-xs sm:text-sm uppercase tracking-widest transition-transform shadow-[0_0_20px_rgba(212,175,55,0.4)] w-full sm:w-auto"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
          >
            Plan Your Event
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('venues')}
            className="bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 sm:px-10 py-4 sm:py-5 font-black text-xs sm:text-sm uppercase tracking-widest transition-all w-full sm:w-auto"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
          >
            Explore Venues
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
