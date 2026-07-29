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
      className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/20 hover:bg-white/10 hover:border-white/20 hover:shadow-amber-500/10 transform hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-amber-500/50 transition-all duration-500">
        <Icon className="w-7 h-7 text-amber-500" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {service.shortDescription}
      </p>
      
      <div className="flex items-center text-amber-500 text-sm font-semibold mt-auto">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Link>
  );
}

