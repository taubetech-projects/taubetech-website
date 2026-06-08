"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function StatsBar() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  // States to hold the counting numbers
  const [costSavings, setCostSavings] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const [dsgvoPercentage, setDsgvoPercentage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  useEffect(() => {
    if (!animated) return;

    const duration = 2000; // 2 seconds animation
    let startTime = null;

    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress);

      setCostSavings(Math.floor(easeProgress * 40));
      setProjectsCount(Math.floor(easeProgress * 35));
      setServicesCount(Math.floor(easeProgress * 6));
      setDsgvoPercentage(Math.floor(easeProgress * 100));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        // Enforce final values exactly
        setCostSavings(40);
        setProjectsCount(35);
        setServicesCount(6);
        setDsgvoPercentage(100);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [animated]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#1B2A4A] border-t border-b border-white/5 py-16 relative overflow-hidden"
    >
      {/* Decorative linear backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center">
          
          {/* Stat 1: Cost Savings */}
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94A3B8] font-mono leading-none tracking-tight">
              {costSavings}%
            </span>
            <span className="text-xs sm:text-sm font-semibold uppercase text-blue-400 mt-3 tracking-widest font-sans">
              {t("stats.cost")}
            </span>
          </div>

          {/* Stat 2: Completed Projects */}
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94A3B8] font-mono leading-none tracking-tight">
              {projectsCount}+
            </span>
            <span className="text-xs sm:text-sm font-semibold uppercase text-indigo-400 mt-3 tracking-widest font-sans">
              {t("stats.projects")}
            </span>
          </div>

          {/* Stat 3: Core Services */}
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94A3B8] font-mono leading-none tracking-tight">
              {servicesCount}
            </span>
            <span className="text-xs sm:text-sm font-semibold uppercase text-emerald-400 mt-3 tracking-widest font-sans">
              {t("stats.services")}
            </span>
          </div>

          {/* Stat 4: GDPR Compliant */}
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94A3B8] font-mono leading-none tracking-tight">
              {dsgvoPercentage}%
            </span>
            <span className="text-xs sm:text-sm font-semibold uppercase text-emerald-400 mt-3 tracking-widest font-sans">
              {t("stats.dsgvo")}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
