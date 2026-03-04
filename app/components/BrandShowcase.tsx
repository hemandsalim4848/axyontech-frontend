"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Replace these placeholders with your actual brand logos
const brands = [
  { name: "Samsung", logo: "SAMSUNG" },
  { name: "LG", logo: "LG" },
  { name: "Intel", logo: "INTEL" },
  { name: "Dell", logo: "DELL" },
  { name: "Sony", logo: "SONY" },
  { name: "Asus", logo: "ASUS" },
];

export default function BrandShowcase() {
  // We double the array to create the seamless loop effect
  const dualBrands = [...brands, ...brands];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-[#18aed1] font-mono text-[10px] uppercase tracking-[0.5em] mb-4">
          Authorized Distribution Partners
        </p>
        <div className="h-[1px] w-20 bg-gray-100 mx-auto" />
      </div>

      {/* The Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient Overlays for "Fade Out" effect at edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {dualBrands.map((brand, i) => (
            <div 
              key={i} 
              className="mx-12 flex items-center justify-center min-w-[150px]"
            >
              <span className="text-3xl md:text-4xl font-black text-gray-200 hover:text-[#18aed1] transition-all duration-500 cursor-default tracking-tighter filter grayscale hover:grayscale-0">
                {brand.logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust Badges / Stats under logos */}
      <div className="max-w-5xl mx-auto mt-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-gray-50">
          <div className="flex flex-col items-center">
             <span className="text-black font-bold text-sm">Direct Manufacturer Links</span>
             <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Sourcing Excellence</p>
          </div>
          <div className="flex flex-col items-center border-x border-gray-100">
             <span className="text-black font-bold text-sm">Global Logistics Network</span>
             <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Rapid Deployment</p>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-black font-bold text-sm">Official Warranty Support</span>
             <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Verified Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}