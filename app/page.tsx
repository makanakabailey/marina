'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Award, Utensils, Wine } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RoleSelector from '@/components/RoleSelector';
import VenueFinder from '@/components/VenueFinder';
import CasinoSection from '@/components/CasinoSection';
import ServicesShowcase from '@/components/ServicesShowcase';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import DiningMenu from '@/components/DiningMenu';

const TESTIMONIALS = [
  { id: 1, role: "Wedding Planner", text: "The Marina team made the transition from ceremony to reception seamless. The waterfront dining option was a hit with guests.", author: "Sarah Jenkins, Forever Events" },
  { id: 2, role: "Corporate Marketer", text: "We hosted our annual tech summit here. Being close to the airport and the National Sports Stadium made logistics easy.", author: "Marcus Thorne, TechGlobal" },
  { id: 3, role: "Trade Show Organizer", text: "The biggest casino in Harare provided excellent entertainment for our attendees after the expo hours.", author: "Elena Rodriguez, AutoExpo" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="font-sans bg-[#fafaf9] text-[#1a1a1a] min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-white">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <div className="w-full transition-all duration-300">
        {activeSection === 'home' && (
          <>
            <Hero setActiveSection={setActiveSection} />
            <VenueFinder />
            <RoleSelector />
            <ServicesShowcase />
            <TestimonialsSection />
            <CasinoSection />
            <Newsletter />
          </>
        )}
        
        {activeSection !== 'home' && activeSection !== 'contact' && (
          <SectionContent activeSection={activeSection} setActiveSection={setActiveSection} />
        )}
        
        {activeSection === 'contact' && (
          <ContactSection />
        )}
        
        <Footer />
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="py-24 bg-[#f5f5f4] border-t border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-16 text-[#1a1a1a]">Trusted By</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white p-10 border border-[#e7e5e4] relative shadow-sm">
              <div className="absolute -top-3 left-10 bg-[#d4af37] px-2 text-white">
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map(star => <Star key={star} size={12} className="fill-black" />)}
                </div>
              </div>
              <p className="italic text-zinc-600 mb-8 font-light leading-relaxed">&quot;{t.text}&quot;</p>
              <div className="border-t border-[#e7e5e4] pt-4">
                <p className="font-black text-[#1a1a1a] uppercase tracking-wider text-sm">{t.author}</p>
                <p className="text-[10px] text-[#d4af37] uppercase tracking-[0.2em] mt-1">{t.role}</p>
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
    <div className="pt-32 lg:pt-20 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="border-l-4 border-yellow-600 pl-8 mb-12">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-2">{activeSection}</h1>
          <p className="text-zinc-500 uppercase tracking-widest">Experience the hype</p>
        </div>
        
        {activeSection === 'dining' && (
          <div className="prose lg:prose-xl prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-zinc-300">
              Our Marina Restaurant serves a delightful mix of Hyderabadi Indian cuisine, Chinese, American, and local Zimbabwean dishes. Enjoy our famous buffet or visit the Marina Lounge for waterfront dining and live music.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 not-prose">
              <div className="bg-zinc-900 p-8 border border-zinc-800">
                <h3 className="font-black text-2xl mb-4 uppercase text-white flex items-center">
                  <Utensils className="mr-4 text-yellow-600"/> Restaurant
                </h3>
                <p className="text-zinc-400">Open daily. Featuring Hyderabadi Biryani and Zim-style sadza/stews.</p>
              </div>
              <div className="bg-zinc-900 p-8 border border-zinc-800">
                <h3 className="font-black text-2xl mb-4 uppercase text-white flex items-center">
                  <Wine className="mr-4 text-yellow-600"/> Lounge
                </h3>
                <p className="text-zinc-400">Live music weekends. Cocktails, wines, and premium spirits.</p>
              </div>
            </div>
          </div>
        )}
        
        {activeSection === 'venues' && <VenueFinder />}
        {activeSection === 'casino' && <CasinoSection />}
        {activeSection === 'planners' && (
          <>
            <RoleSelector />
            <DiningMenu />
          </>
        )}
        
        {activeSection !== 'dining' && activeSection !== 'venues' && activeSection !== 'casino' && activeSection !== 'planners' && (
          <p className="text-xl text-zinc-500 mb-12 font-light border border-zinc-800 p-12 text-center uppercase tracking-widest">
            Content Loading...
          </p>
        )}
        
        <button 
          onClick={() => setActiveSection('home')} 
          className="mt-12 text-white font-black uppercase tracking-widest text-xs flex items-center hover:text-yellow-600 transition"
        >
          <ChevronRight className="rotate-180 mr-2" /> Back to Home
        </button>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="pt-32 lg:pt-20 pb-20 px-4 min-h-screen bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Award size={64} className="text-[#d4af37] mx-auto mb-8" strokeWidth={1} />
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#1a1a1a] mb-6">
            Book Your <span className="text-[#d4af37]">Stage</span>
          </h1>
          <p className="text-xl text-zinc-600 uppercase tracking-widest">Located in Locheng Plaza, Mutley Bend.</p>
        </div>
        
        <form className="bg-[#fafaf9] border border-[#e7e5e4] p-8 md:p-12 shadow-xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-3">Name</label>
              <input type="text" className="w-full bg-white border border-[#e7e5e4] p-4 text-[#1a1a1a] focus:border-[#d4af37] focus:ring-0 transition-colors" placeholder="JOHN DOE" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-3">Email</label>
              <input type="email" className="w-full bg-white border border-[#e7e5e4] p-4 text-[#1a1a1a] focus:border-[#d4af37] focus:ring-0 transition-colors" placeholder="JOHN@EXAMPLE.COM" />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-3">Interest</label>
            <select className="w-full bg-white border border-[#e7e5e4] p-4 text-[#1a1a1a] focus:border-[#d4af37] focus:ring-0 transition-colors">
              <option>CORPORATE EVENT</option>
              <option>WEDDING RECEPTION</option>
              <option>CASINO VIP</option>
              <option>RESTAURANT RESERVATION</option>
            </select>
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-3">Message</label>
            <textarea rows={4} className="w-full bg-white border border-[#e7e5e4] p-4 text-[#1a1a1a] focus:border-[#d4af37] focus:ring-0 transition-colors" placeholder="TELL US ABOUT YOUR EVENT..."></textarea>
          </div>
          
          <button className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white font-black py-5 uppercase tracking-[0.2em] transition-colors">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
