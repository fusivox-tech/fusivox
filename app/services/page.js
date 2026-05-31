"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, FadeIn, StaggerChildren } from "@/components/ui/ScrollAnimation";
import { 
  ArrowRight, 
  Check, 
  Zap, 
  Shield, 
  Users, 
  Clock,
  Sparkles,
  Code,
  Smartphone,
  Layout,
  Database,
  BarChart,
  Mail,
  Bell,
  Settings,
  Globe,
  ShoppingCart,
  Calendar,
  Package,
  TrendingUp,
  Award,
  Star
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Web Applications",
    subtitle: "Powerful, scalable web apps that grow with your business.",
    description: "Custom web applications designed to handle complex business logic, user management, and data processing with ease.",
    idealFor: ["Customer portals", "Dashboards", "Booking platforms", "E-Commerce Store"],
    solutions: [
      "Authentication & user management",
      "Payment integration",
      "Admin panels",
      "API development",
      "Real-time analytics",
      "Email & push notifications"
    ],
    icon: Zap,
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    color: "blue",
    features: [
      { name: "Scalable Architecture", icon: Database },
      { name: "Real-time Updates", icon: BarChart },
      { name: "API First Design", icon: Code }
    ]
  },
  {
    title: "Business Websites",
    subtitle: "Professional websites that build trust and drive conversions.",
    description: "Modern, responsive websites that showcase your brand and convert visitors into customers.",
    idealFor: ["Company websites", "Landing pages", "Portfolio sites", "Brand showcases"],
    solutions: [
      "Responsive design",
      "SEO optimization",
      "Content management",
      "Contact forms",
      "Analytics setup",
      "Fast loading"
    ],
    icon: Shield,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    color: "purple",
    features: [
      { name: "SEO Optimized", icon: TrendingUp },
      { name: "CMS Integration", icon: Settings },
      { name: "Analytics Ready", icon: BarChart }
    ]
  },
  {
    title: "Mobile Apps",
    subtitle: "Native mobile experiences for iOS and Android.",
    description: "High-performance mobile apps that provide seamless user experiences across all devices.",
    idealFor: ["iOS apps", "Android apps", "Cross-platform solutions", "Mobile-first products"],
    solutions: [
      "Native performance",
      "Offline support",
      "Push notifications",
      "App store deployment",
      "Analytics integration",
      "Regular updates"
    ],
    icon: Smartphone,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    color: "green",
    features: [
      { name: "Offline First", icon: Package },
      { name: "Push Notifications", icon: Bell },
      { name: "App Store Ready", icon: Award }
    ]
  },
  {
    title: "Internal Tools",
    subtitle: "Custom systems that streamline your operations.",
    description: "Powerful internal tools that automate workflows and improve team productivity.",
    idealFor: ["Booking systems", "Inventory management", "Automation tools", "Staff dashboards"],
    solutions: [
      "Custom workflows",
      "Data visualization",
      "Role-based access",
      "Report generation",
      "Third-party integrations",
      "Automation rules"
    ],
    icon: Settings,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    color: "orange",
    features: [
      { name: "Workflow Automation", icon: Zap },
      { name: "Role Management", icon: Users },
      { name: "Data Insights", icon: BarChart }
    ]
  }
];

const process = [
  { step: "Discovery", description: "We learn about your business and goals", icon: Sparkles },
  { step: "Planning", description: "Map out features and timeline", icon: Calendar },
  { step: "Design", description: "Create intuitive user interfaces", icon: Layout },
  { step: "Development", description: "Build and test your solution", icon: Code },
  { step: "Launch", description: "Deploy and monitor performance", icon: Rocket },
  { step: "Support", description: "Ongoing maintenance and updates", icon: Shield }
];

import { Rocket } from "lucide-react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="h-screen overflow-y-auto scrollbar-hide">
      <Navbar />
      <main className="bg-white relative text-[#0B1020]">
        
        {/* Hero Section - Redesigned */}
        <section className="relative pt-12 pb-6 overflow-hidden">
          
          <Container>
            <FadeInUp>
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-[#5B5CF0]" />
                  <span className="text-sm font-medium text-[#5B5CF0]">Our Services</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-[#0B1020] to-[#5B5CF0] bg-clip-text text-transparent">
                  Software should make business easier, not more complicated.
                </h1>
                <p className="mt-6 text-base md:text-lg text-black/60 leading-relaxed max-w-2xl">
                  At Fusivox, we build digital products that actually solve problems. 
                  No technical jargon. No overcomplicated solutions. Just clean, 
                  reliable software that helps your business move forward.
                </p>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Services Grid - Redesigned */}
        <section className="py-6 pt-2">
          <Container>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={service.title} delay={index * 0.1}>
                    <div className="group relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5B5CF0] to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl -z-10" />
                      
                      <div className="relative bg-white rounded-2xl border border-black/5 hover:border-[#5B5CF0]/20 transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col overflow-hidden">
                        
                        <div className="p-6 md:p-8 flex-1">
                          <div className="flex items-center gap-5 mb-5">
                          {/* Icon */}
                          <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h2 className="text-2xl font-black mb-0">{service.title}</h2>
                          </div>
                          
                          <p className="text-sm text-black/70 mb-3">{service.subtitle}</p>
                          <p className="text-sm text-black/60 leading-relaxed mb-6">{service.description}</p>
                          
                          {/* Features Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {service.features.map((feature) => {
                              const FeatureIcon = feature.icon;
                              return (
                                <span key={feature.name} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-lg text-xs">
                                  <FeatureIcon className="w-3 h-3 text-[#5B5CF0]" />
                                  {feature.name}
                                </span>
                              );
                            })}
                          </div>
                          
                          {/* Ideal For */}
                          <div className="mb-6">
                            <p className="text-xs font-semibold text-[#5B5CF0] mb-3 flex items-center gap-2">
                              <Users className="w-3 h-3" />
                              IDEAL FOR
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {service.idealFor.map((item) => (
                                <span key={item} className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-xs font-medium">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Solutions List */}
                          <div className="mb-6">
                            <p className="text-xs font-semibold text-[#5B5CF0] mb-3 flex items-center gap-2">
                              <Check className="w-3 h-3" />
                              WHAT'S INCLUDED
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              {service.solutions.map((solution) => (
                                <div key={solution} className="flex items-center gap-2">
                                  <Check className="w-3 h-3 text-[#5B5CF0] shrink-0" />
                                  <span className="text-xs text-black/70">{solution}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <Link 
                            href="/contact"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B5CF0] group-hover:gap-3 transition-all"
                          >
                            Get a quote
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Process Section - New */}
        <section className="py-10 bg-gradient-to-br from-[#FAFBFF] to-white">
          <Container>
            <FadeInUp className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-4">
                <Clock className="w-4 h-4 text-[#5B5CF0]" />
                <span className="text-sm font-medium text-[#5B5CF0]">Our Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#0B1020] to-[#5B5CF0] bg-clip-text text-transparent">
                How we bring your ideas to life
              </h2>
              <p className="mt-4 text-black/60 max-w-2xl mx-auto">
                A transparent, collaborative process that ensures your project's success
              </p>
            </FadeInUp>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <FadeIn key={step.step} delay={index * 0.1}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5B5CF0] to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />
                      <div className="relative bg-white rounded-2xl p-6 border border-black/5 group-hover:border-[#5B5CF0]/20 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#5B5CF0]/10 to-[#7B7CF0]/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[#5B5CF0]" />
                          </div>
                          <div className="text-2xl font-bold text-black/10">0{index + 1}</div>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{step.step}</h3>
                        <p className="text-sm text-black/60">{step.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Why Choose Us Section - New */}
        <section className="py-10">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-4">
                    <Star className="w-4 h-4 text-[#5B5CF0]" />
                    <span className="text-sm font-medium text-[#5B5CF0]">Why Choose Us</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4">
                    We don't just write code — we solve problems
                  </h2>
                  <p className="text-black/60 leading-relaxed mb-6">
                    With years of experience across various industries, we understand 
                    what makes software successful. Our focus is on delivering solutions 
                    that drive real business results.
                  </p>
                  <div className="space-y-3">
                    {[
                      "10+ years combined experience",
                      "50+ successful projects delivered",
                      "98% client satisfaction rate",
                      "24/7 dedicated support"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-[#5B5CF0]" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5B5CF0] to-purple-600 rounded-3xl opacity-20 blur-2xl" />
                  <div className="relative bg-gradient-to-br from-[#FAFBFF] to-white rounded-3xl p-8 border border-black/5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Award className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-black">98%</div>
                        <div className="text-xs text-black/60">Client Satisfaction</div>
                      </div>
                    </div>
                    <blockquote className="text-lg italic text-black/70 leading-relaxed">
                      "Fusivox transformed our business with their web application. 
                      The team was professional, communicative, and delivered beyond our expectations."
                    </blockquote>
                    <div className="mt-4 pt-4 border-t border-black/5">
                      <div className="font-semibold">Michael Adebayo</div>
                      <div className="text-xs text-black/60">CEO, TechStart Nigeria</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* CTA Section - Redesigned */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#0B1020] to-[#1a1f35] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#5B5CF0]/20 to-purple-500/20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B5CF0] rounded-full filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
          
          <Container>
            <FadeInUp className="text-center max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Get Started</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                Not sure what you need?
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
                Tell us about your project and we'll help you figure out the right approach. 
                No pressure, just an honest conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10">
                <Link 
                  href="/contact"
                  className="group h-12 md:h-14 px-8 md:px-10 rounded-xl bg-gradient-to-r from-[#5B5CF0] to-[#7B7CF0] text-white text-sm md:text-base font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Talk to us
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