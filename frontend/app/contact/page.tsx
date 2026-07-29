"use client";

import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { services } from "@/lib/data";

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
      
      // We'll attempt to send, but if keys are missing/invalid, we'll catch the error
      // and display the requested fallback message.
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Replace with actual Service ID
        "YOUR_TEMPLATE_ID", // Replace with actual Template ID
        formRef.current!,
        "YOUR_PUBLIC_KEY" // Replace with actual Public Key
      );
      
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
    <div className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="text-sm font-medium text-slate-300">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let's Discuss Your <span className="text-amber-500">Business Needs</span>.
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Reach out to our team of experts to explore how we can support your organization's growth, compliance, and strategic objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
              
              {submitStatus === "success" && (
                <div className="mb-8 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <h4 className="text-green-500 font-semibold">Message Sent Successfully</h4>
                    <p className="text-green-400/80 text-sm mt-1">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <div>
                    <h4 className="text-red-500 font-semibold">Submission Failed</h4>
                    <p className="text-red-400/80 text-sm mt-1">
                      Message could not be sent. Please email us directly at contact@narco.com
                    </p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-medium text-slate-300">Full Name *</label>
                    <input 
                      type="text" 
                      id="user_name"
                      name="user_name" 
                      required 
                      minLength={2}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-medium text-slate-300">Email Address *</label>
                    <input 
                      type="email" 
                      id="user_email"
                      name="user_email" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                    <input 
                      type="tel" 
                      id="user_phone"
                      name="user_phone" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company_name" className="text-sm font-medium text-slate-300">Company Name</label>
                    <input 
                      type="text" 
                      id="company_name"
                      name="company_name" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">Service of Interest</label>
                  <select 
                    id="subject"
                    name="subject" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none"
                  >
                    <option value="" className="bg-slate-900">Select a service...</option>
                    {services.map(s => (
                      <option key={s.id} value={s.name} className="bg-slate-900">{s.name}</option>
                    ))}
                    <option value="General Inquiry" className="bg-slate-900">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message *</label>
                  <textarea 
                    id="message"
                    name="message" 
                    required 
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold shadow-lg hover:shadow-amber-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Head Office</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      123 Corporate Avenue, Business District<br />
                      City, State 12345<br />
                      Country
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-slate-400 text-sm">
                      +1 (555) 123-4567<br />
                      Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-slate-400 text-sm">
                      contact@narco.com<br />
                      support@narco.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden h-64 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3151.835434509374!2d144.95373531590415!3d-37.817209742021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1611815408161!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }} 
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

