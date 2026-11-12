import React, { useState, useMemo } from 'react';
import { Search, X, ArrowUpRight, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { label: string; key: ProjectCategory }[] = [
    { label: 'Semua', key: 'all' },
    { label: 'AI & CV', key: 'ai' },
    { label: 'Web App', key: 'webapp' },
    { label: 'UI/UX', key: 'uiux' },
    { label: 'Enterprise', key: 'enterprise' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.categories.includes(activeCategory);
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.badge.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pb-20" id="proyek">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1.5 max-w-2xl"
        >
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            Proyek & Produk Digital
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed">
            Bukan sekadar proyek coba-coba. Ini deretan web app, sistem AI, dan desain produk yang udah gue bangun buat klien industri sampai komunitas.
          </p>
        </motion.div>

        {/* Filter Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 pt-2">
          {/* Category Tabs (Nested radius: rounded-xl container, rounded-lg buttons) */}
          <div className="flex items-center gap-1 p-1 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] overflow-x-auto no-scrollbar shrink-0 shadow-xs">
            <div className="flex items-center gap-1 text-[#475569] px-2 text-xs hidden sm:flex shrink-0">
              <Filter size={13} className="text-[#059669]" />
              <span className="text-xs font-medium">Kategori:</span>
            </div>
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#022C22] text-white shadow-xs'
                      : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search bar & Project counter */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Cari proyek"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#059669] shadow-xs"
              />
              <Search
                size={13}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#64748B]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0F172A] p-0.5 cursor-pointer"
                  title="Hapus pencarian"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            <span className="text-xs text-[#475569] px-2.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg whitespace-nowrap shrink-0 hidden sm:inline-block">
              {filteredProjects.length} proyek
            </span>
          </div>
        </div>

        {/* Projects Responsive Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E2E8F0] space-y-3 shadow-xs">
            <p className="text-sm text-[#475569]">
              Tidak ada proyek yang sesuai dengan kata kunci &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#022C22] text-white text-xs font-medium hover:bg-[#064E3B] transition-colors cursor-pointer"
            >
              Tampilkan semua proyek
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => {
              const isDarkCard = project.grantWinner;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => onSelectProject(project)}
                  className={`group rounded-2xl p-6 flex flex-col justify-between transition-colors duration-200 cursor-pointer ${
                    isDarkCard
                      ? 'bg-[#022C22] text-white shadow-xs border border-[#064E3B] hover:border-[#059669]'
                      : 'bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0] hover:border-[#059669]/60'
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-bebas text-xl font-bold tracking-tight ${
                          isDarkCard ? 'text-[#c2ebdc]' : 'text-[#059669]'
                        }`}
                      >
                        {project.number}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {project.demoUrl && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#adedd3]/60 text-[#064E3B]">
                            Live
                          </span>
                        )}
                        <span
                          className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${
                            isDarkCard
                              ? 'bg-[#064E3B] text-[#c2ebdc]'
                              : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#059669]'
                          }`}
                        >
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3
                        className={`text-lg font-bold transition-colors ${
                          isDarkCard
                            ? 'text-white'
                            : 'text-[#0F172A] group-hover:text-[#059669]'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed line-clamp-3 ${
                          isDarkCard ? 'text-[#a7cfc0]' : 'text-[#475569]'
                        }`}
                      >
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 space-y-3.5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                            isDarkCard
                              ? 'bg-[#064E3B]/60 text-[#a7cfc0]'
                              : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`pt-3 flex items-center justify-between text-xs font-semibold border-t ${
                        isDarkCard
                          ? 'border-[#064E3B] text-white'
                          : 'border-[#E2E8F0] text-[#0F172A] group-hover:text-[#059669]'
                      }`}
                    >
                      <span>Jelajahi kasus</span>
                      <ArrowUpRight
                        size={14}
                        className="text-[#059669] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
