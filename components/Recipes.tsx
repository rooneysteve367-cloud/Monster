'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const RECIPES = [
  { name: 'Dr Pepper Float', type: 'Dessert', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
  { name: 'Spicy Cherry BBQ', type: 'Savory', img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=600&auto=format&fit=crop' },
  { name: 'Dirty Dr Pepper', type: 'Mocktail', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
];

export default function Recipes() {
  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-4">Cravers <br/><span className="text-dp-red">Kitchen.</span></h2>
            <p className="text-dp-cream/60 max-w-md text-sm">Elevate your culinary creations with the unique flavor profile of Dr Pepper.</p>
          </div>
          <button className="text-[11px] uppercase tracking-[0.2em] font-semibold border-b border-dp-red pb-1 hover:text-dp-red transition-colors">
            All Recipes
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {RECIPES.map((recipe, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <Image
                  src={recipe.img}
                  alt={recipe.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20 bg-dp-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {recipe.type}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold group-hover:text-dp-gold transition-colors">{recipe.name}</h3>
              <p className="text-dp-red mt-2 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">
                View Recipe &rarr;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
