import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pb-20" id="layanan">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div className="space-y-1.5 max-w-2xl">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              Format Kolaborasi Profesional
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Bisa diundang buat ngisi sesi talkshow berbobot, bimbing tim tech biar sat-set ngadopsi AI, atau bareng-bareng bangun sistem digital yang scalable.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-medium text-[#306d58] px-3 py-1.5 rounded-lg bg-[#adedd3] border border-[#059669]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
            <span>Jadwal terbuka untuk Q1 & Q2</span>
          </div>
        </motion.div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-white rounded-2xl p-6 lg:p-7 shadow-xs hover:border-[#059669]/50 transition-colors border border-[#E2E8F0] flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-bebas text-2xl text-[#059669] font-bold">
                    {service.number}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-medium text-[#475569]">
                    {service.audience}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#059669]">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-1.5 pt-2 border-t border-[#E2E8F0]">
                  <span className="text-[11px] font-medium text-[#64748B] block">
                    Output & deliverables:
                  </span>
                  <ul className="space-y-1">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#0F172A]">
                        <CheckCircle2 size={13} className="text-[#059669] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#022C22] text-[#0F172A] hover:text-white border border-[#E2E8F0] text-xs font-semibold transition-colors cursor-pointer group/btn"
                >
                  <span>Ajukan kolaborasi ini</span>
                  <ArrowUpRight
                    size={14}
                    className="text-[#059669] group-hover/btn:text-white transition-colors"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
