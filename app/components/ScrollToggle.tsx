"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';

export default function ScrollToggle() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Show button only after scrolling 200px
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);

      // 2. Detect if user is near the bottom of the page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      // If we are within 100px of the bottom, flip the arrow
      if (scrollY + windowHeight >= documentHeight - 100) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToToggle = () => {
    if (isAtBottom) {
      // Go to Top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Go to Bottom
      window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToToggle}
          className="fixed bottom-8 right-8 z-[99] p-4 bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl group hover:bg-black transition-colors duration-300"
        >
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ y: isAtBottom ? [0, -5, 0] : [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-black group-hover:text-white"
            >
              {isAtBottom ? (
                <ArrowUp size={24} strokeWidth={2.5} />
              ) : (
                <ArrowDown size={24} strokeWidth={2.5} />
              )}
            </motion.div>
          </div>

          {/* Magnetic Glow Effect */}
          <div className="absolute inset-0 bg-[#18aed1]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}