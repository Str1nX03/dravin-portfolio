
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Customer Churn Prediction',
    description: 'A machine learning model to predict customer churn for a telecom company, with 93% accuracy using ensemble methods.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format',
    tags: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas'],
    category: ['Machine Learning', 'Data Science'],
    github: 'https://github.com/username/churn-prediction',
    demo: 'https://example.com/demo1',
  },
  {
    id: 2,
    title: 'Sentiment Analysis API',
    description: 'Real-time sentiment analysis API for social media comments using BERT, deployed with FastAPI and Docker.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format',
    tags: ['PyTorch', 'BERT', 'NLP', 'FastAPI', 'Docker'],
    category: ['NLP', 'API', 'Machine Learning'],
    github: 'https://github.com/username/sentiment-api',
  },
  {
    id: 3,
    title: 'Image Classification Model',
    description: 'A deep learning model for classifying medical images, with a custom CNN architecture optimized for deployment on edge devices.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000&auto=format',
    tags: ['TensorFlow', 'CNN', 'Computer Vision', 'Edge ML'],
    category: ['Computer Vision', 'Machine Learning'],
    github: 'https://github.com/username/medical-image-classifier',
    demo: 'https://example.com/demo2',
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for COVID-19 data analysis, featuring real-time updates and geographic visualizations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format',
    tags: ['D3.js', 'React', 'Python', 'Flask', 'Mapbox'],
    category: ['Data Visualization', 'Web Development'],
    github: 'https://github.com/username/covid-dashboard',
    demo: 'https://example.com/demo3',
  },
  {
    id: 5,
    title: 'Recommendation System',
    description: 'Collaborative filtering recommendation system for an e-commerce platform, increasing user engagement by 27%.',
    image: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=1000&auto=format',
    tags: ['Python', 'Surprise', 'SQL', 'AWS', 'Redis'],
    category: ['Machine Learning', 'Data Science'],
    github: 'https://github.com/username/recommendation-system',
  },
  {
    id: 6,
    title: 'Time Series Forecasting',
    description: 'LSTM-based forecasting model for stock prices, with feature engineering for external economic indicators.',
    image: 'https://images.unsplash.com/photo-1590283603385-c5e24a6751a6?q=80&w=1000&auto=format',
    tags: ['TensorFlow', 'LSTM', 'Time Series', 'Finance'],
    category: ['Deep Learning', 'Time Series'],
    github: 'https://github.com/username/stock-forecasting',
    demo: 'https://example.com/demo4',
  },
];

const categories = [
  'All',
  'Machine Learning',
  'Data Science',
  'Computer Vision',
  'NLP',
  'Deep Learning',
  'Data Visualization',
  'Web Development',
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-custom-dark-2">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-custom-purple text-white'
                  : 'bg-custom-dark-3 text-gray-300 hover:bg-custom-dark-purple/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden group transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 bg-custom-purple/40 ${
                  hoveredProject === project.id ? 'opacity-70' : 'opacity-0'
                } transition-opacity duration-300 z-10`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-custom-dark-3 rounded text-xs text-custom-purple">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-custom-dark-3 rounded text-xs text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-custom-purple transition-colors duration-300 flex items-center"
                  >
                    <Github size={18} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-custom-purple transition-colors duration-300 flex items-center"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}
        
        <div className="text-center mt-10">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="button-outline inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
