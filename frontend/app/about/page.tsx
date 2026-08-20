import React from "react";
import Link from "next/link";
import { Shield, Target, Users, Award, ArrowRight, Eye, Compass, CheckCircle2 } from "lucide-react";
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

  const leaders = [
    {
      name: "Naureen Akhtar Raja",
      role: "Managing Partner",
      initials: "NR",
      bio: [
        "Naureen Akhtar Raja is a seasoned Chartered Accountant with over a decade of experience in audit, taxation, and advisory. Having served in leadership roles at EY Ford Rhodes and Deloitte Middle East, she brings unmatched expertise in financial reporting, compliance, and governance.",
        "Her multi-sector exposure across telecom, IT, power generation, and NGOs positions her as a trusted advisor to both local and international clients. As Managing Partner, she drives the firm's vision of delivering excellence with integrity and client-focused solutions."
      ]
    },
    {
      name: "Shuja Rehman",
      role: "Partner, Business Process Solutions",
      initials: "SR",
      bio: [
        "Shuja Rehman is an accomplished ERP and business process specialist with extensive experience in digitalization, automation and process improvement initiatives. His career spans leading roles at Deloitte Middle East, PwC (A.F. Ferguson), Telenor Group, and Tawal Telecom, where he spearheaded automation and process improvement initiatives for global clients.",
        "Certified in Oracle SCM & HCM and Coupa Core Implementation, he has successfully delivered ERP solutions for industry leaders such as AstraZeneca, Tawal, Telenor and other key players in medicine and health, technology, FMCG and financial sectors. Shuja's expertise lies in bridging technology with business strategy, enabling organizations to achieve efficiency and sustainable growth."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Section - matching the homepage hero theme */}
      <PageHero
        aside={
          <div className="bg-white border border-white/50 rounded-3xl p-8 md:p-10 shadow-2xl lg:mt-12 animate-[float_6s_ease-in-out_infinite]">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why <span className="text-[#8B1C31]">NARCO</span>?
            </h2>
            <ul className="space-y-5">
              {[
                {
                  title: "50+ seasoned professionals",
                  description: "Specialized skillsets and subject-matter exposure gained at leading organizations."
                },
                {
                  title: "Timely, effective delivery",
                  description: "A commitment to high service quality, backed by accelerators that keep engagements on schedule."
                },
                {
                  title: "Value driven business model",
                  description: "Value realization from inception and high-yield service throughout the project timeline."
                }
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B1C31] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-900 font-bold">{point.title}</div>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mt-1">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
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

      {/* Who We Are / What We Stand For */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Who We Are</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              With the experience of best in class and the ideology to deliver best in class, we strive to be the best business in the region, with solutions tailored to the needs of every customer.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">What We Stand For</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              We tailor our solutions to add value from day zero. We are a knowledge organization who believe in investing in our assets to ensure a top notch experience for our clients.
            </p>
          </div>
        </div>
      </div>

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#8B1C31]/10 flex items-center justify-center">
                    <span className="text-xl font-extrabold text-[#8B1C31]">{leader.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-[#8B1C31] transition-colors">
                      {leader.name}
                    </h3>
                    <div className="text-[#8B1C31] text-sm font-bold uppercase tracking-wide">{leader.role}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {leader.bio.map((paragraph, i) => (
                    <p key={i} className="text-slate-600 text-sm leading-relaxed font-medium">
                      {paragraph}
                    </p>
                  ))}
                </div>
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

