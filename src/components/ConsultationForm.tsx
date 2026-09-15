import React, { useState } from 'react';
import { CheckCircle, Send, PhoneCall, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { FooterPolicyModal } from './FooterPolicyModal';

interface ConsultationFormProps {
  isModal?: boolean;
  onSuccessDone?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isModal = false,
  onSuccessDone
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Form states: 이름, 연락처, 지원기업명 및 직무, 문의내용, 추가 문의사항 또는 고민
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [targetCompany, setTargetCompany] = useState('');
  const [inquiryContent, setInquiryContent] = useState('바로코칭상담신청');
  const [additionalMessage, setAdditionalMessage] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Required fields validation
    if (!name.trim()) {
      alert('이름을 입력해 주세요.');
      return;
    }
    if (!phone.trim()) {
      alert('연락처를 입력해 주세요.');
      return;
    }
    if (!targetCompany.trim()) {
      alert('지원기업명 및 직무를 입력해 주세요.');
      return;
    }
    if (!agreeTerms) {
      alert('개인정보 수집 및 이용 동의가 필요합니다.');
      return;
    }

    // 1. 즉시 성공 처리 (Optimistic UI: 0.1초 내 즉각 성공 화면 전환)
    setSubmitted(true);

    // 2. 백그라운드 비동기 데이터 전송 (InputHaven API & keepalive: true)
    try {
      const formData = new FormData();
      formData.append('_form_id', 'f2475e7054053c817c363978d67abfa0');
      
      // 요청된 5개 데이터 항목만 수집 및 전송
      formData.append('name', name.trim());
      formData.append('phone', phone.trim());
      formData.append('target_company', targetCompany.trim());
      formData.append('inquiry_content', inquiryContent.trim() || '바로코칭상담신청');
      formData.append('additional_message', additionalMessage.trim());

      // InputHaven 대시보드 및 알림용 통합 메시지
      const fullMessageText = [
        `[이름] ${name.trim()}`,
        `[연락처] ${phone.trim()}`,
        `[지원기업명 및 직무] ${targetCompany.trim()}`,
        `[문의내용] ${inquiryContent.trim() || '바로코칭상담신청'}`,
        additionalMessage.trim() ? `[추가 문의사항 또는 고민] ${additionalMessage.trim()}` : ''
      ]
        .filter(Boolean)
        .join('\n');

      formData.append('message', fullMessageText);

      // Background Fetch with keepalive guarantee
      fetch('https://inputhaven.com/api/v1/submit', {
        method: 'POST',
        body: formData,
        keepalive: true,
        mode: 'no-cors'
      }).catch((err) => {
        console.warn('Background submission notice:', err);
      });
    } catch (err) {
      console.warn('Background fetch error:', err);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setTargetCompany('');
    setInquiryContent('바로코칭상담신청');
    setAdditionalMessage('');
    if (onSuccessDone) {
      onSuccessDone();
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle className="w-9 h-9" />
        </div>
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>신청 접수 완료</span>
        </div>
        <h4 className="text-2xl font-black text-slate-900 tracking-tight">
          상담 신청이 완료되었습니다!
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
          작성해주신 연락처(<strong className="text-blue-600 font-bold">{phone}</strong>) 및 지원기업(
          <strong className="text-slate-800">{targetCompany}</strong>) 정보를 바탕으로, 전문 상담 담당자가 30분 이내에 신속하고 친절하게 연락드리겠습니다.
        </p>

        <div className="pt-6 max-w-xs mx-auto">
          <button
            type="button"
            onClick={handleReset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-md cursor-pointer"
          >
            확인
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      action="https://inputhaven.com/api/v1/submit"
      method="POST"
      onSubmit={handleSubmit}
      className={`space-y-4 ${isModal ? 'p-6' : 'p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xl'}`}
    >
      {/* Hidden input for InputHaven Form ID */}
      <input type="hidden" name="_form_id" value="f2475e7054053c817c363978d67abfa0" />

      {/* Quick Consultation Badge Header */}
      <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-50/90 border border-amber-200/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-amber-950 block">빠른 상담 신청</span>
            <span className="text-[11px] text-amber-700 font-medium">전문 담당자가 30분 이내에 연락 드립니다</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-white px-2.5 py-1 rounded-full border border-amber-200">
          <Clock className="w-3 h-3 text-amber-600" />
          <span>신속 회신</span>
        </div>
      </div>

      {/* 1. 이름 (필수) & 연락처 (필수) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="홍길동"
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white placeholder:text-slate-400 font-medium"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-1234-5678"
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white placeholder:text-slate-400 font-medium"
          />
        </div>
      </div>

      {/* 2. 지원기업명 및 직무 (필수) */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          지원기업명 및 직무 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="target_company"
          required
          value={targetCompany}
          onChange={(e) => setTargetCompany(e.target.value)}
          placeholder="예: 현대자동차 생산기술 / 한국전력공사 사무직 / 삼성전자 마케팅"
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white placeholder:text-slate-400 font-medium"
        />
      </div>

      {/* 3. 문의내용 (기본값: '바로코칭상담신청', 노출, 선택 입력) */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          문의내용 <span className="text-xs font-normal text-slate-400">(선택)</span>
        </label>
        <input
          type="text"
          name="inquiry_content"
          value={inquiryContent}
          onChange={(e) => setInquiryContent(e.target.value)}
          placeholder="바로코칭상담신청"
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50 font-medium text-slate-800"
        />
      </div>

      {/* 4. 추가 문의사항 또는 고민 (선택) */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          추가 문의사항 또는 고민 <span className="text-xs font-normal text-slate-400">(선택)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          value={additionalMessage}
          onChange={(e) => setAdditionalMessage(e.target.value)}
          placeholder="현재 준비 단계, 서류 마감/면접 일정 등 궁금한 사항을 자유롭게 적어주세요."
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white placeholder:text-slate-400 font-medium resize-none"
        />
      </div>

      {/* 5. 개인정보 동의 (필수) */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id={`agree-terms-${isModal ? 'modal' : 'page'}`}
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mt-0.5 rounded-sm text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <label
            htmlFor={`agree-terms-${isModal ? 'modal' : 'page'}`}
            className="text-xs text-slate-500 cursor-pointer select-none leading-relaxed"
          >
            <span className="text-slate-700 font-semibold">개인정보 수집 및 이용 동의</span> (상담 연락 및 맞춤 안내 목적) <span className="text-red-500">*</span>
          </label>
        </div>
        <button
          type="button"
          onClick={() => setShowPrivacyModal(true)}
          className="text-xs text-blue-600 font-semibold hover:underline shrink-0 ml-2 cursor-pointer"
        >
          자세히
        </button>
      </div>

      <FooterPolicyModal
        policyType={showPrivacyModal ? 'privacy' : null}
        onClose={() => setShowPrivacyModal(false)}
      />

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-xl font-bold text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/20 hover:scale-[1.005]"
        >
          <Send className="w-4 h-4" />
          <span>빠른 상담 신청하기</span>
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        <span>입력하신 정보는 상담 목적으로만 안전하게 보호됩니다.</span>
      </div>
    </form>
  );
};
