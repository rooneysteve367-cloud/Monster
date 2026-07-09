'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: "What are the 23 flavors in Dr Pepper?", a: "The 23 flavors are a closely guarded secret! Charles Alderton created the formula in 1885, and we've kept it locked in a vault ever since to preserve the unique taste you love." },
  { q: "Is Dr Pepper a cola or root beer?", a: "Neither! Dr Pepper is in a category of its own. It's a unique blend of 23 fruit and spice flavors. The US Federal Court even ruled in 1963 that Dr Pepper is not a cola." },
  { q: "Does Dr Pepper contain caffeine?", a: "Yes, Dr Pepper Original contains caffeine. However, we also offer Caffeine-Free Dr Pepper for those who prefer to skip the buzz." },
  { q: "How do I join Pepper Perks?", a: "It's free and easy! Just sign up on our Rewards page, buy your favorite Dr Pepper products, scan your receipts, and start earning points towards exclusive merch." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic mb-4">Frequently Asked <span className="text-dp-red">Questions.</span></h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-8 py-6 flex items-center justify-between font-bold text-lg hover:bg-white/5 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-dp-red' : 'text-white/40'}`} />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
