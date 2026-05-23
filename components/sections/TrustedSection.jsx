import {
  Rocket,
  Building2,
  PenTool,
  Briefcase,
  Cog,
} from "lucide-react";

import Container from "../ui/Container";

const items = [
  {
    icon: Rocket,
    title: "Startups",
    text: "Turn ideas into products people love.",
  },
  {
    icon: Building2,
    title: "Brands",
    text: "Build digital presence that builds trust.",
  },
  {
    icon: PenTool,
    title: "Creators",
    text: "Showcase your work beautifully.",
  },
  {
    icon: Briefcase,
    title: "Service Businesses",
    text: "Generate leads and serve clients better.",
  },
  {
    icon: Cog,
    title: "Internal Systems",
    text: "Streamline operations and workflows.",
  },
];

export default function TrustedSection() {
  return (
    <section className="py-24 bg-[#FAFBFF]">
      <Container>
        <h2 className="text-center text-4xl font-black tracking-tight">
          Built for businesses that are serious about growth.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
                  <Icon className="text-[#5B5CF0]" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-black/60 leading-7">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}