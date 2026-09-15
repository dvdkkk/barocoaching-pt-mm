import React from 'react';

interface ResultLogoItem {
  id: string;
  name: string;
  logoSrc?: string;
  render: () => React.ReactNode;
}

// 1. 대기업 (17 Large Enterprises)
const MAJOR_CORP_LOGOS: ResultLogoItem[] = [
  {
    id: 'cj',
    name: 'CJ제일제당',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 100 100" className="w-6 h-6 shrink-0">
          <path d="M 50 20 C 65 20, 68 40, 50 48 C 32 40, 35 20, 50 20 Z" fill="#0068B7" />
          <path d="M 78 55 C 78 70, 60 72, 52 54 C 60 36, 78 40, 78 55 Z" fill="#F7941D" />
          <path d="M 28 65 C 20 52, 35 38, 48 50 C 42 66, 32 75, 28 65 Z" fill="#E61E25" />
        </svg>
        <div className="flex items-baseline gap-1">
          <span className="font-extrabold text-sm tracking-tight text-slate-900">CJ</span>
          <span className="font-semibold text-xs tracking-tight text-slate-800">CHEILJEDANG</span>
        </div>
      </div>
    )
  },
  {
    id: 'hd-hyundai',
    name: 'HD현대중공업',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 50 50" className="w-5 h-5 shrink-0">
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
        <span className="font-black text-[9px] tracking-wider text-[#002C6C]">HYUNDAI</span>
        <span className="font-extrabold text-xs tracking-tighter text-[#002C6C] flex items-center">
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
        <svg viewBox="0 0 100 100" className="w-5 h-5 shrink-0">
          <circle cx="50" cy="50" r="46" fill="#C40043" />
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
        <span className="font-black text-sm tracking-tight text-slate-700">LG</span>
      </div>
    )
  },
  {
    id: 'hanwha',
    name: 'Hanwha',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 60 50" className="w-6 h-5 shrink-0">
          <ellipse cx="22" cy="25" rx="14" ry="18" fill="none" stroke="#F37321" strokeWidth="4" transform="rotate(-25 22 25)" />
          <ellipse cx="32" cy="25" rx="14" ry="18" fill="none" stroke="#EA5514" strokeWidth="4" transform="rotate(30 32 25)" />
          <ellipse cx="27" cy="25" rx="13" ry="16" fill="none" stroke="#FDB913" strokeWidth="3.5" transform="rotate(5 27 25)" />
        </svg>
        <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900">Hanwha</span>
      </div>
    )
  },
  {
    id: 'sbs',
    name: 'SBS',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 50 50" className="w-5 h-5 shrink-0">
          <circle cx="25" cy="25" r="22" fill="#005BAA" />
          <circle cx="25" cy="25" r="11" fill="#F4911E" />
        </svg>
        <span className="font-black text-sm tracking-wider text-[#005BAA]">SBS</span>
      </div>
    )
  },
  {
    id: 'ak-plaza',
    name: 'AK PLAZA',
    render: () => (
      <div className="flex items-center gap-1">
        <span className="font-light text-sm tracking-tight text-black flex items-center">
          <span className="font-extrabold">∧</span>K
        </span>
        <span className="font-bold text-xs tracking-widest text-black ml-1">PLAZA</span>
      </div>
    )
  },
  {
    id: 'sk',
    name: 'SK',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 70 50" className="w-6 h-4 shrink-0">
          <path d="M 35 25 C 25 10, 10 12, 10 28 C 10 38, 25 40, 35 25 Z" fill="#E61E25" />
          <path d="M 35 25 C 45 10, 60 12, 60 28 C 60 38, 45 40, 35 25 Z" fill="#F7941D" />
        </svg>
        <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#E61E25]">SK</span>
      </div>
    )
  },
  {
    id: 'hanjin',
    name: 'HANJIN',
    render: () => (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-[#002C6C] flex items-center justify-center text-sky-400 font-extrabold text-[10px]">
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
      <div className="flex items-center gap-1">
        <span className="font-extrabold text-sm tracking-tighter text-[#1C3F3A]">HJ</span>
        <div className="flex flex-col gap-0.5 transform -skew-x-12">
          <span className="w-2.5 h-0.5 rounded-full bg-[#2E7D32]" />
          <span className="w-2.5 h-0.5 rounded-full bg-[#4CAF50]" />
          <span className="w-2.5 h-0.5 rounded-full bg-[#81C784]" />
        </div>
        <span className="font-bold text-xs text-[#1C3F3A]">중공업</span>
      </div>
    )
  },
  {
    id: 'kcc',
    name: 'KCC',
    render: () => (
      <div className="flex items-center justify-center">
        <div className="bg-[#003B7A] text-white px-2 py-0.5 rounded-sm transform -skew-x-12 relative flex items-center shadow-2xs">
          <div className="absolute left-0.5 top-0 bottom-0 w-1 bg-red-600 transform skew-x-12" />
          <span className="font-black text-xs tracking-wider transform skew-x-12 ml-1">KCC</span>
        </div>
      </div>
    )
  },
  {
    id: 'kakao-commerce',
    name: 'kakaocommerce',
    render: () => (
      <div className="flex items-center">
        <span className="font-bold text-xs sm:text-sm text-[#F59E0B]">kakao</span>
        <span className="font-medium text-xs sm:text-sm text-slate-700 ml-0.5">commerce</span>
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
        <svg viewBox="0 0 50 50" className="w-4 h-4 shrink-0">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#D32F2F" strokeWidth="8" strokeDasharray="90 30" transform="rotate(-30 25 25)" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-[8px] font-medium text-slate-400 tracking-tighter">ChosunMedia</span>
          <span className="font-bold text-xs text-slate-900 tracking-tight">조선일보</span>
        </div>
      </div>
    )
  },
  {
    id: 'ottogi',
    name: '주식회사 오뚜기',
    render: () => (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full border border-red-600 bg-red-600 flex items-center justify-center p-0.5">
          <div className="w-full h-full rounded-full bg-amber-400 flex items-center justify-center text-[8px] font-black text-red-600">
            😊
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[9px] text-slate-500 font-medium">주식회사</span>
          <span className="font-extrabold text-xs text-[#004B97] tracking-tight">오뚜기</span>
        </div>
      </div>
    )
  },
  {
    id: 'snt-motiv',
    name: 'SNT Motiv',
    render: () => (
      <div className="flex items-center gap-1">
        <span className="text-red-600 font-black text-sm italic leading-none">/</span>
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
        <span className="font-black text-sm sm:text-base tracking-tight text-[#E60028]">
          OC<span className="italic">I</span>
        </span>
      </div>
    )
  }
];

// 2. 공기업 및 공공기관 (24 Public Enterprises & Institutions)
const PUBLIC_LOGOS: ResultLogoItem[] = [
  {
    id: 'pola',
    name: '우체국물류지원단',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 50 50" className="w-5 h-5 shrink-0">
          <circle cx="25" cy="25" r="22" fill="#D81E05" />
          <path d="M 12 35 C 18 20, 32 14, 45 10 C 35 18, 22 26, 12 35 Z" fill="#ffffff" opacity="0.9" />
          <path d="M 10 39 C 20 28, 30 22, 42 16 C 30 24, 18 32, 10 39 Z" fill="#ffffff" opacity="0.6" />
          <text x="25" y="38" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif">
            POLA
          </text>
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-extrabold text-xs text-slate-900 tracking-tight truncate">
            우체국물류지원단
          </span>
          <span className="text-[7.5px] font-medium text-slate-500 tracking-tighter truncate mt-0.5">
            Korea Postal Logistics Agency
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'kams',
    name: '예술경영지원센터',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <path d="M 20 5 L 32 20 L 25 20 L 20 12 L 15 20 L 8 20 Z" fill="#78A22F" />
          <rect x="18" y="20" width="4" height="15" fill="#1E293B" />
          <rect x="8" y="26" width="24" height="3" fill="#1E293B" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <div className="flex items-center">
            <span className="font-black text-xs text-slate-900 tracking-tight">예술경영</span>
            <span className="font-extrabold text-xs text-[#8DB82C] tracking-tight ml-0.5">지원센터</span>
          </div>
          <span className="text-[7.5px] font-medium text-slate-500 tracking-tighter truncate mt-0.5">
            Korea Arts Management Service
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'kaist',
    name: 'KAIST',
    render: () => (
      <div className="flex flex-col items-center justify-center leading-none">
        <span className="font-black text-sm sm:text-base tracking-wider text-[#004191]">
          KAIST
        </span>
        <svg viewBox="0 0 80 8" className="w-14 h-1.5 mt-0.5">
          <path d="M 0 4 Q 40 0, 80 4 Q 40 8, 0 4 Z" fill="#0072CE" />
        </svg>
      </div>
    )
  },
  {
    id: 'auri',
    name: '건축공간연구원',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="flex items-center font-black text-xs text-[#D6001C] tracking-tighter shrink-0">
          <span className="text-sm font-light">(</span>
          <span className="tracking-widest mx-0.5">aur</span>
          <span className="font-extrabold text-sm leading-none -mt-1">;</span>
          <span className="text-sm font-light">)</span>
        </div>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-bold text-xs text-slate-900 tracking-tight truncate">
            건축공간연구원
          </span>
          <span className="text-[7px] text-slate-500 tracking-tighter truncate mt-0.5">
            Architecture & Urban Research Institute
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'grac',
    name: '게임물관리위원회',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <path d="M 4 8 L 36 8 L 36 16 L 14 16 L 14 36 L 4 36 Z" fill="#009688" />
          <path d="M 4 22 L 26 22 L 26 28 L 14 28 L 14 36 L 4 36 Z" fill="#7C4DFF" opacity="0.8" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-bold text-xs text-slate-800 tracking-tight truncate">
            게임물관리위원회
          </span>
          <span className="text-[7px] text-slate-500 tracking-tighter truncate mt-0.5">
            Game Rating and Administration Committee
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'gh',
    name: '경기주택도시공사',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 50 50" className="w-5 h-5 shrink-0">
          <path d="M 25 2 L 46 14 L 46 38 L 25 50 L 4 38 L 4 14 Z" fill="none" stroke="#005BAB" strokeWidth="5" />
          <path d="M 25 12 L 36 19 L 36 31 L 25 38 L 14 31 L 14 19 Z" fill="#00A0E9" />
          <path d="M 25 12 L 25 38" stroke="#ffffff" strokeWidth="2.5" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-extrabold text-xs text-[#005BAB] tracking-tight truncate">
            경기주택도시공사
          </span>
          <span className="text-[6.5px] text-slate-500 tracking-tighter truncate mt-0.5">
            Gyeonggi Housing & Urban Development Corporation
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'knuh',
    name: '경북대학교병원',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="flex items-center gap-0.5 bg-[#D71920] px-1.5 py-0.5 rounded text-white shrink-0">
          <span className="font-black text-[10px] tracking-tight">KNUH</span>
          <span className="text-[9px] leading-none">🏫</span>
        </div>
        <span className="font-bold text-xs text-slate-800 tracking-tight truncate">
          경북대학교병원
        </span>
      </div>
    )
  },
  {
    id: 'gnuh',
    name: '경상국립대학교병원',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 45 45" className="w-4 h-4 shrink-0">
          <circle cx="22.5" cy="22.5" r="20" fill="none" stroke="#002D62" strokeWidth="3" />
          <text x="22.5" y="26" textAnchor="middle" fill="#002D62" fontSize="9" fontWeight="900">
            GNUH
          </text>
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-bold text-xs text-[#002D62] tracking-tight truncate">
            경상국립대학교병원
          </span>
          <span className="text-[6.5px] text-slate-500 tracking-tighter truncate mt-0.5">
            Gyeongsang National University Hospital
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'nst',
    name: '국가과학기술연구회',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="flex items-center shrink-0">
          <div className="flex -space-x-1 items-center mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A0D6]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D81E5B] opacity-85" />
          </div>
          <span className="font-black text-xs text-slate-900 tracking-tighter">nst</span>
        </div>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-bold text-xs text-slate-800 tracking-tight truncate">
            국가과학기술연구회
          </span>
          <span className="text-[6.5px] text-slate-500 tracking-tighter truncate mt-0.5">
            National Research Council of Science & Technology
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'kr-rail',
    name: '국가철도공단',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 60 40" className="w-6 h-4 shrink-0">
          <path d="M 5 20 L 25 10 L 20 18 L 45 18 L 40 26 L 15 26 L 10 34 Z" fill="#004797" />
          <path d="M 22 18 L 48 18 L 44 26 L 18 26 Z" fill="#70B82C" />
        </svg>
        <div className="flex items-baseline gap-0.5">
          <span className="font-black text-xs text-[#004797] italic">KR</span>
          <span className="font-extrabold text-xs text-slate-900 tracking-tight ml-1 truncate">
            국가철도공단
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'nile',
    name: '국가평생교육진흥원',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="flex flex-col gap-0.5 transform -skew-x-12 shrink-0">
          <div className="flex gap-0.5">
            <span className="w-2.5 h-1.5 rounded-xs bg-[#E53935]" />
            <span className="w-2.5 h-1.5 rounded-xs bg-[#FB8C00]" />
          </div>
          <div className="flex gap-0.5">
            <span className="w-2.5 h-1.5 rounded-xs bg-[#00897B]" />
            <span className="w-2.5 h-1.5 rounded-xs bg-[#1E88E5]" />
          </div>
        </div>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-bold text-xs text-slate-900 tracking-tight truncate">
            국가평생교육진흥원
          </span>
          <span className="text-[6.5px] text-slate-500 tracking-tighter truncate mt-0.5">
            National Institute for Lifelong Education
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'scientry',
    name: '국립대구과학관',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 50 50" className="w-5 h-5 shrink-0">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#8CBF3F" strokeWidth="4" />
          <path d="M 18 18 Q 25 12, 32 18 Q 32 25, 25 25 Q 18 25, 18 32 Q 25 38, 32 32" fill="none" stroke="#8CBF3F" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-black text-xs text-slate-700 tracking-wide uppercase">
            SCIENTRY
          </span>
          <span className="font-bold text-xs text-slate-900 tracking-tight truncate mt-0.5">
            국립대구과학관
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'nie',
    name: '국립생태원',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <ellipse cx="16" cy="16" rx="6" ry="10" fill="#F4B400" transform="rotate(-30 16 16)" />
          <ellipse cx="24" cy="16" rx="6" ry="10" fill="#0F9D58" transform="rotate(30 24 16)" />
          <ellipse cx="20" cy="24" rx="6" ry="10" fill="#FF7043" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-extrabold text-xs text-[#0B6B38] tracking-tight truncate">
            국립생태원
          </span>
          <span className="text-[6.5px] text-slate-500 tracking-tighter truncate mt-0.5">
            NATIONAL INSTITUTE OF ECOLOGY
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'ncc',
    name: '국립암센터',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <path d="M 20 4 C 32 4, 36 20, 20 36 C 4 20, 8 4, 20 4 Z" fill="#E65100" />
          <path d="M 20 4 C 28 4, 32 16, 20 20 Z" fill="#FBC02D" />
          <path d="M 20 20 C 32 20, 28 32, 20 36 Z" fill="#0288D1" />
          <path d="M 20 20 C 8 20, 12 32, 20 36 Z" fill="#43A047" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-extrabold text-xs text-slate-900 tracking-tight truncate">
            국립암센터
          </span>
          <span className="text-[6.5px] text-slate-500 tracking-tighter truncate mt-0.5">
            NATIONAL CANCER CENTER
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'nosm',
    name: '국립해양과학관',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 50 35" className="w-5 h-3.5 shrink-0">
          <path d="M 5 22 C 15 5, 30 5, 45 12 C 38 25, 20 28, 5 22 Z" fill="none" stroke="#0099DA" strokeWidth="4" />
          <path d="M 25 18 C 35 25, 45 20, 48 14" fill="none" stroke="#F58220" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-extrabold text-xs text-slate-900 tracking-tight truncate">
            국립해양과학관
          </span>
          <span className="text-[6.5px] text-slate-500 tracking-tighter truncate mt-0.5">
            NATIONAL OCEAN SCIENCE MUSEUM
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'koem',
    name: '해양환경공단',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <span className="font-black text-xs text-[#006BB6] tracking-tighter shrink-0">
          KOEM
        </span>
        <span className="font-extrabold text-xs text-[#006BB6] tracking-tight truncate">
          해양환경공단
        </span>
      </div>
    )
  },
  {
    id: 'knf',
    name: '한전원자력연료|주',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="w-4 h-4 rounded-full bg-[#E5242A] flex items-center justify-center text-white font-black text-[7px] shrink-0">
          KNF
        </div>
        <span className="font-bold text-xs text-[#003B7A] tracking-tight truncate">
          한전원자력연료<span className="text-slate-400 font-light mx-0.5">|</span>주
        </span>
      </div>
    )
  },
  {
    id: 'kcopa',
    name: '한국저작권보호원',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <rect x="10" y="10" width="20" height="20" rx="3" fill="#0072CE" transform="rotate(45 20 20)" />
          <path d="M 12 12 Q 20 4, 28 12" fill="none" stroke="#29B6F6" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-bold text-xs text-slate-900 tracking-tight truncate">
            한국저작권보호원
          </span>
          <span className="text-[6.5px] text-slate-500 tracking-tighter truncate mt-0.5">
            KOREA COPYRIGHT PROTECTION AGENCY
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'kea',
    name: '한국에너지공단',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="w-4 h-4 rounded-sm bg-[#00629B] flex items-center justify-center text-white font-black text-[10px] transform -skew-x-12 shrink-0">
          E
        </div>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-bold text-xs text-[#00629B] tracking-tight truncate">
            한국에너지공단
          </span>
          <span className="text-[6.5px] text-slate-500 tracking-tighter truncate mt-0.5">
            KOREA ENERGY AGENCY
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'foodpolis',
    name: '한국식품산업클러스터진흥원',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 50 30" className="w-5 h-3.5 shrink-0">
          <path d="M 5 25 A 20 20 0 0 1 12 10 L 25 25 Z" fill="#E65100" />
          <path d="M 13 9 A 20 20 0 0 1 23 5 L 25 25 Z" fill="#8BC34A" />
          <path d="M 24 5 A 20 20 0 0 1 34 8 L 25 25 Z" fill="#00BCD4" />
          <path d="M 35 9 A 20 20 0 0 1 45 25 L 25 25 Z" fill="#9C27B0" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-black text-xs text-[#5D3A3A] tracking-tight">
            FOODPOLIS
          </span>
          <span className="font-semibold text-[7.5px] text-slate-800 tracking-tighter truncate mt-0.5">
            한국식품산업클러스터진흥원
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'knoc',
    name: '한국석유공사',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 45 45" className="w-4 h-4 shrink-0">
          <circle cx="18" cy="27" r="14" fill="#004D40" />
          <circle cx="27" cy="18" r="14" fill="#D32F2F" />
          <path d="M 18 13 L 18 31 M 18 22 L 28 13 M 18 22 L 28 31" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <div className="flex items-baseline gap-1">
            <span className="font-black text-xs text-[#004D40]">KNOC</span>
            <span className="font-bold text-xs text-slate-900 tracking-tight truncate">
              한국석유공사
            </span>
          </div>
          <span className="text-[6.5px] text-slate-500 tracking-tighter truncate mt-0.5">
            KOREA NATIONAL OIL CORPORATION
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'kca',
    name: '한국소비자원',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 45 35" className="w-4 h-3.5 shrink-0">
          <circle cx="15" cy="17" r="10" fill="none" stroke="#FF7043" strokeWidth="4" />
          <circle cx="28" cy="17" r="10" fill="none" stroke="#29B6F6" strokeWidth="4" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-extrabold text-xs text-slate-900 tracking-tight truncate">
            한국소비자원
          </span>
          <span className="text-[7px] text-slate-500 tracking-tighter truncate mt-0.5">
            Korea Consumer Agency
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'kogas',
    name: '한국가스공사',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <circle cx="20" cy="20" r="18" fill="#0072CE" />
          <path d="M 20 6 C 24 14, 28 20, 20 34 C 12 20, 16 14, 20 6 Z" fill="#ffffff" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-black text-xs text-slate-600 tracking-tight">KOGAS</span>
          <span className="font-bold text-xs text-slate-900 tracking-tight truncate mt-0.5">
            한국가스공사
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'apcc',
    name: 'APEC 기후센터',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <circle cx="20" cy="20" r="16" fill="#00A0E9" />
          <line x1="2" y1="24" x2="38" y2="16" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-black text-xs text-slate-900 tracking-wide">∧PCC</span>
          <span className="font-bold text-[8.5px] text-slate-800 tracking-tight truncate mt-0.5">
            APEC 기후센터
          </span>
        </div>
      </div>
    )
  }
];

// 3. 금융권 (24 Financial Institutions)
const FINANCE_LOGOS: ResultLogoItem[] = [
  {
    id: 'bc-card',
    name: '비씨카드',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="w-5 h-5 rounded-full bg-[#E52528] flex items-center justify-center shrink-0 shadow-xs">
          <span className="text-white font-black italic text-[9px] tracking-tighter leading-none -ml-0.5">BC</span>
        </div>
        <span className="font-extrabold text-xs text-slate-800 tracking-tight truncate">
          비씨카드
        </span>
      </div>
    )
  },
  {
    id: 'db-life',
    name: 'DB생명',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 35 45" className="w-4 h-4 shrink-0">
          <path d="M 12 18 C 12 10, 2 10, 2 24 C 2 34, 12 34, 12 24 Z" fill="#E65100" />
          <path d="M 14 16 C 14 6, 24 6, 24 16 C 24 24, 14 24, 14 16 Z" fill="#0088CE" />
          <path d="M 15 20 C 15 20, 25 20, 25 32 C 25 40, 15 40, 15 20 Z" fill="#7CB342" />
        </svg>
        <span className="font-black text-xs text-[#00873D] tracking-tight truncate">
          DB생명
        </span>
      </div>
    )
  },
  {
    id: 'fp-center',
    name: 'FPcenter',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 36 30" className="w-4 h-3.5 shrink-0">
          <path d="M 18 2 C 14 10, 14 20, 18 28 C 22 20, 22 10, 18 2 Z" fill="#2E7D32" stroke="#8BC34A" strokeWidth="1" />
          <path d="M 18 16 C 10 16, 4 20, 2 28 C 10 26, 16 22, 18 16 Z" fill="#2E7D32" stroke="#8BC34A" strokeWidth="1" />
          <path d="M 18 16 C 26 16, 32 20, 34 28 C 26 26, 20 22, 18 16 Z" fill="#2E7D32" stroke="#8BC34A" strokeWidth="1" />
        </svg>
        <div className="flex items-baseline font-bold text-xs text-slate-900 tracking-tight">
          <span className="font-black">FP</span>
          <span>c</span>
          <span className="underline decoration-[#F58220] decoration-2 underline-offset-2">e</span>
          <span>nt</span>
          <span className="underline decoration-[#F58220] decoration-2 underline-offset-2">e</span>
          <span>r</span>
        </div>
      </div>
    )
  },
  {
    id: 'kb-sec',
    name: 'KB증권',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <path d="M 8 22 L 32 18 M 16 8 L 24 32 M 10 12 L 30 28 M 28 10 L 12 30" stroke="#FFB800" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
        <div className="flex items-baseline gap-0.5">
          <span className="font-black text-xs text-[#5C5346]">KB</span>
          <span className="font-bold text-xs text-[#5C5346] tracking-tight ml-0.5">증권</span>
        </div>
      </div>
    )
  },
  {
    id: 'kdb-life',
    name: 'KDB생명',
    render: () => (
      <div className="flex flex-col items-center justify-center leading-tight px-1">
        <span className="text-[7.5px] font-medium text-[#1C3F85] tracking-tight">
          산업은행계열
        </span>
        <span className="font-black text-xs text-[#1C3F85] tracking-tight">
          KDB생명
        </span>
      </div>
    )
  },
  {
    id: 'kdb-capital',
    name: 'KDB캐피탈',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <path d="M 12 8 L 22 8 L 14 24 L 6 24 Z" fill="#0080FF" />
          <path d="M 20 16 L 30 16 L 22 32 L 14 32 Z" fill="#0040A0" />
          <path d="M 14 24 L 22 16 L 20 16 L 14 24 Z" fill="#66B2FF" />
        </svg>
        <span className="font-black text-xs text-[#003E7E] tracking-tight truncate">
          KDB캐피탈
        </span>
      </div>
    )
  },
  {
    id: 'ktb-sec',
    name: 'ktb 투자증권',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <polygon points="20,4 36,20 20,20" fill="#E65100" />
          <polygon points="20,4 4,20 20,20" fill="#0072CE" />
          <polygon points="4,20 20,36 20,20" fill="#43A047" />
          <polygon points="36,20 20,36 20,20" fill="#D81B60" />
          <path d="M 14 12 L 14 28 M 14 20 L 24 12 M 14 20 L 24 28" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div className="flex items-baseline gap-1">
          <span className="font-black text-xs text-[#0A1E7B] lowercase">ktb</span>
          <span className="font-bold text-xs text-[#0A1E7B] tracking-tight">투자증권</span>
        </div>
      </div>
    )
  },
  {
    id: 'mg-insure',
    name: 'MG손해보험',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <circle cx="16" cy="16" r="10" fill="#0080FF" opacity="0.9" />
          <circle cx="24" cy="16" r="10" fill="#00B4D8" opacity="0.8" />
          <circle cx="20" cy="24" r="10" fill="#00509D" opacity="0.85" />
        </svg>
        <span className="font-black text-xs text-[#002D62] tracking-tight truncate">
          MG손해보험
        </span>
      </div>
    )
  },
  {
    id: 'kb-bank',
    name: 'KB국민은행',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <path d="M 8 22 L 32 18 M 16 8 L 24 32 M 10 12 L 30 28 M 28 10 L 12 30" stroke="#FFB800" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
        <div className="flex items-baseline gap-0.5">
          <span className="font-black text-xs text-[#5C5346]">KB</span>
          <span className="font-extrabold text-xs text-[#5C5346] tracking-tight ml-0.5">국민은행</span>
        </div>
      </div>
    )
  },
  {
    id: 'bnk-knbank',
    name: 'BNK경남은행',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <span className="font-black text-xs text-[#D52B1E] tracking-tighter shrink-0">
          BNK
        </span>
        <span className="font-bold text-xs text-slate-800 tracking-tight truncate">
          경남은행
        </span>
      </div>
    )
  },
  {
    id: 'shinhan-bank',
    name: '신한은행',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <circle cx="20" cy="20" r="18" fill="#0046FF" />
          <path d="M 20 8 C 26 14, 26 22, 20 32 C 14 22, 14 14, 20 8 Z" fill="#ffffff" />
          <circle cx="20" cy="16" r="3" fill="#0046FF" />
        </svg>
        <span className="font-black text-xs text-[#0046FF] tracking-tight truncate">
          신한은행
        </span>
      </div>
    )
  },
  {
    id: 'shinhan-life',
    name: '신한라이프',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <circle cx="20" cy="20" r="18" fill="#0046FF" />
          <path d="M 20 8 C 26 14, 26 22, 20 32 C 14 22, 14 14, 20 8 Z" fill="#ffffff" />
          <circle cx="20" cy="16" r="3" fill="#0046FF" />
        </svg>
        <span className="font-black text-xs text-[#0046FF] tracking-tight truncate">
          신한라이프
        </span>
      </div>
    )
  },
  {
    id: 'heungkuk',
    name: '흥국화재',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="flex items-center gap-1 shrink-0">
          <div className="flex flex-col gap-0.5">
            <span className="w-1.5 h-1.5 bg-[#D6006E]" />
            <span className="w-1.5 h-1.5 bg-[#D6006E]" />
          </div>
          <span className="w-3 h-3 bg-[#D6006E] transform rotate-45" />
        </div>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-bold text-[8px] text-[#1A0D3F] tracking-tighter">Heungkuk</span>
          <span className="font-extrabold text-xs text-[#1A0D3F] tracking-tight truncate mt-0.5">흥국화재</span>
        </div>
      </div>
    )
  },
  {
    id: 'hankook-capital',
    name: '한국캐피탈(주)',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="bg-[#E50012] text-white font-black text-xs px-1.5 py-0.5 rounded-xs shrink-0 flex items-center">
          <span>M</span>
          <span className="text-[6px] -rotate-90 ml-0.5 leading-none">PLUS</span>
        </div>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-extrabold text-xs text-slate-900 tracking-tight truncate">
            한국캐피탈<span className="font-normal text-[10px]">(주)</span>
          </span>
          <span className="text-[6.5px] font-medium text-slate-500 tracking-tighter truncate mt-0.5">
            HANKOOK CAPITAL Co., Ltd.
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'hyundai-card',
    name: '현대카드',
    render: () => (
      <div className="flex flex-col items-center justify-center leading-none px-1">
        <div className="border-t-2 border-x-2 border-slate-900 rounded-t-md px-3 pt-1 pb-0.5">
          <span className="font-bold text-xs text-slate-900 tracking-tight">
            Hyundai Card
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'samsung-card',
    name: '삼성카드',
    render: () => (
      <div className="flex items-center justify-center px-1">
        <span className="font-extrabold text-xs sm:text-sm text-[#074496] tracking-tight">
          Samsung Card
        </span>
      </div>
    )
  },
  {
    id: 'dongyang-life',
    name: '수호천사동양생명',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <span className="font-black text-xs text-[#0088CE] tracking-tight truncate">
          수호천사동양생명
        </span>
        <svg viewBox="0 0 40 25" className="w-5 h-3 shrink-0">
          <path d="M 5 20 Q 15 4, 20 18 M 10 20 Q 18 8, 20 18 M 35 20 Q 25 4, 20 18 M 30 20 Q 22 8, 20 18" fill="none" stroke="#0088CE" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    )
  },
  {
    id: 'the-k',
    name: 'The-K 손해보험',
    render: () => (
      <div className="flex flex-col items-center justify-center leading-none px-1 text-center">
        <span className="text-[7.5px] font-medium text-[#002B7F] tracking-tight mb-0.5">
          더케이 한국교직원공제회
        </span>
        <div className="flex items-baseline relative">
          <span className="font-black text-xs text-[#002B7F]">The<span className="text-[#E52528] mx-0.5">·</span>K</span>
          <span className="font-bold text-xs text-[#002B7F] ml-1">손해보험</span>
          <svg viewBox="0 0 30 10" className="w-3.5 h-1 absolute -bottom-1 left-4">
            <path d="M 2 2 Q 15 10, 28 2" fill="none" stroke="#E52528" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 'daishin-asset',
    name: '대신자산운용',
    render: () => (
      <div className="flex items-center gap-2 w-full justify-center px-1">
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-bold text-xs text-[#3C3C3B] tracking-tight">Daishin</span>
          <span className="text-[7.5px] text-slate-600 tracking-tight mt-0.5">Asset Management</span>
        </div>
        <svg viewBox="0 0 35 35" className="w-4 h-4 shrink-0">
          <polygon points="17,4 32,4 32,20 17,20" fill="#3C3C3B" />
          <polygon points="4,15 19,15 19,31 4,31" fill="#5A5A58" />
          <rect x="12" y="12" width="10" height="10" fill="#ffffff" />
        </svg>
      </div>
    )
  },
  {
    id: 'lotte-capital',
    name: '롯데캐피탈',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="w-4 h-4 rounded-md bg-[#E30613] flex items-center justify-center shrink-0 shadow-xs">
          <span className="text-white italic font-serif font-black text-xs leading-none">l</span>
        </div>
        <span className="font-black text-xs text-[#E30613] tracking-tight truncate">
          롯데캐피탈
        </span>
      </div>
    )
  },
  {
    id: 'woori-bank',
    name: '우리은행',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <circle cx="20" cy="20" r="16" fill="#0072CE" />
          <path d="M 6 22 Q 20 12, 34 22 L 34 32 L 6 32 Z" fill="#005BAB" />
          <path d="M 8 21 Q 20 14, 32 21" fill="none" stroke="#ffffff" strokeWidth="2.5" />
        </svg>
        <span className="font-extrabold text-xs text-[#0072CE] tracking-tight truncate">
          우리은행
        </span>
      </div>
    )
  },
  {
    id: 'kiwoom-sec',
    name: '키움증권',
    render: () => (
      <div className="flex items-center gap-1 w-full justify-center px-1 relative">
        <span className="font-black text-xs sm:text-sm text-[#002C6C] tracking-tight">
          키움증권
        </span>
        <svg viewBox="0 0 25 25" className="w-4 h-4 shrink-0 -ml-0.5">
          <text x="5" y="20" fill="#CBD5E1" fontSize="18" fontWeight="900" fontFamily="sans-serif">K</text>
          <path d="M 4 20 L 18 6 M 18 6 L 10 6 M 18 6 L 18 14" fill="none" stroke="#E6007E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  },
  {
    id: 'hana-bank',
    name: '하나은행',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 35 35" className="w-4 h-4 shrink-0">
          <circle cx="17.5" cy="8" r="4" fill="#E5004F" />
          <path d="M 8 16 Q 17.5 12, 27 16" fill="none" stroke="#008485" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 17.5 14 Q 13 22, 11 30 M 17.5 14 Q 22 22, 24 30" fill="none" stroke="#008485" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
        <span className="font-extrabold text-xs text-[#008485] tracking-tight truncate">
          하나은행
        </span>
      </div>
    )
  },
  {
    id: 'sc-bank',
    name: 'SC제일은행',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 40 40" className="w-4 h-4 shrink-0">
          <path d="M 12 12 Q 24 4, 28 14 Q 30 22, 20 28" fill="none" stroke="#0072CE" strokeWidth="4" strokeLinecap="round" />
          <path d="M 28 28 Q 16 36, 12 26 Q 10 18, 20 12" fill="none" stroke="#00C040" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="text-[7.5px] font-bold text-slate-600 tracking-tight">standard chartered</span>
          <span className="font-extrabold text-xs text-slate-900 tracking-tight mt-0.5">SC제일은행</span>
        </div>
      </div>
    )
  }
];

// 4. 강소 · IT기업 (23 Tech & Promising Firms)
const TECH_LOGOS: ResultLogoItem[] = [
  {
    id: 'domo',
    name: 'DOMO',
    render: () => (
      <div className="flex items-center justify-center px-1">
        <div className="flex items-baseline font-black tracking-tight leading-none text-base">
          <span className="text-[#E65100] italic font-serif text-lg mr-0.5">D</span>
          <span className="text-slate-900 tracking-wider font-extrabold text-sm border-b-2 border-[#E65100] pb-0.5">
            OMO
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'dongbang',
    name: '동방이노베이션',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="w-6 h-3.5 rounded-full bg-[#005BA6] flex items-center justify-center shrink-0">
          <span className="text-white font-extrabold text-[8px] tracking-tighter leading-none -mt-0.5">db</span>
        </div>
        <span className="font-extrabold text-xs text-[#005BA6] tracking-tight truncate">
          동방이노베이션
        </span>
      </div>
    )
  },
  {
    id: 'yh-database',
    name: 'YH DATABASE',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="w-4 h-4 bg-[#F58220] rounded-xs transform rotate-45 flex items-center justify-center shrink-0 shadow-2xs">
          <span className="text-white font-black text-[7px] -rotate-45 leading-none">YH</span>
        </div>
        <div className="flex flex-col leading-none text-left min-w-0">
          <div className="flex items-baseline gap-0.5">
            <span className="font-black text-xs text-[#F58220]">YH</span>
            <span className="font-extrabold text-xs text-[#4A3B32] tracking-tight">DATABASE</span>
          </div>
          <span className="text-[5.5px] font-semibold text-slate-500 tracking-tighter truncate mt-0.5">
            SOFTWARE, SOLUTION DEVELOPMENT
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'gabia',
    name: 'gabia.',
    render: () => (
      <div className="flex items-center justify-center px-1">
        <div className="flex items-baseline font-black tracking-tight text-[#004A99] text-base">
          <span className="tracking-tight italic font-serif">gabia</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#004A99] ml-0.5" />
        </div>
      </div>
    )
  },
  {
    id: 'gaurian',
    name: 'GAURIAN',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 35 35" className="w-4 h-4 shrink-0">
          <path d="M 8 20 C 6 10, 16 4, 26 8 C 16 8, 12 14, 12 24 C 12 28, 16 30, 22 28 C 16 32, 10 30, 8 20 Z" fill="#E85222" />
          <polygon points="18,22 28,16 26,26" fill="#E85222" />
        </svg>
        <span className="font-extrabold text-xs sm:text-sm text-[#5A5B5E] tracking-wider">
          GAURIAN
        </span>
      </div>
    )
  },
  {
    id: 'kacnet',
    name: '(주)고려아카데미컨설팅',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 30 35" className="w-3.5 h-4 shrink-0">
          <rect x="2" y="2" width="16" height="22" rx="1" fill="none" stroke="#1A237E" strokeWidth="2.5" />
          <rect x="7" y="6" width="16" height="22" rx="1" fill="none" stroke="#9E9E9E" strokeWidth="2" />
          <rect x="10" y="10" width="16" height="22" rx="1" fill="none" stroke="#009688" strokeWidth="2.5" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-black italic text-xs text-[#2B2B2B] tracking-tight">KACNET</span>
          <span className="text-[6.5px] font-medium text-slate-500 tracking-tighter truncate mt-0.5">
            (주)고려아카데미컨설팅
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'kwansoo',
    name: 'KWANSOO',
    render: () => (
      <div className="flex items-center gap-1 w-full justify-center px-1">
        <svg viewBox="0 0 40 25" className="w-5 h-3.5 shrink-0">
          <polygon points="20,2 4,24 8,24 20,6 32,24 36,24" fill="#A6192E" />
          <polygon points="20,10 12,24 16,24 20,16 24,24 28,24" fill="#A6192E" />
        </svg>
        <span className="font-black italic text-xs sm:text-sm text-[#A6192E] tracking-tighter">
          KWANSOO
        </span>
      </div>
    )
  },
  {
    id: 'baromlight',
    name: 'BAROMlight',
    render: () => (
      <div className="flex items-center justify-center px-1">
        <span className="font-black text-xs sm:text-sm text-[#E55302] tracking-tight">
          BAROM<span className="font-bold text-[11px] ml-0.5">light</span>
        </span>
      </div>
    )
  },
  {
    id: 'tdm',
    name: 'TDM',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 45 30" className="w-5 h-3.5 shrink-0">
          <path d="M 6 15 C 6 6, 22 6, 22 15 C 22 24, 6 24, 6 15 Z" fill="none" stroke="#0066FF" strokeWidth="4" />
          <path d="M 22 15 C 22 6, 38 6, 38 15 C 38 24, 22 24, 22 15 Z" fill="none" stroke="#0066FF" strokeWidth="4" />
          <line x1="22" y1="6" x2="22" y2="24" stroke="#0066FF" strokeWidth="3" />
        </svg>
        <span className="font-black text-xs sm:text-sm tracking-wider text-slate-900">
          TDM
        </span>
      </div>
    )
  },
  {
    id: 'naeil',
    name: '내일신문',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="w-4 h-4 rounded-full bg-[#881242] flex items-center justify-center shrink-0">
          <span className="text-white italic font-serif font-black text-[9px] leading-none">n</span>
        </div>
        <span className="font-black text-xs sm:text-sm text-slate-900 tracking-tight truncate">
          내일신문
        </span>
      </div>
    )
  },
  {
    id: 'nexturn',
    name: 'NEXTURN',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 35 30" className="w-4 h-3.5 shrink-0">
          <path d="M 6 6 L 14 6 L 24 24 L 16 24 Z" fill="#004C97" />
          <path d="M 18 6 L 24 6 L 24 14 Z" fill="#D32F2F" />
          <path d="M 6 16 L 6 24 L 12 24 Z" fill="#D32F2F" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-black italic text-xs text-[#004C97] tracking-wider">NEXTURN</span>
          <span className="text-[6px] font-bold text-slate-600 tracking-tighter truncate mt-0.5">
            SWISS TURN LEADER
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'nextlab',
    name: 'NEXTLab',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 35 35" className="w-4 h-4 shrink-0">
          <polygon points="17.5,4 30,11 17.5,18 5,11" fill="#1E3A8A" />
          <polygon points="5,11 17.5,18 17.5,31 5,24" fill="#94A3B8" />
          <polygon points="17.5,18 30,11 30,24 17.5,31" fill="#0F172A" />
        </svg>
        <span className="font-bold text-xs sm:text-sm text-slate-900 tracking-tight truncate">
          NEXT<span className="font-medium text-slate-700">Lab</span>
        </span>
      </div>
    )
  },
  {
    id: 'jininfra',
    name: 'JIN INFRA',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 35 30" className="w-4 h-3.5 shrink-0">
          <polygon points="4,24 10,4 16,4 10,24" fill="#0F1B5C" />
          <polygon points="12,24 18,4 24,4 18,24" fill="#00D4D4" />
        </svg>
        <span className="font-black text-xs sm:text-sm text-[#0F1B5C] tracking-wider">
          JIN INFRA
        </span>
      </div>
    )
  },
  {
    id: 'nimbus',
    name: 'NimbusNetworks',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <svg viewBox="0 0 35 35" className="w-4 h-4 shrink-0">
          <path d="M 6 22 C 2 12, 14 4, 20 14 C 26 24, 34 16, 28 8" fill="none" stroke="#84BD00" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 14 18 C 18 26, 30 24, 28 10" fill="none" stroke="#2B6CB0" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col leading-none text-left min-w-0">
          <div className="flex items-baseline font-black text-xs tracking-tight">
            <span className="text-[#84BD00]">Nimbus</span>
            <span className="text-[#1A365D]">Networks</span>
          </div>
          <span className="text-[5.5px] font-medium text-slate-500 tracking-tighter truncate mt-0.5">
            Cloud Accelerating Technology & Service
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'humuson',
    name: 'humusOn',
    render: () => (
      <div className="flex items-center justify-center px-1">
        <div className="flex items-baseline font-extrabold text-xs sm:text-sm tracking-tight text-[#007A3D]">
          <span className="relative">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A300] absolute -top-1 left-0" />
            h
          </span>
          <span>umus</span>
          <span className="font-black text-[#D9A300] ml-0.5">On</span>
        </div>
      </div>
    )
  },
  {
    id: 'humax',
    name: 'HUMAX',
    render: () => (
      <div className="flex items-center justify-center px-1">
        <div className="flex items-baseline font-black tracking-wider text-xs sm:text-sm text-[#004B9B]">
          <span>HUMA</span>
          <span className="relative">
            X
            <svg viewBox="0 0 15 15" className="w-2.5 h-2.5 absolute bottom-0 right-0">
              <line x1="2" y1="12" x2="12" y2="4" stroke="#ffffff" strokeWidth="1" />
              <line x1="5" y1="14" x2="14" y2="6" stroke="#004B9B" strokeWidth="1" />
            </svg>
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'hwayoung',
    name: 'HWA YOUNG',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="w-5 h-4 rounded-full bg-[#E52528] flex items-center justify-center shrink-0">
          <span className="text-white italic font-black text-[8px] leading-none">hy</span>
        </div>
        <span className="font-black italic text-xs sm:text-sm text-slate-900 tracking-wider">
          HWA YOUNG
        </span>
      </div>
    )
  },
  {
    id: 'hyundai-greenpower',
    name: '현대그린파워',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <span className="font-black text-xs text-[#2E9B3D] tracking-tight truncate">
          현대그린파워
        </span>
        <div className="bg-[#00873D] text-white px-1.5 py-0.5 rounded-sm font-extrabold text-[9px] leading-none shrink-0">
          hgp
        </div>
      </div>
    )
  },
  {
    id: 'hansol',
    name: '한솔아트원제지',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="flex flex-col gap-0.5 shrink-0">
          <span className="w-1.5 h-2 bg-[#0072CE] rounded-xs" />
          <span className="w-1.5 h-2 bg-[#00A651] rounded-xs" />
        </div>
        <div className="flex flex-col leading-none text-left min-w-0">
          <span className="font-black text-xs text-slate-900 tracking-tight">Hansol</span>
          <span className="text-[7.5px] font-bold text-slate-600 tracking-tighter truncate mt-0.5">
            한솔아트원제지
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'kci-korea-computer',
    name: '한국컴퓨터(주)',
    render: () => (
      <div className="flex items-center gap-1.5 w-full justify-center px-1">
        <div className="flex items-center font-black italic text-xs text-[#002B7F] shrink-0 leading-none">
          <span>K</span>
          <div className="w-3.5 h-3.5 rounded-full bg-[#002B7F] flex items-center justify-center overflow-hidden mx-0.5">
            <div className="w-full h-full flex flex-col justify-between py-0.5">
              <span className="w-full h-0.5 bg-white" />
              <span className="w-full h-0.5 bg-white" />
            </div>
          </div>
          <span>I</span>
        </div>
        <span className="font-extrabold text-xs text-[#002B7F] tracking-tight truncate">
          한국컴퓨터<span className="font-normal text-[10px]">(주)</span>
        </span>
      </div>
    )
  },
  {
    id: 'farmsco',
    name: 'Farmsco',
    render: () => (
      <div className="flex items-center justify-center px-1 relative">
        <svg viewBox="0 0 100 40" className="w-24 h-8 shrink-0">
          <path d="M 45 6 C 65 6, 85 12, 90 20" fill="none" stroke="#0080FF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 10 32 C 30 38, 70 38, 85 24" fill="none" stroke="#FF7700" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 12 30 C 25 34, 45 34, 55 28" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" />
          <text x="50" y="26" textAnchor="middle" fill="#D9272E" fontSize="18" fontStyle="italic" fontWeight="900" fontFamily="sans-serif">Farmsco</text>
        </svg>
      </div>
    )
  },
  {
    id: 'cosrx',
    name: 'COSRX',
    render: () => (
      <div className="flex items-center justify-center px-1">
        <span className="font-black text-sm tracking-widest text-slate-900">
          COSRX
        </span>
      </div>
    )
  },
  {
    id: 'firb',
    name: 'Firb',
    render: () => (
      <div className="flex items-center justify-center px-1 relative">
        <div className="flex items-baseline relative">
          <span className="font-black text-xs sm:text-sm text-[#1B43A1] tracking-tight">
            Firb
          </span>
          <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 -ml-1 -mt-2 shrink-0">
            <polygon points="10,0 12,7 19,7 13,11 15,18 10,13 5,18 7,11 1,7 8,7" fill="#F5BA13" />
          </svg>
        </div>
      </div>
    )
  }
];

interface FlowColumnProps {
  title: string;
  items: ResultLogoItem[];
  animationClass?: string;
}

const FlowColumn: React.FC<FlowColumnProps> = ({ title, items, animationClass = 'animate-flow-up' }) => {
  // Duplicate the items array for seamless infinite bottom-to-top loop with translateY(-50%)
  const loopItems = [...items, ...items];

  return (
    <div className="bg-white text-slate-900 rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200/90 flex flex-col overflow-hidden">
      <h3 className="text-center font-extrabold text-base sm:text-lg text-slate-900 pb-3 mb-2 border-b border-slate-100 flex items-center justify-center gap-1.5">
        <span>{title}</span>
      </h3>

      {/* 
        Container strictly sized to display 4 items simultaneously.
        Each item is h-[48px] with gap-[8px] => 4 * 48 + 3 * 8 = 216px height
      */}
      <div className="relative h-[216px] overflow-hidden group select-none">
        {/* Top subtle fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

        {/* Upward flowing items */}
        <div className={`${animationClass} gap-2 py-1`}>
          {loopItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="h-[48px] shrink-0 px-3 rounded-xl bg-slate-50/70 hover:bg-blue-50/70 border border-slate-100/90 hover:border-blue-200/80 flex items-center justify-center transition-all duration-200 shadow-2xs"
              title={item.name}
            >
              {item.render()}
            </div>
          ))}
        </div>

        {/* Bottom subtle fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export const ResultsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-900 text-white" id="coaching-results-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            코치진의 코칭 결과!
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            바로코칭과 함께한 수강생들이 합격한 실제 기업 및 기관입니다.
          </p>
        </div>

        {/* 4 White Columns on Dark Background matching PDF Page 5 with 4-item upward flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* 1. 대기업 (17 Corp Logos with Upward Flow) */}
          <FlowColumn
            title="대기업"
            items={MAJOR_CORP_LOGOS}
            animationClass="animate-flow-up"
          />

          {/* 2. 공기업 (Incheon Airport, NST, etc. with Upward Flow) */}
          <FlowColumn
            title="공기업"
            items={PUBLIC_LOGOS}
            animationClass="animate-flow-up-slow"
          />

          {/* 3. 금융권 (KB Insurance, Banks, etc. with Upward Flow) */}
          <FlowColumn
            title="금융권"
            items={FINANCE_LOGOS}
            animationClass="animate-flow-up"
          />

          {/* 4. 강소 · IT기업 (GAONCHIPS, etc. with Upward Flow) */}
          <FlowColumn
            title="강소 · IT기업"
            items={TECH_LOGOS}
            animationClass="animate-flow-up-fast"
          />
        </div>
      </div>
    </section>
  );
};

