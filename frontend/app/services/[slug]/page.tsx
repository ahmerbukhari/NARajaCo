import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { services, industries } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const relatedIndustriesData = industries.filter(ind => 
    service.relatedIndustries.includes(ind.slug)
  );

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Breadcrumb */}
        <Link 
          href="/services"
          className="inline-flex items-center text-sm text-slate-400 hover:text-amber-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center mb-8 shadow-lg shadow-amber-500/10">
              <Icon className="w-10 h-10 text-amber-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.name}
            </h1>
            
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-12">
              {service.fullDescription}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Key Offerings</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300">Strategic advisory and implementation support</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 flex flex-col gap-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-900 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Need expert guidance?</h3>
                <p className="text-white/80 mb-8">
                  Connect with our {service.name} specialists to discuss your specific requirements.
                </p>
                <Link 
                  href="/contact"
                  className="flex items-center justify-center w-full py-4 rounded-xl bg-white text-amber-900 font-bold hover:bg-slate-100 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Related Industries */}
              {relatedIndustriesData.length > 0 && (
                <div className="bg-slate-900 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-white mb-6">Industries We Serve</h3>
                  <div className="flex flex-col gap-4">
                    {relatedIndustriesData.map((ind) => (
                      <Link 
                        key={ind.id}
                        href={`/industries/${ind.slug}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-slate-400 group-hover:text-amber-500 transition-colors">
                          {ind.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-500 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

