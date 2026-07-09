'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-32 bg-dp-red relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-20" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-dp-cream mb-6"
        >
          Stay in the <span className="text-dp-black">Loop.</span>
        </motion.h2>
        <p className="text-sm text-dp-cream/90 mb-12 max-w-2xl mx-auto">
          Get exclusive access to limited edition flavors, merch drops, and VIP experiences.
        </p>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row max-w-lg mx-auto gap-2"
        >
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 px-6 py-4 rounded-full outline-none focus:bg-white/20 transition-all font-medium"
            required
          />
          <button type="submit" className="bg-dp-black hover:bg-white hover:text-dp-black text-white px-8 py-4 rounded-full font-bold transition-colors flex items-center justify-center gap-2">
            Subscribe <ArrowRight className="w-5 h-5" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
