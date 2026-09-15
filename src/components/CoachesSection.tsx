import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Briefcase, ChevronLeft, ChevronRight, Users, Sparkles } from 'lucide-react';
import { CoachDetail, COACHES_LIST } from '../data/coachesData';
import { ModernCoachCard } from './ModernCoachCard';

interface CoachesSectionProps {
  onOpenCoachDetail?: (coach: CoachDetail) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onOpenCoachDetail }) => {
  const coaches = COACHES_LIST;

  // Desktop (PC) State: 4 coaches per slide
  const [desktopPage, setDesktopPage] = useState(0);
  const [isDesktopPaused, setIsDesktopPaused] = useState(false);
  const itemsPerPage = 4;
  const desktopTotalPages = Math.ceil(coaches.length / itemsPerPage);

  // Split into chunks of 4 for PC
  const coachSlides: CoachDetail[][] = [];
  for (let i = 0; i < coaches.length; i += itemsPerPage) {
    coachSlides.push(coaches.slice(i, i + itemsPerPage));
  }

  const handleDesktopNext = useCallback(() => {
    setDesktopPage((prev) => (prev + 1) % desktopTotalPages);
  }, [desktopTotalPages]);

  const handleDesktopPrev = useCallback(() => {
    setDesktopPage((prev) => (prev - 1 + desktopTotalPages) % desktopTotalPages);
  }, [desktopTotalPages]);

  // Desktop Auto-scroll every 3.5 seconds
  useEffect(() => {
    if (isDesktopPaused) return;
    const timer = setInterval(() => {
      handleDesktopNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [isDesktopPaused, handleDesktopNext]);

  // Mobile State: 1 coach at a time
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isMobilePaused, setIsMobilePaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const handleMobileNext = useCallback(() => {
    setMobileIndex((prev) => (prev + 1) % coaches.length);
  }, [coaches.length]);

  const handleMobilePrev = useCallback(() => {
    setMobileIndex((prev) => (prev - 1 + coaches.length) % coaches.length);
  }, [coaches.length]);

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsMobilePaused(true);
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const diff = touchStartXRef.current - touchEndXRef.current;
      const minSwipeDistance = 45; // 45px swipe threshold
      if (diff > minSwipeDistance) {
        // Swiped Left -> Next Coach
        handleMobileNext();
      } else if (diff < -minSwipeDistance) {
        // Swiped Right -> Prev Coach
        handleMobilePrev();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
    // Resume auto play after brief delay
    setTimeout(() => setIsMobilePaused(false), 2000);
  };

  // Mobile Auto-scroll every 4 seconds (pauses on user interaction)
  useEffect(() => {
    if (isMobilePaused) return;
    const timer = setInterval(() => {
      handleMobileNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isMobilePaused, handleMobileNext]);

  const coachPoints = [
    '코칭업계 Best of Best 코치진의 명확한 컨설팅',
    '다수의 공공기관 및 기업 채용절차 설계와 운영뿐만 아니라 채용도구 개발',
    '기업들의 채용 운영을 총괄한 경험과 현재도 총괄하는 코치진',
    '국내 대기업 및 공공기관, 금융권, 외국계 기업 대상으로 10년 동안 100개 이상의 채용 프로젝트 수행',
    '대기업, 공기업, 금융권 등 면접위원 교육을 진행하시는 코치진'
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white" id="coaches-expertise-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Core Strengths */}
        <div className="max-w-4xl mx-auto space-y-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold mb-3.5 border border-red-100/80 shadow-2xs">
              <Briefcase className="w-3.5 h-3.5" />
              <span>EXPERT INTERVIEWERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              전문성이 없는 코칭은<br />
              <span className="text-red-600">시간낭비 돈 낭비!</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg font-bold text-slate-800">
              대기업 / 공기업 / 금융권의 면접관 &amp; 인사팀 출신들로 &ldquo;합격을 부르는 코칭&rdquo; 입니다.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {coachPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Coaches Section (Responsive: 1 by 1 on Mobile, 4 per Slide on PC) */}
        <div className="mt-14 pt-10 border-t border-slate-200">

          {/* ========================================================= */}
          {/* MOBILE VIEW (< 640px): 1 Coach at a Time with Swipe/Buttons */}
          {/* ========================================================= */}
          <div
            className="block sm:hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsMobilePaused(true)}
            onMouseLeave={() => setIsMobilePaused(false)}
          >
            {/* Mobile Header & Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    바로코칭 전담 코치진
                  </h3>
                </div>
              </div>

              {/* Mobile Counter & Nav Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                  <strong className="text-blue-600 font-extrabold">{mobileIndex + 1}</strong> / {coaches.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handleMobilePrev}
                    className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 shadow-2xs active:scale-95 cursor-pointer"
                    aria-label="이전 코치 보기"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleMobileNext}
                    className="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
                    aria-label="다음 코치 보기"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Swipe Guide Hint */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium px-1 mb-3">
              <span className="flex items-center gap-1 text-blue-600 font-semibold">
                <Sparkles className="w-3 h-3" />
                좌우로 넘겨 코치진 프로필 확인
              </span>
              <span>터치 및 스와이프 가능</span>
            </div>

            {/* Mobile 1-by-1 Coach View Slider Window */}
            <div className="overflow-hidden relative rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
              >
                {coaches.map((coach) => (
                  <div key={coach.id} className="w-full shrink-0 px-0.5">
                    <ModernCoachCard
                      coach={coach}
                      variant="carousel"
                      onOpenDetail={onOpenCoachDetail}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Bottom Quick Jump / Indicators */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <button
                type="button"
                onClick={handleMobilePrev}
                className="text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition"
              >
                ◀ 이전 코치
              </button>
              <div className="text-xs font-bold text-slate-700">
                <span className="text-blue-600">{mobileIndex + 1}</span> 번째 코치 (총 {coaches.length}명)
              </div>
              <button
                type="button"
                onClick={handleMobileNext}
                className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition shadow-xs"
              >
                다음 코치 ▶
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* PC / DESKTOP VIEW (>= 640px): 4 Coaches per Slide (Maintained) */}
          {/* ========================================================= */}
          <div
            className="hidden sm:block"
            onMouseEnter={() => setIsDesktopPaused(true)}
            onMouseLeave={() => setIsDesktopPaused(false)}
          >
            {/* Header with Navigation Controls */}
            <div className="flex sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      바로코칭 전담 코치진
                    </h3>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                <div className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                  <span className="text-blue-600">{desktopPage + 1}</span> / {desktopTotalPages}
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleDesktopPrev}
                    className="w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition cursor-pointer border border-slate-200/90 shadow-2xs hover:shadow-xs active:scale-95"
                    aria-label="이전 코치진 보기"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleDesktopNext}
                    className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition cursor-pointer shadow-xs active:scale-95"
                    aria-label="다음 코치진 보기"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Carousel Slider Window (4 per page) */}
            <div className="overflow-hidden relative rounded-2xl p-1">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${desktopPage * 100}%)` }}
              >
                {coachSlides.map((slide, slideIdx) => (
                  <div
                    key={`slide-${slideIdx}`}
                    className="w-full shrink-0 grid grid-cols-2 lg:grid-cols-4 gap-6"
                  >
                    {slide.map((c) => (
                      <ModernCoachCard
                        key={c.id}
                        coach={c}
                        variant="carousel"
                        onOpenDetail={onOpenCoachDetail}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {coachSlides.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  type="button"
                  onClick={() => setDesktopPage(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    desktopPage === idx ? 'w-8 bg-blue-600 shadow-2xs' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`${idx + 1}번째 코치진 목록으로 이동`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
