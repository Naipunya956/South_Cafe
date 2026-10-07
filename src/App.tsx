import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FoodSection } from './components/FoodSection';
import { SignatureBiryani } from './components/SignatureBiryani';
import { BeyondBiryani } from './components/BeyondBiryani';
import { TheCafeSection } from './components/TheCafeSection';
import { PaakashalaStory } from './components/PaakashalaStory';
import { VisualGallery } from './components/VisualGallery';
import { FeedbackSection } from './components/FeedbackSection';
import { VisitSection } from './components/VisitSection';
import { OrderOnlineSection } from './components/OrderOnlineSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#221C18] selection:bg-[#C25E34]/20 selection:text-[#9F4520]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Editorial Content Stream */}
      <main>
        {/* Section 01: Hero */}
        <HeroSection />

        {/* Section 02: The Food (What Are You Craving?) */}
        <FoodSection />

        {/* Section 03: Signature Biryani */}
        <SignatureBiryani />

        {/* Section 04: Beyond Biryani (Dosas & Street Bites) */}
        <BeyondBiryani />

        {/* Section 05: The Cafe (The Place) */}
        <TheCafeSection />

        {/* Section 06: The Paakashala Story */}
        <PaakashalaStory />

        {/* Section 07: Visual Gallery */}
        <VisualGallery />

        {/* Section 08: Customer Feedback */}
        <FeedbackSection />

        {/* Section 09: Visit Us (Come By) */}
        <VisitSection />

        {/* Section 10: Order Online */}
        <OrderOnlineSection />
      </main>

      {/* Section 11: Minimal Footer */}
      <Footer />
    </div>
  );
}
