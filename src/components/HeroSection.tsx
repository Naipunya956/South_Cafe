import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CAFE_INFO, ASSETS } from '../data/cafeData';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 md:py-32 flex flex-col justify-between overflow-hidden bg-[#FBF9F4]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            {/* Location Kicker with Official Logo */}
            <div className="flex items-center gap-3.5 mb-6">
              <img
                src={ASSETS.officialLogo}
                alt="South Cafe The Paakashala Official Logo"
                className="h-10 w-10 shrink-0 rounded-full shadow-xs"
              />
              <span className="text-xs tracking-[0.25em] uppercase text-[#645D55] font-medium">
                Vinayak Nagar · Nizamabad
              </span>
            </div>

            {/* Main Brand Title - Authentic Typography */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.92] text-[#221C18] uppercase">
              SOUTH CAFE
            </h1>
            
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#C25E34] mt-2 mb-6 font-normal tracking-wide">
              The Paakashala
            </p>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg text-[#645D55] max-w-md font-normal leading-relaxed mb-10">
              {CAFE_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('#food')}
                className="px-7 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#221C18] border border-[#221C18] hover:bg-[#221C18] hover:text-[#FBF9F4] transition-all rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#221C18] cursor-pointer"
              >
                Explore The Food
              </button>

              <button
                onClick={() => scrollTo('#order')}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#C25E34] hover:bg-[#9F4520] transition-all rounded-xs shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E34] cursor-pointer"
              >
                <span>Order Online</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Real Metadata Footprint */}
            <div className="mt-14 pt-8 border-t border-[#E8E0D2] flex items-center gap-8 text-xs tracking-wider text-[#645D55]">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#9F4520] font-semibold">Specialty</span>
                <span className="font-medium text-[#221C18]">Clay Handi Dum Biryani & Tiffins</span>
              </div>
              <div className="h-6 w-px bg-[#E8E0D2]" />
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#9F4520] font-semibold">Hours</span>
                <span className="font-medium text-[#221C18]">{CAFE_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Hero Card: Real Chicken Dum Biryani Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_-15px_rgba(34,28,24,0.1)] bg-[#EAE2D5] aspect-square border border-[#E8E0D2]">
                <img
                  src={ASSETS.heroBiryani}
                  alt="South Cafe authentic Chicken Dum Biryani in clay handi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center image-reveal scale-100 hover:scale-103 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#221C18]/65 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#DDA15E] font-medium block">
                      House Dum Specialty
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-normal leading-tight text-white">
                      Chicken Dum Biryani
                    </h3>
                  </div>
                  <span className="text-xs uppercase tracking-widest px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                    Handi Cooked
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="mt-12 md:mt-16 w-full flex flex-col items-center justify-center gap-3">
        <button
          onClick={() => scrollTo('#food')}
          className="group flex flex-col items-center gap-1.5 text-[#645D55] hover:text-[#221C18] transition-colors focus-visible:outline-none cursor-pointer"
          aria-label="Scroll down to food section"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#C25E34]" />
        </button>
      </div>
    </section>
  );
};
