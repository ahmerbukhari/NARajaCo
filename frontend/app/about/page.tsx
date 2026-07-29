import React from "react";
import Link from "next/link";
import { Shield, Target, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-slate-950 pt-32 pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="text-sm font-medium text-slate-300">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Building <span className="text-amber-500">Trust</span> Through Excellence.
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-6">
              Founded on the principles of integrity and professional rigor, Naureen Akhtar Raja & Co. has grown into a premier chartered accountancy firm trusted by industry leaders.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our journey began with a simple mission: to provide unparalleled financial and advisory services that empower organizations to achieve their strategic goals. Today, we continue that legacy, combining deep technical expertise with innovative thinking to solve the most complex business challenges.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-amber-500 mb-2">20+</div>
                  <div className="text-sm text-slate-400">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-500 mb-2">500+</div>
                  <div className="text-sm text-slate-400">Clients Worldwide</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-500 mb-2">50+</div>
                  <div className="text-sm text-slate-400">Expert Professionals</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-500 mb-2">15+</div>
                  <div className="text-sm text-slate-400">Global Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-900 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-slate-400 text-lg">
              These principles guide every decision we make and every interaction we have with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Credentials & Affiliations */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Credentials & Affiliations</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We are proud to be recognized by leading professional bodies and regulatory authorities. Our credentials reflect our unwavering commitment to quality, compliance, and continuous professional development.
              </p>
              <ul className="space-y-4">
                {[
                  "Institute of Chartered Accountants",
                  "Public Company Accounting Oversight Board (PCAOB)",
                  "International Federation of Accountants (IFAC)",
                  "Certified Public Accountants Association"
                ].map((credential, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-slate-300 font-medium">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Placeholder for credential logos */}
                  <div className="text-slate-500 font-bold text-xl text-center">
                    Credential<br/>Logo {i}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-slate-900 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Leadership</h2>
            <p className="text-slate-400 text-lg">
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
                <div className="aspect-[4/5] rounded-2xl bg-slate-800 mb-6 overflow-hidden relative">
                  {/* Placeholder for team member photo */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                    Photo
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">{leader.name}</h3>
                <div className="text-amber-500 text-sm font-medium mb-3">{leader.role}</div>
                <p className="text-slate-400 text-sm">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to work with us?</h2>
          <p className="text-xl text-slate-400 mb-10">
            Discover how our expertise can help your organization thrive in a complex business environment.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

