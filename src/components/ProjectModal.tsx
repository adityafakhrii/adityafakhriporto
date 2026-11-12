import React, { useEffect } from 'react';
import { X, Copy, ArrowUpRight, MessageSquare, Layers, Target, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onConsultProject: (projectTitle: string) => void;
  onCopyText: (text: string, label: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onConsultProject,
  onCopyText,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleCopySummary = () => {
    if (!project) return;
    const text = `Proyek: ${project.title} (${project.badge})\nDeskripsi: ${project.summary}\nDampak: ${project.impact}\nTech Stack: ${project.techStack.join(', ')}`;
    onCopyText(text, 'Ringkasan proyek berhasil disalin!');
  };

  return (
    <AnimatePresence>
      {project && (
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
            {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="flex items-center gap-2.5">
            <span className="font-bebas text-xl text-[#059669] font-bold">
              {project.number}
            </span>
            <span
              className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${
                project.grantWinner
                  ? 'bg-[#022C22] text-[#c2ebdc]'
                  : 'bg-white border border-[#E2E8F0] text-[#059669]'
              }`}
            >
              {project.badge}
            </span>
            {project.year && (
              <span className="text-xs text-[#64748B] font-medium hidden sm:inline">
                {project.year}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X size={15} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Title & Organization */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                {project.title}
              </h2>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#adedd3]/50 hover:bg-[#adedd3] text-xs font-semibold text-[#064E3B] transition-colors"
                >
                  <span>Kunjungi website</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
            {project.client && (
              <p className="text-xs font-semibold text-[#059669]">
                Klien / Inisiatif: {project.client}
              </p>
            )}
            <p className="text-sm text-[#475569] leading-relaxed pt-0.5">
              {project.summary}
            </p>
          </div>

          {/* Structured Case Study Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* The Challenge */}
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0F172A]">
                <Target size={13} className="text-[#059669]" />
                <span>Tantangan awal</span>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0F172A]">
                <Layers size={13} className="text-[#059669]" />
                <span>Solusi & arsitektur</span>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Impact & Results */}
          <div className="p-3.5 rounded-xl bg-[#022C22] text-white space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c2ebdc]">
              <CheckCircle2 size={14} className="text-[#059669]" />
              <span>Dampak & hasil nyata</span>
            </div>
            <p className="text-xs text-[#a7cfc0] leading-relaxed font-normal">
              {project.impact}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-[#0F172A] block">
              Teknologi & stack utama
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0F172A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#E2E8F0] bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopySummary}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs font-medium text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              <Copy size={13} />
              <span>Salin ringkasan</span>
            </button>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#059669]/40 text-xs font-semibold text-[#064E3B] hover:bg-[#adedd3]/30 transition-colors cursor-pointer"
              >
                <span>Live website</span>
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              onConsultProject(project.title);
            }}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#022C22] hover:bg-[#064E3B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
          >
            <MessageSquare size={13} />
            <span>Konsultasi proyek sejenis</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
