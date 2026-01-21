'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DATA = [
    { label: 'MON', value: 40 },
    { label: 'TUE', value: 30 },
    { label: 'WED', value: 60 },
    { label: 'THU', value: 45 },
    { label: 'FRI', value: 80 },
    { label: 'SAT', value: 95 },
    { label: 'SUN', value: 75 },
];

export default function AnimatedGraph() {
    return (
        <div className="w-full bg-zinc-900 border border-zinc-800 p-8 rounded-none">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h3 className="text-white text-lg font-black uppercase tracking-widest">
                        Weekly <span className="text-[#d4af37]">Payouts</span>
                    </h3>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Live Casino Activity</p>
                </div>
                <div className="text-[#d4af37] font-black text-2xl animate-pulse">
                    +12.5%
                </div>
            </div>

            <div className="flex items-end justify-between h-40 gap-2">
                {DATA.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 flex-1 group">
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            whileInView={{ height: `${item.value}%`, opacity: 1 }}
                            transition={{ duration: 1, delay: idx * 0.1, type: "spring" }}
                            className="w-full bg-zinc-800 relative hover:bg-[#d4af37] transition-colors duration-300"
                        >
                            {/* Tooltip */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.value}k
                            </div>
                        </motion.div>
                        <span className="text-[10px] text-zinc-500 font-bold">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
