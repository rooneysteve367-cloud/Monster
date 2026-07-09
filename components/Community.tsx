'use client';

import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

const IMAGES = [
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1622227922682-56c92e5052cb?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527004013197-933c4bcc6116?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=400&auto=format&fit=crop',
];

export default function Community() {
  return (
    <section className="py-24 bg-dp-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <Instagram className="w-10 h-10 text-dp-red mb-6" />
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-4">Join The <span className="text-dp-red">Cult.</span></h2>
          <p className="text-dp-cream/60 max-w-lg text-sm">Tag @drpepper to be featured in our official gallery.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt="Community Post"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dp-red/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center mix-blend-multiply" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
