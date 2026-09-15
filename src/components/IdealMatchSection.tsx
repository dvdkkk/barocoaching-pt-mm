import React from 'react';
import { HeartHandshake, Sparkles, Check } from 'lucide-react';

export const IdealMatchSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white" id="ideal-match-maker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>IDEAL CANDIDATE MAKER</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              <span className="text-blue-600 font-black">[바로코칭]</span>은 대기업이<br />
              희망하는 지원자의 <span className="underline decoration-blue-500 decoration-4 underline-offset-4">이상형 메이커!</span>
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 font-semibold text-slate-900">
                여러분은 어떠한 이성을 원하시나요?
              </div>

              <p>
                누구나 자신이 원하는 이성을 만나고 싶어 하며 우리는 이것을 <strong className="text-blue-600">이상형</strong>이라고 합니다.
                당연히 가장 좋은 상대는 자신의 이상형에 꼭 들어 맞는 사람을 만나는 것이겠죠?!
                100% 일치하지 않는다면 그 다음으로는 이상형에 가까운 사람을 선택하게 됩니다.
              </p>

              <p>
                이상형을 바라는 것은 기업도 마찬가지입니다.
                저희가 생각하는 면접은 <strong className="text-slate-900">대기업이 원하는 이상형을 만나는 것!</strong><br />
                즉 대기업이 원하는 자질과 인성을 갖춘 사람을 만나기 위한 <em>소개팅</em>이라고 생각합니다.
              </p>

              <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-blue-950 font-medium leading-relaxed">
                <span className="font-bold text-blue-700">[바로코칭]</span> 전문가들이 짧은 시간 동안 주어지는 첫 만남에서 여러분을 대기업이 원하는 이상형이나 그에 가까운 지원자로 만들겠습니다.
              </div>
            </div>
          </div>

          {/* Right Image / Visual Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-50">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA5MTFfMjk0/MDAxNzg5MTIwMTM4NzMx.y0ea7OSLAiVPgmBJ3rSi2-5NzJprQ838EVUKqW7wRA4g.H4uw0dKZHbijfW36-f91wWn2Ndm64XBN0f39Ld-RwwQg.PNG/%EB%B0%94%EB%A1%9C%EC%BD%94%EC%B9%AD01.png?type=w966"
                alt="바로코칭 이상형 메이커"
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
