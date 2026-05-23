function MiniCard({
  className,
  children,
}) {
  return (
    <div
      className={`absolute bg-white rounded-3xl border border-black/5 shadow-2xl shadow-black/10 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative h-[650px] hidden lg:flex items-center justify-center">
      <div className="absolute w-[520px] h-[520px] rounded-full bg-indigo-100 blur-3xl opacity-60" />

      <div className="relative">
        <div className="w-[420px] h-[250px] rounded-[34px] bg-[#0F172A] rotate-[-6deg] shadow-2xl overflow-hidden border border-white/10">
          <div className="flex gap-2 px-6 pt-5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          <div className="px-8 pt-10 space-y-5 font-mono text-sm">
            <div className="text-cyan-400">
              const app = express()
            </div>

            <div className="text-purple-400">
              app.get('/api/data')
            </div>

            <div className="text-green-400">
              res.json(success: true)
            </div>

            <div className="text-orange-300">
              export default app
            </div>
          </div>
        </div>

        <MiniCard className="w-[340px] p-7 top-[120px] left-[-60px] rotate-[5deg]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black/50">
                Analytics Overview
              </p>

              <h3 className="text-4xl font-black mt-2">
                ₦24.8M
              </h3>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              📈
            </div>
          </div>

          <div className="mt-8 flex items-end gap-3 h-32">
            {[40, 65, 50, 90, 75, 110].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-full bg-gradient-to-t from-[#5B5CF0] to-indigo-200"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </MiniCard>

        <MiniCard className="w-[240px] p-6 top-[70px] right-[-80px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black/50">
                Sales
              </p>

              <h4 className="text-3xl font-black mt-2">
                ₦450k
              </h4>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center">
              💬
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-10 rounded-xl bg-black/[0.04]"
              />
            ))}
          </div>
        </MiniCard>

        <MiniCard className="bottom-[-30px] left-10 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

            <div>
              <p className="text-sm font-semibold">
                System Status
              </p>

              <p className="text-xs text-black/50">
                Operational
              </p>
            </div>
          </div>
        </MiniCard>
      </div>
    </div>
  );
}