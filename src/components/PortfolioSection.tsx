import React from 'react';
import { PORTFOLIO_ITEMS } from '../data/contentData';
import { ChevronRight, ExternalLink } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  // Curated images for lecture & university workshop visuals
  const portfolioPhotos = [
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop', // Samsung lecture
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop', // Public agency
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop', // Next step workshop
    'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=600&auto=format&fit=crop', // Hyundai SCM
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop', // SK innovation
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop', // Biomedical
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop', // Digital marketing
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop'  // Resume clinic
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="lecture-portfolio-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            출강 포트폴리오
          </h2>
        </div>

        {/* 8 Cards Grid (4x2 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div
              key={`${item.university}-${idx}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col"
            >
              {/* Photo Thumbnail */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={('image' in item && (item as any).image) || portfolioPhotos[idx % portfolioPhotos.length]}
                  alt={item.program}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = portfolioPhotos[idx % portfolioPhotos.length];
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  {item.badge}
                </span>
                <span className="absolute bottom-2.5 left-3 text-white text-xs font-semibold">
                  {item.university}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-blue-600 block mb-1">
                    {item.university}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition">
                    {item.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
