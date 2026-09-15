import React, { useState, useMemo } from 'react';
import {
  FileCheck,
  Building2,
  Landmark,
  Dna,
  MessageSquare,
  CheckCircle2,
  PhoneCall,
  Mail,
  Clock,
  Award,
  ArrowRight,
  Search,
  Users,
  ShieldCheck,
  Sparkles,
  Filter
} from 'lucide-react';
import { CoachDetail, COACHES_LIST, MALE_COACH_IMAGE, FEMALE_COACH_IMAGE } from '../data/coachesData';
import { ModernCoachCard } from './ModernCoachCard';
import { ConsultationForm } from './ConsultationForm';

// Import all sections from major page
import { IntroSection } from './IntroSection';
import { PasserTicker } from './PasserTicker';
import { CompanyLogosMarquee } from './CompanyLogosMarquee';
import { IdealMatchSection } from './IdealMatchSection';
import { TargetAudienceGrid } from './TargetAudienceGrid';
import { CoachingPointSection } from './CoachingPointSection';
import { CurriculumSection } from './CurriculumSection';
import { EncouragementBanner } from './EncouragementBanner';
import { ProcessSection } from './ProcessSection';
import { WhyBaroSection } from './WhyBaroSection';
import { CoachesSection } from './CoachesSection';
import { ResultsSection } from './ResultsSection';
import { PortfolioSection } from './PortfolioSection';
import { ReviewsSection } from './ReviewsSection';

interface SubPageProps {
  onOpenConsultation: (type: 'fast' | 'custom') => void;
  onNavigate: (page: string) => void;
  onOpenCoachDetail?: (coach?: CoachDetail) => void;
}

// Import ResumeHeroDesign
import { ResumeHeroDesign } from './ResumeHeroDesign';
// Import dedicated PublicPageContent for public.html
import { PublicPageContent } from './PublicPageContent';
// Import dedicated FinancePageContent for finance.html
import { FinancePageContent } from './FinancePageContent';
// Import dedicated BioPageContent for bio.html
import { BioPageContent } from './BioPageContent';

// Full 14-section layout identical to major.html
const MajorPageContent: React.FC<{
  onOpenConsultation: (type: 'fast' | 'custom') => void;
  onOpenCoachDetail?: (coach?: CoachDetail) => void;
}> = ({ onOpenConsultation, onOpenCoachDetail }) => {
  return (
    <>
      {/* Page 1: Intro Section */}
      <IntroSection onApplyClick={() => onOpenConsultation('custom')} />

      {/* Page 1: Passer Ticker Banner */}
      <PasserTicker />

      {/* Page 1: Corporate Logos */}
      <CompanyLogosMarquee />

      {/* Page 1: Ideal Match Section */}
      <IdealMatchSection />

      {/* Page 2: Target Audience Grid (14 Cards) */}
      <TargetAudienceGrid />

      {/* Page 2: Coaching Point Section */}
      <CoachingPointSection />

      {/* Page 2-3: Curriculum Section (Circular 4 Steps + 2 Cards) */}
      <CurriculumSection />

      {/* Page 3: Encouragement Banner */}
      <EncouragementBanner />

      {/* Page 3-4: Process Section (5 Steps + 2 Action Buttons) */}
      <ProcessSection
        onOpenFastConsult={() => onOpenConsultation('fast')}
        onOpenCustomConsult={() => onOpenConsultation('custom')}
      />

      {/* Page 4: Why Baro Coaching Section (01 - 04) */}
      <WhyBaroSection />

      {/* Page 5: Coaches Expertise Section */}
      <CoachesSection onOpenCoachDetail={onOpenCoachDetail} />

      {/* Page 5: Coaching Results Section */}
      <ResultsSection />

      {/* Page 5: Lecture Portfolio Section */}
      <PortfolioSection />

      {/* Page 6: Student Reviews Section */}
      <ReviewsSection />
    </>
  );
};

// 1. 자소서 첨삭 (resume.html) - New Custom Design followed by remaining sections
export const ResumePage: React.FC<SubPageProps> = ({ onOpenConsultation, onOpenCoachDetail }) => {
  return (
    <div className="theme-resume">
      {/* Newly Designed Top Sections based on user image & text */}
      <ResumeHeroDesign onOpenConsultation={onOpenConsultation} />

      {/* Remaining Sections placed beneath the new design */}
      <WhyBaroSection />
      <CoachesSection onOpenCoachDetail={onOpenCoachDetail} />
      <ResultsSection />
      <PortfolioSection />
      <ReviewsSection />
    </div>
  );
};

// 2. 공기업 맞춤 코칭 (public.html) - Emerald Point Color
export const PublicPage: React.FC<SubPageProps> = ({ onOpenConsultation, onOpenCoachDetail }) => {
  return (
    <div className="theme-public">
      <PublicPageContent
        onOpenConsultation={onOpenConsultation}
        onOpenCoachDetail={onOpenCoachDetail}
      />
    </div>
  );
};

// 3. 금융권 맞춤 코칭 (finance.html) - Amber Point Color
export const FinancePage: React.FC<SubPageProps> = ({ onOpenConsultation, onOpenCoachDetail }) => {
  return (
    <div className="theme-finance">
      <FinancePageContent
        onOpenConsultation={onOpenConsultation}
        onOpenCoachDetail={onOpenCoachDetail}
      />
    </div>
  );
};

// 4. 의약/제약/바이오 맞춤 코칭 (bio.html) - Teal Point Color
export const BioPage: React.FC<SubPageProps> = ({ onOpenConsultation, onOpenCoachDetail }) => {
  return (
    <div className="theme-bio">
      <BioPageContent
        onOpenConsultation={onOpenConsultation}
        onOpenCoachDetail={onOpenCoachDetail}
      />
    </div>
  );
};

// 5. 상담신청 페이지 (contact.html)
export const ContactPage: React.FC<SubPageProps> = () => {
  return (
    <div className="py-12 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>FAST CONSULTATION APPLICATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
            바로코칭 빠른 상담 신청
          </h1>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
            취업 준비의 첫걸음, 바로코칭 전문 컨설턴트와의 빠른 상담으로 나의 진짜 문제점을 발견하고 가장 확실한 합격 로드맵을 설계하세요.
          </p>
        </div>

        {/* Main Form & Side Info Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Direct Consultation Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ConsultationForm isModal={false} />
          </div>

          {/* Side Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Consultation Info */}
            <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">빠른 상담 안내</h3>
                  <span className="text-xs text-amber-700 font-semibold">30분 이내 회신</span>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                서류 마감이나 면접 일정이 임박하신 분들을 위해 전담 코치가 신청 즉시 신속하게 연락드립니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">✔ 당일 신속 상담 가능</li>
                <li className="flex items-center gap-2">✔ 수강 비용 및 개인별 커리큘럼 즉시 안내</li>
                <li className="flex items-center gap-2">✔ 면접 임박자 긴급 코칭 일정 조율</li>
                <li className="flex items-center gap-2">✔ 서류/면접 합격 핵심 전략 사전 진단</li>
              </ul>
            </div>

            {/* Consultation Process Steps */}
            <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">상담 진행 프로세스</h3>
                  <span className="text-xs text-blue-700 font-semibold">간편하고 체계적인 3단계</span>
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px] shrink-0">1</span>
                  <div>
                    <strong className="text-slate-900 block font-bold">상담 폼 접수</strong>
                    <span className="text-slate-500">이름, 연락처, 지원기업 및 직무 정보 입력</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px] shrink-0">2</span>
                  <div>
                    <strong className="text-slate-900 block font-bold">전문 코치 30분 내 유선 회신</strong>
                    <span className="text-slate-500">지원 현황 분석 및 맞춤 커리큘럼 제안</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px] shrink-0">3</span>
                  <div>
                    <strong className="text-slate-900 block font-bold">1:1 코칭 시작</strong>
                    <span className="text-slate-500">비대면(ZOOM) 또는 대면 코칭 일정 확정</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

// 6. 코치진 소개 (coach.html)
export const CoachPage: React.FC<SubPageProps> = ({ onOpenConsultation, onOpenCoachDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'major' | 'public' | 'finance' | 'tech'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const coachPoints = [
    '코칭업계 Best of Best 코치진의 명확한 컨설팅',
    '다수의 공공기관 및 기업 채용절차 설계와 운영뿐만 아니라 채용도구 개발',
    '기업들의 채용 운영을 총괄한 경험과 현재도 총괄하는 코치진',
    '국내 대기업 및 공공기관, 금융권, 외국계 기업 대상으로 10년 동안 100개 이상의 채용 프로젝트 수행',
    '대기업, 공기업, 금융권 등 면접위원 교육을 진행하시는 코치진'
  ];

  // Use central 28 coaches list
  const coaches = COACHES_LIST;

  const categories = [
    { id: 'all', label: '전체 코치진', count: coaches.length },
    { id: 'major', label: '대기업 · 인사총괄', match: ['대기업', '인사총괄', 'CJ', 'SK', '삼성', 'LG', '현대', '포스코', '롯데'] },
    { id: 'public', label: '공기업 · NCS', match: ['공기업', '공공기관', 'NCS', '한국전력', '인천국제공항공사', 'LH', '코레일'] },
    { id: 'finance', label: '금융권 · 은행', match: ['금융', '은행', '증권', 'KB', '신한', '하나', '우리', 'NH', '농협'] },
    { id: 'tech', label: 'IT · 바이오 · R&D', match: ['IT', '바이오', '제약', '엔지니어', '개발', '연구', '반도체', '배터리'] },
  ];

  // Filter coaches based on category & search
  const filteredCoaches = useMemo(() => {
    return coaches.filter((c) => {
      // Category filter
      let matchesCat = true;
      if (selectedCategory !== 'all') {
        const catConfig = categories.find((cat) => cat.id === selectedCategory);
        if (catConfig && catConfig.match) {
          const haystack = `${c.name} ${c.role} ${c.currentRole || ''} ${c.tagline || ''} ${c.career.join(' ')} ${c.passedCompanies?.major?.join(' ') || ''} ${c.passedCompanies?.public?.join(' ') || ''} ${c.passedCompanies?.finance?.join(' ') || ''}`.toLowerCase();
          matchesCat = catConfig.match.some((keyword) => haystack.includes(keyword.toLowerCase()));
        }
      }

      // Search filter
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const fullText = `${c.name} ${c.role} ${c.currentRole || ''} ${c.tagline || ''} ${c.career.join(' ')} ${c.passedCompanies?.major?.join(' ') || ''} ${c.passedCompanies?.public?.join(' ') || ''} ${c.passedCompanies?.finance?.join(' ') || ''}`.toLowerCase();
        matchesSearch = fullText.includes(q);
      }

      return matchesCat && matchesSearch;
    });
  }, [coaches, selectedCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title Header */}
        <div className="text-left mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>BARO COACHING FACULTY ({coaches.length}인 전담 코치진)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            전문성이 없는 코칭은 <br className="sm:hidden" />
            <span className="text-red-600">시간낭비 돈 낭비!</span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
            대기업 / 공기업 / 금융권 / IT / 제약바이오의 현직·전직 면접관 출신 {coaches.length}인의 &ldquo;합격을 부르는 코치진&rdquo;입니다.
          </p>
        </div>

        {/* 5 Core Strengths Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white mb-12 shadow-xl border border-slate-800">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                바로코칭 전문 코치진의 5대 핵심 강점
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                실제 채용 결정권자 및 면접위원으로 활동한 압도적 커리어
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {coachPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id as any)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Live Search Box */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="코치명, 기업, 직무 검색..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results Count Info */}
          <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
            <span>
              검색 결과: <strong className="text-slate-900 font-bold">{filteredCoaches.length}</strong>명
            </span>
            <span className="text-slate-400">카드를 클릭하여 상세 프로필과 합격 사례를 확인하세요</span>
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="mb-14">
          {filteredCoaches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCoaches.map((c) => (
                <ModernCoachCard
                  key={c.id}
                  coach={c}
                  variant="grid"
                  onOpenDetail={onOpenCoachDetail}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <Users className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-700 font-bold text-base">검색된 코치진이 없습니다.</p>
              <p className="text-slate-500 text-xs mt-1">다른 검색어나 필터를 선택해 보세요.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-bold rounded-xl transition cursor-pointer"
              >
                전체 코치진 보기
              </button>
            </div>
          )}
        </div>

        {/* CTA Bottom Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-500/30">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              내 목표 기업에 딱 맞는 전담 코치 배정받기
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm">
              상담 신청 시 지원 기업과 직무를 남겨주시면 최적의 전직 면접관 코치를 1:1 매칭해 드립니다.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation('custom')}
            className="bg-white hover:bg-slate-50 text-blue-700 font-black px-7 py-3.5 rounded-xl transition whitespace-nowrap cursor-pointer shadow-md hover:shadow-lg active:scale-95"
          >
            1:1 코치 매칭 상담신청
          </button>
        </div>
      </div>
    </div>
  );
};
