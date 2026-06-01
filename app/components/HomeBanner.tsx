"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const SLIDES = [
  {
    tag: "Next-Gen Mobile Cases",
    title: "Kevlar",
    titleStroke: "Cases",
    desc: "Engineered with real Kevlar fibers, this case offers unmatched durability without compromising on style.",
    img: "https://aztechmea.com/wp-content/uploads/2025/12/kevlar_sunset_15_-16.png",
    badgeLabel: "New Release",
    badgeTitle: "For Iphone 16 Pro",
    link: "/products"
  },
  {
    tag: "High-Performance Power Delivery",
    title: "Power",
    titleStroke: "Efficiency",
    desc: "Reliable and energy-efficient power supply units engineered to deliver stable performance, advanced protection, and consistent power for gaming, workstation, and enterprise systems.",
    img: "https://aztechmea.com/wp-content/uploads/2026/06/pwer-supply-unit.png", // Replace with your image
    badgeLabel: "80 PLUS Certified",
    badgeTitle: "Premium PSU Series",
    link: "/products"
},
 {
    tag: "Interactive Learning & Collaboration",
    title: "Smart",
    titleStroke: "Interaction",
    desc: "Advanced interactive flat panels designed to enhance classrooms, meeting rooms, and collaborative spaces with responsive touch technology, vibrant visuals, and seamless connectivity.",
    img: "https://aztechmea.com/wp-content/uploads/2025/12/Ideaflow-pro.png", // Replace with your image
    badgeLabel: "Multi-Touch Display",
    badgeTitle: "Interactive Panel Series",
    link: "/products"
}
];

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white px-6 py-20">
      {/* Background Deco */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#18aed1] rounded-full blur-[150px] opacity-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <span className="h-[2px] w-12 bg-[#18aed1]" />
                <span className="text-[#18aed1] text-[10px] font-black uppercase tracking-[0.5em]">
                  {SLIDES[current].tag}
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-black"
              >
                {SLIDES[current].title} <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>
                  {SLIDES[current].titleStroke}
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-md text-gray-500 text-lg leading-relaxed font-medium border-l-4 border-black pl-6"
              >
                {SLIDES[current].desc}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6 pt-6"
              >
                <Link href={SLIDES[current].link} className="group relative px-10 py-5 bg-black text-white text-xs font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-[#18aed1]">
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Collection <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-4 text-black">
                   <div className="p-3 bg-gray-100 rounded-full">
                      <Zap size={20} fill="black" />
                   </div>
                   <div className="text-[10px] font-bold uppercase tracking-widest leading-tight">
                      Ready for <br/> Deployment
                   </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gray-50 rounded-full scale-110 -z-10 border border-gray-100 shadow-inner" />
                <div className="aspect-square flex items-center justify-center p-12">
                  <img 
                    src={SLIDES[current].img} 
                    alt={SLIDES[current].title}
                    className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white border border-gray-100 p-6 shadow-xl rounded-2xl hidden lg:block"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#18aed1] mb-1">
                    {SLIDES[current].badgeLabel}
                  </p>
                  <p className="text-sm font-bold text-black">
                    {SLIDES[current].badgeTitle}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CONTROLS - Positioned to avoid overlapping text/buttons */}
        <div className="absolute bottom-[-60px] lg:bottom-0 right-0 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold">0{current + 1}</span>
            <div className="w-20 h-[1px] bg-gray-200 relative">
               <motion.div 
                 className="absolute left-0 top-0 h-full bg-black"
                 animate={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
               />
            </div>
            <span className="font-mono text-xs text-gray-400">0{SLIDES.length}</span>
          </div>

          <div className="flex bg-white border border-gray-100 shadow-sm">
            <button onClick={prevSlide} className="p-5 hover:bg-black text-black hover:text-white transition-all border-r border-gray-100">
              <ChevronLeft size={18} />
            </button>
            <button onClick={nextSlide} className="p-5 hover:bg-black text-black hover:text-white transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}