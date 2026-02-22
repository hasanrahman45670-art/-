/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Star, Clock, MapPin, BookOpen, Brain, Globe, Shield, Zap, ChevronDown } from 'lucide-react';

const ramadanData = [
  { day: 1, date: '19 Feb', sehri: '5:12', iftar: '5:58' },
  { day: 2, date: '20 Feb', sehri: '5:11', iftar: '5:58' },
  { day: 3, date: '21 Feb', sehri: '5:11', iftar: '5:59' },
  { day: 4, date: '22 Feb', sehri: '5:10', iftar: '5:59' },
  { day: 5, date: '23 Feb', sehri: '5:09', iftar: '6:00' },
  { day: 6, date: '24 Feb', sehri: '5:08', iftar: '6:00' },
  { day: 7, date: '25 Feb', sehri: '5:08', iftar: '6:01' },
  { day: 8, date: '26 Feb', sehri: '5:07', iftar: '6:01' },
  { day: 9, date: '27 Feb', sehri: '5:06', iftar: '6:02' },
  { day: 10, date: '28 Feb', sehri: '5:05', iftar: '6:02' },
  { day: 11, date: '01 Mar', sehri: '5:05', iftar: '6:03' },
  { day: 12, date: '02 Mar', sehri: '5:04', iftar: '6:03' },
  { day: 13, date: '03 Mar', sehri: '5:03', iftar: '6:04' },
  { day: 14, date: '04 Mar', sehri: '5:02', iftar: '6:04' },
  { day: 15, date: '05 Mar', sehri: '5:01', iftar: '6:05' },
  { day: 16, date: '06 Mar', sehri: '5:00', iftar: '6:05' },
  { day: 17, date: '07 Mar', sehri: '4:59', iftar: '6:06' },
  { day: 18, date: '08 Mar', sehri: '4:58', iftar: '6:06' },
  { day: 19, date: '09 Mar', sehri: '4:57', iftar: '6:07' },
  { day: 20, date: '10 Mar', sehri: '4:57', iftar: '6:07' },
  { day: 21, date: '11 Mar', sehri: '4:56', iftar: '6:07' },
  { day: 22, date: '12 Mar', sehri: '4:55', iftar: '6:08' },
  { day: 23, date: '13 Mar', sehri: '4:54', iftar: '6:08' },
  { day: 24, date: '14 Mar', sehri: '4:53', iftar: '6:09' },
  { day: 25, date: '15 Mar', sehri: '4:52', iftar: '6:09' },
  { day: 26, date: '16 Mar', sehri: '4:51', iftar: '6:10' },
  { day: 27, date: '17 Mar', sehri: '4:50', iftar: '6:10' },
  { day: 28, date: '18 Mar', sehri: '4:49', iftar: '6:10' },
  { day: 29, date: '19 Mar', sehri: '4:48', iftar: '6:11' },
  { day: 30, date: '20 Mar', sehri: '4:47', iftar: '6:11' },
];

const features = [
  { icon: <Brain className="text-amber-400" size={32} />, title: "AI Ramadan Twin", desc: "4K 3D Avatar with Real-time Translation & AR Guide" },
  { icon: <Zap className="text-amber-400" size={32} />, title: "Quantum Personalization", desc: "DNA-level routine analysis & custom health menus" },
  { icon: <Globe className="text-amber-400" size={32} />, title: "Metaverse Ramadan", desc: "Virtual Iftar & Crypto Zakat Calculator" },
  { icon: <BookOpen className="text-amber-400" size={32} />, title: "Global Brain AI v7.0", desc: "1000+ Islamic sources with 99.99% accuracy" },
];

const Starfield = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
    </div>
  );
};

const IntroSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 3500);
    const t3 = setTimeout(() => onComplete(), 6000);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <Starfield />
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.h1 
            key="greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500"
          >
            আসসালামু আলাইকুম
          </motion.h1>
        )}
        {step === 2 && (
          <motion.div 
            key="ramadan"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">
              রমজান মোবারক
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-amber-200/60 tracking-widest uppercase text-sm font-mono"
            >
              Welcome to v7.0
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center px-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono mb-8 uppercase tracking-widest">
          <Star size={14} /> Version 7.0 Live
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
            মুসলমানদের
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 drop-shadow-[0_0_40px_rgba(245,158,11,0.3)] font-serif italic pr-4">
            রমজান
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 font-light leading-relaxed">
          The world's first AI Ramadan Super App. Experience Quantum Personalization, Metaverse Iftar, and your Digital Prophet Companion.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105 flex items-center gap-2">
            <Moon size={20} /> Enter Metaverse
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all flex items-center gap-2">
            <Shield size={20} /> Explore Features
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-32 p-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Next-Gen Features</h2>
        <p className="text-gray-400">Technology nobody ever imagined.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 rounded-3xl hover:border-amber-500/50 transition-all group"
          >
            <div className="mb-6 p-4 bg-black/50 rounded-2xl inline-block group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.1)]">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CalendarSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-32 p-6 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-amber-500 mb-4 font-serif">Sehri & Iftar Schedule</h2>
        <p className="text-gray-400 flex items-center justify-center gap-2 font-mono text-sm">
          <MapPin size={16} /> Dhaka, Bangladesh | 2026
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <div className="grid grid-cols-4 text-xs md:text-sm font-bold text-amber-500/80 uppercase tracking-wider p-4 border-b border-white/10 bg-black/50">
          <div className="text-center">Ramadan</div>
          <div className="text-center">Date</div>
          <div className="text-center">Sehri Ends</div>
          <div className="text-center">Iftar</div>
        </div>
        <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
          {ramadanData.map((day) => (
            <div 
              key={day.day} 
              className={`grid grid-cols-4 text-sm md:text-base p-4 border-b border-white/5 hover:bg-white/5 transition-colors ${
                [10, 20, 30].includes(day.day) ? 'bg-amber-500/10 text-amber-300 font-semibold' : 'text-gray-300'
              }`}
            >
              <div className="text-center">{day.day}</div>
              <div className="text-center">{day.date}</div>
              <div className="text-center font-mono">{day.sehri}</div>
              <div className="text-center font-mono">{day.iftar}</div>
            </div>
          ))}
        </div>
      </motion.div>
      <p className="text-center text-xs text-gray-500 mt-4 font-mono">*All dates are subject to the sighting of the moon</p>
    </div>
  );
};

const Footer = () => (
  <footer className="mt-32 border-t border-white/10 bg-black/80 backdrop-blur-xl relative z-10 py-12 text-center">
    <div className="flex justify-center items-center gap-2 mb-6">
      <Moon className="text-amber-500" size={24} />
      <span className="text-2xl font-serif font-bold text-white tracking-widest">মুসলমানদের রমজান</span>
    </div>
    <p className="text-amber-500/80 font-mono text-sm mb-2">"বিশ্বের প্রথম AI রমজান সুপারকার"</p>
    <p className="text-gray-500 text-xs mb-8">Trusted by 10 Crore+ Muslims | Global Muslim Award 2026</p>
    <div className="inline-block px-6 py-2 border border-white/10 rounded-full text-xs text-gray-400 hover:bg-white/5 transition-colors cursor-pointer">
      Made by Tamzid Abdur Rahman
    </div>
  </footer>
);

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-500/30">
      <AnimatePresence>
        {!introComplete && <IntroSequence onComplete={() => setIntroComplete(true)} />}
      </AnimatePresence>

      {introComplete && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <Starfield />
          <Hero />
          <FeaturesSection />
          <CalendarSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
