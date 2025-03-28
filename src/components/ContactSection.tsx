
import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-custom-dark">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-300 mb-8">
              Feel free to contact me for collaborations, job opportunities, or just to say hello. 
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-custom-purple/10 rounded-full mr-4">
                  <Mail size={24} className="text-custom-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <a href="mailto:contact@example.com" className="text-gray-400 hover:text-custom-purple transition-colors duration-300">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-custom-purple/10 rounded-full mr-4">
                  <MapPin size={24} className="text-custom-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-gray-400">San Francisco, California</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-custom-purple/10 rounded-full mr-4">
                  <Github size={24} className="text-custom-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">GitHub</h3>
                  <a 
                    href="https://github.com/username" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-custom-purple transition-colors duration-300"
                  >
                    github.com/username
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-custom-purple/10 rounded-full mr-4">
                  <Linkedin size={24} className="text-custom-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/username" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-custom-purple transition-colors duration-300"
                  >
                    linkedin.com/in/username
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-custom-dark-3 rounded-full text-gray-400 hover:text-custom-purple hover:bg-custom-dark-2 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-custom-dark-3 rounded-full text-gray-400 hover:text-custom-purple hover:bg-custom-dark-2 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-custom-dark-3 rounded-full text-gray-400 hover:text-custom-purple hover:bg-custom-dark-2 transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-custom-dark-3 border border-gray-700 text-white focus:outline-none focus:border-custom-purple"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-custom-dark-3 border border-gray-700 text-white focus:outline-none focus:border-custom-purple"
                  placeholder="email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-custom-dark-3 border border-gray-700 text-white focus:outline-none focus:border-custom-purple resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full button-primary flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitError && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
