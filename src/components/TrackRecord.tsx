import React from 'react';
import { TRACK_RECORD } from '../data/portfolioData';

export const TrackRecord: React.FC = () => {
  const mainExperiences = TRACK_RECORD.slice(0, 4);
  const compactExperiences = TRACK_RECORD.slice(4);

  return (
    <section className="w-full px-6 lg:px-10 pb-20" id="track-record">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Title */}
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase text-[#059669] tracking-widest">
              KIPRAH & KEPEMIMPINAN
            </span>
            <span className="w-8 h-px bg-[#059669]/40"></span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Perjalanan Karier & Komunitas
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Dari ngoding buat perusahaan multinasional, mimpin komunitas developer, sampai ngajar ribuan orang belajar AI dan web development.
          </p>
        </div>

        {/* Experience Stream Grid */}
        <div className="space-y-4">
          {mainExperiences.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow border border-[#E2E8F0]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-4 space-y-2">
                  <span
                    className={`inline-block px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${
                      item.isCurrent
                        ? 'bg-[#adedd3] text-[#306d58]'
                        : 'bg-[#F8FAFC] text-[#059669] border border-[#E2E8F0]'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#059669]">
                    {item.organization}
                  </p>
                  <p className="text-[11px] uppercase font-bold text-[#475569] tracking-wider">
                    {item.period} • {item.location}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-3 text-[#475569] text-xs sm:text-sm leading-relaxed">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-2 shrink-0"></span>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Compact Triple Grid for Engineering Roles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {compactExperiences.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8FAFC] rounded-[20px] p-6 space-y-3 shadow-sm border border-[#E2E8F0]"
              >
                <span className="text-[11px] font-bold uppercase text-[#475569] tracking-wider block">
                  {item.period}
                </span>
                <h4 className="text-base font-bold text-[#0F172A]">
                  {item.role}
                </h4>
                <p className="text-xs font-semibold text-[#059669]">
                  {item.organization}
                </p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.points[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
