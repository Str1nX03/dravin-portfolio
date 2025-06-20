
import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use FormSubmit.co service to send the email without backend
      const response = await fetch('https://formsubmit.co/ajax/dravin.ksharma@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you! I'll get back to you soon.",
          variant: "default",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-custom-dark relative overflow-hidden">
      {/* Add wavy effects for this section */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-red-500/10 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-40 left-20 w-60 h-60 bg-blue-500/10 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      
      <div className="section-container relative z-10">
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
                  <a href="mailto:dravin.ksharma@gmail.com" className="text-gray-400 hover:text-custom-purple transition-colors duration-300">
                    dravin.ksharma@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-custom-purple/10 rounded-full mr-4">
                  <MapPin size={24} className="text-custom-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-gray-400">Bhilai, Chhattisgarh, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-custom-purple/10 rounded-full mr-4">
                  <Github size={24} className="text-custom-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">GitHub</h3>
                  <a 
                    href="https://github.com/Str1nX03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-custom-purple transition-colors duration-300"
                  >
                    github.com/Str1nX03
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
                    href="https://www.linkedin.com/in/dravin-kumar-sharma-b495341b5/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-custom-purple transition-colors duration-300"
                  >
                    linkedin.com/in/dravin-kumar-sharma-b495341b5/
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Str1nX03" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-custom-dark-3 rounded-full text-gray-400 hover:text-custom-purple hover:bg-custom-dark-2 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/dravin-kumar-sharma-b495341b5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-custom-dark-3 rounded-full text-gray-400 hover:text-custom-purple hover:bg-custom-dark-2 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 hover:shadow-lg hover:shadow-custom-purple/20 transition-all duration-300">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
