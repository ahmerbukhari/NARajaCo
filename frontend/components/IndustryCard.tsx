import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IndustryCardProps {
  industry: {
    name: string;
    slug: string;
    shortDescription: string;
    icon: React.ElementType;
  };
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = industry.icon;
  
  return (
    <Link 
      href={`/industries/${industry.slug}`}
      className="group relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#8B1C31]/30 transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-[#8B1C31]/10 text-[#8B1C31] group-hover:bg-[#8B1C31] group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#8B1C31] transition-colors">
          {industry.name}
        </h3>
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-medium">
        {industry.shortDescription}
      </p>
      
      <div className="flex items-center text-slate-500 text-sm font-bold mt-auto group-hover:text-[#8B1C31] transition-colors">
        <span>Explore sector</span>
        <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </Link>
  );
}

