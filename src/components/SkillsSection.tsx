import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', proficiency: 95, category: 'Programming' },
  { name: 'SQL', proficiency: 85, category: 'Database' },
  { name: 'LangChain', proficiency: 90, category: 'AI Framework' },
  { name: 'Natural Language Processing', proficiency: 88, category: 'Machine Learning' },
  { name: 'Communication', proficiency: 92, category: 'Soft Skills' },
  { name: 'PyTorch', proficiency: 90, category: 'Deep Learning' },
  { name: 'Deep Learning', proficiency: 85, category: 'Machine Learning' },
  { name: 'GitHub', proficiency: 88, category: 'Version Control' },
  { name: 'Flask', proficiency: 85, category: 'Web Framework' },
  { name: 'Scikit-Learn', proficiency: 90, category: 'Machine Learning' },
];

const SkillsSection = () => {
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      skillsRef.current.forEach((el, index) => {
        if (!el) return;
        
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          // Get the progress bar element
          const progressBar = el.querySelector('.skill-progress') as HTMLElement;
          if (progressBar) {
            // Animate the width after a slight delay based on index
            setTimeout(() => {
              progressBar.style.width = `${skills[index].proficiency}%`;
            }, index * 100);
          }
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize refs array
  const setRef = (el: HTMLDivElement | null, index: number) => {
    skillsRef.current[index] = el;
  };

  return (
    <section id="skills" className="py-20 bg-custom-dark">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              ref={(el) => setRef(el, index)}
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between mb-2">
                <h3 className="text-gray-200 font-medium">{skill.name}</h3>
                <span className="text-custom-purple">{skill.proficiency}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress transition-all duration-1000 ease-out"
                  style={{ width: '0%' }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{skill.category}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 glass-card text-center">
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'PyTorch', 'LangChain', 'Flask', 'Scikit-Learn'
            ].map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-2 bg-custom-dark-3 rounded-full text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
