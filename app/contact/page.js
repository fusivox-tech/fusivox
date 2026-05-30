"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { FadeInUp, FadeIn } from "@/components/ui/ScrollAnimation";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Loader2,
  User,
  MessageCircle,
  PhoneCall,
  AtSign,
  Briefcase,
  AlertCircle,
  Palette,
  Clock,
  DollarSign,
  CheckCircle
} from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import SuccessModal from "@/components/ui/SuccessModal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
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
        setModalMessage("Thank you for reaching out! We'll get back to you within 24 hours.");
        setModalOpen(true);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredContact: "",
          project: "",
          problem: "",
          designs: "",
          timeline: "",
          budget: ""
        });
      } else {
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

  // Options for dropdowns with icon mapping
  const preferredContactOptions = [
    { value: "", label: "Select method" },
    { value: "WhatsApp", label: "WhatsApp" },
    { value: "Phone Call", label: "Phone Call" },
    { value: "Email", label: "Email" }
  ];

  // Icon mapping for preferred contact methods
  const contactIconMap = {
    "WhatsApp": MessageCircle,
    "Phone Call": PhoneCall,
    "Email": Mail
  };

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
    <div className="h-screen overflow-y-auto scrollbar-hide">
      <Navbar />
      <main className="bg-gradient-to-b from-white to-[#FAFBFF] relative text-[#0B1020]">
        
        {/* Hero Section */}
        <section className="pt-12 pb-16 md:pt-16 md:pb-20">
          <Container>
            <FadeInUp>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-6">
                  <MessageCircle className="w-4 h-4 text-[#5B5CF0]" />
                  <span className="text-sm font-medium text-[#5B5CF0]">Let's Connect</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] bg-gradient-to-r from-[#0B1020] to-[#5B5CF0] bg-clip-text text-transparent">
                  Start Your Digital Journey
                </h1>
                <p className="mt-6 text-base md:text-lg text-black/60 leading-relaxed max-w-2xl mx-auto">
                  Share your vision with us. Whether it's a website, app, or complex system, 
                  we're here to bring your ideas to life.
                </p>
              </div>
            </FadeInUp>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="pb-20 md:pb-32">
          <Container>
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="bg-white rounded-3xl shadow-xl border border-black/5">
                  <div className="bg-gradient-to-r from-[#5B5CF0] to-[#7B7CF0] px-6 py-8 md:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Tell us about your project
                    </h2>
                    <p className="text-white/80 text-sm md:text-base">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                    {/* Contact Information Section */}
                    <div className="space-y-5">
                      <h3 className="text-lg font-bold text-[#0B1020] flex items-center gap-2">
                        <User className="w-5 h-5 text-[#5B5CF0]" />
                        Contact Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-[#0B1020]">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black/40" />
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/10 focus:border-[#5B5CF0] focus:outline-none transition text-sm"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-[#0B1020]">
                            Email Address *
                          </label>
                          <div className="relative">
                            <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black/40" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/10 focus:border-[#5B5CF0] focus:outline-none transition text-sm"
                            />
                          </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-[#0B1020]">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black/40" />
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+234 810 944 8643"
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/10 focus:border-[#5B5CF0] focus:outline-none transition text-sm"
                            />
                          </div>
                        </div>

                        {/* Preferred Contact Method with Dynamic Icon */}
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-[#0B1020]">
                            Preferred Contact Method *
                          </label>
                          <CustomSelect
                            name="preferredContact"
                            value={formData.preferredContact}
                            onChange={handleChange}
                            options={preferredContactOptions}
                            placeholder="Select contact method"
                            required
                            iconMap={contactIconMap}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details Section */}
                    <div className="space-y-5">
                      <h3 className="text-lg font-bold text-[#0B1020] flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-[#5B5CF0]" />
                        Project Details
                      </h3>

                      {/* Project Type */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#0B1020]">
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
                        <label className="block text-sm font-semibold mb-2 text-[#0B1020]">
                          What problem are you trying to solve? *
                        </label>
                        <div className="relative">
                          <textarea
                            name="problem"
                            required
                            rows={4}
                            value={formData.problem}
                            onChange={handleChange}
                            placeholder="Tell us about your business, the challenges you're facing, and what you hope to achieve..."
                            className="w-full pl-4 pr-4 py-3 rounded-xl border border-black/10 focus:border-[#5B5CF0] focus:outline-none transition resize-none text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        {/* Designs */}
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-[#0B1020]">
                            <Palette className="w-4 h-4 inline mr-1" />
                            Do you have designs?
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
                          <label className="block text-sm font-semibold mb-2 text-[#0B1020]">
                            <Clock className="w-4 h-4 inline mr-1" />
                            Timeline
                          </label>
                          <CustomSelect
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            options={timelineOptions}
                            placeholder="Select timeline"
                          />
                        </div>
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#0B1020]">
                          <DollarSign className="w-4 h-4 inline mr-1" />
                          Estimated Budget
                        </label>
                        <CustomSelect
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          options={budgetOptions}
                          placeholder="Select budget range"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 md:h-14 rounded-xl bg-gradient-to-r from-[#5B5CF0] to-[#7B7CF0] text-white text-sm md:text-base font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending your message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </FadeIn>

              {/* Contact Methods - Redesigned */}
              <div className="mt-12">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* WhatsApp */}
                  <div 
                    onClick={() => window.open('https://wa.me/2348109448643', '_blank')}
                    className="bg-white rounded-2xl p-6 border border-black/5 hover:shadow-lg transition-all duration-300 cursor-pointer group text-center"
                  >
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                      <MessageCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                    <p className="text-sm text-black/60">+234 810 944 8643</p>
                    <p className="text-xs text-green-600 mt-2 group-hover:underline">Click to chat →</p>
                  </div>
                  
                  {/* Email */}
                  <div className="bg-white rounded-2xl p-6 border border-black/5 text-center">
                    <div className="w-14 h-14 bg-[#5B5CF0]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-7 h-7 text-[#5B5CF0]" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-sm text-black/60">fusivox@gmail.com</p>
                    <p className="text-xs text-[#5B5CF0] mt-2">24/7 Support</p>
                  </div>
                  
                  {/* Location */}
                  <div className="bg-white rounded-2xl p-6 border border-black/5 text-center">
                    <div className="w-14 h-14 bg-[#5B5CF0]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-7 h-7 text-[#5B5CF0]" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-sm text-black/60">Ogun State, Nigeria</p>
                    <p className="text-xs text-[#5B5CF0] mt-2">Remote & On-site</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAFBFF] to-white">
          <Container>
            <FadeInUp className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#5B5CF0]/10 rounded-full px-4 py-2 mb-4">
                <CheckCircle className="w-4 h-4 text-[#5B5CF0]" />
                <span className="text-sm font-medium text-[#5B5CF0]">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#0B1020] to-[#5B5CF0] bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-black/60 max-w-2xl mx-auto">
                Everything you need to know about working with us
              </p>
            </FadeInUp>
            
            <div className="max-w-3xl mx-auto space-y-4">
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
                  <div className="bg-white rounded-2xl p-6 md:p-7 border border-black/5 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-lg mb-2 text-[#0B1020]">{faq.q}</h3>
                    <p className="text-black/60 leading-relaxed">{faq.a}</p>
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