import React from 'react';
import { ASSETS } from '../data/cafeData';

export const PaakashalaStory: React.FC = () => {
  return (
    <section id="our-story" className="py-24 md:py-36 bg-[#FBF9F4] relative">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        
        {/* Official South Cafe Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={ASSETS.officialLogo}
            alt="South Cafe The Paakashala Official Logo"
            className="w-24 h-24 object-contain shadow-xs"
          />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-[#C25E34] font-semibold block mb-3">
          Brand & Origin · Est. 2026
        </span>

        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#221C18] uppercase tracking-tight mb-8">
          The Paakashala
        </h2>

        {/* Honest, Simple Narrative */}
        <div className="space-y-6 text-base sm:text-lg md:text-xl text-[#645D55] font-light leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
          <p>
            In South Indian culinary tradition, <strong className="text-[#221C18] font-normal">Paakashala</strong> refers to the kitchen sanctuary — the hearth where food is cooked with care, fresh spices are ground, and hospitality begins.
          </p>
          <p>
            Founded in 2026 at Hanuman Junction in Vinayak Nagar, Nizamabad, <strong className="text-[#221C18] font-normal">South Cafe — The Paakashala</strong> is a straightforward neighborhood cafe. A place where you can walk in for a hot morning podi dosa, sit down with friends for afternoon handi biryani, or grab an evening snack of butter pav bhaji and tea.
          </p>
          <p>
            Uncomplicated, authentic South Indian flavors, simple wooden bench seating, and an unhurried atmosphere.
          </p>
        </div>

        {/* Three Honest Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-[#E8E0D2] text-left">
          <div className="p-4">
            <span className="text-[11px] uppercase tracking-widest text-[#9F4520] font-semibold block mb-2">
              01 · The Kitchen
            </span>
            <h4 className="font-serif text-xl text-[#221C18] mb-2">Dum Rice & Fresh Batter</h4>
            <p className="text-xs text-[#645D55] leading-relaxed">
              Dosas cooked fresh to order on hot griddles, and biryanis gently steamed in sealed dum handis.
            </p>
          </div>

          <div className="p-4">
            <span className="text-[11px] uppercase tracking-widest text-[#9F4520] font-semibold block mb-2">
              02 · The Space
            </span>
            <h4 className="font-serif text-xl text-[#221C18] mb-2">Open-Air Shed Dining</h4>
            <p className="text-xs text-[#645D55] leading-relaxed">
              Corrugated roof, long wooden tables with steel benches, woven basket lamps, and hanging green foliage.
            </p>
          </div>

          <div className="p-4">
            <span className="text-[11px] uppercase tracking-widest text-[#9F4520] font-semibold block mb-2">
              03 · The Location
            </span>
            <h4 className="font-serif text-xl text-[#221C18] mb-2">Vinayak Nagar, Nizamabad</h4>
            <p className="text-xs text-[#645D55] leading-relaxed">
              Located conveniently at Hanuman Junction with easy road access and relaxed walk-in dining.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
