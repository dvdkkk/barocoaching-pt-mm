import React from 'react';

interface LogoItem {
  id: string;
  name: string;
  render: () => React.ReactNode;
}

// Row 1 Logos (10 Companies)
const ROW1_LOGOS: LogoItem[] = [
  {
    id: 'cj',
    name: 'CJ CHEILJEDANG',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 100 100" className="w-7 h-7 shrink-0">
          {/* Blue top petal */}
          <path d="M 50 20 C 65 20, 68 40, 50 48 C 32 40, 35 20, 50 20 Z" fill="#0068B7" />
          {/* Orange right petal */}
          <path d="M 78 55 C 78 70, 60 72, 52 54 C 60 36, 78 40, 78 55 Z" fill="#F7941D" />
          {/* Red bottom-left petal */}
          <path d="M 28 65 C 20 52, 35 38, 48 50 C 42 66, 32 75, 28 65 Z" fill="#E61E25" />
        </svg>
        <div className="flex items-baseline gap-1">
          <span className="font-extrabold text-sm tracking-tighter text-slate-900">CJ</span>
          <span className="font-semibold text-xs tracking-tight text-slate-800">CHEILJEDANG</span>
        </div>
      </div>
    )
  },
  {
    id: 'gaonchips',
    name: 'GAONCHIPS',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 60 60" className="w-6 h-6 shrink-0">
          <rect x="10" y="10" width="30" height="30" rx="3" fill="#1E40AF" transform="rotate(15 25 25)" />
          <rect x="22" y="15" width="26" height="26" rx="2" fill="#38BDF8" transform="rotate(15 35 28)" />
          <rect x="18" y="22" width="24" height="24" rx="2" fill="#0F172A" transform="rotate(15 30 34)" />
        </svg>
        <span className="font-extrabold text-xs sm:text-sm tracking-wider text-slate-900 uppercase">
          GAONCHIPS
        </span>
      </div>
    )
  },
  {
    id: 'kb',
    name: 'KB손해보험',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 50 50" className="w-5 h-5 shrink-0 text-amber-500">
          <polygon
            points="25,4 31,18 46,20 34,31 38,46 25,37 12,46 16,31 4,20 19,18"
            fill="#FFB800"
          />
        </svg>
        <span className="font-bold text-xs sm:text-sm text-slate-700">
          KB<span className="text-slate-600 font-medium ml-1">손해보험</span>
        </span>
      </div>
    )
  },
  {
    id: 'hd-hyundai',
    name: 'HD현대중공업',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 50 50" className="w-6 h-6 shrink-0">
          {/* HD green chevron */}
          <polygon points="12,10 28,25 12,40 4,40 18,25 4,10" fill="#00A651" />
          <polygon points="24,10 40,25 24,40 32,40 48,25 32,10" fill="#003580" />
        </svg>
        <span className="font-extrabold text-xs sm:text-sm tracking-tight text-[#003580]">
          HD현대중공업
        </span>
      </div>
    )
  },
  {
    id: 'hyundai-transys',
    name: 'HYUNDAI TRANSYS',
    render: () => (
      <div className="flex flex-col items-center leading-none">
        <span className="font-black text-[10px] sm:text-xs tracking-wider text-[#002C6C]">
          HYUNDAI
        </span>
        <span className="font-extrabold text-xs sm:text-sm tracking-tighter text-[#002C6C] flex items-center">
          TRA<span className="text-sky-500">N</span>SYS
        </span>
      </div>
    )
  },
  {
    id: 'lg',
    name: 'LG',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 100 100" className="w-6 h-6 shrink-0">
          <circle cx="50" cy="50" r="46" fill="#C40043" />
          {/* L & G white stylized face */}
          <path
            d="M 40 30 L 40 68 L 65 68"
            fill="none"
            stroke="#ffffff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="42" cy="42" r="4.5" fill="#ffffff" />
          <path
            d="M 68 40 A 28 28 0 0 0 26 54 A 28 28 0 0 0 68 68"
            fill="none"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-black text-base sm:text-lg tracking-tight text-slate-700">
          LG
        </span>
      </div>
    )
  },
  {
    id: 'hanwha',
    name: 'Hanwha',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 60 50" className="w-7 h-6 shrink-0">
          <ellipse cx="22" cy="25" rx="14" ry="18" fill="none" stroke="#F37321" strokeWidth="4" transform="rotate(-25 22 25)" />
          <ellipse cx="32" cy="25" rx="14" ry="18" fill="none" stroke="#EA5514" strokeWidth="4" transform="rotate(30 32 25)" />
          <ellipse cx="27" cy="25" rx="13" ry="16" fill="none" stroke="#FDB913" strokeWidth="3.5" transform="rotate(5 27 25)" />
        </svg>
        <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900">
          Hanwha
        </span>
      </div>
    )
  },
  {
    id: 'sbs',
    name: 'SBS',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 50 50" className="w-6 h-6 shrink-0">
          <circle cx="25" cy="25" r="22" fill="#005BAA" />
          <circle cx="25" cy="25" r="11" fill="#F4911E" />
        </svg>
        <span className="font-black text-sm sm:text-base tracking-wider text-[#005BAA]">
          SBS
        </span>
      </div>
    )
  },
  {
    id: 'ak-plaza',
    name: 'AK PLAZA',
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="font-light text-base sm:text-lg tracking-tight text-black flex items-center">
          <span className="font-extrabold">∧</span>K
        </span>
        <span className="font-bold text-xs sm:text-sm tracking-widest text-black ml-1">
          PLAZA
        </span>
      </div>
    )
  },
  {
    id: 'sk',
    name: 'SK',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 70 50" className="w-7 h-5 shrink-0">
          {/* Wings of happiness */}
          <path d="M 35 25 C 25 10, 10 12, 10 28 C 10 38, 25 40, 35 25 Z" fill="#E61E25" />
          <path d="M 35 25 C 45 10, 60 12, 60 28 C 60 38, 45 40, 35 25 Z" fill="#F7941D" />
        </svg>
        <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#E61E25]">
          SK
        </span>
      </div>
    )
  }
];

// Row 2 Logos (10 Companies)
const ROW2_LOGOS: LogoItem[] = [
  {
    id: 'hanjin',
    name: 'HANJIN',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#002C6C] flex items-center justify-center text-sky-400 font-extrabold text-xs">
          H
        </div>
        <span className="font-extrabold text-xs sm:text-sm tracking-wide text-[#002C6C]">
          HANJIN
        </span>
      </div>
    )
  },
  {
    id: 'hj',
    name: 'HJ중공업',
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="font-extrabold text-sm sm:text-base tracking-tighter text-[#1C3F3A]">
          HJ
        </span>
        <div className="flex flex-col gap-0.5 transform -skew-x-12">
          <span className="w-3 h-1 rounded-full bg-[#2E7D32]" />
          <span className="w-3 h-1 rounded-full bg-[#4CAF50]" />
          <span className="w-3 h-1 rounded-full bg-[#81C784]" />
        </div>
        <span className="font-bold text-xs sm:text-sm text-[#1C3F3A]">
          중공업
        </span>
      </div>
    )
  },
  {
    id: 'kcc',
    name: 'KCC',
    render: () => (
      <div className="flex items-center justify-center">
        <div className="bg-[#003B7A] text-white px-2.5 py-0.5 rounded-sm transform -skew-x-12 relative flex items-center shadow-2xs">
          <div className="absolute left-1 top-0 bottom-0 w-1 bg-red-600 transform skew-x-12" />
          <span className="font-black text-xs sm:text-sm tracking-wider transform skew-x-12 ml-1">
            KCC
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'kakao-commerce',
    name: 'kakaocommerce',
    render: () => (
      <div className="flex items-center">
        <span className="font-bold text-xs sm:text-sm text-[#F59E0B]">
          kakao
        </span>
        <span className="font-medium text-xs sm:text-sm text-slate-700 ml-0.5">
          commerce
        </span>
      </div>
    )
  },
  {
    id: 'gs-shop',
    name: 'GS SHOP',
    render: () => (
      <div className="flex items-center font-black text-xs sm:text-sm text-slate-800 tracking-tight">
        <span>GS SH</span>
        <span className="text-[#84CC16] font-bold mx-0.5">(O)</span>
        <span>P</span>
      </div>
    )
  },
  {
    id: 'chosun',
    name: '조선일보',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 50 50" className="w-5 h-5 shrink-0">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#D32F2F" strokeWidth="8" strokeDasharray="90 30" transform="rotate(-30 25 25)" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-[9px] font-medium text-slate-400 tracking-tighter">ChosunMedia</span>
          <span className="font-bold text-xs sm:text-sm text-slate-900 tracking-tight">조선일보</span>
        </div>
      </div>
    )
  },
  {
    id: 'incheon-airport',
    name: '인천국제공항공사',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 50 40" className="w-5 h-4 shrink-0">
          <path d="M 5 25 C 15 15, 30 10, 45 15 C 35 25, 20 30, 5 25 Z" fill="#00778B" />
          <path d="M 12 18 C 20 10, 32 8, 42 12" fill="none" stroke="#F58220" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-[9px] font-bold text-[#00778B]">Incheon Airport</span>
          <span className="font-semibold text-[11px] text-slate-700">인천국제공항공사</span>
        </div>
      </div>
    )
  },
  {
    id: 'ottogi',
    name: '주식회사 오뚜기',
    render: () => (
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-full border-2 border-red-600 bg-red-600 flex items-center justify-center p-0.5">
          <div className="w-full h-full rounded-full bg-amber-400 flex items-center justify-center text-[9px] font-black text-red-600">
            😊
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[10px] text-slate-500 font-medium">주식회사</span>
          <span className="font-extrabold text-xs sm:text-sm text-[#004B97] tracking-tight">오뚜기</span>
        </div>
      </div>
    )
  },
  {
    id: 'snt-motiv',
    name: 'SNT Motiv',
    render: () => (
      <div className="flex items-center gap-1">
        <span className="text-red-600 font-black text-base italic leading-none">/</span>
        <span className="font-extrabold text-xs sm:text-sm text-[#002C6C] tracking-tight">
          SNT <span className="font-bold text-slate-800">Motiv</span>
        </span>
      </div>
    )
  },
  {
    id: 'oci',
    name: 'OCI',
    render: () => (
      <div className="flex items-center">
        <span className="font-black text-base sm:text-lg tracking-tight text-[#E60028]">
          OC<span className="italic">I</span>
        </span>
      </div>
    )
  }
];

export const CompanyLogosMarquee: React.FC = () => {
  // Duplicated for seamless infinite loop
  const topRow = [...ROW1_LOGOS, ...ROW1_LOGOS, ...ROW1_LOGOS];
  const bottomRow = [...ROW2_LOGOS, ...ROW2_LOGOS, ...ROW2_LOGOS];

  return (
    <section className="bg-slate-50 py-10 border-b border-slate-200/80 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto relative px-2">
        {/* Soft edge fade gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="space-y-4">
          {/* Row 1: 10 Logos flowing right to left (animate-marquee-left) */}
          <div className="overflow-hidden flex">
            <div className="animate-marquee-left flex gap-3.5 py-1">
              {topRow.map((item, idx) => (
                <div
                  key={`r1-${item.id}-${idx}`}
                  className="h-14 sm:h-16 w-44 sm:w-52 px-4 rounded-xl border border-slate-200/90 bg-white flex items-center justify-center shadow-2xs hover:shadow-sm hover:border-blue-300 transition-all duration-200 shrink-0"
                  title={item.name}
                >
                  {item.render()}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: 10 Logos flowing left to right (animate-marquee-right) */}
          <div className="overflow-hidden flex">
            <div className="animate-marquee-right flex gap-3.5 py-1">
              {bottomRow.map((item, idx) => (
                <div
                  key={`r2-${item.id}-${idx}`}
                  className="h-14 sm:h-16 w-44 sm:w-52 px-4 rounded-xl border border-slate-200/90 bg-white flex items-center justify-center shadow-2xs hover:shadow-sm hover:border-blue-300 transition-all duration-200 shrink-0"
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
