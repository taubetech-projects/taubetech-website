"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#0A0F1E] overflow-hidden py-16 sm:py-20 lg:py-0"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
    >
      {/* Background Ambient Radial Lights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-900/20 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-900/15 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Responsive Grid: Left text / Right visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline, Subheadline, CTA, Trust badges */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Giant Gradient Title */}
            <h1
              data-animate
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-2xl"
            >
              <span className="block">{t("hero.headline_part1")}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500">
                {t("hero.headline_part2")}
              </span>
              <span>{t("hero.headline_part3")}</span>
            </h1>

            {/* Support Copy */}
            <p
              data-animate
              className="text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-xl mb-8 leading-relaxed font-medium"
            >
              {t("hero.subheadline")}
            </p>

            {/* Button Anchors */}
            <div
              data-animate
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 w-full max-w-md sm:max-w-none"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 border border-white/10"
              >
                {t("hero.cta_primary")}
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-bold text-blue-400 border border-blue-500 hover:bg-blue-500/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t("hero.cta_secondary")}
              </a>
            </div>

            {/* Trust Pills */}
            <div
              data-animate
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 border-t border-white/10 pt-8 w-full max-w-xl"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors duration-200">
                <span className="text-[#10B981] font-bold">✓</span>
                <span>{t("hero.trust_dsgvo")}</span>
              </div>
              <span className="text-white/10 hidden sm:inline">•</span>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors duration-200">
                <span className="text-[#10B981] font-bold">✓</span>
                <span>{t("hero.trust_hosting")}</span>
              </div>
              <span className="text-white/10 hidden sm:inline">•</span>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8] hover:text-white transition-colors duration-200">
                <span className="text-[#10B981] font-bold">✓</span>
                <span>{t("hero.trust_location")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Visual Node & Floating Stats (safely isolated!) */}
          <div
            data-animate
            className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[380px] lg:min-h-[480px]"
          >
            {/* Core Glow Center Node */}
            <div className="absolute w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-white/5 flex items-center justify-center animate-[pulse_6s_infinite_alternate] shadow-2xl shadow-blue-500/5">
              <div className="w-[140px] h-[140px] rounded-full bg-[#1B2A4A]/60 border border-white/10 flex items-center justify-center">
                {/* Professional Geometric Dove-Network Logo */}
                <svg
                  className="w-14 h-14 text-blue-400 animate-pulse"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="heroLogoGrad"
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
                    fill="url(#heroLogoGrad)"
                    opacity="0.9"
                  />
                  <path
                    d="M18 14 L6 18 L14 26 L18 14 Z"
                    fill="url(#heroLogoGrad)"
                  />
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
            </div>

            {/* Ambient Orbital Rings */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-white/10 animate-[spin_25s_linear_infinite_reverse]" />

            {/* 3 Moving Glassmorphic Badges (Desktop Absolute, Orbit animated) */}

            {/* Badge 1: 40% Cost Savings (Floating Top-Left) */}
            <div
              className="lg:absolute lg:top-[12%] lg:left-[5%] bg-[#1E293B]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl shadow-blue-500/5 max-w-[210px] z-10 select-none pointer-events-auto"
              style={{ animation: "float-1 6s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-base shrink-0">
                  💰
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider">
                    Efficiency
                  </p>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight mt-0.5">
                    {t("hero.float_stat1")}
                  </h4>
                </div>
              </div>
            </div>

            {/* Badge 2: 100+ Projects (Floating Mid-Right) */}
            <div
              className="lg:absolute lg:top-[42%] lg:right-[0%] bg-[#1E293B]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl shadow-indigo-500/5 max-w-[210px] z-10 select-none pointer-events-auto"
              style={{ animation: "float-2 5s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-base shrink-0">
                  🚀
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider">
                    Success
                  </p>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight mt-0.5">
                    {t("hero.float_stat2")}
                  </h4>
                </div>
              </div>
            </div>

            {/* Badge 3: Security by Design (Floating Bottom-Left) */}
            <div
              className="lg:absolute lg:bottom-[15%] lg:left-[8%] bg-[#1E293B]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl shadow-emerald-500/5 max-w-[220px] z-10 select-none pointer-events-auto"
              style={{ animation: "float-3 7s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center text-base shrink-0">
                  🛡️
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider">
                    Compliance
                  </p>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight mt-0.5">
                    {t("hero.float_stat3")}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet fallback: Render static row of float cards ONLY on medium screens and below so they stack beautifully under the grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 lg:hidden relative z-10">
          <div
            className="bg-[#1E293B]/70 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg flex items-center gap-3"
            style={{ animation: "float-1 6s ease-in-out infinite" }}
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-base shrink-0">
              💰
            </div>
            <div>
              <p className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider">
                Efficiency
              </p>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">
                {t("hero.float_stat1")}
              </h4>
            </div>
          </div>
          <div
            className="bg-[#1E293B]/70 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg flex items-center gap-3"
            style={{ animation: "float-2 5s ease-in-out infinite" }}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-base shrink-0">
              🚀
            </div>
            <div>
              <p className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider">
                Success
              </p>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">
                {t("hero.float_stat2")}
              </h4>
            </div>
          </div>
          <div
            className="bg-[#1E293B]/70 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg flex items-center gap-3"
            style={{ animation: "float-3 7s ease-in-out infinite" }}
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center text-base shrink-0">
              🛡️
            </div>
            <div>
              <p className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider">
                Compliance
              </p>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">
                {t("hero.float_stat3")}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
