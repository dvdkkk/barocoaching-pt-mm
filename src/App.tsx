import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FloatingWidget } from './components/FloatingWidget';
import { IntroSection } from './components/IntroSection';
import { PasserTicker } from './components/PasserTicker';
import { CompanyLogosMarquee } from './components/CompanyLogosMarquee';
import { IdealMatchSection } from './components/IdealMatchSection';
import { TargetAudienceGrid } from './components/TargetAudienceGrid';
import { CoachingPointSection } from './components/CoachingPointSection';
import { CurriculumSection } from './components/CurriculumSection';
import { EncouragementBanner } from './components/EncouragementBanner';
import { ProcessSection } from './components/ProcessSection';
import { WhyBaroSection } from './components/WhyBaroSection';
import { CoachesSection } from './components/CoachesSection';
import { ResultsSection } from './components/ResultsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CoachDetailModal } from './components/CoachDetailModal';
import { CoachDetail, COACHES_LIST } from './data/coachesData';
import {
  ResumePage,
  PublicPage,
  FinancePage,
  BioPage,
  ContactPage,
  CoachPage
} from './components/OtherPages';

export default function App() {
  // Determine initial page from URL pathname if present
  const getInitialPage = (): string => {
    if (typeof window !== 'undefined') {
      let path = window.location.pathname.replace(/^\//, '');
      if (!path) return 'major.html';
      if (path === 'index.html') return 'major.html';

      // If it doesn't end with .html, try appending .html to check compatibility
      if (!path.endsWith('.html')) {
        const potentialPage = `${path}.html`;
        if (
          [
            'major.html',
            'resume.html',
            'public.html',
            'finance.html',
            'bio.html',
            'contact.html',
            'coach.html'
          ].includes(potentialPage)
        ) {
          return potentialPage;
        }
      }

      if (
        [
          'major.html',
          'resume.html',
          'public.html',
          'finance.html',
          'bio.html',
          'contact.html',
          'coach.html'
        ].includes(path)
      ) {
        return path;
      }
    }
    return 'major.html';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage());
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'fast' | 'custom'>('fast');
  const [isCoachDetailOpen, setIsCoachDetailOpen] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState<CoachDetail | null>(null);

  // Handle browser back / forward
  useEffect(() => {
    const handlePopState = () => {
      let path = window.location.pathname.replace(/^\//, '') || 'major.html';
      if (path === 'index.html') path = 'major.html';

      if (!path.endsWith('.html')) {
        const potentialPage = `${path}.html`;
        if (
          [
            'major.html',
            'resume.html',
            'public.html',
            'finance.html',
            'bio.html',
            'contact.html',
            'coach.html'
          ].includes(potentialPage)
        ) {
          path = potentialPage;
        }
      }
      setCurrentPage(path);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    try {
      window.history.pushState({}, '', `/${page}`);
    } catch (err) {
      // In some sandbox environments pushState might be restricted
    }
    // 수정2: 클릭 시 smooth scroll 없이 처음부터 즉시 맨위(0,0)로 보일 수 있도록 auto/직접 스크롤 처리
    window.scrollTo(0, 0);
  };

  const openConsultation = (type: 'fast' | 'custom' = 'fast') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleOpenCoachDetail = (coach?: CoachDetail) => {
    if (coach) {
      setSelectedCoach(coach);
    } else {
      setSelectedCoach(COACHES_LIST[0]);
    }
    setIsCoachDetailOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Header with Navigation Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={openConsultation}
      />

      {/* Right Floating Quick Menu (빠른상담, 맞춤상담, TOP) */}
      <FloatingWidget
        onOpenFastConsult={() => openConsultation('fast')}
        onOpenCustomConsult={() => openConsultation('custom')}
      />

      {/* Main Content Area based on current route */}
      <main className="flex-1">
        {/* Main Page (index.html) or Major Coaching Page (major.html) */}
        {(currentPage === 'index.html' || currentPage === 'major.html') && (
          <>
            {/* Page 1: Intro Section */}
            <IntroSection onApplyClick={() => openConsultation('custom')} />

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
              onOpenFastConsult={() => openConsultation('fast')}
              onOpenCustomConsult={() => openConsultation('custom')}
            />

            {/* Page 4: Why Baro Coaching Section (01 - 04) */}
            <WhyBaroSection />

            {/* Page 5: Coaches Expertise Section */}
            <CoachesSection onOpenCoachDetail={handleOpenCoachDetail} />

            {/* Page 5: Coaching Results Section */}
            <ResultsSection />

            {/* Page 5: Lecture Portfolio Section */}
            <PortfolioSection />

            {/* Page 6: Student Reviews Section */}
            <ReviewsSection />
          </>
        )}

        {/* Subpage: 자소서 첨삭 (resume.html) */}
        {currentPage === 'resume.html' && (
          <ResumePage
            onOpenConsultation={openConsultation}
            onNavigate={handleNavigate}
            onOpenCoachDetail={handleOpenCoachDetail}
          />
        )}

        {/* Subpage: 공기업 맞춤 코칭 (public.html) */}
        {currentPage === 'public.html' && (
          <PublicPage
            onOpenConsultation={openConsultation}
            onNavigate={handleNavigate}
            onOpenCoachDetail={handleOpenCoachDetail}
          />
        )}

        {/* Subpage: 금융권 맞춤 코칭 (finance.html) */}
        {currentPage === 'finance.html' && (
          <FinancePage
            onOpenConsultation={openConsultation}
            onNavigate={handleNavigate}
            onOpenCoachDetail={handleOpenCoachDetail}
          />
        )}

        {/* Subpage: 의약/제약/바이오 맞춤 코칭 (bio.html) */}
        {currentPage === 'bio.html' && (
          <BioPage
            onOpenConsultation={openConsultation}
            onNavigate={handleNavigate}
            onOpenCoachDetail={handleOpenCoachDetail}
          />
        )}

        {/* Subpage: 상담신청 (contact.html) */}
        {currentPage === 'contact.html' && (
          <ContactPage
            onOpenConsultation={openConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {/* Subpage: 코치진 소개 (coach.html) */}
        {currentPage === 'coach.html' && (
          <CoachPage
            onOpenConsultation={openConsultation}
            onNavigate={handleNavigate}
            onOpenCoachDetail={handleOpenCoachDetail}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenConsultation={openConsultation} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        type={modalType}
        onClose={() => setModalOpen(false)}
      />

      {/* Elite Coach Detail Modal */}
      <CoachDetailModal
        isOpen={isCoachDetailOpen}
        coach={selectedCoach}
        onClose={() => setIsCoachDetailOpen(false)}
      />
    </div>
  );
}
