"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, StaggerChildren } from "@/components/ui/ScrollAnimation";
import { openWhatsApp } from "@/utils/whatsapp";
import { ArrowRight, ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Zoommia",
    category: "Multi-Vendor E-Commerce Platform",
    image: "https://res.cloudinary.com/danuehpic/image/upload/v1778558276/file_00000000340c720a9d31fa71f0879c2d_uzcdr0.png",
    problem: "The internet created a seemingly impossible challenge to build a full-stack multi-vendor e-commerce platform (like Jumia, Konga, etc.), with experienced developers claiming it would take no less than 3 months due to complex systems including payment integration, order management, notification system, and vendor management.",
    solution: "Built the user-facing web app with buyer feeds and seller onboarding system integration, payment integration with Paystack, a robust email notification system, and a comprehensive admin panel for user management, dispute settlement, and a bird's eye view of the entire operation.",
    outcome: "With our advanced skills, we delivered the product in just 3 days! The platform was successfully tested by thousands of users, proving that complex systems can be built efficiently with the right expertise.",
    tech: ["React", "Node.js", "MongoDB", "Paystack", "SMTP"],
    liveLink: "https://zoomia.fusivox.com.ng",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Ges Vis Studios",
    category: "Business Website / Portfolio",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779567338/gesvis-vercel-app-1420x1000desktop-101276_ilef2y.png",
    problem: "A local audio-visual studio wanted to elevate their brand presence and carve out a portion of the digital world for themselves, aiming for broader reach and a more luxurious reputation.",
    solution: "Built a fully customized luxurious website with a modern feel through an animated UI and advanced traffic analysis integration with Vercel Analytics.",
    outcome: "Started experiencing increased business visibility immediately with better conversion rates and enhanced brand perception.",
    tech: ["Next.js", "Tailwind", "Cloudinary", "Vercel"],
    liveLink: "https://gesvisstudios.com",
    gradient: "from-green-600 to-emerald-600"
  },
  {
    title: "BullFaucet",
    category: "Enterprise Grade Crypto Platform",
    image: 'https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779573774/file_00000000cb5071f4bfe973b6cf6e1ebc_r4bbo1.png',
    problem: "A crypto startup needed an enterprise-grade reward and advertising platform that integrates with multiple third-party tasks and reward APIs.",
    solution: "Built a fully customized solution consisting of a user-facing reward web app with advanced user authentication (email, password, 2FA, Google OAuth). Integrated 8 third-party task and reward APIs, automated cryptocurrency deposit and transfer via Solana, BSC, and Bitcoin blockchains. Also built a robust admin panel with a detailed dashboard and user management system with real-time email and push notification system.",
    outcome: "Helped the company launch their project in record time and provided ongoing support for 6 months.",
    tech: ["React.js", "Node.js", "MongoDB", "Web3", "OAuth2"],
    liveLink: "https://www.bullfaucet.com",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "MobileNative",
    category: "E-Learning Tech Education Mobile App",
    image: "https://res.cloudinary.com/danuehpic/image/upload/v1778558184/file_00000000d28071f4ae51b79a374640de_nugqit.png",
    problem: "A tech education platform needed a custom cross-platform mobile app solution where their students could learn and practice with ease across both iOS and Android devices.",
    solution: "Developed a functional learning platform with advanced media handling and a database system that accurately tracks course purchases and monthly subscriptions, with seamless payment integration using Paystack.",
    outcome: "Students achieved 50% faster learning progress due to the ease of access to educational materials and improved user experience.",
    tech: ["React Native", "Node.js", "MongoDB", "Cloudinary", "Paystack"],
    liveLink: "https://mobilenative.tech",
    gradient: "from-orange-600 to-red-600"
  },
  {
    title: "Devine Act Painting Services",
    category: "Landing Page / Mini Portfolio",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779568104/devineact-vercel-app-1420x1000desktop-08dbdc_xwifgz.png",
    problem: "A painting and decoration professional needed an online presence to help attract more clients and showcase their portfolio of work.",
    solution: "Created an attractive landing page with advanced SEO that showcases recently delivered jobs by the business and features an intuitive call-to-action system connecting clients directly to the business via WhatsApp.",
    outcome: "Increased client acquisition and retention with a significantly wider digital reach in their local market.",
    tech: ["HTML", "CSS", "JavaScript", "Cloudinary", "Vercel"],
    liveLink: "https://devineact.vercel.app",
    gradient: "from-teal-600 to-cyan-600"
  },
  {
    title: "Salvy Footwear",
    category: "E-Commerce Store / Inventory Management",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779569210/file_00000000652c7246af801aefbe0021d9_eukgxb.png",
    problem: "A handmade footwear production business needed a digital presence to reach a wider audience and a business management system to help keep their operations organized and scalable.",
    solution: "Built a state-of-the-art e-commerce platform with advanced product feeds, order tracking, payment system integration, and a robust admin panel for complete inventory and order management.",
    outcome: "The business gained better visibility into their inventory operations and achieved a wider client reach, resulting in increased sales and operational efficiency.",
    tech: ["Next.js", "MongoDB", "Cloudinary", "Google Analytics", "Tailwind"],
    liveLink: "https://salvy-two.vercel.app",
    gradient: "from-rose-600 to-pink-600"
  }
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Navbar />
      <main className="bg-white relative text-[#0B1020]">
        {/* Hero Section */}
        <section className="pt-8 md:pt-8 pb-12 md:pb-16">
          <Container>
            <FadeInUp>
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2]">
                  A few things we've built.
                </h1>
                <p className="mt-4 md:mt-6 text-sm md:text-base text-black/60 leading-relaxed max-w-2xl">
                  Real projects for real businesses. Here's what we've created and the problems we've solved.
                  Each project represents our commitment to quality and client success.
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
                  className="group rounded-2xl md:rounded-3xl border border-black/5 bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Project Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 md:top-4 right-3 md:right-4">
                      <span className="px-2 md:px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-[10px] md:text-xs text-white font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Live Link Overlay */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50"
                    >
                      <div className="flex gap-3">
                        <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Live
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h2 className="text-lg md:text-xl font-black tracking-tight mb-2">
                      {project.title}
                    </h2>
                    
                    <div className="space-y-3 mt-4">
                      <div>
                        <p className="text-[11px] md:text-xs font-semibold text-[#5B5CF0] uppercase tracking-wide">
                          The Challenge
                        </p>
                        <p className="text-xs md:text-sm text-black/60 mt-1 line-clamp-2">
                          {project.problem}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-[11px] md:text-xs font-semibold text-[#5B5CF0] uppercase tracking-wide">
                          Our Solution
                        </p>
                        <p className="text-xs md:text-sm text-black/60 mt-1 line-clamp-2">
                          {project.solution}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-[11px] md:text-xs font-semibold text-[#5B5CF0] uppercase tracking-wide">
                          Results
                        </p>
                        <p className="text-xs md:text-sm text-black/60 mt-1 line-clamp-2">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-5 pt-4 border-t border-black/5">
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-black/5 rounded-full text-[10px] md:text-xs text-black/70">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 bg-black/5 rounded-full text-[10px] md:text-xs text-black/70">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-4 w-full py-2 text-center text-sm font-semibold text-[#5B5CF0] hover:bg-indigo-50 rounded-xl transition-colors"
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </Container>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-4 right-4 float-right z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
              >
                ✕
              </button>
              
              <div className="p-6 md:p-8">
                {/* Modal Image */}
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Modal Content */}
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <h2 className="text-2xl md:text-3xl font-black">{selectedProject.title}</h2>
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#5B5CF0] text-white rounded-xl text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                    <p className="text-sm text-[#5B5CF0] font-semibold mb-4">{selectedProject.category}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">The Challenge</h3>
                    <p className="text-black/70 leading-relaxed">{selectedProject.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Our Solution</h3>
                    <p className="text-black/70 leading-relaxed">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Results</h3>
                    <p className="text-black/70 leading-relaxed">{selectedProject.outcome}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-black/5 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/5">
                    <button
                      onClick={() => {
                        openWhatsApp(`Hi! I'm interested in a project similar to ${selectedProject.title}. Can we discuss?`);
                        setSelectedProject(null);
                      }}
                      className="w-full py-3 bg-[#0B1020] text-white rounded-xl font-semibold hover:bg-[#1a1f35] transition-colors"
                    >
                      Start a similar project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#FAFBFF] border-t border-black/5">
          <Container>
            <FadeInUp className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-2xl font-black">Have a project in mind?</h2>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-black/60">
                Let's discuss what we can build together. We'd love to help bring your vision to life.
              </p>
              <button 
                onClick={() => openWhatsApp("Hi! I have a project idea I'd like to discuss. Can you help?")}
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