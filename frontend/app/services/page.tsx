import React from "react";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Our Services | Naureen Akhtar Raja & Co.",
  description: "Explore our comprehensive range of chartered accountancy, tax, audit, and advisory services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="text-sm font-medium text-slate-300">Our Expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Comprehensive <span className="text-amber-500">Services</span> for Modern Business.
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            From rigorous audit and assurance to strategic consulting and digital transformation, our multidisciplinary teams deliver solutions that drive sustainable value.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

