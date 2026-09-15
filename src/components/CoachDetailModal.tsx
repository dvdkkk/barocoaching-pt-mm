import React, { useState, useMemo } from 'react';
import { X, Search, Trophy, Landmark, Building2, Award, CheckCircle, Flame, RefreshCw, Star, Layers } from 'lucide-react';
import { CoachDetail, COACHES_LIST, MALE_COACH_IMAGE, FEMALE_COACH_IMAGE } from '../data/coachesData';

interface CoachDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  coach?: CoachDetail | null;
}

export const CoachDetailModal: React.FC<CoachDetailModalProps> = ({ isOpen, onClose, coach }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'major' | 'public' | 'finance'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Current active coach data or fallback to representative coach
  const currentCoach: CoachDetail = coach || COACHES_LIST[0];

  // Dynamically extract company lists for selected coach
  const majorCompanies = useMemo(() => currentCoach.passedCompanies?.major || [], [currentCoach]);
  const publicCompanies = useMemo(() => currentCoach.passedCompanies?.public || [], [currentCoach]);
  const financeCompanies = useMemo(() => currentCoach.passedCompanies?.finance || [], [currentCoach]);

  // Merge & filter companies for search
  const filteredList = useMemo(() => {
    let list: { name: string; type: 'major' | 'public' | 'finance' }[] = [];
    
    if (activeTab === 'all' || activeTab === 'major') {
      list.push(...majorCompanies.map(name => ({ name, type: 'major' as const })));
    }
    if (activeTab === 'all' || activeTab === 'public') {
      list.push(...publicCompanies.map(name => ({ name, type: 'public' as const })));
    }
    if (activeTab === 'all' || activeTab === 'finance') {
      list.push(...financeCompanies.map(name => ({ name, type: 'finance' as const })));
    }

    const unique = Array.from(new Map(list.map(item => [item.name, item])).values());

    if (!searchQuery.trim()) return unique;
    return unique.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [activeTab, searchQuery, majorCompanies, publicCompanies, financeCompanies]);

  // ALL HOOKS CALLED UNCONDITIONALLY BEFORE ANY EARLY RETURN
  if (!isOpen) return null;

  const hasInterviewerHistory = currentCoach.interviewerHistory && currentCoach.interviewerHistory.length > 0;
  const hasCustomCategories = currentCoach.customCategories && currentCoach.customCategories.length > 0;

  return (
    <div className="fixed inset-0 z-100 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Modal Window Container - Browser mock window design */}
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-slate-900 shadow-2xl transition-all w-full max-w-5xl border border-slate-200 flex flex-col h-[90vh] max-h-[850px] animate-in fade-in zoom-in-95 duration-200">
          
          {/* OS Window Header mockup bar */}
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500 block hover:opacity-80 transition cursor-pointer" onClick={onClose} title="닫기" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 block opacity-50" />
              <span className="w-3.5 h-3.5 rounded-full bg-green-500 block opacity-50" />
              <span className="text-slate-400 text-xs font-semibold ml-4 tracking-tight select-none hidden sm:inline truncate max-w-md">
                https://barocoaching.com/coach/{currentCoach.id}_profile.html
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-sm select-none uppercase">
                {currentCoach.name} Profile
              </span>
              <button 
                type="button" 
                onClick={onClose}
                className="text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 scrollbar-thin">
            
            {/* Coach Overview Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Photo Portrait */}
              <div className="md:col-span-4 relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md">
                <img
                  src={currentCoach.image}
                  alt={currentCoach.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = MALE_COACH_IMAGE;
                    }
                  }}
                  className="w-full h-72 sm:h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-black text-amber-400 block mb-0.5 uppercase tracking-wider">
                    Baro Coaching Faculty
                  </span>
                  <p className="text-xl font-extrabold text-white">{currentCoach.name}</p>
                  <p className="text-xs text-slate-300 font-medium truncate">{currentCoach.role}</p>
                </div>
              </div>

              {/* Bio & Career Text */}
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-100">
                  <Flame className="w-3.5 h-3.5 animate-pulse text-red-600" />
                  <span>{currentCoach.currentRole}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  {currentCoach.tagline}
                </h3>

                <div className="space-y-2.5 pt-2 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {currentCoach.career.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                      <p className="font-semibold text-slate-800 text-xs sm:text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DYNAMIC CATEGORIES SECTION (원본텍스트의 새로운 카테고리 반영) */}
            {hasCustomCategories && (
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  <span>{currentCoach.name} 직무 특화 카테고리</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentCoach.customCategories?.map((category, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-100 rounded-2xl p-5 shadow-xs space-y-3">
                      <div className="flex items-center justify-between border-b border-blue-100 pb-2.5">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <h5 className="font-bold text-sm text-slate-900">{category.title}</h5>
                        </div>
                        {category.badge && (
                          <span className="text-[10px] font-extrabold text-blue-600 bg-blue-100/80 border border-blue-200 px-2 py-0.5 rounded-full">
                            {category.badge}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 leading-relaxed font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONDITIONAL INTERVIEWER HISTORY SECTION (면접관 출신이력이 있는 경우에만 표시) */}
            {hasInterviewerHistory && (
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <span>면접평가위원 및 인사심사관 참여 이력</span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentCoach.interviewerHistory?.map((group, groupIdx) => (
                    <div key={groupIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col h-60">
                      <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5 mb-3">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span className="font-bold text-sm text-slate-900">{group.category}</span>
                      </div>
                      <div className="flex-1 overflow-y-auto text-xs text-slate-600 leading-relaxed scrollbar-thin pr-1">
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((item, itemIdx) => (
                            <span key={itemIdx} className="bg-white border border-slate-200/80 rounded-md px-2 py-0.5 font-medium hover:border-blue-400 transition">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION 3: 합격자 배출 및 대면 코칭 기업 실적 */}
            <div className="border-t border-slate-200 pt-8 space-y-4 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <span>바로코칭 합격자 배출 &amp; 코칭 기업 실적</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">유수 대기업&middot;공기업&middot;금융권 배출 완료</p>
                </div>

                {/* Live Search Input */}
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="목표 기업명 검색 (예: 삼성, 농협...)"
                    className="w-full text-xs pl-9 pr-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  />
                </div>
              </div>

              {/* Filtering Tabs */}
              <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-3">
                <button
                  type="button"
                  onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'all' 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  전체보기 ({majorCompanies.length + publicCompanies.length + financeCompanies.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('major')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'major' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  대기업 ({majorCompanies.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('public')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'public' 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                  }`}
                >
                  공기업 ({publicCompanies.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('finance')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'finance' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                >
                  금융권 ({financeCompanies.length})
                </button>
              </div>

              {/* Render Filtered Companies */}
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 max-h-72 overflow-y-auto scrollbar-thin">
                {filteredList.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                    {filteredList.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`p-2.5 rounded-lg border text-[11px] sm:text-xs font-bold flex items-center justify-between transition-all bg-white hover:scale-102 hover:shadow-2xs ${
                          item.type === 'major' 
                            ? 'border-blue-100/80 text-slate-800 border-l-3 border-l-blue-500' 
                            : item.type === 'public' 
                            ? 'border-emerald-100/80 text-slate-800 border-l-3 border-l-emerald-500' 
                            : 'border-indigo-100/80 text-slate-800 border-l-3 border-l-indigo-500'
                        }`}
                      >
                        <span className="truncate">{item.name}</span>
                        <span className={`text-[9px] scale-90 origin-right px-1.5 py-0.5 rounded-sm shrink-0 ${
                          item.type === 'major' 
                            ? 'bg-blue-50 text-blue-600' 
                            : item.type === 'public' 
                            ? 'bg-emerald-50 text-emerald-600' 
                            : 'bg-indigo-50 text-indigo-600'
                        }`}>
                          {item.type === 'major' ? '대기업' : item.type === 'public' ? '공기업' : '금융권'}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <RefreshCw className="w-8 h-8 text-slate-300 mx-auto mb-2 animate-spin duration-3000" />
                    <p className="text-slate-400 text-sm">검색 결과에 맞는 코칭 기업이 없습니다.</p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Modal Footer Controls */}
          <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-200 shrink-0">
            <p className="text-xs text-slate-400 font-medium">합격을 부르는 명품 바로코칭</p>
            <button
              type="button"
              onClick={onClose}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition cursor-pointer shadow-xs"
            >
              상세 창 닫기
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
