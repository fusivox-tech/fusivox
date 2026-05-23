"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, StaggerChildren } from "@/components/ui/ScrollAnimation";
import { openWhatsApp } from "@/utils/whatsapp";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Booking Platform",
    category: "Web Application",
    problem: "A service business needed to manage appointments, staff schedules, and customer bookings without manual coordination.",
    solution: "Built a complete booking platform with calendar integration, automated reminders, and payment processing.",
    outcome: "Reduced scheduling time by 85% and eliminated double-bookings entirely.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "SaaS Dashboard",
    category: "Analytics Platform",
    problem: "A growing startup needed real-time insights into their business metrics but couldn't find an affordable solution.",
    solution: "Created a customizable dashboard with real-time data visualization, automated reporting, and team collaboration features.",
    outcome: "Saved 20+ hours per week on manual reporting and improved data-driven decision making.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "E-commerce Platform",
    category: "Online Store",
    problem: "A retail brand needed to move online but required a unique shopping experience their customers would love.",
    solution: "Built a modern e-commerce store with advanced search, personalized recommendations, and seamless checkout.",
    outcome: "Achieved $50K+ in first-month sales with 4.8/5 customer satisfaction rating.",
    tech: ["Next.js", "Stripe", "Tailwind", "Redis"],
    gradient: "from-green-600 to-emerald-600"
  },
  {
    title: "Inventory Management System",
    category: "Internal Tool",
    problem: "A distribution company struggled with stock tracking, order fulfillment, and warehouse coordination.",
    solution: "Developed a real-time inventory system with barcode scanning, low-stock alerts, and automated reordering.",
    outcome: "Reduced stockouts by 95% and improved warehouse efficiency by 60%.",
    tech: ["React Native", "Node.js", "MongoDB", "GraphQL"],
    gradient: "from-orange-600 to-red-600"
  },
  {
    title: "Healthcare Portal",
    category: "Patient Management",
    problem: "A clinic needed to digitize patient records and appointment scheduling without complex software.",
    solution: "Created a secure patient portal with appointment booking, medical history access, and prescription management.",
    outcome: "Reduced administrative workload by 70% and improved patient satisfaction scores.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-teal-600 to-cyan-600"
  },
  {
    title: "Real Estate Platform",
    category: "Property Marketplace",
    problem: "An agency needed a platform to showcase properties and manage inquiries efficiently.",
    solution: "Built a property listing platform with advanced filters, virtual tours, and lead management system.",
    outcome: "Generated 3,000+ qualified leads in first 6 months with 40% conversion rate.",
    tech: ["React", "Node.js", "MongoDB", "Mapbox"],
    gradient: "from-rose-600 to-pink-600"
  }
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#0B1020]">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16">
          <Container>
            <FadeInUp>
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2]">
                  A few things we've built.
                </h1>
                <p className="mt-4 md:mt-6 text-sm md:text-base text-black/60 leading-relaxed">
                  Real projects for real businesses. Here's what we created and the problems we solved.
                </p>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Projects Grid */}
        <section className="pb-16 md:pb-24">
          <Container>
            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-2xl md:rounded-3xl border border-black/5 bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Preview */}
                  <div className={`h-40 md:h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-3 md:top-4 right-3 md:right-4">
                      <span className="px-2 md:px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs text-white font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-black tracking-tight">{project.title}</h3>
                    
                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="text-[11px] md:text-xs font-semibold text-[#5B5CF0] uppercase">Problem</p>
                        <p className="text-xs md:text-sm text-black/60 mt-1">{project.problem}</p>
                      </div>
                      
                      <div>
                        <p className="text-[11px] md:text-xs font-semibold text-[#5B5CF0] uppercase">Solution</p>
                        <p className="text-xs md:text-sm text-black/60 mt-1">{project.solution}</p>
                      </div>
                      
                      <div>
                        <p className="text-[11px] md:text-xs font-semibold text-[#5B5CF0] uppercase">Outcome</p>
                        <p className="text-xs md:text-sm text-black/60 mt-1">{project.outcome}</p>
                      </div>
                    </div>

                    <div className="mt-5 md:mt-6 flex flex-wrap gap-1.5 md:gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-black/5 rounded-full text-[10px] md:text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-[#FAFBFF] border-t border-black/5">
          <Container>
            <FadeInUp className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-2xl font-black">Have a project in mind?</h2>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-black/60">
                Let's discuss what we can build together.
              </p>
              <button 
                onClick={() => openWhatsApp("Hi! I have a project idea I'd like to discuss.")}
                className="mt-5 md:mt-6 h-11 md:h-12 px-6 md:px-8 rounded-xl bg-[#5B5CF0] text-white text-sm md:text-base font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2 md:gap-3"
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