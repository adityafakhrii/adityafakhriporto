import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, BookOpen, ExternalLink, MapPin, ArrowUpRight } from 'lucide-react';

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#00150f]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-xl rounded-[28px] shadow-2xl border border-[#E2E8F0] overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E2E8F0] bg-[#022C22] text-white">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#064E3B] flex items-center justify-center font-serif text-xl font-bold text-white">
              A
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-none">
                Aditya Fakhri Riansyah
              </h2>
              <span className="text-[10px] font-bold uppercase text-[#059669] tracking-widest mt-1 block">
                AI & FULLSTACK ARCHITECT • TECH MENTOR
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full bg-[#064E3B] hover:bg-[#059669] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup bio"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase text-[#059669] tracking-widest block">
              TENTANG & FILOSOFI KERJA
            </span>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Fokus ngembangin aplikasi web skala produksi, integrasi AI praktis buat otomasi bisnis, dan ngasuh ribuan calon developer di Indonesia. Percaya bahwa teknologi tercanggih itu bukan yang paling rumit kodenya, tapi yang paling solutif dan nyaman dipake manusia.
            </p>
          </div>

          {/* Quick Highlight Stats */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="font-bebas text-2xl text-[#022C22] block leading-none">
                5,000+
              </span>
              <span className="text-[10px] font-bold uppercase text-[#059669] tracking-wider block mt-1">
                Lulusan Program
              </span>
              <span className="text-[11px] text-[#475569]">
                RuangAI & CODEPOLITAN
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="font-bebas text-2xl text-[#022C22] block leading-none">
                93% & 91%
              </span>
              <span className="text-[10px] font-bold uppercase text-[#059669] tracking-wider block mt-1">
                Rekor Kelulusan
              </span>
              <span className="text-[11px] text-[#475569]">
                Bangkit Academy Google
              </span>
            </div>
          </div>

          {/* Key Milestones */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-bold uppercase text-[#0F172A] tracking-wider block">
              Ringkasan Rekam Jejak
            </span>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#059669] mt-0.5 shrink-0" />
                <span>Lulusan Terbaik S1 Teknik Informatika Universitas Widyatama 2024 (IPK 3.83/4.00).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#059669] mt-0.5 shrink-0" />
                <span>Distinction Graduate (Top 10% dari 5.013 siswa Bangkit Academy 2023).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#059669] mt-0.5 shrink-0" />
                <span>Pemenang Hibah Riset Rp30.000.000 (PHP2D) Kemendikbudristek RI untuk aplikasi SIACTA.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#059669] mt-0.5 shrink-0" />
                <span>Lead GDSC Widyatama & Organizer GDG Bandung dengan 55+ event nasional.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between gap-3">
          <span className="text-xs text-[#475569] flex items-center gap-1.5">
            <MapPin size={12} className="text-[#059669]" />
            <span>Bandung / Jakarta, Indonesia</span>
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            type="button"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#022C22] hover:bg-[#064E3B] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
          >
            <span>Ajak Diskusi</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
