"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function TopBar() {
  const { lang, setLanguage } = useLanguage();

  return (
    <div className="w-full bg-[#1B2A4A] py-2 px-4 text-xs md:text-sm text-[#94A3B8] border-b border-white/5 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 px-4 sm:px-6 lg:px-8">
        {/* Left Side: Contact Links */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+4917634953008"
            className="flex items-center gap-1 hover:text-white transition-colors duration-200"
          >
            <span>📞</span>
            <span>+49 17634953008</span>
          </a>
          <span className="text-white/10 hidden sm:inline">|</span>
          <a
            href="mailto:info@taubetech.de"
            className="flex items-center gap-1 hover:text-white transition-colors duration-200"
          >
            <span>✉</span>
            <span>info@taubetech.de</span>
          </a>
        </div>

        {/* Right Side: Language Switcher */}
        <div className="flex items-center gap-2">
          <div className="border border-white/20 rounded-full p-0.5 flex bg-black/20">
            <button
              onClick={() => setLanguage("de")}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                lang === "de"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>🇩🇪</span> DE
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                lang === "en"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>🇬🇧</span> EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
