
import React from 'react';
import { Brain, Database, Code, ChartBar, Rocket, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-custom-dark-2 relative overflow-hidden">
      {/* Wavy colored background elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-green-500/10 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-red-500/10 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Results-driven Machine Learning Engineer with 3 months of experience, specializing in developing 
              intelligent solutions that solve real-world problems. My expertise lies in machine learning, deep learning, 
              and natural language processing, with hands-on proficiency in PyTorch and Scikit-Learn.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Throughout my journey, I've focused on building AI-powered applications and intelligent agents using 
              Flask and LangChain. I've developed a strong foundation in prompt engineering, enabling me to create 
              systems that effectively understand and respond to user needs.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach combines technical expertise with creative problem-solving to develop AI solutions 
              that are not only technically sound but also practical and intuitive for end-users.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm particularly passionate about advancing the field of NLP and creating AI systems that can 
              understand and generate human-like text. My goal is to contribute to the development of AI 
              technologies that enhance human capabilities rather than replace them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <Brain size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-400 text-sm">Building predictive models that turn data into insights and decisions</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <Database size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
              <p className="text-gray-400 text-sm">Creating scalable data pipelines and warehousing solutions</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <Code size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
              <p className="text-gray-400 text-sm">Developing AI models that understand and generate human language</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <ChartBar size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
              <p className="text-gray-400 text-sm">Creating sophisticated neural networks for complex AI tasks</p>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <Rocket size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Applications</h3>
              <p className="text-gray-400 text-sm">Building end-to-end AI solutions for practical use cases</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-3 rounded-full bg-custom-purple/10 mb-4">
                <Zap size={28} className="text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prompt Engineering</h3>
              <p className="text-gray-400 text-sm">Crafting effective prompts to enhance AI systems' performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
