import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from 'next/dynamic';

import Hero from "@/components/sections/Hero";
const TrustedSection = dynamic(() => import('@/components/sections/TrustedSection'));
const ServicesGrid = dynamic(() => import('@/components/sections/ServicesGrid'));
const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection'));
const FeaturesSection = dynamic(() => import('@/components/sections/FeaturesSection'));
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'));
const CTASection = dynamic(() => import('@/components/sections/CTASection'));

export default function HomePage() {
  return (
    <div className="relative">
    <Navbar />
    <main className="bg-white text-[#0B1020] overflow-hidden">

      <Hero />
      <TrustedSection />
      <ServicesGrid />
      <FeaturesSection />
      <PortfolioSection />
      <ProcessSection />
      <CTASection />

      <Footer />
    </main>
    </div>
  );
}