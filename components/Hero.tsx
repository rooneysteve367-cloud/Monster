'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dp-black pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Base dark red gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dp-dark/80 via-dp-black to-dp-black z-0" />
        
        {/* Animated blurred blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dp-red/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-dp-burgundy/40 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-8 items-center h-full">
        {/* Text Content */}
        <div className="text-center lg:text-left pt-12 lg:pt-0 lg:col-span-6 z-20 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[112px] font-black leading-[0.85] tracking-tighter uppercase italic mb-8"
          >
            There is <br className="hidden md:block" />
            only <span className="text-dp-red">One.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-sm text-dp-cream/60 mb-10 max-w-sm mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            Experience the original 23-flavor blend. Unmistakable. Unapologetic. Uniquely Dr Pepper.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button className="bg-dp-red px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#A31626] transition-colors shadow-lg shadow-black/50 w-full sm:w-auto">
              Buy Now
            </button>
            <button className="text-[11px] uppercase tracking-[0.2em] font-semibold border-b border-dp-cream pb-1 opacity-70 hover:opacity-100 transition-all w-full sm:w-auto mt-4 sm:mt-0">
              Explore Flavors
            </button>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 50 }}
          className="relative h-[500px] md:h-[700px] w-full animate-float lg:col-span-6 flex items-center justify-center"
        >
          {/* Background Glow */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#711F25] rounded-full blur-[120px] opacity-40 z-0"></div>
          
          {/* Can Image Placeholder */}
          <div className="relative z-10 w-[220px] h-[400px] md:w-80 md:h-[30rem]">
            {/* Floating Product Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/60 blur-3xl rounded-[100%] z-0"></div>
            
            <Image 
              src="https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=1000&auto=format&fit=crop" 
              alt="Dr Pepper Can" 
              fill 
              className="object-contain drop-shadow-2xl brightness-110 contrast-125 z-10"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
