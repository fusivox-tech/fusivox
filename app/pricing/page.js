"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, StaggerChildren, ScaleOnScroll, FadeIn } from "@/components/ui/ScrollAnimation";
import { 
  ArrowRight, 
  Check, 
  HelpCircle, 
  Sparkles,
  Zap,
  Rocket,
  Shield,
  Star,
  TrendingUp,
  Layers,
  Settings,
  Database,
  Globe,
  Smartphone,
  Palette,
  Clock,
  Award,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    color: "amber"
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
    icon: Globe,
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    color: "blue"
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
    icon: Layers,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    color: "purple"
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
    icon: Smartphone,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    color: "green"
  }
];

const factors = [
  { factor: "Number of pages or screens", icon: Layers },
  { factor: "User authentication requirements", icon: Shield },
  { factor: "Payment system integration", icon: CreditCard },
  { factor: "Admin dashboard complexity", icon: Settings },
  { factor: "Third-party API connections", icon: Database },
  { factor: "Custom features and logic", icon: Sparkles },
  { factor: "Data reporting and analytics", icon: TrendingUp },
  { factor: "Timeline and urgency", icon: Clock }
];

// Need to import CreditCard
import { CreditCard } from "lucide-react";

const benefits = [
  { title: "No hidden fees", description: "Transparent pricing with no surprises", icon: Shield },
  { title: "Fixed price contracts", description: "Pay exactly what we agree on", icon: Briefcase },
  { title: "Free consultation", description: "Initial meeting to understand your needs", icon: Sparkles },
  { title: "Post-launch support", description: "We're here even after launch", icon: Award }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("one-time");

  return (
    <div className="h-screen overflow-y-auto scrollbar-hide">
      <Navbar />
      <main className="bg-white relative text-[#0B1020]">
        
        {/* Hero Section - Redesigned */}
        <section className="relative py-12 overflow-hidden">
          
          <Container>
            <FadeInUp>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-[#5B5CF0]" />
                  <span className="text-sm font-medium text-[#5B5CF0]">Transparent Pricing</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-[#0B1020] to-[#5B5CF0] bg-clip-text text-transparent">
                  Clear pricing. No surprises.
                </h1>
                <p className="mt-6 text-base md:text-lg text-black/60 leading-relaxed max-w-2xl mx-auto">
                  Every project is different. Here's a general idea of what to expect,
                  but we'll give you an exact quote after understanding your needs.
                </p>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Benefits Bar - New */}
        <section className="py-8 border-y border-black/5 bg-gradient-to-r from-gray-50 to-white">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <FadeIn key={benefit.title} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#5B5CF0]/10 mb-2">
                        <Icon className="w-4 h-4 text-[#5B5CF0]" />
                      </div>
                      <p className="text-xs md:text-sm font-semibold">{benefit.title}</p>
                      <p className="text-[10px] md:text-xs text-black/50">{benefit.description}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Pricing Cards - Redesigned */}
        <section className="py-20 md:py-28">
          <Container>
            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {pricingTiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.name}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                      tier.popular ? "lg:scale-105" : ""
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-gradient-to-r from-[#5B5CF0] to-[#7B7CF0] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`relative bg-white border-2 ${tier.popular ? 'border-[#5B5CF0]' : 'border-black/5'} rounded-2xl p-6 h-full flex flex-col`}>
                      
                      <h3 className="text-xl font-black mb-2">{tier.name}</h3>
                      
                      <div className="mt-2">
                        <span className="text-3xl font-black">{tier.startingFrom}</span>
                        <span className="text-black/40 text-sm">+</span>
                      </div>
                      <p className="mt-2 text-sm text-black/60 leading-relaxed">{tier.description}</p>
                      
                      <div className="mt-6 pt-6 border-t border-black/5">
                        <div className="flex items-start gap-2 mb-3">
                          <Briefcase className="w-4 h-4 text-[#5B5CF0] mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold mb-1">Ideal for:</p>
                            <p className="text-xs text-black/60 leading-relaxed">{tier.idealFor}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex-1">
                        <p className="text-xs font-semibold mb-3 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#5B5CF0]" />
                          What's included:
                        </p>
                        <div className="space-y-2">
                          {tier.includes.slice(0, 5).map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-black/70">
                              <Check className="w-3 h-3 text-[#5B5CF0] shrink-0" />
                              {item}
                            </div>
                          ))}
                          {tier.includes.length > 5 && (
                            <div className="text-xs text-[#5B5CF0] font-medium pl-5">
                              +{tier.includes.length - 5} more features
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <Link 
                        href="/contact"
                        className={`mt-8 py-3 px-6 w-full rounded-xl font-semibold text-center transition-all duration-300 ${
                          tier.popular
                            ? "bg-gradient-to-r from-[#5B5CF0] to-[#7B7CF0] text-white hover:shadow-lg"
                            : "bg-[#0B1020] text-white hover:bg-[#1a1f35]"
                        }`}
                      >
                        Get exact quote
                      </Link>
                    </div>
                  </div>
                );
              })}
            </StaggerChildren>
          </Container>
        </section>

        {/* What Affects Pricing - Redesigned */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#FAFBFF] to-white">
          <Container>
            <ScaleOnScroll>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-4">
                    <HelpCircle className="w-4 h-4 text-[#5B5CF0]" />
                    <span className="text-sm font-medium text-[#5B5CF0]">Pricing Factors</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#0B1020] to-[#5B5CF0] bg-clip-text text-transparent">
                    What affects pricing?
                  </h2>
                  <p className="mt-4 text-black/60 max-w-2xl mx-auto">
                    Every project is unique. Here are the main factors that determine the final cost
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {factors.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <FadeIn key={item.factor} delay={index * 0.05}>
                        <div className="group bg-white rounded-xl p-4 border border-black/5 hover:border-[#5B5CF0]/20 hover:shadow-lg transition-all duration-300 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5B5CF0]/10 to-[#7B7CF0]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4 text-[#5B5CF0]" />
                          </div>
                          <span className="text-sm font-medium">{item.factor}</span>
                        </div>
                      </FadeIn>
                    );
                  })}
                </div>
              </div>
            </ScaleOnScroll>
          </Container>
        </section>

        {/* Custom Quote Section - Redesigned */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#0B1020] to-[#1a1f35] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#5B5CF0]/20 to-purple-500/20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B5CF0] rounded-full filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
          
          <Container>
            <FadeInUp className="text-center max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Custom Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                Need something completely custom?
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
                We also build custom solutions for unique business needs. Let's talk about what you're trying to achieve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10">
                <Link 
                  href="/contact"
                  className="group h-12 md:h-14 px-8 md:px-10 rounded-xl bg-gradient-to-r from-[#5B5CF0] to-[#7B7CF0] text-white text-sm md:text-base font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Request custom quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/portfolio"
                  className="h-12 md:h-14 px-8 md:px-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm md:text-base font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  View our work
                </Link>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* FAQ Teaser - New */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-6">
                  <HelpCircle className="w-4 h-4 text-[#5B5CF0]" />
                  <span className="text-sm font-medium text-[#5B5CF0]">Questions?</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Still have questions about pricing?</h3>
                <p className="text-black/60 mb-6">
                  We're here to help you understand what's best for your project
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#5B5CF0] font-semibold hover:gap-3 transition-all"
                >
                  Contact us for a detailed breakdown
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeInUp>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}