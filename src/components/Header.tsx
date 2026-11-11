import React, { useState } from 'react';
import { User, Menu, X, ArrowUpRight } from 'lucide-react';

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

  const navItems = [
    { label: 'KARYA', href: '#proyek', id: 'proyek' },
    { label: 'TRACK RECORD', href: '#track-record', id: 'track-record' },
    { label: 'LAYANAN', href: '#layanan', id: 'layanan' },
    { label: 'KONTAK', href: '#kontak', id: 'kontak' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#E2E8F0]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Brand Lockup */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-9 h-9 rounded-full bg-[#022C22] flex items-center justify-center font-serif text-lg font-semibold text-white group-hover:bg-[#064E3B] transition-colors">
            A
          </span>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-base text-[#0F172A] tracking-tight leading-none">
              ADITYA FAKHRI
            </span>
            <span className="text-[10px] font-bold uppercase text-[#059669] tracking-widest mt-1">
              AI & FULLSTACK ARCHITECT
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#FFFFFF]/60 border border-[#E2E8F0]/60">
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
                className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all rounded-full ${
                  isActive
                    ? 'text-[#0F172A] bg-[#F8FAFC] shadow-[0_0_0_1px_#E2E8F0]'
                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3">
          {/* Status Badge -> Booking trigger */}
          <button
            onClick={() => onOpenBooking()}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#059669]/40 hover:bg-[#FFFFFF] transition-all cursor-pointer"
            title="Klik untuk ajukan kolaborasi"
          >
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
            <span className="text-[10px] font-bold text-[#059669] uppercase tracking-wider">
              OPEN FOR BOOKINGS
            </span>
          </button>

          {/* Profile Quick Bio Button */}
          <button
            onClick={onOpenBio}
            type="button"
            className="w-9 h-9 rounded-full bg-[#022C22] hover:bg-[#064E3B] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            title="Profil & Bio Singkat Aditya"
            aria-label="Lihat profil Aditya"
          >
            <User size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] hover:bg-[#FFFFFF] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#E2E8F0] px-6 py-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-[#F8FAFC] text-[#059669] border border-[#E2E8F0]'
                    : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={14} className="text-[#059669]" />
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-[#E2E8F0] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-full bg-[#022C22] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Mulai Konsultasi</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
