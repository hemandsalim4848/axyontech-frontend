"use client";
import { motion } from "framer-motion";

export default function FadeSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of section is visible
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] // Smooth standard ease
      }}
    >
      {children}
    </motion.section>
  );
}