
import { FC } from 'react';
import { scrollToSection } from '../utils/scrollUtils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={onClose}></div>
      <div className="fixed top-[60px] right-0 w-64 h-screen bg-white shadow-lg z-50 slide-down">
        <nav className="flex flex-col p-4">
          <a 
            href="#work" 
            className="py-3 px-4 border-b border-gray-100 text-portfolio-dark hover:text-portfolio-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('work');
              onClose();
            }}
          >
            Work Experience
          </a>
          <a 
            href="#teaching" 
            className="py-3 px-4 border-b border-gray-100 text-portfolio-dark hover:text-portfolio-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('teaching');
              onClose();
            }}
          >
            Teaching Experience
          </a>
          <a 
            href="#honors" 
            className="py-3 px-4 border-b border-gray-100 text-portfolio-dark hover:text-portfolio-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('honors');
              onClose();
            }}
          >
            Honors & Awards
          </a>
          <a 
            href="#projects" 
            className="py-3 px-4 border-b border-gray-100 text-portfolio-dark hover:text-portfolio-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
              onClose();
            }}
          >
            Personal Projects
          </a>
          <a 
            href="#contact" 
            className="py-3 px-4 text-portfolio-dark hover:text-portfolio-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
              onClose();
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
