"use client";

import Container from "../ui/Container";

const links = [
  "Home",
  "Services",
  "Portfolio",
  "Pricing",
  "About",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight">
            <span className="text-[#5B5CF0]">FUSI</span>
            <span>VOX</span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[15px] font-medium text-black/70 hover:text-black transition"
              >
                {link}
              </a>
            ))}
          </nav>

          <button className="h-11 px-6 rounded-xl bg-[#0B1020] text-white text-sm font-semibold shadow-lg shadow-black/10 hover:scale-[1.02] transition">
            Start a Project →
          </button>
        </div>
      </Container>
    </header>
  );
}