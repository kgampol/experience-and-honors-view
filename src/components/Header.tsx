
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { scrollToSection } from "../utils/scrollUtils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-portfolio-dark">Interactive Portfolio</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#work" 
            className="text-portfolio-dark hover:text-portfolio-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('work');
            }}
          >
            Work Experience
          </a>
          <a 
            href="#teaching" 
            className="text-portfolio-dark hover:text-portfolio-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('teaching');
            }}
          >
            Teaching Experience
          </a>
          <a 
            href="#honors" 
            className="text-portfolio-dark hover:text-portfolio-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('honors');
            }}
          >
            Honors & Awards
          </a>
          <a 
            href="#projects" 
            className="text-portfolio-dark hover:text-portfolio-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Personal Projects
          </a>
          <a 
            href="#contact" 
            className="text-portfolio-dark hover:text-portfolio-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </nav>
        
        {/* Hamburger Menu */}
        <button 
          className={`md:hidden flex flex-col justify-center items-center space-y-1.5 focus:outline-none ${mobileMenuOpen ? 'hamburger-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
