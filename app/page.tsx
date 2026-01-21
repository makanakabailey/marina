
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RoleSelector from '@/components/RoleSelector';
import VenueFinder from '@/components/VenueFinder';
import CasinoSection from '@/components/CasinoSection';
import ServicesShowcase from '@/components/ServicesShowcase';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import DiningMenu from '@/components/DiningMenu';
import PremiumMenu from '@/components/PremiumMenu';
import CalendarSection from '@/components/CalendarSection';
import SpaceCatalog from '@/components/SpaceCatalog';

const TESTIMONIALS = [
  { id: 1, role: "Wedding Planner", text: "The Marina team made the transition from ceremony to reception seamless. The waterfront dining option was a hit with guests.", author: "Sarah Jenkins, Forever Events" },
  { id: 2, role: "Corporate Marketer", text: "We hosted our annual tech summit here. Being close to the airport and the National Sports Stadium made logistics easy.", author: "Marcus Thorne, TechGlobal" },
  { id: 3, role: "Trade Show Organizer", text: "The biggest casino in Harare provided excellent entertainment for our attendees after the expo hours.", author: "Elena Rodriguez, AutoExpo" },
  { id: 4, role: "VIP Guest", text: "The executive lounge is world-class. The perfect spot for private meetings.", author: "James Carter, Carter Holdings" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#1a1a1a] text-white selection:bg-[#d4af37] selection:text-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <AnimatePresence mode="wait">
        {activeSection === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Hero setActiveSection={setActiveSection} />
            <RoleSelector />
            <VenueFinder />
            <SpaceCatalog />
            <CalendarSection />
            <DiningMenu />
            <CasinoSection />
            <ServicesShowcase />
            <TestimonialsSection />
            <Newsletter />
          </motion.div>
        ) : activeSection === 'contact' ? (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <ContactSection />
          </motion.div>
        ) : (
          <motion.div
            key="section"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <SectionContent activeSection={activeSection} setActiveSection={setActiveSection} />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="py-24 bg-[#1a1a1a] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2 text-white">Trusted By</h2>
        <p className="text-zinc-500 uppercase tracking-widest text-xs mb-16">Voices of Excellence</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-zinc-900 p-8 border border-zinc-800 relative shadow-lg hover:border-[#d4af37] transition-colors duration-300 text-left">
              <div className="mb-6 text-[#d4af37]">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map(star => <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-[#d4af37]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>)}
                </div>
              </div>
              <p className="italic text-zinc-400 mb-6 font-light leading-relaxed text-sm min-h-[80px]">&quot;{t.text}&quot;</p>
              <div className="border-t border-zinc-800 pt-4">
                <p className="font-bold text-white uppercase tracking-wider text-xs">{t.author}</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionContent({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (section: string) => void }) {
  return (
    <div className="pt-32 lg:pt-20 pb-20 px-4 min-h-screen bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="border-l-4 border-[#d4af37] pl-8 mb-12">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-2 text-white">{activeSection}</h1>
          <p className="text-zinc-500 uppercase tracking-widest">Experience the hype</p>
        </div>

        {activeSection === 'dining' && <PremiumMenu />}

        {activeSection === 'venues' && <VenueFinder />}
        {activeSection === 'casino' && <CasinoSection />}
        {activeSection === 'planners' && (
          <>
            <RoleSelector />
            <DiningMenu />
          </>
        )}

        {/* Fallback for other sections */}
        {activeSection !== 'dining' && activeSection !== 'venues' && activeSection !== 'casino' && activeSection !== 'planners' && (
          <div className="text-center py-20 border border-zinc-800 bg-zinc-900">
            <p className="text-xl text-zinc-500 font-light uppercase tracking-widest">
              Content Visualization Loading...
            </p>
          </div>
        )}

        <button
          onClick={() => setActiveSection('home')}
          className="mt-12 text-white font-black uppercase tracking-widest text-xs flex items-center hover:text-[#d4af37] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180 mr-2"><path d="m9 18 6-6-6-6" /></svg> Back to Home
        </button>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="pt-32 lg:pt-20 pb-20 px-4 min-h-screen bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37] mx-auto mb-8"><path d="m15.477 12.897-1.666 4.881M17.84 8.767l-2.363 6.92M9.695 11.232 7.332 4.312 2 22l10-7 10 7-5.333-15.688-2.363 6.92Z" /></svg>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Book Your <span className="text-[#d4af37]">Stage</span>
          </h1>
          <p className="text-xl text-zinc-500 uppercase tracking-widest">Located in Locheng Plaza, Mutley Bend.</p>
        </div>

        <form className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Name</label>
              <input type="text" className="w-full bg-[#1a1a1a] border border-zinc-800 p-4 text-white focus:border-[#d4af37] focus:ring-0 transition-colors uppercase placeholder-zinc-700" placeholder="JOHN DOE" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Email</label>
              <input type="email" className="w-full bg-[#1a1a1a] border border-zinc-800 p-4 text-white focus:border-[#d4af37] focus:ring-0 transition-colors uppercase placeholder-zinc-700" placeholder="JOHN@EXAMPLE.COM" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Interest</label>
            <select className="w-full bg-[#1a1a1a] border border-zinc-800 p-4 text-white focus:border-[#d4af37] focus:ring-0 transition-colors uppercase">
              <option>CORPORATE EVENT</option>
              <option>WEDDING RECEPTION</option>
              <option>CASINO VIP</option>
              <option>RESTAURANT RESERVATION</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Message</label>
            <textarea rows={4} className="w-full bg-[#1a1a1a] border border-zinc-800 p-4 text-white focus:border-[#d4af37] focus:ring-0 transition-colors uppercase placeholder-zinc-700" placeholder="TELL US ABOUT YOUR EVENT..."></textarea>
          </div>

          <button className="w-full bg-[#d4af37] hover:bg-white hover:text-[#1a1a1a] text-white font-black py-5 uppercase tracking-[0.2em] transition-all duration-300">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
