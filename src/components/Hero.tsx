import { FC } from 'react';
import { scrollToSection } from '../utils/scrollUtils';

const Hero: FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 section-fade-in text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-dark">
              Whatsgood, I'm <span className="inline-block text-portfolio-highlight animate-bounce-custom">Daniel Lewis</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Incoming Lockheed Martin Electromechanical Engineer
            </p>
            <p className="text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Did you know I am making 100k a year?
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="/DLewisCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-portfolio-primary text-white rounded-md hover:bg-portfolio-secondary transition-colors"
              >
                View CV
              </a>
              <a 
                href="#contact" 
                className="px-6 py-2 border border-portfolio-primary text-portfolio-primary rounded-md hover:bg-portfolio-primary hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center section-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-light shadow-xl">
              {/* Replace with your photo */}
              <img 
                src="/Pics/1716181236423.jpg" 
                alt="Your Name" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
