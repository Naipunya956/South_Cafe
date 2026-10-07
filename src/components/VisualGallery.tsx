import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ASSETS } from '../data/cafeData';

export const VisualGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    id: string;
    title: string;
    tag: string;
    image: string;
    caption: string;
  } | null>(null);

  const galleryFoodItems = [
    {
      id: "gal-biryani",
      title: "Handi Chicken Dum Biryani",
      tag: "THE BIRYANI",
      image: ASSETS.heroBiryani,
      caption: "Aromatic long-grain basmati rice slow dum-cooked in a traditional clay handi with tender marinated chicken cuts.",
    },
    {
      id: "gal-dosa",
      title: "Crispy Ghee Masala Dosa",
      tag: "SOUTH INDIAN",
      image: ASSETS.masalaDosa,
      caption: "Golden crepe roasted on hot griddle and served on fresh banana leaf with fresh coconut and red tomato chutneys.",
    },
    {
      id: "gal-shahi",
      title: "Shahi Tukda Bread Halwa",
      tag: "DESSERTS",
      image: ASSETS.shahiTukda,
      caption: "Golden fried bread steeped in rich saffron rabri custard with whole cashews and pistachios.",
    },
    {
      id: "gal-chaat",
      title: "Fresh Dahi Papdi Chaat",
      tag: "QUICK BITES",
      image: ASSETS.papdiChaat,
      caption: "Crispy semolina wafers topped with diced potatoes, whisked sweet dahi, tangy tamarind, and fine sev on copper platter.",
    },
  ];

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E8E0D2] pb-8">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-[#C25E34] font-semibold mb-3">
              Culinary Portfolio
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#221C18] uppercase tracking-tight">
              Visual Gallery
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#645D55] max-w-sm font-normal">
            A celebration of real dishes prepared fresh daily at South Cafe — The Paakashala.
          </p>
        </div>

        {/* Asymmetric Editorial Grid: 4 Unique Real Food Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Card 1: Biryani (Large, 7 cols) */}
          <div
            onClick={() => setSelectedPhoto(galleryFoodItems[0])}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-[#E2DACB] cursor-pointer border border-[#E8E0D2] shadow-sm"
          >
            <div className="aspect-[16/11] overflow-hidden">
              <img
                src={galleryFoodItems[0].image}
                alt={galleryFoodItems[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center image-reveal group-hover:scale-103 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 sm:p-8 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DDA15E] font-semibold">
                {galleryFoodItems[0].tag}
              </span>
              <h4 className="font-serif text-2xl text-white mt-1">{galleryFoodItems[0].title}</h4>
              <p className="text-xs text-white/80 mt-1 max-w-md">{galleryFoodItems[0].caption}</p>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Dosa (5 cols) */}
          <div
            onClick={() => setSelectedPhoto(galleryFoodItems[1])}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden bg-[#E2DACB] cursor-pointer border border-[#E8E0D2] shadow-sm"
          >
            <div className="aspect-[4/3] md:aspect-square overflow-hidden">
              <img
                src={galleryFoodItems[1].image}
                alt={galleryFoodItems[1].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center image-reveal group-hover:scale-103 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DDA15E] font-semibold">
                {galleryFoodItems[1].tag}
              </span>
              <h4 className="font-serif text-xl text-white mt-1">{galleryFoodItems[1].title}</h4>
              <p className="text-xs text-white/80 mt-1">{galleryFoodItems[1].caption}</p>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Shahi Tukda (5 cols) */}
          <div
            onClick={() => setSelectedPhoto(galleryFoodItems[2])}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden bg-[#E2DACB] cursor-pointer border border-[#E8E0D2] shadow-sm"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={galleryFoodItems[2].image}
                alt={galleryFoodItems[2].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center image-reveal group-hover:scale-103 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DDA15E] font-semibold">
                {galleryFoodItems[2].tag}
              </span>
              <h4 className="font-serif text-xl text-white mt-1">{galleryFoodItems[2].title}</h4>
              <p className="text-xs text-white/80 mt-1">{galleryFoodItems[2].caption}</p>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: Papdi Chaat (7 cols) */}
          <div
            onClick={() => setSelectedPhoto(galleryFoodItems[3])}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-[#E2DACB] cursor-pointer border border-[#E8E0D2] shadow-sm"
          >
            <div className="aspect-[16/11] overflow-hidden">
              <img
                src={galleryFoodItems[3].image}
                alt={galleryFoodItems[3].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center image-reveal group-hover:scale-103 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 sm:p-8 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DDA15E] font-semibold">
                {galleryFoodItems[3].tag}
              </span>
              <h4 className="font-serif text-2xl text-white mt-1">{galleryFoodItems[3].title}</h4>
              <p className="text-xs text-white/80 mt-1">{galleryFoodItems[3].caption}</p>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1A1614] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 md:p-8 bg-[#221C18] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#DDA15E] font-semibold">
                  {selectedPhoto.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-[#B7AEA4] mt-1">{selectedPhoto.caption}</p>
              </div>
              <span className="text-xs text-[#B7AEA4] border border-white/20 rounded-full px-4 py-1.5 self-start sm:self-auto">
                South Cafe · The Paakashala
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
