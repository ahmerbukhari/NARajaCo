"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { services, industries } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true, items: services },
    { name: "Industries", href: "/industries", hasDropdown: true, items: industries },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-lg border-b border-slate-200 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white rounded-sm shadow-sm flex items-center justify-center p-1 border border-slate-100">
            <div className="w-full h-full rounded-full border-2 border-[#8B1C31] flex items-center justify-center relative">
              <div className="absolute inset-[2px] rounded-full border border-[#8B1C31]"></div>
              <span className="text-lg font-bold text-[#8B1C31] italic">N</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-tight tracking-tight transition-colors ${isScrolled ? 'text-[#8B1C31]' : 'text-[#8B1C31]'}`}>Naureen Akhtar</span>
            <span className={`text-xs font-semibold tracking-widest uppercase transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}>Raja & Co.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? "text-[#8B1C31]"
                    : isScrolled ? "text-slate-600 hover:text-[#8B1C31]" : "text-slate-700 hover:text-[#8B1C31]"
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {/* Desktop Dropdown */}
              {link.hasDropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden grid grid-cols-2 p-4 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {link.items?.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.slug}
                        href={`${link.href}/${item.slug}`}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-[#8B1C31]/10 text-[#8B1C31] group-hover/item:bg-[#8B1C31] group-hover/item:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 mb-0.5 group-hover/item:text-[#8B1C31] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {item.shortDescription}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 mt-2 pt-2 border-t border-slate-100 text-center">
                    <Link href={link.href} className="text-xs font-bold text-[#8B1C31] hover:text-[#6A1525] transition-colors">
                      View all {link.name.toLowerCase()} &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-[#8B1C31]'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 overflow-hidden animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className={`text-lg font-bold ${
                      pathname === link.href ? "text-[#8B1C31]" : "text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="p-2 text-slate-500"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="flex flex-col gap-3 pl-4 mt-3 border-l-2 border-slate-100 animate-in slide-in-from-top-2 duration-200">
                    {link.items?.map((item) => (
                      <Link
                        key={item.slug}
                        href={`${link.href}/${item.slug}`}
                        className="text-sm font-medium text-slate-600 hover:text-[#8B1C31] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link href={link.href} className="text-sm font-bold text-[#8B1C31] mt-2">
                      View all {link.name.toLowerCase()} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

