'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const PRODUCTS = [
  {
    id: 'original',
    name: 'Dr Pepper Original',
    description: 'The classic 23-flavor blend that started it all.',
    image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=600&auto=format&fit=crop',
    color: 'from-dp-dark to-dp-burgundy',
  },
  {
    id: 'zero',
    name: 'Zero Sugar',
    description: 'All the 23 flavors you love, with zero sugar.',
    image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=600&auto=format&fit=crop',
    color: 'from-zinc-900 to-black',
  },
  {
    id: 'cherry',
    name: 'Cherry',
    description: 'A smooth, sweet kiss of cherry added to the original.',
    image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=600&auto=format&fit=crop',
    color: 'from-red-900 to-dp-dark',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-dp-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-4">Choose Your <br/><span className="text-dp-red">Flavor.</span></h2>
            <p className="text-dp-cream/60 text-sm max-w-md">Discover our lineup of unique beverages, each crafted for maximum refreshment.</p>
          </div>
          <button className="text-[11px] uppercase tracking-[0.2em] font-semibold border-b border-dp-red pb-1 hover:text-dp-red transition-colors">
            View All Products
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br ${product.color} p-8 flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-4 shadow-2xl`}>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{product.description}</p>
                </div>
                
                <div className="relative h-64 w-full mt-8 flex items-center justify-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transform group-hover:scale-110 transition-transform duration-700 brightness-110 contrast-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <button className="absolute bottom-8 left-8 right-8 bg-white text-black py-3 rounded-full font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
