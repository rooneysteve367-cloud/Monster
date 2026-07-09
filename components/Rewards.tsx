'use client';

import { motion } from 'motion/react';
import { Gift, Star, Zap } from 'lucide-react';

export default function Rewards() {
  return (
    <section className="py-24 bg-gradient-to-br from-dp-dark to-dp-black relative border-t border-dp-red/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-dp-red/20 text-dp-red px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
              <Star className="w-4 h-4" /> Pepper Perks
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-6">Drink. <span className="text-dp-red">Earn.</span> Redeem.</h2>
            <p className="text-dp-cream/60 text-sm mb-8 leading-relaxed max-w-lg">
              Join Pepper Perks today. Scan your receipts, earn points, and unlock exclusive merch, experiences, and free Dr Pepper.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-dp-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Instant Points</h4>
                  <p className="text-white/60 text-sm">Earn on every purchase, anywhere.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5 text-dp-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Exclusive Rewards</h4>
                  <p className="text-white/60 text-sm">Limited edition apparel and gear.</p>
                </div>
              </div>
            </div>

            <button className="bg-dp-gold hover:bg-white text-black px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Join Pepper Perks Free
            </button>
          </motion.div>
        </div>
        
        <div className="md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-gradient-to-tr from-dp-red/20 to-dp-gold/20 rounded-full flex items-center justify-center relative border border-white/10 p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full animate-pulse" />
            <div className="text-center">
              <span className="text-[8rem] font-bold text-dp-gold drop-shadow-2xl font-serif">100</span>
              <p className="text-2xl font-bold uppercase tracking-widest mt-[-20px] text-white">Bonus Points</p>
              <p className="text-sm text-white/60 mt-2">when you sign up today</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
