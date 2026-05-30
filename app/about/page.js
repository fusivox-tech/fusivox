"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, FadeIn, StaggerChildren } from "@/components/ui/ScrollAnimation";
import { 
  ArrowRight, 
  Code, 
  Shield, 
  MessageCircle, 
  TrendingUp,
  Sparkles,
  Rocket,
  Eye,
  Heart,
  Target,
  Zap,
  Star,
  CheckCircle,
  Users,
  Clock,
  Award
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Code,
    title: "Clean systems",
    description: "Messy code becomes expensive later. We build maintainable systems that grow with your business.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Built to last",
    description: "We don't build throwaway products. Everything we create is designed for the long term.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    description: "No confusion. No silences. You'll always know where your project stands.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Business outcomes",
    description: "We care about results, not just features. Your success is our success.",
    color: "from-orange-500 to-red-500"
  }
];

const stats = [
  { number: "50+", label: "Projects Delivered", icon: Rocket },
  { number: "98%", label: "Client Satisfaction", icon: Heart },
  { number: "24/7", label: "Support Available", icon: Clock },
  { number: "5+", label: "Years Experience", icon: Award }
];

export default function AboutPage() {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide">
      <Navbar />
      <main className="bg-white relative text-[#0B1020]">
        
        {/* Hero Section - Redesigned */}
        <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-50" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B5CF0] rounded-full filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse" />
          
          <Container>
            <FadeInUp>
              <div className="max-w-4xl mx-auto text-center relative">
                <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-[#5B5CF0]" />
                  <span className="text-sm font-medium text-[#5B5CF0]">Our Story</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-[#0B1020] via-[#5B5CF0] to-[#7B7CF0] bg-clip-text text-transparent">
                  Building digital products that actually work
                </h1>
                <p className="mt-6 text-base md:text-lg text-black/60 leading-relaxed max-w-2xl mx-auto">
                  Fusivox exists to help businesses build better digital products. 
                  No fluff. No complexity. Just reliable, maintainable software that drives real results.
                </p>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Stats Section - New */}
        <section className="py-12 md:py-16 border-y border-black/5 bg-gradient-to-r from-gray-50 to-white">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <FadeIn key={stat.label} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5B5CF0]/10 mb-3">
                        <Icon className="w-5 h-5 text-[#5B5CF0]" />
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-[#0B1020]">{stat.number}</div>
                      <div className="text-xs md:text-sm text-black/60 mt-1">{stat.label}</div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Story & Mission Section - Redesigned */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start max-w-6xl mx-auto">
              <FadeIn>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#5B5CF0]/10 rounded-2xl -z-0" />
                  <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-black/5 shadow-xl">
                    <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-3 py-1 mb-4">
                      <Target className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-semibold text-red-500">The Problem</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black mb-4">Why we started</h2>
                    <div className="space-y-4 text-black/70 leading-relaxed">
                      <p>
                        We've seen too many businesses struggle with bad software. 
                        Expensive projects that never launched. Code that fell apart. 
                        Developers who disappeared. Solutions that made things worse, not better.
                      </p>
                      <p className="font-medium text-[#0B1020]">
                        That's why Fusivox exists. We believe software should make 
                        business easier, not more complicated.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-2xl -z-0" />
                  <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-black/5 shadow-xl">
                    <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-3 py-1 mb-4">
                      <Heart className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-semibold text-green-500">Our Belief</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black mb-4">What we believe</h2>
                    <div className="space-y-4 text-black/70 leading-relaxed">
                      <p>
                        Great software starts with understanding the problem, not 
                        jumping to solutions. We take time to learn your business, 
                        your users, and your goals before writing a single line of code.
                      </p>
                      <p>
                        We value clarity over complexity, communication over contracts, 
                        and results over features.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Values Section - Redesigned */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#FAFBFF] to-white">
          <Container>
            <FadeInUp className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4 text-[#5B5CF0]" />
                <span className="text-sm font-medium text-[#5B5CF0]">Our Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#0B1020] to-[#5B5CF0] bg-clip-text text-transparent">
                How we approach every project
              </h2>
              <p className="mt-4 text-black/60 max-w-2xl mx-auto">
                Four principles that guide everything we do
              </p>
            </FadeInUp>
            
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />
                    <div className="relative bg-white rounded-2xl p-6 border border-black/5 hover:border-[#5B5CF0]/20 transition-all duration-300 hover:shadow-xl text-center h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mt-4 mb-2">{value.title}</h3>
                      <p className="text-sm text-black/60 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </StaggerChildren>
          </Container>
        </section>

        {/* Philosophy Section - Redesigned */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="max-w-5xl mx-auto">
              <FadeInUp className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-4">
                  <Zap className="w-4 h-4 text-[#5B5CF0]" />
                  <span className="text-sm font-medium text-[#5B5CF0]">Our Philosophy</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#0B1020] to-[#5B5CF0] bg-clip-text text-transparent">
                  Development philosophy
                </h2>
                <p className="mt-4 text-black/60">
                  The principles that make us different
                </p>
              </FadeInUp>
              
              <div className="space-y-6">
                <FadeIn>
                  <div className="group bg-gradient-to-r from-white to-gray-50 border border-black/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#5B5CF0]/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">We speak business first, technology second</h3>
                        <p className="text-black/70 leading-relaxed">
                          You don't need to understand the technical details. We explain everything 
                          in plain language, focusing on outcomes and value, not frameworks and libraries.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <div className="group bg-gradient-to-r from-white to-gray-50 border border-black/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#5B5CF0]/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                        <Shield className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Quality isn't optional</h3>
                        <p className="text-black/70 leading-relaxed">
                          We follow modern standards, write clean code, test thoroughly, and build 
                          systems that won't break when your business grows. It takes more time upfront, 
                          but saves years of headaches.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="group bg-gradient-to-r from-white to-gray-50 border border-black/5 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#5B5CF0]/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                        <Eye className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">You're involved throughout</h3>
                        <p className="text-black/70 leading-relaxed">
                          No black boxes. No disappearing for weeks. We show you progress regularly, 
                          get your feedback, and adjust as needed. You're never left wondering what's happening.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Testimonial Section - New */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-6">
                  <MessageCircle className="w-4 h-4 text-[#5B5CF0]" />
                  <span className="text-sm font-medium text-[#5B5CF0]">Testimonials</span>
                </div>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 text-8xl text-[#5B5CF0]/10 font-serif">"</div>
                  <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-[#0B1020] relative z-10">
                    Working with Fusivox transformed how we think about software. 
                    They don't just write code — they solve real business problems.
                  </p>
                  <div className="mt-6">
                    <div className="font-bold text-[#0B1020]">Michael Adebayo</div>
                    <div className="text-sm text-black/60">CEO, TechStart Nigeria</div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </Container>
        </section>

        {/* CTA Section - Redesigned */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#0B1020] to-[#1a1f35] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#5B5CF0]/20 to-purple-500/20 animate-pulse" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B5CF0] rounded-full filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
          
          <Container>
            <FadeInUp className="text-center max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Get Started</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                Ready to build something solid?
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
                Let's talk about your project and see if we're a good fit. 
                No pressure, just an honest conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10">
                <Link 
                  href="/contact"
                  className="group h-12 md:h-14 px-8 md:px-10 rounded-xl bg-gradient-to-r from-[#5B5CF0] to-[#7B7CF0] text-white text-sm md:text-base font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Start a conversation
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
      </main>
      <Footer />
    </div>
  );
}