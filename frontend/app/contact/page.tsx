"use client";

import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/data";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Note: In a real app, these would be environment variables
      // process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      // process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      // process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      
      // Using fetch to EmailJS REST API instead of the SDK to avoid dependency issues
      const formData = new FormData(formRef.current!);
      const data = {
        service_id: "YOUR_SERVICE_ID",
        template_id: "YOUR_TEMPLATE_ID",
        user_id: "YOUR_PUBLIC_KEY",
        template_params: {
          user_name: formData.get("user_name"),
          user_email: formData.get("user_email"),
          user_phone: formData.get("user_phone"),
          company_name: formData.get("company_name"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }
      };

      // We'll attempt to send, but if keys are missing/invalid, we'll catch the error
      // and display the requested fallback message.
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      
      setSubmitStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      // As per PRD: On failure, display inline error message
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header - matching the homepage hero theme */}
      <PageHero>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#8B1C31]/20 w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-[#8B1C31]"></span>
          <span className="text-sm font-bold text-[#8B1C31]">Get in Touch</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B1C31] mb-6 tracking-tight leading-[1.1]">
          Let&apos;s Discuss Your Business Needs.
        </h1>
        <p className="text-lg text-slate-700 font-medium leading-relaxed">
          Reach out to our team of experts to explore how we can support your organization&apos;s growth, compliance, and strategic objectives.
        </p>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-8">Send us a message</h3>
              
              {submitStatus === "success" && (
                <div className="mb-8 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                  <div>
                    <h4 className="text-green-800 font-bold">Message Sent Successfully</h4>
                    <p className="text-green-700 text-sm mt-1 font-medium">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
                  <div>
                    <h4 className="text-red-800 font-bold">Submission Failed</h4>
                    <p className="text-red-700 text-sm mt-1 font-medium">
                      Message could not be sent. Please email us directly at contact@narco.com
                    </p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-bold text-slate-700">Full Name *</label>
                    <input 
                      type="text" 
                      id="user_name"
                      name="user_name" 
                      required 
                      minLength={2}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#8B1C31] focus:ring-1 focus:ring-[#8B1C31] transition-colors font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-bold text-slate-700">Email Address *</label>
                    <input 
                      type="email" 
                      id="user_email"
                      name="user_email" 
                      required 
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#8B1C31] focus:ring-1 focus:ring-[#8B1C31] transition-colors font-medium"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="user_phone"
                      name="user_phone" 
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#8B1C31] focus:ring-1 focus:ring-[#8B1C31] transition-colors font-medium"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company_name" className="text-sm font-bold text-slate-700">Company Name</label>
                    <input 
                      type="text" 
                      id="company_name"
                      name="company_name" 
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#8B1C31] focus:ring-1 focus:ring-[#8B1C31] transition-colors font-medium"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-slate-700">Service of Interest</label>
                  <select 
                    id="subject"
                    name="subject" 
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#8B1C31] focus:ring-1 focus:ring-[#8B1C31] transition-colors font-medium"
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Message *</label>
                  <textarea 
                    id="message"
                    name="message" 
                    required 
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#8B1C31] focus:ring-1 focus:ring-[#8B1C31] transition-colors resize-none font-medium"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center py-4 rounded-xl bg-[#8B1C31] text-white font-bold shadow-lg hover:bg-[#6A1525] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8B1C31]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8B1C31]" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Head Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      123 Corporate Avenue, Business District<br />
                      City, State 12345<br />
                      Country
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8B1C31]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#8B1C31]" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Phone</h4>
                    <p className="text-slate-600 text-sm font-medium">
                      +1 (555) 123-4567<br />
                      Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8B1C31]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#8B1C31]" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Email</h4>
                    <p className="text-slate-600 text-sm font-medium">
                      contact@narco.com<br />
                      support@narco.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 border border-slate-300 rounded-3xl overflow-hidden h-64 relative shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3151.835434509374!2d144.95373531590415!3d-37.817209742021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1611815408161!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

