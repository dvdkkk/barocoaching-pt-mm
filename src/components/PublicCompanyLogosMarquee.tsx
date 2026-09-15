import React from 'react';

interface LogoItem {
  id: string;
  name: string;
  render: () => React.ReactNode;
}

// Top Row: 12 Public Organizations (logo_com1 ~ logo_com12)
const PUBLIC_ROW1_LOGOS: LogoItem[] = [
  // 1. 우체국물류지원단 (logo_com1.jpg)
  {
    id: 'pola',
    name: '우체국물류지원단',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#E50012] flex flex-col items-center justify-center text-white shrink-0 relative overflow-hidden shadow-xs">
          <svg viewBox="0 0 40 40" className="w-6 h-6">
            <path d="M 5 28 C 12 18, 22 14, 35 12 C 25 18, 16 26, 12 34" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 8 20 C 15 12, 26 8, 38 7" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <text x="20" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">POLA</text>
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">우체국물류지원단</span>
          <span className="text-[9px] text-slate-600 font-medium tracking-tighter">Korea Postal Logistics Agency</span>
        </div>
      </div>
    )
  },
  // 2. 예술경영지원센터 (logo_com2.jpg)
  {
    id: 'kams',
    name: '예술경영지원센터',
    render: () => (
      <div className="flex items-center gap-1.5">
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className="w-3 h-2 bg-[#84CC16] clip-triangle" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          <div className="w-4 h-3 bg-slate-900 flex items-center justify-center">
            <span className="text-[7px] text-white font-bold">수</span>
          </div>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-black text-xs sm:text-[13px] text-slate-900 tracking-tight">
            예술경영<span className="text-[#84CC16]">지원센터</span>
          </span>
          <span className="text-[9px] text-slate-600 font-medium tracking-tighter">Korea Arts Management Service</span>
        </div>
      </div>
    )
  },
  // 3. KAIST (logo_com3.jpg)
  {
    id: 'kaist',
    name: 'KAIST',
    render: () => (
      <div className="flex flex-col items-center justify-center leading-none">
        <span className="font-black text-base sm:text-lg tracking-tighter text-[#004191] italic">
          KAIST
        </span>
        <svg viewBox="0 0 60 8" className="w-14 h-1.5 mt-0.5">
          <path d="M 0 4 Q 30 0, 60 4 Q 30 8, 0 4 Z" fill="#00A0E9" />
        </svg>
      </div>
    )
  },
  // 4. 건축공간연구원 (auri) (logo_com4.jpg)
  {
    id: 'auri',
    name: '건축공간연구원',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex items-baseline font-black text-base sm:text-lg text-[#D6001C] tracking-tighter shrink-0">
          <span>(</span>
          <span className="mx-0.5">aur</span>
          <span className="text-[#D6001C]">:</span>
          <span>)</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-xs sm:text-[13px] text-slate-900 tracking-tight">건축공간연구원</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">Architecture & Urban Research Institute</span>
        </div>
      </div>
    )
  },
  // 5. 게임물관리위원회 (logo_com5.jpg)
  {
    id: 'grac',
    name: '게임물관리위원회',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-0.5 shrink-0">
          <div className="w-5 h-1.5 bg-[#00A8A8] rounded-xs" />
          <div className="flex gap-0.5">
            <div className="w-1.5 h-3.5 bg-[#00A8A8] rounded-xs" />
            <div className="w-3 h-1.5 bg-[#6366F1] self-end rounded-xs" />
          </div>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-xs sm:text-[13px] text-slate-900 tracking-tight">게임물관리위원회</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">Game Rating and Administration Committee</span>
        </div>
      </div>
    )
  },
  // 6. 경기주택도시공사 (GH) (logo_com6.jpg)
  {
    id: 'gh',
    name: '경기주택도시공사',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-gradient-to-br from-[#0066B3] to-[#004B87] rounded-md flex items-center justify-center text-white font-black text-xs shadow-xs shrink-0">
          GH
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-[#004B87] tracking-tight">경기주택도시공사</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">Gyeonggi Housing & Urban Development</span>
        </div>
      </div>
    )
  },
  // 7. 경북대학교병원 (KNUH) (logo_com7.jpg)
  {
    id: 'knuh',
    name: '경북대학교병원',
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="font-black text-sm sm:text-base tracking-tight text-[#D6001C]">
          KNUH
        </span>
        <div className="w-5 h-5 rounded-md bg-[#D6001C] flex items-center justify-center text-white text-[9px] font-bold shrink-0">
          경
        </div>
        <span className="font-bold text-xs sm:text-[13px] text-slate-900 tracking-tight">
          경북대학교병원
        </span>
      </div>
    )
  },
  // 8. 경상국립대학교병원 (GNUH) (logo_com8.jpg)
  {
    id: 'gnuh',
    name: '경상국립대학교병원',
    render: () => (
      <div className="flex items-center gap-1.5">
        <div className="w-7 h-7 rounded-full border border-[#002C6C] p-0.5 flex items-center justify-center shrink-0">
          <div className="w-full h-full rounded-full bg-[#002C6C] text-white flex items-center justify-center text-[8px] font-extrabold">
            GNUH
          </div>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-xs sm:text-[13px] text-[#002C6C] tracking-tight">경상국립대학교병원</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">Gyeongsang National University Hospital</span>
        </div>
      </div>
    )
  },
  // 9. 국가과학기술연구회 (nst) (logo_com9.jpg)
  {
    id: 'nst',
    name: '국가과학기술연구회',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center shrink-0">
          <div className="flex gap-0.5">
            <span className="w-2.5 h-1.5 rounded-full bg-[#00A3E0]" />
            <span className="w-2.5 h-1.5 rounded-full bg-[#E5007D]" />
          </div>
          <span className="font-black text-sm sm:text-base text-slate-900 leading-none">nst</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">국가과학기술연구회</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">National Research Council of Science & Tech</span>
        </div>
      </div>
    )
  },
  // 10. 국가철도공단 (KR) (logo_com10.jpg)
  {
    id: 'kr',
    name: '국가철도공단',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex items-center italic font-black text-base text-[#003B7A] tracking-tighter shrink-0">
          <span className="text-[#00A850]">K</span>
          <span>R</span>
        </div>
        <span className="font-black text-xs sm:text-sm text-[#003B7A] tracking-tight">
          국가철도공단
        </span>
      </div>
    )
  },
  // 11. 국가평생교육진흥원 (logo_com11.jpg)
  {
    id: 'nile',
    name: '국가평생교육진흥원',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-0.5 transform -skew-x-12 shrink-0">
          <span className="w-3.5 h-1 bg-[#E53935] rounded-xs" />
          <span className="w-4.5 h-1 bg-[#FB8C00] rounded-xs" />
          <span className="w-4 h-1 bg-[#43A047] rounded-xs" />
          <span className="w-3.5 h-1 bg-[#1E88E5] rounded-xs" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">국가평생교육진흥원</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">National Institute for Lifelong Education</span>
        </div>
      </div>
    )
  },
  // 12. 국립대구과학관 (SCIENTRY) (logo_com12.jpg)
  {
    id: 'scientry',
    name: '국립대구과학관',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full border-2 border-[#8CB82B] flex items-center justify-center text-[#8CB82B] font-black text-xs shrink-0">
          S
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-[10px] text-[#6A941C] tracking-wider uppercase">SCIENTRY</span>
          <span className="font-bold text-xs sm:text-[13px] text-slate-900 tracking-tight">국립대구과학관</span>
        </div>
      </div>
    )
  }
];

// Bottom Row: 12 Public Organizations (logo_com13 ~ logo_com24)
const PUBLIC_ROW2_LOGOS: LogoItem[] = [
  // 13. 국립생태원 (logo_com13.jpg)
  {
    id: 'nie',
    name: '국립생태원',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center gap-0.5 shrink-0">
          <div className="flex gap-0.5">
            <span className="w-1.5 h-2 rounded-full bg-[#E5007D] transform -rotate-45" />
            <span className="w-2 h-2 rounded-full bg-[#00A850]" />
          </div>
          <div className="flex gap-0.5">
            <span className="w-2 h-2 rounded-full bg-[#009FE3]" />
            <span className="w-2 h-2.5 rounded-full bg-[#8CB82B] transform rotate-45" />
          </div>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-black text-xs sm:text-[13px] text-[#006838] tracking-tight">국립생태원</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">NATIONAL INSTITUTE OF ECOLOGY</span>
        </div>
      </div>
    )
  },
  // 14. 국립암센터 (logo_com14.jpg)
  {
    id: 'ncc',
    name: '국립암센터',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full overflow-hidden flex flex-wrap shrink-0 border border-slate-200">
          <div className="w-1/2 h-1/2 bg-[#F5A623]" />
          <div className="w-1/2 h-1/2 bg-[#009944]" />
          <div className="w-1/2 h-1/2 bg-[#E60012]" />
          <div className="w-1/2 h-1/2 bg-[#005BAC]" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">국립암센터</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">NATIONAL CANCER CENTER</span>
        </div>
      </div>
    )
  },
  // 15. 국립해양과학관 (logo_com15.jpg)
  {
    id: 'kosm',
    name: '국립해양과학관',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 50 30" className="w-6 h-4 shrink-0">
          <path d="M 5 20 C 15 5, 30 5, 45 15 C 35 25, 20 25, 5 20 Z" fill="none" stroke="#00778B" strokeWidth="3" />
          <path d="M 10 18 C 22 10, 32 10, 42 16" fill="none" stroke="#F58220" strokeWidth="2.5" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-[#004B87] tracking-tight">국립해양과학관</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">NATIONAL OCEAN SCIENCE MUSEUM</span>
        </div>
      </div>
    )
  },
  // 16. 해양환경공단 (KOEM) (logo_com16.jpg)
  {
    id: 'koem',
    name: '해양환경공단',
    render: () => (
      <div className="flex items-center gap-2">
        <span className="font-black text-sm sm:text-base text-[#0066B3] tracking-tighter">
          K<span className="text-[#00A0E9]">O</span>EM
        </span>
        <span className="font-extrabold text-xs sm:text-sm text-[#003B7A] tracking-tight">
          해양환경공단
        </span>
      </div>
    )
  },
  // 17. 한전원자력연료 (KNF) (logo_com17.jpg)
  {
    id: 'knf',
    name: '한전원자력연료',
    render: () => (
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-full bg-[#E50012] flex items-center justify-center text-white text-[8px] font-black shrink-0">
          KNF
        </div>
        <div className="flex items-center gap-1">
          <span className="font-extrabold text-xs sm:text-[13px] text-[#002C6C] tracking-tight">한전원자력연료</span>
          <span className="text-[10px] text-slate-600 font-medium">| 주</span>
        </div>
      </div>
    )
  },
  // 18. 한국저작권보호원 (logo_com18.jpg)
  {
    id: 'kcopa',
    name: '한국저작권보호원',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full border-2 border-[#0072CE] flex items-center justify-center shrink-0">
          <div className="w-2.5 h-2.5 bg-[#0072CE] transform rotate-45" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">한국저작권보호원</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">KOREA COPYRIGHT PROTECTION AGENCY</span>
        </div>
      </div>
    )
  },
  // 19. 한국에너지공단 (logo_com19.jpg)
  {
    id: 'energy',
    name: '한국에너지공단',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-[#004B87] flex items-center justify-center text-white text-[10px] font-black shrink-0">
          E
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">한국에너지공단</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">KOREA ENERGY AGENCY</span>
        </div>
      </div>
    )
  },
  // 20. 한국식품산업클러스터진흥원 (FOODPOLIS) (logo_com20.jpg)
  {
    id: 'foodpolis',
    name: '한국식품산업클러스터진흥원',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex items-center shrink-0">
          <div className="w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 30 20" className="w-5 h-3.5">
              <path d="M 0 15 A 15 15 0 0 1 30 15 Z" fill="#E53935" />
              <path d="M 5 15 A 10 10 0 0 1 25 15 Z" fill="#FB8C00" />
              <path d="M 10 15 A 5 5 0 0 1 20 15 Z" fill="#43A047" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-black text-[10px] sm:text-xs text-[#5C2D16] tracking-tight">FOODPOLIS</span>
          <span className="font-bold text-[11px] sm:text-xs text-slate-800 tracking-tight">한국식품산업클러스터진흥원</span>
        </div>
      </div>
    )
  },
  // 21. 한국석유공사 (KNOC) (logo_com21.jpg)
  {
    id: 'knoc',
    name: '한국석유공사',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex items-center font-black text-sm sm:text-base tracking-tighter shrink-0">
          <div className="w-4 h-4 rounded-full bg-[#E50012] mr-0.5" />
          <span className="text-[#005BAC]">NOC</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">한국석유공사</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">KOREA NATIONAL OIL CORPORATION</span>
        </div>
      </div>
    )
  },
  // 22. 한국소비자원 (logo_com22.jpg)
  {
    id: 'kca',
    name: '한국소비자원',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex items-center shrink-0">
          <div className="w-4 h-4 rounded-full border-2 border-[#5B9BD5] -mr-1.5" />
          <div className="w-4 h-4 rounded-full border-2 border-[#ED7D31]" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">한국소비자원</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">Korea Consumer Agency</span>
        </div>
      </div>
    )
  },
  // 23. 한국가스공사 (KOGAS) (logo_com23.jpg)
  {
    id: 'kogas',
    name: '한국가스공사',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#0066B3] flex items-center justify-center p-1 shrink-0">
          <div className="w-2 h-4 bg-white rounded-full" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-black text-xs sm:text-sm text-slate-800 tracking-wider">KOGAS</span>
          <span className="text-[8px] text-slate-600 font-medium tracking-tighter">KOREA GAS CORPORATION</span>
        </div>
      </div>
    )
  },
  // 24. APEC 기후센터 (APCC) (logo_com24.jpg)
  {
    id: 'apcc',
    name: 'APEC 기후센터',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#00A0E9] to-[#004B87] flex items-center justify-center text-white text-[8px] font-bold shrink-0 relative">
          <div className="w-full h-0.5 bg-white transform rotate-45" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-black text-xs sm:text-sm text-slate-900 tracking-wider">APCC</span>
          <span className="font-bold text-[11px] text-slate-700 tracking-tight">APEC 기후센터</span>
        </div>
      </div>
    )
  }
];

export const PublicCompanyLogosMarquee: React.FC = () => {
  // Duplicated for seamless infinite loop
  const topRow = [...PUBLIC_ROW1_LOGOS, ...PUBLIC_ROW1_LOGOS, ...PUBLIC_ROW1_LOGOS];
  const bottomRow = [...PUBLIC_ROW2_LOGOS, ...PUBLIC_ROW2_LOGOS, ...PUBLIC_ROW2_LOGOS];

  return (
    <section className="bg-slate-50 py-10 border-b border-slate-200/80 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto relative px-2">
        {/* Soft edge fade gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="space-y-4">
          {/* Row 1: 12 Logos flowing right to left (animate-marquee-left) */}
          <div className="overflow-hidden flex">
            <div className="animate-marquee-left flex gap-3.5 py-1">
              {topRow.map((item, idx) => (
                <div
                  key={`pub-r1-${item.id}-${idx}`}
                  className="h-14 sm:h-16 w-48 sm:w-56 px-4 rounded-xl border border-slate-200/90 bg-white flex items-center justify-center shadow-2xs hover:shadow-sm hover:border-blue-300 transition-all duration-200 shrink-0"
                  title={item.name}
                >
                  {item.render()}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: 12 Logos flowing left to right (animate-marquee-right) */}
          <div className="overflow-hidden flex">
            <div className="animate-marquee-right flex gap-3.5 py-1">
              {bottomRow.map((item, idx) => (
                <div
                  key={`pub-r2-${item.id}-${idx}`}
                  className="h-14 sm:h-16 w-48 sm:w-56 px-4 rounded-xl border border-slate-200/90 bg-white flex items-center justify-center shadow-2xs hover:shadow-sm hover:border-blue-300 transition-all duration-200 shrink-0"
                  title={item.name}
                >
                  {item.render()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
