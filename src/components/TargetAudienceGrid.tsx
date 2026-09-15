import React from 'react';
import { TARGET_AUDIENCE_LIST } from '../data/contentData';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const TargetAudienceGrid: React.FC = () => {
  // Background styling variations matching the PDF cards
  const cardGradients = [
    'from-blue-600 to-indigo-700',
    'from-cyan-600 to-blue-700',
    'from-slate-800 to-slate-900',
    'from-indigo-600 to-purple-800',
    'from-blue-500 to-sky-600',
    'from-slate-800 to-slate-950',
    'from-indigo-600 to-blue-800',
    'from-teal-600 to-cyan-700',
    'from-slate-700 to-slate-850',
    'from-blue-700 to-indigo-900',
    'from-cyan-700 to-blue-850',
    'from-slate-800 to-zinc-900',
    'from-indigo-700 to-blue-900',
    'from-blue-600 to-teal-700'
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200" id="target-audience-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            코칭이나 컨설팅을 한 번도 받은 적이 없다고요?<br />
            <span className="text-blue-600">너무 걱정하지 마세요!</span>
          </h2>
          <p className="mt-3 text-slate-600 font-medium text-base">
            이런 분들이 코칭을 신청하고 결과를 만드셨어요~
          </p>
        </div>

        {/* 14 Cards Grid matching PDF Page 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {TARGET_AUDIENCE_LIST.map((item, index) => {
            const gradient = cardGradients[index % cardGradients.length];
            return (
              <div
                key={item}
                className={`relative rounded-xl p-4 sm:p-5 flex flex-col justify-between min-h-[130px] sm:min-h-[140px] text-white bg-gradient-to-br ${gradient} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200`}
              >
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-white/70" />
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-snug text-white mt-2">
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
