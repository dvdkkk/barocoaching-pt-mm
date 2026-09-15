import React from 'react';
import { ShieldCheck, ArrowRight, Award, Building2 } from 'lucide-react';
import { CoachDetail, MALE_COACH_IMAGE } from '../data/coachesData';

interface ModernCoachCardProps {
  coach: CoachDetail;
  onOpenDetail?: (coach: CoachDetail) => void;
  variant?: 'grid' | 'carousel';
}

export const ModernCoachCard: React.FC<ModernCoachCardProps> = ({
  coach,
  onOpenDetail,
  variant = 'grid'
}) => {
  return (
    <div
      className="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
      onClick={() => onOpenDetail?.(coach)}
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/4.5] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
        <img
          src={coach.image}
          alt={coach.name}
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.fallback) {
              target.dataset.fallback = 'true';
              target.src = MALE_COACH_IMAGE;
            }
          }}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Ambient Dark Gradient on bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent group-hover:from-slate-950/90 transition-colors" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="bg-slate-900/80 backdrop-blur-md text-slate-100 border border-white/15 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
            <Building2 className="w-3 h-3 text-blue-400" />
            <span>면접관 출신</span>
          </span>

          <span className="bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-sky-200" />
            <span>검증 코치</span>
          </span>
        </div>

        {/* Bottom Floating Info inside Image */}
        <div className="absolute bottom-3 left-3.5 right-3.5">
          <div className="flex items-center gap-1.5">
            <h3 className="text-white font-black text-lg tracking-tight drop-shadow-xs">
              {coach.name}
            </h3>
            <span className="text-[11px] font-semibold text-blue-300">코치</span>
          </div>
          <p className="text-[11px] font-medium text-slate-300 truncate mt-0.5">
            {coach.role}
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
        <div className="space-y-3">
          {/* Main Role / Tagline Pill */}
          <div className="flex items-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50/80 text-blue-700 text-[11px] font-bold border border-blue-100/80 w-full truncate">
              <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">{coach.currentRole || coach.role}</span>
            </span>
          </div>

          {/* Career Highlights */}
          <div className="h-[120px] overflow-y-auto pr-1 custom-scrollbar">
            <ul className="space-y-1.5 text-xs text-slate-600">
              {coach.career.map((line, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <span className="font-medium text-slate-700">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
          <span>상세 약력 및 합격사례</span>
          <div className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-200">
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
