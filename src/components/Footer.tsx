import React, { useState } from 'react';
import { Mail, MapPin, Clock, ShieldCheck, Send } from 'lucide-react';
import { FooterPolicyModal, PolicyType } from './FooterPolicyModal';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenConsultation?: (type?: 'fast' | 'custom') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      {/* Policy Modal */}
      <FooterPolicyModal
        policyType={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

      {/* Main Footer Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300 pb-6 border-b border-slate-800">
          <button
            type="button"
            onClick={() => setActivePolicy('privacy')}
            className="text-white hover:text-blue-400 transition cursor-pointer"
          >
            개인정보 수집 / 이용동의
          </button>
          <span className="text-slate-700">|</span>
          <button
            type="button"
            onClick={() => setActivePolicy('refund')}
            className="hover:text-white transition cursor-pointer"
          >
            교습비 반환 규정
          </button>
          <span className="text-slate-700">|</span>
          <button
            type="button"
            onClick={() => setActivePolicy('no-email')}
            className="hover:text-white transition cursor-pointer"
          >
            이메일무단수집거부
          </button>
        </div>

        <div className="pt-6 space-y-2 text-slate-400 leading-relaxed">
          <p className="font-bold text-slate-300">
            회사명 : (주)한국자격연구원
          </p>
          <p>
            대표 : 김선호  | 사업자 등록번호 : 896-86-01229  | 통신판매업신고번호 : 제2021-서울강서-3001호  | 개인정보 보호책임자 : 김은선
          </p>
          <p>
            주소 : 서울특별시 강서구 마곡중앙6로 21, (마곡동,이너매스마곡) / 서울 관악구 남부순환로 1568 방송정보빌딩 402호

          </p>
          <p>
            홈페이지 관리자 : 바로코칭 한국자격연구원, (운영지원 : 애드포컴퍼니)

          </p>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} Baro Coaching. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            대기업, 공기업, 금융권, 바이오 전문 취업면접 1:1 맞춤형 종합 코칭 솔루션
          </p>
        </div>
      </div>
    </footer>
  );
};
