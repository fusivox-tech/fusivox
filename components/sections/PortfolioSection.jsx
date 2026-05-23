import Container from "../ui/Container";

const projects = [
  {
    title: "Booking Platform",
    description:
      "A complete booking platform built for service businesses with appointments, scheduling, and customer management.",
    tech: ["Next.js", "Node.js", "MongoDB"],
  },

  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with real-time insights, charts, reports, and advanced business monitoring tools.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },

  {
    title: "E-commerce Store",
    description:
      "Modern online store with advanced product search, payment integration, and optimized checkout experience.",
    tech: ["Next.js", "Stripe", "Tailwind"],
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#5B5CF0] text-sm font-bold">
              Selected Work
            </p>

            <h2 className="text-5xl font-black mt-4 tracking-tight">
              A few things we’ve built.
            </h2>
          </div>

          <button className="text-[#5B5CF0] font-bold text-lg">
            View all projects →
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-[32px] border border-black/5 bg-white overflow-hidden hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-2xl hover:shadow-black/10"
            >
              <div
                className={`relative h-[260px] overflow-hidden ${
                  index === 0
                    ? "bg-gradient-to-br from-[#0F172A] to-[#1E3A8A]"
                    : index === 1
                    ? "bg-gradient-to-br from-[#111827] to-[#5B5CF0]"
                    : "bg-gradient-to-br from-[#0F172A] to-[#312E81]"
                }`}
              >
                {/* fake UI */}
                <div className="absolute inset-0 p-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl h-full p-5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div className="h-24 rounded-xl bg-white/10" />
                      <div className="h-24 rounded-xl bg-white/10" />
                      <div className="h-24 rounded-xl bg-white/10" />
                    </div>

                    <div className="mt-4 h-24 rounded-2xl bg-white/10" />

                    <div className="mt-4 flex gap-3">
                      <div className="flex-1 h-12 rounded-xl bg-white/10" />
                      <div className="w-20 h-12 rounded-xl bg-[#5B5CF0]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 text-black/60 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tech.map((item) => (
                    <div
                      key={item}
                      className="px-4 py-2 rounded-full bg-[#F4F6FB] text-sm font-semibold text-black/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}