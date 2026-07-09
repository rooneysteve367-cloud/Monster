'use client';

import { motion } from 'motion/react';
import { Beaker, Droplets, Medal, History } from 'lucide-react';

const FEATURES = [
  { icon: Beaker, title: 'Unique Formula', desc: 'A proprietary blend of 23 flavors that cannot be duplicated.' },
  { icon: Droplets, title: 'Perfectly Carbonated', desc: 'The exact amount of fizz for the ultimate refreshing bite.' },
  { icon: Medal, title: 'Premium Quality', desc: 'Crafted with high-quality ingredients for a consistent taste.' },
  { icon: History, title: 'Rich Heritage', desc: 'The oldest major soft drink in America, created in 1885.' },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-6">Why <span className="text-dp-red">Dr Pepper?</span></h2>
          <p className="text-dp-cream/60 max-w-2xl mx-auto text-sm">More than just a soda. It's a complex, multi-layered experience that stands completely on its own.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-dp-red/20 flex items-center justify-center mb-6 text-dp-red group-hover:scale-110 group-hover:bg-dp-red group-hover:text-white transition-all duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
