"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import { ArrowRight, X } from "lucide-react";

const whatsappUrl = (message) => {
  return `https://wa.me/2348109448643?text=${encodeURIComponent(message)}`;
};

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl("Hi! I'm ready to start my project. Let's talk!"), '_blank');
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <Container>
          <div className="h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-black tracking-tight">
              <img src="/wordmark.svg" className="h-6" alt="logo" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative px-5 py-2.5 text-[15px] font-medium transition-all duration-300
                      ${
                        isActive
                          ? "text-black border-b-2 border-[#5B5CF0]"
                          : "text-black/60 hover:text-black"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <button onClick={() => handleWhatsAppClick()} className="hidden lg:flex h-11 px-6 rounded-xl bg-[#0B1020] text-white text-sm items-center gap-5 font-semibold shadow-lg shadow-black/10 hover:scale-[1.02] transition">
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Full Screen Menu */}
      <div
        className={`
          fixed inset-0 z-40 bg-white lg:hidden
          transition-all duration-500 ease-in-out
          ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
        style={{
          top: "80px", // Height of header
        }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto pt-8 pb-20">
            <div className="container mx-auto px-6">
              <div className="flex flex-col space-y-2">
                {links.map((link, index) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`
                        relative px-6 py-4 rounded-2xl text-lg font-medium
                        transition-all duration-300 transform
                        ${
                          isMenuOpen
                            ? "translate-x-0 opacity-100"
                            : "translate-x-8 opacity-0"
                        }
                        ${
                          isActive
                            ? "bg-[#0b10201e] text-black"
                            : "text-black/60 hover:text-black"
                        }
                      `}
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA Button */}
              <div
                className="mt-10 w-full"
                style={{
                  transitionDelay: `${links.length * 50}ms`,
                }}
              >
                <button
                  onClick={() => handleWhatsAppClick()}
                  className={`
                    w-full h-12 px-6 rounded-xl bg-[#0B1020] text-white text-sm
                    flex items-center justify-center gap-5 font-semibold
                    shadow-lg shadow-black/10 hover:scale-[1.02] transition
                    ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
                  `}
                  style={{
                    transition: "all 0.3s ease-in-out",
                    transitionDelay: `${links.length * 50 + 50}ms`,
                  }}
                >
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}