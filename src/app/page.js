"use client";

import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Platforms from "../components/Platforms";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import StatsBar from "../components/StatsBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  // 1. Dynamic Keyframes CSS injection into document head
  // 2. Smooth scrolling activation
  useEffect(() => {
    // Enable smooth scroll
    document.documentElement.style.scrollBehavior = "smooth";

    // Inject custom CSS keyframes
    const styleTag = document.createElement("style");
    styleTag.id = "taubetech-dynamic-keyframes";
    styleTag.type = "text/css";
    styleTag.innerHTML = `
      @keyframes float-1 {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(-14px) translateX(6px); }
      }
      @keyframes float-2 {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(12px) translateX(-8px); }
      }
      @keyframes float-3 {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(-10px) translateX(-10px); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(24px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      const tag = document.getElementById("taubetech-dynamic-keyframes");
      if (tag) {
        document.head.removeChild(tag);
      }
    };
  }, []);

  // 3. Intersection Observer Scroll Reveal for elements with [data-animate]
  useEffect(() => {
    const targets = document.querySelectorAll("[data-animate]");

    // Assign initial hidden animation states
    targets.forEach((target) => {
      target.classList.add("reveal-init");
    });

    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px 0px -60px 0px", // trigger slightly before view entry
      threshold: 0.05, // trigger when 5% is visible
    };

    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0F1E] font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Main Navbar */}
      <Navbar />

      {/* Landing Page Content Stack */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services / Leistungen */}
        <Services />

        {/* Spotlight Platforms (AI + ShopBuilder) */}
        <Platforms />

        {/* Value Proposition / Warum TaubeTech */}
        <WhyChooseUs />

        {/* Company Vision & Staggered Panels */}
        <About />

        {/* Counter Stats Band */}
        <StatsBar />

        {/* Consultation Form & Coordinates */}
        <Contact />
      </main>

      {/* Main Footer & Badging */}
      <Footer />
    </div>
  );
}
