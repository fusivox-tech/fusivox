import Container from "../ui/Container";

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#FAFBFF]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black leading-tight">
              Good software saves time.
              <br />
              Great software creates momentum.
            </h2>

            <div className="mt-12 space-y-8">
              {[
                "Fast performance",
                "Clean systems",
                "Clear communication",
                "Built for the long term",
              ].map((item) => (
                <div key={item}>
                  <h3 className="text-xl font-bold">
                    {item}
                  </h3>

                  <p className="text-black/60 mt-2 leading-7">
                    Modern scalable systems designed for growth.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px]">
            <div className="absolute inset-0 rounded-[40px] bg-[#0F172A] shadow-2xl overflow-hidden p-10">
              <div className="space-y-5 font-mono text-sm">
                <div className="text-cyan-400">
                  export async function GET()
                </div>

                <div className="text-purple-400">
                  await db.collection()
                </div>

                <div className="text-green-400">
                  return Response.json()
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-[-20px] bg-white rounded-3xl p-8 shadow-2xl w-[260px]">
              <div className="space-y-6">
                {["Code Quality", "Performance", "Accessibility"].map(
                  (item, i) => (
                    <div key={item}>
                      <div className="flex justify-between text-sm">
                        <span>{item}</span>
                        <span>{95 + i}%</span>
                      </div>

                      <div className="mt-2 h-3 rounded-full bg-black/5 overflow-hidden">
                        <div
                          className="h-full bg-[#5B5CF0] rounded-full"
                          style={{
                            width: `${95 + i}%`,
                          }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}