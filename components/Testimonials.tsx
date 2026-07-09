'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const REVIEWS = [
  { text: "There is literally no substitute. If a restaurant asks 'Is Mr. Pibb okay?', I leave.", author: "Sarah M.", tag: "Pepper Perks Member" },
  { text: "The perfect ratio of cherry, vanilla, and magic. Nothing else hits the spot.", author: "James T.", tag: "Fan since '98" },
  { text: "Strawberries & Cream is the greatest flavor innovation of this century.", author: "Elena R.", tag: "Flavor Enthusiast" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-16 text-center">Word on the <span className="text-dp-red">Street.</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-panel p-10 rounded-3xl relative"
            >
              <Quote className="w-10 h-10 text-dp-red/40 absolute top-6 right-6" />
              <p className="text-xl font-serif italic mb-8 relative z-10 leading-relaxed">&quot;{review.text}&quot;</p>
              <div>
                <p className="font-bold">{review.author}</p>
                <p className="text-sm text-dp-red font-semibold">{review.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
