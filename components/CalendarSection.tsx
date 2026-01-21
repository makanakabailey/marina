
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock, MapPin } from 'lucide-react';

const EVENTS = [
    { day: 15, month: 'MAY', title: 'The Gatsby Gala', time: '19:00', location: 'Grand Ballroom', type: 'Social' },
    { day: 22, month: 'MAY', title: 'TechGlobal Summit', time: '09:00', location: 'Convention Hall A', type: 'Business' },
    { day: 28, month: 'MAY', title: 'Future of Finance', time: '14:30', location: 'Executive Lounge', type: 'Seminar' },
    { day: 5, month: 'JUN', title: 'Wedding Expo 2025', time: '10:00', location: 'Main Exhibition Hall', type: 'Exhibition' },
];

export default function CalendarSection() {
    const [selectedEvent, setSelectedEvent] = useState(0);

    return (
        <div className="bg-[#1a1a1a] py-32 px-4 border-t border-zinc-800 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left: Magazine Style Header & List */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <h2 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter text-white leading-[0.8]">
                                Event<br />
                                <span className="text-[#d4af37]">Horizon</span>
                            </h2>
                            <p className="mt-8 text-xl text-zinc-500 uppercase tracking-widest max-w-sm font-light">
                                Curated experiences for the elite. Mark your calendar.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {EVENTS.map((event, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    onClick={() => setSelectedEvent(idx)}
                                    className={`group cursor-pointer border-b border-zinc-800 pb-6 flex items-end justify-between transition-all duration-300 ${selectedEvent === idx ? 'border-[#d4af37]' : 'hover:border-zinc-600'}`}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex flex-col items-center min-w-[60px]">
                                            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">{event.month}</span>
                                            <span className={`text-4xl font-black leading-none transition-colors ${selectedEvent === idx ? 'text-[#d4af37]' : 'text-white'}`}>{event.day}</span>
                                        </div>
                                        <div>
                                            <h3 className={`text-2xl font-bold uppercase tracking-tight transition-colors ${selectedEvent === idx ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                                                {event.title}
                                            </h3>
                                            <div className="flex items-center gap-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium uppercase tracking-widest text-[#d4af37]">
                                                <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>
                                                <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight size={24} className={`transition-transform duration-300 ${selectedEvent === idx ? 'text-[#d4af37] rotate-0' : 'text-zinc-500 -rotate-45'}`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Dynamic Visual Interactivity */}
                    <div className="relative h-[600px] bg-zinc-900 border border-zinc-800 flex items-center justify-center p-12 overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.4),transparent_70%)]"></div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedEvent}
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="relative z-10 w-full max-w-md aspect-[3/4] bg-[#1a1a1a] p-2 shadow-2xl rotate-1 border border-zinc-800"
                            >
                                <div className="w-full h-full border border-zinc-700 p-8 flex flex-col justify-between relative bg-[#1a1a1a]">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37]"></div>

                                    <div>
                                        <div className="flex justify-between items-start mb-12">
                                            <span className="text-6xl font-black text-white opacity-10">{EVENTS[selectedEvent].day}</span>
                                            <span className="border border-zinc-700 text-zinc-400 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">{EVENTS[selectedEvent].month}</span>
                                        </div>
                                        <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4 text-white">{EVENTS[selectedEvent].title}</h3>
                                        <p className="text-sm font-medium uppercase tracking-widest text-[#d4af37]">{EVENTS[selectedEvent].type} Event</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="w-full h-[1px] bg-zinc-800"></div>
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-300">
                                            <span>Time</span>
                                            <span>{EVENTS[selectedEvent].time} EST</span>
                                        </div>
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-300">
                                            <span>Venue</span>
                                            <span>{EVENTS[selectedEvent].location}</span>
                                        </div>

                                        <button className="w-full mt-8 bg-white text-[#1a1a1a] py-4 font-black uppercase tracking-widest text-xs hover:bg-[#d4af37] hover:text-white transition-colors">
                                            RSVP Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
}
