import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    name: string;
    slug: string;
    shortDescription: string;
    icon: React.ElementType;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <Link 
      href={`/services/${service.slug}`}
      className="group relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#8B1C31]/30 transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-xl bg-[#8B1C31]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#8B1C31] transition-all duration-300">
        <Icon className="w-7 h-7 text-[#8B1C31] group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#8B1C31] transition-colors">
        {service.name}
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-medium">
        {service.shortDescription}
      </p>
      
      <div className="flex items-center text-[#8B1C31] text-sm font-bold mt-auto">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </Link>
  );
}

