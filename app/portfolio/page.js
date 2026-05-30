"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, StaggerChildren, FadeIn } from "@/components/ui/ScrollAnimation";
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Eye,
  Sparkles,
  CheckCircle,
  Target,
  Lightbulb,
  TrendingUp,
  Layers,
  Code,
  Star,
  Zap,
  Briefcase,
  Calendar,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Ges Vis Studios",
    category: "Business Website / Portfolio",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779655179/file_00000000e29c7243aac04c4df115cb7b_xmbs12.png",
    problem: "A local audio-visual studio wanted to elevate their brand presence and carve out a portion of the digital world for themselves, aiming for broader reach and a more luxurious reputation.",
    solution: "Built a fully customized luxurious website with a modern feel through an animated UI and advanced traffic analysis integration with Vercel Analytics.",
    outcome: "Started experiencing increased business visibility immediately with better conversion rates and enhanced brand perception.",
    tech: ["Next.js", "Tailwind", "Cloudinary", "Vercel"],
    liveLink: "https://gesvisstudios.com",
    gradient: "from-green-600 to-emerald-600",
    duration: "2 weeks",
    client: "Creative Studio"
  },
  {
    title: "BullFaucet",
    category: "Enterprise Grade Crypto Platform",
    image: 'https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779648952/file_00000000aa7c72439d35bf8082458929_kamoqs.png',
    problem: "A crypto startup needed an enterprise-grade reward and advertising platform that integrates with multiple third-party tasks and reward APIs.",
    solution: "Built a fully customized solution consisting of a user-facing reward web app with advanced user authentication (email, password, 2FA, Google OAuth). Integrated 8 third-party task and reward APIs, automated cryptocurrency deposit and transfer via Solana, BSC, and Bitcoin blockchains. Also built a robust admin panel with a detailed dashboard and user management system with real-time email and push notification system.",
    outcome: "Helped the company launch their project in record time and provided ongoing support for 6 months.",
    tech: ["React.js", "Node.js", "MongoDB", "Web3", "OAuth2"],
    liveLink: "https://www.bullfaucet.com",
    gradient: "from-blue-600 to-indigo-600",
    duration: "3 months",
    client: "Crypto Startup"
  },
  {
    title: "Zoommia",
    category: "Multi-Vendor E-Commerce Platform",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779688654/file_00000000823471f4a86b7caf13ad1ff9_dztyrh.png",
    problem: "The internet created a seemingly impossible challenge to build a full-stack multi-vendor e-commerce platform (like Jumia, Konga, etc.), with experienced developers claiming it would take no less than 3 months due to complex systems including payment integration, order management, notification system, and vendor management.",
    solution: "Built the user-facing web app with buyer feeds and seller onboarding system integration, payment integration with Paystack, a robust email notification system, and a comprehensive admin panel for user management, dispute settlement, and a bird's eye view of the entire operation.",
    outcome: "With our advanced skills, we delivered the product in just 3 days! The platform was successfully tested by thousands of users, proving that complex systems can be built efficiently with the right expertise.",
    tech: ["React", "Node.js", "MongoDB", "Paystack", "SMTP"],
    liveLink: "https://zoomia.fusivox.com.ng",
    gradient: "from-purple-600 to-pink-600",
    duration: "3 days",
    client: "E-commerce Startup"
  },
  {
    title: "MobileNative",
    category: "E-Learning Tech Education Mobile App",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779655085/file_000000003194720abee986ffdab6fcef_mzh2eh.png",
    problem: "A tech education platform needed a custom cross-platform mobile app solution where their students could learn and practice with ease across both iOS and Android devices.",
    solution: "Developed a functional learning platform with advanced media handling and a database system that accurately tracks course purchases and monthly subscriptions, with seamless payment integration using Paystack.",
    outcome: "Students achieved 50% faster learning progress due to the ease of access to educational materials and improved user experience.",
    tech: ["React Native", "Node.js", "MongoDB", "Cloudinary", "Paystack"],
    liveLink: "https://mobilenative.tech",
    gradient: "from-orange-600 to-red-600",
    duration: "2 months",
    client: "EdTech Company"
  },
  {
    title: "Devine Act Painting Services",
    category: "Landing Page / Mini Portfolio",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779655134/file_000000009ce872468cdbdfad1cd7701b_gagus4.png",
    problem: "A painting and decoration professional needed an online presence to help attract more clients and showcase their portfolio of work.",
    solution: "Created an attractive landing page with advanced SEO that showcases recently delivered jobs by the business and features an intuitive call-to-action system connecting clients directly to the business via WhatsApp.",
    outcome: "Increased client acquisition and retention with a significantly wider digital reach in their local market.",
    tech: ["HTML", "CSS", "JavaScript", "Cloudinary", "Vercel"],
    liveLink: "https://devineact.vercel.app",
    gradient: "from-teal-600 to-cyan-600",
    duration: "1 week",
    client: "Service Business"
  },
  {
    title: "Salvy Footwear",
    category: "E-Commerce Store / Inventory Management",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779655086/file_0000000045f471f49f94935828e341fe_dd7gvq.png",
    problem: "A handmade footwear production business needed a digital presence to reach a wider audience and a business management system to help keep their operations organized and scalable.",
    solution: "Built a state-of-the-art e-commerce platform with advanced product feeds, order tracking, payment system integration, and a robust admin panel for complete inventory and order management.",
    outcome: "The business gained better visibility into their inventory operations and achieved a wider client reach, resulting in increased sales and operational efficiency.",
    tech: ["Next.js", "MongoDB", "Cloudinary", "Google Analytics", "Tailwind"],
    liveLink: "https://salvyfootwear.com.ng",
    gradient: "from-rose-600 to-pink-600",
    duration: "1 month",
    client: "Fashion Brand"
  }
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(projects.map(p => p.category.split(" / ")[0]))];
  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category.includes(filter));

  return (
    <div className="h-screen overflow-y-auto scrollbar-hide">
      <Navbar />
      <main className="bg-white relative text-[#0B1020]">
        
        {/* Hero Section - Redesigned */}
        <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-50" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#5B5CF0] rounded-full filter blur-3xl opacity-10" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10" />
          
          <Container>
            <FadeInUp>
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-[#5B5CF0]" />
                  <span className="text-sm font-medium text-[#5B5CF0]">Our Work</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-[#0B1020] to-[#5B5CF0] bg-clip-text text-transparent">
                  Transforming ideas into
                  <span className="block">digital reality</span>
                </h1>
                <p className="mt-6 text-base md:text-lg text-black/60 leading-relaxed max-w-2xl">
                  Real projects for real businesses. Here's what we've created and the problems we've solved.
                  Each project represents our commitment to quality and client success.
                </p>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Filter Section - New */}
        <section className="pb-8">
          <Container>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? "bg-[#5B5CF0] text-white shadow-lg shadow-[#5B5CF0]/25"
                      : "bg-gray-100 text-black/60 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Projects Grid - Redesigned */}
        <section className="py-12 md:py-16 pb-24">
          <Container>
            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.title}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5B5CF0] to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl -z-10" />
                  
                  <div className="relative bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#5B5CF0]/20 transition-all duration-500 group-hover:-translate-y-2">
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`bg-gradient-to-r ${project.gradient} px-3 py-1 rounded-full text-white text-xs font-semibold shadow-lg`}>
                          {project.category.split(" / ")[0]}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-black tracking-tight mb-2 group-hover:text-[#5B5CF0] transition-colors">
                        {project.title}
                      </h2>
                      
                      <div className="flex items-center gap-4 text-xs text-black/50 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {project.client}
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Target className="w-4 h-4 text-[#5B5CF0] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-black/70 line-clamp-2">
                            {project.problem}
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-[#5B5CF0] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-black/70 line-clamp-2">
                            {project.solution}
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 text-[#5B5CF0] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-black/70 line-clamp-2">
                            {project.outcome}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mt-5 pt-4 border-t border-black/5">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 4).map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-[10px] font-medium text-black/70">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="px-2 py-1 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-[10px] font-medium text-black/70">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* View Details Link */}
                      <div className="mt-4 pt-2">
                        <span className="text-sm font-semibold text-[#5B5CF0] flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Case Study
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </Container>
        </section>

        {/* Project Modal - Redesigned */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-4 right-4 float-right z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-6 md:p-8">
                {/* Modal Header Image */}
                <div className={`bg-gradient-to-r ${selectedProject.gradient} rounded-2xl p-8 mb-8 text-white`}>
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-4">
                        <Star className="w-3 h-3" />
                        <span className="text-xs font-semibold">Featured Project</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black">{selectedProject.title}</h2>
                      <p className="text-white/80 mt-2">{selectedProject.category}</p>
                    </div>
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-5 py-2.5 bg-white text-[#0B1020] rounded-xl text-sm font-semibold flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-black/5">
                      <Calendar className="w-5 h-5 text-[#5B5CF0] mb-2" />
                      <div className="text-sm text-black/60">Project Duration</div>
                      <div className="font-bold text-lg">{selectedProject.duration}</div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-black/5">
                      <Users className="w-5 h-5 text-[#5B5CF0] mb-2" />
                      <div className="text-sm text-black/60">Client Type</div>
                      <div className="font-bold text-lg">{selectedProject.client}</div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-[#5B5CF0]" />
                      <h3 className="text-xl font-bold">The Challenge</h3>
                    </div>
                    <p className="text-black/70 leading-relaxed">{selectedProject.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-5 h-5 text-[#5B5CF0]" />
                      <h3 className="text-xl font-bold">Our Solution</h3>
                    </div>
                    <p className="text-black/70 leading-relaxed">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-[#5B5CF0]" />
                      <h3 className="text-xl font-bold">Results & Impact</h3>
                    </div>
                    <p className="text-black/70 leading-relaxed">{selectedProject.outcome}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="w-5 h-5 text-[#5B5CF0]" />
                      <h3 className="text-xl font-bold">Technologies Used</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-black/10">
                    <Link
                      href="/contact"
                      className="w-full py-4 bg-gradient-to-r from-[#5B5CF0] to-[#7B7CF0] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Start a similar project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section - Redesigned */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#0B1020] to-[#1a1f35] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#5B5CF0]/20 to-purple-500/20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B5CF0] rounded-full filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
          
          <Container>
            <FadeInUp className="text-center max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Start Your Project</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                Ready to build something amazing?
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
                Let's discuss your project and create something extraordinary together.
                We're excited to hear your ideas.
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
                  href="/about"
                  className="h-12 md:h-14 px-8 md:px-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm md:text-base font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Learn about us
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