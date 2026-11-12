import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 pointer-events-auto"
        >
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#022C22] text-white shadow-lg border border-[#064E3B] text-xs font-medium tracking-wide">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
