"use client";

import Container from "../ui/Container";
import { ArrowRight } from 'lucide-react';
import Typewriter from "../ui/Typewriter";
import { FadeInUp } from "../ui/ScrollAnimation";

const whatsappUrl = (message) => {
  return `https://wa.me/2348109448643?text=${encodeURIComponent(message)}`;
};

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl("Hi! I'm interested in starting a project with Fusivox. Can we discuss?"), '_blank');
  };

  return (
    <section className="relative pt-10 pb-10 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-0 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black leading-[1.02] tracking-tight max-w-xl">
                We build softwares that businesses can{" "}
                <Typewriter 
                  texts={["actually grow with.", "scale very high with.", "truly trust.", "truly love."]}
                  delay={120}
                  pauseDelay={2500}
                  className="text-[#5B5CF0]"
                />
              </h1>

              <p className="mt-8 text-sm leading-6 text-black/60 max-w-lg">
                From company websites to full web applications and mobile apps,
                Fusivox helps businesses build reliable digital products using
                modern technologies.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <button 
                  onClick={handleWhatsAppClick}
                  className="h-14 px-8 rounded-2xl bg-[#5B5CF0] text-white flex items-center gap-5 font-semibold shadow-xl shadow-indigo-500/30 hover:scale-105 transition-transform"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                <button 
                  onClick={() => {
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="h-14 px-8 flex items-center gap-5 rounded-2xl border border-black/10 font-semibold hover:bg-black/[0.03] transition"
                >
                  See Our Work 
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
            
          <FadeInUp>
          <div className="flex items-center justify-center flex-1">
            <img 
              src="/hero-image.svg"
              alt="Hero"
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto transform scale-110 md:scale-100"
            />
          </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}