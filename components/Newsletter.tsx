import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Event Planner');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-24 bg-yellow-500 text-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">All Access</h3>
            <p className="text-lg font-bold uppercase tracking-wide opacity-80 mb-8">
              Get on the list. Exclusive invites, dining specials, and tournament dates.
            </p>
            <div className="flex items-center font-black uppercase tracking-widest text-sm">
              <Mail className="mr-4" /> Newsletter Signup
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            {submitted ? (
              <div className="bg-[#0f172a] text-white p-10 text-center border-4 border-white shadow-[10px_10px_0px_rgba(255,255,255,0.2)]">
                <CheckCircle size={48} className="mx-auto mb-4 text-yellow-500" />
                <h4 className="text-2xl font-black uppercase">You&apos;re In</h4>
                <p className="text-zinc-400 mt-2">Watch your inbox for {role} updates.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <select 
                    className="w-full bg-[#0f172a] text-white border-none p-4 font-bold uppercase tracking-wide focus:ring-2 focus:ring-white"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>Event Planner</option>
                    <option>Wedding Planner</option>
                    <option>Corporate Marketer</option>
                    <option>Casino Enthusiast</option>
                  </select>
                </div>
                <div>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-white text-[#0f172a] placeholder-zinc-500 border-none p-4 font-bold uppercase tracking-wide focus:ring-2 focus:ring-[#0f172a]"
                    placeholder="EMAIL ADDRESS"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-black py-5 uppercase tracking-[0.2em] transition shadow-[5px_5px_0px_rgba(255,255,255,0.3)]">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
