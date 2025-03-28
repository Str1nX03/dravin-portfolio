
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-custom-dark-2 pt-10 pb-6">
      <div className="section-container">
        <div className="flex justify-center mb-10">
          <button
            onClick={scrollToTop}
            className="p-3 bg-custom-dark-3 rounded-full hover:bg-custom-purple transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="text-white" />
          </button>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-xl mb-3">
                <span className="text-custom-purple">ML</span>Portfolio
              </h3>
              <p className="text-gray-400 text-sm">
                Machine Learning Engineer & Data Scientist building intelligent solutions.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-white font-medium mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-custom-purple transition-colors duration-300 text-sm">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-custom-purple transition-colors duration-300 text-sm">About</a>
                <a href="#skills" className="block text-gray-400 hover:text-custom-purple transition-colors duration-300 text-sm">Skills</a>
                <a href="#projects" className="block text-gray-400 hover:text-custom-purple transition-colors duration-300 text-sm">Projects</a>
                <a href="#contact" className="block text-gray-400 hover:text-custom-purple transition-colors duration-300 text-sm">Contact</a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-white font-medium mb-3">Connect</h4>
              <div className="space-y-2">
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-custom-purple transition-colors duration-300 text-sm">GitHub</a>
                <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-custom-purple transition-colors duration-300 text-sm">LinkedIn</a>
                <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-custom-purple transition-colors duration-300 text-sm">Twitter</a>
                <a href="mailto:contact@example.com" className="block text-gray-400 hover:text-custom-purple transition-colors duration-300 text-sm">Email</a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
            <p className="mt-1">
              Built with <span className="text-custom-purple">❤</span> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
