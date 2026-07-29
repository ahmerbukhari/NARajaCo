"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { services, industries } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";

export default function Home() {
  // Get top 6 services and industries for highlights
  const highlightedServices = services.slice(0, 6);
  const highlightedIndustries = industries.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-950"></div>
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-600/20 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-indigo-900/20 blur-[100px]"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-300">Excellence in Chartered Accountancy</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600">Clarity</span> for Complex Business.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl">
                Naureen Akhtar Raja & Co. delivers premier tax, audit, and advisory services to help organizations navigate challenges and unlock sustainable growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-200">
              {/* Abstract 3D-like composition */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                
                {/* Glass Cards Floating */}
                <div className="absolute top-[10%] right-[10%] w-64 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl animate-[bounce_6s_infinite]">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Audit Excellence</h3>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-amber-500 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute bottom-[20%] left-[5%] w-72 p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl animate-[bounce_7s_infinite_1s]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Tax Optimization</h3>
                    <span className="text-green-400 text-sm font-medium">+24%</span>
                  </div>
                  <div className="flex items-end gap-2 h-16">
                    {[40, 70, 45, 90, 65, 100].map((h, i) => (
                      <div key={i} className="w-full bg-amber-500/20 rounded-t-sm" style={{ height: `${h}%` }}>
                        <div className="w-full bg-amber-500 rounded-t-sm transition-all duration-1000" style={{ height: `${h * 0.8}%` }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
          <ChevronRight className="w-5 h-5 text-white rotate-90" />
        </div>
      </section>

      {/* Firm Overview Section */}
      <section className="py-24 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Legacy of <span className="text-amber-500">Trust</span> and Professional Excellence.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                For over two decades, Naureen Akhtar Raja & Co. has been the trusted advisor to leading corporations, private enterprises, and public institutions. We combine deep industry knowledge with technical expertise to deliver solutions that matter.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Our commitment goes beyond compliance. We partner with our clients to navigate complex regulatory landscapes, optimize financial performance, and build resilient organizations prepared for the future.
              </p>
              <Link href="/about" className="inline-flex items-center text-amber-500 font-semibold hover:text-amber-400 transition-colors group">
                Discover our firm's history
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-sm text-slate-400">Years of Excellence</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center mt-8">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-slate-400">Clients Served</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">9</div>
                <div className="text-sm text-slate-400">Core Industries</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center mt-8">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-slate-400">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-slate-900 relative z-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
              <p className="text-slate-400 text-lg">
                Comprehensive financial and advisory solutions tailored to your organization's unique challenges and objectives.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors shrink-0">
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
      <section className="py-24 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-slate-400 text-lg">
              Deep sector expertise that allows us to provide contextualized, highly relevant advice for your specific market environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {highlightedIndustries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/industries" className="inline-flex items-center text-amber-500 font-semibold hover:text-amber-400 transition-colors group">
              Explore all industries
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-900"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Connect with our experts to discuss how Naureen Akhtar Raja & Co. can help you achieve your strategic objectives.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-amber-900 font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

