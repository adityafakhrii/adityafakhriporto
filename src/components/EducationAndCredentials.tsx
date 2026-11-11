import React from 'react';
import { Award, DollarSign, ExternalLink, Copy, CheckCircle, ArrowUpRight } from 'lucide-react';
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
    <section className="w-full px-6 lg:px-10 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Column: Education, Tech Arsenal & Awards (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Education Card */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm space-y-4 border border-[#E2E8F0]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase text-[#059669] tracking-widest">
                LANDASAN AKADEMIK
              </span>
              <span className="px-3 py-0.5 rounded-full bg-[#adedd3] text-[#306d58] text-[11px] font-bold">
                IPK 3.83 / 4.00
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">
                Sarjana Informatika (S.Kom)
              </h3>
              <p className="text-sm text-[#059669] font-semibold">
                Universitas Widyatama • 2020 – 2024
              </p>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              Dianugerahi predikat <strong className="text-[#0F172A]">Lulusan Terbaik Teknik Informatika Angkatan 2024</strong> serta dinobatkan sebagai <strong className="text-[#0F172A]">Lulusan Terbaik MSIB Bangkit Academy</strong>.
            </p>
          </div>

          {/* Tech Stack Pills Array */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm space-y-4 border border-[#E2E8F0]">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase text-[#059669] tracking-widest">
                SENJATA KODING
              </span>
              <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">
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
                  className="px-4 py-1.5 rounded-full bg-[#F8FAFC] hover:bg-[#022C22] text-[#0F172A] hover:text-white border border-[#E2E8F0] text-xs font-bold transition-all cursor-pointer"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Awards Block */}
          <div className="bg-[#F8FAFC] rounded-[24px] p-6 lg:p-8 space-y-5 shadow-sm border border-[#E2E8F0]">
            <span className="text-[11px] font-bold uppercase text-[#059669] tracking-widest block">
              PENGHARGAAN RESMI
            </span>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#adedd3] flex items-center justify-center shrink-0">
                  <Award size={16} className="text-[#064E3B]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    Distinction Graduate (Top 10% dari 5.013 Siswa)
                  </h4>
                  <p className="text-xs text-[#475569]">
                    Bangkit Academy • Jul 2023
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#adedd3] flex items-center justify-center shrink-0">
                  <DollarSign size={16} className="text-[#064E3B]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    Penerima Hibah Rp30.000.000 (PHP2D)
                  </h4>
                  <p className="text-xs text-[#475569]">
                    Kemendikbudristek RI untuk pengembangan SIACTA • Des 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Official Certifications (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-[24px] p-6 lg:p-8 shadow-sm flex flex-col justify-between border border-[#E2E8F0] space-y-6">
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase text-[#059669] tracking-widest">
                STANDAR KOMPETENSI
              </span>
              <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">
                Sertifikasi Resmi
              </h3>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 bg-[#F8FAFC] rounded-[18px] border border-[#E2E8F0] space-y-1.5 hover:border-[#059669]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-[#059669] tracking-wider">
                      {cert.issuer} • {cert.date}
                    </span>
                    {cert.credentialId && (
                      <button
                        onClick={() =>
                          onCopyText(cert.credentialId!, `ID Sertifikat ${cert.credentialId} disalin!`)
                        }
                        className="text-[10px] text-[#475569] hover:text-[#0F172A] flex items-center gap-1 font-mono"
                        title="Salin ID Sertifikat"
                      >
                        <Copy size={11} />
                        <span>Salin ID</span>
                      </button>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    {cert.title}
                  </h4>
                  {cert.credentialId ? (
                    <p className="text-xs text-[#475569] font-mono">
                      ID: {cert.credentialId}
                    </p>
                  ) : (
                    <p className="text-xs text-[#475569]">
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
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#022C22] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#064E3B] transition-all cursor-pointer shadow-md"
            >
              <span>VERIFIKASI PORTFOLIO</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
