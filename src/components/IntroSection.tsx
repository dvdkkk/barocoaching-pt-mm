import React from 'react';
import { HelpCircle, CheckCircle2, ChevronRight } from 'lucide-react';

interface IntroSectionProps {
  onApplyClick: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onApplyClick }) => {
  return (
    <section className="relative pt-14 pb-20 overflow-hidden bg-white border-b border-slate-200/60" id="major-coaching-intro">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Title & Heading */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 text-blue-700 text-xs font-semibold mb-4 border border-blue-200/60 backdrop-blur-xs">
            <span>BARO COACHING PREMIUM</span>
            <ChevronRight className="w-3 h-3" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            대기업 맞춤 코칭
          </h1>
          <p className="text-lg font-bold text-slate-800 mb-3">
            취준생들 중에서 대기업의 취업은 모두가 꿈꾸고 있습니다.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-4xl font-medium">
            어떤 취업 스펙을 갖춰야 할지? 이력서와 자소서 쓰는 법은 어떻게 해야 할지? 면접 질문들은 어떻게 되고 면접 준비를 어떻게 해야 할지? 등 많은 고민이 있을 것입니다.
          </p>
        </div>

        {/* Highlighted Question Box from Page 1 Screenshot */}
        <div className="rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Col */}
            <div className="md:col-span-5 flex items-start gap-4 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  Core Question
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                  대기업에서 원하는 사람은 어떤 사람일까요?
                </h3>
              </div>
            </div>

            {/* Right Col Bullet List */}
            <div className="md:col-span-7 space-y-3 pl-0 md:pl-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  대기업이 원하는 사람은 어떤 사람인가요?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  대기업의 인사담당자와 실무자, 임원들이 원하는 신입사원은 어떤 사람인가요?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  지원하는 직무의 대기업 실무자가 원하는 사람은 누구일까요?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
