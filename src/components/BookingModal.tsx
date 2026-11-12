import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
}) => {
  const [serviceType, setServiceType] = useState('Tech Speaker & Keynote');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [contact, setContact] = useState('');
  const [brief, setBrief] = useState('');

  const services = [
    'Tech Speaker & Keynote',
    'Workshop & Mentoring AI/Web',
    'Fullstack Web & AI Architecture',
    '1-on-1 Career & Code Advisory',
    'Kolaborasi Proyek Khusus',
  ];

  useEffect(() => {
    if (prefilledService) {
      setServiceType(prefilledService);
    }
  }, [prefilledService]);

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

  const composeMessage = () => {
    return `Halo Aditya, saya ${name || '[Nama]'}${
      organization ? ` dari ${organization}` : ''
    }.

Tertarik berkolaborasi untuk topik: ${serviceType}.

Kontak saya: ${contact || '[Email/WA]'}
Detail Singkat:
${brief || 'Mau diskusi lebih lanjut terkait agenda/proyek ini.'}`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(composeMessage());
    window.open(`https://wa.me/62895324105731?text=${text}`, '_blank');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Inquiry Kolaborasi: ${serviceType} - ${name || 'Partner'}`);
    const body = encodeURIComponent(composeMessage());
    window.open(`mailto:adityafakhri03@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

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
            className="bg-white w-full max-w-xl rounded-2xl shadow-xl border border-[#E2E8F0] overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="space-y-0.5">
            <span className="text-xs font-semibold text-[#059669]">
              Diskusi & booking jadwal
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
              Mulai kolaborasi bareng
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
            aria-label="Tutup form"
          >
            <X size={15} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 overflow-y-auto space-y-4">
          {/* Service Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0F172A]">
              Tipe kolaborasi yang diinginkan
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((svc) => (
                <button
                  key={svc}
                  type="button"
                  onClick={() => setServiceType(svc)}
                  className={`text-left px-3.5 py-2 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                    serviceType === svc
                      ? 'bg-[#022C22] text-white border-[#022C22]'
                      : 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:text-[#0F172A]'
                  }`}
                >
                  {svc}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Org */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#0F172A]">
                Nama lengkap / panggilan
              </label>
              <input
                type="text"
                required
                placeholder="Misal: Kevin Sandi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#059669] bg-white shadow-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#0F172A]">
                Instansi / kampus / perusahaan
              </label>
              <input
                type="text"
                placeholder="Misal: Universitas X / Startup Y"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#059669] bg-white shadow-xs"
              />
            </div>
          </div>

          {/* Contact (Email / WA) */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#0F172A]">
              Kontak yang bisa dihubungi (WhatsApp / Email)
            </label>
            <input
              type="text"
              required
              placeholder="0812xxxx atau email@perusahaan.com"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#059669] bg-white shadow-xs"
            />
          </div>

          {/* Project Brief */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#0F172A]">
              Detail singkat kebutuhan / topik / rencana tanggal
            </label>
            <textarea
              rows={3}
              placeholder="Ceritain singkat ide kamu, target peserta/lingkup kerja, atau jadwal yang direncanakan..."
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#059669] bg-white resize-none shadow-xs"
            />
          </div>

          {/* Footer Submit Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="submit"
              className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-[#022C22] hover:bg-[#064E3B] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Phone size={14} />
              <span>Kirim via WhatsApp</span>
              <ArrowUpRight size={13} />
            </button>
            <button
              type="button"
              onClick={handleSendEmail}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[#0F172A] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Mail size={14} />
              <span>Kirim Email</span>
            </button>
          </div>
        </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
