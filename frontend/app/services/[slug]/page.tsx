import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { services, industries } from "@/lib/data";
import PageHero from "@/components/PageHero";

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
    <div className="min-h-screen bg-white pb-24">
      {/* Header - matching the homepage hero theme */}
      <PageHero>
        {/* Breadcrumb */}
        <Link
          href="/services"
          className="inline-flex items-center text-sm font-bold text-slate-600 hover:text-[#8B1C31] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all services
        </Link>

        <div className="w-20 h-20 rounded-2xl bg-white/70 flex items-center justify-center mb-8 shadow-sm">
          <Icon className="w-10 h-10 text-[#8B1C31]" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B1C31] mb-6 tracking-tight leading-[1.1]">
          {service.name}
        </h1>

        <p className="text-lg text-slate-700 font-medium leading-relaxed">
          {service.fullDescription}
        </p>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12 shadow-sm">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Key Offerings</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B1C31] shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Strategic advisory and implementation support</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 flex flex-col gap-8">
              {/* CTA Card */}
              <div className="bg-[#8B1C31] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-extrabold mb-4">Need expert guidance?</h3>
                <p className="text-white/90 mb-8 font-medium">
                  Connect with our {service.name} specialists to discuss your specific requirements.
                </p>
                <Link 
                  href="/contact"
                  className="flex items-center justify-center w-full py-4 rounded-xl bg-white text-[#8B1C31] font-bold hover:bg-slate-100 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Related Industries */}
              {relatedIndustriesData.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-6">Industries We Serve</h3>
                  <div className="flex flex-col gap-4">
                    {relatedIndustriesData.map((ind) => (
                      <Link 
                        key={ind.id}
                        href={`/industries/${ind.slug}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-slate-600 font-bold group-hover:text-[#8B1C31] transition-colors">
                          {ind.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#8B1C31] transition-colors" />
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

