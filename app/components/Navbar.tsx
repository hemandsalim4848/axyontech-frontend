"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, LayoutGrid, Monitor, Cpu, Speaker, Zap } from 'lucide-react';

const CATEGORIES = [
  { 
    name: 'Flat Panels', 
    desc: 'Interactive touch solutions', 
    icon: <LayoutGrid size={20} />, 
    href: '/products/flat-panels',
    img: 'http://localhost:1337/uploads/flat_panel_thumb.png' 
  },
  { 
    name: 'Professional Monitors', 
    desc: 'High-accuracy displays', 
    icon: <Monitor size={20} />, 
    href: '/products/monitors',
    img: 'http://localhost:1337/uploads/monitor_thumb.png' 
  },
  { 
    name: 'Audio Systems', 
    desc: 'Studio-grade acoustics', 
    icon: <Speaker size={20} />, 
    href: '/products/audio',
    img: 'http://localhost:1337/uploads/audio_thumb.png' 
  },
  { 
    name: 'Power Units', 
    desc: 'Industrial power supply', 
    icon: <Zap size={20} />, 
    href: '/products/power',
    img: 'http://localhost:1337/uploads/power_thumb.png' 
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-md py-2 shadow-sm' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-1 z-[101]">
            <span className="text-[#18aed1] text-2xl font-black tracking-tighter transition-transform group-hover:scale-105">AXYON</span>
            <span className="text-black text-2xl font-light tracking-widest">TECH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            
            {/* Products Mega Menu Trigger */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#18aed1] transition-colors">
                Products <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[700px]"
                  >
                    <div className="bg-white border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden grid grid-cols-12">
                      {/* Left: Categories Grid */}
                      <div className="col-span-8 p-8 grid grid-cols-2 gap-6 bg-white">
                        {CATEGORIES.map((cat) => (
                          <Link key={cat.name} href={cat.href} className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                            <div className="p-3 bg-gray-50 rounded-xl text-black group-hover/item:text-[#18aed1] group-hover/item:bg-white transition-all shadow-sm">
                              {cat.icon}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-black mb-1">{cat.name}</h4>
                              <p className="text-[11px] text-gray-400 font-medium">{cat.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Right: Featured Promo */}
                      <div className="col-span-4 bg-gray-50 p-8 flex flex-col justify-between border-l border-gray-100">
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-[#18aed1]">Featured Tech</span>
                          <h4 className="text-lg font-black text-black leading-tight mt-2">AZTECH <br/>22" Series</h4>
                        </div>
                        <Link href="/products/aztech-22" className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-black hover:text-[#18aed1] transition-colors">
                          View Details <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/contact" label="Contact" />
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#18aed1] hover:shadow-lg hover:shadow-[#18aed1]/30 transition-all">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Button Code (Same as yours but kept for layout) */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-[101] text-black p-2">
             <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
             </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6">
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block text-2xl font-black text-black uppercase tracking-tighter hover:text-[#18aed1]">
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Sub-component for clean links
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#18aed1] transition-colors relative group">
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#18aed1] transition-all group-hover:w-full" />
    </Link>
  );
}