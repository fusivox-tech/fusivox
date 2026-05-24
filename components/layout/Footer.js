"use client";

import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const whatsappUrl = (message) => {
  return `https://wa.me/2348109448643?text=${encodeURIComponent(message)}`;
};

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl("Hi! I'm ready to start my project. Let's talk!"), '_blank');
  };
  
  return (
    <footer className="bg-[#07101F] text-white pt-24 pb-10">
      <Container>
        <div className="grid lg:grid-cols-4 gap-16">
          <div>
            <div className="text-3xl font-black">
              <img src="/wordmark.svg" alt="Logo" loading="eager" fetchPriority="high" className="h-6" />
            </div>

            <p className="mt-6 text-sm text-white/60 leading-7">
              We build modern software products designed for
              growth-focused businesses.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-md">
              Services
            </h3>

            <div className="mt-6 text-sm flex flex-col space-y-4 text-white/60">
              <Link href="/services">Websites</Link>
              <Link href="/services">Web Applications</Link>
              <Link href="/services">Mobile Apps</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-md">
              Company
            </h3>

            <div className="mt-6 flex flex-col text-sm space-y-4 text-white/60">
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/pricing">Pricing</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-md">
              Let’s build something great
            </h3>

            <button onClick={() => handleWhatsAppClick()} className="mt-8 h-12 px-6 flex items-center gap-5 rounded-xl bg-[#5B5CF0] font-semibold">
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col lg:flex-row items-center justify-between gap-5 text-white/50 text-sm">
          <p>© 2026 Fusivox. All rights reserved.</p>

          <div className="flex gap-8">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}