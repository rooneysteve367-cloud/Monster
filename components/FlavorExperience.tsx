'use client';

import { motion } from 'motion/react';

export default function FlavorExperience() {
  return (
    <section className="py-32 bg-dp-burgundy relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic mb-8 text-dp-cream mix-blend-plus-lighter"
        >
          Decode the <span className="text-dp-gold">23.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-dp-cream/90 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Cherry, licorice, amaretto, almond, vanilla, blackberry, apricot, blackberry, caramel, pepper... the rest is history.
        </motion.p>
        
        {/* Conceptual animated rings representing flavors */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mt-16">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-0 rounded-full border border-dashed border-dp-gold/40`}
              style={{ padding: `${i * 1.5}rem`, borderStyle: i % 2 === 0 ? 'solid' : 'dashed' }}
            >
              <div className="w-3 h-3 rounded-full bg-dp-gold absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#D4AF37]" />
            </motion.div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-6xl font-bold text-dp-gold">23</span>
            <span className="text-sm tracking-widest uppercase text-dp-gold/80 mt-2">Flavors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
