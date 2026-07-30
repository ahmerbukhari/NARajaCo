import React from "react";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Our Services | Naureen Akhtar Raja & Co.",
  description: "Explore our comprehensive range of chartered accountancy, tax, audit, and advisory services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header - matching the homepage hero theme */}
      <PageHero>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#8B1C31]/20 w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-[#8B1C31]"></span>
          <span className="text-sm font-bold text-[#8B1C31]">Our Expertise</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B1C31] mb-6 tracking-tight leading-[1.1]">
          Comprehensive Services for Modern Business.
        </h1>
        <p className="text-lg text-slate-700 font-medium leading-relaxed">
          NARCO partners with clients to generate long-term value for all stakeholders, integrating Environmental, Social, and Governance (ESG) principles. Leveraging data and technology, our services and solutions build trust through assurance, enabling clients to transform, grow, and operate sustainably.
        </p>
      </PageHero>

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

