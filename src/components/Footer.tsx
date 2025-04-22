
import { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-portfolio-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Your Name</h3>
            <p className="text-gray-300">Professional title or brief description</p>
          </div>
          
          <div className="flex space-x-6">
            {/* Social Links - Add your own */}
            <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Email</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
