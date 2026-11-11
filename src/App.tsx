import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TrackRecord } from './components/TrackRecord';
import { ServicesSection } from './components/ServicesSection';
import { EducationAndCredentials } from './components/EducationAndCredentials';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { BookingModal } from './components/BookingModal';
import { BioModal } from './components/BioModal';
import { VerificationModal } from './components/VerificationModal';
import { Toast } from './components/Toast';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>();
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [verificationModalOpen, setVerificationModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('karya');

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const handleOpenBooking = (serviceTitle?: string) => {
    setPrefilledService(serviceTitle);
    setBookingModalOpen(true);
  };

  const handleCopyText = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => showToast(label),
        () => showToast(label)
      );
    } else {
      showToast(label);
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('proyek');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section spy for navigation highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['proyek', 'track-record', 'layanan', 'kontak'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection('karya');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] font-sans antialiased selection:bg-[#c2ebdc] selection:text-[#002018]">
      {/* Fixed Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenBio={() => setBioModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Stream */}
      <main className="w-full pt-20">
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreProjects={scrollToProjects}
        />

        <ImpactMetrics />

        <ProjectsShowcase
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <TrackRecord />

        <ServicesSection
          onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        <EducationAndCredentials
          onOpenVerification={() => setVerificationModalOpen(true)}
          onCopyText={handleCopyText}
        />

        <ContactSection
          onOpenBooking={() => handleOpenBooking()}
          onCopyText={handleCopyText}
        />
      </main>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsultProject={(title) => handleOpenBooking(`Diskusi Proyek ${title}`)}
        onCopyText={handleCopyText}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledService={prefilledService}
      />

      <BioModal
        isOpen={bioModalOpen}
        onClose={() => setBioModalOpen(false)}
        onOpenBooking={() => {
          setBioModalOpen(false);
          handleOpenBooking();
        }}
      />

      <VerificationModal
        isOpen={verificationModalOpen}
        onClose={() => setVerificationModalOpen(false)}
        onCopyText={handleCopyText}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
