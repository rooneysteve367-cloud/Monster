import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandStatement from '@/components/BrandStatement';
import FeaturedProducts from '@/components/FeaturedProducts';
import WhyChoose from '@/components/WhyChoose';
import FlavorExperience from '@/components/FlavorExperience';
import Timeline from '@/components/Timeline';
import Recipes from '@/components/Recipes';
import Community from '@/components/Community';
import Rewards from '@/components/Rewards';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import StoreLocator from '@/components/StoreLocator';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dp-black">
      <Navbar />
      <Hero />
      <BrandStatement />
      <FeaturedProducts />
      <WhyChoose />
      <FlavorExperience />
      <Timeline />
      <Recipes />
      <Community />
      <Rewards />
      <Testimonials />
      <Newsletter />
      <StoreLocator />
      <FAQ />
      <Footer />
    </main>
  );
}
