"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, FadeIn, StaggerChildren } from "@/components/ui/ScrollAnimation";
import { openWhatsApp } from "@/utils/whatsapp";
import { ArrowRight, Code, Shield, MessageCircle, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Clean systems",
    description: "Messy code becomes expensive later. We build maintainable systems that grow with your business."
  },
  {
    icon: Shield,
    title: "Built to last",
    description: "We don't build throwaway products. Everything we create is designed for the long term."
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    description: "No confusion. No silences. You'll always know where your project stands."
  },
  {
    icon: TrendingUp,
    title: "Business outcomes",
    description: "We care about results, not just features. Your success is our success."
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#0B1020]">
        {/* Hero Section */}
        <section className="pt-8 pb-12 md:pb-16">
          <Container>
            <FadeInUp>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2]">
                  Fusivox exists to help businesses build better digital products.
                </h1>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Story Section */}
        <section className="pb-12 md:pb-16">
          <Container>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
              <FadeIn>
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-black">Why we started</h2>
                  <div className="space-y-3 md:space-y-4 text-sm md:text-base text-black/70 leading-relaxed">
                    <p>
                      We've seen too many businesses struggle with bad software. 
                      Expensive projects that never launched. Code that fell apart. 
                      Developers who disappeared. Solutions that made things worse, not better.
                    </p>
                    <p>
                      That's why Fusivox exists. We believe software should make 
                      business easier, not more complicated. It should be reliable, 
                      understandable, and actually useful.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-xl md:text-2xl font-black">What we believe</h2>
                  <div className="space-y-3 md:space-y-4 text-sm md:text-base text-black/70 leading-relaxed">
                    <p>
                      Great software starts with understanding the problem, not 
                      jumping to solutions. We take time to learn your business, 
                      your users, and your goals before writing a single line of code.
                    </p>
                    <p>
                      We value clarity over complexity, communication over contracts, 
                      and results over features. That's how we build lasting partnerships.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-[#FAFBFF]">
          <Container>
            <FadeInUp className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black">How we approach every project</h2>
            </FadeInUp>
            
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#5B5CF0]" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold mt-3 md:mt-4">{value.title}</h3>
                    <p className="mt-1 md:mt-2 text-xs md:text-sm text-black/60">{value.description}</p>
                  </div>
                );
              })}
            </StaggerChildren>
          </Container>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <FadeInUp className="text-center mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-black">Our development philosophy</h2>
              </FadeInUp>
              
              <div className="space-y-5 md:space-y-8">
                <FadeIn>
                  <div className="bg-white border border-black/5 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">We speak business first, technology second</h3>
                    <p className="text-sm md:text-base text-black/70 leading-relaxed">
                      You don't need to understand the technical details. We explain everything 
                      in plain language, focusing on outcomes and value, not frameworks and libraries.
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <div className="bg-white border border-black/5 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Quality isn't optional</h3>
                    <p className="text-sm md:text-base text-black/70 leading-relaxed">
                      We follow modern standards, write clean code, test thoroughly, and build 
                      systems that won't break when your business grows. It takes more time upfront, 
                      but saves years of headaches.
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="bg-white border border-black/5 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">You're involved throughout</h3>
                    <p className="text-sm md:text-base text-black/70 leading-relaxed">
                      No black boxes. No disappearing for weeks. We show you progress regularly, 
                      get your feedback, and adjust as needed. You're never left wondering what's happening.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#0B1020] to-[#1a1f35]">
          <Container>
            <FadeInUp className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white">Ready to build something solid?</h2>
              <p className="mt-2 md:mt-4 text-sm md:text-base text-white/60">
                Let's talk about your project and see if we're a good fit.
              </p>
              <button 
                onClick={() => openWhatsApp("Hi! I'd like to discuss a potential project with Fusivox.")}
                className="mt-5 md:mt-8 h-11 md:h-12 px-6 md:px-8 rounded-xl bg-[#5B5CF0] text-white text-sm md:text-base font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2 md:gap-3"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </button>
            </FadeInUp>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}