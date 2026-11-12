import React from 'react';
import { Mail, Phone, Linkedin, Github, Globe, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

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
      {/* FINAL CTA BANNER (Deep Luxury Emerald Canvas, quiet depth without blurred blobs) */}
      <section className="w-full px-4 sm:px-6 lg:px-10 pb-16" id="kontak">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto rounded-3xl bg-[#022C22] p-8 lg:p-12 text-white relative overflow-hidden shadow-lg border border-[#064E3B]"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            {/* Left: Pitch */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#059669]" />
                <span className="text-xs font-semibold text-[#a7cfc0]">
                  Kolaborasi digital
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                Punya ide proyek seru atau mau ngundang ngisi acara?
              </h2>
              <p className="text-sm text-[#a7cfc0] max-w-xl leading-relaxed">
                Entah itu kolaborasi bikin web app, workshop AI buat tim kantor/kampus, atau sekadar diskusi teknis—gas hubungi gue lewat jalur di bawah.
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href="mailto:adityafakhri03@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#022C22] text-xs font-semibold uppercase tracking-wider hover:bg-[#F8FAFC] transition-colors cursor-pointer shadow-sm"
                >
                  <span>Email langsung</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://wa.me/62895324105731"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#064E3B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#059669] transition-colors cursor-pointer border border-[#064E3B]"
                >
                  <span>WhatsApp chat</span>
                  <ArrowUpRight size={14} />
                </a>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-transparent text-[#c2ebdc] text-xs font-semibold uppercase tracking-wider hover:bg-[#064E3B]/50 transition-colors cursor-pointer border border-[#064E3B]"
                >
                  <MessageSquare size={13} />
                  <span>Formulir kolaborasi</span>
                </button>
              </div>
            </div>

            {/* Right: Contact Direct Roster */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-0.5 bg-[#064E3B]/40 p-5 rounded-2xl border border-[#064E3B]/70">
                <span className="text-xs font-semibold text-[#c2ebdc] block pb-2.5 border-b border-[#064E3B]">
                  Saluran resmi
                </span>

                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={channel.label}
                      className="flex items-center justify-between py-2 text-[#a7cfc0] hover:text-white transition-colors border-b border-[#064E3B]/40 last:border-b-0 text-xs"
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
                            className="p-1 hover:text-white text-[#a7cfc0] transition-colors cursor-pointer"
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
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#022C22] text-white py-12 border-t border-[#064E3B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#064E3B]">
            {/* Col 1 */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#059669]">
                  Kolaborasi teknologi
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight max-w-md">
                  Bangun sistem tangguh tanpa kompromi
                </h3>
                <p className="text-xs sm:text-sm text-[#a7cfc0] max-w-lg leading-relaxed">
                  Membimbing tim engineering, merancang arsitektur AI skalabel, dan menyuguhkan keynote berbobot. Siap diskusi visi teknismu sekarang.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#022C22] text-xs font-semibold uppercase hover:bg-[#F8FAFC] transition-colors cursor-pointer shadow-sm"
                >
                  <span>Mulai konsultasi</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>

            {/* Col 2 */}
            <div className="md:col-span-3 space-y-2.5">
              <span className="text-xs font-semibold text-[#c2ebdc] block">
                Navigasi arsip
              </span>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a href="#proyek" className="text-[#a7cfc0] hover:text-white transition-colors">
                    Karya terpilih
                  </a>
                </li>
                <li>
                  <a href="#track-record" className="text-[#a7cfc0] hover:text-white transition-colors">
                    Track record & panggung
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-[#a7cfc0] hover:text-white transition-colors">
                    Layanan & mentorship
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="text-[#a7cfc0] hover:text-white transition-colors">
                    Saluran kolaborasi
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="md:col-span-3 space-y-2.5">
              <span className="text-xs font-semibold text-[#c2ebdc] block">
                Jaringan langsung
              </span>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a
                    href="mailto:adityafakhri03@gmail.com"
                    className="text-[#a7cfc0] hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>Email langsung</span>
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
                    <span>WhatsApp langsung</span>
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
                    <span>LinkedIn professional</span>
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
                    <span>GitHub repositori</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#a7cfc0]">
            <div className="flex items-center gap-3">
              <span className="font-serif text-base font-bold text-white tracking-widest">
                A.F.R
              </span>
              <span>© 2025 Aditya Fakhri Riansyah. Hak cipta dilindungi.</span>
            </div>
            <div className="text-xs text-[#c2ebdc]">
              Jakarta • Bandung • Global distributed
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
