'use client';

import { motion } from 'motion/react';

const MILESTONES = [
  { year: '1885', title: 'The Invention', desc: 'Charles Alderton creates the unique 23-flavor blend in Waco, Texas.' },
  { year: '1904', title: 'World\'s Fair', desc: 'Dr Pepper is introduced to almost 20 million people at the St. Louis World\'s Fair.' },
  { year: '1960', title: 'Diet Dr Pepper', desc: 'Introduced to meet the growing demand for low-calorie options without sacrificing flavor.' },
  { year: '2020', title: 'Cream Soda', desc: 'Dr Pepper & Cream Soda becomes an instant modern classic.' },
];

export default function Timeline() {
  return (
    <section className="py-32 bg-dp-black relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-20 text-center">Our <span className="text-dp-red">Story.</span></h2>
        
        <div className="relative border-l-2 border-dp-red/30 pl-8 md:pl-0 md:border-none space-y-12 md:space-y-24">
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-dp-red/30 -translate-x-1/2" />
          
          {MILESTONES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:ml-0 md:text-right' : 'md:pl-16 md:ml-auto md:text-left'}`}
            >
              {/* Dot */}
              <div className={`absolute top-0 w-4 h-4 rounded-full bg-dp-red shadow-[0_0_15px_#C8102E] -left-10 md:left-auto md:top-2 md:-translate-y-1/2 ${idx % 2 === 0 ? 'md:-right-[9px]' : 'md:-left-[9px]'}`} />
              
              <span className="text-dp-gold font-bold text-2xl md:text-4xl block mb-2">{item.year}</span>
              <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
              <p className="text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
