"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
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

  // Lock body scroll and allow Escape to close while the panel is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true, items: services, dropdownWidth: "w-[700px]", dropdownOffset: "-translate-x-1/2" },
    { name: "Industries", href: "/industries", hasDropdown: true, items: industries, dropdownWidth: "w-[850px]", dropdownOffset: "-translate-x-3/4" },
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
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Naureen Akhtar Raja & Co. logo"
            width={1093}
            height={1069}
            priority
            className="w-10 h-auto"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-base sm:text-lg leading-tight tracking-tight text-[#8B1C31] whitespace-nowrap">Naureen Akhtar Raja &amp; Co.</span>
            <span className="hidden sm:block text-xs font-semibold tracking-widest uppercase text-[#8B1C31]">Chartered Accountants · ICAP Registered</span>
            <span className="sm:hidden text-[10px] font-semibold tracking-widest uppercase text-[#8B1C31]">Chartered Accountants</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex items-center gap-8 ${!isScrolled ? 'bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-sm border border-slate-200/50' : ''}`}>
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
                    : "text-slate-700 hover:text-[#8B1C31]"
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {/* Desktop Dropdown */}
              {link.hasDropdown && activeDropdown === link.name && (
                <div className={`absolute top-full left-1/2 pt-4 z-50 ${link.dropdownOffset || '-translate-x-1/2'} ${link.dropdownWidth || 'w-[600px]'}`}>
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden grid grid-cols-2 p-4 gap-2 animate-in fade-in slide-in-from-top-2 duration-200 items-start">
                    {link.items?.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.slug}
                          href={`${link.href}/${item.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item h-full"
                        >
                          <div className="mt-0.5 p-2 rounded-lg bg-[#8B1C31]/10 text-[#8B1C31] group-hover/item:bg-[#8B1C31] group-hover/item:text-white transition-colors shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-bold text-slate-900 mb-0.5 group-hover/item:text-[#8B1C31] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-2">
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
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle - morphing hamburger */}
        <button
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className={`lg:hidden relative z-[60] w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 active:scale-90 ${
            mobileMenuOpen
              ? 'bg-[#8B1C31] text-white shadow-lg'
              : isScrolled
                ? 'text-[#8B1C31]'
                : 'text-[#8B1C31] bg-white/90 backdrop-blur-md shadow-sm'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="relative block w-5 h-4">
            <span className={`absolute left-0 h-[2px] w-full bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'top-[7px] rotate-45' : 'top-0'}`}></span>
            <span className={`absolute left-0 top-[7px] h-[2px] w-full bg-current rounded-full transition-all duration-200 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 h-[2px] w-full bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'}`}></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation - slide-in panel */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Burgundy header with the diagonal motif */}
          <div className="relative overflow-hidden bg-[#8B1C31] px-6 pt-8 pb-10 shrink-0">
            <div className="absolute -top-10 -right-16 w-56 h-56 bg-[#6A1525] opacity-60 skew-x-[-15deg]"></div>
            <div className="relative flex items-center gap-3 pr-12">
              <Image src="/logo-white.png" alt="" width={1093} height={1069} className="w-10 h-auto" />
              <div className="flex flex-col">
                <span className="text-white font-bold leading-tight text-[15px]">Naureen Akhtar Raja &amp; Co.</span>
                <span className="text-white/70 text-[10px] font-semibold tracking-widest uppercase">
                  Chartered Accountants
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            {navLinks.map((link, i) => (
              <div
                key={link.name}
                className="border-b border-slate-100 last:border-0"
                style={{
                  transition: 'opacity 400ms ease, transform 400ms ease',
                  transitionDelay: mobileMenuOpen ? `${120 + i * 60}ms` : '0ms',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(24px)',
                }}
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex-1 py-4 text-lg font-bold transition-colors ${
                      pathname === link.href ? 'text-[#8B1C31]' : 'text-slate-900 hover:text-[#8B1C31]'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <button
                      aria-label={`Toggle ${link.name} submenu`}
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                        activeDropdown === link.name ? 'bg-[#8B1C31] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Accordion submenu */}
                {link.hasDropdown && (
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      activeDropdown === link.name ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-1 pl-3 border-l-2 border-[#8B1C31]/20">
                        {link.items?.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.slug}
                              href={`${link.href}/${item.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 py-2.5 px-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-[#8B1C31]/5 hover:text-[#8B1C31] active:scale-[0.98] transition-all"
                            >
                              <span className="w-7 h-7 rounded-lg bg-[#8B1C31]/10 text-[#8B1C31] flex items-center justify-center shrink-0">
                                <Icon className="w-3.5 h-3.5" />
                              </span>
                              {item.name}
                            </Link>
                          );
                        })}
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-bold text-[#8B1C31] mt-2 px-2 py-1"
                        >
                          View all {link.name.toLowerCase()} &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 flex items-center justify-center w-full py-4 bg-[#8B1C31] text-white font-bold rounded-xl shadow-lg active:scale-[0.98] transition-transform"
              style={{
                transition: 'opacity 400ms ease, transform 400ms ease',
                transitionDelay: mobileMenuOpen ? `${120 + navLinks.length * 60}ms` : '0ms',
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>

    </header>
  );
}

