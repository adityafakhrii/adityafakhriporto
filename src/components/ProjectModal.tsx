import React, { useEffect } from 'react';
import { X, Copy, ArrowUpRight, MessageSquare, Layers, Target, CheckCircle2 } from 'lucide-react';
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

  if (!project) return null;

  const handleCopySummary = () => {
    const text = `Proyek: ${project.title} (${project.badge})\nDeskripsi: ${project.summary}\nDampak: ${project.impact}\nTech Stack: ${project.techStack.join(', ')}`;
    onCopyText(text, 'Ringkasan proyek berhasil disalin!');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#00150f]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-[28px] shadow-2xl border border-[#E2E8F0] overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="flex items-center gap-3">
            <span className="font-bebas text-2xl text-[#059669] font-bold">
              {project.number}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                project.grantWinner
                  ? 'bg-[#022C22] text-[#c2ebdc]'
                  : 'bg-white border border-[#E2E8F0] text-[#059669]'
              }`}
            >
              {project.badge}
            </span>
            {project.year && (
              <span className="text-xs text-[#475569] font-medium hidden sm:inline">
                {project.year}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Title & Organization */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              {project.title}
            </h2>
            {project.client && (
              <p className="text-xs sm:text-sm font-semibold text-[#059669]">
                Klien / Inisiatif: {project.client}
              </p>
            )}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed pt-1">
              {project.summary}
            </p>
          </div>

          {/* Structured Case Study Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The Challenge */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                <Target size={14} className="text-[#059669]" />
                <span>Tantangan Awal</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                <Layers size={14} className="text-[#059669]" />
                <span>Solusi & Arsitektur</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Impact & Results */}
          <div className="p-4 rounded-2xl bg-[#022C22] text-white space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#c2ebdc] uppercase tracking-wider">
              <CheckCircle2 size={15} className="text-[#059669]" />
              <span>Dampak & Hasil Nyata</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a7cfc0] leading-relaxed font-normal">
              {project.impact}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#475569]">
              Teknologi & Stack Utama
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#0F172A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-[#E2E8F0] bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopySummary}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
          >
            <Copy size={13} />
            <span>Salin Ringkasan</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onConsultProject(project.title);
            }}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#022C22] hover:bg-[#064E3B] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
          >
            <MessageSquare size={13} />
            <span>Konsultasi Proyek Sejenis</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
