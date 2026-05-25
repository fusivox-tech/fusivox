"use client";

import Link from "next/link";
import Container from "../ui/Container";
import { ArrowRight, Eye } from "lucide-react";

const projects = [
  {
    title: "Salvy Footwear",
    category: "E-Commerce Store / Inventory Management",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779655086/file_0000000045f471f49f94935828e341fe_dd7gvq.png",
    description: "A state-of-the-art e-commerce platform with advanced product feeds, order tracking, payment system integration, and a robust admin panel for complete inventory and order management.",
    tech: ["Next.js", "MongoDB", "Cloudinary", "Google Analytics", "Tailwind"],
    liveLink: "https://salvy-two.vercel.app",
    gradient: "from-rose-600 to-pink-600"
  },
  {
    title: "BullFaucet",
    category: "Enterprise Grade Crypto Platform",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779648952/file_00000000aa7c72439d35bf8082458929_kamoqs.png",
    description: "Enterprise-grade crypto reward platform with multi-chain support, advanced user authentication, and automated cryptocurrency deposits across Solana, BSC, and Bitcoin blockchains.",
    tech: ["React.js", "Node.js", "MongoDB", "Web3", "OAuth2"],
    liveLink: "https://www.bullfaucet.com",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "Ges Vis Studios",
    category: "Business Website / Portfolio",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779655179/file_00000000e29c7243aac04c4df115cb7b_xmbs12.png",
    description: "Luxurious website with modern animated UI and advanced traffic analysis, helping a local audio-visual studio elevate their brand presence online.",
    tech: ["Next.js", "Tailwind", "Cloudinary", "Vercel"],
    liveLink: "https://gesvisstudios.com",
    gradient: "from-green-600 to-emerald-600"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#5B5CF0] text-xs md:text-sm font-bold">
              Selected Work
            </p>

            <h2 className="text-2xl md:text-3xl font-black mt-3 md:mt-4 tracking-tight">
              A few things we've built.
            </h2>
          </div>

          <Link 
            href="/portfolio" 
            className="text-[#5B5CF0] flex items-center gap-2 md:gap-5 font-bold text-base md:text-lg hover:gap-3 md:hover:gap-6 transition-all"
          >
            View all projects 
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl md:rounded-3xl border border-black/5 bg-white overflow-hidden hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-2xl hover:shadow-black/10"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-black tracking-tight">
                  {project.title}
                </h3>
                
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-black/60 leading-relaxed line-clamp-3">{project.category}</p>

                <p className="mt-3 md:mt-4 text-xs md:text-sm text-black/60 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 mt-5 md:mt-6">
                  {project.tech.slice(0, 3).map((item) => (
                    <div
                      key={item}
                      className="px-2.5 md:px-3 py-1 rounded-full bg-[#F4F6FB] text-[10px] md:text-xs font-semibold text-black/70"
                    >
                      {item}
                    </div>
                  ))}
                  {project.tech.length > 3 && (
                    <div className="px-2.5 md:px-3 py-1 rounded-full bg-[#F4F6FB] text-[10px] md:text-xs font-semibold text-black/70">
                      +{project.tech.length - 3}
                    </div>
                  )}
                </div>

                {/* View Details Link */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="mt-5 md:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5B5CF0] hover:gap-3 transition-all"
                >
                  View Live Demo
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}