'use client';

import { motion } from 'motion/react';
import { Search, MapPin } from 'lucide-react';

export default function StoreLocator() {
  return (
    <section className="py-24 bg-dp-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-6">Find Your <span className="text-dp-red">Fix.</span></h2>
            <p className="text-dp-cream/60 text-sm mb-10">We're never far. Enter your ZIP code to find the closest retailer carrying your favorite Dr Pepper flavors.</p>
            
            <div className="relative mb-8">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input 
                type="text" 
                placeholder="Enter ZIP code or city" 
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 pl-14 pr-32 py-4 rounded-full outline-none focus:border-dp-red focus:bg-white/10 transition-all font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-dp-red hover:bg-dp-burgundy text-white px-6 rounded-full font-bold transition-colors">
                Search
              </button>
            </div>
            
            <button className="flex items-center gap-2 text-dp-gold hover:text-white font-medium transition-colors text-sm uppercase tracking-wider">
              <MapPin className="w-4 h-4" /> Use my current location
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square md:aspect-video bg-[#1A1A1A] rounded-3xl overflow-hidden relative border border-white/10 flex items-center justify-center"
          >
            {/* Interactive Map Placeholder */}
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/40 font-medium">Interactive Map Experience</p>
              <p className="text-white/20 text-sm mt-2">Enter location to see nearby stores</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
