import React from 'react';
import { Mail, Phone, Linkedin, Github, Globe, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenBooking,
  onCopyText,
}) => {
  const contactChannels = [
    {
      label: 'Email Langsung',
      value: 'adityafakhri03@gmail.com',
      href: 'mailto:adityafakhri03@gmail.com',
      icon: Mail,
      canCopy: true,
    },
    {
      label: 'WhatsApp Chat',
      value: '+62 895 3241 05731',
      href: 'https://wa.me/62895324105731',
      icon: Phone,
      canCopy: true,
    },
    {
      label: 'LinkedIn Professional',
      value: 'linkedin.com/in/adityafakhrii',
      href: 'https://linkedin.com/in/adityafakhrii',
      icon: Linkedin,
      canCopy: false,
    },
    {
      label: 'GitHub Repositori',
      value: 'github.com/adityafakhrii',
      href: 'https://github.com/adityafakhrii',
      icon: Github,
      canCopy: false,
    },
    {
      label: 'Website Portfolio',
      value: 'adityafakhri.com',
      href: 'https://adityafakhri.com',
      icon: Globe,
      canCopy: false,
    },
  ];

  return (
    <>
      {/* LAYANAN & FINAL CTA BANNER (Deep Emerald Canvas) */}
      <section className="w-full px-6 lg:px-10 pb-16" id="kontak">
        <div className="max-w-7xl mx-auto rounded-[32px] bg-[#022C22] p-8 lg:p-14 text-white relative overflow-hidden shadow-2xl border border-[#064E3B]">
          {/* Subtle Radial Backdrop */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#059669]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            {/* Left: Pitch */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-ping" />
                <span className="text-[11px] font-bold uppercase text-[#059669] tracking-widest">
                  KOLABORASI DIGITAL
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Punya ide proyek seru atau mau ngundang ngisi acara?
              </h2>
              <p className="text-sm sm:text-base text-[#a7cfc0] max-w-xl leading-relaxed">
                Entah itu kolaborasi bikin web app, workshop AI buat tim kantor/kampus, atau sekadar diskusi teknis—gas hubungi gue lewat jalur di bawah.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:adityafakhri03@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#022C22] text-[11px] font-bold uppercase tracking-wider hover:bg-[#F8FAFC] transition-all cursor-pointer shadow-md"
                >
                  <span>EMAIL GUE LANGSUNG</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://wa.me/62895324105731"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#064E3B] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#059669] transition-all cursor-pointer border border-[#064E3B]"
                >
                  <span>WHATSAPP CHAT</span>
                  <ArrowUpRight size={14} />
                </a>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-[#c2ebdc] text-[11px] font-bold uppercase tracking-wider hover:bg-[#064E3B]/50 transition-all cursor-pointer border border-[#064E3B]"
                >
                  <MessageSquare size={13} />
                  <span>FORMULIR KOLABORASI</span>
                </button>
              </div>
            </div>

            {/* Right: Contact Direct Roster */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-1 bg-[#064E3B]/50 p-6 rounded-[24px] border border-[#064E3B]/70 backdrop-blur-sm">
                <span className="text-[10px] font-bold uppercase text-[#c2ebdc] tracking-widest block pb-3 border-b border-[#064E3B]">
                  SALURAN RESMI
                </span>

                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={channel.label}
                      className="flex items-center justify-between py-2.5 text-[#a7cfc0] hover:text-white transition-colors border-b border-[#064E3B]/50 last:border-b-0 text-xs"
                    >
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                        rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="flex items-center gap-2.5 truncate"
                      >
                        <Icon size={14} className="text-[#059669] shrink-0" />
                        <span className="truncate">{channel.value}</span>
                      </a>
                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        {channel.canCopy && (
                          <button
                            type="button"
                            onClick={() =>
                              onCopyText(channel.value, `${channel.label} disalin ke clipboard!`)
                            }
                            className="p-1 hover:text-white text-[#a7cfc0] transition-colors"
                            title={`Salin ${channel.label}`}
                          >
                            <Copy size={12} />
                          </button>
                        )}
                        <a
                          href={channel.href}
                          target={channel.href.startsWith('http') ? '_blank' : undefined}
                          rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="hover:translate-x-0.5 transition-transform"
                          aria-label={`Buka ${channel.label}`}
                        >
                          <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-right">
                <p className="text-xs text-[#a7cfc0]/80">
                  © 2025 Aditya Fakhri Riansyah. Dibuat dengan presisi kode dan sentuhan AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#022C22] text-white py-14 border-t border-[#064E3B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#064E3B]">
            {/* Col 1 */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase text-[#059669] tracking-widest">
                  KOLABORASI TEKNOLOGI KELAS TINGGI
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight max-w-md">
                  BANGUN SISTEM TANGGUH TANPA KOMPROMI.
                </h3>
                <p className="text-xs sm:text-sm text-[#a7cfc0] max-w-lg leading-relaxed">
                  Membimbing tim engineering, merancang arsitektur AI skalabel, dan menyuguhkan keynote berbobot. Siap diskusi visi teknismu sekarang.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#022C22] text-[11px] font-bold uppercase hover:bg-[#F8FAFC] transition-all cursor-pointer shadow-sm"
                >
                  <span>MULAI KONSULTASI</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>

            {/* Col 2 */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-[11px] font-bold uppercase text-[#c2ebdc] tracking-widest block">
                NAVIGASI ARSIP
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#proyek" className="text-[#a7cfc0] hover:text-white transition-colors">
                    Karya Terpilih
                  </a>
                </li>
                <li>
                  <a href="#track-record" className="text-[#a7cfc0] hover:text-white transition-colors">
                    Track Record & Panggung
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-[#a7cfc0] hover:text-white transition-colors">
                    Layanan & Mentorship
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="text-[#a7cfc0] hover:text-white transition-colors">
                    Saluran Kolaborasi
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-[11px] font-bold uppercase text-[#c2ebdc] tracking-widest block">
                JARINGAN LANGSUNG
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="mailto:adityafakhri03@gmail.com"
                    className="text-[#a7cfc0] hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>Email Eksklusif</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/62895324105731"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#a7cfc0] hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>WhatsApp Langsung</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/adityafakhrii"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#a7cfc0] hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>LinkedIn Professional</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/adityafakhrii"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#a7cfc0] hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>GitHub Repositori</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a7cfc0]">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg font-bold text-white tracking-widest">
                A.F.R
              </span>
              <span>© 2025 Aditya Fakhri Riansyah. Hak Cipta Dilindungi.</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#a7cfc0]">
              JAKARTA • BANDUNG • GLOBAL DISTRIBUTED
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
