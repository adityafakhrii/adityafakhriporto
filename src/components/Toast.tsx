import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all duration-300">
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#022C22] text-white shadow-xl border border-[#064E3B] text-xs font-semibold tracking-wide">
        <Check size={14} className="text-[#059669] shrink-0" />
        <span>{message}</span>
        <button
          onClick={onClose}
          type="button"
          className="ml-2 text-[#a7cfc0] hover:text-white transition-colors p-0.5 cursor-pointer"
          aria-label="Tutup notifikasi"
        >
          <X size={13} />
        </button>
      </div>
    </div>
  );
};
