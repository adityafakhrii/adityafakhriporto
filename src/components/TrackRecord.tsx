import React from 'react';
import { motion } from 'motion/react';
import { TRACK_RECORD } from '../data/portfolioData';

export const TrackRecord: React.FC = () => {
  const mainExperiences = TRACK_RECORD.slice(0, 4);
  const compactExperiences = TRACK_RECORD.slice(4);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pb-20" id="track-record">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1.5 max-w-2xl"
        >
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            Perjalanan Karier & Komunitas
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Dari ngoding buat perusahaan multinasional, mimpin komunitas developer, sampai ngajar ribuan orang belajar AI dan web development.
          </p>
        </motion.div>

        {/* Experience Stream Grid */}
        <div className="space-y-3.5">
          {mainExperiences.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-white rounded-2xl p-6 lg:p-7 shadow-xs hover:border-[#059669]/50 transition-colors border border-[#E2E8F0]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-4 space-y-1.5">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-md text-[11px] font-medium ${
                      item.isCurrent
                        ? 'bg-[#adedd3] text-[#306d58]'
                        : 'bg-[#F8FAFC] text-[#059669] border border-[#E2E8F0]'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#059669]">
                    {item.organization}
                  </p>
                  <p className="text-xs text-[#64748B]">
                    {item.period} • {item.location}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-2 text-[#475569] text-xs sm:text-sm leading-relaxed">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-2 shrink-0"></span>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Compact Triple Grid for Engineering Roles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
            {compactExperiences.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -2, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } }}
                className="bg-[#F8FAFC] rounded-xl p-5 space-y-2 shadow-xs border border-[#E2E8F0]"
              >
                <span className="text-[11px] font-medium text-[#64748B] block">
                  {item.period}
                </span>
                <h4 className="text-sm font-bold text-[#0F172A]">
                  {item.role}
                </h4>
                <p className="text-xs font-semibold text-[#059669]">
                  {item.organization}
                </p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.points[0]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
