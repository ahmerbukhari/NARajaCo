import React from "react";
import { industries } from "@/lib/data";
import IndustryCard from "@/components/IndustryCard";

export const metadata = {
  title: "Industries We Serve | Naureen Akhtar Raja & Co.",
  description: "Discover our specialized expertise across various industry sectors.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B1C31]/10 border border-[#8B1C31]/20 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8B1C31]"></span>
            <span className="text-sm font-bold text-[#8B1C31]">Sector Expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Deep Industry <span className="text-[#8B1C31]">Knowledge</span>.
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            We combine our technical capabilities with profound sector understanding to deliver insights and solutions that are highly relevant to your specific market environment.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </div>
  );
}

