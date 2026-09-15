import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  HeartHandshake,
  Check,
  TrendingUp,
  Users,
  FileEdit,
  UserCheck,
  Target,
  PhoneCall,
  CalendarCheck,
  FileCheck,
  Award,
  Video,
  MapPin,
  FileText,
  PenTool,
  ShieldCheck,
  Compass,
  Clock,
  ChevronLeft,
  ZoomIn,
  X
} from 'lucide-react';
import { PasserTicker } from './PasserTicker';
import { FinanceCompanyLogosMarquee } from './FinanceCompanyLogosMarquee';
import { CoachDetail, COACHES_LIST } from '../data/coachesData';
import { TARGET_AUDIENCE_LIST, COACHING_POINTS, FINANCE_PASSERS_LIST } from '../data/contentData';
import { ModernCoachCard } from './ModernCoachCard';
import { ResultsSection } from './ResultsSection';
import { PortfolioSection } from './PortfolioSection';
import { ReviewsSection } from './ReviewsSection';

interface FinancePageContentProps {
  onOpenConsultation: (type: 'fast' | 'custom') => void;
  onOpenCoachDetail?: (coach?: CoachDetail) => void;
}

// 1. 금융권 인트로 섹션 (IntroSection for Finance)
const FinanceIntroSection: React.FC<{ onApplyClick: () => void }> = () => {
  return (
    <section className="relative pt-14 pb-20 overflow-hidden bg-white border-b border-slate-200/60" id="major-coaching-intro">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Title & Heading */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/90 text-amber-700 text-xs font-semibold mb-4 border border-amber-200/60 backdrop-blur-xs">
            <span>BARO COACHING PREMIUM</span>
            <ChevronRight className="w-3 h-3" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            금융권 맞춤 코칭
          </h1>
          <p className="text-lg font-bold text-slate-800 mb-3">
            금융권 취업시장은 일반 기업들과는 다르게 준비해야 합니다.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-4xl font-medium">
            대부분의 금융권은 자소서 질문을 공개하므로 그에 맞춰서 작성 해야 합니다. 면접은 직무 지식을 기본으로 갖추고 있어야 하며, “우리 회사에 와서 문제없이 업무를 진행할 수 있다.”라는 인식을 심어줄 수 있는 인재를 선호하고 있습니다. 면접관분들이 질문하는 질문 의도를 파악하고 나의 경험 사항을 지원한 직무 역량에 연관지어 내가 회사에 필요한 인재임을 보여주는 것이 중요한 포인트입니다. 여러 금융권에 대한 이력서 자기소개서 작성 방법부터 면접요령까지 체계적으로 준비되어 있어야 합니다.
          </p>
        </div>

        {/* Highlighted Question Box */}
        <div className="rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Col */}
            <div className="md:col-span-5 flex items-start gap-4 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-6">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  Core Question
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                  금융권에서 원하는 사람은 어떤 사람일까요?
                </h3>
              </div>
            </div>

            {/* Right Col Bullet List */}
            <div className="md:col-span-7 space-y-3 pl-0 md:pl-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  금융권이 원하는 사람은 어떤 사람인가요?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  금융권의 인사담당자와 실무자, 임원들이 원하는 신입사원은 어떤 사람인가요?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  지원하는 직무의 금융권 실무자가 원하는 사람은 누구일까요?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. 금융권 이상형 메이커 (IdealMatchSection for Finance)
const FinanceIdealMatchSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white" id="ideal-match-maker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>IDEAL CANDIDATE MAKER</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              <span className="text-amber-600 font-black">[바로코칭]</span>은 금융권이<br />
              희망하는 지원자의 <span className="underline decoration-amber-500 decoration-4 underline-offset-4">이상형 메이커!</span>
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-600 font-semibold text-slate-900">
                여러분은 어떠한 이성을 원하시나요?
              </div>

              <p>
                누구나 자신이 원하는 이성을 만나고 싶어 하며 우리는 이것을 <strong className="text-amber-600">이상형</strong>이라고 합니다.
                당연히 가장 좋은 상대는 자신의 이상형에 꼭 들어 맞는 사람을 만나는 것이겠죠?!
                100% 일치하지 않는다면 그 다음으로는 이상형에 가까운 사람을 선택하게 됩니다.
              </p>

              <p>
                이상형을 바라는 것은 기업도 마찬가지입니다.
                저희가 생각하는 면접은 <strong className="text-slate-900">금융권이 원하는 이상형을 만나는 것!</strong><br />
                즉 금융권이 원하는 자질과 인성을 갖춘 사람을 만나기 위한 <em>소개팅</em>이라고 생각합니다.
              </p>

              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 font-medium leading-relaxed">
                <span className="font-bold text-amber-700">[바로코칭]</span> 전문가들이 짧은 시간 동안 주어지는 첫 만남에서 여러분을 금융권이 원하는 이상형이나 그에 가까운 지원자로 만들겠습니다.
              </div>
            </div>
          </div>

          {/* Right Image / Visual Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-50">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA5MTRfOTEg/MDAxNzg5MzcwMDEzMTEx.n8m-DLgSUgySByf6LjS-VkyMwAGgIKjQtJ1-BIbVFpIg.HXDZuY6XusoQ658R0lhcq6-KohcfYxXa-h7iJmckuDQg.PNG/20260914_160523.png?type=w966"
                alt="바로코칭 금융권 이상형 메이커"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. 타겟 오디언스 그리드 (TargetAudienceGrid with Fixed High-Contrast Background for Card 1)
const FinanceTargetAudienceGrid: React.FC = () => {
  const cardGradients = [
    'from-slate-900 to-amber-950', // Deep dark solid background for Card 1 (clearly visible white text)
    'from-amber-700 to-amber-900',
    'from-slate-800 to-slate-900',
    'from-amber-600 to-orange-700',
    'from-orange-600 to-amber-800',
    'from-slate-850 to-slate-950',
    'from-amber-800 to-yellow-900',
    'from-amber-700 to-orange-800',
    'from-slate-700 to-slate-850',
    'from-amber-600 to-amber-900',
    'from-yellow-700 to-amber-900',
    'from-slate-800 to-zinc-900',
    'from-amber-700 to-orange-900',
    'from-orange-700 to-amber-800'
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200" id="target-audience-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            코칭이나 컨설팅을 한 번도 받은 적이 없다고요?<br />
            <span className="text-amber-600">너무 걱정하지 마세요!</span>
          </h2>
          <p className="mt-3 text-slate-600 font-medium text-base">
            이런 분들이 코칭을 신청하고 결과를 만드셨어요~
          </p>
        </div>

        {/* 14 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {TARGET_AUDIENCE_LIST.map((item, index) => {
            const gradient = cardGradients[index % cardGradients.length];
            const isFirst = index === 0;

            return (
              <div
                key={item}
                className={`relative rounded-xl p-4 sm:p-5 flex flex-col justify-between min-h-[130px] sm:min-h-[140px] text-white bg-gradient-to-br ${gradient} ${
                  isFirst ? 'bg-slate-950 border border-amber-500/40 shadow-md' : 'shadow-sm'
                } hover:shadow-md hover:-translate-y-1 transition-all duration-200`}
                style={isFirst ? { backgroundColor: '#0f172a', color: '#ffffff' } : undefined}
              >
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-amber-300" />
                </div>
                <p className="text-xs sm:text-sm font-bold leading-snug text-white mt-2">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// 4. 금융권 코칭 포인트 섹션 (CoachingPointSection for Finance)
const FinanceCoachingPointSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white" id="coaching-point-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-amber-400 uppercase">
            Coaching <span className="text-yellow-400">POINT</span>
          </span>
        </div>

        <div className="space-y-12">
          {/* Point 1: 금융권 채용트렌드와 특징 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-800 pb-12">
            <div className="md:col-span-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                금융권 채용트렌드와<br />특징은 어떤가요?
              </h3>
            </div>

            <div className="md:col-span-8 bg-slate-850/70 rounded-2xl border border-slate-800 p-6 sm:p-7 space-y-3.5">
              <div className="flex items-start gap-3 text-amber-400 font-bold text-base sm:text-lg pb-2 border-b border-slate-800">
                <Check className="w-5 h-5 mt-0.5 shrink-0" />
                <span>직무 중심 전문성 &amp; 금융권 맞춤 채용 시대</span>
              </div>
              <ul className="space-y-2.5 text-slate-300 text-sm sm:text-base pt-1 pl-1">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>금융권 은행, 증권, 보험, 카드사 등 맞춤형 공개 및 수시 채용</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>금융 디지털 역량, 경제 시사, 직무 이해도 심층 평가</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>AI 역량검사 및 구조화 심층 면접 도입 확대</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>실전 금융 상품 세일즈/PT 면접 및 금융 윤리성 평가 강화</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Point 2: 1:1 코칭 이런 분들이 합니다 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                1:1 코칭 이런 분들이<br />합니다.
              </h3>
            </div>

            <div className="md:col-span-8 bg-slate-850/70 rounded-2xl border border-slate-800 p-6 sm:p-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-300">
                {COACHING_POINTS.candidates.map((cand) => {
                  const text = cand === "대기업 준비가 처음이신 분" ? "금융권 준비가 처음이신 분" : cand;
                  return (
                    <div key={cand} className="flex items-start gap-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span className="leading-snug">{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. 금융권 커리큘럼 섹션 (CurriculumSection for Finance)
const FinanceCurriculumSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white" id="coaching-curriculum">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Coaching 커리큘럼 및 방식
          </h2>
          <p className="mt-2 text-slate-500 text-sm">
            *세부 커리큘럼은 코칭 시 자세히 안내해 드립니다.
          </p>
        </div>

        {/* 4-Phase Circular / Step Diagram */}
        <div className="mb-16">
          <div className="relative max-w-2xl mx-auto py-8">
            <div className="hidden sm:block absolute inset-0 m-auto w-72 h-72 rounded-full border-2 border-dashed border-slate-200 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 relative z-10">
              {/* Phase 1: 분석 */}
              <div className="flex flex-col items-center text-center p-6 bg-amber-50/70 rounded-2xl border border-amber-100 shadow-2xs hover:shadow-sm transition">
                <div className="w-16 h-16 rounded-full bg-amber-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-amber-500/20 mb-3">
                  분석
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  사전 정밀 분석
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  본격 코칭이전에 개인의 고민과 문제점 파악
                </p>
              </div>

              {/* Phase 2: 코칭 */}
              <div className="flex flex-col items-center text-center p-6 bg-amber-50/70 rounded-2xl border border-amber-100 shadow-2xs hover:shadow-sm transition">
                <div className="w-16 h-16 rounded-full bg-amber-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-amber-500/20 mb-3">
                  코칭
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  1:1 맞춤형 수업
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  기업과 개인에 맞는 맞춤형 코칭수업
                </p>
              </div>

              {/* Phase 3: 피드백 */}
              <div className="flex flex-col items-center text-center p-6 bg-amber-50/70 rounded-2xl border border-amber-100 shadow-2xs hover:shadow-sm transition">
                <div className="w-16 h-16 rounded-full bg-amber-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-amber-500/20 mb-3">
                  피드백
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  밀착 정밀 피드백
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  부족한 부분 채우고, 좋은 부분 더 부각
                </p>
              </div>

              {/* Phase 4: 자신감 */}
              <div className="flex flex-col items-center text-center p-6 bg-amber-50/70 rounded-2xl border border-amber-100 shadow-2xs hover:shadow-sm transition">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-amber-500/20 mb-3">
                  자신감
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  실전 합격 자신감
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  확신과 반복을 통한 자신감 극대화
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Detailed Cards: 금융권 자소서코칭 & 금융권 면접코칭 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: 금융권 자소서코칭 */}
          <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-7 sm:p-8 hover:border-amber-300 transition-all shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                <FileEdit className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                  Step 01
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  금융권 자소서코칭
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-100 text-amber-800 font-semibold text-sm sm:text-base flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
              <span>개별 맞춤 자소서 컨설팅</span>
            </div>

            <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>개인 경험에 따른 자소서 작성 코칭 (경험을 항목에 맞춰 배치)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>마스터 자소서 코칭 (출제 빈도 최상위 항목을 추출하여 미리 작성)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>입사 희망 기업 자소서 항목 맞춤 컨설팅</span>
              </li>
            </ul>
          </div>

          {/* Card 2: 금융권 면접코칭 */}
          <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-7 sm:p-8 hover:border-amber-300 transition-all shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                  Step 02
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  금융권 면접코칭
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-100 text-amber-800 font-semibold text-sm sm:text-base flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
              <span>면접유형에 따른 코칭(PT/임원/인성/토론/역량 등)</span>
            </div>

            <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>직무역량 1분 스피치 작성 (스토리텔링형 1분 스피치 작성)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>면접태도 &amp; 자세 &amp; 임기응변 코칭 &amp; 자신감 코칭</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>경험의 구조화 답변 및 논리적 답변 요령 코칭</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span>모의면접 진행 후 피드백</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// 6. 금융권 응원 배너 (EncouragementBanner for Finance)
const FinanceEncouragementBanner: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-gradient-to-r from-amber-50 via-orange-50/40 to-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Photo & Typography Background */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA5MTRfMjA0/MDAxNzg5MzcwMDEzMTA1.h5kIqJoN7E12Wn1KXQcEYKooITsyJGfB6HcYSeFVaKkg.KSvW65nxbLzVmidxc2uQ2QICxXNlaOcW1UJirSQdjFcg.PNG/20260914_160550.png?type=w966"
                alt="바로코칭 금융권 채용 응원"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            {/* Watermark in background */}
            <span className="absolute -bottom-6 -left-4 text-6xl sm:text-7xl font-black text-slate-200/50 -z-10 pointer-events-none select-none tracking-tighter">
              BARO
            </span>
          </div>

          {/* Right Text Box */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
              <Target className="w-3.5 h-3.5 text-amber-600" />
              <span>FINANCE ENTERPRISE CHALLENGE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              금융권 채용은 많은 사람들의 꿈이지만,<br />
              <span className="text-amber-600">쉽게 이루어지지 않습니다.</span>
            </h3>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              하지만, 트렌드와 특징을 잘 파악하고있는 <strong className="text-slate-900 font-bold">[바로코칭]</strong>에서 체계적으로 준비한다면 가능성은 충분합니다.
            </p>

            <p className="text-slate-600 text-sm sm:text-base font-medium">
              금융권 채용에 도전하는 모든 분들을 진심으로 응원합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. 금융권 프로세스 섹션 (ProcessSection for Finance)
const FinanceProcessSection: React.FC<{
  onOpenFastConsult: () => void;
  onOpenCustomConsult: () => void;
}> = ({ onOpenFastConsult, onOpenCustomConsult }) => {
  const [selectedRole, setSelectedRole] = useState('신입');
  const [selectedField, setSelectedField] = useState('금융권');

  const coachingRoles = ['인턴', '신입', '경력'];
  const coachingFields = ['금융권', '공기업', '은행/증권/보험', '외국계기업', '중견/강소기업', '진로/직무'];
  const interviewTypes = [
    'PT면접', '인성면접', '일반면접', '토론면접', '경험면접',
    '상황면접', '실무진면접', '임원면접', '창의성면접', '세일즈면접',
    '금융시사면접', '롤플레잉면접', '집단면접', '영어면접', 'AI역량검사'
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="process-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">
            STEP BY STEP PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            코칭은 어떻게 진행되나요?
          </h2>
        </div>

        {/* Steps Timeline / List */}
        <div className="space-y-12">
          {/* Step 1: 상담 신청 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-10">
            <div className="md:col-span-3">
              <span className="text-amber-600 font-black text-sm block mb-1">STEP 01</span>
              <h3 className="text-xl font-bold text-slate-900">상담 신청</h3>
            </div>
            <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                코칭을 희망하시는 분들은 <strong className="text-amber-700">[전화상담]</strong>,{' '}
                <strong className="text-amber-600">[빠른상담]</strong>,{' '}
                <strong className="text-amber-800">[1:1 개인별 맞춤 상담신청]</strong> 중 선택하고 신청합니다.
              </p>
            </div>
          </div>

          {/* Step 2: 코칭 전 기초상담 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-10">
            <div className="md:col-span-3">
              <span className="text-amber-600 font-black text-sm block mb-1">STEP 02</span>
              <h3 className="text-xl font-bold text-slate-900">코칭 전 기초상담</h3>
            </div>
            <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                본격적인 코칭에 앞서 각 코칭 파트별 담당자 분과 사전 상담을 통해 개인의 고민과 문제점을 파악합니다.
              </p>
            </div>
          </div>

          {/* Step 3: 코칭 유형 선택 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-12">
            <div className="md:col-span-3">
              <span className="text-amber-600 font-black text-sm block mb-1">STEP 03</span>
              <h3 className="text-xl font-bold text-slate-900">코칭 유형 선택</h3>
            </div>
            <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-6">
              <p className="text-slate-700 text-sm sm:text-base font-medium">
                기업과 개인에 맞는 맞춤형 코칭 수업을 위해{' '}
                <span className="text-amber-700 font-bold">[코칭 분야 &gt;&gt; 면접유형 &gt;&gt; 진행 방식]</span>을 협의합니다.
              </p>

              {/* 1. 코칭 멘토링 분야 */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2.5">
                  <Check className="w-4 h-4 text-amber-600" />
                  <span>코칭, 멘토링 분야</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coachingRoles.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setSelectedRole(role)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                        selectedRole === role
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. 코칭 분야 선택 */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2.5">
                  <Check className="w-4 h-4 text-amber-600" />
                  <span>코칭 분야 선택</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coachingFields.map((field) => (
                    <button
                      key={field}
                      type="button"
                      onClick={() => setSelectedField(field)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                        selectedField === field
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {field}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. 면접 유형 파악 */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2.5">
                  <Check className="w-4 h-4 text-amber-600" />
                  <span>면접 유형 파악</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {interviewTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium hover:border-amber-400 transition"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  * 기타 희망하는 면접 유형도 협의해서 진행합니다.
                </p>
              </div>

              {/* 4. 진행 방식 선택 */}
              <div className="pt-2 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3">
                  <Check className="w-4 h-4 text-amber-600" />
                  <span>진행 방식 선택</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-1.5">
                      <Video className="w-4 h-4" />
                      <span>비대면 방식</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      (ZOOM, GOOGLE MEET)을 활용해서 공유된 비대면 인터넷 주소에 접속 후 진행됩니다.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>대면 방식</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      신청자의 거주지 등을 확인 후 장소는 별도 안내드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: 수강신청 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-10">
            <div className="md:col-span-3">
              <span className="text-amber-600 font-black text-sm block mb-1">STEP 04</span>
              <h3 className="text-xl font-bold text-slate-900">수강신청</h3>
            </div>
            <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                수강 희망 날짜와 시간을 조율하고, 개인별 맞춤 수업을 위한 수업시수를 조율하여 수강신청을 진행합니다.
              </p>
            </div>
          </div>

          {/* Step 5: 코칭수업 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6">
            <div className="md:col-span-3">
              <span className="text-amber-600 font-black text-sm block mb-1">STEP 05</span>
              <h3 className="text-xl font-bold text-slate-900">코칭수업</h3>
            </div>
            <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-6">
              {/* 3 Step Icons */}
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                  <FileText className="w-6 h-6 text-amber-600 mb-2" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">서류전형</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                  <PenTool className="w-6 h-6 text-amber-600 mb-2" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">필기전형</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                  <Users className="w-6 h-6 text-amber-600 mb-2" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">면접전형</span>
                </div>
              </div>

              <p className="text-slate-800 font-semibold text-sm sm:text-base">
                코칭 전문가와 맞춤 코칭을 진행합니다. 개인별 디테일한 코칭으로 다양한 피드백과 자신감을 가질 수 있습니다.
              </p>

              <ul className="space-y-2.5 text-slate-700 text-sm sm:text-base border-t border-slate-200 pt-4">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>개인의 상황 면담 &gt;&gt; 개인 상황에 맞춘 컨설팅 진행 &gt;&gt; 부족한 부분 질의응답</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>취업(자소서 &amp; 면접 준비도) 체크</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>상호 간 코칭 주제 선정 및 목표 수립</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>피드백 및 점검을 통한 실력 향상 코칭 진행</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action CTA Buttons */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <button
            type="button"
            onClick={onOpenFastConsult}
            className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-base sm:text-lg py-5 px-6 rounded-2xl shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-all cursor-pointer"
            id="process-fast-consult-btn"
          >
            <PhoneCall className="w-6 h-6" />
            <span>빠른상담 신청하기</span>
          </button>

          <button
            type="button"
            onClick={onOpenCustomConsult}
            className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base sm:text-lg py-5 px-6 rounded-2xl shadow-lg shadow-slate-900/20 hover:scale-[1.01] transition-all cursor-pointer"
            id="process-custom-consult-btn"
          >
            <FileCheck className="w-6 h-6 text-amber-400" />
            <span>개인별 맞춤 상담 신청하기</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// 8. 왜 바로코칭인가? (WhyBaroSection for Finance)
const FinanceWhyBaroSection: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: '저희 [바로코칭]은 공장처럼 찍어 내지 않습니다.',
      desc: '판에 박힌 획일화된 모범답안이나 복사 붙여넣기식 자소서는 면접관에게 바로 간파당합니다. 오직 지원자 본인의 고유한 역량과 경험만을 추출합니다.',
      icon: ShieldCheck
    },
    {
      num: '02',
      title: '기업마다 원하는 면접 답변 트렌드가 있습니다. 뜬구름 잡는 코칭은 하지 않습니다.',
      desc: '저희는 현직자들이 매년 정확한 트렌드를 알고 가장 최신의 정보들을 기반으로 코칭이 진행됩니다. 인사평가표 기준에 입각한 실질적이고 전략적인 답변을 완성합니다.',
      icon: Compass
    },
    {
      num: '03',
      title: "편해지기 위해서 비슷비슷한 사례나 상황을 고수하지 않으며, 단 한 사람! 바로 '당신 만의' 합격 솔루션을 제공합니다.",
      desc: '각 기업의 인재상과 직무 핵심역량에 지원자의 인생 스토리를 완벽하게 싱크로율 100%로 결합하여 독보적인 경쟁력을 부여합니다.',
      icon: Award
    },
    {
      num: '04',
      title: '비용도 비용이지만 가장 중요한 것은 여러분의 시간이 가장 소중합니다.',
      desc: '단번에 합격될 확률을 극대화하기 위해 저희 모두는 끊임없이 공부합니다. 불필요한 시행착오 없이 가장 빠른 지름길로 합격의 문을 열어드립니다.',
      icon: Clock
    }
  ];

  return (
    <section className="py-16 sm:py-22 bg-slate-50 border-t border-slate-200" id="why-barocoaching">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
            THE BARO DIFFERENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            WHY? 컨설팅은 <span className="text-amber-600">바로코칭인가?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// 9. 코치진 섹션 (CoachesSection for Finance)
const FinanceCoachesSection: React.FC<{ onOpenCoachDetail?: (coach: CoachDetail) => void }> = ({
  onOpenCoachDetail
}) => {
  const coaches = COACHES_LIST;
  const [desktopPage, setDesktopPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const itemsPerPage = 4;
  const desktopTotalPages = Math.ceil(coaches.length / itemsPerPage);

  const coachSlides: CoachDetail[][] = [];
  for (let i = 0; i < coaches.length; i += itemsPerPage) {
    coachSlides.push(coaches.slice(i, i + itemsPerPage));
  }

  return (
    <section className="py-16 sm:py-24 bg-white" id="coaches-expertise-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>ELITE SPECIALIST COACHES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            합격을 완성하는 <span className="text-amber-600">분야별 전문 코치진</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            주요 금융권(시중은행/증권/보험/자산운용) 및 공기업 출신 현직 전문가와 채용 평가위원 출신 코치진이 직접 1:1 밀착 코칭을 진행합니다.
          </p>
        </div>

        {/* Mobile View */}
        <div className="block sm:hidden">
          {/* Mobile Header & Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
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
                <strong className="text-amber-600 font-extrabold">{mobileIndex + 1}</strong> / {coaches.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setMobileIndex((prev) => (prev - 1 + coaches.length) % coaches.length)}
                  className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 shadow-2xs active:scale-95 cursor-pointer"
                  aria-label="이전 코치 보기"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setMobileIndex((prev) => (prev + 1) % coaches.length)}
                  className="w-8 h-8 rounded-lg bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
                  aria-label="다음 코치 보기"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Swipe Guide Hint */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium px-1 mb-3">
            <span className="flex items-center gap-1 text-amber-600 font-semibold">
              <Sparkles className="w-3 h-3" />
              좌우로 넘겨 코치진 프로필 확인
            </span>
            <span>터치 및 스와이프 가능</span>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
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
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              type="button"
              onClick={() => setMobileIndex((prev) => (prev - 1 + coaches.length) % coaches.length)}
              className="text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition"
            >
              ◀ 이전 코치
            </button>
            <div className="text-xs font-bold text-slate-700">
              <span className="text-amber-600">{mobileIndex + 1}</span> 번째 코치 (총 {coaches.length}명)
            </div>
            <button
              type="button"
              onClick={() => setMobileIndex((prev) => (prev + 1) % coaches.length)}
              className="text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 px-3 py-1.5 rounded-lg transition shadow-xs"
            >
              다음 코치 ▶
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                바로코칭 전담 코치진
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <span className="text-amber-600">{desktopPage + 1}</span> / {desktopTotalPages}
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setDesktopPage((prev) => (prev - 1 + desktopTotalPages) % desktopTotalPages)}
                  className="w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition cursor-pointer border border-slate-200/90 shadow-2xs"
                  aria-label="이전 코치진"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setDesktopPage((prev) => (prev + 1) % desktopTotalPages)}
                  className="w-9 h-9 rounded-xl bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                  aria-label="다음 코치진"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coachSlides[desktopPage]?.map((coach) => (
              <ModernCoachCard
                key={coach.id}
                coach={coach}
                onOpenDetail={onOpenCoachDetail}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Export Component for Finance Page
export const FinancePageContent: React.FC<FinancePageContentProps> = ({
  onOpenConsultation,
  onOpenCoachDetail
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Intro Section */}
      <FinanceIntroSection onApplyClick={() => onOpenConsultation('fast')} />

      {/* 2. Passer Ticker */}
      <PasserTicker passers={FINANCE_PASSERS_LIST} />

      {/* 3. Company Logos Marquee (Finance Organizations) */}
      <FinanceCompanyLogosMarquee />

      {/* 4. Ideal Match Maker */}
      <FinanceIdealMatchSection />

      {/* 5. Target Audience Grid (Card 1 High Contrast Background) */}
      <FinanceTargetAudienceGrid />

      {/* 6. Coaching Point Section */}
      <FinanceCoachingPointSection />

      {/* 7. Curriculum Section */}
      <FinanceCurriculumSection />

      {/* 8. Encouragement Banner */}
      <FinanceEncouragementBanner />

      {/* 9. Process Section */}
      <FinanceProcessSection
        onOpenFastConsult={() => onOpenConsultation('fast')}
        onOpenCustomConsult={() => onOpenConsultation('custom')}
      />

      {/* 10. Why Baro Section */}
      <FinanceWhyBaroSection />

      {/* 11. Coaches Section */}
      <FinanceCoachesSection onOpenCoachDetail={onOpenCoachDetail} />

      {/* 12. Results Section */}
      <ResultsSection />

      {/* 13. Portfolio Section */}
      <PortfolioSection />

      {/* 14. Reviews Section */}
      <ReviewsSection />
    </div>
  );
};
