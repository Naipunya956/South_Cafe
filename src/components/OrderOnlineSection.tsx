import React from 'react';
import { ArrowUpRight, Bike } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const OrderOnlineSection: React.FC = () => {
  return (
    <section id="order" className="py-24 md:py-32 bg-[#2D4B39] text-[#FBF9F4] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
        
        <span className="text-xs uppercase tracking-[0.25em] text-[#DDA15E] font-medium block mb-3">
          Doorstep Delivery In Nizamabad
        </span>

        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#FBF9F4] uppercase tracking-tight mb-4">
          Craving Something?
        </h2>

        <p className="font-serif italic text-2xl sm:text-3xl text-[#E3EDE7] font-light mb-10 max-w-lg mx-auto">
          “Your favourites are only a tap away.”
        </p>

        {/* Ordering Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto">
          {/* Swiggy Button */}
          <a
            href={CAFE_INFO.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-white bg-[#FC8019] hover:bg-[#e46e09] transition-all rounded-xs shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Order On Swiggy</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Zomato Button */}
          <a
            href={CAFE_INFO.zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-white bg-[#E23744] hover:bg-[#cb2a37] transition-all rounded-xs shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Order On Zomato</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Quiet Delivery Note */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-[#B7C7BD]">
          <Bike className="w-4 h-4 text-[#DDA15E]" />
          <span>Freshly packed dum handis & hot dosas dispatched directly from our kitchen</span>
        </div>

      </div>
    </section>
  );
};
