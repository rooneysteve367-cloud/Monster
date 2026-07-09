import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Basic title formatting
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');

  return (
    <div className="min-h-screen bg-dp-black flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-dp-dark/20 to-dp-black z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dp-red/10 rounded-full mix-blend-screen filter blur-[100px] z-0" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-dp-gold font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-6">
            Coming Soon
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 capitalize font-serif">
            {title}
          </h1>
          <p className="text-xl text-white/70 font-light mb-12">
            We're crafting an extraordinary experience for this section. Check back soon for exclusive content and updates.
          </p>
          
          <a href="/" className="inline-block bg-dp-red hover:bg-dp-burgundy text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 active:scale-95">
            Return to Home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
