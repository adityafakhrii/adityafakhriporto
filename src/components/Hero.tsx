import React from 'react';
import { ArrowUpRight, Menu, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreProjects }) => {
  const handleNavClick = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pt-2 sm:pt-4 pb-14">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-[#022C22] relative shadow-lg border border-[#064E3B]/60">
        
        {/* Subtle Ambient Radial Light (Quiet, without artificial blurred blobs) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(circle at 48% 52%, #064E3B 0%, #022C22 75%)',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] lg:min-h-[700px] relative z-10">
          
          {/* LEFT CANVAS: Luxury Emerald Green (52% on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between p-7 sm:p-10 lg:p-12 relative z-10 text-white"
          >
            
            {/* Top Monogram & Name */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-[#064E3B] flex items-center justify-center font-serif text-lg font-semibold text-white border border-white/10">
                A
              </span>
              <span className="font-serif text-2xl font-semibold text-white tracking-normal">
                Aditya
              </span>
            </div>

            {/* Core Message & Hero Display Typography */}
            <div className="space-y-4 my-8 lg:my-0 max-w-lg">
              <h1 className="font-bebas text-[84px] sm:text-[116px] lg:text-[144px] xl:text-[160px] text-white uppercase leading-[0.85] select-none tracking-tight">
                CREATE
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#a7cfc0] leading-relaxed font-normal">
                Ngulik AI yang beneran kepake. Ngerancang kode yang sat-set & siap scale-up.
              </p>

              {/* Primary Action Controls (Nested radius: rounded-xl, quiet hover without scale) */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onExploreProjects}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#022C22] text-xs font-semibold uppercase tracking-wider hover:bg-[#F8FAFC] transition-colors cursor-pointer shadow-sm group"
                >
                  <span>Lihat karya</span>
                  <ArrowUpRight
                    size={14}
                    className="text-[#022C22] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.button>
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenBooking}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#064E3B]/70 hover:bg-[#064E3B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border border-[#064E3B]"
                >
                  <span>Konsultasi</span>
                </motion.button>
              </div>
            </div>

            {/* Mobile-only Portrait Preview */}
            <div className="lg:hidden flex justify-center my-4">
              <div className="relative w-48 h-60 rounded-2xl overflow-hidden border border-[#064E3B] shadow-md bg-[#064E3B]/30">
                <img
                  src="/assets/aditya-bust.png"
                  alt="Aditya Fakhri Riansyah"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Social Proof (Authentic, quiet, without fake initial circles) */}
            <div className="pt-4 border-t border-[#064E3B]/40 lg:border-none space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  5.000+ Talenta & Developer
                </span>
              </div>
              <p className="text-xs text-[#a7cfc0] max-w-sm leading-relaxed">
                Telah lulus dari program RuangAI, Bangkit Academy, dan komunitas developer se-Indonesia.
              </p>
            </div>
          </motion.div>

          {/* CENTERPIECE: Anchored Bust Portrait bridging emerald & crisp white card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute left-[44%] xl:left-[43%] bottom-0 -translate-x-1/2 h-[86%] xl:h-[90%] z-20 pointer-events-none select-none"
          >
            <img
              src="/assets/aditya-bust.png"
              alt="Aditya Fakhri Riansyah"
              className="h-full w-auto object-contain object-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.32)]"
            />
          </motion.div>

          {/* RIGHT CANVAS: Pure Crisp White Card (48% on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 p-3 sm:p-4 lg:p-4 flex flex-col relative z-10 lg:z-10"
          >
            <div className="bg-white w-full h-full rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between shadow-sm text-[#0F172A] relative overflow-hidden border border-[#E2E8F0]">
              
              {/* Top Navigation Capsule (Inside White Card, sentence case) */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0]">
                <nav className="flex items-center gap-4 sm:gap-6 lg:gap-7">
                  <button
                    onClick={() => handleNavClick('#proyek')}
                    className="text-xs font-medium text-[#475569] hover:text-[#0F172A] transition-colors cursor-pointer"
                  >
                    Karya
                  </button>
                  <button
                    onClick={() => handleNavClick('#track-record')}
                    className="text-xs font-medium text-[#475569] hover:text-[#0F172A] transition-colors cursor-pointer"
                  >
                    Track record
                  </button>
                  <button
                    onClick={() => handleNavClick('#layanan')}
                    className="text-xs font-medium text-[#475569] hover:text-[#0F172A] transition-colors cursor-pointer"
                  >
                    Layanan
                  </button>
                  <button
                    onClick={() => handleNavClick('#kontak')}
                    className="text-xs font-medium text-[#475569] hover:text-[#0F172A] transition-colors cursor-pointer"
                  >
                    Kontak
                  </button>
                </nav>

                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="w-8 h-8 rounded-lg bg-[#F8FAFC] hover:bg-[#E2E8F0] border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] transition-colors cursor-pointer"
                  title="Ajukan kolaborasi"
                  aria-label="Menu navigasi & booking"
                >
                  <Menu size={15} />
                </button>
              </div>

              {/* Role Headline & Value Proposition (Offset right to give silhouette breathing space) */}
              <div className="my-6 space-y-3 max-w-md lg:max-w-xs xl:max-w-sm lg:ml-auto relative z-30">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                  <span className="text-xs font-semibold text-[#059669]">
                    Open collab untuk
                  </span>
                </div>

                <h2 className="font-sans text-2xl sm:text-3xl lg:text-[30px] xl:text-[34px] font-bold text-[#0F172A] leading-tight tracking-tight">
                  Mentoring AI, Speaker & Proyek Web
                </h2>

                <p className="font-sans text-sm text-[#475569] leading-relaxed">
                  Spesialis ekosistem Laravel, Modern Web, dan implementasi AI praktis yang anti-ribet.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-xs font-medium">
                    Laravel 12
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-xs font-medium">
                    Gen-AI System
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-xs font-medium">
                    Next.js
                  </span>
                </div>
              </div>

              {/* Bottom Testimonial Card (Positioned bottom-right like the reference layout) */}
              <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-[#E2E8F0] space-y-2 relative z-30 lg:max-w-sm lg:ml-auto w-full">
                <div className="flex items-start justify-between">
                  <div className="p-1 rounded-md bg-[#adedd3]/60">
                    <Quote size={15} className="text-[#059669] rotate-180" />
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#adedd3] text-[#306d58] text-xs font-semibold">
                    4.9 / 5
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0F172A] font-normal leading-relaxed">
                  Bawa kelas Bangkit tembus rekor kelulusan 93% dan dapet rating mentoring 4.9+ dari ribuan peserta.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#475569] border-t border-[#E2E8F0]">
                  <span className="font-medium text-[#0F172A]">Bangkit & RuangAI</span>
                  <span className="text-[11px] text-[#059669]">Google • Gojek • Codepolitan</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
