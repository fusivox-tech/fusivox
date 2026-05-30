"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp } from "@/components/ui/ScrollAnimation";

export default function TermsPage() {
  return (
    <div className="h-screen overflow-y-auto srollbar-hide">
      <Navbar />
      <main className="bg-white reltive text-[#0B1020]">
        <section className="pt-8 md:pt-8 pb-12 md:pb-20">
          <Container>
            <FadeInUp>
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
                  Terms of Service
                </h1>
                <p className="text-black/60 text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="prose prose-sm md:prose-base max-w-none space-y-6 text-black/70">
                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Agreement to Terms</h2>
                  <p>
                    By accessing our website or engaging our services, you agree to be bound by these Terms of Service.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Our Services</h2>
                  <p>
                    Fusivox provides software development services including websites, web applications, 
                    mobile apps, and internal tools. Project scope, timelines, and deliverables will be 
                    specified in individual project agreements.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Payment Terms</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>A deposit is required before work begins (typically 30-50% of project cost)</li>
                    <li>Milestone payments based on project progress</li>
                    <li>Final payment upon project completion before launch</li>
                    <li>All payments are processed securely via Paystack</li>
                    <li>Prices are in Nigerian Naira (₦) unless otherwise specified</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Refund Policy</h2>
                  <p>
                    Due to the custom nature of software development, refunds are handled on a case-by-case basis:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Deposits are non-refundable after work has commenced</li>
                    <li>Milestone payments are refundable only if work hasn't been started on that phase</li>
                    <li>Completed deliverables are non-refundable</li>
                    <li>If we fail to deliver as agreed, proportional refunds will be provided</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Intellectual Property</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Full ownership of final deliverables transfers to client upon full payment</li>
                    <li>Fusivox retains rights to reusable code, components, and frameworks</li>
                    <li>Third-party assets (fonts, images, software) are subject to their licenses</li>
                    <li>Source code will be delivered via private GitHub repository</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Project Timeline & Revisions</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Estimated timelines provided at project start</li>
                    <li>Delays may occur due to client feedback time or changing requirements</li>
                    <li>Two rounds of revisions included per milestone</li>
                    <li>Additional revisions billed at hourly rate</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Warranty & Support</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>30 days of bug fixes included after launch</li>
                    <li>Support beyond 30 days available via maintenance retainer</li>
                    <li>Warranty covers bugs, not new features or design changes</li>
                    <li>We are not responsible for issues caused by third-party modifications</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, Fusivox shall not be liable for any indirect, 
                    incidental, or consequential damages arising from use of our services. Our total liability 
                    shall not exceed the amount paid for the specific project.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Termination</h2>
                  <p>
                    Either party may terminate a project agreement with written notice. Upon termination:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Client pays for all completed work up to termination date</li>
                    <li>Completed deliverables will be provided to client</li>
                    <li>Deposits for incomplete work may be partially refundable</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Governing Law</h2>
                  <p>
                    These terms are governed by the laws of the Federal Republic of Nigeria. 
                    Any disputes shall be resolved in Lagos, Nigeria.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Changes to Terms</h2>
                  <p>
                    We may update these terms at any time. Continued use of our services constitutes 
                    acceptance of the updated terms.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-black mt-6">Contact Us</h2>
                  <p>
                    For questions about these terms, contact: hello@fusivox.com or +234 810 944 8643
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