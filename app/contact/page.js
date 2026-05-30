"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, FadeIn } from "@/components/ui/ScrollAnimation";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import SuccessModal from "@/components/ui/SuccessModal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    project: "",
    problem: "",
    designs: "",
    timeline: "",
    budget: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - show modal
        setModalMessage("Thank you for reaching out! We'll get back to you within 24 hours.");
        setModalOpen(true);
        
        // Reset form
        setFormData({
          project: "",
          problem: "",
          designs: "",
          timeline: "",
          budget: ""
        });
      } else {
        // Error
        setModalMessage(data.error || "Something went wrong. Please try again.");
        setModalOpen(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModalMessage("Network error. Please check your connection and try again.");
      setModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
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
                    disabled={isSubmitting}
                    className="w-full h-12 md:h-14 rounded-xl bg-[#5B5CF0] text-white text-sm md:text-base font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </FadeIn>

              {/* Alternative Contact */}
              <div className="mt-10 md:mt-12 pt-8 border-t border-black/5">
                <div className="grid md:grid-cols-3 gap-5 md:gap-6 text-center">
                  {/* WhatsApp Contact */}
                  <div 
                    onClick={() => window.open('https://wa.me/2348109448643', '_blank')}
                    className="cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-green-100 transition-colors">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.874 3.149.874h.002c3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.766-5.766zm2.057 7.322c-.113.234-.405.479-.742.686-.262.154-.606.276-.92.317-.274.034-.558.051-.85.051-.414 0-.841-.063-1.226-.189-.264-.082-.512-.197-.735-.341-.171-.11-.329-.23-.473-.357-.079-.072-.125-.11-.125-.11l.014.013c.177.177.312.391.396.63.084.239.128.5.128.775 0 .672-.272 1.313-.717 1.793-.439.474-1.054.781-1.731.864-.18.022-.363.033-.548.033-.492 0-.966-.114-1.395-.335-.361-.186-.684-.445-.957-.764-.334-.389-.549-.858-.622-1.365-.073-.507-.043-1.028.088-1.526.131-.499.335-.966.599-1.387.235-.375.516-.715.834-1.008.184-.169.38-.324.585-.464.198-.135.397-.259.603-.37.205-.111.409-.209.62-.293.212-.084.423-.145.639-.182.215-.037.432-.056.648-.056.157 0 .312.013.465.038.162.026.322.064.476.114.128.042.253.093.373.151.078.038.155.08.231.125.066.039.13.08.193.123l.047.031c.014.01.028.019.041.029.013.01.026.02.038.03l.038.031c.012.01.024.02.036.03.012.01.024.02.035.03l.033.027c.012.01.024.02.035.03.011.01.022.02.033.03.022.02.044.041.065.062.043.041.085.084.125.128.079.089.154.182.224.279.14.193.252.408.332.641.08.233.122.484.122.752 0 .289-.05.583-.149.865z"/>
                      </svg>
                    </div>
                    <p className="text-xs md:text-sm text-black/60 group-hover:text-green-600 transition-colors">
                      WhatsApp/Call: +234 810 944 8643
                    </p>
                  </div>
                  
                  <div>
                    <Mail className="w-5 h-5 text-[#5B5CF0] mx-auto mb-2" />
                    <p className="text-xs md:text-sm text-black/60">fusivox@gmail.com</p>
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
      
      {/* Success Modal */}
      <SuccessModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalMessage}
      />
    </div>
  );
}