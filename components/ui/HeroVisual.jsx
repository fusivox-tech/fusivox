function MiniCard({ className, children }) {
  return (
    <div
      className={`absolute bg-white rounded-[22px] md:rounded-[32px] border border-black/[0.03] shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function CodeLine({ number, children, color }) {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <span className="text-white/20 text-[10px] md:text-[13px] w-3 md:w-4">
        {number}
      </span>

      <span
        className={`${color} text-[10px] md:text-[14px] leading-relaxed`}
      >
        {children}
      </span>
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[520px] md:h-[680px] px-4">
      {/* Background Glow */}
      <div className="absolute w-[320px] h-[320px] md:w-[620px] md:h-[620px] rounded-full bg-[#EEF2FF] blur-3xl opacity-90" />

      {/* Dotted Path */}
      <svg
        className="absolute inset-0 w-full h-full"
        fill="none"
        viewBox="0 0 900 700"
      >
        <path
          d="M620 120C720 120 760 200 760 260C760 340 690 360 690 430C690 520 760 540 790 540"
          stroke="#D7DBF5"
          strokeWidth="2"
          strokeDasharray="6 10"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative w-full max-w-[720px] h-[420px] md:h-[560px] scale-[0.78] sm:scale-[0.9] md:scale-100 origin-center">
        {/* Code Block */}
        <div className="absolute top-[10px] md:top-0 left-[60px] md:left-[120px] w-[250px] md:w-[430px] h-[150px] md:h-[245px] rounded-[22px] md:rounded-[32px] bg-[#071120] rotate-[-6deg] shadow-[0_20px_60px_rgba(2,6,23,0.35)] md:shadow-[0_30px_100px_rgba(2,6,23,0.45)] overflow-hidden border border-white/5 z-10">
          <div className="px-5 md:px-8 pt-5 md:pt-9 font-mono space-y-2 md:space-y-5">
            <CodeLine number="1" color="text-pink-400">
              const{" "}
              <span className="text-white">app</span>{" "}
              <span className="text-cyan-300">
                = express()
              </span>
              ;
            </CodeLine>

            <CodeLine number="2" color="text-blue-300">
              app.get(
              <span className="text-orange-300">
                "/api/data"
              </span>
            </CodeLine>

            <CodeLine number="3" color="text-purple-300">
              const data = await getData();
            </CodeLine>

            <CodeLine number="4" color="text-green-300">
              res.json(success: true)
            </CodeLine>
          </div>

          <div className="absolute bottom-4 md:bottom-6 left-5 md:left-8 flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400" />

            <span className="text-white/70 text-[11px] md:text-sm">
              Node.js
            </span>
          </div>
        </div>

        {/* Analytics Card */}
        <MiniCard className="w-[260px] md:w-[430px] h-[220px] md:h-[320px] left-[20px] md:left-[60px] top-[110px] md:top-[145px] rotate-[5deg] p-5 md:p-8 z-20">
          <h3 className="text-[14px] md:text-[18px] font-semibold text-[#111827]">
            Analytics Overview
          </h3>

          <div className="mt-4 md:mt-8 grid grid-cols-2 gap-3 md:gap-5">
            <div className="bg-[#FAFAFA] rounded-[16px] md:rounded-[22px] p-3 md:p-6 border border-black/[0.03]">
              <p className="text-[10px] md:text-sm text-black/40">
                Total Users
              </p>

              <h4 className="mt-2 md:mt-3 text-[24px] md:text-[42px] leading-none font-black tracking-[-1px] md:tracking-[-2px]">
                12,560
              </h4>

              <span className="text-[#22C55E] text-[10px] md:text-sm font-medium mt-1 md:mt-2 inline-block">
                +12.5%
              </span>
            </div>

            <div className="bg-[#FAFAFA] rounded-[16px] md:rounded-[22px] p-3 md:p-6 border border-black/[0.03]">
              <p className="text-[10px] md:text-sm text-black/40">
                Revenue
              </p>

              <h4 className="mt-2 md:mt-3 text-[24px] md:text-[42px] leading-none font-black tracking-[-1px] md:tracking-[-2px]">
                ₦24.8M
              </h4>

              <span className="text-[#22C55E] text-[10px] md:text-sm font-medium mt-1 md:mt-2 inline-block">
                +18.3%
              </span>
            </div>
          </div>

          {/* Graph */}
          <div className="relative mt-5 md:mt-8 h-[60px] md:h-[110px]">
            <svg
              viewBox="0 0 360 100"
              className="absolute inset-0 w-full h-full"
              fill="none"
            >
              <path
                d="M0 80C20 70 30 55 50 60C70 65 80 25 100 30C120 35 130 70 150 65C170 60 180 25 200 30C220 35 230 70 250 60C270 50 280 20 300 15C320 10 330 35 360 25"
                stroke="url(#paint0_linear)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="0"
                  x2="360"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#93C5FD" />
                  <stop offset="1" stopColor="#6366F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </MiniCard>

        {/* Phone Card */}
        <MiniCard className="w-[170px] md:w-[250px] right-[0px] md:right-[20px] top-[130px] md:top-[160px] rounded-[26px] md:rounded-[36px] p-4 md:p-7 z-30">
          <div className="flex items-center justify-between mb-4 md:mb-8">
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-black" />

            <div className="w-8 md:w-12 h-1 md:h-1.5 rounded-full bg-black" />
          </div>

          <p className="text-[11px] md:text-[16px] text-black/60">
            Good morning,
          </p>

          <h3 className="text-[24px] md:text-[40px] leading-none font-black mt-1 md:mt-2 tracking-[-1px] md:tracking-[-2px]">
            Alex 👋
          </h3>

          <div className="mt-5 md:mt-10">
            <p className="text-[10px] md:text-sm text-black/40">
              Today's Sales
            </p>

            <div className="mt-2 md:mt-3">
              <h4 className="text-[18px] md:text-[32px] leading-tight font-black tracking-[-1px]">
                ₦8.54M
              </h4>

              <span className="text-[#60A5FA] text-[10px] md:text-sm font-semibold">
                +14.2%
              </span>
            </div>
          </div>

          <div className="mt-5 md:mt-10">
            <p className="text-[10px] md:text-sm font-semibold text-black/70 mb-3 md:mb-5">
              Recent Orders
            </p>

            <div className="space-y-3 md:space-y-5">
              {[
                {
                  id: "#100",
                  amount: "₦34k",
                },
                {
                  id: "#123",
                  amount: "₦701k",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 md:w-10 h-7 md:h-10 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300" />

                    <div>
                      <p className="text-[9px] md:text-sm font-semibold">
                        {item.id}
                      </p>

                      <p className="text-[8px] md:text-xs text-black/35">
                        2h ago
                      </p>
                    </div>
                  </div>

                  <span className="text-[9px] md:text-sm font-semibold">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </MiniCard>

        {/* Deploy Card */}
        <MiniCard className="top-[80px] md:top-[95px] right-[-5px] md:right-[-10px] px-4 md:px-7 py-3 md:py-6 z-40">
          <p className="text-[9px] md:text-sm text-black/40">
            Deploy
          </p>

          <p className="text-[12px] md:text-lg font-semibold mt-1">
            Production
          </p>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#22C55E]" />
            </div>
          </div>
        </MiniCard>

        {/* Status Card */}
        <MiniCard className="bottom-[20px] md:bottom-[35px] left-[-5px] md:left-[-10px] px-4 md:px-8 py-4 md:py-7 z-40">
          <h4 className="font-semibold text-[12px] md:text-lg">
            System Status
          </h4>

          <p className="text-[10px] md:text-base text-black/35 mt-2 md:mt-5">
            Operational
          </p>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#22C55E]" />
            </div>
          </div>
        </MiniCard>
      </div>
    </div>
  );
}