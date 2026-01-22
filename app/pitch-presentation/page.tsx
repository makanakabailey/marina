'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Info } from 'lucide-react';


function PitchPresentationPage() {
  const [activeSection, setActiveSection] = useState('pitch');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const graphData = [
    { label: "Client Growth", value: 85, color: "#d4af37" },
    { label: "Revenue Boost", value: 70, color: "#a88e2c" },
    { label: "Market Share", value: 60, color: "#8a7321" },
    { label: "Brand Visibility", value: 90, color: "#f0c242" },
  ];

  const Section = useCallback(({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <motion.section
      id={id}
      className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-cover bg-center relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-4xl text-center w-full">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-tight">
          {title}
        </h2>
        <div className="text-lg md:text-xl text-zinc-300 mb-8">
          {children}
        </div>
      </div>
    </motion.section>
  ), []);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#1a1a1a] text-white selection:bg-[#d4af37] selection:text-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-grow">
        <Section id="introduction" title="Your Vision, Our Expertise">
          At Marina, we don't just host events; we craft unparalleled experiences. Partner with us to elevate your brand, engage your audience, and achieve extraordinary outcomes. Discover how our unique blend of luxury, entertainment, and bespoke services can transform your objectives into remarkable successes.
        </Section>

        <Section id="value-proposition" title="Unmatched Value & Impact">
          We deliver significant value through strategic location, versatile spaces, and world-class amenities. Experience enhanced guest satisfaction, seamless event execution, and unparalleled return on investment. Our commitment is to your success, ensuring every detail contributes to a memorable and impactful experience for your clients and stakeholders.
        </Section>

        <Section id="projections" title="Visualizing Future Success">
          <div className="w-full max-w-2xl mx-auto bg-zinc-900 rounded-lg shadow-xl p-8 mb-12">
            <div className="flex items-end justify-between h-[300px] space-x-4">
              {graphData.map((item) => (
                <div key={item.label} className="flex flex-col items-center flex-1 group">
                  <div className="relative w-full flex items-end justify-center h-full">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${item.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="w-full max-w-[60px] rounded-t-lg relative group-hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.value}%
                      </div>
                    </motion.div>
                  </div>
                  <span className="text-xs md:text-sm text-zinc-400 mt-4 uppercase tracking-wider text-center font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          Our projections demonstrate significant growth potential across key metrics. Witness substantial increases in client engagement, revenue generation, and overall market presence, all powered by our bespoke solutions and strategic partnership approach. These outcomes are not just numbers; they represent tangible advancements for your enterprise.
        </Section>

        <Section id="outcomes" title="Achieving Tangible Outcomes">
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mt-12">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex items-start space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37] w-8 h-8 flex-shrink-0"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Elevated Brand Perception</h3>
                <p className="text-zinc-400">Expect an increase of up to <span className="text-[#d4af37] font-bold">95%</span> in brand recognition and positive sentiment among target demographics through strategic alignment with a premium venue.</p>
              </div>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex items-start space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37] w-8 h-8 flex-shrink-0"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Optimized Revenue Streams</h3>
                <p className="text-zinc-400">Anticipate a revenue growth potential of <span className="text-[#d4af37] font-bold">80%</span> by leveraging our diverse offerings and expanded client reach within a high-value market segment.</p>
              </div>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex items-start space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37] w-8 h-8 flex-shrink-0"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Enhanced Client Engagement</h3>
                <p className="text-zinc-400">Achieve up to a <span className="text-[#d4af37] font-bold">90%</span> uplift in client engagement and loyalty through memorable experiences and exclusive access to our luxury facilities and entertainment.</p>
              </div>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex items-start space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37] w-8 h-8 flex-shrink-0"><path d="M14.5 7H19c.5 0 1 .5 1 1v4c0 .5-.5 1-1 1h-5.5" /><path d="M15 13.5l-3.32 3.32a2 2 0 0 1-2.83 0L5 12" /><path d="M12 22H2c-.5 0-1-.5-1-1V5c0-.5.5-1 1-1h10l7 7Z" /></svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Strategic Market Expansion</h3>
                <p className="text-zinc-400">Capitalize on new market opportunities with a <span className="text-[#d4af37] font-bold">75%</span> increase in strategic partnerships and business development within key industries and demographics.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="security" title="Unwavering Security & Reliability">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37] w-16 h-16 mx-auto mb-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          Your peace of mind is our priority. Our state-of-the-art security protocols and highly trained personnel ensure a safe and reliable environment for all guests and assets. We are committed to maintaining the highest standards of operational excellence, guaranteeing seamless event execution and secure transactions at all times.
        </Section>

        <Section id="innovation" title="Pioneering Innovation for Success">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37] w-16 h-16 mx-auto mb-8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
          Stay ahead with Marina's commitment to innovation. We continuously integrate cutting-edge technology and creative solutions to enhance every aspect of your experience, from interactive event planning tools to advanced entertainment options. Partner with us to leverage future-forward strategies that drive sustained growth and competitive advantage.
        </Section>

        <div className="py-24 bg-gradient-to-br from-[#1a1a1a] to-zinc-900 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <Info className="text-[#d4af37] w-16 h-16 mx-auto mb-8" />
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              Connect with our expert team to tailor a bespoke partnership strategy that aligns with your unique goals and elevates your enterprise to new heights. Let's build something exceptional together.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-5 border-2 border-[#d4af37] text-lg font-bold uppercase tracking-widest text-[#d4af37] hover:bg-[#d4af37] hover:text-white transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3"><path d="m9 18 6-6-6-6" /></svg>
            </motion.a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PitchPresentationPage;
