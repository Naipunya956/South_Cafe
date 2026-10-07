import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const FeedbackSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setFeedbackText('');
    }, 2500);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F5EFE6] border-y border-[#E8E0D2] relative">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        
        {/* Verified Rating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBF9F4] border border-[#E8E0D2] text-xs font-medium text-[#221C18] mb-6 shadow-xs">
          <div className="flex text-[#DDA15E]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
            ))}
          </div>
          <span className="font-semibold">{CAFE_INFO.rating}</span>
          <span className="text-[#645D55]">· {CAFE_INFO.reviewCount}</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#221C18] uppercase tracking-tight mb-4">
          How Was Your Visit?
        </h2>

        <p className="text-base sm:text-lg text-[#645D55] font-light max-w-lg mx-auto mb-10 leading-relaxed">
          Tell us what you think. Your impressions help us keep the food honest and the kitchen running true to South Cafe’s promise.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#C25E34] hover:bg-[#9F4520] transition-colors rounded-xs shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E34] cursor-pointer"
          >
            Leave Feedback
          </button>

          <a
            href={CAFE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#221C18] border border-[#E8E0D2] bg-white hover:bg-[#FBF9F4] transition-colors rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#221C18]"
          >
            <span>Review On Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#645D55]" />
          </a>
        </div>

      </div>

      {/* Interactive Feedback Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FBF9F4] max-w-md w-full rounded-3xl p-8 border border-[#E8E0D2] shadow-2xl relative text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="font-serif text-xl font-medium text-[#221C18]">
                Your Experience
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="text-xs uppercase tracking-wider text-[#645D55] hover:text-[#221C18] p-1 cursor-pointer"
              >
                Close
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-[#2D4B39] mb-3" />
                <h4 className="font-serif text-2xl text-[#221C18]">Thank You!</h4>
                <p className="text-xs text-[#645D55] mt-1 max-w-xs">
                  We appreciate your feedback and hope to welcome you back to The Paakashala soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#645D55] mb-2 font-medium">
                    Rate Your Experience
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 text-[#DDA15E] focus-visible:outline-none cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating ? 'fill-[#DDA15E] text-[#DDA15E]' : 'text-[#D2C8BA]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#645D55] mb-2 font-medium">
                    What did you enjoy or how can we improve?
                  </label>
                  <textarea
                    rows={4}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    required
                    placeholder="Tell us about the biryani, dosas, service or cafe atmosphere..."
                    className="w-full text-sm p-3 bg-white rounded-xl border border-[#E8E0D2] focus:outline-none focus:border-[#C25E34] text-[#221C18]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#645D55] hover:text-[#221C18] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#C25E34] hover:bg-[#9F4520] rounded-xs cursor-pointer"
                  >
                    Send Note
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
