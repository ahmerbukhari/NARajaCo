import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { industries, services } from "@/lib/data";
import PageHero from "@/components/PageHero";

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
    <div className="min-h-screen bg-white pb-24">
      {/* Header - matching the homepage hero theme */}
      <PageHero>
        {/* Breadcrumb */}
        <Link
          href="/industries"
          className="inline-flex items-center text-sm font-bold text-slate-600 hover:text-[#8B1C31] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all industries
        </Link>

        <div className="w-20 h-20 rounded-2xl bg-white/70 flex items-center justify-center mb-8 shadow-sm">
          <Icon className="w-10 h-10 text-[#8B1C31]" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B1C31] mb-6 tracking-tight leading-[1.1]">
          {industry.name}
        </h1>

        {/* Two-line summary; the full write-up sits below the hero */}
        <p className="text-lg text-slate-700 font-medium leading-relaxed">
          {industry.shortDescription}
        </p>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                How we help
              </h2>
              <div className="space-y-5">
                {industry.fullDescription.map((paragraph, i) => (
                  <p key={i} className="text-lg text-slate-600 font-medium leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12 shadow-sm">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Sector Challenges We Solve</h3>
              <p className="text-slate-600 font-medium mb-6">{industry.capabilitiesIntro}</p>
              <ul className="space-y-4">
                {industry.capabilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B1C31] shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
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
                <h3 className="text-2xl font-extrabold mb-4">Discuss your sector needs</h3>
                <p className="text-white/90 mb-8 font-medium">
                  Connect with our {industry.name} specialists to explore tailored solutions.
                </p>
                <Link 
                  href="/contact"
                  className="flex items-center justify-center w-full py-4 rounded-xl bg-white text-[#8B1C31] font-bold hover:bg-slate-100 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Related Services */}
              {relatedServicesData.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-6">Relevant Services</h3>
                  <div className="flex flex-col gap-4">
                    {relatedServicesData.map((srv) => (
                      <Link 
                        key={srv.id}
                        href={`/services/${srv.slug}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-slate-600 font-bold group-hover:text-[#8B1C31] transition-colors">
                          {srv.name}
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

