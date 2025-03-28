
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
              Results-driven Machine Learning Engineer with 3 months of experience, skilled in machine learning, 
              deep learning, and hands-on expertise with PyTorch and Scikit-Learn.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Proficient in building AI-powered applications and intelligent agents using Flask and LangChain 
              with passive skills in prompt engineering, integrating automation and real-time interactions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Passionate about developing scalable, high-performance AI solutions to drive efficiency and innovation.
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
              <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
              <p className="text-gray-400 text-sm">Developing AI models that understand and generate human language</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <ChartBar size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
              <p className="text-gray-400 text-sm">Creating sophisticated neural networks for complex AI tasks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
