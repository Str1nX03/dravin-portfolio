
import React from 'react';
import { Brain, Database, Code, ChartBar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-custom-dark-2">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a passionate Machine Learning Engineer and Data Scientist with 5+ years of experience in developing
              and deploying AI solutions across various domains including finance, healthcare, and e-commerce.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              My journey in the field of AI began during my Master's program, where I focused on deep learning
              applications for computer vision. Since then, I've worked with numerous organizations to leverage
              data-driven insights and build intelligent systems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not training models or analyzing data, you can find me contributing to open-source
              projects, mentoring aspiring data scientists, or exploring the latest research in AI ethics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <Brain size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-400 text-sm">Building predictive models that turn data into insights and decisions</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <Database size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
              <p className="text-gray-400 text-sm">Creating scalable data pipelines and warehousing solutions</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <Code size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-gray-400 text-sm">Building maintainable and efficient applications with clean code</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <ChartBar size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-gray-400 text-sm">Creating compelling visual narratives from complex datasets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
