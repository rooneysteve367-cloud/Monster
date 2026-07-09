import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-dp-red to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block font-sans text-3xl font-black tracking-tighter uppercase text-dp-cream mb-6">
              Dr <span className="text-dp-red">Pepper</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
              The original 23-flavor blend. Crafted for those who demand more from their beverage. Accept no substitutes.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-dp-red flex items-center justify-center transition-colors">
                  <div className="w-4 h-4 bg-white/50 rounded-sm" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-dp-gold">Products</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/products" className="hover:text-white transition-colors">All Flavors</Link></li>
              <li><Link href="/products/original" className="hover:text-white transition-colors">Original</Link></li>
              <li><Link href="/products/zero" className="hover:text-white transition-colors">Zero Sugar</Link></li>
              <li><Link href="/products/cherry" className="hover:text-white transition-colors">Cherry</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-dp-gold">Explore</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/story" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/recipes" className="hover:text-white transition-colors">Recipes</Link></li>
              <li><Link href="/rewards" className="hover:text-white transition-colors">Pepper Perks</Link></li>
              <li><Link href="/locator" className="hover:text-white transition-colors">Store Locator</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-dp-gold">Support</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Dr Pepper/Seven Up, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
            <Link href="/sustainability" className="hover:text-white">Sustainability</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
