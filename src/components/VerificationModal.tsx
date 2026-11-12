import React, { useEffect } from 'react';
import { X, ShieldCheck, Copy, Award, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATIONS } from '../data/portfolioData';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({
  isOpen,
  onClose,
  onCopyText,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#00150f]/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-[#E2E8F0] overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#adedd3] flex items-center justify-center">
              <ShieldCheck size={16} className="text-[#064E3B]" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                Verifikasi Standar Kompetensi
              </h2>
              <span className="text-[11px] text-[#059669] font-medium block">
                Sertifikasi & penghargaan terverifikasi
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
            aria-label="Tutup verifikasi"
          >
            <X size={15} />
          </button>
        </div>

        {/* List of certifications */}
        <div className="p-6 overflow-y-auto space-y-3.5">
          <p className="text-xs text-[#475569] leading-relaxed">
            Seluruh sertifikasi di bawah ini diterbitkan langsung oleh institusi resmi mitra industri Google, Dicoding, dan CODEPOLITAN dengan ID unik yang dapat divalidasi.
          </p>

          <div className="space-y-2.5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div>
                    <span className="text-[11px] font-medium text-[#059669] block">
                      {cert.issuer} • {cert.date}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                      {cert.title}
                    </h3>
                  </div>

                  {cert.credentialId && (
                    <button
                      onClick={() =>
                        onCopyText(cert.credentialId!, `ID Sertifikat ${cert.credentialId} disalin!`)
                      }
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-mono text-[#0F172A] hover:bg-[#F8FAFC] transition-colors self-start sm:self-auto cursor-pointer"
                      title="Salin ID Kredensial"
                    >
                      <Copy size={11} />
                      <span>{cert.credentialId}</span>
                    </button>
                  )}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-white border border-[#E2E8F0] text-[#475569]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Academic distinction note */}
          <div className="p-3.5 rounded-xl bg-[#022C22] text-white flex items-start gap-2.5">
            <Award size={16} className="text-[#c2ebdc] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-[#c2ebdc]">
                Lulusan Terbaik S1 Informatika (IPK 3.83 / 4.00)
              </h4>
              <p className="text-xs text-[#a7cfc0] leading-relaxed">
                Universitas Widyatama 2024 & Distinction Graduate Bangkit Academy (Top 10% dari 5.013 siswa).
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
          <span className="text-xs text-[#475569]">
            Butuh berkas PDF transkrip atau sertifikat?
          </span>
          <a
            href="mailto:adityafakhri03@gmail.com?subject=Permohonan%20Verifikasi%20Kredensial%20Aditya%20Fakhri"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#022C22] hover:bg-[#064E3B] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Minta salinan dokumen</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
