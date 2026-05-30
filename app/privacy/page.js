"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp } from "@/components/ui/ScrollAnimation";

export default function PrivacyPage() {
  return (
    <div className="h-screen overflow-y-auto srollbar-hide">
      <Navbar />
      <main className="bg-white relative text-[#0B1020]">
        <section className="pt-8 md:pt-8 pb-12 md:pb-20">
          <Container>
            <FadeInUp>
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
                  Privacy Policy
                </h1>
                <p className="text-black/60 text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="prose prose-sm md:prose-base max-w-none space-y-6 text-black/70">
                  <p>
                    At Fusivox, we take your privacy seriously. This policy describes how we collect, 
                    use, and protect your personal information when you use our services.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Information We Collect</h2>
                  <p>We collect information you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Project details and requirements</li>
                    <li>Communications between you and Fusivox</li>
                    <li>Payment information (processed securely via Paystack)</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">How We Use Your Information</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and deliver our software development services</li>
                    <li>To communicate with you about your project</li>
                    <li>To process payments and prevent fraud</li>
                    <li>To improve our services and customer experience</li>
                    <li>To comply with legal obligations</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who assist in our operations (payment processors, hosting)</li>
                    <li>When required by law or to protect legal rights</li>
                    <li>With your explicit consent</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Data Security</h2>
                  <p>
                    We implement industry-standard security measures to protect your information. 
                    However, no method of transmission over the internet is 100% secure.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Contact Us</h2>
                  <p>
                    For privacy-related questions, contact us at: hello@fusivox.com or +234 810 944 8643
                  </p>
                </div>
              </div>
            </FadeInUp>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}