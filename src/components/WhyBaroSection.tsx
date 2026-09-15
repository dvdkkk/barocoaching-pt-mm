import React from 'react';
import { Award, Compass, ShieldCheck, Clock } from 'lucide-react';

export const WhyBaroSection: React.FC = () => {
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
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            THE BARO DIFFERENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            WHY? 컨설팅은 <span className="text-blue-600">바로코칭인가?</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
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
