import React from "react";
import Link from "next/link";
import { Shield, Target, Users, Award, ArrowRight, Eye, Compass } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us | Naureen Akhtar Raja & Co.",
  description: "Learn about our history, core values, credentials, and the team behind our success.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of professional ethics, ensuring transparency and honesty in all our engagements."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We are committed to delivering exceptional quality and value, continuously exceeding client expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as an extension of your team, fostering strong partnerships built on mutual trust and respect."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace new technologies and methodologies to provide forward-thinking solutions to complex challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Section - matching the homepage hero theme */}
      <PageHero
        aside={
          <div className="bg-white border border-white/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-extrabold text-[#8B1C31] mb-2">20+</div>
                <div className="text-sm font-bold text-slate-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-[#8B1C31] mb-2">500+</div>
                <div className="text-sm font-bold text-slate-600">Clients Worldwide</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-[#8B1C31] mb-2">50+</div>
                <div className="text-sm font-bold text-slate-600">Expert Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-[#8B1C31] mb-2">15+</div>
                <div className="text-sm font-bold text-slate-600">Global Partners</div>
              </div>
            </div>
          </div>
        }
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#8B1C31]/20 w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-[#8B1C31]"></span>
          <span className="text-sm font-bold text-[#8B1C31]">Our Story</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B1C31] mb-6 tracking-tight leading-[1.1]">
          Building Trust Through Excellence.
        </h1>
        <p className="text-lg text-slate-700 font-medium leading-relaxed mb-6">
          Naureen Akhtar Raja & Co. is a Chartered Accountancy firm registered with ICAP, providing Audit, Taxation, Advisory, Business Process Solutions, and Technology.
        </p>
        <p className="text-base text-slate-700 font-medium leading-relaxed">
          We are committed to delivering value driven, reliable, and practical solutions to help businesses grow while ensuring compliance with local and international standards.
        </p>
      </PageHero>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#8B1C31]/10 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-[#8B1C31]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Vision</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              To raise the bar for professional services by making value-driven delivery the standard of quality. We empower clients, teams, and shareholders through impactful, transparent, and value for every stakeholder.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#8B1C31]/10 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-[#8B1C31]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Mission</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-4">
              Our mission is to empower our stakeholders through value driven business practices.
            </p>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Exercise a working model that fosters skillset and client focus via innovative methodologies and continuous improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-lg font-medium">
              These principles guide every decision we make and every interaction we have with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#8B1C31]/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#8B1C31]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-slate-600 text-lg font-medium">
              Guided by experienced professionals dedicated to delivering excellence and driving innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Naureen Akhtar Raja", role: "Managing Partner", desc: "Over 25 years of experience in corporate tax and strategic advisory." },
              { name: "Tariq Mahmood", role: "Head of Audit", desc: "Specializes in complex financial audits for multinational corporations." },
              { name: "Ayesha Khan", role: "Director of Consulting", desc: "Leads digital transformation and operational efficiency initiatives." }
            ].map((leader, index) => (
              <div key={index} className="group">
                <div className="aspect-[4/5] rounded-2xl bg-slate-200 mb-6 overflow-hidden relative shadow-sm">
                  {/* Placeholder for team member photo */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">
                    Photo
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-[#8B1C31] transition-colors">{leader.name}</h3>
                <div className="text-[#8B1C31] text-sm font-bold mb-3">{leader.role}</div>
                <p className="text-slate-600 text-sm font-medium">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Ready to work with us?</h2>
          <p className="text-xl text-slate-600 mb-10 font-medium">
            Discover how our expertise can help your organization thrive in a complex business environment.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#8B1C31] text-white font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

