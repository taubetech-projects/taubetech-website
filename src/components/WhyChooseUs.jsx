"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const benefits = [
    {
      id: "benefit1",
      icon: "💰",
      text: t("whyUs.benefit1"),
      borderColor: "hover:border-blue-500/30",
      glowColor: "hover:shadow-blue-500/10",
    },
    {
      id: "benefit2",
      icon: "🚀",
      text: t("whyUs.benefit2"),
      borderColor: "hover:border-indigo-500/30",
      glowColor: "hover:shadow-indigo-500/10",
    },
    {
      id: "benefit3",
      icon: "🔒",
      text: t("whyUs.benefit3"),
      borderColor: "hover:border-emerald-500/30",
      glowColor: "hover:shadow-emerald-500/10",
    },
    {
      id: "benefit4",
      icon: "🌍",
      text: t("whyUs.benefit4"),
      borderColor: "hover:border-blue-500/30",
      glowColor: "hover:shadow-blue-500/10",
    },
    {
      id: "benefit5",
      icon: "📈",
      text: t("whyUs.benefit5"),
      borderColor: "hover:border-indigo-500/30",
      glowColor: "hover:shadow-indigo-500/10",
    },
    {
      id: "benefit6",
      icon: "🎯",
      text: t("whyUs.benefit6"),
      borderColor: "hover:border-emerald-500/30",
      glowColor: "hover:shadow-emerald-500/10",
    },
  ];

  return (
    <section id="why-us" className="bg-[#0A0F1E] py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[5%] w-[450px] h-[450px] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow & Header */}
        <div className="text-center mb-20">
          <span
            data-animate
            className="text-xs sm:text-sm font-bold tracking-widest text-[#2563EB] uppercase"
          >
            {t("whyUs.eyebrow")}
          </span>
          <h2
            data-animate
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight max-w-4xl mx-auto"
          >
            {t("whyUs.headline")}
          </h2>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            // Split the emoji from the text content for better styling
            const emoji = benefit.icon;
            const description = benefit.text.slice(2); // remove emoji + space

            return (
              <div
                key={benefit.id}
                data-animate
                className={`bg-[#1E293B] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-5 ${benefit.borderColor} ${benefit.glowColor}`}
              >
                {/* Custom Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shadow-inner shadow-black/20">
                  {emoji}
                </div>
                
                {/* Description Copy */}
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed font-medium">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
