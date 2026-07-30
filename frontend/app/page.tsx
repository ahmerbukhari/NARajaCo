"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Users, Shield, Gauge, TrendingUp } from "lucide-react";
import { services, industries } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";

export default function Home() {
  // Get top 6 services and industries for highlights
  const highlightedServices = services.slice(0, 6);
  const highlightedIndustries = industries.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Matching the provided design exactly */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#EAECEF]">
        {/* Diagonal Shape Background */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[52%] bg-[#8B1C31] transform skew-x-[-15deg] translate-x-[20%] origin-bottom-right shadow-2xl z-0"></div>
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[48%] bg-[#6A1525] transform skew-x-[-15deg] translate-x-[25%] origin-bottom-right z-0 opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {/* Logo Replica */}
              <div className="w-28 h-28 bg-white rounded-md border border-slate-100 shadow-md flex items-center justify-center mb-8 p-2">
                <div className="w-full h-full rounded-full border-[3px] border-[#8B1C31] flex items-center justify-center relative">
                  <div className="absolute inset-1 rounded-full border-[1.5px] border-[#8B1C31]"></div>
                  <span className="text-5xl font-bold text-[#8B1C31] italic pr-1">N</span>
                  {/* Small curved text simulation */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <path id="curve" d="M 20 80 A 40 40 0 0 0 80 80" fill="transparent" />
                    <text className="text-[6px] fill-[#8B1C31] font-bold tracking-widest">
                      <textPath href="#curve" startOffset="50%" textAnchor="middle">Naureen Akhtar Raja & Co</textPath>
                    </text>
                  </svg>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#8B1C31] leading-[1.05] uppercase mb-6">
                Naureen Akhtar<br/>Raja & Co.
              </h1>

              <p className="text-xl md:text-2xl text-[#8B1C31] font-bold mb-10">
                Chartered Accountants (ICAP Registered Firm)
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#8B1C31] text-white font-bold hover:bg-[#6A1525] transition-colors shadow-lg text-sm md:text-base"
                >
                  Request Consultation
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#8B1C31] text-[#8B1C31] font-bold hover:bg-[#8B1C31]/5 transition-colors text-sm md:text-base"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-200">
              {/* Abstract 3D-like composition */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Glass Cards Floating */}
                <div className="absolute top-[10%] right-[10%] w-64 p-6 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl animate-[bounce_6s_infinite]">
                  <div className="w-10 h-10 rounded-full bg-[#8B1C31]/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#8B1C31]" />
                  </div>
                  <h3 className="text-slate-900 font-bold mb-2">Audit Excellence</h3>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-[#8B1C31] rounded-full"></div>
                  </div>
                </div>

                <div className="absolute bottom-[20%] left-[5%] w-72 p-6 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl animate-[bounce_7s_infinite_1s]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-900 font-bold">Tax Optimization</h3>
                    <span className="text-green-600 text-sm font-bold">+24%</span>
                  </div>
                  <div className="flex items-end gap-2 h-16">
                    {[40, 70, 45, 90, 65, 100].map((h, i) => (
                      <div key={i} className="w-full bg-[#8B1C31]/20 rounded-t-sm" style={{ height: `${h}%` }}>
                        <div className="w-full bg-[#8B1C31] rounded-t-sm transition-all duration-1000" style={{ height: `${h * 0.8}%` }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Overview Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Delivering <span className="text-[#8B1C31]">Value</span>, Not Just Compliance.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                Naureen Akhtar Raja & Co. is a Chartered Accountancy firm registered with ICAP, providing Audit, Taxation, Advisory, Business Process Solutions, and Technology. We deliver value driven, reliable, and practical solutions that help businesses grow while ensuring compliance with local and international standards.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                Our mission is to empower our stakeholders through value driven business practices — raising the bar for professional services by making value-driven delivery the standard of quality, from inception through to the end of every engagement.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#8B1C31] font-bold hover:text-[#6A1525] transition-colors group">
                More about our firm
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  title: "50+ seasoned professionals",
                  description: "Specialized skillsets and subject-matter exposure gained at leading organizations."
                },
                {
                  icon: Shield,
                  title: "ICAP registered firm",
                  description: "Audit and assurance delivered to local and international standards."
                },
                {
                  icon: Gauge,
                  title: "Timely, effective delivery",
                  description: "High service quality, backed by accelerators that keep engagements on schedule."
                },
                {
                  icon: TrendingUp,
                  title: "Value driven model",
                  description: "Value realization from inception and high-yield service throughout the project."
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#8B1C31]/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#8B1C31]" />
                    </div>
                    <h3 className="text-slate-900 font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-slate-50 relative z-10 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Core Services</h2>
              <p className="text-slate-600 text-lg font-medium">
                Comprehensive financial and advisory solutions tailored to your organization's unique challenges and objectives.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-900 font-bold hover:bg-slate-100 transition-colors shrink-0 shadow-sm">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Highlights */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-slate-600 text-lg font-medium">
              Deep sector expertise that allows us to provide contextualized, highly relevant advice for your specific market environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {highlightedIndustries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/industries" className="inline-flex items-center text-[#8B1C31] font-bold hover:text-[#6A1525] transition-colors group">
              Explore all industries
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1C31] to-[#5A1220]"></div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-medium">
            Connect with our experts to discuss how Naureen Akhtar Raja & Co. can help you achieve your strategic objectives.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#8B1C31] font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

