import React, { useState, useEffect } from 'react';
import { User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenBooking: (serviceTitle?: string) => void;
  onOpenBio: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenBio,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Karya', href: '#proyek', id: 'proyek' },
    { label: 'Track record', href: '#track-record', id: 'track-record' },
    { label: 'Layanan', href: '#layanan', id: 'layanan' },
    { label: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] transition-all duration-300 ${
        isScrolled
          ? 'translate-y-0 opacity-100 shadow-xs'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Brand Lockup */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-8 h-8 rounded-lg bg-[#022C22] flex items-center justify-center font-serif text-sm font-semibold text-white group-hover:bg-[#064E3B] transition-colors">
            A
          </span>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm text-[#0F172A] tracking-tight leading-none">
              Aditya Fakhri
            </span>
            <span className="text-[10px] text-[#059669] font-medium tracking-wide mt-1">
              AI & Fullstack Architect
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3.5 py-1 text-xs font-medium transition-colors rounded-lg ${
                  isActive
                    ? 'text-[#0F172A]'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-white rounded-lg shadow-xs border border-[#E2E8F0] -z-10"
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Status Badge -> Booking trigger (Quiet dot, no pulse) */}
          <button
            onClick={() => onOpenBooking()}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#059669]/40 hover:bg-white transition-colors cursor-pointer text-xs"
            title="Klik untuk ajukan kolaborasi"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
            <span className="font-medium text-[#059669]">
              Open for bookings
            </span>
          </button>

          {/* Profile Quick Bio Button */}
          <button
            onClick={onOpenBio}
            type="button"
            className="w-8 h-8 rounded-lg bg-[#022C22] hover:bg-[#064E3B] text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            title="Lihat bio lengkap Aditya"
            aria-label="Lihat profil dan rekam jejak"
          >
            <User size={14} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-1.5 rounded-lg text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            aria-label="Toggle navigasi mobile"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with smooth collapse */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white border-b border-[#E2E8F0] px-6 py-4 space-y-2.5 shadow-lg overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block py-1.5 text-xs font-medium text-[#0F172A] hover:text-[#059669] border-b border-[#F8FAFC] last:border-none"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-lg bg-[#022C22] hover:bg-[#064E3B] text-white text-xs font-semibold text-center cursor-pointer transition-colors"
              >
                Ajukan kolaborasi
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
