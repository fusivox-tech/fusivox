import Container from "../ui/Container";
import HeroVisual from "../ui/HeroVisual";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.02] tracking-tight max-w-xl">
              We build software that businesses can{" "}
              <span className="text-[#5B5CF0]">actually grow with.</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-black/60 max-w-lg">
              From company websites to full web applications and mobile apps,
              Fusivox helps businesses build reliable digital products using
              modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="h-14 px-8 rounded-2xl bg-[#5B5CF0] text-white font-semibold shadow-xl shadow-indigo-500/30">
                Start a Project →
              </button>

              <button className="h-14 px-8 rounded-2xl border border-black/10 font-semibold hover:bg-black/[0.03] transition">
                See Our Work →
              </button>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-indigo-400 to-purple-500"
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  ★★★★★
                </div>

                <p className="text-sm text-black/60">
                  Trusted by growing businesses
                </p>
              </div>
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}