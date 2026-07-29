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
      className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:bg-slate-800/80 hover:border-white/10 transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-white/5 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
          {industry.name}
        </h3>
      </div>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {industry.shortDescription}
      </p>
      
      <div className="flex items-center text-slate-300 text-sm font-medium mt-auto group-hover:text-amber-500 transition-colors">
        <span>Explore sector</span>
        <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </Link>
  );
}

