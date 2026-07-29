import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { industries, services } from "@/lib/data";

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug);

  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;
  const relatedServicesData = services.filter(srv => 
    industry.relatedServices.includes(srv.slug)
  );

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Breadcrumb */}
        <Link 
          href="/industries"
          className="inline-flex items-center text-sm text-slate-400 hover:text-amber-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all industries
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center mb-8 shadow-lg shadow-amber-500/10">
              <Icon className="w-10 h-10 text-amber-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {industry.name}
            </h1>
            
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-12">
              {industry.fullDescription}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Sector Challenges We Solve</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-amber-500 mb-2">Regulatory Compliance</h4>
                  <p className="text-slate-400">Navigating complex, ever-changing regulatory frameworks specific to your sector.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-500 mb-2">Digital Transformation</h4>
                  <p className="text-slate-400">Modernizing legacy systems and leveraging data analytics for competitive advantage.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-500 mb-2">Operational Efficiency</h4>
                  <p className="text-slate-400">Optimizing supply chains, reducing costs, and improving overall business performance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 flex flex-col gap-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-900 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Discuss your sector needs</h3>
                <p className="text-white/80 mb-8">
                  Connect with our {industry.name} specialists to explore tailored solutions.
                </p>
                <Link 
                  href="/contact"
                  className="flex items-center justify-center w-full py-4 rounded-xl bg-white text-amber-900 font-bold hover:bg-slate-100 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Related Services */}
              {relatedServicesData.length > 0 && (
                <div className="bg-slate-900 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-white mb-6">Relevant Services</h3>
                  <div className="flex flex-col gap-4">
                    {relatedServicesData.map((srv) => (
                      <Link 
                        key={srv.id}
                        href={`/services/${srv.slug}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-slate-400 group-hover:text-amber-500 transition-colors">
                          {srv.name}
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

