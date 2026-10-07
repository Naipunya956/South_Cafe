import React from 'react';
import { CAFE_INFO, ASSETS } from '../data/cafeData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#221C18] text-[#FBF9F4] pt-20 pb-12 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Footer Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column with Official Logo Asset */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <img
                  src={ASSETS.officialLogo}
                  alt="South Cafe The Paakashala Official Logo"
                  className="h-12 w-12 shrink-0 rounded-full shadow-xs"
                />
                <div>
                  <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#FBF9F4] block uppercase leading-none">
                    {CAFE_INFO.name}
                  </span>
                  <span className="text-[11px] tracking-[0.28em] text-[#DDA15E] font-medium block uppercase mt-1 leading-none">
                    {CAFE_INFO.subname}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#B7AEA4] max-w-sm font-light leading-relaxed mt-4">
                {CAFE_INFO.address}
              </p>
            </div>

            <div className="mt-8 text-xs text-[#8A8177]">
              <span>Established 2026 · Vinayak Nagar, Nizamabad</span>
            </div>
          </div>

          {/* Quick External Links */}
          <div className="md:col-span-3">
            <span className="block text-[11px] uppercase tracking-widest text-[#DDA15E] font-semibold mb-4">
              Connect & Order
            </span>
            <ul className="space-y-3 text-xs tracking-wider uppercase text-[#D7CEC3]">
              <li>
                <a
                  href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  Call {CAFE_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CAFE_INFO.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Swiggy Nizamabad
                </a>
              </li>
              <li>
                <a
                  href={CAFE_INFO.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Zomato
                </a>
              </li>
              <li>
                <a
                  href={CAFE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Google Maps Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Editorial Philosophy Statement */}
          <div className="md:col-span-3 flex flex-col justify-end">
            <div className="font-serif text-3xl sm:text-4xl text-[#FBF9F4] uppercase leading-none tracking-tight">
              <span>Good Food.</span>
              <span className="block text-[#DDA15E] mt-1 font-serif italic font-normal">Good Company.</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8A8177]">
          <span>© {new Date().getFullYear()} South Cafe — The Paakashala. All rights reserved.</span>
          <span>Vinayak Nagar · Nizamabad, Telangana</span>
        </div>

      </div>
    </footer>
  );
};
