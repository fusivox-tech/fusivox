import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import TrustedSection from "@/components/sections/TrustedSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

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