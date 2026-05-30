"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, FadeIn } from "@/components/ui/ScrollAnimation";
import { openWhatsApp } from "@/utils/whatsapp";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect"; // Import the custom select

export default function ContactPage() {
  const [formData, setFormData] = useState({
    project: "",
    problem: "",
    designs: "",
    timeline: "",
    budget: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Project Type: ${formData.project}\nProblem: ${formData.problem}\nDesigns: ${formData.designs}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}`;
    openWhatsApp(message);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Define options for each dropdown
  const projectOptions = [
    { value: "", label: "Select project type" },
    { value: "Business Website", label: "Business Website" },
    { value: "Web Application", label: "Web Application" },
    { value: "Mobile App", label: "Mobile App" },
    { value: "Internal Tool", label: "Internal Tool" },
    { value: "Not sure yet", label: "Not sure yet" }
  ];

  const designsOptions = [
    { value: "", label: "Select option" },
    { value: "Yes, I have complete designs", label: "Yes, I have complete designs" },
    { value: "I have some rough sketches", label: "I have some rough sketches" },
    { value: "No, I need help with design", label: "No, I need help with design" }
  ];

  const timelineOptions = [
    { value: "", label: "Select timeline" },
    { value: "ASAP (within 2-4 weeks)", label: "ASAP (within 2-4 weeks)" },
    { value: "1-2 months", label: "1-2 months" },
    { value: "3-4 months", label: "3-4 months" },
    { value: "Flexible", label: "Flexible" }
  ];

  const budgetOptions = [
    { value: "", label: "Select budget range" },
    { value: "Below ₦500,000", label: "Below ₦500,000" },
    { value: "₦500,000 - ₦1,000,000", label: "₦500,000 - ₦1,000,000" },
    { value: "₦1,000,000 - ₦2,500,000", label: "₦1,000,000 - ₦2,500,000" },
    { value: "₦2,500,000 - ₦5,000,000", label: "₦2,500,000 - ₦5,000,000" },
    { value: "₦5,000,000+", label: "₦5,000,000+" },
    { value: "Need advice", label: "Need advice" }
  ];

  return (
    <div className="h-screen overflow-y-auto srollbar-hide">
      <Navbar />
      <main className="bg-white relative text-[#0B1020]">
        {/* Hero Section */}
        <section className="pt-8 pb-12 md:pb-16">
          <Container>
            <FadeInUp>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2]">
                  Tell us what you're trying to build.
                </h1>
                <p className="mt-4 md:mt-6 text-sm md:text-base text-black/60 leading-relaxed">
                  No generic forms. No sales calls. Just tell us about your project
                  and we'll get back to you with honest advice.
                </p>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="pb-16 md:pb-24">
          <Container>
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      What are you building? *
                    </label>
                    <CustomSelect
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      options={projectOptions}
                      placeholder="Select project type"
                      required
                    />
                  </div>

                  {/* Problem */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      What problem are you trying to solve? *
                    </label>
                    <textarea
                      name="problem"
                      required
                      rows={4}
                      value={formData.problem}
                      onChange={handleChange}
                      placeholder="Tell us about your business, the challenges you're facing, and what you hope to achieve..."
                      className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#5B5CF0] focus:outline-none transition resize-none text-sm"
                    />
                  </div>

                  {/* Designs */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Do you already have designs?
                    </label>
                    <CustomSelect
                      name="designs"
                      value={formData.designs}
                      onChange={handleChange}
                      options={designsOptions}
                      placeholder="Select option"
                    />
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      What timeline are you working with?
                    </label>
                    <CustomSelect
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      options={timelineOptions}
                      placeholder="Select timeline"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      What's your estimated budget?
                    </label>
                    <CustomSelect
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      options={budgetOptions}
                      placeholder="Select budget range"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 md:h-14 rounded-xl bg-[#5B5CF0] text-white text-sm md:text-base font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 md:gap-3"
                  >
                    Send message via WhatsApp
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </FadeIn>

              {/* Alternative Contact */}
              <div className="mt-10 md:mt-12 pt-8 border-t border-black/5">
                <div className="grid md:grid-cols-3 gap-5 md:gap-6 text-center">
                  <div>
                    <Mail className="w-5 h-5 text-[#5B5CF0] mx-auto mb-2" />
                    <p className="text-xs md:text-sm text-black/60">fusivox@gmail.com</p>
                  </div>
                  <div>
                    <Phone className="w-5 h-5 text-[#5B5CF0] mx-auto mb-2" />
                    <p className="text-xs md:text-sm text-black/60">+234 810 944 8643</p>
                  </div>
                  <div>
                    <MapPin className="w-5 h-5 text-[#5B5CF0] mx-auto mb-2" />
                    <p className="text-xs md:text-sm text-black/60">Ogun State, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-[#FAFBFF]">
          <Container>
            <FadeInUp className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black">Quick answers</h2>
            </FadeInUp>
            
            <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
              {[
                {
                  q: "How long does a typical project take?",
                  a: "A business website typically takes 1-2 weeks. Web applications and mobile apps take 2 weeks to 2 months depending on complexity."
                },
                {
                  q: "Do you offer maintenance after launch?",
                  a: "Yes. We offer ongoing support and maintenance packages to keep your software running smoothly."
                },
                {
                  q: "Can you work with my existing team?",
                  a: "Absolutely. We can collaborate with your in-house team or handle everything ourselves."
                },
                {
                  q: "What happens if I need changes after we start?",
                  a: "We build flexibility into our process. Scope changes are discussed openly and adjusted as needed."
                }
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-black/5">
                    <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{faq.q}</h3>
                    <p className="text-sm md:text-base text-black/60">{faq.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}