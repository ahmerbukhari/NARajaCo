"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { services, industries } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

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
        isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all">
            <span className="text-white font-bold text-xl">NR</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-tight tracking-tight">Naureen Akhtar</span>
            <span className="text-amber-500 text-xs font-medium tracking-widest uppercase">Raja & Co.</span>
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
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? "text-amber-500"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {/* Desktop Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden grid grid-cols-2 p-4 gap-2"
                    >
                      {link.items?.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.slug}
                            href={`${link.href}/${item.slug}`}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                          >
                            <div className="mt-0.5 p-2 rounded-lg bg-slate-800 text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white mb-0.5 group-hover/item:text-amber-400 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-slate-400 line-clamp-1">
                                {item.shortDescription}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                      <div className="col-span-2 mt-2 pt-2 border-t border-white/10 text-center">
                        <Link href={link.href} className="text-xs font-medium text-amber-500 hover:text-amber-400 transition-colors">
                          View all {link.name.toLowerCase()} &rarr;
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={`text-lg font-medium ${
                        pathname === link.href ? "text-amber-500" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="p-2 text-slate-400"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="flex flex-col gap-3 pl-4 mt-3 border-l border-white/10"
                    >
                      {link.items?.map((item) => (
                        <Link
                          key={item.slug}
                          href={`${link.href}/${item.slug}`}
                          className="text-sm text-slate-300 hover:text-amber-500 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link href={link.href} className="text-sm font-medium text-amber-500 mt-2">
                        View all {link.name.toLowerCase()} &rarr;
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

