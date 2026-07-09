'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Products', href: '/products' },
  { name: 'Flavors', href: '/flavors' },
  { name: 'Our Story', href: '/story' },
  { name: 'Rewards', href: '/rewards' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dp-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 relative group">
          <span className="font-sans text-3xl font-black tracking-tighter text-dp-cream uppercase">
            Dr <span className="text-dp-red group-hover:text-dp-gold transition-colors duration-300">Pepper</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-semibold opacity-70 hover:opacity-100 hover:text-dp-gold transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/locator" className="text-[11px] uppercase tracking-[0.2em] font-semibold border-b border-dp-cream pb-1 opacity-70 hover:opacity-100 transition-all">
            Store Locator
          </Link>
          <Link
            href="/shop"
            className="bg-dp-red px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#A31626] transition-colors shadow-lg shadow-black/50 hover:scale-105 active:scale-95"
          >
            Buy Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-dp-black pt-24 px-6 flex flex-col space-y-8"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-serif text-3xl font-medium text-white hover:text-dp-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-white/10 my-4" />
              <Link
                href="/locator"
                className="font-serif text-xl text-white/80 flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MapPin className="w-6 h-6" /> Find a Store
              </Link>
              <Link
                href="/shop"
                className="bg-dp-red text-center py-4 rounded-full text-lg font-bold mt-auto mb-12"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
