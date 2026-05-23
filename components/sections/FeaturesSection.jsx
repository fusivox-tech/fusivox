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

          {/* RIGHT */}
          <div className="relative h-[520px] flex items-center justify-center">
            {/* Glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-[#EEF2FF] blur-3xl opacity-70" />

            {/* CODE WINDOW */}
            <div className="relative w-[540px] h-[340px] rounded-[32px] bg-[#071120] overflow-hidden shadow-[0_40px_120px_rgba(2,6,23,0.35)] border border-white/5">
              {/* subtle overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_35%)]" />

              <div className="relative z-10 px-10 pt-10 font-mono space-y-6">
                <CodeLine
                  number="1"
                  color="text-white/25"
                >
                  // Clean. Scalable. Maintainable.
                </CodeLine>

                <CodeLine
                  number="2"
                  color="text-pink-400"
                >
                  import{" "}
                  <span className="text-yellow-300">
                    {"{ NextResponse }"}
                  </span>{" "}
                  <span className="text-white">
                    from
                  </span>{" "}
                  <span className="text-green-300">
                    "next/server"
                  </span>
                </CodeLine>

                <div className="h-2" />

                <CodeLine
                  number="4"
                  color="text-purple-400"
                >
                  export async function GET() {"{"}
                </CodeLine>

                <CodeLine
                  number="5"
                  color="text-blue-300"
                >
                  const data = await
                  db.collection("users")
                </CodeLine>

                <CodeLine
                  number="6"
                  color="text-cyan-300"
                >
                  .find({"{"} active: true {"}"})
                </CodeLine>

                <CodeLine
                  number="7"
                  color="text-cyan-300"
                >
                  .limit(10)
                </CodeLine>

                <div className="h-2" />

                <CodeLine
                  number="10"
                  color="text-orange-300"
                >
                  return NextResponse.json({"{"}
                </CodeLine>

                <CodeLine
                  number="11"
                  color="text-green-300"
                >
                  success: true, data
                  {" }"}
                </CodeLine>

                <CodeLine
                  number="13"
                  color="text-white/35"
                >
                  {"}"}
                </CodeLine>
              </div>
            </div>

            {/* SCORE CARD */}
            <div className="absolute right-[-10px] bottom-[70px] w-[290px] bg-white rounded-[28px] border border-black/[0.04] shadow-[0_30px_80px_rgba(15,23,42,0.12)] p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[18px] font-semibold text-[#0B0F19]">
                  Code Quality
                </h3>

                <span className="text-[#22C55E] text-sm font-bold">
                  A+
                </span>
              </div>

              <div className="space-y-8">
                {[
                  {
                    label: "Performance",
                    value: "90%",
                    width: "90%",
                  },
                  {
                    label: "Best Practices",
                    value: "100%",
                    width: "100%",
                  },
                  {
                    label: "Accessibility",
                    value: "90%",
                    width: "90%",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[15px] font-medium text-black/70">
                        {item.label}
                      </span>

                      <span className="text-[15px] font-semibold text-[#22C55E]">
                        {item.value}
                      </span>
                    </div>

                    <div className="h-[10px] rounded-full bg-[#F3F4F6] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#34D399] to-[#22C55E]"
                        style={{
                          width: item.width,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}