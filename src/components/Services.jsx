"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const servicesList = [
    {
      id: "ai-automation",
      title: t("services.card1_title"),
      desc: t("services.card1_desc"),
      badge: null,
      link: null,
    },
    {
      id: "cloud-native",
      title: t("services.card2_title"),
      desc: t("services.card2_desc"),
      badge: null,
      link: null,
    },
    {
      id: "team-extension",
      title: t("services.card3_title"),
      desc: t("services.card3_desc"),
      badge: null,
      link: null,
    },
    {
      id: "ai-platform",
      title: t("services.card4_title"),
      desc: t("services.card4_desc"),
      badge: { text: t("services.badge_new"), color: "bg-[#10B981]/15 text-[#10B981] border-[#10B981]/25" },
      link: { text: t("services.card4_link"), href: "#platforms" },
    },
    {
      id: "ecommerce",
      title: t("services.card5_title"),
      desc: t("services.card5_desc"),
      badge: { text: t("services.badge_popular"), color: "bg-blue-500/15 text-blue-400 border-blue-500/25" },
      link: { text: t("services.card5_link"), href: "#ecommerce" },
    },
    {
      id: "cybersecurity",
      title: t("services.card6_title"),
      desc: t("services.card6_desc"),
      badge: null,
      link: null,
    },
  ];

  return (
    <section id="services" className="bg-[#0A0F1E] py-24 relative overflow-hidden">
      {/* Light glow behind cards */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow & Header */}
        <div className="text-center mb-20">
          <span
            data-animate
            className="text-xs sm:text-sm font-bold tracking-widest text-[#2563EB] uppercase"
          >
            {t("services.eyebrow")}
          </span>
          <h2
            data-animate
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight max-w-4xl mx-auto"
          >
            {t("services.headline")}
          </h2>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              data-animate
              className="bg-[#1E293B] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-md hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Decorative side accent line that lights up on hover */}
              <div className="absolute top-0 left-0 w-1.5 h-0 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-tl-2xl rounded-bl-2xl transition-all duration-300 group-hover:h-full" />

              <div>
                {/* Header Row with Badge */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${service.badge.color}`}
                    >
                      {service.badge.text}
                    </span>
                  )}
                </div>

                {/* Description Copy */}
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Action Button/Link if provided */}
              {service.link && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <a
                    href={service.link.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1.5 transition-all duration-300"
                  >
                    {service.link.text}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
