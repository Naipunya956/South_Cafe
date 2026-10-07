import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FOOD_FEATURES } from '../data/cafeData';

export const BeyondBiryani: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="beyond-biryani" className="py-24 md:py-36 bg-[#FBF9F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-[#C25E34] font-semibold mb-3">
              Tiffins, Chaat & Sweets
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#221C18] uppercase tracking-tight">
              More Than Biryani.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#645D55] mr-2 hidden sm:inline">
              Scroll Spread
            </span>
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-[#E8E0D2] bg-white hover:bg-[#F5EFE6] text-[#221C18] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E34] cursor-pointer shadow-xs"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-[#E8E0D2] bg-white hover:bg-[#F5EFE6] text-[#221C18] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E34] cursor-pointer shadow-xs"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery - Every Single Card Has A Unique Photo */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {FOOD_FEATURES.map((item) => (
            <div
              key={item.id}
              className="w-[280px] sm:w-[340px] md:w-[380px] shrink-0 bg-[#F5EFE6] rounded-3xl p-6 sm:p-7 border border-[#E8E0D2] flex flex-col justify-between snap-start hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Visual Image (Unique to each dish) */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#E8E0D2] relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center image-reveal group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white tracking-widest uppercase">
                    {item.tag}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#9F4520] font-semibold tracking-wider uppercase mb-2">
                  <span>{item.category}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#221C18] leading-snug mb-3">
                  {item.name}
                </h3>

                <p className="text-sm text-[#645D55] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E0D2] flex items-center justify-between text-xs text-[#645D55]">
                <span className="font-medium text-[#221C18]">Made To Order</span>
                <span className="text-[11px] uppercase tracking-wider text-[#C25E34] font-semibold">
                  Dine-In & Takeaway
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
