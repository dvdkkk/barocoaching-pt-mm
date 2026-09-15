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
  X,
  Stethoscope,
  Building2,
  User
} from 'lucide-react';
import { CoachDetail, COACHES_LIST } from '../data/coachesData';
import { ModernCoachCard } from './ModernCoachCard';
import { CoachesSection } from './CoachesSection';
import { ResultsSection } from './ResultsSection';
import { PortfolioSection } from './PortfolioSection';
import { ReviewsSection } from './ReviewsSection';

interface BioPageContentProps {
  onOpenConsultation: (type: 'fast' | 'custom') => void;
  onOpenCoachDetail?: (coach?: CoachDetail) => void;
}

interface MarqueeItem {
  title: string;
  url: string;
  fallback: string;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  { title: "대학병원 취업 준비", url: "https://barocoaching.co.kr/theme/jelly/img/mt_sd_img1.jpg", fallback: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" },
  { title: "상급종합병원 면접 대비", url: "https://barocoaching.co.kr/theme/jelly/img/mt_sd_img2.jpg", fallback: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" },
  { title: "종합병원 · 전문병원 지원자 코칭 진행", url: "https://barocoaching.co.kr/theme/jelly/img/mt_sd_img3.jpg", fallback: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" },
  { title: "제약회사 취업 준비", url: "https://barocoaching.co.kr/theme/jelly/img/mt_sd_img4.jpg", fallback: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" },
  { title: "바이오기업 취업 대비", url: "https://barocoaching.co.kr/theme/jelly/img/mt_sd_img5.jpg", fallback: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80" },
  { title: "연구 · 품질 · 임상 직무 코칭 운영", url: "https://barocoaching.co.kr/theme/jelly/img/mt_sd_img6.jpg", fallback: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80" }
];

const MarqueeCard: React.FC<MarqueeItem> = ({ title, url, fallback }) => {
  const [currentSrc, setCurrentSrc] = useState(url);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-72 sm:w-88 h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md shrink-0 group border border-slate-200/80 bg-slate-900 mx-3">
      <img 
        src={currentSrc} 
        alt={title}
        onError={() => {
          if (!hasError && currentSrc !== fallback) {
            setHasError(true);
            setCurrentSrc(fallback);
          }
        }}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <h4 className="text-white font-extrabold text-base sm:text-lg drop-shadow-md leading-snug">
          {title}
        </h4>
      </div>
    </div>
  );
};


const NaverBgSection: React.FC<{ children: React.ReactNode; id?: string; className?: string }> = ({ children, id, className }) => {
  const [imgSrc, setImgSrc] = useState("https://postfiles.pstatic.net/MjAyNjA5MTRfMjA4/MDAxNzg5MzcwMDEzMTEz.9w4DDPQ9RP-VQR_PEowkBEPv_nKs6e3k-G_ETXxH0wcg.pgsBRdNPAVFVQbZ0UvgkjsLmXmYkrH_WQiCUjOJtbH8g.PNG/20260914_160629.png?type=w966");
  const [hasError, setHasError] = useState(false);

  return (
    <section className={`py-16 sm:py-20 border-b border-slate-200/60 relative overflow-hidden ${className || ''}`} id={id}>
      <div className="absolute inset-0 z-0">
        {!hasError ? (
          <img 
            src={imgSrc} 
            alt="Background" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            onError={() => {
              setHasError(true);
              setImgSrc("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80");
            }}
          />
        ) : (
          <div className="w-full h-full bg-slate-50" />
        )}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export const BioPageContent: React.FC<BioPageContentProps> = ({ onOpenConsultation, onOpenCoachDetail }) => {
  return (
    <div className="bg-white text-slate-900">
      {/* 1. Intro Hero Section */}
      <section className="relative pt-14 pb-20 overflow-hidden bg-white border-b border-slate-200/60" id="bio-intro">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50/90 text-teal-700 text-xs font-semibold mb-4 border border-teal-200/60 backdrop-blur-xs">
              <span>BARO COACHING PREMIUM</span>
              <ChevronRight className="w-3 h-3" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
              의료·제약·바이오 취업, 준비 방식부터 달라야 합니다
            </h1>
            <p className="text-lg font-bold text-slate-800 mb-3">
              의료기관 · 제약회사 · 바이오기업 채용 평가 기준에 맞춰 자기소개서부터 면접까지 실전형으로 설계하는 1:1 맞춤 코칭
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-4xl font-medium">
              의료·제약·바이오 채용은 단순 스펙 경쟁이 아닌 직무 이해도, 산업 적합성, 조직 적응력까지 종합적으로 평가합니다.<br />
              바로코칭은 각 산업 채용 기준에 맞춰 자기소개서와 면접 답변의 방향부터 체계적으로 재설계합니다.
            </p>
          </div>


        </div>
      </section>

      {/* 2. Why Unstable Section */}
      <NaverBgSection id="bio-why-unstable">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-3">
              <span>UNSTABLE REASONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              의료·제약·바이오 취업, 왜 준비해도 불안할까요?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              열심히 준비하고 있는데도 자소서와 면접 앞에서 계속 막히는 이유는 준비의 방향이 산업별 채용 기준과 다르기 때문입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              {
                title: "자소서 방향이 맞는지 모르겠다",
                desc: "경험은 많은데 병원·제약·바이오 기업 기준에 맞게 정리하고 있는지 확신이 없습니다."
              },
              {
                title: "실습 · 연구 경험을 어떻게 써야 할지 어렵다",
                desc: "환자 응대 경험, 실험·연구 경험이 직무 역량으로 연결되는 구조인지 모르겠습니다."
              },
              {
                title: "인성 질문에서 항상 막힌다",
                desc: "책임감, 협업, 조직 적응 질문에서 답변이 추상적으로 흘러갑니다."
              },
              {
                title: "상황면접이 가장 두렵다",
                desc: "환자 컴플레인, 윤리 판단, 실험 오류 대응 질문이 나오면 답변 구조가 잡히지 않습니다."
              },
              {
                title: "기업·기관마다 질문 스타일이 다르다",
                desc: "병원은 인성 중심, 제약·바이오는 직무 중심이라 준비 방향이 혼란스럽습니다."
              },
              {
                title: "계속 면접에서 탈락한다",
                desc: "“준비는 잘했다”는 말을 듣지만 결과는 합격으로 이어지지 않습니다."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-teal-900 text-white text-center shadow-lg max-w-3xl mx-auto">
            <p className="text-base sm:text-lg font-bold">
              의료·제약·바이오 취업은 많이 준비하는 것이 아니라 ‘맞게’ 준비하는 것이 핵심입니다.<br />
              <span className="text-teal-300 underline underline-offset-4 decoration-2">이제 준비 방향을 바꿔야 할 때입니다.</span>
            </p>
          </div>
        </div>
      </NaverBgSection>

      {/* 3. Evaluation Differences Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60" id="bio-evaluation-limits">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              의료·제약·바이오 채용은 일반 기업과 평가 기준이 다르기 때문에<br className="hidden sm:inline" />
              준비 과정에서도 반복적으로 막히는 구간이 발생합니다.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              특히 아래와 같은 준비 구조의 한계가 자소서와 면접 결과에 직접적인 영향을 줍니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              "환자 응대·연구 경험을 답변으로 풀어내기 어렵다",
              "희생정신·책임감 질문이 막연하다",
              "팀워크 사례가 직무와 연결되지 않는다",
              "실습 · 연구 경험이 단순 나열에 그친다",
              "상황면접 답변 구조가 잡히지 않는다",
              "병원·기업 인재상 반영이 부족하다",
              "직무 이해도가 답변에 드러나지 않는다",
              "압박 질문 대응 경험이 부족하다"
            ].map((text, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-xs sm:text-sm font-semibold leading-snug">{text}</span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-teal-950 font-bold leading-relaxed">
              결국 의료·제약·바이오 취업 준비의 핵심은 경험의 양이 아니라 경험을 해석하고 구조화하는 방식입니다.<br />
              그래서 바로코칭은 단순 첨삭이 아닌 <strong className="text-teal-700 underline">‘합격 기준에 맞는 답변 설계 코칭’</strong>을 진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 3-Step Curriculum Section */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200/60" id="bio-3step-curriculum">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-3">
              <span>3-STEP CUSTOM COACHING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              의료·제약·바이오 취업 준비, 영역별 맞춤 코칭으로 완성됩니다
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              자기소개서와 면접은 준비 방식과 평가 기준이 다르기 때문에 각 영역에 맞춘 전문 코칭이 필요합니다.<br />
              바로코칭은 자소서 · 면접 · 병원 및 기업 맞춤 대비까지 체계적인 3단계 구조로 코칭을 진행합니다.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 01 */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-teal-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  01
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    의료·제약·바이오 자기소개서 코칭
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-700 font-bold">
                    개인의 경험을 산업 채용 기준에 맞춰 직무 중심 스토리로 재설계합니다.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  "병원·기업 문항 구조 분석",
                  "팀워크 및 협업 사례 정리",
                  "지원 동기 방향 설계",
                  "책임감·윤리의식 스토리 설계",
                  "실습·연구·직무 경험 재해석",
                  "기관·기업 인재상 연결 답변 구성",
                  "환자 응대·연구 사례 구조화",
                  "직무 이해도 기반 자소서 방향 설정"
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-100 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-teal-800 bg-teal-200/70 px-2.5 py-1 rounded-md">코칭 진행 포인트</span>
                <span className="text-xs sm:text-sm text-teal-950 font-medium">경험 나열형 자소서 구조 개선</span>
                <span className="text-teal-400">•</span>
                <span className="text-xs sm:text-sm text-teal-950 font-medium">감정 중심 서술 → 직무 중심 서술 전환</span>
                <span className="text-teal-400">•</span>
                <span className="text-xs sm:text-sm text-teal-950 font-medium">조직 적합성 강조 설계</span>
              </div>
            </div>

            {/* Step 02 */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-teal-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  02
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    의료·제약·바이오 면접 코칭
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-700 font-bold">
                    면접 질문 유형에 맞춰 답변 논리와 전달력을 함께 코칭합니다.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  "지원 동기 답변 구조 설계",
                  "환자 컴플레인 대응 답변",
                  "인성면접 답변 논리 강화",
                  "윤리적 판단 질문 대비",
                  "상황면접 대응 훈련",
                  "압박 질문 대응 훈련",
                  "직무 이해도 질문 대비",
                  "추가 질문 대응 연습"
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-100 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-teal-800 bg-teal-200/70 px-2.5 py-1 rounded-md">면접 코칭 핵심 훈련</span>
                <span className="text-xs sm:text-sm text-teal-950 font-medium">답변 논리 구조화 훈련</span>
                <span className="text-teal-400">•</span>
                <span className="text-xs sm:text-sm text-teal-950 font-medium">말의 속도 및 전달력 점검</span>
                <span className="text-teal-400">•</span>
                <span className="text-xs sm:text-sm text-teal-950 font-medium">면접 태도 및 시선 처리 코칭</span>
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-teal-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  03
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    병원·기업 맞춤 대비 코칭
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-700 font-bold">
                    지원 기관의 채용 방향과 면접 스타일에 맞춘 맞춤 대비가 진행됩니다.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  "대학병원 면접 질문 구조 분석",
                  "제약·바이오 기업 면접 대비",
                  "상급종합병원 인성 평가 대응",
                  "연구·생산·품질 직무 질문 대비",
                  "전문병원 직무 질문 대비",
                  "지원 병원·기업 인재상 답변 설계",
                  "공공의료기관 면접 대비",
                  "기관별 예상 질문 대응"
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <span className="text-xs font-bold text-teal-800 block mb-1">대학병원</span>
                  <span className="text-xs text-slate-700 font-semibold">조직 적응력 · 직무 이해도</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-800 block mb-1">상급종합병원</span>
                  <span className="text-xs text-slate-700 font-semibold">인성·책임감 평가</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-800 block mb-1">공공의료기관</span>
                  <span className="text-xs text-slate-700 font-semibold">윤리 + 공공성 평가</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-800 block mb-1">제약·바이오 기업</span>
                  <span className="text-xs text-slate-700 font-semibold">연구·품질·협업 역량 평가</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Coaching Point Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60" id="bio-coaching-point">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-widest block mb-2">COACHING POINT</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              자기소개서와 면접은 ‘많이 준비하는 것’보다<br />‘평가 기준에 맞게 설계하는 것’이 중요합니다.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              바로코칭은 의료·제약·바이오 채용 평가 구조를 반영해 답변의 방향부터 다르게 코칭합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "병원·기업 채용 기준 기반 코칭 설계",
                desc: "일반 기업 취업 기준이 아닌 의료기관 및 제약·바이오 채용 평가 요소에 맞춰 자기소개서와 면접 답변을 설계합니다."
              },
              {
                title: "직무 이해도 반영 답변 구조화",
                desc: "간호·보건·의료행정·연구·생산·품질 등 직무 특성을 반영해 경험을 직무 역량 중심으로 재해석합니다."
              },
              {
                title: "환자 중심 사고 표현 코칭",
                desc: "환자 응대 경험, 협업 사례를 병원 조직 가치 및 기업 핵심 가치와 연결해 설계합니다."
              },
              {
                title: "상황면접 대응 답변 훈련",
                desc: "환자·고객 대응, 갈등 상황, 윤리 및 규정 판단 질문까지 실제 면접 상황 기준으로 훈련합니다."
              },
              {
                title: "병원·기업 인재상 연결 스토리 설계",
                desc: "지원 기관 및 기업의 핵심 가치와 개인 경험을 연결하는 답변 구조를 만듭니다."
              },
              {
                title: "실전 답변 전달력 강화 코칭",
                desc: "말의 속도, 논리 흐름, 시선 처리 등 면접 전달력까지 함께 코칭합니다."
              }
            ].map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white font-bold flex items-center justify-center text-sm mb-4 shadow-xs">
                  {idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Curriculum & Method Section */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200/60" id="bio-curriculum-method">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Coaching 커리큘럼 및 방식
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">*세부 커리큘럼은 코칭 시 자세히 안내해 드립니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">01</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">의료기관·제약·바이오 자기소개서 코칭</h3>
              </div>
              <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                {[
                  "개인 맞춤 자소서 컨설팅",
                  "병원 및 기업 문항 구조 분석 코칭",
                  "실습 및 직무 경험 재해석 설계",
                  "조직 적합성 기반 답변 방향 설정",
                  "인재상 연결 자기소개서 구성 코칭"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">02</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">의료기관·제약·바이오 면접 코칭</h3>
              </div>
              <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                {[
                  "면접 유형별 맞춤 코칭 진행",
                  "인성면접 대응 코칭",
                  "상황면접 답변 구조 설계",
                  "직무 이해도 질문 대비",
                  "환자 · 고객 · 규정 관련 질문 대응 훈련"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Summary Banner Section with Left Naver Blog Image */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-teal-900 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-800/30 rounded-full blur-3xl pointer-events-none" />
            
            {/* Left Naver Blog Image with Fallback */}
            <div className="w-full lg:w-5/12 shrink-0 relative rounded-2xl overflow-hidden shadow-md border border-teal-700/50 aspect-video lg:aspect-4/3 bg-teal-950">
              <img 
                src="https://postfiles.pstatic.net/MjAyNjA5MTRfMTQx/MDAxNzg5MzcwMDEzMTAy.MvzgKMXRqrcKygIxWcTN9_iF4gJrM8AacYgxUzS-7ygg.xpeq05T5llE16LqNFDJ6eWzamk_dVxW0qKc7MyQRSbEg.PNG/20260914_160723.png?type=w966"
                alt="바로코칭 가이드"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-7/12 relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 leading-snug">
                의료기관·제약·바이오 취업은 많은 사람들의 목표이지만,<br />준비 방향에 따라 결과는 달라집니다.
              </h3>
              <p className="text-teal-100 text-sm sm:text-base leading-relaxed font-medium">
                병원 및 의료·제약·바이오 채용은 단순 스펙 경쟁이 아니라 직무 이해도, 환자 및 고객 중심 사고, 산업 적합성, 조직 적응력까지 종합적으로 평가하는 과정입니다. 바로코칭은 이러한 산업별 채용 특성과 평가 기준을 반영하여 자기소개서와 면접 답변을 체계적으로 설계합니다. 막연한 준비가 아닌 합격 기준에 맞춘 준비가 필요하며, 준비 방향이 달라지면 면접 결과 역시 달라집니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process Section (Copied from Major Page Process Section structure) */}
      <section className="py-16 sm:py-24 bg-white" id="bio-process">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-left mb-14">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block mb-2">
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
                <span className="text-teal-600 font-black text-sm block mb-1">STEP 01</span>
                <h3 className="text-xl font-bold text-slate-900">상담 신청</h3>
              </div>
              <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  코칭을 희망하시는 분들은 <strong className="text-teal-700">[전화상담]</strong>,{' '}
                  <strong className="text-amber-600">[빠른상담]</strong>,{' '}
                  <strong className="text-indigo-700">[1:1 개인별 맞춤 상담신청]</strong> 중 선택하고 신청합니다.
                </p>
              </div>
            </div>

            {/* Step 2: 코칭 전 기초상담 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-10">
              <div className="md:col-span-3">
                <span className="text-teal-600 font-black text-sm block mb-1">STEP 02</span>
                <h3 className="text-xl font-bold text-slate-900">코칭 전 기초상담</h3>
              </div>
              <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  본격적인 코칭에 앞서 각 코칭 파트별 담당자 분과 사전 상담을 통해 개인의 고민과 문제점을 파악합니다.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2"><strong>• 지원 산업 확인 :</strong> 대학병원, 종합병원, 공공의료기관, 제약회사, 바이오기업</div>
                  <div className="flex items-start gap-2"><strong>• 지원 직무 확인 :</strong> 간호, 보건, 의료행정, 병원코디, 제약영업(MR), 학술, RA, CRA, 임상, QC, QA, 연구(R&D), 생산, 품질관리</div>
                  <div className="flex items-start gap-2"><strong>• 서류 준비 수준 점검 :</strong> 경험 정리 상태, 문항 방향성, 직무 연결도</div>
                  <div className="flex items-start gap-2"><strong>• 면접 준비 수준 점검 :</strong> 답변 구조, 직무 이해도, 상황 대응력</div>
                  <div className="flex items-start gap-2"><strong>• 필요한 코칭 범위 확정 :</strong> 자소서 중심, 면접 중심, 통합 코칭</div>
                </div>
              </div>
            </div>

            {/* Step 3: 코칭 유형 선택 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-12">
              <div className="md:col-span-3">
                <span className="text-teal-600 font-black text-sm block mb-1">STEP 03</span>
                <h3 className="text-xl font-bold text-slate-900">코칭 유형 선택</h3>
              </div>
              <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-6">
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  기업과 개인에 맞는 맞춤형 코칭 수업을 위해{' '}
                  <span className="text-teal-700 font-bold">[코칭 분야 &gt;&gt; 면접유형 &gt;&gt; 진행 방식]</span>을 협의합니다.
                </p>

                {/* 1. 코칭 멘토링 분야 */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2.5">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span>코칭, 멘토링 분야</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['인턴', '신입', '경력'].map((role) => (
                      <span
                        key={role}
                        className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-teal-600 text-white shadow-xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. 코칭 분야 선택 */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2.5">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span>코칭 분야 선택</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "간호 직무ㆍ제약영업 및 학술 직무",
                      "보건 직무ㆍ임상 및 RA 직무",
                      "의료행정 직무ㆍ연구개발(R&D) 직무",
                      "병원 코디네이터 ㆍ품질관리(QC/QA) 및 생산 직무",
                      "공공의료기관 준비"
                    ].map((field) => (
                      <span
                        key={field}
                        className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-teal-700 text-white shadow-xs"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. 면접 유형 파악 */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2.5">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span>면접 유형 파악</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      '인성면접', '직무면접', '상황면접', '윤리 및 규정 질문',
                      '환자 응대 및 고객 대응 질문', '연구 및 데이터 설명 질문',
                      '압박 질문 및 추가 질문 대응', 'PT면접', '토론면접', '경험면접'
                    ].map((type) => (
                      <span
                        key={type}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium hover:border-teal-400 transition"
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
                    <Check className="w-4 h-4 text-teal-600" />
                    <span>진행 방식 선택</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                      <div className="flex items-center gap-2 text-teal-700 font-bold text-sm mb-1.5">
                        <Video className="w-4 h-4" />
                        <span>비대면 방식</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        (ZOOM, GOOGLE MEET)을 활용해서 공유된 비대면 인터넷 주소에 접속 후 진행됩니다.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                      <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1.5">
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
                <span className="text-teal-600 font-black text-sm block mb-1">STEP 04</span>
                <h3 className="text-xl font-bold text-slate-900">수강신청</h3>
              </div>
              <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  수강 희망 날짜와 시간을 조율하고, 개인별 맞춤 수업을 위한 수업시수를 조율하여 수강신청을 진행합니다.
                </p>
              </div>
            </div>

            {/* Step 5: 코칭수업 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-3">
                <span className="text-teal-600 font-black text-sm block mb-1">STEP 05</span>
                <h3 className="text-xl font-bold text-slate-900">코칭수업</h3>
              </div>
              <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  코칭 전문가와 맞춤 코칭을 진행합니다. 개인별 디테일한 코칭으로 다양한 피드백과 자신감을 가질 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Coaches Expertise Section */}
      <CoachesSection onOpenCoachDetail={onOpenCoachDetail} />

      {/* 10. Remaining Sections placed beneath the new design */}
      <ResultsSection />
      <PortfolioSection />
      <ReviewsSection />
    </div>
  );
};
