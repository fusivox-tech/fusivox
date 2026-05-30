"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, StaggerChildren, ScaleOnScroll } from "@/components/ui/ScrollAnimation";
import { openWhatsApp } from "@/utils/whatsapp";
import { ArrowRight, Check, HelpCircle } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Landing Pages",
    startingFrom: "₦100,000",
    description: "High-converting landing pages designed to capture leads and drive sales.",
    idealFor: "Product launches, marketing campaigns, event registration, startups",
    includes: [
      "Custom design",
      "Mobile responsive",
      "Lead capture forms",
      "Analytics tracking",
      "A/B testing ready",
      "1 month support",
      "Fast loading (5s target)"
    ],
    gradient: "from-amber-50 to-orange-50"
  },
  {
    name: "Business Websites",
    startingFrom: "₦300,000",
    description: "For businesses that need a professional online presence.",
    idealFor: "Small to medium businesses, brands, portfolios",
    includes: [
      "Custom design",
      "Multiple Pages",
      "Responsive layout",
      "Contact forms",
      "Basic SEO setup",
      "Analytics integration",
      "3 months support"
    ],
    gradient: "from-blue-50 to-indigo-50"
  },
  {
    name: "Full-Stack Web Apps",
    startingFrom: "₦500,000",
    description: "For businesses that need more than a normal website.",
    idealFor: "Dashboards, customer portals, booking platforms, e-commerce stores",
    includes: [
      "User authentication",
      "Database integration",
      "Responsive Layout",
      "API development",
      "Payment integration",
      "6 months support"
    ],
    gradient: "from-purple-50 to-pink-50"
  },
  {
    name: "Mobile Apps",
    startingFrom: "₦1,200,000",
    description: "Native mobile experiences for iOS and Android.",
    idealFor: "iOS apps, Android apps, cross-platform solutions",
    includes: [
      "Native performance",
      "Push notifications",
      "Offline support",
      "App store deployment",
      "Analytics",
      "6 months support"
    ],
    gradient: "from-green-50 to-emerald-50"
  }
];

const factors = [
  "Number of pages or screens",
  "User authentication requirements",
  "Payment system integration",
  "Admin dashboard complexity",
  "Third-party API connections",
  "Custom features and logic",
  "Data reporting and analytics",
  "Timeline and urgency"
];

export default function PricingPage() {
  return (
    <div className="h-screen overflow-y-auto srollbar-hide">
      <Navbar />
      <main className="bg-white relative text-[#0B1020]">
        {/* Hero Section */}
        <section className="pt-8 pb-12 md:pb-16">
          <Container>
            <FadeInUp>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2]">
                  Clear pricing. No surprises.
                </h1>
                <p className="mt-4 md:mt-6 text-sm md:text-base text-black/60 leading-relaxed">
                  Every project is different. Here's a general idea of what to expect,
                  but we'll give you an exact quote after understanding your needs.
                </p>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Pricing Cards */}
        <section className="pb-16 md:pb-24">
          <Container>
            <StaggerChildren className="grid md:grid-cols-2 gap-6 md:gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl md:rounded-3xl border p-6 md:p-8 bg-white transition-all duration-300 hover:shadow-xl ${
                    tier.popular 
                      ? "border-[#5B5CF0] shadow-lg shadow-indigo-500/10" 
                      : "border-black/5"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 bg-[#5B5CF0] text-white text-[11px] md:text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl md:text-2xl font-black">{tier.name}</h3>
                  <div className="mt-3 md:mt-4">
                    <span className="text-2xl md:text-3xl font-black">{tier.startingFrom}</span>
                    <span className="text-black/40 text-sm">+</span>
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-black/60">{tier.description}</p>
                  
                  <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-black/5">
                    <p className="text-xs md:text-sm font-semibold mb-2 md:mb-3">Ideal for:</p>
                    <p className="text-xs md:text-sm text-black/60">{tier.idealFor}</p>
                  </div>
                  
                  <div className="mt-5 md:mt-6">
                    <p className="text-xs md:text-sm font-semibold mb-2 md:mb-3">What's included:</p>
                    <div className="space-y-2">
                      {tier.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs md:text-sm text-black/70">
                          <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#5B5CF0] shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="mt-6 md:mt-8 p-3 px-6 w-full h-10 md:h-12 rounded-xl bg-[#0B1020] text-white text-sm md:text-base font-semibold hover:bg-[#1a1f35] transition-colors"
                  >
                    Get exact quote
                  </Link>
                </div>
              ))}
            </StaggerChildren>
          </Container>
        </section>

        {/* Factors Section */}
        <section className="py-16 md:py-20 bg-[#FAFBFF]">
          <Container>
            <ScaleOnScroll>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-2 md:gap-3 justify-center mb-4 md:mb-6">
                  <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-[#5B5CF0]" />
                  <h2 className="text-xl md:text-2xl font-black text-center">What affects pricing?</h2>
                </div>
                <p className="text-center text-sm md:text-base text-black/60 mb-6 md:mb-8">
                  Every project is unique. Here are the main factors that determine the final cost:
                </p>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  {factors.map((factor) => (
                    <div key={factor} className="flex items-center gap-2 md:gap-3 bg-white p-3 md:p-4 rounded-xl border border-black/5">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#5B5CF0]" />
                      <span className="text-xs md:text-sm">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleOnScroll>
          </Container>
        </section>

        {/* Custom Quote Section */}
        <section className="py-16 md:py-20">
          <Container>
            <FadeInUp className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black">Need something completely custom?</h2>
              <p className="mt-2 md:mt-4 text-sm md:text-base text-black/60">
                We also build custom solutions for unique business needs. Let's talk about what you're trying to achieve.
              </p>
              <Link 
                href="/contact"
                className="mt-5 md:mt-8 h-11 md:h-12 px-6 md:px-8 rounded-xl bg-[#5B5CF0] text-white text-sm md:text-base font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2 md:gap-3"
              >
                Request custom quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInUp>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}