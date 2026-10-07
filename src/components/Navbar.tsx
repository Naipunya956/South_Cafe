import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { CAFE_INFO, ASSETS } from '../data/cafeData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Food', href: '#food' },
    { label: 'Biryani', href: '#biryani' },
    { label: 'The Cafe', href: '#the-cafe' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Visit', href: '#visit' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#E8E0D2] py-3.5 shadow-[0_4px_20px_-10px_rgba(34,28,24,0.05)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Official South Cafe Logo Asset in Header */}
        <a
          href="#"
          className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E34]"
          aria-label="South Cafe The Paakashala Home"
        >
          <img
            src={ASSETS.officialLogo}
            alt="South Cafe The Paakashala Official Logo"
            className="h-11 w-11 shrink-0 rounded-full shadow-xs transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg tracking-[0.2em] font-semibold text-[#221C18] uppercase leading-none">
              {CAFE_INFO.name}
            </span>
            <span className="text-[10px] tracking-[0.28em] text-[#C25E34] font-medium uppercase mt-1 leading-none">
              {CAFE_INFO.subname}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wider uppercase font-medium text-[#645D55]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="transition-colors hover:text-[#221C18] relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C25E34] cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-xs text-[#645D55] hover:text-[#221C18] transition-colors font-medium px-2 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#C25E34]" />
            <span className="hidden lg:inline">{CAFE_INFO.phoneDisplay}</span>
          </a>
          <a
            href="#order"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#order');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#C25E34] hover:bg-[#9F4520] transition-colors rounded-xs shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E34]"
          >
            <span>Order</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#221C18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E34] cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#FBF9F4] border-b border-[#E8E0D2] shadow-xl py-6 px-8 flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-widest font-medium text-[#221C18]">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-2 border-b border-[#E8E0D2]/50 hover:text-[#C25E34] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#order"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#order');
              }}
              className="w-full text-center py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#C25E34] rounded-xs shadow-sm"
            >
              Order Online
            </a>
            <a
              href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full text-center py-2.5 text-xs uppercase tracking-wider font-medium text-[#645D55] border border-[#E8E0D2] rounded-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C25E34]" />
              Call {CAFE_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
