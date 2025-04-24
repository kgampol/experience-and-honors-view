import { FC, useEffect } from 'react';
import { scrollToSection } from '../utils/scrollUtils';
import { createPortal } from 'react-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Use portal to render outside normal DOM hierarchy
  return createPortal(
    <>
      {/* Semi-transparent overlay */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[9998]" 
        onClick={onClose}
        style={{ pointerEvents: 'auto' }}
      ></div>
      
      {/* Menu content */}
      <div 
        className="fixed inset-0 bg-white z-[9999] flex flex-col" 
        style={{ 
          maxHeight: '100vh',
          pointerEvents: 'auto'
        }}
      >
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-portfolio-dark z-[10000]" 
          onClick={onClose}
          style={{ pointerEvents: 'auto' }}
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Profile and menu items - New fixed layout with absolute positioning */}
        <div className="flex flex-col h-full w-full bg-white pt-20 px-6">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-portfolio-light shadow-md mr-4">
              <img 
                src="/Pics/1716181236423.jpg" 
                alt="Daniel Lewis" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-portfolio-dark leading-none">DANIEL</span>
              <span className="text-4xl font-bold text-portfolio-dark leading-none">LEWIS</span>
            </div>
          </div>
          
          <nav className="flex flex-col space-y-10 text-2xl">
            <a 
              href="#work" 
              className="text-portfolio-dark hover:text-portfolio-primary transition-colors cursor-pointer"
              style={{ pointerEvents: 'auto' }}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => scrollToSection('work'), 100);
              }}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-portfolio-dark hover:text-portfolio-primary transition-colors cursor-pointer"
              style={{ pointerEvents: 'auto' }}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => scrollToSection('projects'), 100);
              }}
            >
              Personal Projects
            </a>
            <a 
              href="#contact" 
              className="text-portfolio-dark hover:text-portfolio-primary transition-colors cursor-pointer"
              style={{ pointerEvents: 'auto' }}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => scrollToSection('contact'), 100);
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>,
    document.body
  );
};

export default MobileMenu;
