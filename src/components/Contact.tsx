import { FC } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: FC = () => {
  return (
    <section id="contact" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-portfolio-dark mb-16">Get In Touch</h2>
        
        <div className="flex justify-center">
          <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-portfolio-dark border-b border-gray-200 pb-3 mb-5">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center group">
                    <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-portfolio-primary" />
                    </div>
                    <a
                      href="mailto:dlewis16@ucmerced.edu"
                      className="text-gray-700 text-lg hover:text-portfolio-primary transition-colors underline focus:outline-none focus:ring-2 focus:ring-portfolio-primary rounded"
                    >
                      dlewis16@ucmerced.edu
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-portfolio-primary" />
                    </div>
                    <span className="text-gray-700 text-lg">(714) 724-3057 </span>
                  </div>
                  <div className="flex items-center group">
                    <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-portfolio-primary" />
                    </div>
                    <span className="text-gray-700 text-lg">Vila Park, CA, United States</span>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-portfolio-dark border-b border-gray-200 pb-3 mb-5">
                  Connect With Me
                </h3>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://www.linkedin.com/in/danielewis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all group flex-1"
                  >
                    <Linkedin className="w-6 h-6 text-portfolio-primary mr-3 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium group-hover:text-portfolio-primary transition-colors">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all group flex-1"
                  >
                    <Github className="w-6 h-6 text-portfolio-primary mr-3 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium group-hover:text-portfolio-primary transition-colors">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
