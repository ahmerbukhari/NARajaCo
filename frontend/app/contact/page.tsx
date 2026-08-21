"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react";
import { services } from "@/lib/data";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  // Auto-dismiss the success banner; errors stay until dismissed so the
  // fallback email address remains readable.
  useEffect(() => {
    if (submitStatus !== "success") return;
    const timer = setTimeout(() => setSubmitStatus("idle"), 8000);
    return () => clearTimeout(timer);
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData(formRef.current!);

      const response = await fetch("/send.php", {
        method: "POST",
        body: formData,
      });

      // send.php always answers with JSON. Anything else means the endpoint
      // itself is wrong - 404 when PHP was not uploaded, or an HTML error page
      // when PHP failed - so report that distinctly rather than "failed".
      const bodyText = await response.text();
      let result: { ok?: boolean; error?: string } = {};
      try {
        result = JSON.parse(bodyText);
      } catch {
        console.error(
          `Contact form: /send.php returned non-JSON (HTTP ${response.status}).`,
          bodyText.slice(0, 300)
        );
        throw new Error(
          response.status === 404
            ? "The mail endpoint is missing on this server."
            : `The mail endpoint returned an unexpected response (HTTP ${response.status}).`
        );
      }

      if (!response.ok || !result.ok) {
        throw new Error(result.error || `Sending failed (HTTP ${response.status}).`);
      }

      setSubmitStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setErrorDetail(error instanceof Error ? error.message : null);
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
                <div
                  role="status"
                  aria-live="polite"
                  className="relative mb-8 p-4 pr-12 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                  <div>
                    <h4 className="text-green-800 font-bold">Message Sent Successfully</h4>
                    <p className="text-green-700 text-sm mt-1 font-medium">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Dismiss message"
                    onClick={() => setSubmitStatus("idle")}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-green-700 hover:bg-green-100 active:scale-90 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  {/* countdown bar showing the auto-dismiss */}
                  <span className="absolute bottom-0 left-0 h-[3px] bg-green-400/70 rounded-b-xl animate-[shrink_8s_linear_forwards]"></span>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  role="alert"
                  className="relative mb-8 p-4 pr-12 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300"
                >
                  <button
                    type="button"
                    aria-label="Dismiss message"
                    onClick={() => setSubmitStatus("idle")}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-red-700 hover:bg-red-100 active:scale-90 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
                  <div>
                    <h4 className="text-red-800 font-bold">Submission Failed</h4>
                    <p className="text-red-700 text-sm mt-1 font-medium">
                      Message could not be sent. Please email us directly at{" "}
                      <a href="mailto:shujarehman@narcoca.com" className="underline">shujarehman@narcoca.com</a>
                    </p>
                    {errorDetail ? (
                      <p className="text-red-600/80 text-xs mt-2 font-medium">{errorDetail}</p>
                    ) : null}
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot: hidden from people, filled in by bots. send.php
                    silently discards any submission where this is present. */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] w-px h-px opacity-0"
                />
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
                      placeholder="+92 300 000 0000"
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
                    <option value="Other">Other</option>
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

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm lg:sticky lg:top-32">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8B1C31]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8B1C31]" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Islamabad Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      Office # 19, 2nd Floor, Huzaifa Centre,<br />
                      I-8 Markaz, Islamabad.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8B1C31]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8B1C31]" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Peshawar Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      Office # 202, Ground Floor, Niazi Plaza,<br />
                      Board Bazar, Peshawar.
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
                      <a href="tel:+923245214447" className="hover:text-[#8B1C31] transition-colors">+92 324 5214447</a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8B1C31]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#8B1C31]" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Email</h4>
                    <p className="text-slate-600 text-sm font-medium break-all">
                      <a href="mailto:shujarehman@narcoca.com" className="hover:text-[#8B1C31] transition-colors">shujarehman@narcoca.com</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

