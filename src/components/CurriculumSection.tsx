import React from 'react';
import { FileEdit, UserCheck, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
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

        {/* 4-Phase Circular / Step Diagram from Page 2 & 3 */}
        <div className="mb-16">
          <div className="relative max-w-2xl mx-auto py-8">
            {/* Center connector subtle lines */}
            <div className="hidden sm:block absolute inset-0 m-auto w-72 h-72 rounded-full border-2 border-dashed border-slate-200 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 relative z-10">
              {/* Phase 1: 분석 */}
              <div className="flex flex-col items-center text-center p-6 bg-blue-50/70 rounded-2xl border border-blue-100 shadow-2xs hover:shadow-sm transition">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-blue-500/20 mb-3">
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
              <div className="flex flex-col items-center text-center p-6 bg-cyan-50/70 rounded-2xl border border-cyan-100 shadow-2xs hover:shadow-sm transition">
                <div className="w-16 h-16 rounded-full bg-cyan-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-cyan-500/20 mb-3">
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
              <div className="flex flex-col items-center text-center p-6 bg-emerald-50/70 rounded-2xl border border-emerald-100 shadow-2xs hover:shadow-sm transition">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-emerald-500/20 mb-3">
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

        {/* 2 Detailed Cards: 자소서 코칭 & 면접 코칭 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: 대기업 자소서코칭 */}
          <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-7 sm:p-8 hover:border-blue-300 transition-all shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                <FileEdit className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                  Step 01
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  대기업 자소서코칭
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-blue-100 text-blue-800 font-semibold text-sm sm:text-base flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>개별 맞춤 자소서 컨설팅</span>
            </div>

            <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>개인 경험에 따른 자소서 작성 코칭 (경험을 항목에 맞춰 배치)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>마스터 자소서 코칭 (출제 빈도 최상위 항목을 추출하여 미리 작성)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>입사 희망 기업 자소서 항목 맞춤 컨설팅</span>
              </li>
            </ul>
          </div>

          {/* Card 2: 대기업 면접코칭 */}
          <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-7 sm:p-8 hover:border-indigo-300 transition-all shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">
                  Step 02
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  대기업 면접코칭
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-indigo-100 text-indigo-800 font-semibold text-sm sm:text-base flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
              <span>면접유형에 따른 코칭 (PT/임원/인성/토론/역량 등)</span>
            </div>

            <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                <span>직무역량 1분 스피치 작성 (스토리텔링형 1분 스피치 작성)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                <span>면접태도 &amp; 자세 &amp; 임기응변 코칭 &amp; 자신감 코칭</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                <span>경험의 구조화 답변 및 논리적 답변 요령 코칭</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                <span>실전 모의면접 진행 후 심층 피드백</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
