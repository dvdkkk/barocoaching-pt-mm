import React from 'react';
import {
  CheckCircle2,
  HelpCircle,
  FileSearch,
  Users,
  Target,
  FileCheck,
  Building,
  GraduationCap,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  Check,
  X,
  FileText
} from 'lucide-react';

interface ResumeSectionCustomProps {
  onOpenConsultation: (type: 'fast' | 'custom') => void;
}

export const ResumeHeroDesign: React.FC<ResumeSectionCustomProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION (Dark Blue Gradient Background with Office Image) */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-[#101b33] text-white py-20 sm:py-28 md:py-32 px-4 sm:px-8 text-left">
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-blue-400" />
            1:1 맞춤형 합격 자기소개서 첨삭 코칭
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight">
            자기소개서, 첨삭이 아니라 <span className="text-blue-400">방향</span>입니다
          </h1>
          
          <div className="space-y-2.5 text-base sm:text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-3xl">
            <p>자기소개서, 단순 문장 첨삭만으로는 부족합니다.</p>
            <p className="font-bold text-white">지원 기업과 직무에 맞게 합격 방향으로 함께 설계해야 합니다.</p>
          </div>

          <div className="pt-2">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 rounded-full shadow-lg shadow-blue-500/20 border border-blue-400/30 leading-relaxed">
              공기업, 대기업, 금융권, 외국계기업까지<br className="sm:hidden" /> 각 채용 흐름과 평가 포인트를 반영한 1:1 맞춤형 첨삭 코칭
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. 4-CARD BENEFIT STRIP */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 sm:-mt-10 relative z-10 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
              단순 문장 수정<br />중심이 아닙니다
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
              <Target className="w-6 h-6" />
            </div>
            <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
              지원 직무와 경험을 연결해<br /><span className="text-blue-600">방향을 잡아드립니다</span>
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
              <FileCheck className="w-6 h-6" />
            </div>
            <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
              실제 면접까지 이어질 수 있도록<br />답변의 근거를 함께 정리합니다
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
              <Sparkles className="w-6 h-6" />
            </div>
            <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
              AI로는 정리가 가능하지만,<br />합격 방향까지는 잡기 어렵습니다
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. PROBLEM DIAGNOSIS (왜 내 자기소개서는 항상 비슷하게 보일까요?) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-20 sm:mb-28">
        <div className="text-left mb-10">
          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">
            PROBLEM DIAGNOSIS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            왜 내 자기소개서는 항상 비슷하게 보일까요?
          </h2>
          <p className="mt-2.5 text-slate-600 text-base sm:text-lg leading-relaxed">
            자기소개서는 단순히 문장을 깔끔하게 정리한다고 해서 좋은 결과로 이어지지 않습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
          {/* Left Image */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
            <img
              src="https://postfiles.pstatic.net/MjAyNjA5MTRfMTIy/MDAxNzg5MzY3MjIzMTA4.O-Qk1HssMV-akGG9P7vmsXnQhoQ0Gtp97dCAhOzopzEg.G13W_bc-LHYSWiPFTXxNZz9wyXnfTNf3qFONTW5OkG8g.PNG/20260914_152640.png?type=w966"
              alt="취업 준비 자기소개서 고민"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-sm sm:text-base font-semibold leading-relaxed">
                지원자의 경험이 기업과 직무 관점에서 어떻게 읽히는지에 따라 평가가 결정됩니다.
              </p>
            </div>
          </div>

          {/* Right Checklist */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                지원자의 경험이 있어도, 그것이 기업과 직무 관점에서<br className="hidden sm:inline" /> 어떻게 읽히는지에 따라 평가가 달라집니다.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
                최근 채용은 단순 스펙보다도 <strong>직무 이해도, 경험의 연결성, 조직 적합성, 지원동기의 설득력</strong>을 더 중요하게 보는 경우가 많습니다. 이런 이유로 많은 지원자들이 아래와 같은 문제를 겪습니다.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                '경험은 있는데, 어떻게 써야 할지 모르겠습니다',
                '지원동기와 직무가 연결되지 않습니다',
                '문장은 썼는데 너무 평범하고 두드러지지 않아요',
                '공기업, 대기업, 금융권마다 방향이 다른데 기준을 모르겠습니다',
                '첨삭을 받아도 왜 고쳐야 하는지 모르겠습니다',
                '서류에서 자꾸 떨어져요',
                'AI로 계속 수정해도, 왜 떨어지는지 모르겠습니다'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Callout Box */}
        <div className="mt-8 p-6 sm:p-7 bg-blue-50/80 border border-blue-200 rounded-2xl text-center">
          <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
            좋은 자기소개서는 예쁘게 고친 글이 아니라, <span className="text-blue-700">평가자가 읽었을 때 납득되는 글</span>이어야 합니다.<br />
            <span className="text-red-600 font-extrabold text-lg sm:text-xl mt-1 inline-block">문장이 아니라, 방향이 잘못된 경우가 많습니다</span>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. WHY BARO COACHING (Dark Navy Full Width) */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#111928] text-white py-16 sm:py-24 px-4 mb-20 sm:mb-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-left mb-12">
            <span className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-wider block mb-2">
              WHY BARO COACHING
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              왜 자기소개서 코칭은 <span className="text-blue-400">바로코칭</span>이어야 할까요?
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              바로코칭은 단순히 문장을 다듬는 방식이 아니라,<br className="hidden sm:inline" />
              지원자의 경험을 바탕으로 지원 기업과 직무에 맞는 자기소개서 방향을 함께 설계하는 실전형 코칭을 지향합니다.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                num: '01',
                title: '지원 직무 중심으로 방향을 잡습니다',
                desc: '같은 경험이라도 어떤 기업, 어떤 직무에 지원하느냐에 따라 강조 포인트는 달라집니다. 바로코칭은 자기소개서를 단순 교정하지 않고, 지원 방향에 맞게 핵심 메시지를 정리합니다.'
              },
              {
                num: '02',
                title: '반복되는 템플릿식 첨삭을 지양합니다',
                desc: '누구에게나 비슷하게 적용되는 문장 교정 방식이 아니라, 생성형 AI처럼 평균적인 표현을 정리하는 수준을 넘어, 지원자마다 다른 경험과 지원 맥락을 기반으로 방향을 설계합니다.'
              },
              {
                num: '03',
                title: '면접까지 연결되는 자기소개서를 만듭니다',
                desc: '자기소개서는 서류에서 끝나는 문서가 아닙니다. 면접 질문의 근거가 되는 만큼, 이후 답변까지 고려한 방향으로 정리하는 것이 중요합니다.'
              },
              {
                num: '04',
                title: '실제 지원 흐름에 맞춰 코칭합니다',
                desc: '지원 시기, 채용 일정, 산업군 특성, 문항 유형 등을 고려하여 실제 지원에 바로 활용할 수 있도록 현실적으로 코칭합니다.'
              }
            ].map((pt) => (
              <div
                key={pt.num}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 hover:border-blue-500/50 transition"
              >
                <div className="shrink-0 flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-extrabold text-blue-400 bg-blue-900/40 px-3.5 py-1.5 rounded-lg border border-blue-500/30">
                    차별화 POINT {pt.num}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">{pt.title}</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. PROCESS SECTION (1:1 자기소개서 첨삭, 이렇게 진행됩니다) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-20 sm:mb-28">
        <div className="text-left mb-10">
          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">
            STEP BY STEP PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            1:1 자기소개서 첨삭, 이렇게 진행됩니다
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            바로코칭의 자기소개서 첨삭은 단순히 문장을 수정해서 돌려드리는 방식이 아닙니다.<br className="hidden sm:inline" />
            지원 분야와 직무, 현재 작성 상태를 함께 확인한 뒤 지원자에게 맞는 방향으로 자기소개서 내용을 구체화하는 방식으로 진행됩니다.
          </p>
        </div>

        {/* Horizontal Visual Step Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {[
            { step: '01', title: '지원 기업·직무 확인', icon: Building },
            { step: '02', title: '자기소개서 방향 진단', icon: FileSearch },
            { step: '03', title: '1:1 맞춤 첨삭 코칭', icon: Users },
            { step: '04', title: '보완 방향 구체화', icon: FileCheck }
          ].map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-blue-700">STEP {s.step}</span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-1">{s.title}</span>
              </div>
            );
          })}
        </div>

        {/* Step 1 - 5 Detailed High-Contrast Readable Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              step: 'STEP 01',
              title: '사전 내용 확인',
              desc: '지원 기업, 지원 직무, 현재 작성한 자기소개서, 고민 지점 등을 먼저 확인합니다.'
            },
            {
              step: 'STEP 02',
              title: '자기소개서 진단',
              desc: '문항별 방향성, 경험 정리 방식, 직무 연관성, 설득력, 문장 구조 등을 점검합니다.'
            },
            {
              step: 'STEP 03',
              title: '1:1 첨삭 코칭 진행',
              desc: '단순 오탈자 수정이 아니라, 어떤 경험을 어떤 논리로 풀어야 하는지 함께 정리합니다.'
            },
            {
              step: 'STEP 04',
              title: '보완 방향 안내',
              desc: '현재 글에서 보완이 필요한 부분과, 이후 수정 시 어떤 흐름으로 정리해야 하는지 구체적으로 안내합니다.'
            },
            {
              step: 'STEP 05',
              title: '실제 지원 활용',
              desc: '수정된 자기소개서가 실제 지원과 면접 준비로 이어질 수 있도록 활용 방향까지 함께 점검합니다.'
            }
          ].map((st, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border-2 border-slate-200/90 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-extrabold bg-blue-600 text-white shadow-xs">
                    {st.step}
                  </span>
                  <span className="text-slate-400 font-bold text-xs sm:text-sm">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-2.5 leading-snug">
                  {st.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. TARGET AUDIENCE (이런 분들에게 추천합니다) */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-slate-50 py-16 sm:py-24 px-4 mb-20 sm:mb-28 border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">
              RECOMMENDATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              이런 분들에게 추천합니다
            </h2>
            <p className="mt-2.5 text-slate-600 text-base sm:text-lg leading-relaxed">
              문장만 예쁘게 고치는 것을 넘어, 평가자가 납득하는 합격 방향을 잡고 싶다면 바로코칭과 함께하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              '자기소개서를 처음부터 어떻게 써야 할지 막막한 분',
              '여러 번 써봤지만 매번 비슷한 느낌으로 끝나는 분',
              '지원동기와 직무역량 연결이 잘 안 되는 분',
              '공기업, 대기업, 금융권, 외국계기업 준비 방향이 헷갈리는 분',
              '문장을 예쁘게 고치는 것보다 합격 가능성 있는 방향을 잡고 싶은 분',
              '자기소개서와 면접까지 연결되는 준비를 하고 싶은 분',
              '여러 번 수정해도, 방향이 맞는지 확신이 없는 분',
              '“대충 수정”이 아니라 “제대로 준비”하고 싶은 분'
            ].map((txt, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-400">RECOMMEND 0{idx + 1}</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                  {txt}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-blue-600 text-white font-extrabold text-sm sm:text-base md:text-lg px-8 py-3.5 rounded-full shadow-lg shadow-blue-500/30">
              “대충 수정”이 아니라 “제대로 준비”하고 싶은 분을 위한 1:1 맞춤 코칭
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. INDUSTRY-SPECIFIC RESUME STRATEGY (지원 분야에 따라 자기소개서의 방향은 달라집니다) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-20 sm:mb-28">
        <div className="text-left mb-12">
          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">
            STRATEGY BY FIELD
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            지원 분야에 따라 자기소개서의 방향은 달라집니다
          </h2>
          <p className="mt-2.5 text-slate-600 text-base sm:text-lg leading-relaxed">
            바로코칭은 다양한 채용 분야의 흐름을 고려하여 지원 분야별 특성을 반영한 자기소개서 첨삭 코칭을 진행합니다.
          </p>
        </div>

        <div className="space-y-6">
          {/* 1. 공기업 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-blue-300 transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-extrabold border border-emerald-200">
                공기업 &amp; 공공기관
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">공기업 자기소개서 코칭</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
              공기업 자기소개서는 직무수행능력, 경험기반 서술, 조직 이해, 공공성, 문제해결 경험 등을 구조적으로 정리하는 것이 중요합니다. 특히 NCS 기반 경험 정리, 지원기관 특성 반영, 문항의 의도 파악이 핵심입니다.
            </p>
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-600 block mb-2.5">이런 부분을 중점적으로 봅니다</span>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {[
                  '경험 정리의 구체성',
                  '직무 관련 역량 표현 방식',
                  '공공기관 적합성',
                  '문항 의도에 맞는 답변 구조',
                  '지나치게 추상적인 표현 보완'
                ].map((tag, i) => (
                  <span key={i} className="px-3.5 py-2 bg-white rounded-lg text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200 shadow-2xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. 대기업 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-blue-300 transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-extrabold border border-blue-200">
                주요 대기업
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">대기업 자기소개서 코칭</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
              대기업 자기소개서는 지원자의 경험이 기업의 인재상, 직무 특성, 성장 가능성과 어떻게 연결되는지가 중요합니다. 단순한 열정 표현보다, 실제 경험을 바탕으로 역량과 태도를 설득력 있게 전달해야 합니다.
            </p>
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-600 block mb-2.5">이런 부분을 중점적으로 봅니다</span>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {[
                  '지원동기의 현실성',
                  '직무 이해도 표현',
                  '성과 중심 경험 정리',
                  '기업별 인재상과의 연결',
                  '두루뭉술한 표현의 구체화'
                ].map((tag, i) => (
                  <span key={i} className="px-3.5 py-2 bg-white rounded-lg text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200 shadow-2xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. 금융권 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-blue-300 transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs sm:text-sm font-extrabold border border-amber-200">
                은행 &amp; 금융권
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">금융권 자기소개서 코칭</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
              금융권은 신뢰성, 정확성, 책임감, 고객 관점, 수치 감각, 조직 적응력 등을 중요하게 평가하는 경우가 많습니다. 또한 은행, 증권, 보험, 카드, 자산운용 등 업권에 따라 문항의 방향도 달라질 수 있습니다.
            </p>
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-600 block mb-2.5">이런 부분을 중점적으로 봅니다</span>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {[
                  '금융권 지원동기의 설득력',
                  '고객 중심 사고 표현',
                  '책임감과 꼼꼼함의 근거 제시',
                  '직무 적합 경험 연결',
                  '업권별 특성을 고려한 방향 정리'
                ].map((tag, i) => (
                  <span key={i} className="px-3.5 py-2 bg-white rounded-lg text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200 shadow-2xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 4. 외국계기업 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-blue-300 transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs sm:text-sm font-extrabold border border-purple-200">
                외국계 &amp; 글로벌 기업
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">외국계기업 자기소개서 코칭</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
              외국계기업은 직무 중심성, 명확한 성과, 커뮤니케이션 역량, 문제 해결 경험, 주도성 등을 더 직접적으로 보는 경우가 많습니다. 불필요하게 길고 추상적인 표현보다, 핵심이 분명한 자기소개서가 중요합니다.
            </p>
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-600 block mb-2.5">이런 부분을 중점적으로 봅니다</span>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {[
                  '직무 중심 경험 정리',
                  '수치 또는 결과 기반의 표현',
                  '명확하고 간결한 구조',
                  '주도성과 협업 경험의 균형',
                  '불필요한 장황함 정리'
                ].map((tag, i) => (
                  <span key={i} className="px-3.5 py-2 bg-white rounded-lg text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200 shadow-2xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. DIFFERENTIATION & VALUE PROPOSITION (첨삭은 많지만, 바로코칭의 결과가 다른 이유) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
            <img
              src="https://postfiles.pstatic.net/MjAyNjA5MTRfMjAz/MDAxNzg5MzY3MjIzMTA3.9Fp_r_mDE-lyXtZA8Rdkzu9olKtVP8JCZHrAfKjR5ZEg.swhI_jy-jD6JB4r0OhD5MWHIHJ2pqgcdbsqPtoAkuNAg.PNG/20260914_152644.png?type=w966
"
              alt="전문 코치 1:1 컨설팅"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block">
              DIFFERENTIATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              첨삭은 많지만, 바로코칭의 결과가 다른 이유
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              일반적인 첨삭은 문장을 다듬고 표현을 정리하는 데 그치는 경우가 많습니다. 하지만 실제 채용에서는 문장보다 먼저 <strong>내용의 방향과 논리</strong>가 평가됩니다.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              바로코칭은 단순히 “이 문장을 이렇게 바꾸세요”가 아니라, <strong>왜 이 경험을 이 위치에 넣어야 하는지, 왜 이 표현이 직무와 연결되는지, 왜 이 문항에서 이 포인트를 강조해야 하는지</strong>를 함께 봅니다.
            </p>

            <div className="pt-3">
              <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl text-center sm:text-left">
                <span className="text-base sm:text-lg md:text-xl font-extrabold text-blue-950">
                  좋은 자소서는 &lsquo;문장&rsquo;이 아니라 &lsquo;논리&rsquo;에서 갈립니다
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. DEEP DIVE (자기소개서는 혼자 오래 붙잡는다고 해결되지 않을 때가 많습니다) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block">
              EXPERIENCE &amp; DIRECTION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              자기소개서는 혼자 오래 붙잡는다고<br /> 해결되지 않을 때가 많습니다
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              지원 기업과 직무에 맞는 방향을 정확히 잡고, 내 경험이 설득력 있게 전달될 수 있도록 정리하고 싶다면 바로코칭의 1:1 자기소개서 첨삭 코칭으로 준비해보세요.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              문장을 예쁘게 다듬는 것보다 더 중요한 것은 어떤 내용을 어떤 흐름으로 전달할 것인지입니다. 합격을 위한 자기소개서에는 방향이 필요합니다. 지원자의 경험을 직무와 연결해 설득력 있게 정리합니다.
            </p>

            <div className="pt-2">
              <div className="inline-block bg-blue-50 text-blue-700 font-bold text-sm sm:text-base px-5 py-3 rounded-xl border border-blue-200">
                공기업, 대기업, 금융권, 외국계기업까지 맞춤형 첨삭 코칭은 저희 바로코칭입니다.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="취업 합격 멘토링 회의"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 10. FIT CHECK (이런 분들은 잘 맞아요 / 안 맞아요) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-20 sm:mb-24">
        <div className="text-left mb-12">
          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">
            FIT CHECK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            바로코칭은 빠른 결과보다,<br className="sm:hidden" /> 제대로 된 결과를 원하는 분께 적합합니다
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 이런 분들은 잘 맞아요 */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900">이런 분들은 잘 맞아요 😊</h3>
            </div>
            <div className="space-y-3">
              {[
                '본인의 경험을 제대로 정리해보고 싶은 분',
                '지원 직무에 맞는 방향을 잡고 싶은 분',
                '단순 수정이 아니라 실제 피드백을 원하는 분',
                '자기소개서와 면접을 함께 고려해 준비하고 싶은 분',
                '단기간이라도 집중해서 제대로 준비하고 싶은 분'
              ].map((txt, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-blue-100 shadow-2xs">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-slate-800">{txt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 이런 분들은 안 맞아요 */}
          <div className="bg-red-50/50 border border-red-200 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                ✕
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-red-900">이런 분들은 안 맞아요 🙁</h3>
            </div>
            <div className="space-y-3">
              {[
                '아무런 수정 없이 바로 완성본만 받기를 원하는 분',
                '복붙용 문장이나 획일적인 템플릿을 원하는 분',
                '지원 직무와 무관하게 형식만 맞추고 싶은 분',
                '빠르게 정리된 문장만으로 충분하다고 생각하시는 분'
              ].map((txt, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-2xs">
                  <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-slate-800">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conclusion Box */}
        <div className="mt-8 p-7 sm:p-8 bg-slate-900 text-white rounded-3xl text-center">
          <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed">
            바로코칭은 빠르게 포장된 문장을 만드는 곳이 아니라,<br className="sm:hidden" />
            지원자의 강점이 실제 평가에서 전달될 수 있도록 <span className="text-blue-400">방향을 함께 잡아가는 코칭</span>을 지향합니다.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => onOpenConsultation('fast')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-full transition shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              1:1 맞춤 자소서 첨삭 상담신청하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

