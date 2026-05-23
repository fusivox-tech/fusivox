import Container from "../ui/Container";
import {
  Bolt,
  Code2,
  MessageCircleMore,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Bolt,
    title: "Fast performance",
    description:
      "People leave slow websites. We build fast-loading experiences that feel smooth and responsive.",
  },
  {
    icon: Code2,
    title: "Clean systems",
    description:
      "Messy code becomes expensive later. Our systems are built to stay maintainable as your business grows.",
  },
  {
    icon: MessageCircleMore,
    title: "Clear communication",
    description:
      "Clients should never feel lost during a project. We keep you informed, involved, and confident.",
  },
  {
    icon: ShieldCheck,
    title: "Built for the long term",
    description:
      "We don't build throwaway products. We build things that last and scale with your business.",
  },
];

function CodeLine({ number, children, color }) {
  return (
    <div className="flex items-center gap-5">
      <span className="text-white/20 text-[13px] w-4">
        {number}
      </span>

      <span
        className={`${color} text-[14px] leading-relaxed`}
      >
        {children}
      </span>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="max-w-[520px]">
            <h2 className="text-[22px] leading-[1.0] tracking-[-2px] font-black text-[#0B0F19]">
              Good software saves time.
              <br />
              Great software creates momentum.
            </h2>

            <div className="mt-6 space-y-4">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F5F7FF] border border-[#EEF2FF] flex items-center justify-center shrink-0">
                      <Icon
                        className="w-5 h-5 text-[#5B6CFF]"
                        strokeWidth={2.2}
                      />
                    </div>

                    <div>
                      <h3 className="text-md leading-none font-bold tracking-[-1px] text-[#0B0F19]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-black/55 max-w-[470px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center justify-center flex-1">
            <img src="/second-image.svg" className="w-full h-auto transform scale-110 md:scale-100" alt="" />
          </div>

        </div>
      </Container>
    </section>
  );
}