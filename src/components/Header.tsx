import React, { useState } from 'react';
import { Menu, X, MessageCircle, PhoneCall } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenConsultation: (type?: 'fast' | 'custom') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '자소서 첨삭', file: 'resume.html', path: 'resume.html' },
    { label: '대기업 맞춤 코칭', file: 'major.html', path: 'major.html' },
    { label: '공기업 맞춤 코칭', file: 'public.html', path: 'public.html' },
    { label: '금융권 맞춤 코칭', file: 'finance.html', path: 'finance.html' },
    { label: '의약/제약/바이오 맞춤 코칭', file: 'bio.html', path: 'bio.html' },
    { label: '상담신청', file: 'contact.html', path: 'contact.html' },
  ];

  const handleNavClick = (e: React.MouseEvent, pageFile: string) => {
    e.preventDefault();
    onNavigate(pageFile);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-100">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/major.html"
            onClick={(e) => handleNavClick(e, 'major.html')}
            className="flex items-center cursor-pointer group py-1"
            id="brand-logo"
          >
            <img
              src="https://postfiles.pstatic.net/MjAyNjA5MTFfMjMz/MDAxNzg5MTE5MjI0MDkw.ojZOOsXjCI8KI-pwYxvVq8glhncjAg8YdhT1vDt7ECYg.mOfQE0eTkqwHiaxdyiqO1__8uVQfYeGcnyWND7T8CmYg.PNG/%EC%9E%90%EC%82%B0_29png.png?type=w966"
              alt="바로코칭 로고"
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-slate-700">
            {navItems.map((item) => {
              const isActive = currentPage === item.file;
              return (
                <a
                  key={item.file}
                  href={`/${item.file}`}
                  onClick={(e) => handleNavClick(e, item.file)}
                  className={`px-3 py-2 rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-blue-600 font-bold bg-blue-50/80 shadow-xs'
                      : 'hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  id={`nav-link-${item.file.replace('.html', '')}`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* 코치진 소개 Button */}
            <div>
              <a
                href="/coach.html"
                onClick={(e) => handleNavClick(e, 'coach.html')}
                className={`px-3 py-2 rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer block ${
                  currentPage === 'coach.html'
                    ? 'text-blue-600 font-bold bg-blue-50/80 shadow-xs'
                    : 'hover:text-blue-600 hover:bg-slate-50'
                }`}
                id="nav-community-dropdown-btn"
              >
                코치진 소개
              </a>
            </div>

            {/* Solid Blue Button: 빠른 상담신청 */}
            <button
              type="button"
              onClick={() => onOpenConsultation('fast')}
              className="ml-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all shadow-md shadow-blue-500/20 hover:shadow-lg cursor-pointer"
              id="header-consultation-btn"
            >
              <MessageCircle className="w-4 h-4" />
              <span>상담신청</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenConsultation('fast')}
              className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              상담신청
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              id="mobile-menu-toggle"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.file}
              href={`/${item.file}`}
              onClick={(e) => handleNavClick(e, item.file)}
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                currentPage === item.file
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/coach.html"
            onClick={(e) => handleNavClick(e, 'coach.html')}
            className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
              currentPage === 'coach.html'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            코치진 소개
          </a>
          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('fast');
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl text-center text-sm shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>빠른 상담 신청하기</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
