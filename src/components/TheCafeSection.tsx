import React from 'react';

export const TheCafeSection: React.FC = () => {
  return (
    <section id="the-cafe" className="py-24 md:py-36 bg-[#F5EFE6] border-y border-[#E8E0D2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs tracking-[0.25em] uppercase text-[#C25E34] font-semibold mb-3">
            The Atmosphere & Space
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#221C18] uppercase tracking-tight leading-none mb-6">
            The Place.
          </h2>
          <p className="text-base md:text-lg text-[#645D55] font-normal leading-relaxed">
            South Cafe was built with a grounded, open neighborhood character in Vinayak Nagar. An unhurried space designed for good company, hot tiffins, and slow-cooked dum biryani feasts.
          </p>
        </div>

        {/* Elegant Editorial Quote / Brand Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* CARD 1 — ATMOSPHERE */}
          <div className="lg:col-span-7 bg-[#FAF7EE] rounded-3xl p-10 sm:p-14 md:p-16 border border-[#E8E0D2] shadow-sm relative flex flex-col justify-between overflow-hidden group min-h-[380px] md:min-h-[420px]">
            {/* Subtle Deep-Green & Terracotta Decorative Linework Frame */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between opacity-60 pointer-events-none" aria-hidden="true">
              <div className="w-6 h-6 border-t-2 border-l-2 border-[#C25E34]" />
              <div className="h-px flex-1 mx-4 bg-gradient-to-r from-[#C25E34]/40 via-[#2D4B39]/30 to-[#C25E34]/40" />
              <div className="w-6 h-6 border-t-2 border-r-2 border-[#C25E34]" />
            </div>

            <div className="relative z-10 pt-4 md:pt-6">
              {/* Tiny Label Above Quote */}
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C25E34] font-semibold block mb-8">
                THE SOUTH CAFE EXPERIENCE
              </span>

              {/* Primary Quotation — Editorial & Spacious */}
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] text-[#221C18] leading-[1.2] tracking-tight font-normal">
                “Good food tastes even better<br className="hidden sm:inline" /> when there’s a place to linger.”
              </blockquote>
            </div>

            {/* Bottom Linework & Subtle Brand Coordinates */}
            <div className="relative z-10 pt-10 mt-8 border-t border-[#E8E0D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#645D55]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#2D4B39]" />
                <span className="tracking-wider uppercase font-medium text-[#221C18]">
                  Open Bench Seating & Woven Warmth
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-widest text-[#9F4520] font-medium">
                Vinayak Nagar · Nizamabad
              </span>
            </div>

            {/* Bottom Subtle Corner Linework */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-60 pointer-events-none" aria-hidden="true">
              <div className="w-6 h-6 border-b-2 border-l-2 border-[#2D4B39]" />
              <div className="h-px flex-1 mx-4 bg-gradient-to-r from-[#2D4B39]/30 via-[#C25E34]/40 to-[#2D4B39]/30" />
              <div className="w-6 h-6 border-b-2 border-r-2 border-[#2D4B39]" />
            </div>
          </div>

          {/* CARD 2 — THE PAAKASHALA */}
          <div className="lg:col-span-5 bg-[#2D4B39] text-[#FAF7EE] rounded-3xl p-10 sm:p-14 md:p-16 shadow-md relative flex flex-col justify-between overflow-hidden min-h-[380px] md:min-h-[420px]">
            {/* Very Subtle Kolam-Inspired Decorative Motif (Watermark) */}
            <div className="absolute -right-10 -bottom-10 w-72 h-72 opacity-12 pointer-events-none" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none" stroke="#FAF7EE" strokeWidth="2" className="w-full h-full">
                <path d="M50 12 C35 32 12 50 12 50 C12 50 35 68 50 88 C65 68 88 50 88 50 C88 50 65 32 50 12 Z" />
                <circle cx="50" cy="50" r="20" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="4" fill="#FAF7EE" />
                <circle cx="50" cy="30" r="3" fill="#FAF7EE" />
                <circle cx="50" cy="70" r="3" fill="#FAF7EE" />
                <circle cx="30" cy="50" r="3" fill="#FAF7EE" />
                <circle cx="70" cy="50" r="3" fill="#FAF7EE" />
                <line x1="25" y1="25" x2="75" y2="75" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
                <line x1="25" y1="75" x2="75" y2="25" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
              </svg>
            </div>

            <div className="relative z-10 pt-4 md:pt-6">
              {/* Tiny Label Above Quote */}
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#DDA15E] font-medium block mb-8">
                THE PAAKASHALA
              </span>

              {/* Primary Quotation — Visual Focus */}
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7EE] leading-[1.18] tracking-tight font-normal">
                “Come for the craving.<br />Stay for the feeling.”
              </blockquote>
            </div>

            {/* Bottom Quiet Statement */}
            <div className="relative z-10 pt-10 mt-8 border-t border-white/15 flex items-center justify-between text-xs text-[#C5D6CC]">
              <span className="tracking-widest uppercase font-medium">
                The Hearth & Kitchen
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#DDA15E]">
                Est. 2026
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
