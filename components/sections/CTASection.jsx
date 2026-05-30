"use client";

import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const whatsappUrl = (message) => {
  return `https://wa.me/2348109448643?text=${encodeURIComponent(message)}`;
};

export default function CTASection() {
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl("Hi! I'm ready to start my project. Let's talk!"), '_blank');
  };
  
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#5B21B6] via-[#5B5CF0] to-[#2563EB] p-10 lg:p-16">
          {/* glow effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-pink-500/30 blur-3xl" />

            <div className="absolute bottom-[-120px] right-[-60px] w-[340px] h-[340px] rounded-full bg-cyan-400/30 blur-3xl" />
          </div>

          {/* floating lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-20 w-40 h-px bg-white rotate-12" />
            <div className="absolute bottom-20 right-20 w-52 h-px bg-white -rotate-12" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.2em] text-white/70 text-sm font-bold">
                Ready to build something great?
              </p>

              <h2 className="mt-5 text-3xl lg:text-4xl font-black text-white leading-[1.05] tracking-tight">
                Let’s build something solid.
              </h2>

              <p className="mt-7 text-md text-white/80 leading-6 max-w-xl">
                Whether you need a website, SaaS platform, internal business
                system, or mobile app, Fusivox can help you build it properly
                from the start.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <Link href="/contact" className="h-16 px-10 flex items-center gap-5 rounded-2xl bg-white text-[#0F172A] font-black text-lg shadow-2xl hover:scale-[1.02] transition">
                Start a Project 
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-white/70 text-sm text-center">
                Usually replies within 1 Hour
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}