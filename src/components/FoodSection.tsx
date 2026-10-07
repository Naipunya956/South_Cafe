import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../data/cafeData';

export const FoodSection: React.FC = () => {
  return (
    <section id="food" className="py-24 md:py-36 bg-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6 border-b border-[#E8E0D2] pb-8">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-[#C25E34] font-semibold mb-3">
              The Menu At A Glance
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#221C18] uppercase tracking-tight">
              What Are You Craving?
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#645D55] max-w-md font-normal leading-relaxed">
            From clay-handi dum biryanis and banana-leaf dosas to evening street chaat, Chinese noodles, pizzas, and cool refreshers in Vinayak Nagar.
          </p>
        </div>

        {/* Asymmetric Visual Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Biryani Category (Large Span) */}
          <div className="md:col-span-7 group relative bg-[#F5EFE6] rounded-3xl overflow-hidden border border-[#E8E0D2] flex flex-col justify-between p-8 md:p-10 hover:shadow-lg transition-all duration-500">
            <div className="flex items-start justify-between z-10">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C25E34] font-semibold">
                  01 · Handi Specialties
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#221C18] uppercase mt-1">
                  Biryani
                </h3>
                <p className="text-sm text-[#645D55] mt-1.5 max-w-xs">
                  Chicken Dum, Royal Veg Dum & Bagara Rice Handis
                </p>
              </div>
              <a
                href="#biryani"
                className="w-10 h-10 rounded-full bg-[#221C18] text-[#FBF9F4] flex items-center justify-center group-hover:bg-[#C25E34] transition-colors"
                aria-label="View Biryani collection"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Visual Media: Royal Veg Dum Biryani (Real Photo) */}
            <div className="mt-8 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#E2DACB]">
              <img
                src={ASSETS.vegBiryani}
                alt="Royal Veg Dum Biryani with paneer and cashews"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center image-reveal group-hover:scale-104 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221C18]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white text-xs">
                <span>Slow-Cooked Dum Handis</span>
                <span className="text-[#DDA15E] font-medium">Single & Sharing Portions</span>
              </div>
            </div>
          </div>

          {/* Card 2: South Indian Tiffins (Portrait Span) */}
          <div className="md:col-span-5 group relative bg-[#2D4B39] text-[#FBF9F4] rounded-3xl overflow-hidden flex flex-col justify-between p-8 md:p-10 hover:shadow-lg transition-all duration-500">
            <div className="flex items-start justify-between z-10">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#DDA15E] font-semibold">
                  02 · Tiffins & Dosas
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FBF9F4] uppercase mt-1">
                  South Indian
                </h3>
                <p className="text-sm text-[#D7E3DC] mt-1.5">
                  Crispy Masala Dosa, Podi & Uttapams
                </p>
              </div>
              <a
                href="#beyond-biryani"
                className="w-10 h-10 rounded-full bg-[#FBF9F4] text-[#2D4B39] flex items-center justify-center group-hover:bg-[#DDA15E] group-hover:text-[#221C18] transition-colors"
                aria-label="View South Indian menu"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Visual Media: Real Masala Dosa on Banana Leaf (Real Photo) */}
            <div className="mt-8 relative aspect-square rounded-2xl overflow-hidden bg-[#1E3427]">
              <img
                src={ASSETS.masalaDosa}
                alt="Golden crispy Masala Dosa on banana leaf"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center image-reveal group-hover:scale-104 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-xs text-white flex justify-between">
                <span>Served with Fresh Chutneys</span>
                <span className="text-[#DDA15E]">Banana Leaf Plating</span>
              </div>
            </div>
          </div>

          {/* Card 3: Quick Bites & Chaat */}
          <div className="md:col-span-6 group relative bg-[#F5EFE6] rounded-3xl overflow-hidden border border-[#E8E0D2] flex flex-col justify-between p-8 md:p-10 hover:shadow-lg transition-all duration-500">
            <div className="flex items-start justify-between z-10">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C25E34] font-semibold">
                  03 · Evening Snacks
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#221C18] uppercase mt-1">
                  Quick Bites
                </h3>
                <p className="text-sm text-[#645D55] mt-1.5">
                  Butter Pav Bhaji, Chaat, Pani Puri & French Fries
                </p>
              </div>
              <a
                href="#beyond-biryani"
                className="w-10 h-10 rounded-full bg-[#221C18] text-[#FBF9F4] flex items-center justify-center group-hover:bg-[#C25E34] transition-colors"
                aria-label="View Quick Bites"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Visual Media: Real Butter Pav Bhaji (Real Photo) */}
            <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E2DACB]">
              <img
                src={ASSETS.pavBhaji}
                alt="Special Butter Pav Bhaji on black divided plate"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center image-reveal group-hover:scale-104 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221C18]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white text-xs">
                <span>Toasted Pav & Melting Butter</span>
                <span className="text-[#DDA15E]">Street Favorite</span>
              </div>
            </div>
          </div>

          {/* Card 4: Atmosphere & Cafe Experience Quote Card */}
          <div className="md:col-span-6 group relative bg-[#221C18] text-[#FBF9F4] rounded-3xl overflow-hidden flex flex-col justify-between p-8 md:p-10 hover:shadow-lg transition-all duration-500">
            <div className="flex items-start justify-between z-10">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C25E34] font-semibold">
                  04 · Atmosphere
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FBF9F4] uppercase mt-1">
                  The Cafe Space
                </h3>
                <p className="text-sm text-[#B7AEA4] mt-1.5">
                  Relaxed shed dining with woven lights, cool drinks, Chinese & Pizzas
                </p>
              </div>
              <a
                href="#the-cafe"
                className="w-10 h-10 rounded-full bg-[#FBF9F4] text-[#221C18] flex items-center justify-center group-hover:bg-[#C25E34] group-hover:text-white transition-colors"
                aria-label="View Cafe Atmosphere"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Editorial Brand Quote Card in Place of Photo */}
            <div className="mt-8 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DDA15E] font-medium block mb-4">
                THE SOUTH CAFE EXPERIENCE
              </span>
              <blockquote className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                “Good food tastes even better when there’s a place to linger.”
              </blockquote>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#B7AEA4]">
                <span>Vinayak Nagar · Nizamabad</span>
                <span className="text-[#DDA15E] font-medium uppercase tracking-wider text-[11px]">Dine-In</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
