import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5A1220] border-t border-[#8B1C31] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full border-2 border-[#8B1C31] flex items-center justify-center relative">
                  <div className="absolute inset-[2px] rounded-full border border-[#8B1C31]"></div>
                  <span className="text-lg font-bold text-[#8B1C31] italic">N</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight">Naureen Akhtar</span>
                <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">Raja & Co.</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              A premier chartered accountancy firm delivering excellence in tax, audit, consulting, and financial advisory services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#5A1220] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#5A1220] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors font-medium">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white text-sm transition-colors font-medium">Our Services</Link></li>
              <li><Link href="/industries" className="text-white/70 hover:text-white text-sm transition-colors font-medium">Industries We Serve</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white text-sm transition-colors font-medium">Contact Us</Link></li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Top Services</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services/tax-and-legal" className="text-white/70 hover:text-white text-sm transition-colors font-medium">Tax & Legal</Link></li>
              <li><Link href="/services/audit-and-assurance" className="text-white/70 hover:text-white text-sm transition-colors font-medium">Audit & Assurance</Link></li>
              <li><Link href="/services/consulting" className="text-white/70 hover:text-white text-sm transition-colors font-medium">Consulting</Link></li>
              <li><Link href="/services/financial-management" className="text-white/70 hover:text-white text-sm transition-colors font-medium">Financial Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/90 shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-medium">
                  Office # 19, 2nd Floor, Huzaifa Centre, I-8 Markaz, Islamabad.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/90 shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-medium">
                  Office # 202, Ground Floor, Niazi Plaza, Board Bazar, Peshawar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/90 shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-medium">
                  <a href="tel:+923425058621" className="hover:text-white transition-colors">+92 342 505 8621</a>
                  <br />
                  <a href="tel:+923455919859" className="hover:text-white transition-colors">+92 345 591 9859</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/90 shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-medium break-all">
                  <a href="mailto:naureen.akhtar1957@gmail.com" className="hover:text-white transition-colors">naureen.akhtar1957@gmail.com</a>
                  <br />
                  <a href="mailto:moeensatti6@gmail.com" className="hover:text-white transition-colors">moeensatti6@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm font-medium">
            &copy; {new Date().getFullYear()} Naureen Akhtar Raja & Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

