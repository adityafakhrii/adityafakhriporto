import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section className="w-full px-6 lg:px-10 pb-20" id="layanan">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase text-[#059669] tracking-widest">
                KOLABORASI & LAYANAN
              </span>
              <span className="w-8 h-px bg-[#059669]/40"></span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Format Kolaborasi Profesional
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Bisa diundang buat ngisi sesi talkshow berbobot, bimbing tim tech biar sat-set ngadopsi AI, atau bareng-bareng bangun sistem digital yang scalable.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#059669]">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
            <span>Jadwal Terbuka untuk Q1 & Q2</span>
          </div>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E2E8F0] flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bebas text-3xl text-[#059669] font-bold">
                    {service.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] font-bold uppercase tracking-wider text-[#475569]">
                    {service.audience}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors">
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
                <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#475569] block">
                    Output & Deliverables:
                  </span>
                  <ul className="space-y-1.5">
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
                  className="w-full inline-flex items-center justify-between px-5 py-2.5 rounded-full bg-[#F8FAFC] hover:bg-[#022C22] text-[#0F172A] hover:text-white border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer group/btn"
                >
                  <span>Ajukan Kolaborasi Ini</span>
                  <ArrowUpRight
                    size={14}
                    className="text-[#059669] group-hover/btn:text-white transition-colors"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
