import React from 'react';
import { Target, Sparkles } from 'lucide-react';

export const EncouragementBanner: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-gradient-to-r from-blue-50 via-indigo-50/40 to-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Photo & Typography Background */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA5MTFfMjY0/MDAxNzg5MTIwMTM4NzE0.9o7wPaOTMo9UZLC_5NjaZOjNdXdxK3Vu0jo33pNq8RYg.T8EItxTKwOjAb1FhvwRrlnRPKbMt3UJKdGLT95csepAg.PNG/%EB%B0%94%EB%A1%9C%EC%BD%94%EC%B9%AD02.png?type=w966"
                alt="바로코칭 대기업 채용 응원"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            {/* Watermark in background */}
            <span className="absolute -bottom-6 -left-4 text-6xl sm:text-7xl font-black text-slate-200/50 -z-10 pointer-events-none select-none tracking-tighter">
              BARO
            </span>
          </div>

          {/* Right Text Box */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
              <Target className="w-3.5 h-3.5 text-blue-600" />
              <span>DREAM ENTERPRISE CHALLENGE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              대기업 채용은 많은 사람들의 꿈이지만,<br />
              <span className="text-blue-600">쉽게 이루어지지 않습니다.</span>
            </h3>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              하지만, 트렌드와 특징을 잘 파악하고있는 <strong className="text-slate-900 font-bold">[바로코칭]</strong>에서 체계적으로 준비한다면 가능성은 충분합니다.
            </p>

            <p className="text-slate-600 text-sm sm:text-base font-medium">
              대기업 채용에 도전하는 모든 분들을 진심으로 응원합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
