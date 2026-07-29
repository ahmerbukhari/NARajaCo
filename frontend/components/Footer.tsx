import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-white font-bold text-xl">NR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight">Naureen Akhtar</span>
                <span className="text-amber-500 text-xs font-medium tracking-widest uppercase">Raja & Co.</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              A premier chartered accountancy firm delivering excellence in tax, audit, consulting, and financial advisory services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Our Services</Link></li>
              <li><Link href="/industries" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Industries We Serve</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Top Services</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services/tax-and-legal" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Tax & Legal</Link></li>
              <li><Link href="/services/audit-and-assurance" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Audit & Assurance</Link></li>
              <li><Link href="/services/consulting" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Consulting</Link></li>
              <li><Link href="/services/financial-management" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Financial Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">123 Corporate Avenue, Business District, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-slate-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-slate-400 text-sm">contact@narco.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Naureen Akhtar Raja & Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

