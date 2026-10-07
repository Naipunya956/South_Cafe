import React from 'react';
import { Phone, MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';
import { CAFE_INFO, ASSETS } from '../data/cafeData';

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="py-24 md:py-36 bg-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#C25E34] font-semibold mb-3">
            Find Our Tables
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#221C18] uppercase tracking-tight">
            Come By.
          </h2>
          <p className="text-sm md:text-base text-[#645D55] font-normal mt-4">
            Located right at Hanuman Junction in Vinayak Nagar. Step in for breakfast tiffins, afternoon biryani lunches, or evening snacks.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Cafe Address and Visit Info */}
          <div className="lg:col-span-5 bg-[#F5EFE6] rounded-3xl p-8 sm:p-10 border border-[#E8E0D2] flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <img
                  src={ASSETS.officialLogo}
                  alt="South Cafe The Paakashala Official Logo"
                  className="h-12 w-12 shrink-0 rounded-full shadow-xs"
                />
                <div>
                  <h3 className="font-serif text-2xl text-[#221C18] leading-tight uppercase">
                    {CAFE_INFO.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[#C25E34] font-semibold block mt-0.5">
                    {CAFE_INFO.subname}
                  </span>
                </div>
              </div>

              {/* Address Block */}
              <div className="space-y-6 pt-4 border-t border-[#E8E0D2]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#C25E34] shrink-0 border border-[#E8E0D2]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-widest text-[#9F4520] font-semibold">
                      Location
                    </span>
                    <p className="text-sm text-[#221C18] font-normal leading-relaxed mt-1">
                      {CAFE_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Hours Block */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#C25E34] shrink-0 border border-[#E8E0D2]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-widest text-[#9F4520] font-semibold">
                      Service Hours
                    </span>
                    <p className="text-sm text-[#221C18] font-medium mt-1">
                      {CAFE_INFO.hours}
                    </p>
                    <span className="text-xs text-[#645D55]">{CAFE_INFO.days}</span>
                  </div>
                </div>

                {/* Phone Block */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#C25E34] shrink-0 border border-[#E8E0D2]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-widest text-[#9F4520] font-semibold">
                      Phone & Inquiries
                    </span>
                    <a
                      href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-base text-[#221C18] font-semibold hover:text-[#C25E34] transition-colors block mt-1"
                    >
                      {CAFE_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[#E8E0D2] flex flex-wrap gap-4">
              <a
                href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
                className="flex-1 text-center py-3.5 px-5 text-xs uppercase tracking-widest font-semibold text-[#221C18] bg-white border border-[#E8E0D2] hover:bg-[#FBF9F4] transition-colors rounded-xs shadow-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C25E34]" />
                <span>Call Us</span>
              </a>

              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3.5 px-5 text-xs uppercase tracking-widest font-semibold text-white bg-[#C25E34] hover:bg-[#9F4520] transition-colors rounded-xs shadow-xs flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Exterior Card Replaced with Editorial Brand & Quote Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Elegant Quotation & Landmark Card (Deep Muted Green with Cream Typography) */}
            <div className="bg-[#2D4B39] text-[#FAF7EE] rounded-3xl p-10 sm:p-14 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[320px]">
              {/* Subtle Kolam Motif Watermark in Background */}
              <div className="absolute -right-6 -bottom-6 w-56 h-56 opacity-10 pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 100 100" fill="none" stroke="#FAF7EE" strokeWidth="2.5" className="w-full h-full">
                  <path d="M50 15 C35 35 15 50 15 50 C15 50 35 65 50 85 C65 65 85 50 85 50 C85 50 65 35 50 15 Z" />
                  <circle cx="50" cy="50" r="18" />
                  <circle cx="50" cy="50" r="4" fill="#FAF7EE" />
                </svg>
              </div>

              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#DDA15E] font-medium block">
                  THE PAAKASHALA · NIZAMABAD
                </span>
                <a
                  href={CAFE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7EE] text-xs uppercase tracking-wider font-semibold border border-white/20 backdrop-blur-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#DDA15E]" />
                </a>
              </div>

              {/* Quotation as visual focus */}
              <div className="relative z-10 my-8">
                <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7EE] leading-[1.2] tracking-tight font-normal">
                  “Come for the craving.<br />Stay for the feeling.”
                </blockquote>
              </div>

              {/* Landmark details */}
              <div className="relative z-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#C5D6CC]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#DDA15E]" />
                  <span>Hanuman Junction · Vinayak Nagar</span>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[#DDA15E]">
                  Open Everyday · 11:00 AM – 10:30 PM
                </span>
              </div>
            </div>

            {/* Practical Visiting Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-[#F5EFE6] rounded-2xl border border-[#E8E0D2]">
                <span className="text-[11px] uppercase tracking-widest text-[#9F4520] font-semibold block mb-1">
                  Peak Dum Hours
                </span>
                <p className="text-xs text-[#645D55] leading-relaxed">
                  Fresh handi biryani is served hottest between 12:30 PM – 3:30 PM and 7:30 PM – 10:00 PM.
                </p>
              </div>
              <div className="p-6 bg-[#F5EFE6] rounded-2xl border border-[#E8E0D2]">
                <span className="text-[11px] uppercase tracking-widest text-[#9F4520] font-semibold block mb-1">
                  Bench Seating
                </span>
                <p className="text-xs text-[#645D55] leading-relaxed">
                  Long wooden bench tables accommodate groups, families, and walk-in diners easily.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
