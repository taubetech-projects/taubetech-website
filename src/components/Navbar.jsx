"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll height to apply glassmorphic blur and drop-shadows
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("navbar.home"), href: "#hero" },
    { name: t("navbar.services"), href: "#services" },
    { name: t("navbar.platforms"), href: "#platforms" },
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.contact"), href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-[#1B2A4A]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/10 py-3"
          : "bg-[#1B2A4A] border-b border-white/8 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <a href="#hero" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            {/* Professional Geometric Dove-Network Logo */}
            <svg
              className="w-7 h-7 text-white"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="navLogoGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
              {/* Stylized geometric flying dove wings & body */}
              <path
                d="M28 6 L18 14 L24 22 L28 6 Z"
                fill="url(#navLogoGrad)"
                opacity="0.9"
              />
              <path d="M18 14 L6 18 L14 26 L18 14 Z" fill="url(#navLogoGrad)" />
              <path
                d="M18 14 L24 22 L14 26 L18 14 Z"
                fill="#F8FAFC"
                opacity="0.8"
              />

              {/* Network nodes overlay */}
              <circle cx="28" cy="6" r="2" fill="#10B981" />
              <circle cx="6" cy="18" r="2" fill="#10B981" />
              <circle cx="14" cy="26" r="2" fill="#10B981" />
              <circle
                cx="18"
                cy="14"
                r="2.5"
                fill="#3B82F6"
                stroke="#F8FAFC"
                strokeWidth="1"
              />

              {/* Tech connection lines */}
              <line
                x1="28"
                y1="6"
                x2="18"
                y2="14"
                stroke="#10B981"
                strokeWidth="0.75"
                strokeDasharray="1.5 1.5"
              />
              <line
                x1="6"
                y1="18"
                x2="18"
                y2="14"
                stroke="#10B981"
                strokeWidth="0.75"
                strokeDasharray="1.5 1.5"
              />
              <line
                x1="14"
                y1="26"
                x2="18"
                y2="14"
                stroke="#10B981"
                strokeWidth="0.75"
                strokeDasharray="1.5 1.5"
              />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F8FAFC] to-[#94A3B8] group-hover:text-blue-400 transition-colors">
            Taube
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Tech
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#94A3B8] hover:text-white relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 border border-white/10"
          >
            {t("navbar.cta")}
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#94A3B8] hover:text-white focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-around relative">
            <span
              className={`w-6 h-0.5 bg-current rounded transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current rounded transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current rounded transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation Drawer Overlay */}
        <div
          className={`fixed inset-0 top-[60px] md:top-[68px] z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Drawer Body */}
        <div
          className={`fixed top-[52px] md:top-[56px] left-0 right-0 z-40 bg-[#1e3260] border-b border-white/10 px-6 py-8 shadow-2xl lg:hidden flex flex-col gap-6 transform transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-[#F8FAFC]/80 hover:text-white py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}

          {/* Synced Mobile Language Toggle inside Mobile Drawer */}
          <div className="flex items-center justify-between border-b border-white/5 py-4">
            <span className="text-sm font-medium text-[#94A3B8]">
              Sprache / Language:
            </span>
            <div className="border border-white/20 rounded-full p-0.5 flex bg-black/20">
              <button
                onClick={() => setLanguage("de")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                  lang === "de" ? "bg-blue-600 text-white" : "text-white/60"
                }`}
                aria-label="Deutsch"
              >
                <img
                  src="/de.svg"
                  alt="Deutsch"
                  className="w-4.5 h-3 object-cover rounded-sm border border-white/20 shadow-sm"
                />
                <span>DE</span>
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                  lang === "en" ? "bg-blue-600 text-white" : "text-white/60"
                }`}
                aria-label="English"
              >
                <img
                  src="/us.svg"
                  alt="English"
                  className="w-4.5 h-3 object-cover rounded-sm border border-white/20 shadow-sm"
                />
                <span>EN</span>
              </button>
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-200 mt-2 border border-white/10"
          >
            {t("navbar.cta")}
          </a>
        </div>
      </div>
    </nav>
  );
}
