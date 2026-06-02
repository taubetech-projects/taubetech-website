"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-[#1B2A4A] border-t border-[#243656] text-[#94A3B8] relative z-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DSGVO Compliance Trust Badge Row */}
        <div className="border-b border-[#243656] mb-12 pb-10 flex flex-wrap justify-center sm:justify-between items-center gap-6 text-sm font-semibold text-white/80">
          <span className="flex items-center gap-2 hover:text-[#10B981] transition-colors duration-200">
            {t("footer.dsgvo_badge")}
          </span>
          <span className="text-[#243656] hidden sm:inline">|</span>
          <span className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200">
            {t("footer.server_badge")}
          </span>
          <span className="text-[#243656] hidden sm:inline">|</span>
          <span className="flex items-center gap-2 hover:text-indigo-400 transition-colors duration-200">
            {t("footer.ssl_badge")}
          </span>
          <span className="text-[#243656] hidden sm:inline">|</span>
          <span className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200">
            {t("footer.security_badge")}
          </span>
          <span className="text-[#243656] hidden sm:inline">|</span>
          <span className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200">
            {t("footer.location_badge")}
          </span>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About & Socials */}
          <div className="flex flex-col gap-6">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/10">
                <svg
                  className="w-5.5 h-5.5 text-white"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                  {/* Stylized geometric flying dove wings & body */}
                  <path d="M28 6 L18 14 L24 22 L28 6 Z" fill="url(#footerLogoGrad)" opacity="0.9" />
                  <path d="M18 14 L6 18 L14 26 L18 14 Z" fill="url(#footerLogoGrad)" />
                  <path d="M18 14 L24 22 L14 26 L18 14 Z" fill="#F8FAFC" opacity="0.8" />
                  
                  {/* Network nodes overlay */}
                  <circle cx="28" cy="6" r="2" fill="#10B981" />
                  <circle cx="6" cy="18" r="2" fill="#10B981" />
                  <circle cx="14" cy="26" r="2" fill="#10B981" />
                  <circle cx="18" cy="14" r="2.5" fill="#3B82F6" stroke="#F8FAFC" strokeWidth="1" />
                  
                  {/* Tech connection lines */}
                  <line x1="28" y1="6" x2="18" y2="14" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
                  <line x1="6" y1="18" x2="18" y2="14" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
                  <line x1="14" y1="26" x2="18" y2="14" stroke="#10B981" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
                </svg>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Taube<span className="text-blue-400">Tech</span>
              </span>
            </a>
            
            <p className="text-sm leading-relaxed text-[#94A3B8] font-medium">
              {t("footer.tagline")}
            </p>

            {/* Social Icons with brand hover colors */}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black hover:border-black transition-all duration-300"
                aria-label="Twitter X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              {t("footer.col_services")}
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  KI-Automatisierung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Cloud-Native Entwicklung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Team-Erweiterung
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-white transition-colors duration-200">
                  KI-Modell-Plattform
                </a>
              </li>
              <li>
                <a href="#ecommerce" className="hover:text-white transition-colors duration-200">
                  E-Commerce / ShopBuilder
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              {t("footer.col_company")}
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">
                  {t("about.eyebrow")}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors duration-200">
                  {t("whyUs.eyebrow")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">
                  {t("contact.eyebrow")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {t("footer.imprint")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {t("footer.terms")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div className="flex flex-col gap-6 text-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              {t("footer.col_contact")}
            </h3>
            <ul className="space-y-4 font-medium">
              <li className="flex flex-col gap-1">
                <a href="tel:+4917634953008" className="text-white hover:text-blue-400 transition-colors">
                  +49 17634953008
                </a>
                <span className="text-xs text-[#94A3B8]">{t("contact.subtext_hours")}</span>
              </li>
              <li>
                <a href="mailto:info@taubetech.de" className="text-white hover:text-indigo-400 transition-colors">
                  info@taubetech.de
                </a>
              </li>
              <li className="text-[#94A3B8]">
                Wegaweg 6, 70565 Stuttgart, Germany
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Sub-links */}
        <div className="border-t border-[#243656] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold">
          <p className="text-center md:text-left">
            {t("footer.copyright")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              {t("footer.imprint")}
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              {t("footer.terms")}
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              {t("footer.cookies")}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
