import React, { useState, useMemo } from 'react';
import { Search, X, ArrowUpRight, Filter } from 'lucide-react';
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
    <section className="w-full px-6 lg:px-10 pb-20" id="proyek">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Editorial Header */}
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase text-[#059669] tracking-widest">
              ARSIP KARYA TERPILIH
            </span>
            <span className="w-8 h-px bg-[#059669]/40"></span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Proyek & Produk Digital
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Bukan sekadar proyek coba-coba. Ini deretan web app, sistem AI, dan desain produk yang udah gue bangun buat klien industri sampai komunitas.
          </p>
        </div>

        {/* Filter Toolbar: Separated & Spacious so it never overlaps or wraps awkwardly */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-2">
          {/* Category Tabs: Single row, no-wrap, smooth horizontal scroll on small screens */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#F8FAFC] rounded-full border border-[#E2E8F0] overflow-x-auto no-scrollbar shrink-0 shadow-xs">
            <div className="flex items-center gap-1 text-[#475569] px-2 text-xs hidden sm:flex shrink-0">
              <Filter size={13} className="text-[#059669]" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Kategori:</span>
            </div>
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0F172A] shadow-sm border border-[#E2E8F0]/80'
                      : 'text-[#475569] hover:text-[#0F172A] hover:bg-white/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search bar & Project counter */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-72">
              <input
                type="text"
                placeholder="Cari proyek, modul, atau stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-full bg-white border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#475569] focus:outline-none focus:border-[#059669] shadow-xs"
              />
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#475569]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#475569] hover:text-[#0F172A] p-0.5"
                  title="Hapus pencarian"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-[#475569] px-3 py-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full whitespace-nowrap shrink-0 hidden sm:inline-block">
              {filteredProjects.length} Proyek
            </span>
          </div>
        </div>

        {/* 11 Projects Responsive Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E2E8F0] space-y-4 shadow-sm">
            <p className="text-sm text-[#475569]">
              Tidak ada proyek yang sesuai dengan filter atau kata kunci &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-[#022C22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#064E3B] transition-colors cursor-pointer"
            >
              Tampilkan Semua Proyek
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isDarkCard = project.grantWinner;

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group rounded-[24px] p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isDarkCard
                      ? 'bg-[#022C22] text-white shadow-sm hover:shadow-xl relative overflow-hidden border border-[#064E3B]'
                      : 'bg-white text-[#0F172A] shadow-sm hover:shadow-md border border-[#E2E8F0] hover:border-[#059669]/40'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-bebas text-2xl font-bold tracking-tight ${
                          isDarkCard ? 'text-[#c2ebdc]' : 'text-[#059669]'
                        }`}
                      >
                        {project.number}
                      </span>
                      <span
                        className={`px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${
                          isDarkCard
                            ? 'bg-[#064E3B] text-[#c2ebdc]'
                            : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#059669]'
                        }`}
                      >
                        {project.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3
                        className={`text-xl font-bold transition-colors ${
                          isDarkCard
                            ? 'text-white'
                            : 'text-[#0F172A] group-hover:text-[#059669]'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isDarkCard ? 'text-[#a7cfc0]' : 'text-[#475569]'
                        }`}
                      >
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded text-[11px] font-medium ${
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
                      className={`pt-3 flex items-center justify-between text-[11px] uppercase font-bold tracking-wider border-t ${
                        isDarkCard
                          ? 'border-[#064E3B] text-white'
                          : 'border-[#E2E8F0] text-[#0F172A]'
                      }`}
                    >
                      <span>EXPLORE CASE</span>
                      <ArrowUpRight
                        size={15}
                        className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform text-[#059669]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
