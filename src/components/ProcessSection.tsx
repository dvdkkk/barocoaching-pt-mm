import React, { useState } from 'react';
import {
  PhoneCall,
  CalendarCheck,
  Check,
  CheckCircle,
  FileCheck,
  Award,
  Video,
  MapPin,
  FileText,
  PenTool,
  Users
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenFastConsult: () => void;
  onOpenCustomConsult: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenFastConsult,
  onOpenCustomConsult
}) => {
  const [selectedRole, setSelectedRole] = useState('신입');
  const [selectedField, setSelectedField] = useState('대기업');
  const [selectedMethod, setSelectedMethod] = useState<'online' | 'offline'>('online');

  const coachingRoles = ['인턴', '신입', '경력'];
  const coachingFields = ['대기업', '공기업', '금융권', '외국계기업', '중견/강소기업', '진로/직무'];
  const interviewTypes = [
    'PT면접', '인성면접', '일반면접', '토론면접', '경험면접',
    '상황면접', '실무진면접', '임원면접', '창의성면접', '직무역량면접',
    '팀 빌딩', '세일즈면접', '집단면접', '영어면접', 'AI면접'
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="process-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
            STEP BY STEP PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            코칭은 어떻게 진행되나요?
          </h2>
        </div>

        {/* Steps Timeline / List */}
        <div className="space-y-12">
          {/* Step 1: 상담 신청 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-10">
            <div className="md:col-span-3">
              <span className="text-blue-600 font-black text-sm block mb-1">STEP 01</span>
              <h3 className="text-xl font-bold text-slate-900">상담 신청</h3>
            </div>
            <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                코칭을 희망하시는 분들은 <strong className="text-blue-700">[전화상담]</strong>,{' '}
                <strong className="text-amber-600">[빠른상담]</strong>,{' '}
                <strong className="text-indigo-700">[1:1 개인별 맞춤 상담신청]</strong> 중 선택하고 신청합니다.
              </p>
            </div>
          </div>

          {/* Step 2: 코칭 전 기초상담 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-10">
            <div className="md:col-span-3">
              <span className="text-blue-600 font-black text-sm block mb-1">STEP 02</span>
              <h3 className="text-xl font-bold text-slate-900">코칭 전 기초상담</h3>
            </div>
            <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                본격적인 코칭에 앞서 각 코칭 파트별 담당자 분과 사전 상담을 통해 개인의 고민과 문제점을 파악합니다.
              </p>
            </div>
          </div>

          {/* Step 3: 코칭 유형 선택 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-12">
            <div className="md:col-span-3">
              <span className="text-blue-600 font-black text-sm block mb-1">STEP 03</span>
              <h3 className="text-xl font-bold text-slate-900">코칭 유형 선택</h3>
            </div>
            <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-6">
              <p className="text-slate-700 text-sm sm:text-base font-medium">
                기업과 개인에 맞는 맞춤형 코칭 수업을 위해{' '}
                <span className="text-blue-700 font-bold">[코칭 분야 &gt;&gt; 면접유형 &gt;&gt; 진행 방식]</span>을 협의합니다.
              </p>

              {/* 1. 코칭 멘토링 분야 */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2.5">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>코칭, 멘토링 분야</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coachingRoles.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setSelectedRole(role)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                        selectedRole === role
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. 코칭 분야 선택 */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2.5">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>코칭 분야 선택</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coachingFields.map((field) => (
                    <button
                      key={field}
                      type="button"
                      onClick={() => setSelectedField(field)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                        selectedField === field
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {field}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. 면접 유형 파악 */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2.5">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>면접 유형 파악</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {interviewTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium hover:border-blue-400 transition"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  * 기타 희망하는 면접 유형도 협의해서 진행합니다.
                </p>
              </div>

              {/* 4. 진행 방식 선택 */}
              <div className="pt-2 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>진행 방식 선택</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-1.5">
                      <Video className="w-4 h-4" />
                      <span>비대면 방식</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      (ZOOM, GOOGLE MEET)을 활용해서 공유된 비대면 인터넷 주소에 접속 후 진행됩니다.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>대면 방식</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      신청자의 거주지 등을 확인 후 장소는 별도 안내드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: 수강신청 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-slate-100 pb-10">
            <div className="md:col-span-3">
              <span className="text-blue-600 font-black text-sm block mb-1">STEP 04</span>
              <h3 className="text-xl font-bold text-slate-900">수강신청</h3>
            </div>
            <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                수강 희망 날짜와 시간을 조율하고, 개인별 맞춤 수업을 위한 수업시수를 조율하여 수강신청을 진행합니다.
              </p>
            </div>
          </div>

          {/* Step 5: 코칭수업 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6">
            <div className="md:col-span-3">
              <span className="text-blue-600 font-black text-sm block mb-1">STEP 05</span>
              <h3 className="text-xl font-bold text-slate-900">코칭수업</h3>
            </div>
            <div className="md:col-span-9 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-6">
              {/* 3 Step Icons from Screenshot */}
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                  <FileText className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">서류전형</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                  <PenTool className="w-6 h-6 text-indigo-600 mb-2" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">필기전형</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                  <Users className="w-6 h-6 text-emerald-600 mb-2" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">면접전형</span>
                </div>
              </div>

              <p className="text-slate-800 font-semibold text-sm sm:text-base">
                코칭 전문가와 맞춤 코칭을 진행합니다. 개인별 디테일한 코칭으로 다양한 피드백과 자신감을 가질 수 있습니다.
              </p>

              <ul className="space-y-2.5 text-slate-700 text-sm sm:text-base border-t border-slate-200 pt-4">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>개인의 상황 면담 &gt;&gt; 개인 상황에 맞춘 컨설팅 진행 &gt;&gt; 부족한 부분 질의응답</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>취업(자소서 &amp; 면접 준비도) 체크</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>상호 간 코칭 주제 선정 및 목표 수립</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>피드백 및 점검을 통한 실력 향상 코칭 진행</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Two Large Action CTA Buttons from Page 4 Screenshot */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* Fast Consultation Button (Orange) */}
          <button
            type="button"
            onClick={onOpenFastConsult}
            className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-base sm:text-lg py-5 px-6 rounded-2xl shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-all cursor-pointer"
            id="process-fast-consult-btn"
          >
            <PhoneCall className="w-6 h-6" />
            <span>빠른상담 신청하기</span>
          </button>

          {/* Custom Consultation Button (Navy) */}
          <button
            type="button"
            onClick={onOpenCustomConsult}
            className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base sm:text-lg py-5 px-6 rounded-2xl shadow-lg shadow-slate-900/20 hover:scale-[1.01] transition-all cursor-pointer"
            id="process-custom-consult-btn"
          >
            <FileCheck className="w-6 h-6 text-blue-400" />
            <span>개인별 맞춤 상담 신청하기</span>
          </button>
        </div>
      </div>
    </section>
  );
};
