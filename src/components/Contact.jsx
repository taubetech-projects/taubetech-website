"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t, lang } = useLanguage();

  // Controlled form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  // Submit feedback state
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Clear fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Auto-dismiss toast after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }, 800);
  };

  return (
    <section id="contact" className="bg-[#0A0F1E] py-24 relative overflow-hidden border-t border-white/5">
      {/* Background visual glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-20">
          <span
            data-animate
            className="text-xs sm:text-sm font-bold tracking-widest text-[#2563EB] uppercase"
          >
            {t("contact.eyebrow")}
          </span>
          <h2
            data-animate
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6"
          >
            {t("contact.headline")}
          </h2>
          <p
            data-animate
            className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed"
          >
            {t("contact.subheadline")}
          </p>
        </div>

        {/* 50/50 Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Form */}
          <div data-animate className="lg:col-span-6 bg-[#1E293B] bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-sm relative">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  {t("contact.label_name")} <span className="text-red-500">*</span>
                </label>
                <input
                  id="form-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("contact.placeholder_name")}
                  className="w-full bg-black/20 border border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-email" className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  {t("contact.label_email")} <span className="text-red-500">*</span>
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("contact.placeholder_email")}
                  className="w-full bg-black/20 border border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-phone" className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  {t("contact.label_phone")}
                </label>
                <input
                  id="form-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("contact.placeholder_phone")}
                  className="w-full bg-black/20 border border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-message" className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  {t("contact.label_message")} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="form-message"
                  required
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contact.placeholder_message")}
                  className="w-full bg-black/20 border border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none transition-all border border-white/10"
              >
                {isSubmitting ? "..." : t("contact.btn_submit")}
              </button>

            </form>
          </div>

          {/* Right Column: Info & Consultation Details */}
          <div data-animate className="lg:col-span-6 flex flex-col gap-10">
            
            {/* Quick Contact Info */}
            <div className="flex flex-col gap-6 bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
              {/* Telephone */}
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform duration-200">
                  📞
                </div>
                <div>
                  <a href="tel:+4917634953008" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
                    +49 17634953008
                  </a>
                  <p className="text-xs text-[#94A3B8] mt-1 font-medium">{t("contact.subtext_hours")}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform duration-200">
                  ✉
                </div>
                <div>
                  <a href="mailto:info@taubetech.de" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">
                    info@taubetech.de
                  </a>
                  <p className="text-xs text-[#94A3B8] mt-1 font-medium">Support & Inquiries</p>
                </div>
              </div>

              {/* Physical Location */}
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform duration-200">
                  📍
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Stuttgart, Germany</h4>
                  <p className="text-xs text-[#94A3B8] mt-1 font-medium">Wegaweg 6, 70565 Stuttgart</p>
                </div>
              </div>
            </div>

            {/* Consulting Checklist */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white">{t("contact.what_you_get_title")}</h3>
              <ul className="space-y-4">
                {[
                  t("contact.what_you_get_1"),
                  t("contact.what_you_get_2"),
                  t("contact.what_you_get_3"),
                  t("contact.what_you_get_4"),
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                    <span className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/25 flex items-center justify-center text-[10px] font-extrabold shrink-0 select-none">
                      ✓
                    </span>
                    <span className="text-sm md:text-base text-[#94A3B8] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Green Success Toast Notifications */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
          submitted ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-[#10B981] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-emerald-400/20 font-semibold text-sm sm:text-base">
          <span>✅</span>
          <span>{t("contact.toast_success")}</span>
        </div>
      </div>

    </section>
  );
}
