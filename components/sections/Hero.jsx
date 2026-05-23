import Container from "../ui/Container";
import HeroVisual from "../ui/HeroVisual";
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black leading-[1.02] tracking-tight max-w-xl">
              We build software that businesses can{" "}
              <span className="text-[#5B5CF0]">actually grow with.</span>
            </h1>

            <p className="mt-8 text-sm leading-6 text-black/60 max-w-lg">
              From company websites to full web applications and mobile apps,
              Fusivox helps businesses build reliable digital products using
              modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="h-14 px-8 rounded-2xl bg-[#5B5CF0] text-white flex items-center gap-5 font-semibold shadow-xl shadow-indigo-500/30">
                Start a Project
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <button className="h-14 px-8 flex items-center gap-5 rounded-2xl border border-black/10 font-semibold hover:bg-black/[0.03] transition">
                See Our Work 
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>

          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}