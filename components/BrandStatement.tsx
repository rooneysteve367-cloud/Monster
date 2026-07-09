'use client';

import { motion } from 'motion/react';

export default function BrandStatement() {
  return (
    <section className="py-32 relative bg-dp-black overflow-hidden flex items-center justify-center">
      {/* Subtle texture/noise background could go here */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.8)_0%,transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="inline-block px-3 py-1 border border-dp-gold text-dp-gold text-[10px] uppercase tracking-widest rounded-sm mb-8"
        >
          Est. 1885
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-dp-cream leading-tight mb-12"
        >
          Crafted from <br className="hidden md:block" />
          <span className="text-dp-gold">23 distinct flavors</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-px h-24 bg-gradient-to-b from-dp-red to-transparent mx-auto"
        />
      </div>
    </section>
  );
}
