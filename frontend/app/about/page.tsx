import React from "react";
import Link from "next/link";
import { Shield, Target, Users, Award, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-white pt-32 pb-24">
      {/* Hero Section - Redesigned to match the provided image */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="relative bg-[#EAECEF] rounded-3xl overflow-hidden shadow-xl">
          {/* Background Building Image Overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          
          {/* Diagonal Burgundy Shapes */}
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#8B1C31] transform translate-x-[30%] -translate-y-[30%] rotate-45 z-0"></div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[100%] bg-[#8B1C31] transform translate-x-[30%] translate-y-[30%] rotate-45 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 p-12 md:p-16">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#8B1C31] tracking-tight uppercase">
                ABOUT US
              </h1>
              
              <div className="space-y-6">
                <p className="text-xl text-[#8B1C31] font-bold leading-relaxed">
                  Naureen Akhtar Raja & Co. is a Chartered Accountancy firm registered with ICAP, providing Audit, Taxation, Advisory, Business Process Solutions, and Technology.
                </p>
                
                <p className="text-xl text-[#8B1C31] font-bold leading-relaxed">
                  We are committed to delivering value driven, reliable, and practical solutions to help businesses grow while ensuring compliance with local and international standards.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex gap-1 text-[#8B1C31]">
                  <Sparkles className="w-6 h-6 fill-current" />
                  <Sparkles className="w-6 h-6 fill-current" />
                  <Sparkles className="w-6 h-6 fill-current" />
                </div>
                <div className="h-1 w-48 bg-[#8B1C31] rounded-full"></div>
              </div>

              {/* Logo Watermark */}
              <div className="mt-8 opacity-50">
                <div className="w-24 h-24 rounded-full border-[3px] border-[#8B1C31] flex items-center justify-center relative">
                  <div className="absolute inset-1 rounded-full border-[1.5px] border-[#8B1C31]"></div>
                  <span className="text-4xl font-bold text-[#8B1C31] italic pr-1">N</span>
                </div>
              </div>
            </div>

            {/* Right Image Diamond */}
            <div className="hidden lg:flex justify-center items-center relative h-full min-h-[500px]">
              <div className="absolute w-[80%] aspect-square bg-white transform rotate-45 overflow-hidden border-8 border-white shadow-2xl z-20">
                <div className="absolute inset-[-20%] transform -rotate-45 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="relative bg-[#EAECEF] rounded-3xl overflow-hidden shadow-xl py-24 px-8 text-center">
          {/* Background Building Image Overlay */}
          <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          
          {/* Side Images (Triangles) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white transform -translate-x-1/2 rotate-45 overflow-hidden z-0 hidden md:block">
            <div className="absolute inset-[-50%] transform -rotate-45 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white transform translate-x-1/2 rotate-45 overflow-hidden z-0 hidden md:block">
            <div className="absolute inset-[-50%] transform -rotate-45 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#8B1C31] tracking-tight uppercase mb-12">
              OUR VISION
            </h2>
            
            <p className="text-2xl md:text-3xl text-[#8B1C31] font-bold leading-relaxed mb-16">
              To raise the bar for professional services by making value-driven delivery the standard of quality. We empower clients, teams, and shareholders through impactful, transparent, and value for every stakeholder.
            </p>

            {/* Decorative Elements */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex gap-1 text-[#8B1C31]">
                  <Sparkles className="w-6 h-6 fill-current" />
                  <Sparkles className="w-6 h-6 fill-current" />
                  <Sparkles className="w-6 h-6 fill-current" />
                </div>
                <div className="h-1 w-64 bg-[#8B1C31] rounded-full"></div>
              </div>
              
              {/* Logo Watermark */}
              <div className="mt-8 opacity-50">
                <div className="w-20 h-20 rounded-full border-[3px] border-[#8B1C31] flex items-center justify-center relative">
                  <div className="absolute inset-1 rounded-full border-[1.5px] border-[#8B1C31]"></div>
                  <span className="text-3xl font-bold text-[#8B1C31] italic pr-1">N</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="relative bg-[#EAECEF] rounded-3xl overflow-hidden shadow-xl py-24 px-8 md:px-16">
          {/* Background Building Image Overlay */}
          <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          
          {/* Side Images (Triangles) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white transform -translate-x-1/2 rotate-45 overflow-hidden z-0 hidden md:block">
            <div className="absolute inset-[-50%] transform -rotate-45 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white transform translate-x-1/2 rotate-45 overflow-hidden z-0 hidden md:block">
            <div className="absolute inset-[-50%] transform -rotate-45 bg-[url('https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#8B1C31] tracking-tight uppercase mb-16 text-center">
              OUR MISSION
            </h2>
            
            <div className="flex flex-col gap-12 w-full">
              {/* Mission Point 1 */}
              <div className="flex items-start gap-6 md:gap-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#8B1C31] flex items-center justify-center shrink-0 shadow-lg">
                  <span className="text-3xl md:text-4xl font-extrabold text-white">1</span>
                </div>
                <p className="text-xl md:text-2xl text-[#8B1C31] font-bold leading-relaxed pt-2">
                  Our mission is to empower our stakeholders through value driven business practices.
                </p>
              </div>

              {/* Mission Point 2 */}
              <div className="flex items-start gap-6 md:gap-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#8B1C31] flex items-center justify-center shrink-0 shadow-lg">
                  <span className="text-3xl md:text-4xl font-extrabold text-white">2</span>
                </div>
                <p className="text-xl md:text-2xl text-[#8B1C31] font-bold leading-relaxed pt-2">
                  Excercise a working model that fosters skillset and client focus via innovative methodologies and continuous improvement.
                </p>
              </div>
            </div>

            {/* Logo Watermark */}
            <div className="mt-16 opacity-50">
              <div className="w-20 h-20 rounded-full border-[3px] border-[#8B1C31] flex items-center justify-center relative">
                <div className="absolute inset-1 rounded-full border-[1.5px] border-[#8B1C31]"></div>
                <span className="text-3xl font-bold text-[#8B1C31] italic pr-1">N</span>
              </div>
            </div>
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
      <div className="bg-white py-24">
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
      <div className="py-24 text-center bg-slate-50 border-t border-slate-200">
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

