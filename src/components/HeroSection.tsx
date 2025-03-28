
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;
      
      container.innerHTML = '';
      
      const particleCount = window.innerWidth < 768 ? 30 : 60;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size between 2px and 5px
        const size = Math.random() * 3 + 2;
        
        // Random opacity between 0.1 and 0.3
        const opacity = Math.random() * 0.2 + 0.1;
        
        // Random animation duration between 15s and 45s
        const animDuration = Math.random() * 30 + 15;
        
        // Apply styles
        particle.style.cssText = `
          position: absolute;
          left: ${posX}%;
          top: ${posY}%;
          width: ${size}px;
          height: ${size}px;
          background-color: #8B5CF6;
          border-radius: 50%;
          opacity: ${opacity};
          filter: blur(1px);
          animation: float ${animDuration}s ease-in-out infinite alternate;
          transform: translate(-50%, -50%);
        `;
        
        container.appendChild(particle);
      }
    };
    
    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div ref={particlesRef} className="particles-container"></div>
      <div className="wavy-bg"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <p className="text-custom-purple font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Dravin Kumar Sharma
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6">
              Machine Learning Engineer
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Passionate about leveraging AI and data to solve complex problems. 
              Specialized in developing innovative machine learning solutions for real-world applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="button-primary">
                View Projects
              </a>
              <a href="https://drive.google.com/file/d/1IZSBNGr37LboQ9pmEU1G5IGrChfQ-4jE/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="button-outline flex items-center">
                <FileText size={18} className="mr-2" />
                Download CV
              </a>
            </div>
            
            <div className="mt-10 flex space-x-6">
              <a href="https://github.com/Str1nX03" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-purple transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/dravin-kumar-sharma-b495341b5/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-purple transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-custom-purple transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-custom-purple/50 to-custom-dark-purple/50 rounded-full blur-2xl opacity-30"></div>
              <img 
                src="/lovable-uploads/4818dd9d-b5f1-4035-aa68-fd6c21dea51e.png"
                alt="Profile" 
                className="w-full h-full object-cover rounded-full border-4 border-custom-purple/30 shadow-xl animate-pulse-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
