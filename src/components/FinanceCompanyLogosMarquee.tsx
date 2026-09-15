import React from 'react';

interface LogoItem {
  id: string;
  name: string;
  render: () => React.ReactNode;
}

// Top Row: 12 Finance/Card/Bank Organizations (logo_com1 ~ logo_com12)
const FINANCE_ROW1_LOGOS: LogoItem[] = [
  // 1. 비씨카드 (logo_com1.jpg)
  {
    id: 'bc-card',
    name: '비씨카드',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-[#ED1C24] flex items-center justify-center text-white font-black text-xs shrink-0 shadow-xs">
          BC
        </div>
        <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">
          비씨카드
        </span>
      </div>
    )
  },
  // 2. DB생명 (logo_com2.jpg)
  {
    id: 'db-life',
    name: 'DB생명',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5 shrink-0">
          <div className="w-2.5 h-3.5 bg-[#F26522] rounded-xs" />
          <div className="w-2.5 h-4.5 bg-[#00AEEF] rounded-xs" />
          <div className="w-2.5 h-5 bg-[#8CC63F] rounded-xs" />
        </div>
        <span className="font-extrabold text-xs sm:text-[13px] text-[#006837] tracking-tight">
          DB생명
        </span>
      </div>
    )
  },
  // 3. FPcenter (logo_com3.jpg)
  {
    id: 'fp-center',
    name: 'FPcenter',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5 shrink-0">
          <div className="w-2 h-3.5 bg-[#8CC63F] rounded-t-full" />
          <div className="w-2.5 h-4.5 bg-[#00AEEF] rounded-t-full" />
          <div className="w-2 h-3.5 bg-[#8CC63F] rounded-t-full" />
        </div>
        <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">
          FPcenter
        </span>
      </div>
    )
  },
  // 4. KB증권 (logo_com4.jpg)
  {
    id: 'kb-sec',
    name: 'KB증권',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 50 50" className="w-5 h-5 shrink-0 text-amber-500">
          <polygon points="25,4 31,18 46,20 34,31 38,46 25,37 12,46 16,31 4,20 19,18" fill="#FFB800" />
        </svg>
        <span className="font-bold text-xs sm:text-[13px] text-slate-700 tracking-tight">
          KB<span className="text-slate-800 font-extrabold ml-1">증권</span>
        </span>
      </div>
    )
  },
  // 5. KDB생명 (산업은행계열) (logo_com5.jpg)
  {
    id: 'kdb-life',
    name: 'KDB생명',
    render: () => (
      <div className="flex flex-col leading-none">
        <span className="text-[8px] font-bold text-[#003366] tracking-tighter mb-0.5">산업은행계열</span>
        <span className="font-black text-xs sm:text-[13px] text-[#003366] tracking-tight">KDB생명</span>
      </div>
    )
  },
  // 6. KDB캐피탈 (logo_com6.jpg)
  {
    id: 'kdb-cap',
    name: 'KDB캐피탈',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex gap-1 shrink-0">
          <div className="w-2 h-4 bg-[#0066B3] transform -skew-x-12" />
          <div className="w-2 h-4 bg-[#00AEEF] transform -skew-x-12" />
        </div>
        <span className="font-extrabold text-xs sm:text-[13px] text-[#003366] tracking-tight">
          KDB캐피탈
        </span>
      </div>
    )
  },
  // 7. ktb투자증권 (logo_com7.jpg)
  {
    id: 'ktb',
    name: 'KTB투자증권',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 grid grid-cols-2 gap-0.5 shrink-0">
          <div className="bg-[#0054A6]" />
          <div className="bg-[#F7931E]" />
          <div className="bg-[#00A651]" />
          <div className="bg-[#ED1C24]" />
        </div>
        <span className="font-black text-xs sm:text-[13px] text-[#003366] tracking-tight">
          ktb <span className="font-medium text-slate-700">투자증권</span>
        </span>
      </div>
    )
  },
  // 8. MG손해보험 (logo_com8.jpg)
  {
    id: 'mg-ins',
    name: 'MG손해보험',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex items-center shrink-0">
          <div className="w-4 h-4 rounded-full bg-[#0072CE] -mr-1" />
          <div className="w-4 h-4 rounded-full bg-[#00A9E0] -mr-1" />
          <div className="w-4 h-4 rounded-full bg-[#00BCE4]" />
        </div>
        <span className="font-extrabold text-xs sm:text-[13px] text-[#003366] tracking-tight">
          MG손해보험
        </span>
      </div>
    )
  },
  // 9. KB국민은행 (logo_com9.jpg)
  {
    id: 'kb-bank',
    name: 'KB국민은행',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 50 50" className="w-5 h-5 shrink-0">
          <polygon points="25,4 31,18 46,20 34,31 38,46 25,37 12,46 16,31 4,20 19,18" fill="#FFB800" />
        </svg>
        <span className="font-bold text-xs sm:text-[13px] text-slate-800 tracking-tight">
          KB<span className="font-extrabold ml-1">국민은행</span>
        </span>
      </div>
    )
  },
  // 10. BNK경남은행 (logo_com10.jpg)
  {
    id: 'bnk',
    name: 'BNK경남은행',
    render: () => (
      <div className="flex items-center gap-2">
        <span className="font-black text-sm text-[#ED1C24] tracking-tighter">BNK</span>
        <span className="font-bold text-xs sm:text-[13px] text-slate-800 tracking-tight">경남은행</span>
      </div>
    )
  },
  // 11. 신한은행 (logo_com11.jpg)
  {
    id: 'shinhan-bank',
    name: '신한은행',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#0046FF] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-xs">
          S
        </div>
        <span className="font-extrabold text-xs sm:text-[13px] text-[#0046FF] tracking-tight">
          신한은행
        </span>
      </div>
    )
  },
  // 12. 신한라이프 (logo_com12.jpg)
  {
    id: 'shinhan-life',
    name: '신한라이프',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#0046FF] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-xs">
          S
        </div>
        <span className="font-extrabold text-xs sm:text-[13px] text-[#0046FF] tracking-tight">
          신한라이프
        </span>
      </div>
    )
  }
];

// Bottom Row: 12 Finance/Card/Bank Organizations (logo_com13 ~ logo_com24)
const FINANCE_ROW2_LOGOS: LogoItem[] = [
  // 13. 흥국화재 (logo_com13.jpg)
  {
    id: 'heungkuk',
    name: '흥국화재',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-0.5 shrink-0">
          <div className="w-3 h-3 bg-[#E5007D]" />
          <div className="w-3 h-3 bg-[#E5007D]" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-black text-xs sm:text-[13px] text-[#2E1A47] tracking-tight">Heungkuk</span>
          <span className="font-bold text-[11px] text-[#2E1A47]">흥국화재</span>
        </div>
      </div>
    )
  },
  // 14. 한국캐피탈(주) (logo_com14.jpg)
  {
    id: 'hankook-cap',
    name: '한국캐피탈(주)',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="bg-[#ED1C24] text-white px-1.5 py-0.5 font-black text-xs rounded-xs shrink-0">
          M+
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">한국캐피탈(주)</span>
          <span className="text-[8px] text-slate-500 tracking-tighter">HANKOOK CAPITAL</span>
        </div>
      </div>
    )
  },
  // 15. 현대카드 (logo_com15.jpg)
  {
    id: 'hyundai-card',
    name: '현대카드',
    render: () => (
      <div className="flex items-center px-3 py-1 rounded-lg border-2 border-slate-900">
        <span className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight">
          Hyundai Card
        </span>
      </div>
    )
  },
  // 16. 삼성카드 (logo_com16.jpg)
  {
    id: 'samsung-card',
    name: '삼성카드',
    render: () => (
      <div className="flex items-center">
        <span className="font-black text-sm sm:text-base text-[#002855] tracking-tight">
          Samsung Card
        </span>
      </div>
    )
  },
  // 17. 수호천사 동양생명 (logo_com17.jpg)
  {
    id: 'tongyang-life',
    name: '수호천사 동양생명',
    render: () => (
      <div className="flex items-center gap-2">
        <span className="font-extrabold text-xs sm:text-[13px] text-[#009EE2] tracking-tight">
          수호천사동양생명
        </span>
        <div className="flex gap-0.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-t-full border border-[#009EE2]" />
          <div className="w-2.5 h-2.5 rounded-t-full border border-[#009EE2]" />
        </div>
      </div>
    )
  },
  // 18. The-K 손해보험 (logo_com18.jpg)
  {
    id: 'the-k',
    name: 'The-K 손해보험',
    render: () => (
      <div className="flex flex-col leading-tight">
        <span className="text-[8px] text-slate-600 font-medium">더케이 한국교직원공제회</span>
        <div className="flex items-center gap-1 font-black text-xs sm:text-sm text-[#003366]">
          <span>The</span>
          <span className="text-red-600">·</span>
          <span>K</span>
          <span className="text-slate-800 font-bold text-xs ml-0.5">손해보험</span>
        </div>
      </div>
    )
  },
  // 19. 대신자산운용 (logo_com19.jpg)
  {
    id: 'daishin',
    name: '대신자산운용',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-xs sm:text-sm text-slate-900 tracking-tight">Daishin</span>
          <span className="text-[9px] text-slate-600 font-medium">Asset Management</span>
        </div>
        <div className="w-5 h-5 bg-[#4A4A4A] transform rotate-45 shrink-0" />
      </div>
    )
  },
  // 20. 롯데캐피탈 (logo_com20.jpg)
  {
    id: 'lotte-cap',
    name: '롯데캐피탈',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-[#ED1C24] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-xs">
          l.
        </div>
        <span className="font-extrabold text-xs sm:text-[13px] text-[#ED1C24] tracking-tight">
          롯데캐피탈
        </span>
      </div>
    )
  },
  // 21. 우리은행 (logo_com21.jpg)
  {
    id: 'woori-bank',
    name: '우리은행',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#0066B3] flex items-center justify-center text-white text-xs shrink-0 shadow-xs">
          W
        </div>
        <span className="font-extrabold text-xs sm:text-[13px] text-[#0066B3] tracking-tight">
          우리은행
        </span>
      </div>
    )
  },
  // 22. 키움증권 (logo_com22.jpg)
  {
    id: 'kiwoom',
    name: '키움증권',
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="font-black text-xs sm:text-sm text-[#003366] tracking-tight">
          키움증권
        </span>
        <div className="w-4 h-4 bg-[#E5007D] transform rotate-45 flex items-center justify-center text-white text-[8px] font-bold">
          ↗
        </div>
      </div>
    )
  },
  // 23. 하나은행 (logo_com23.jpg)
  {
    id: 'hana-bank',
    name: '하나은행',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-[#009688] flex items-center justify-center text-white text-[9px] font-bold shrink-0">
          H
        </div>
        <span className="font-extrabold text-xs sm:text-[13px] text-slate-900 tracking-tight">
          하나은행
        </span>
      </div>
    )
  },
  // 24. SC제일은행 (logo_com24.jpg)
  {
    id: 'sc-bank',
    name: 'SC제일은행',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-[10px] text-slate-700 tracking-tighter">standard chartered</span>
          <span className="font-black text-xs sm:text-[13px] text-[#003366] tracking-tight">SC제일은행</span>
        </div>
      </div>
    )
  }
];

export const FinanceCompanyLogosMarquee: React.FC = () => {
  // Duplicated for seamless infinite loop
  const topRow = [...FINANCE_ROW1_LOGOS, ...FINANCE_ROW1_LOGOS, ...FINANCE_ROW1_LOGOS];
  const bottomRow = [...FINANCE_ROW2_LOGOS, ...FINANCE_ROW2_LOGOS, ...FINANCE_ROW2_LOGOS];

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
                  key={`fin-r1-${item.id}-${idx}`}
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
                  key={`fin-r2-${item.id}-${idx}`}
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
