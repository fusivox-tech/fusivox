"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, FadeIn, StaggerChildren } from "@/components/ui/ScrollAnimation";
import { openWhatsApp } from "@/utils/whatsapp";
import { ArrowRight, Check, Zap, Shield, Users, Clock } from "lucide-react";

const services = [
  {
    title: "Web Applications",
    subtitle: "For businesses that need more than a normal website.",
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
    gradient: "from-blue-50 to-indigo-50"
  },
  {
    title: "Business Websites",
    subtitle: "Modern websites that make your business look credible and professional.",
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
    gradient: "from-purple-50 to-pink-50"
  },
  {
    title: "Mobile Apps",
    subtitle: "Mobile experiences built for speed, simplicity, and usability.",
    idealFor: ["iOS apps", "Android apps", "Cross-platform solutions", "Mobile-first products"],
    solutions: [
      "Native performance",
      "Offline support",
      "Push notifications",
      "App store deployment",
      "Analytics integration",
      "Regular updates"
    ],
    icon: Users,
    gradient: "from-green-50 to-emerald-50"
  },
  {
    title: "Internal Tools",
    subtitle: "Systems that help businesses work smarter internally.",
    idealFor: ["Booking systems", "Inventory management", "Automation tools", "Staff dashboards"],
    solutions: [
      "Custom workflows",
      "Data visualization",
      "Role-based access",
      "Report generation",
      "Third-party integrations",
      "Automation rules"
    ],
    icon: Clock,
    gradient: "from-orange-50 to-red-50"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#0B1020]">
        {/* Hero Section */}
        <section className="pt-8 pb-12 md:pb-20">
          <Container>
            <FadeInUp>
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2]">
                  Software should make business easier, not more complicated.
                </h1>
                <p className="mt-4 md:mt-6 text-sm md:text-base text-black/60 leading-relaxed">
                  At Fusivox, we build digital products that actually solve problems. 
                  No technical jargon. No overcomplicated solutions. Just clean, 
                  reliable software that helps your business move forward.
                </p>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Services List */}
        <section className="pb-16 md:pb-24">
          <Container>
            <div className="space-y-16 md:space-y-20">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={service.title} delay={index * 0.1}>
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                      <div>
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 md:mb-6`}>
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#5B5CF0]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">{service.title}</h2>
                        <p className="mt-2 md:mt-3 text-sm md:text-base text-black/70">{service.subtitle}</p>
                        
                        <div className="mt-6 md:mt-8">
                          <h3 className="text-xs md:text-sm font-bold uppercase tracking-wide text-[#5B5CF0] mb-3 md:mb-4">
                            Ideal for:
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {service.idealFor.map((item) => (
                              <span key={item} className="px-3 md:px-4 py-1.5 md:py-2 bg-black/5 rounded-full text-xs md:text-sm">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#FAFBFF] rounded-2xl md:rounded-3xl p-6 md:p-8 border border-black/5">
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">What clients typically need:</h3>
                        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                          {service.solutions.map((solution) => (
                            <div key={solution} className="flex items-center gap-2 md:gap-3">
                              <Check className="w-4 h-4 md:w-5 md:h-5 text-[#5B5CF0] shrink-0" />
                              <span className="text-xs md:text-sm text-black/70">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#0B1020] to-[#1a1f35]">
          <Container>
            <FadeInUp className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">Not sure what you need?</h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-white/60">
                Tell us about your project and we'll help you figure out the right approach.
              </p>
              <button 
                onClick={() => openWhatsApp("Hi! I need help figuring out what to build for my business.")}
                className="mt-6 md:mt-8 h-11 md:h-12 px-6 md:px-8 rounded-xl bg-[#5B5CF0] text-white text-sm md:text-base font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2 md:gap-3"
              >
                Talk to us
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