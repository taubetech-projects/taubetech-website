"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#0A0F1E] py-24 relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span
            data-animate
            className="text-xs sm:text-sm font-bold tracking-widest text-[#2563EB] uppercase"
          >
            {t("about.eyebrow")}
          </span>
          <h2
            data-animate
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight"
          >
            {t("about.headline")}
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Vision, Mission, Who we are */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            {/* Vision */}
            <div data-animate className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#2563EB] font-bold text-xl">◉</span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {t("about.vision_title")}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed pl-6 border-l border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                {t("about.vision_desc")}
              </p>
            </div>

            {/* Mission */}
            <div data-animate className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#4F46E5] font-bold text-xl">◉</span>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {t("about.mission_title")}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed pl-6 border-l border-white/10 group-hover:border-indigo-500/50 transition-all duration-300">
                {t("about.mission_desc")}
              </p>
            </div>

            {/* Who We Are */}
            <div data-animate className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#10B981] font-bold text-xl">◉</span>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {t("about.who_title")}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed pl-6 border-l border-white/10 group-hover:border-emerald-500/50 transition-all duration-300">
                {t("about.who_desc")}
              </p>
            </div>
          </div>

          {/* Right Column: 3 Graphic/Image-placeholder Cards */}
          <div data-animate className="lg:col-span-6 relative h-[450px] flex items-center justify-center">
            
            {/* Card 1 - Team Work */}
            <div
              className="absolute top-4 left-6 w-[70%] sm:w-[60%] bg-[#1E293B]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-blue-500/30 hover:scale-[1.02] transition-all duration-300"
              style={{ transform: "rotate(-3deg)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
                  🤝
                </div>
                <h4 className="font-bold text-white text-base">{t("about.card1_caption")}</h4>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-indigo-500" />
              </div>
              <div className="mt-3 flex justify-between text-[11px] text-[#94A3B8] font-mono">
                <span>Agile Synergy</span>
                <span>85% Match</span>
              </div>
            </div>

            {/* Card 2 - Philosophy */}
            <div
              className="absolute bottom-10 right-4 w-[68%] sm:w-[58%] bg-[#1E293B]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-indigo-500/30 hover:scale-[1.02] transition-all duration-300 z-10"
              style={{ transform: "rotate(2deg)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl">
                  🕊️
                </div>
                <h4 className="font-bold text-white text-base">{t("about.card2_caption")}</h4>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[100%] bg-gradient-to-r from-indigo-500 to-purple-500" />
              </div>
              <div className="mt-3 flex justify-between text-[11px] text-[#94A3B8] font-mono">
                <span>Uncompromising Integrity</span>
                <span>100% Quality</span>
              </div>
            </div>

            {/* Card 3 - Office Stuttgart */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] bg-[#1E293B]/90 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl hover:border-emerald-500/30 hover:scale-[1.03] transition-all duration-300 z-20"
              style={{ transform: "rotate(-1deg)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-lg shrink-0">
                  🏢
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm leading-none">{t("about.card3_caption")}</h4>
                  <p className="text-[10px] text-[#94A3B8] mt-1 font-mono">Wegaweg 6, Stuttgart</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
