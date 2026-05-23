"use client";

import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";
import { FadeInUp } from "../ui/ScrollAnimation";

const whatsappUrl = (message) => {
  return `https://wa.me/2348109448643?text=${encodeURIComponent(message)}`;
};

export default function CTASection() {
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl("Hi! I'm ready to start my project. Let's talk!"), '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#0B1020] to-[#1a1f35]">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Ready to build something great?
            </h2>
            
            <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto">
              Let's discuss your project and turn your ideas into reality.
            </p>
            
            <button 
              onClick={handleWhatsAppClick}
              className="mt-10 h-14 px-8 rounded-2xl bg-[#5B5CF0] text-white flex items-center gap-5 font-semibold shadow-xl shadow-indigo-500/30 hover:scale-105 transition-transform mx-auto"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
            
            <p className="mt-6 text-white/40 text-sm">
              Or reach us directly on WhatsApp +234 810 944 8643
            </p>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}