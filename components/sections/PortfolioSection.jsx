"use client";

import Link from "next/link";
import Container from "../ui/Container";
import { ArrowRight, Eye } from "lucide-react";

const projects = [
  {
    title: "BullFaucet",
    category: "Enterprise Grade Crypto Platform",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779565512/file_000000003774720ab51c8a23b5a2a847_kbev0j.png",
    description: "Enterprise-grade crypto reward platform with multi-chain support, advanced user authentication, and automated cryptocurrency deposits across Solana, BSC, and Bitcoin blockchains.",
    tech: ["React.js", "Node.js", "MongoDB", "Web3", "OAuth2"],
    liveLink: "https://www.bullfaucet.com",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "Zoommia",
    category: "Multi-Vendor E-Commerce",
    image: "https://res.cloudinary.com/danuehpic/image/upload/v1778558276/file_00000000340c720a9d31fa71f0879c2d_uzcdr0.png",
    description: "Full-stack multi-vendor e-commerce platform with payment integration, order management, notification system, and comprehensive vendor management.",
    tech: ["React", "Node.js", "MongoDB", "Paystack", "SMTP"],
    liveLink: "https://zoomia.fusivox.com.ng",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Ges Vis Studios",
    category: "Business Website / Portfolio",
    image: "https://res.cloudinary.com/dglf6qtub/image/upload/q_auto/f_auto/v1779567338/gesvis-vercel-app-1420x1000desktop-101276_ilef2y.png",
    description: "Luxurious website with modern animated UI and advanced traffic analysis, helping a local audio-visual studio elevate their brand presence online.",
    tech: ["Next.js", "Tailwind", "Cloudinary", "Vercel"],
    liveLink: "https://gesvisstudios.com",
    gradient: "from-green-600 to-emerald-600"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-8 md:py-8">
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
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60"
                >
                  <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Live Demo
                  </span>
                </a>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-black tracking-tight">
                  {project.title}
                </h3>

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
                <Link
                  href={`/portfolio#${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-5 md:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5B5CF0] hover:gap-3 transition-all"
                >
                  View case study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}