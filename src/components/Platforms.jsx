"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Platforms() {
  const { t, lang } = useLanguage();
  const [activeModel, setActiveModel] = useState("gpt4o");

  // Custom data to simulate a live AI Chat Mockup
  const chatMessages = {
    gpt4o: {
      modelName: "GPT-4o (OpenAI)",
      cost: "0.015€ / 1k Tokens",
      speed: "Fast · High IQ",
      response: lang === "de"
        ? "GPT-4o: Perfekt für komplexe logische Schlüsse, Textgenerierung und Datenanalyse nach deutschen Compliance-Richtlinien."
        : "GPT-4o: Perfect for complex reasoning, text generation, and data analysis fully compliant with German privacy guidelines.",
    },
    claude: {
      modelName: "Claude 3.5 Sonnet (Anthropic)",
      cost: "0.012€ / 1k Tokens",
      speed: "Ultra-Fast · Creative",
      response: lang === "de"
        ? "Claude 3.5: Herausragend in Softwareentwicklung, technischem Schreiben und semantischem Textverständnis."
        : "Claude 3.5: Outstanding in software engineering, technical writing, and semantic context understanding.",
    },
    gemini: {
      modelName: "Gemini 1.5 Pro (Google)",
      cost: "0.009€ / 1k Tokens",
      speed: "Massive Context · Fast",
      response: lang === "de"
        ? "Gemini Pro: Ideal für multimodale Workflows (Bilder + Dokumente) und riesige Code-Repositories."
        : "Gemini Pro: Ideal for multimodal workflows (images + documents) and analyzing massive codebases.",
    },
  };

  return (
    <section id="platforms" className="bg-[#0A0F1E] text-white">
      {/* 5A: AI Model Platform Spotlight */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Information */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span
              data-animate
              className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-6 border border-white/10"
            >
              {t("platforms.ai_badge")}
            </span>
            <h2
              data-animate
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8"
            >
              {t("platforms.ai_headline")}
            </h2>

            {/* Bullet Point List */}
            <ul data-animate className="space-y-4 mb-10 w-full">
              {[
                t("platforms.ai_bullet1"),
                t("platforms.ai_bullet2"),
                t("platforms.ai_bullet3"),
                t("platforms.ai_bullet4"),
                t("platforms.ai_bullet5"),
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                  <span className="text-[#10B981] font-bold text-lg leading-none">✓</span>
                  <span className="text-sm md:text-base text-[#94A3B8]">{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              data-animate
              href="#contact"
              className="px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 border border-white/10"
            >
              {t("platforms.ai_cta")}
            </a>
          </div>

          {/* Right Side: Interactive AI Chat UI Mockup */}
          <div data-animate className="lg:col-span-7 w-full">
            <div className="bg-[#1E293B] bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm relative group">
              {/* Header Bar */}
              <div className="bg-[#1B2A4A]/80 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-[#94A3B8] ml-4 font-mono select-none">taubetech-ai-hub v1.0.4</span>
                </div>
                <div className="text-xs text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/25 font-semibold">
                  ● Ready
                </div>
              </div>

              {/* Tabs Model Selector */}
              <div className="flex bg-[#1B2A4A]/40 border-b border-white/5 p-2 gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveModel("gpt4o")}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg font-mono transition-all flex items-center gap-2 shrink-0 ${
                    activeModel === "gpt4o"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  ⚡ GPT-4o
                </button>
                <button
                  onClick={() => setActiveModel("claude")}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg font-mono transition-all flex items-center gap-2 shrink-0 ${
                    activeModel === "claude"
                      ? "bg-[#4F46E5] text-white shadow-md"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  🎨 Claude 3.5
                </button>
                <button
                  onClick={() => setActiveModel("gemini")}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg font-mono transition-all flex items-center gap-2 shrink-0 ${
                    activeModel === "gemini"
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  🚀 Gemini Pro
                </button>
              </div>

              {/* Chat Canvas */}
              <div className="p-6 h-[280px] overflow-y-auto flex flex-col gap-4">
                {/* Bubble 1 (AI) */}
                <div className="flex gap-3 items-start max-w-[85%]">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-xs shrink-0 select-none">
                    🤖
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 text-xs md:text-sm text-[#F8FAFC]">
                    {t("platforms.ai_mockup_bubble1")}
                  </div>
                </div>

                {/* Bubble 2 (User) */}
                <div className="flex gap-3 items-start max-w-[85%] self-end">
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-none p-4 text-xs md:text-sm text-[#F8FAFC]">
                    {t("platforms.ai_mockup_bubble2")}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs shrink-0 select-none">
                    👨‍💻
                  </div>
                </div>

                {/* Bubble 3 (AI response - Dynamic depending on active model) */}
                <div className="flex gap-3 items-start max-w-[85%]">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-xs shrink-0 select-none">
                    ✨
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 text-xs md:text-sm text-blue-300 font-medium">
                    <div className="text-[10px] text-[#94A3B8] font-mono mb-1 uppercase tracking-widest flex items-center justify-between">
                      <span>{chatMessages[activeModel].modelName}</span>
                      <span>{chatMessages[activeModel].speed}</span>
                    </div>
                    {chatMessages[activeModel].response}
                  </div>
                </div>
              </div>

              {/* Message Input Mockup */}
              <div className="bg-[#1B2A4A]/50 border-t border-white/10 p-4 flex gap-4">
                <input
                  type="text"
                  readOnly
                  placeholder={t("platforms.ai_mockup_input")}
                  className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-xs md:text-sm text-white/50 focus:outline-none select-none"
                />
                <button
                  disabled
                  className="px-4 py-2.5 bg-blue-600 text-white rounded-xl text-xs md:text-sm font-semibold select-none opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5B: E-Commerce / ShopBuilder Spotlight */}
      <div
        id="ecommerce"
        className="py-24 bg-gradient-to-b from-[#0f1e3c] to-[#0A0F1E] border-t border-b border-white/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-900/10 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Eyebrow & Header */}
          <div className="mb-20">
            <span
              data-animate
              className="text-xs sm:text-sm font-bold tracking-widest text-[#10B981] uppercase"
            >
              {t("platforms.shop_badge")}
            </span>
            <h2
              data-animate
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6"
            >
              {t("platforms.shop_headline")}
            </h2>
            <p
              data-animate
              className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed"
            >
              {t("platforms.shop_subheadline")}
            </p>
          </div>

          {/* 3 Step Cards in a row with connection arrows */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch relative max-w-6xl mx-auto mb-16">
            
            {/* Step 1 */}
            <div
              data-animate
              className="bg-[#1E293B] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="text-left">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-5xl font-black text-blue-500/20 font-mono tracking-tighter">
                    {t("platforms.shop_step1_num")}
                  </div>
                  <span className="text-3xl">🏪</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t("platforms.shop_step1_title")}</h3>
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
                  {t("platforms.shop_step1_desc")}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div
              data-animate
              className="bg-[#1E293B] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Connector 1 (Desktop) */}
              <div className="hidden lg:block absolute top-[50%] left-[-40px] -translate-y-1/2 w-[80px] h-[30px] z-20 pointer-events-none text-indigo-500">
                <svg className="w-full h-full" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 15C40 5 60 25 90 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                  <polygon points="90,15 82,10 84,15 82,20" fill="currentColor" />
                </svg>
              </div>

              <div className="text-left">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-5xl font-black text-indigo-500/20 font-mono tracking-tighter">
                    {t("platforms.shop_step2_num")}
                  </div>
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t("platforms.shop_step2_title")}</h3>
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
                  {t("platforms.shop_step2_desc")}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div
              data-animate
              className="bg-[#1E293B] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Connector 2 (Desktop) */}
              <div className="hidden lg:block absolute top-[50%] left-[-40px] -translate-y-1/2 w-[80px] h-[30px] z-20 pointer-events-none text-emerald-500">
                <svg className="w-full h-full" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 15C40 5 60 25 90 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                  <polygon points="90,15 82,10 84,15 82,20" fill="currentColor" />
                </svg>
              </div>

              <div className="text-left">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-5xl font-black text-[#10B981]/20 font-mono tracking-tighter">
                    {t("platforms.shop_step3_num")}
                  </div>
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t("platforms.shop_step3_title")}</h3>
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
                  {t("platforms.shop_step3_desc")}
                </p>
              </div>
            </div>

          </div>

          {/* Centered CTA */}
          <div data-animate className="flex justify-center">
            <a
              href="#contact"
              className="px-10 py-5 rounded-full text-base font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 border border-white/10"
            >
              {t("platforms.shop_cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
