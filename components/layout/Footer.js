import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07101F] text-white pt-24 pb-10">
      <Container>
        <div className="grid lg:grid-cols-4 gap-16">
          <div>
            <div className="text-3xl font-black">
              <img src="/wordmark.svg" className="h-8" alt="" />
            </div>

            <p className="mt-6 text-white/60 leading-7">
              We build modern software products designed for
              growth-focused businesses.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Services
            </h3>

            <div className="mt-6 space-y-4 text-white/60">
              <p>Websites</p>
              <p>Web Applications</p>
              <p>Mobile Apps</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Company
            </h3>

            <div className="mt-6 space-y-4 text-white/60">
              <p>About</p>
              <p>Portfolio</p>
              <p>Pricing</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Let’s build something great
            </h3>

            <button className="mt-8 h-12 px-6 flex items-center gap-5 rounded-xl bg-[#5B5CF0] font-semibold">
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col lg:flex-row items-center justify-between gap-5 text-white/50 text-sm">
          <p>© 2026 Fusivox. All rights reserved.</p>

          <div className="flex gap-8">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}