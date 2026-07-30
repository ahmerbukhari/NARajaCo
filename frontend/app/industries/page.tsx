import React from "react";
import { industries } from "@/lib/data";
import IndustryCard from "@/components/IndustryCard";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Industries We Serve | Naureen Akhtar Raja & Co.",
  description: "Discover our specialized expertise across various industry sectors.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header - matching the homepage hero theme */}
      <PageHero>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#8B1C31]/20 w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-[#8B1C31]"></span>
          <span className="text-sm font-bold text-[#8B1C31]">Sector Expertise</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B1C31] mb-6 tracking-tight leading-[1.1]">
          Deep Industry Knowledge.
        </h1>
        <p className="text-lg text-slate-700 font-medium leading-relaxed">
          We combine our technical capabilities with profound sector understanding to deliver insights and solutions that are highly relevant to your specific market environment.
        </p>
      </PageHero>

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

