import React, { useState, useEffect } from 'react';
import { PhoneCall, ArrowUp } from 'lucide-react';

interface FloatingWidgetProps {
  onOpenFastConsult: () => void;
  onOpenCustomConsult?: () => void;
}

export const FloatingWidget: React.FC<FloatingWidgetProps> = ({
  onOpenFastConsult
}) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50 flex flex-col items-center gap-3 select-none"
      id="floating-quick-widget"
    >
      {/* Scroll to Top Button (Appears on Scroll) */}
      {showTopBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-slate-900 text-slate-600 hover:text-white transition-all duration-300 shadow-lg border border-slate-200/80 cursor-pointer backdrop-blur-xs hover:scale-110 active:scale-95 group animate-in fade-in slide-in-from-bottom-3 duration-200"
          id="floating-top-btn"
          title="맨 위로 가기"
          aria-label="맨 위로 이동"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

      {/* Main Quick Consultation Floating Button with 7s Ping & Pulse Highlight */}
      <div className="relative group">
        {/* 7-Second Periodic Ping Effect Rings */}
        <span
          className="absolute -inset-2 rounded-full bg-blue-500/40 animate-ping-7s pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-3.5 rounded-full bg-indigo-500/25 animate-ping-7s-delayed pointer-events-none"
          aria-hidden="true"
        />

        {/* Floating Circular Consultation Action Button */}
        <button
          type="button"
          onClick={onOpenFastConsult}
          className="relative flex flex-col items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-7s border-2 border-white/40 group/btn"
          id="floating-fast-btn"
          title="빠른 상담 신청 (30분 이내 회신)"
          aria-label="빠른 상담 신청"
        >
          {/* Subtle Glow & Shine Overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/10 to-white/25 pointer-events-none" />

          {/* Animated Call Icon */}
          <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-0.5 group-hover/btn:rotate-12 transition-transform duration-200 animate-bounce drop-shadow-xs" />

          {/* Label Text */}
          <span className="text-[11px] sm:text-xs font-black tracking-tight text-white leading-none drop-shadow-xs">
            빠른상담
          </span>
        </button>
      </div>
    </div>
  );
};
