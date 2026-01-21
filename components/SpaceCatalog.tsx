'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SPACES = [
    { id: 1, title: 'The Grand Ballroom', capacity: '500 Guests', image: '/images/edited-photo.png', tags: ['Weddings', 'Galas'] },
    { id: 2, title: 'Executive Lounge', capacity: '50 Guests', image: '/images/edited-photo-2.png', tags: ['VIP', 'Meetings'] },
    { id: 3, title: 'Skyline Terrace', capacity: '150 Guests', image: '/images/edited-photo-5.png', tags: ['Cocktails', 'Views'] },
    { id: 4, title: 'Convention Hall', capacity: '1000 Guests', image: '/images/edited-photo-7.png', tags: ['Expos', 'Summits'] },
];

export default function SpaceCatalog() {
    return (
        <div className="bg-[#1a1a1a] py-32 px-4 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-2">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-yellow-600">Collection</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-right mt-8 md:mt-0"
                    >
                        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 mb-2">Issue 001</p>
                        <p className="text-xl font-light">Curated Spaces for Visionaries</p>
                    </motion.div>
                </div>

                {/* Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-24">
                    {SPACES.map((space, idx) => (
                        <motion.div
                            key={space.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`group relative ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
                        >
                            {/* Image Container with Reveal Effect */}
                            <div className="relative overflow-hidden aspect-[4/5] bg-zinc-900 mb-8">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                                    style={{ backgroundImage: `url(${space.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </motion.div>

                                {/* Floating Badge */}
                                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <ArrowUpRight className="text-white" size={24} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-3">
                                    {space.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] border border-[#d4af37] px-2 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-4xl font-black uppercase tracking-tight mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                                    {space.title}
                                </h3>

                                <div className="flex justify-between items-center border-t border-zinc-800 pt-4 mt-4">
                                    <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                                        Capacity
                                    </p>
                                    <p className="text-lg font-bold">
                                        {space.capacity}
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-32 text-center">
                    <button className="text-[#d4af37] text-lg font-black uppercase tracking-[0.3em] hover:text-white transition-colors duration-300 flex items-center justify-center gap-4 mx-auto group">
                        View Full Catalog
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

            </div>
        </div>
    );
}
