import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Flame } from 'lucide-react';
import { BIRYANI_COLLECTION } from '../data/cafeData';

export const SignatureBiryani: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = BIRYANI_COLLECTION[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % BIRYANI_COLLECTION.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + BIRYANI_COLLECTION.length) % BIRYANI_COLLECTION.length);
  };

  return (
    <section id="biryani" className="py-24 md:py-36 bg-[#221C18] text-[#FBF9F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-[#DDA15E] font-medium mb-3">
              Slow Dum Handi Craft
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#FBF9F4] uppercase tracking-tight">
              The Biryani
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-[#B7AEA4]">
              0{activeIndex + 1} / 0{BIRYANI_COLLECTION.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-white/20 hover:border-white hover:bg-white/10 transition-colors flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DDA15E] cursor-pointer"
                aria-label="Previous biryani item"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-white/20 hover:border-white hover:bg-white/10 transition-colors flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DDA15E] cursor-pointer"
                aria-label="Next biryani item"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Cinematic Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Media Presentation */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-[28px] md:rounded-[36px] overflow-hidden bg-[#2D2520] aspect-[4/3] sm:aspect-square shadow-2xl border border-white/10">
              <img
                key={currentItem.id}
                src={currentItem.image}
                alt={currentItem.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-700 animate-in fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Bottom Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                <span className="px-3.5 py-1.5 rounded-full bg-[#C25E34] text-white font-medium uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  {currentItem.badge}
                </span>
                <span className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[#DDA15E] tracking-wider uppercase text-[11px]">
                  {currentItem.portion}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="text-xs tracking-[0.25em] uppercase text-[#DDA15E] font-medium mb-3">
              Photo 0{activeIndex + 1} · {currentItem.badge}
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-4">
              {currentItem.name}
            </h3>

            <p className="text-base text-[#D7CEC3] font-light leading-relaxed mb-8">
              {currentItem.description}
            </p>

            {/* Preparation Details */}
            <div className="space-y-4 border-t border-white/10 pt-6 mb-8 text-xs text-[#B7AEA4]">
              <div className="flex items-center justify-between">
                <span className="uppercase tracking-widest text-white/60">Preparation Style</span>
                <span className="text-white font-medium">Authentic Dum Steaming</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="uppercase tracking-widest text-white/60">Rice</span>
                <span className="text-white font-medium">Long Grain Aromatic Basmati</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="uppercase tracking-widest text-white/60">Served With</span>
                <span className="text-white font-medium">Cooling Raita & Rich Salan</span>
              </div>
            </div>

            {/* Variety Selector Buttons */}
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-white/50 mb-3">
                Featured Biryanis:
              </span>
              <div className="flex gap-2">
                {BIRYANI_COLLECTION.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-1 py-2 text-[11px] uppercase tracking-wider rounded-xs border transition-all cursor-pointer ${
                      idx === activeIndex
                        ? 'border-[#C25E34] bg-[#C25E34] text-white font-semibold'
                        : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
