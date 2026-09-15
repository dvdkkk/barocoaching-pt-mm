import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MessageSquare, ZoomIn, X, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ReviewImageItem {
  id: string;
  localSrc: string;
  remoteSrc: string;
  title: string;
  tag: string;
}

const REVIEW_IMAGES: ReviewImageItem[] = [
  {
    id: 'rev-1',
    localSrc: '/images/reviews/review-01.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2606/7c2f82af75a13fef856f83a866619de3_1781251362_1975.jpg',
    title: '대기업 최종합격 감사 후기',
    tag: '대기업 합격'
  },
  {
    id: 'rev-2',
    localSrc: '/images/reviews/review-02.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2606/7c2f82af75a13fef856f83a866619de3_1781252076_9018.jpg',
    title: '대기업 취업 성공 후기',
    tag: '대기업 합격'
  },
  {
    id: 'rev-3',
    localSrc: '/images/reviews/review-03.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2607/a7e16ecf059e05ee492f1b100a7fbd74_1783479796_0907.jpg',
    title: '대기업 면접 합격 후기',
    tag: '대기업 합격'
  },
  {
    id: 'rev-4',
    localSrc: '/images/reviews/review-04.png',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2609/ad5298c371986a2d027821189afabd64_1788410478_4171.png',
    title: '대기업 기업 이직 성공 후기',
    tag: '대기업 이직'
  },
  {
    id: 'rev-5',
    localSrc: '/images/reviews/review-05.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2608/c74e0476e779e13de46844c5f091843e_1787206233_4321.jpg',
    title: '대기업 합격 후기',
    tag: '대기업'
  },
  {
    id: 'rev-6',
    localSrc: '/images/reviews/review-06.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2608/ee2c67caad02ef7e0384bdc6cd45c22c_1785995137_9315.jpg',
    title: ' 면접 합걱 후기',
    tag: '면접'
  },
  {
    id: 'rev-7',
    localSrc: '/images/reviews/review-07.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2608/ee2c67caad02ef7e0384bdc6cd45c22c_1785994445_9557.jpg',
    title: '면접 실전 코칭 후기',
    tag: '면접 코칭'
  },
  {
    id: 'rev-8',
    localSrc: '/images/reviews/review-08.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2607/af7a073a48f125301a6b03c81b56f6cd_1784170676_4779.jpg',
    title: '최종면접 밀착 완성 후기',
    tag: '최종면접 합격'
  },
  {
    id: 'rev-9',
    localSrc: '/images/reviews/review-09.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2607/af7a073a48f125301a6b03c81b56f6cd_1784170728_0767.jpg',
    title: '공공기관 면접 최종합격 후기',
    tag: '공공기관 합격'
  },
  {
    id: 'rev-10',
    localSrc: '/images/reviews/review-10.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2606/6169f3ade9d218573d07df8b9b722fdd_1782722789_7702.jpg',
    title: '1:1 맞춤 컨설팅 만족 후기',
    tag: '1:1 컨설팅'
  },
  {
    id: 'rev-11',
    localSrc: '/images/reviews/review-11.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2606/25d5692e40bd250feabb022f82d92539_1780994448_973.jpg',
    title: '중고신입 이직 성공 감사 후기',
    tag: '중고 신입 이직'
  },
  {
    id: 'rev-12',
    localSrc: '/images/reviews/review-12.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2607/a7e16ecf059e05ee492f1b100a7fbd74_1783479893_0402.jpg',
    title: '금융공기업 합격 후기',
    tag: '금융공기업'
  },
  {
    id: 'rev-13',
    localSrc: '/images/reviews/review-13.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2606/6169f3ade9d218573d07df8b9b722fdd_1782721828_5202.jpg',
    title: '취업 최종합격 메시지 후기',
    tag: '최종합격'
  },
  {
    id: 'rev-14',
    localSrc: '/images/reviews/review-14.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2606/c706ffa5348cb42cd412e23f59270369_1781756939_1509.jpg',
    title: '합격 면접 후기',
    tag: '합격 후기'
  },
  {
    id: 'rev-15',
    localSrc: '/images/reviews/review-15.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2606/6169f3ade9d218573d07df8b9b722fdd_1782721552_8695.jpg',
    title: '대기업 직무 면접 합격 후기',
    tag: '직무면접 통과'
  },
  {
    id: 'rev-16',
    localSrc: '/images/reviews/review-16.jpg',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2606/7c2f82af75a13fef856f83a866619de3_1781251964_4778.jpg',
    title: '단기 코칭 후 최종합격 후기',
    tag: '단기 집중'
  },
  {
    id: 'rev-17',
    localSrc: '/images/reviews/review-17.png',
    remoteSrc: 'https://barocoaching.co.kr/data/editor/2606/7c2f82af75a13fef856f83a866619de3_1781251730_5858.png',
    title: '금융권 공채 최종합격 후기',
    tag: '금융권 공채'
  }
];

const ReviewCard: React.FC<{
  item: ReviewImageItem;
  index: number;
  onSelect: (item: ReviewImageItem) => void;
  className?: string;
}> = ({ item, onSelect, className = '' }) => {
  const [currentSrc, setCurrentSrc] = useState(item.localSrc);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      onClick={() => onSelect(item)}
      className={`bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect(item);
        }
      }}
    >
      {/* Top Header Label */}
      <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-bold text-slate-700">{item.tag}</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-medium text-blue-600 group-hover:text-blue-700">
          <ZoomIn className="w-3.5 h-3.5" />
          <span>크게보기</span>
        </div>
      </div>

      {/* Image Viewport */}
      <div className="flex-1 relative bg-slate-100/70 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[340px]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 z-1">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {hasError ? (
          <div className="flex flex-col items-center justify-center p-4 text-center text-slate-400">
            <MessageSquare className="w-8 h-8 mb-2 text-slate-300" />
            <span className="text-xs font-semibold text-slate-600">{item.title}</span>
            <span className="text-[10px] text-slate-400 mt-1">바로코칭 수강생 합격 후기</span>
          </div>
        ) : (
          <img
            src={currentSrc}
            alt={item.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              if (currentSrc === item.localSrc) {
                // Try remote URL as fallback
                setCurrentSrc(item.remoteSrc);
              } else {
                setHasError(true);
                setIsLoading(false);
              }
            }}
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
          />
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-2">
          <span className="px-3 py-1.5 rounded-full bg-slate-900/85 text-white text-xs font-semibold backdrop-blur-xs shadow-md flex items-center gap-1.5">
            <ZoomIn className="w-3.5 h-3.5 text-blue-300" />
            후기 원본 확인
          </span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-4 py-2.5 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
        <span className="font-semibold text-slate-800 truncate text-[12px]">
          {item.title}
        </span>
        <span className="text-emerald-600 font-bold shrink-0 text-[11px] flex items-center gap-0.5">
          <ShieldCheck className="w-3.5 h-3.5" />
          인증
        </span>
      </div>
    </div>
  );
};

export const ReviewsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ReviewImageItem | null>(null);

  // Mobile 1-by-1 Slider State
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isMobilePaused, setIsMobilePaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const handleMobileNext = useCallback(() => {
    setMobileIndex((prev) => (prev + 1) % REVIEW_IMAGES.length);
  }, []);

  const handleMobilePrev = useCallback(() => {
    setMobileIndex((prev) => (prev - 1 + REVIEW_IMAGES.length) % REVIEW_IMAGES.length);
  }, []);

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
        // Swiped Left -> Next Review
        handleMobileNext();
      } else if (diff < -minSwipeDistance) {
        // Swiped Right -> Prev Review
        handleMobilePrev();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
    setTimeout(() => setIsMobilePaused(false), 2500);
  };

  // Mobile Auto-scroll every 4.5 seconds (pauses on user interaction)
  useEffect(() => {
    if (isMobilePaused) return;
    const timer = setInterval(() => {
      handleMobileNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isMobilePaused, handleMobileNext]);

  const selectedIndex = selectedImage ? REVIEW_IMAGES.findIndex((r) => r.id === selectedImage.id) : -1;

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedImage(REVIEW_IMAGES[selectedIndex - 1]);
    } else {
      setSelectedImage(REVIEW_IMAGES[REVIEW_IMAGES.length - 1]);
    }
  };

  const handleNext = () => {
    if (selectedIndex < REVIEW_IMAGES.length - 1) {
      setSelectedImage(REVIEW_IMAGES[selectedIndex + 1]);
    } else {
      setSelectedImage(REVIEW_IMAGES[0]);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 overflow-hidden" id="coaching-reviews-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>REAL STUDENT REVIEWS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            코칭 후기
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base font-medium">
            합격을 향한 확실한 변화, 바로코칭 수강생들이 직접 전하는 생생한 합격 및 코칭 감사 후기
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE VIEW (< 640px): 1 Review at a Time with Swipe/Controls */}
      {/* ========================================================= */}
      <div
        className="block sm:hidden px-4 max-w-md mx-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsMobilePaused(true)}
        onMouseLeave={() => setIsMobilePaused(false)}
      >
        {/* Mobile Header & Controls */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-600">수강생 리얼 후기</span>
          </div>

          {/* Mobile Counter & Nav Buttons */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleMobilePrev}
                className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 shadow-2xs active:scale-95 cursor-pointer"
                aria-label="이전 후기 보기"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleMobileNext}
                className="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
                aria-label="다음 후기 보기"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Guide Hint */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium px-1 mb-3">
          <span />
          <span>터치/스와이프 가능</span>
        </div>

        {/* Mobile 1-by-1 Review View Slider Window */}
        <div className="overflow-hidden relative rounded-2xl shadow-sm border border-slate-200/80 bg-white">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {REVIEW_IMAGES.map((item, idx) => (
              <div key={`mobile-rev-${item.id}`} className="w-full shrink-0">
                <ReviewCard
                  item={item}
                  index={idx}
                  onSelect={setSelectedImage}
                  className="w-full h-[410px] mx-0 rounded-none border-0 shadow-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PC / DESKTOP VIEW (>= 640px): Infinite Flow Marquee (Maintained) */}
      {/* ========================================================= */}
      <div className="hidden sm:block relative w-full overflow-hidden py-4">
        {/* Left / Right Gradient Fade Mask for Seamless Aesthetic */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

        {/* Scrolling Track (2 duplicates for infinite seamless loop) */}
        <div className="flex animate-marquee-left-slow hover:[animation-play-state:paused]">
          {/* First sequence */}
          <div className="flex shrink-0">
            {REVIEW_IMAGES.map((item, idx) => (
              <ReviewCard
                key={`orig-${item.id}`}
                item={item}
                index={idx}
                onSelect={setSelectedImage}
                className="w-[280px] sm:w-[320px] h-[390px] sm:h-[430px] shrink-0 mx-3"
              />
            ))}
          </div>

          {/* Second sequence for infinite loop */}
          <div className="flex shrink-0" aria-hidden="true">
            {REVIEW_IMAGES.map((item, idx) => (
              <ReviewCard
                key={`dup-${item.id}`}
                item={item}
                index={idx}
                onSelect={setSelectedImage}
                className="w-[280px] sm:w-[320px] h-[390px] sm:h-[430px] shrink-0 mx-3"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-[11px] font-bold">
                  {selectedImage.tag}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-slate-100 truncate">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100 flex items-center justify-center min-h-[300px]">
              <img
                src={selectedImage.localSrc || selectedImage.remoteSrc}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== selectedImage.remoteSrc) {
                    target.src = selectedImage.remoteSrc;
                  }
                }}
                className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="px-5 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <button
                type="button"
                onClick={handlePrev}
                className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 font-semibold flex items-center gap-1 cursor-pointer transition"
              >
                <ChevronLeft className="w-4 h-4" />
                이전 후기
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 font-semibold flex items-center gap-1 cursor-pointer transition"
              >
                다음 후기
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
