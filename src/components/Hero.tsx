import React from 'react';
import { Send, ArrowUpRight, Quote } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreProjects }) => {
  return (
    <section className="w-full px-6 lg:px-10 pt-4 pb-16">
      <div className="max-w-7xl mx-auto rounded-[32px] overflow-hidden bg-[#022C22] relative shadow-[0_24px_50px_-12px_rgba(2,44,34,0.35)]">
        {/* Ambient Glow Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(circle at 48% 55%, #064E3B 0%, #022C22 70%)',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] lg:min-h-[700px] relative z-10">
          {/* LEFT CANVAS: Deep Luxury Emerald (52% on desktop) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-7 lg:p-14 relative z-10 text-white">
            {/* Top Monogram & Name */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#064E3B] flex items-center justify-center font-serif text-lg font-semibold text-white shadow-inner">
                A
              </span>
              <span className="font-serif text-2xl font-semibold text-white tracking-normal">
                Aditya
              </span>
            </div>

            {/* Hero Core Message */}
            <div className="space-y-4 my-10 lg:my-0 max-w-lg">
              <h1 className="font-bebas text-[82px] sm:text-[110px] lg:text-[132px] text-white uppercase leading-[0.9] select-none tracking-tight">
                CREATE
              </h1>
              <p className="font-sans text-base lg:text-lg text-[#a7cfc0] leading-relaxed font-normal">
                Ngulik AI yang beneran kepake. Ngerancang kode yang sat-set & siap scale-up.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onExploreProjects}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#022C22] text-[11px] font-bold uppercase tracking-wider shadow-[0_4px_24px_rgba(255,255,255,0.25)] hover:bg-[#F8FAFC] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>LIHAT KARYA</span>
                  <ArrowUpRight size={14} />
                </button>
                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#064E3B]/70 text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#064E3B] transition-all cursor-pointer border border-[#064E3B]"
                >
                  <span>KONSULTASI</span>
                </button>
              </div>
            </div>

            {/* Social Proof Cluster */}
            <div className="pt-4 border-t border-[#064E3B]/40 lg:border-none">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  <span className="w-9 h-9 rounded-full bg-[#064E3B] border-2 border-[#022C22] flex items-center justify-center text-[11px] text-white font-bold shadow-sm">
                    AF
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#2b6954] border-2 border-[#022C22] flex items-center justify-center text-[11px] text-white font-bold shadow-sm">
                    RA
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#1fa072] border-2 border-[#022C22] flex items-center justify-center text-[11px] text-white font-bold shadow-sm">
                    CP
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#F8FAFC] border-2 border-[#022C22] flex items-center justify-center text-[10px] text-[#022C22] font-extrabold shadow-sm">
                    +5K
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#a7cfc0] max-w-sm leading-relaxed">
                Udah dipercaya 5.000+ learners, developer, dan brand buat tumbuh bareng.
              </p>
            </div>
          </div>

          {/* RIGHT CANVAS: Crisp White Card (48% on desktop) */}
          <div className="lg:col-span-6 p-3 lg:p-4 flex flex-col relative z-20">
            <div className="bg-white w-full h-full rounded-[28px] p-6 lg:p-9 flex flex-col justify-between shadow-[0_20px_40px_-15px_rgba(2,44,34,0.12)] text-[#0F172A] relative overflow-hidden border border-[#E2E8F0]">
              {/* Card Header Nav Capsule */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse"></span>
                  <span className="text-[11px] font-bold uppercase text-[#059669] tracking-widest">
                    OPEN COLLAB BUAT
                  </span>
                </div>
                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#E2E8F0] border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] transition-colors cursor-pointer"
                  title="Hubungi Sekarang"
                  aria-label="Kirim pesan sekarang"
                >
                  <Send size={15} />
                </button>
              </div>

              {/* Role Headline & Positioning */}
              <div className="my-8 max-w-md space-y-3 relative z-30">
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                  Mentoring AI, Speaker & Proyek Web
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed">
                  Spesialis ekosistem Laravel, Modern Web, dan implementasi AI praktis yang anti-ribet.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-[11px] uppercase font-bold tracking-wider">
                    Laravel 12
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-[11px] uppercase font-bold tracking-wider">
                    Gen-AI System
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-[11px] uppercase font-bold tracking-wider">
                    Next.js
                  </span>
                </div>
              </div>

              {/* Bottom Quote Testimonial Card */}
              <div className="bg-[#F8FAFC] p-4 lg:p-6 rounded-[20px] relative z-30 space-y-2 border border-[#E2E8F0]/70">
                <div className="flex items-start justify-between">
                  <div className="p-1 rounded-full bg-[#adedd3]/50">
                    <Quote size={18} className="text-[#059669] rotate-180" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#adedd3] text-[#306d58] text-[11px] font-bold">
                    4.9 / 5
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0F172A] italic font-medium leading-relaxed">
                  Bawa kelas Bangkit tembus rekor kelulusan 93% dan dapet rating mentoring 4.9+ dari ribuan peserta.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-bold uppercase text-[#475569] tracking-wider border-t border-[#E2E8F0]/80">
                  <span className="text-[#0F172A]">BANGKIT & RUANGAI</span>
                  <span className="tracking-widest text-[#059669]">GOOGLE • GOJEK • CODEPOLITAN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
