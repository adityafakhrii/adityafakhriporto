import React from 'react';
import { Award, DollarSign, Copy, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CERTIFICATIONS, TECH_STACK } from '../data/portfolioData';

interface EducationAndCredentialsProps {
  onOpenVerification: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const EducationAndCredentials: React.FC<EducationAndCredentialsProps> = ({
  onOpenVerification,
  onCopyText,
}) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left Column: Education, Tech Arsenal & Awards (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          
          {/* Education Card */}
          <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-xs space-y-3.5 border border-[#E2E8F0]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#059669]">
                Landasan akademik
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#adedd3] text-[#306d58] text-xs font-semibold">
                IPK 3.83 / 4.00
              </span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                Sarjana Informatika (S.Kom)
              </h3>
              <p className="text-xs sm:text-sm text-[#059669] font-medium mt-0.5">
                Universitas Widyatama • 2020 – 2024
              </p>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Dianugerahi predikat <strong className="text-[#0F172A] font-semibold">Lulusan Terbaik Teknik Informatika Angkatan 2024</strong> serta dinobatkan sebagai <strong className="text-[#0F172A] font-semibold">Lulusan Terbaik MSIB Bangkit Academy</strong>.
            </p>
          </div>

          {/* Tech Stack Pills Array (Nested radius: rounded-lg) */}
          <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-xs space-y-3 border border-[#E2E8F0]">
            <div className="space-y-0.5">
              <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                Tech Stack & Tools
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <button
                  key={tech}
                  onClick={() => onCopyText(tech, `Stack "${tech}" disalin`)}
                  type="button"
                  title={`Klik untuk salin ${tech}`}
                  className="px-3 py-1 rounded-lg bg-[#F8FAFC] hover:bg-[#022C22] text-[#0F172A] hover:text-white border border-[#E2E8F0] text-xs font-medium transition-colors cursor-pointer"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Awards Block */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 lg:p-7 space-y-4 shadow-xs border border-[#E2E8F0]">
            <span className="text-xs font-semibold text-[#059669] block">
              Penghargaan resmi
            </span>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#adedd3] flex items-center justify-center shrink-0">
                  <Award size={15} className="text-[#064E3B]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    Distinction Graduate (Top 10% dari 5.013 Siswa)
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Bangkit Academy • Jul 2023
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#adedd3] flex items-center justify-center shrink-0">
                  <DollarSign size={15} className="text-[#064E3B]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    Penerima Hibah Rp30.000.000 (PHP2D)
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Kemendikbudristek RI untuk pengembangan SIACTA • Des 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Official Certifications (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 bg-white rounded-2xl p-6 lg:p-7 shadow-xs flex flex-col justify-between border border-[#E2E8F0] space-y-5"
        >
          <div className="space-y-4">
            <div className="space-y-0.5">
              <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                Sertifikasi Resmi
              </h3>
            </div>

            <div className="space-y-2.5">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3.5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] space-y-1 hover:border-[#059669]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#059669]">
                      {cert.issuer} • {cert.date}
                    </span>
                    {cert.credentialId && (
                      <button
                        onClick={() =>
                          onCopyText(cert.credentialId!, `ID Sertifikat ${cert.credentialId} disalin!`)
                        }
                        className="text-[11px] text-[#64748B] hover:text-[#0F172A] flex items-center gap-1 font-mono cursor-pointer"
                        title="Salin ID Sertifikat"
                      >
                        <Copy size={11} />
                        <span>Salin ID</span>
                      </button>
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    {cert.title}
                  </h4>
                  {cert.credentialId ? (
                    <p className="text-[11px] text-[#64748B] font-mono">
                      ID: {cert.credentialId}
                    </p>
                  ) : (
                    <p className="text-[11px] text-[#64748B]">
                      {cert.linkText}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenVerification}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#022C22] hover:bg-[#064E3B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
            >
              <span>Verifikasi portfolio</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
