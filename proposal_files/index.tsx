
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import DottedGlowBackground from './components/DottedGlowBackground';

interface MarinaContent {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  metric?: string;
  metricLabel?: string;
  image: string;
  accent: string;
  services?: string[];
}

const MARINA_CONTENT: MarinaContent[] = [
  {
    id: 'truth',
    title: 'THE COLD HARD TRUTH',
    subtitle: 'THE VISIBILITY GAP',
    content: 'International NGOs and regional corporations are searching for Harare centers right now. If your digital touchpoint lacks prestige, you aren’t just losing clicks—you’re losing 7-figure contracts. We bridge the gap between your 5-star physical lobby and your 2-star digital presence.',
    metric: '92%',
    metricLabel: 'OF B2B BUYERS START ONLINE',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    accent: 'PRESTIGE'
  },
  {
    id: 'status-quo',
    title: 'THE RESOURCE DRAIN',
    subtitle: 'AUTOMATION VS. MANUAL SOURCING',
    content: 'Your sales team is stuck answering repetitive FAQs about seating and menus. This manual cycle is a revenue bottleneck. Our "Digital Concierge" automates these answers, freeing your elite staff to hunt high-value accounts.',
    metric: '40%',
    metricLabel: 'FASTER PLANNER WORKFLOW',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200',
    accent: 'EFFICIENCY'
  },
  {
    id: 'services',
    title: 'THE SERVICE STACK',
    subtitle: 'OUR MULTI-REVENUE HOOKS',
    content: 'We provide a comprehensive reputation and lead-gen engine. This isn’t a website; it’s a growth ecosystem designed for the May landmark event and beyond.',
    services: [
      'LinkedIn: B2B Authority for MICE Revenue',
      'Instagram: Lifestyle & Casino Vibe Curation',
      'SEO: Domination of "Harare Convention Center" results',
      'Lead Engine: Strategic Data-Capture Points'
    ],
    metric: '85%',
    metricLabel: 'INFRASTRUCTURE BUILT',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    accent: 'ECOSYSTEM'
  },
  {
    id: 'planner-kit',
    title: 'THE 40% SHORTCUT',
    subtitle: 'PROFESSIONAL PLANNER KITS',
    content: 'We deliver six downloadable resources (Floor plans, AV specs, Menu kits) that make Marina the easiest venue to work with. We remove the friction that causes wedding planners and corporate execs to go elsewhere.',
    metric: '6',
    metricLabel: 'READY-TO-USE ASSETS',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200',
    accent: 'OPERATIONS'
  },
  {
    id: 'marketing',
    title: 'COLD-TO-GOLD OUTREACH',
    subtitle: 'STRATEGIC AMPLIFICATION',
    content: 'For the May Event, we leverage our 4,000+ LinkedIn network and "Skin in the Game" marketing support. We don\'t just design; we drive high-intent traffic to your doors.',
    metric: '4k+',
    metricLabel: 'NETWORK REACH',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
    accent: 'GROWTH'
  },
  {
    id: 'decision',
    title: 'LAUNCH THE ECOSYSTEM',
    subtitle: 'OPTION B: THE FUTURE',
    content: 'Stop manual lead generation. Activate a high-performance system that reflects your true value. The ecosystem is waiting. Let’s launch.',
    metric: '100%',
    metricLabel: 'REVENUE FOCUS',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
    accent: 'ACTIVATE'
  }
];

const Section: React.FC<{ 
  data: MarinaContent; 
  index: number; 
}> = ({ data, index }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`magazine-section ${isVisible ? 'is-visible' : ''}`}
      id={data.id}
    >
      <div className="section-grid">
        <div className="content-col">
          <div className="index-label">0{index + 1} // {data.accent}</div>
          <h2 className="section-title">{data.title}</h2>
          <h3 className="section-subtitle">{data.subtitle}</h3>
          
          <div className="content-inner">
             <p className="section-text">{data.content}</p>
             
             {data.services && (
               <ul className="service-list">
                 {data.services.map((s, i) => (
                   <li key={i}>{s}</li>
                 ))}
               </ul>
             )}

             {data.metric && (
               <div className="stat-block">
                 <div className="stat-value">{data.metric}</div>
                 <div className="stat-label">{data.metricLabel}</div>
               </div>
             )}
          </div>

          {index === 5 && (
            <div className="contact-card">
              <div className="contact-label">READY FOR DEPLOYMENT</div>
              <p><strong>WhatsApp:</strong> +263 71 233 1463</p>
              <p><strong>Email:</strong> mkanakabailey@gmail.com</p>
              <button className="cta-button">VERIFY THE BUILD</button>
            </div>
          )}
        </div>
        
        <div className="image-col">
          <div className="image-wrapper">
            <img src={data.image} alt={data.title} />
            <div className="image-overlay"></div>
            <div className="brutalist-border-top"></div>
            <div className="brutalist-border-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="marina-proposal-app">
      <DottedGlowBackground 
        gap={40} 
        radius={1} 
        color="rgba(197, 160, 89, 0.05)" 
        glowColor="rgba(197, 160, 89, 0.2)" 
        speedScale={0.3} 
      />
      
      <header className="fixed-nav">
        <div className="logo-area">
          <div className="logo-text">MARINA</div>
          <div className="logo-subtext">CONVENTION CENTER & CASINO</div>
        </div>
        <div className="nav-links">
          {MARINA_CONTENT.map((item, i) => (
            <a key={item.id} href={`#${item.id}`}>0{i + 1}</a>
          ))}
        </div>
      </header>

      <main className="magazine-layout">
        <div className="vertical-label">THE DIGITAL ECOSYSTEM PROPOSAL</div>
        {MARINA_CONTENT.map((item, index) => (
          <Section key={item.id} data={item} index={index} />
        ))}
      </main>

      <footer className="proposal-footer">
        <div className="footer-line"></div>
        <div className="footer-content">
          <p>© 2024 MARINA GROWTH PARTNERS // HARARE, ZIMBABWE</p>
          <div className="footer-links">
            <span>PRESTIGE</span>
            <span>AUTOMATION</span>
            <span>VISIBILITY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
