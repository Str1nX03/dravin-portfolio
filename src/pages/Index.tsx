
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.animate-fade-in');
    
    const handleReveal = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('opacity-100');
        }
      });
    };
    
    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="min-h-screen bg-custom-dark text-white relative overflow-hidden">
      {/* Additional wavy background elements */}
      <div className="fixed top-[15%] left-[10%] w-60 h-60 bg-red-500/5 rounded-full filter blur-3xl opacity-20 animate-float-slow pointer-events-none"></div>
      <div className="fixed bottom-[20%] right-[15%] w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl opacity-20 animate-float-slow pointer-events-none"></div>
      <div className="fixed top-[50%] left-[50%] w-70 h-70 bg-green-500/5 rounded-full filter blur-3xl opacity-20 animate-float-slow pointer-events-none"></div>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
