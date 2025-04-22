
import { FC } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: FC = () => {
  return (
    <section id="contact" className="py-16 bg-portfolio-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-portfolio-dark mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-portfolio-primary mr-3" />
                <span className="text-gray-700">your.email@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-portfolio-primary mr-3" />
                <span className="text-gray-700">(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-portfolio-primary mr-3" />
                <span className="text-gray-700">Your City, State, Country</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-portfolio-dark mt-8 mb-6">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all">
                <Linkedin className="w-5 h-5 text-portfolio-primary" />
              </a>
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all">
                <Github className="w-5 h-5 text-portfolio-primary" />
              </a>
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all">
                <Twitter className="w-5 h-5 text-portfolio-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-portfolio-dark mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 bg-portfolio-primary text-white rounded-md hover:bg-portfolio-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
