import React from 'react';
import { COACHING_POINTS } from '../data/contentData';
import { Check, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export const CoachingPointSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white" id="coaching-point-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-blue-400 uppercase">
            Coaching <span className="text-indigo-400">POINT</span>
          </span>
        </div>

        <div className="space-y-12">
          {/* Point 1: 대기업 채용트렌드와 특징 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-800 pb-12">
            <div className="md:col-span-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                대기업 채용트렌드와<br />특징은 어떤가요?
              </h3>
            </div>

            <div className="md:col-span-8 bg-slate-850/70 rounded-2xl border border-slate-800 p-6 sm:p-7 space-y-3.5">
              <div className="flex items-start gap-3 text-emerald-400 font-bold text-base sm:text-lg pb-2 border-b border-slate-800">
                <Check className="w-5 h-5 mt-0.5 shrink-0" />
                <span>삼성전자를 제외한 모든 대기업 수시 채용 시대</span>
              </div>
              <ul className="space-y-2.5 text-slate-300 text-sm sm:text-base pt-1 pl-1">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>계열사 및 자회사 수시 채용</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>경험의 구체화를 통한 역량 평가 일반화</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>AI 면접, 자소서 평가 도입 확대</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>경험이 바탕된 자기소개서 / 면접 강화</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Point 2: 1:1 코칭 이런 분들이 합니다 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                1:1 코칭 이런 분들이<br />합니다.
              </h3>
            </div>

            <div className="md:col-span-8 bg-slate-850/70 rounded-2xl border border-slate-800 p-6 sm:p-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-300">
                {COACHING_POINTS.candidates.map((cand, idx) => (
                  <div key={cand} className="flex items-start gap-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    <span className="leading-snug">{cand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
