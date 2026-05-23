import Container from "../ui/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the business, users, goals, and project requirements properly before starting.",
  },

  {
    number: "02",
    title: "Plan",
    description:
      "Structure the product architecture, design flow, timelines, and development process.",
  },

  {
    number: "03",
    title: "Build",
    description:
      "Development begins with scalable systems, clean code, testing, and proper implementation.",
  },

  {
    number: "04",
    title: "Launch",
    description:
      "Deployment, optimization, analytics setup, maintenance, and continuous improvements.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#FAFBFF] overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-[420px_1fr] gap-20">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#5B5CF0] text-sm font-bold">
              Our Process
            </p>

            <h2 className="text-3xl font-black leading-tight mt-5 tracking-tight">
              How projects move from idea to launch.
            </h2>

            <p className="mt-6 text-black/60 leading-7 text-md">
              Every project follows a structured process focused on clarity,
              speed, communication, and scalable execution.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-black/10 hidden md:block" />

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-8"
                >
                  <div className="relative z-10 min-w-[64px] h-16 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center text-[#5B5CF0] font-black text-md">
                    {step.number}
                  </div>

                  <div className="bg-white border border-black/5 rounded-[28px] p-8 shadow-sm flex-1">
                    <h3 className="text-lg font-black tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm text-black/60 leading-7">
                      {step.description}
                    </p>

                    <div className="mt-6 flex gap-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`h-2 rounded-full ${
                            i <= index + 1
                              ? "bg-[#5B5CF0] w-14"
                              : "bg-black/10 w-8"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}