import React from 'react';
import { PASSERS_LIST, Passer } from '../data/contentData';
import { Award, Trophy, CheckCircle } from 'lucide-react';

interface PasserTickerProps {
  passers?: Passer[];
}

export const PasserTicker: React.FC<PasserTickerProps> = ({ passers = PASSERS_LIST }) => {
  // Use duplicated list for seamless vertical looping
  const displayPassers = [...passers, ...passers];

  return (
    <section
      className="relative bg-slate-900 text-white overflow-hidden py-14 sm:py-18 border-y border-slate-800"
      id="passers-ticker-banner"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-900/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title Area */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold mb-3 border border-blue-500/30">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>OVER 300+ CONSECUTIVE PASSES</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-200 tracking-tight mb-2">
              바로코칭 수강생 여러분
            </h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              합격을 진심으로 축하드립니다!
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              체계적인 1:1 맞춤형 컨설팅과 정밀 면접 코칭으로 합격의 문을 연 바로코칭 합격자 명단입니다.
            </p>
          </div>

          {/* Right Passers Rolling Ticker / List */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700/80 p-5 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-3 text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-400">
                  <Award className="w-4 h-4 text-amber-400" />
                  합격자 현황
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  업데이트
                </span>
              </div>

              {/* Seamless Flowing Upward Marquee Container */}
              <div className="relative h-80 overflow-hidden select-none">
                {/* Top / Bottom Soft Fade Masks */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-slate-800/90 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-slate-800/90 to-transparent z-10 pointer-events-none" />

                {/* Animated Flowing List */}
                <div
                  className="animate-vertical-ticker space-y-2.5 py-1"
                  style={{ animationDuration: `${Math.round(passers.length * (200 / 120))}s` }}
                >
                  {displayPassers.map((passer, idx) => (
                    <div
                      key={`${passer.company}-${passer.name}-${idx}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-slate-700/50 transition-colors shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                        <span className="font-bold text-slate-100 text-sm sm:text-base">
                          {passer.company}
                        </span>
                        <span className="text-slate-300 text-sm">
                          {passer.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40 shrink-0">
                        <CheckCircle className="w-3 h-3" />
                        <span>합격을 축하드립니다</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
