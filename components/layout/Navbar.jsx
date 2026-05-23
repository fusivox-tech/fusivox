"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight">
            <img
              src="/wordmark.svg"
              className="h-6"
              alt="logo"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-3">
            {links.map((link) => {
              const isActive =
                pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    relative px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#0B1020] text-white shadow-lg shadow-black/10"
                        : "text-black/60 hover:text-black hover:bg-black/[0.04]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <button className="h-11 px-6 rounded-xl bg-[#0B1020] text-white text-sm flex items-center gap-5 font-semibold shadow-lg shadow-black/10 hover:scale-[1.02] transition">
            Start a Project
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </header>
  );
}